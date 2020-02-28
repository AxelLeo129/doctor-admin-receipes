<style>
    .table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    .td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    .tr:nth-child(even) {
        background-color: #dddddd;
    }

    #table-search {
        margin-top: -55px;
    }

    @media only screen and (max-width:600px) {
        #table-search {
            margin-top: 0px;
        }

        #btn-envio {
            float: left;
            margin-top: 10px;
        }

    }

</style>
<template>


    <div>
        <h4>Información de los pedidos</h4>
        <p>Seleccione más de un registro para hacer un envío múltiple.</p>
        <br>
        <!-- <vs-button id="btn-envio" @click="popupEnvioMultiple=true" v-if="Object.keys(this.selected).length >= 2"
            color="primary" type="filled" icon-pack="feather" icon="icon-truck" icon-after>Enviar pedidos</vs-button> -->
        <vs-table id="table-search" v-model="selected" max-items="10" search pagination :data="users">

            <template slot="thead">
                <vs-th>ID</vs-th>
                <vs-th>Cliente</vs-th>
                <vs-th>Teléfono</vs-th>
                <vs-th>Dirección</vs-th>
                <vs-th>Acciones</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].cliente.id">
                        {{ data[indextr].cliente.id }}
                    </vs-td>

                    <vs-td :data="data[indextr].cliente.client_name">
                        {{ data[indextr].cliente.client_name }}
                    </vs-td>

                    <vs-td :data="data[indextr].cliente.client_phone">
                        {{ data[indextr].cliente.client_phone }}
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.client_addresse.length > 30"
                        :data="data[indextr].cliente.client_addresse">
                        {{ data[indextr].cliente.client_addresse.substring(0,25) + "..." }}
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.client_addresse.length <= 30"
                        :data="data[indextr].cliente.client_addresse">
                        {{ data[indextr].cliente.client_addresse.substring(0,25) }}
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.status == 1">
                        Nuevo
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.status == 2">
                        Empaquetando
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.status == 3">
                        Entregando
                    </vs-td>

                    <vs-td v-if="data[indextr].cliente.status == 4">
                        Entregado
                    </vs-td>

                    <vs-td>
                        <span style="float:left;">
                            <vs-button size="small"
                                @click="popupActive=true, setData(data[indextr].cliente.order_id, data[indextr].medicamentos, data[indextr].cliente.client_addresse, data[indextr].cliente.client_nit, data[indextr].cliente.client_name, data[indextr].cliente.total)"
                                color="primary" type="filled">Facturar</vs-button>
                        </span>
                        <!-- <span style="float:right;">
                            <div v-if="data[indextr].cliente.status == 1">
                                <vs-button size="small" @click="popupEnvio=true, setClient(data[indextr].cliente.order_id)" radius color="primary" type="filled" icon-pack="feather" icon="icon-truck"></vs-button>
                            </div>
                            <div v-else>
                                <vs-button disabled size="small" @click="popupEnvio=true, setClient(data[indextr].cliente.order_id)" radius color="primary" type="filled" icon-pack="feather" icon="icon-truck"></vs-button>
                            </div>
                        </span> -->
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
        <!--PopUp para ver la receta que tiene el cliente-->
        <vs-popup class="holamundo" fullscreen title="Información del Pedido" :active.sync="popupActive">
            <p>Medicamentos Pedidos:</p><br>
            <vs-table v-model="selected" max-items="10" :data="recipie">

                <template slot="thead">
                    <vs-th>Nombre del producto</vs-th>
                    <vs-th>Descripción</vs-th>
                    <vs-th>Presentación</vs-th>
                    <vs-th>Laboratorio</vs-th>
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
            <p>Dirección de Facturación:</p>
            <p v-if="address == ''"><strong>No se adjuntó la dirección</strong></p>
            <p><strong>{{this.address}}</strong></p>
            <br>
            <table class="table">
                <tr class="tr">
                    <th class="td">Nit</th>
                    <th class="td">Nombre</th>
                    <th class="td">Total a Pagar</th>
                </tr>

                <tr class="tr">

                    <td class="td">
                        {{ nit }}
                    </td>

                    <td class="td">
                        {{ nombre }}
                    </td>

                    <td class="td">
                        {{ total }}
                    </td>

                </tr>

            </table>
            <vx-card>
                <div class="vx-row">
                    <vs-input label="No. Factura" type="number" class="w-full" v-model="noInvoice" />
                    <span class="text-danger text-sm" v-show="noInvoice === ''">Este campo es requerido.</span>
                    <vs-input class="w-full" label="Fecha Factura" type="date" v-model="dateInvoice" />
                    <span class="text-danger text-sm" v-show="dateInvoice === ''">Este campo es requerido.</span>
                </div>
                <div class="vx-row">
                    <vs-button class="mt-5" color="primary" type="filled" @click="update"
                        :disabled="noInvoice == null || noInvoice == '' || dateInvoice == null || dateInvoice == ''">
                        Guardar Datos Facturación</vs-button>
                </div>
            </vx-card>
        </vs-popup>

        <!--PopUp para realizar el envío del cliente-->
        <vs-popup class="holamundo" title="Configurar envío" :active.sync="popupEnvio">
            <p>Seleccionar al encargado del envío:</p><br>
            <p v-if="errors.length">
                <ul>
                    <li class="text-danger" v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
            </p>
            <v-select :closeOnSelect="true" v-model="select" :options="deliveryP" :required="!select"
                :dir="$vs.rtl ? 'rtl' : 'ltr'" />
            <br><br><br><br>
            <vs-button color="success" type="filled" @click="inprogress(id_recipies)">Realizar envío
            </vs-button>
        </vs-popup>

        <!--PopUp para realizar envíos multiples a un mensajero-->
        <vs-popup class="holamundo" title="Configurar envío" :active.sync="popupEnvioMultiple">
            <p>Seleccionar al encargado para los envíos:</p><br>
            <p v-if="errorsEM.length">
                <ul>
                    <li class="text-danger" v-for="error in errorsEM" v-bind:key="error">{{ error }}</li>
                </ul>
            </p>
            <v-select :closeOnSelect="true" v-model="mensajeroEM" :options="deliveryP" :required="!mensajeroEM"
                :dir="$vs.rtl ? 'rtl' : 'ltr'" />
            <br>
            <p>Si el envío previamente ya se realizó, no se tomará en cuenta.</p>
            <br><br><br><br>
            <vs-button color="success" type="filled" @click="realizarEM()">Realizar envío
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
            update() {
                this.openLoading();
                let token = localStorage.getItem("tu");
                let ui = localStorage.getItem("ui");
                this.order_id = parseInt(this.order_id);
                axios({
                        method: "post",
                        url: "http://127.0.0.1:8000/api/putOrder",
                        data: JSON.stringify({
                            nit: this.nit,
                            noInvoice: this.noInvoice,
                            dateInvoice: this.dateInvoice,
                            status: 1,
                            facturador_id: ui,
                            order_id: this.order_id
                        }),
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        this.noInvoice = null;
                        this.dateInvoice = null;
                        this.popupActive = false;
                        this.getusers();
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        this.$vs.notify({
                            title: "Guardado",
                            text: "Factura guardada exitosamente.",
                            color: "success"
                        });
                    })
                    .catch(err => {
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        //activado = true;
                        console.log(err);
                    });
            },
            getusers() {
                this.users = [];
                let token = localStorage.getItem("tu");
                let id = localStorage.getItem("ui");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getClientess",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        console.log(Response);
                        Response.data.forEach(element => {
                            element.cliente.client_addresse = (element.cliente.callef + ' ' + element
                                .cliente.apartamentof + ' ' + element.cliente.residenciaf + ' zona ' +
                                element.cliente.codigof + ' ' + element.cliente.municipiof + ' ' +
                                element.cliente.deparf + ' ' + element.cliente.paisf);
                            this.users.push(element);
                        });
                        //console.log("USUARIO");
                        //console.log(this.users);
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
            setData(order_id, recipie, address, nit, nombre, total) {
                this.recipie = recipie;
                this.address = address;
                this.nit = nit;
                this.nombre = nombre;
                this.total = total;
                this.order_id = order_id;
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
                if (this.select == null) {
                    this.errors.push('Debe de seleccionar un mensajero');
                    this.activeLoading = false;
                    this.$vs.loading.close();
                } else {
                    this.openLoading();
                    axios({
                            method: "post",
                            url: "http://127.0.0.1:8000/api/postShipping",
                            data: JSON.stringify({
                                id_recipies: id_receta,
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
                                text: "El pedido del cliente ahora está en proceso de envío.",
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
            setClient(id) {
                this.id_recipies = id;
            },
            realizarEM() {
                if (this.mensajeroEM == null) {
                    this.errorsEM.push('Debe de seleccionar un mensajero');
                    this.activeLoading = false;
                    this.$vs.loading.close();
                } else {
                    this.openLoading();
                    for (var i = 0; i <= (Object.keys(this.selected).length - 1); i++) {
                        console.log("Objeto No:" + i);
                        this.crearPedido(this.selected[i].cliente.order_id);
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
            crearPedido(id_receta) {
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
            format(input) {
                var num = input.value.replace(/\./g, '');
                if (!isNaN(num)) {
                    num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
                    num = num.split('').reverse().join('').replace(/^[\.]/, '');
                    input.value = num;
                } else {
                    alert('Solo se permiten numeros');
                    input.value = input.value.replace(/[^\d\.]*/g, '');
                }
            }
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
            id_recipies: 0,
            address: "",
            nit: null,
            nombre: null,
            total: null,
            noInvoice: null,
            dateInvoice: null,
            order_id: null,
            errors: [],
            errorsEM: [],
            selected: []
        }),
        created() {
            this.getusers()
        }
    }

</script>
