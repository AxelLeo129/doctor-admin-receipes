<style>
    #table-search {
        margin-top: -65px;
    }

    @media only screen and (max-width:600px) {
        #table-search {
            margin-top: 0px;
        }

    }

</style>
<template>
    <div class="">
        <h4>Tus pedidos</h4>
        <br>
        <vs-table id="table-search" max-items="10" search pagination :data="users">

            <template slot="thead">
                <vs-th>ID</vs-th>
                <vs-th>Cliente</vs-th>
                <vs-th>Teléfono</vs-th>
                <vs-th>Dirección</vs-th>
                <vs-th>Estatus</vs-th>
                <vs-th>Fecha/Hora de entrega</vs-th>
                <vs-th>Acciones</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].cliente.client_id">
                        {{ data[indextr].cliente.id }}
                    </vs-td>

                    <vs-td :data="data[indextr].cliente.client_name">
                        {{ data[indextr].cliente.client_name }}
                    </vs-td>

                    <vs-td :data="data[indextr].cliente.client_phone">
                        {{ data[indextr].cliente.client_phone }}
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.client_addresse.length > 25"
                        :data="data[indextr].cliente.client_addresse">
                        {{ data[indextr].cliente.client_addresse.substring(0,25) + "..." }}
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.client_addresse.length <= 25"
                        :data="data[indextr].cliente.client_addresse">
                        {{ data[indextr].cliente.client_addresse.substring(0,25) }}
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

                    <vs-td v-if="data[indextr].cliente.status == 5">
                        <i class="feather icon-x-circle text-danger"></i>
                    </vs-td>

                    <vs-td :data="data[indextr].cliente.delivery_date">
                        {{ data[indextr].cliente.delivery_date }}
                    </vs-td>

                    <vs-td>
                        <vs-button style="float:left;" size="small"
                            @click="popupActive=true, setData(data[indextr].medicamentos, data[indextr].cliente.client_addresse)"
                            radius color="warning" type="filled" icon-pack="feather" icon="icon-eye"></vs-button>
                        <div style="float:right;" v-if="data[indextr].cliente.status == 2">
                            <vs-button size="small"
                                @click="popupEnvio=true, setClient(data[indextr].cliente.order_id, data[indextr].cliente.client_name)"
                                radius color="primary" type="filled" icon-pack="feather" icon="icon-truck"></vs-button>
                        </div>
                        <div style="float:right;" v-if="data[indextr].cliente.status == 3">
                            <vs-button size="small"
                                @click="popupEntrega=true, setConfirm(data[indextr].cliente.order_id, data[indextr].cliente.recipe_id)"
                                radius color="success" type="filled" icon-pack="feather" icon="icon-check-circle">
                            </vs-button>
                        </div>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
        <!--PopUp para ver la receta que tiene el cliente-->
        <vs-popup class="holamundo" fullscreen title="Ver información del Pedido" :active.sync="popupActive">
            <p>Medicamentos ordenados:</p><br>
            <vs-table v-model="selected" max-items="10" :data="recipie">

                <template slot="thead">
                    <vs-th>Nombre del producto</vs-th>
                    <vs-th>Descripción</vs-th>
                    <vs-th>Presentación</vs-th>
                    <vs-th>Laboratorio</vs-th>
                    <vs-th>Almacén</vs-th>
                    <vs-th>Cantidad</vs-th>
                    <vs-th>Precio</vs-th>
                    <vs-th>Subtotal</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(tr, indextr) in recipie">

                        <vs-td :data="data[indextr].name">
                            {{ data[indextr].name }}
                        </vs-td>

                        <vs-td :data="data[indextr].description">
                            {{ data[indextr].description }}
                        </vs-td>

                        <vs-td :data="data[indextr].preName">
                            {{ data[indextr].preName }} - {{data[indextr].unidad}} - {{data[indextr].preCantidad}}
                        </vs-td>

                        <vs-td :data="data[indextr].labName">
                            {{ data[indextr].labName }}
                        </vs-td>

                        <vs-td :data="data[indextr].warehouse">
                            {{ data[indextr].warehouse }}
                        </vs-td>

                        <vs-td :data="data[indextr].cantidad">
                            {{ data[indextr].cantidad }}
                        </vs-td>

                        <vs-td :data="data[indextr].price">
                            Q {{ data[indextr].price || numFormat('000,000.00') }}
                        </vs-td>

                        <vs-td :data="data[indextr].cantidad">
                            Q {{ data[indextr].price * data[indextr].cantidad || numFormat('000,000.00')}}
                        </vs-td>

                    </vs-tr>
                </template>
            </vs-table>
            <br>
            <p>Dirección exacta:</p>
            <p v-if="address == ''"><strong>No se adjuntó la dirección</strong></p>
            <p><strong>{{address}}</strong></p>
        </vs-popup>

        <!--PopUp para realizar el envío del cliente-->
        <vs-popup class="holamundo" title="Confirmar envío" :active.sync="popupEnvio">
            <strong>Confirma el envío de entrega al cliente: {{name_client}}</strong><br><br>
            <p>Verifica que todo está en órden y si hay suficientes medicamentos</p><br>
            <vs-button color="success" type="filled" @click="inprogress(id_recipies)">Confirmar envío
            </vs-button>
        </vs-popup>

        <!--PopUp para realizar envíos multiples a un mensajero-->
        <vs-popup class="holamundo" title="Confirmar entrega" :active.sync="popupEntrega">
            <p>Escriba su nombre de recibido:</p>
            <div class="vx-row">
                <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">

                </div>
                <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                    <div align="right">
                        <vs-checkbox v-model="status">No se pudo entregar</vs-checkbox>
                    </div>
                </div>
            </div>
            <div class="vx-row mb-2">
                <div class="vx-col w-full">
                    <vs-input v-model="nombre_confirmacion" class="w-full" label-placeholder="Nombre de recibido" />
                    <span class="text-danger" v-if="status == false && nombre_confirmacion == ''">Este campo es
                        requerido</span>
                </div>
            </div>
            <div class="vx-row mb-2">
                <div class="vx-col w-full">
                    <vs-textarea v-model="observations" class="w-full" label="Observaciones" />
                </div>
            </div>
            <br>
            <br><br>
            <vs-button color="success" type="filled" @click="completarPedido()" v-if="status == false"
                :disabled="nombre_confirmacion == '' || nombre_confirmacion == null">Completar pedido
            </vs-button>
            <vs-button color="success" type="filled" @click="completarPedido()" v-if="status == true">Completar pedido
            </vs-button>
        </vs-popup>
    </div>
