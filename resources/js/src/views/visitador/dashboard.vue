<template>
    <div class="">
        <h4>Información de los pedidos</h4><p>Seleccione más de un registro para hacer un envío múltiple.</p>
        <br>
        <vs-button @click="popupEnvioMultiple=true" v-if="Object.keys(this.selected).length >= 2" color="primary" type="filled" icon-pack="feather" icon="icon-truck" icon-after>Enviar pedidos</vs-button>
        <vs-table  multiple v-model="selected" max-items="10" search  pagination :data="users">

            <template slot="thead">
                <vs-th>ID</vs-th>
                <vs-th>Paciente</vs-th>
                <vs-th>Teléfono</vs-th>
                <vs-th>Dirección</vs-th>
                <vs-th>Estatus</vs-th>
                <vs-th>Acciones</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].cliente.client_id">
                        {{ data[indextr].cliente.client_id }}
                    </vs-td>

                    <vs-td :data="data[indextr].cliente.client_name">
                        {{ data[indextr].cliente.client_name }}
                    </vs-td>

                    <vs-td :data="data[indextr].cliente.client_phone">
                        {{ data[indextr].cliente.client_phone }}
                    </vs-td>

                    <vs-td :data="data[indextr].cliente.client_addressf">
                        {{ data[indextr].cliente.client_addressf }}
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.status == 1">
                        No asignado
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.status == 2">
                        Asignado
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.status == 3">
                        En entrega
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.status == 4">
                        Entregado
                    </vs-td>

                    <vs-td>
                        <div class="row">
                            <vs-button size="small" @click="popupActive=true, setData(data[indextr].medicamentos)" radius color="warning" type="filled" icon-pack="feather" icon="icon-eye"></vs-button>
                            <div v-if="data[indextr].cliente.status == 1">
                                <vs-button size="small" @click="popupEnvio=true, setClient(data[indextr].cliente.id_recipies)" radius color="primary" type="filled" icon-pack="feather" icon="icon-truck"></vs-button>
                            </div>
                            <div v-else>
                                <vs-button disabled size="small" @click="popupEnvio=true, setClient(data[indextr].cliente.id_recipies)" radius color="primary" type="filled" icon-pack="feather" icon="icon-truck"></vs-button>
                            </div>
                        </div>
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>
        <!--PopUp para ver la receta que tiene el cliente-->
        <vs-popup class="holamundo" title="Ver información de la receta" :active.sync="popupActive">
            <p>Medicamentos recetados:</p><br>
            <div v-for="item in recipie">
                <p>
                    <strong>{{item.name}}</strong>
                    ({{item.dispensing}})
                </p>
            </div>
        </vs-popup>

        <!--PopUp para realizar el envío del cliente-->
        <vs-popup class="holamundo" title="Configurar envío" :active.sync="popupEnvio">
            <p>Seleccionar al encargado del envío:</p><br>
                <p v-if="errors.length">
                    <ul>
                    <li class="color:danger" v-for="error in errors">{{ error }}</li>
                    </ul>
                </p>
            <v-select
              :closeOnSelect="true"
              v-model="select"
              :options="deliveryP"
              :required="!select"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
            />
            <br><br><br><br>
            <vs-button
                color="success"
                type="filled"
                @click="inprogress(id_recipies)"
                >Realizar envío
            </vs-button>
        </vs-popup>

        <!--PopUp para realizar envíos multiples a un mensajero-->
        <vs-popup class="holamundo" title="Configurar envío" :active.sync="popupEnvioMultiple">
            <p>Seleccionar al encargado para los envíos:</p><br>
                <p v-if="errorsEM.length">
                    <ul>
                    <li class="color:danger" v-for="error in errorsEM">{{ error }}</li>
                    </ul>
                </p>
            <v-select
              :closeOnSelect="true"
              v-model="mensajeroEM"
              :options="deliveryP"
              :required="!mensajeroEM"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
            />
            <br>
            <p>Si el envío previamente ya se realizó, no se tomará en cuenta.</p>
            <br><br><br><br>
            <vs-button
                color="success"
                type="filled"
                @click="realizarEM()"
                >Realizar envío
            </vs-button>
        </vs-popup>
    </div>
