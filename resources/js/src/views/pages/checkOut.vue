<!-- =========================================================================================
	File Name: ECommerceCheckout.vue
	Description: eCommerce Checkout page
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div>
        <div align="center" v-if="registro == 1">
            <ul class="timeline mt-5" id="timeline">
                <li class="li complete">
                    <div class="status">
                        <h4 class="mt-5">Paso 1</h4>
                    </div>
                </li>
                <li class="li complete">
                    <div class="status">
                        <h4 class="mt-5">Paso 2</h4>
                    </div>
                </li>
                <li class="li complete">
                    <div class="status">
                        <h4 class="mt-5">Paso 3</h4>
                    </div>
                </li>
                <li class="li">
                    <div class="status">
                        <h4 class="mt-5">Paso 4</h4>
                    </div>
                </li>
            </ul>
        </div>
        <div align="center" v-else>
            <ul class="timeline mt-5" id="timeline">
                <li class="li complete">
                    <div class="status">
                        <h4 class="mt-5">Paso 1</h4>
                    </div>
                </li>
                <li class="li complete">
                    <div class="status">
                        <h4 class="mt-5">Paso 2</h4>
                    </div>
                </li>
                <li class="li complete">
                    <div class="status">
                        <h4 class="mt-5">Paso 3</h4>
                    </div>
                </li>
            </ul>
        </div>
        <!-- IF CART HAVE ITEMS -->
        <div class="vx-row">
            <!-- LEFT COL -->
            <div class="vx-col lg:w-2/3 w-full relative">
                <div class="items-list-view">
                    <vx-card v-for="(item, index) in nuevaRecetaData.medicamentos" :key="item.id" style="height: 14rem;"
                        class="mt-5">
                        <div class="vx-row">
                            <div class="vx-col md:w-1/2 w-full">
                                <img class="h-48 w-48" alt="image"
                                    :src="'https://pharmazone.app/images/productos/' + item.img + '.png'" />
                            </div>
                            <div class="vx-col md:w-1/2 w-full">
                                <h3 class="mb-3" v-text="item.nombre"></h3>
                                <h5 class="mb-3" v-text="item.precentacion"></h5>
                                <p class="mb-3" v-text="item.descripcion.slice(0, 10) + '...'"></p>
                                <br />
                                <vs-button class="w-full" @click="remover(index)" color="danger">Remover</vs-button>
                            </div>
                        </div>
                    </vx-card>
                </div>
            </div>

            <!-- RIGHT COL -->
            <div class="vx-col lg:w-1/3 w-full">
                <vx-card class="mt-5">
                    <p class="font-semibold mb-3">Detalles del Paciente</p>

                    <vs-divider />
                    <div class="flex justify-between mb-2">
                        <span class="text-grey">Nombre</span>
                        <span>{{nuevaRecetaData.name}}</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span class="text-grey">Teléfono</span>
                        <span class="text-success">{{nuevaRecetaData.phone}}</span>
                    </div>

                    <vs-divider />

                    <vs-button class="w-full mb-2" @click="generarReceta" v-if="nextStep == 0">Finalizar</vs-button>
                    <vs-button class="w-full mb-2" @click="generarReceta" v-else>Siguiente</vs-button>
                    <!-- <vs-button
            class="w-full mb-2"
            @click="agregarmas"
            color="rgb(71, 227, 228)"
          >Seguir Recetando</vs-button> -->
                </vx-card>
            </div>
        </div>

        <!-- IF NO ITEMS IN CART -->
        <!-- <vx-card title="You don't have any items in your cart.">
                    <vs-button @click="$router.push('/apps/eCommerce/shop').catch(() => {})">Browse Shop</vs-button>
    </vx-card>-->
        <!-- <div>
      <iframe
        id="efectiva-chat"
        style="position: fixed; right: 2px; bottom: 2px; z-index:3000;"
        frameborder="0"
        scrolling="auto"
        height="450px"
        width="428px"
        src="https://app.efectiva.merke.app/chats/chat_index.php?aWQ9NjAmYXJlYT0wLDEzOSZsbj1lcyZwbGFuPTEz"
      ></iframe>
    </div> -->
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                registro: null,
                nextStep: null,
                resid: null,
                recetasData: [],
                nuevaRecetaData: null,
                // TAB 2
                fullName: "",
                mobileNum: "",
                pincode: "",
                houseNum: "",
                area: "",
                landmark: "",
                city: "",
                state: "",
                addressType: 1,
                addressTypeOptions: [{
                        text: "Home",
                        value: 1
                    },
                    {
                        text: "Office",
                        value: 2
                    }
                ],

                // TAB 3
                paymentMethod: "debit-card",
                cvv: ""
            };
        },
        computed: {
            isInWishList() {
                return itemId => this.$store.getters["eCommerce/isInWishList"](itemId);
            }
        },
        created() {
            this.openLoading();
            this.registro = localStorage.getItem("regi");
            this.getUser();
            this.getData();
        },
        methods: {
            agregarmas() {
                this.$router.push("/agregarProductos");
            },
            openLoading() {
                this.activeLoading = true;
                this.$vs.loading({
                    type: "default"
                });
            },
            remover: function (index) {
                this.nuevaRecetaData.medicamentos.splice(index, 1);
                this.nuevaRecetaData.medicines.splice(index, 1);
                localStorage.setItem(
                    "nuevaRecetaData",
                    JSON.stringify(this.nuevaRecetaData)
                );
                if (
                    this.nuevaRecetaData.medicamentos.length <= 0 ||
                    this.nuevaRecetaData.medicines.length <= 0
                ) {
                    this.$vs.notify({
                        title: "Atención",
                        text: "Debe de agregar medicamentos.",
                        color: "warning",
                        time: 4000,
                        position: "top-center",
                        iconPack: 'feather',
                        icon: 'icon-alert-circle'
                    });
                    this.$router.push("/agregarProductos");
                }
            },
            getData() {
                this.nuevaRecetaData = JSON.parse(
                    localStorage.getItem("nuevaRecetaData")
                );
            },
            getUser() {
                let token = localStorage.getItem("tu");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/details",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        this.nextStep = Response.data.success.clinicalRecord;
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    });
            },
            generarReceta() {
                if (this.nextStep == 0) {
                    this.openLoading();
                    let token = localStorage.getItem("tu");
                    this.nuevaRecetaData = JSON.parse(
                        localStorage.getItem("nuevaRecetaData")
                    );

                    this.recetasData.push({
                        name: this.nuevaRecetaData.name,
                        phone: this.nuevaRecetaData.phone,
                        doctor_id: this.nuevaRecetaData.doctor_id,
                        symptom: this.nuevaRecetaData.symptom,
                        diagnostics: this.nuevaRecetaData.diagnostics,
                        observations: this.nuevaRecetaData.observations,
                        nextAppointment: this.nuevaRecetaData.nextAppointment,
                        status: this.nuevaRecetaData.status,
                        call_center: this.nuevaRecetaData.call_center,
                        dateIssue: this.nuevaRecetaData.dateIssue,
                        medicines: this.nuevaRecetaData.medicines,
                        medicamentos: this.nuevaRecetaData.medicamentos
                    });

                    localStorage.setItem("recetasData", JSON.stringify(this.recetasData));

                    axios({
                            method: "post",
                            url: "http://127.0.0.1:8000/api/postRecetas",
                            data: JSON.stringify({
                                name: this.nuevaRecetaData.name,
                                phone: this.nuevaRecetaData.phone,
                                doctor_id: this.nuevaRecetaData.doctor_id,
                                symptom: this.nuevaRecetaData.symptom,
                                diagnostics: this.nuevaRecetaData.diagnostics,
                                observations: this.nuevaRecetaData.observations,
                                nextAppointment: this.nuevaRecetaData.nextAppointment,
                                status: this.nuevaRecetaData.status,
                                call_center: this.nuevaRecetaData.call_center,
                                dateIssue: this.nuevaRecetaData.dateIssue
                            }),
                            headers: {
                                authorization: "Bearer " + token,
                                "content-type": "application/json"
                            }
                        })
                        .then(Response => {
                            this.Resid = Response.data.mess;
                            axios({
                                    method: "post",
                                    url: "http://127.0.0.1:8000/api/postReceProd",
                                    data: JSON.stringify({
                                        medicines: this.nuevaRecetaData.medicines,
                                        dispensing: this.nuevaRecetaData.dispensing,
                                        recipe_id: this.Resid
                                    }),
                                    headers: {
                                        authorization: "Bearer " + token,
                                        "content-type": "application/json"
                                    }
                                })
                                .then(Response => {
                                    this.activeLoading = false;
                                    this.$vs.loading.close();
                                    this.$router.push("/recetaFinal");
                                    this.$vs.notify({
                                        title: "Satisfactorio",
                                        text: "Receta creada exitosamente.",
                                        color: "success",
                                        iconPack: 'feather',
                                        icon: 'icon-alert-circle'
                                    });
                                })
                                .catch(err => {
                                    this.activeLoading = false;
                                    this.$vs.loading.close();
                                    this.$vs.notify({
                                        title: "Error",
                                        text: "No se puedo crear la receta.",
                                        color: "danger",
                                        iconPack: 'feather',
                                        icon: 'icon-alert-circle'
                                    });
                                    //console.log(err);
                                });
                        })
                        .catch(err => {
                            this.activeLoading = false;
                            this.$vs.loading.close();
                            this.$vs.notify({
                                title: "Error",
                                text: "No se puedo crear la receta.",
                                color: "danger",
                                iconPack: 'feather',
                                icon: 'icon-alert-circle'
                            });
                            //console.log(err);
                        });
                } else {
                    this.$router.push("/datosPaciente");
                }
            },
            // TAB 1
            removeItemFromCart(item) {
                this.$store.dispatch("eCommerce/toggleItemInCart", item);
            },
            wishListButtonClicked(item) {
                // Toggle in Wish List
                if (this.isInWishList(item.objectID))
                    this.$router.push("/apps/eCommerce/wish-list").catch(() => {});
                else {
                    this.toggleItemInWishList(item);
                    this.removeItemFromCart(item);
                }
            },
            toggleItemInWishList(item) {
                this.$store.dispatch("eCommerce/toggleItemInWishList", item);
            },
            updateItemQuantity(event, index) {
                const itemIndex = Math.abs(index + 1 - this.cartItems.length);
                this.$store.dispatch("eCommerce/updateItemQuantity", {
                    quantity: event,
                    index: itemIndex
                });
            },

            // TAB 2
            submitNewAddressForm() {
                return new Promise(() => {
                    this.$validator.validateAll("add-new-address").then(result => {
                        if (result) {
                            // if form have no errors
                            this.$refs.checkoutWizard.nextTab();
                        } else {
                            this.$vs.notify({
                                title: "Error",
                                text: "Please enter valid details",
                                color: "warning",
                                iconPack: "feather",
                                icon: "icon-alert-circle"
                            });
                        }
                    });
                });
            },

            // TAB 3
            makePayment() {
                return new Promise(() => {
                    this.$validator.validateAll("cvv-form").then(result => {
                        if (result) {
                            // if form have no errors
                            this.$vs.notify({
                                title: "Success",
                                text: "Payment received successfully",
                                color: "success",
                                iconPack: "feather",
                                icon: "icon-check"
                            });
                        } else {
                            this.$vs.notify({
                                title: "Error",
                                text: "Please enter valid details",
                                color: "warning",
                                iconPack: "feather",
                                icon: "icon-alert-circle"
                            });
                        }
                    });
                });
            }
        }
    };

