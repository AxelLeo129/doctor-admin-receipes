<template>
    <div class="">
        <h4>Tus pedidos</h4>
        <br>
        <vs-table max-items="10" search pagination :data="users">

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
                        <i class="feather icon-clock text-primary"></i>
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.status == 2">
                        <i class="feather icon-clock text-primary"></i>
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.status == 3">
                        <i class="feather icon-truck text-warning"></i>
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.status == 4">
                        <i class="feather icon-check-circle text-success"></i>
                    </vs-td>

                    <vs-td>
                        <div class="row">
                            <vs-button size="small" @click="popupActive=true, setData(data[indextr].medicamentos)" radius color="warning" type="filled" icon-pack="feather" icon="icon-eye"></vs-button>
                            <div v-if="data[indextr].cliente.status == 2">
                                <vs-button size="small" @click="popupEnvio=true, setClient(data[indextr].cliente.id_recipies, data[indextr].cliente.client_name)" radius color="primary" type="filled" icon-pack="feather" icon="icon-truck"></vs-button>
                            </div>
                            <div v-if="data[indextr].cliente.status == 3">
                                <vs-button size="small" @click="popupEntrega=true, setConfirm(data[indextr].cliente.id_recipies)" radius color="success" type="filled" icon-pack="feather" icon="icon-check-circle"></vs-button>
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
                    <strong>- {{item.name}}</strong>
                    ({{item.dispensing}})
                </p>
            </div>
        </vs-popup>

        <!--PopUp para realizar el envío del cliente-->
        <vs-popup class="holamundo" title="Confirmar envío" :active.sync="popupEnvio">
            <strong>Confirma el envío de entrega al cliente: {{name_client}}</strong><br><br>
            <p>Verifica que todo está en órden y si hay suficientes medicamentos</p><br>
            <vs-button
                color="success"
                type="filled"
                @click="inprogress(id_recipies)"
                >Confirmar envío
            </vs-button>
        </vs-popup>

        <!--PopUp para realizar envíos multiples a un mensajero-->
        <vs-popup class="holamundo" title="Confirmar entrega" :active.sync="popupEntrega">
            <p>Escriba su nombre de recibido:</p><br>
            <p v-if="errorsEM.length">
                <ul>
                <li class="text-danger" v-for="error in errorsEM">{{ error }}</li>
                </ul>
            </p>
            <div class="vx-row mb-2">
                <div class="vx-col w-full">
                    <vs-input v-model="nombre_confirmacion" class="w-full" label-placeholder="Nombre de recibido"  />
                </div>
            </div>
            <br>
            <br><br>
            <vs-button
                color="success"
                type="filled"
                @click="completarPedido()"
                >Completar pedido
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
                    url: "http://127.0.0.1:8000/api/my-orderds/"+id,
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
                this.openLoading();
                axios({
                    method: "post",
                    url: "http://127.0.0.1:8000/api/confirm-order",
                    data: JSON.stringify({
                    id_recipies: this.id_recipies
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
                        title: "En camino",
                        text: "Cambiaste el estado de asignado a en camino",
                        color: "success"
                    });
                    })
                .catch(err => {
                    this.popupEnvio = false;
                    this.activeLoading = false;
                    this.$vs.loading.close();
                    console.log(err);
                });
            },
            setConfirm(id){
                this.id_recipies = id;
            },
            completarPedido(){
                if(this.nombre_confirmacion == ""){
                    this.errorsEM.push('Debe de escribirse el nombre de recibido');
                    this.activeLoading = false;
                    this.$vs.loading.close();
                }else{
                    let token = localStorage.getItem("tu");
                    let idu = localStorage.getItem("ui");
                    this.openLoading();
                    axios({
                        method: "post",
                        url: "http://127.0.0.1:8000/api/confirm-delivery",
                        data: JSON.stringify({
                        id_recipies: this.id_recipies,
                        name_recibed:this.nombre_confirmacion
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
                            title: "Entrega completada",
                            text: "Felicidades, completaste tu entrega",
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
        },
        data: () => ({
            users: [],
            recipie: [],
            deliveryP: [],
            popupActive: false,
            popupEnvio: false,
            popupEntrega: false,
            select: null,
            nombre_confirmacion: "",
            id_recipies : 0,
            name_client : "",
            errors: [],
            errorsEM: [],
            selected: []
        }),
        created(){this.getusers()}
    }
</script>

 