</template>

<script>
    import axios from "axios";
    import vSelect from "vue-select";

    export default {
        components:{
            vSelect
        },
        methods: {
            getusers(){
                this.users = [];
                let token = localStorage.getItem("tu");
                let id = localStorage.getItem("ui");
                axios({
                    method: "get",
                    url: "http://127.0.0.1:8000/api/getCliente",
                    headers: {
                    authorization: "Bearer " + token,
                    "content-type": "application/json"
                }
                })
                .then(Response => {
                    Response.data.forEach(element => {
                    this.users.push(element);
                });
                    console.log(this.users);
                })
                .catch(err => {
                    console.log(err);
                });

                axios({
                    method: "get",
                    url: "http://127.0.0.1:8000/api/getDelivery",
                    headers: {
                    authorization: "Bearer " + token,
                    "content-type": "application/json"
                }
                })
                .then(Response => {
                    Response.data.forEach(element => {
                    this.deliveryP.push({
                        label:element.name,
                        value:element.id
                    });
                });
                    console.log(this.deliveryP);
                })
                .catch(err => {
                    console.log(err);
                });

            },
            setData(recipie) {
                this.recipie = recipie;
                console.log("Receta");
                console.log(this.recipie);
            },
            openLoading() {
                this.activeLoading = true;
                this.$vs.loading({
                    type: "default"
                });
            },
            inprogress(id_receta){
                let token = localStorage.getItem("tu");
                let idu = localStorage.getItem("ui");
                if(this.select == null){
                    this.errors.push('Debe de seleccionar un mensajero');
                    this.activeLoading = false;
                    this.$vs.loading.close();
                }else{  
                    this.openLoading();
                    axios({
                        method: "post",
                        url: "http://127.0.0.1:8000/api/postShipping",
                        data: JSON.stringify({
                        id_recipies: this.id_recipies,
                        delivery: this.select.value
                            }),
                            headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        this.popupEnvio = false;
                        this.getusers();
                        this.$vs.notify({
                            title: "En proceso",
                            text: "La receta del cliente ahora está en proceso de envío.",
                            color: "success"
                        });
                        })
                    .catch(err => {
                        this.popupEnvio = false;
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        console.log(err);
                    });
                }
            },
            setClient(id){
                this.id_recipies = id;
            },
            realizarEM(){
                if(this.mensajeroEM == null){
                    this.errorsEM.push('Debe de seleccionar un mensajero');
                    this.activeLoading = false;
                    this.$vs.loading.close();
                }else{
                    this.openLoading();
                    for(var i =0; i<=(Object.keys(this.selected).length -1);i++){
                        console.log("Objeto No:"+i);
                        this.crearPedido(this.selected[i].cliente.id_recipies);
                    }
                    
                    this.getusers();
                    
                    this.activeLoading = false;
                    this.$vs.loading.close();
                    this.popupEnvioMultiple = false;
                    this.$vs.notify({
                        title: "En proceso",
                        text: "Se realizaron los pedidos correctamente.",
                        color: "success"
                    });
                }
            },
            crearPedido(id_receta){
                let token = localStorage.getItem("tu");
                let idu = localStorage.getItem("ui");
                axios({
                    method: "post",
                    url: "http://127.0.0.1:8000/api/postShipping",
                    data: JSON.stringify({
                    id_recipies: id_receta,
                    delivery: this.mensajeroEM.value
                        }),
                        headers: {
                        authorization: "Bearer " + token,
                        "content-type": "application/json"
                    }
                })
                .then(Response => {
                    this.activeLoading = false;
                    this.$vs.loading.close();
                    this.popupEnvio = false;
                    })
                .catch(err => {
                    this.popupEnvio = false;
                    this.activeLoading = false;
                    this.$vs.loading.close();
                    console.log(err);
                });
            },
        },
        data: () => ({
            users: [],
            recipie: [],
            deliveryP: [],
            popupActive: false,
            popupEnvio: false,
            popupEnvioMultiple: false,
            select: null,
            mensajeroEM: null,
            id_recipies : 0,
            errors: [],
            errorsEM: [],
            selected: []
        }),
        created(){this.getusers()}
    }
</script>

 