</script>

<style lang="scss" scoped>
    .timeline {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .li {
        transition: all 200ms ease-in;
    }

    .status {
        padding: 0px 40px;
        display: flex;
        justify-content: center;
        border-top: 2px solid #d6dce0;
        position: relative;
        transition: all 200ms ease-in;

        h4 {
            font-weight: 600;
        }

        &:before {
            content: "";
            width: 25px;
            height: 25px;
            background-color: white;
            border-radius: 25px;
            border: 1px solid #ddd;
            position: absolute;
            top: -15px;
            left: 42%;
            transition: all 200ms ease-in;
        }
    }

    .li.complete {
        .status {
            border-top: 2px solid #003da5;

            &:before {
                background-color: #003da5;
                border: none;
                transition: all 200ms ease-in;
            }

            h4 {
                color: #003da5;
            }
        }
    }

    @media (min-device-width: 320px) and (max-device-width: 700px) {
        .timeline {
            list-style-type: none;
            display: block;
        }

        .li {
            transition: all 200ms ease-in;
            display: flex;
            width: inherit;
        }

        .timestamp {
            width: 100px;
        }

        .status {
            &:before {
                left: -8%;
                top: 30%;
                transition: all 200ms ease-in;
            }
        }
    }

    #ecommerce-checkout-demo {
        .item-view-primary-action-btn {
            color: #2c2c2c !important;
            background-color: #f6f6f6;
        }

        .item-name {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            -webkit-line-clamp: 2;
        }

        .vue-form-wizard {
            padding-bottom: 0;

            ::v-deep .wizard-header {
                padding: 0;
            }

            ::v-deep .wizard-tab-content {
                padding-right: 0;
                padding-left: 0;
                padding-bottom: 0;

                .wizard-tab-container {
                    margin-bottom: 0 !important;
                }
            }
        }
    }

</style>