</template>

<script>
    import axios from "axios";
    import vSelect from "vue-select";

    export default {
        components: {
            vSelect
        },
        methods: {
            getusers() {
                this.openLoading();
                this.users = [];
                let token = localStorage.getItem("tu");
                let id = localStorage.getItem("ui");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/my-orderds/" + id,
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        console.log(Response.data);
                        Response.data.forEach(element => {
                            element.cliente.client_addresse = (element.cliente.callee + ' ' + element
                                .cliente.apartamentoe + ' ' + element.cliente.residenciae + ' zona ' +
                                element.cliente.codigoe + ' ' + element.cliente.municipioe + ' ' +
                                element.cliente.depare + ' ' + element.cliente.paise);
                            this.users.push(element);
                        });
                        //console.log(this.users);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        localStorage.removeItem("tu");
                        localStorage.removeItem("ru");
                        localStorage.removeItem("ui");
                        localStorage.removeItem("regi");
                        localStorage.removeItem("nuevaRecetaData");
                        this.$router.push("/");
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
                                label: element.name,
                                value: element.id
                            });
                        });
                        //console.log(this.deliveryP);
                    })
                    .catch(err => {
                        console.log(err);
                    });

            },
            setClient(id_recipies, name) {
                this.id_recipies = id_recipies;
                this.name_client = name;
            },
            setData(recipie, address) {
                this.recipie = recipie;
                this.address = address;
                console.log(this.id_recipies);
            },
            openLoading() {
                this.activeLoading = true;
                this.$vs.loading({
                    type: "default"
                });
            },
            inprogress(id_receta) {
                let token = localStorage.getItem("tu");
                let idu = localStorage.getItem("ui");
                this.openLoading();
                console.log(this.id_recipies);
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
                            color: "success",
                            iconPack: 'feather',
                            icon: 'icon-check'
                        });
                    })
                    .catch(err => {
                        this.popupEnvio = false;
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        console.log(err);
                    });
            },
            setConfirm(id, recipe_id) {
                this.id_order = id;
                this.recipe_id = recipe_id;
            },
            completarPedido() {
                this.openLoading();
                if (this.status == true) {
                    this.status = 5;
                } else {
                    this.status = 4;
                }
                let token = localStorage.getItem("tu");
                let idu = localStorage.getItem("ui");
                axios({
                        method: "post",
                        url: "http://127.0.0.1:8000/api/confirm-delivery",
                        data: JSON.stringify({
                            id_recipies: this.id_order,
                            name_recibed: this.nombre_confirmacion,
                            observations: this.observations,
                            status: this.status
                        }),
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        if (this.recipe_id != null || this.recipe_id != undefined || this.status == 4) {
                            axios({
                                    method: "put",
                                    url: "http://127.0.0.1:8000/api/changeStatus1",
                                    data: JSON.stringify({
                                        id: this.recipe_id,
                                        status: 4,
                                        receiver: this.nombre_confirmacion
                                    }),
                                    headers: {
                                        authorization: "Bearer " + token,
                                        "content-type": "application/json"
                                    }
                                })
                                .then(Response => {
                                    this.activeLoading = false;
                                    this.$vs.loading.close();
                                    this.popupEntrega = false;
                                    this.getusers();
                                    this.nombre_confirmacion = null;
                                    this.observations = null;
                                    this.status = false;
                                    this.$vs.notify({
                                        title: "Entrega completada",
                                        text: "Felicidades, completaste tu entrega",
                                        color: "success",
                                        iconPack: 'feather',
                                        icon: 'icon-check'
                                    });
                                })
                                .catch(err => {
                                    this.activeLoading = false;
                                    this.$vs.loading.close();
                                    console.log(err);
                                });
                        } else {
                            this.activeLoading = false;
                            this.$vs.loading.close();
                            this.popupEntrega = false;
                            this.getusers();
                            this.nombre_confirmacion = null;
                            this.observations = null;
                            this.status = false;
                            this.$vs.notify({
                                title: "Entrega completada",
                                text: "Felicidades, completaste tu entrega",
                                color: "success",
                                iconPack: 'feather',
                                icon: 'icon-check'
                            });
                        }
                    })
                    .catch(err => {
                        this.popupEntrega = false;
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
            popupEntrega: false,
            select: null,
            nombre_confirmacion: null,
            observations: null,
            status: false,
            recipe_id: null,
            id_recipies: 0,
            id_order: 0,
            name_client: "",
            address: "",
            errors: [],
            errorsEM: [],
            selected: []
        }),
        created() {
            this.getusers()
        }
    }

</script>
