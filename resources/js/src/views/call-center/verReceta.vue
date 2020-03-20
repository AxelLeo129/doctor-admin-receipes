<!-- =========================================================================================
    File Name: Invoice.vue
    Description: Invoice Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="invoice-page">
        <span class="text-danger text-sm" v-if="(bol === false && mailTo !== '')">Ingrese un email válido.</span>
        <div class="flex flex-wrap items-center justify-between">
            <vx-input-group class="mb-base mr-3">
                <vs-input v-model="mailTo" placeholder="Email" />

                <template slot="append">
                    <div class="append-text btn-addon">
                        <vs-button type="border" @click="enviarReceta"
                            :disabled="mailTo == '' || mailTo == null || bol == false" class="whitespace-no-wrap">Enviar
                            Receta
                        </vs-button>
                    </div>
                </template>
            </vx-input-group>
            <div class="flex items-center">
                <vs-button class="mb-base mr-3" icon-pack="feather" icon="icon icon-file" @click="printInvoice">Imprimir
                </vs-button>
            </div>
        </div>

        <vx-card id="invoice-container">
            <!-- INVOICE METADATA -->
            <div class="vx-row leading-loose p-base">
                <div class="vx-col w-full md:w-1/2 mt-base">
                    <img v-bind:src="image" class="mr-8 rounded h-24" />
                </div>
                <div class="vx-col w-full md:w-1/2 text-right">
                    <h1>Receta</h1>
                    <div class="invoice__invoice-detail mt-6">
                        <h6>Receta No.</h6>
                        <p v-text="rId"></p>

                        <h6 class="mt-4">Fecha Receta</h6>
                        <p v-text="nuevaRecetaData.dateIssue"></p>
                    </div>
                </div>
                <div class="vx-col w-full md:w-1/2 mt-12">
                    <h5>Paciente</h5>
                    <div class="invoice__recipient-info my-4">
                        <p v-text="pName"></p>
                        <p>Guatemala</p>
                        <p v-text="pPhone"></p>
                    </div>
                    <div class="invoice__recipient-contact">
                        <!-- <p class="flex items-center">
              <feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
              <span class="ml-2">{{ recipientDetails.mailId }}</span>
            </p>-->
                    </div>
                </div>
                <div class="vx-col w-full md:w-1/2 mt-base text-right mt-12">
                    <h5>{{ companyDetails.name }}</h5>
                    <div class="invoice__company-info my-4">
                        <p v-text="clAddress"></p>
                        <p>
                            <strong v-text="drName"></strong>
                        </p>
                        <p v-text="clPhone"></p>
                    </div>
                    <div class="invoice__company-contact">
                        <p class="flex items-center justify-end">
                            <feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2" v-text="drEmail"></span>
                        </p>
                        <p class="flex items-center justify-end">
                            <feather-icon icon="PhoneIcon" svgClasses="h-4 w-4"></feather-icon>
                            <span class="ml-2" v-text="drPhone"></span>
                        </p>
                    </div>
                </div>
            </div>

            <!-- INVOICE CONTENT -->
            <div class="p-base">
                <!-- INVOICE TASKS TABLE -->
                <vs-table hoverFlat :data="invoiceData.tasks">
                    <!-- HEADER -->

                    <!-- DATA -->
                    <template>
                        <vs-tr v-for="item in medicinas" :key="item.id">
                            <vs-td v-text="item.name + ' ' + item.presentacion + ' ' + item.dispensing"></vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </div>

            <!-- INVOICE FOOTER -->
            <div class="invoice__footer text-right p-base">
                <div align="right">
                    <h6>PHARMAZone.app</h6>
                </div>
            </div>
        </vx-card>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                bol: null,
                rId: '',
                clAddress: '',
                clPhone: '',
                pName: '',
                pPhone: '',
                medicinas: [],
                medicinas1: [],
                image: "/images/medicamentos/demol.PNG",
                drName: "",
                drEmail: "",
                drPhone: "",
                nuevaRecetaData: {},
                recetas: [],
                mailTo: "",
                companyDetails: {
                    name: "",
                    addressLine1: "9 N. Sherwood Court",
                    addressLine2: "Nombre Médico",
                    zipcode: "94203",
                    mailId: "hello@pixinvent.net",
                    mobile: "s"
                },
                recipientDetails: {
                    fullName: "Peter Stark",
                    addressLine1: "8577 West West Drive ",
                    addressLine2: "Holbrook, NY",
                    zipcode: "90001",
                    mailId: "peter@mail.com",
                    mobile: "+91 988 888 8888"
                },
                invoiceDetails: {
                    invoiceNo: "001/2019",
                    invoiceDate: "Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)"
                },
                invoiceData: {
                    tasks: [{
                            id: 1,
                            task: "Website Redesign",
                            hours: 60,
                            rate: 15,
                            amount: 90000
                        },
                        {
                            id: 2,
                            task: "Newsletter template design",
                            hours: 20,
                            rate: 12,
                            amount: 24000
                        }
                    ],
                    subtotal: 114000,
                    discountPercentage: 5,
                    discountedAmount: 5700,
                    total: 108300
                },
                imagen64: "/images/medicamentos/unnamed.jpg"
            };
        },
        computed: {},
        watch: {
            mailTo: function (val, oldVal) {
                const re =
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                this.bol = re.test(String(val).toLowerCase());
            },
        },
        created() {
            this.openLoading();
            this.getMendinas();
            this.getUser();
            this.getRecipe();
        },
        methods: {
            openLoading() {
                this.activeLoading = true;
                this.$vs.loading({
                    type: "default"
                });
            },
            enviarReceta() {
                this.openLoading();
                let token = localStorage.getItem('tu');
                let medicinass = [];
                this.medicinas.forEach(item => {
                    medicinass.push(item.name + ' ' + item.presentacion + ' ' + item.dispensing);
                });
                axios({
                    method: "post",
                    url: "http://127.0.0.1:8000/api/sendRecipe",
                    data: JSON.stringify({
                        no: 12,
                        img: this.imgenRes,
                        fecha: this.nuevaRecetaData.dateIssue,
                        nameP: this.pName,
                        phoneP: this.pPhone,
                        direccionC: this.clAddress,
                        nameD: this.drName,
                        phoneC: this.clPhone,
                        emailD: this.drEmail,
                        phoneD: this.drPhone,
                        medicamentos: medicinass,
                        email: this.mailTo,
                        name: this.nuevaRecetaData.name
                    }),
                    headers: {
                        authorization: "Bearer " + token,
                        "content-type": "application/json"
                    }
                }).then(Response => {
                    this.mailTo = "";
                    this.bol = null;
                    this.activeLoading = false;
                    this.$vs.loading.close();
                    this.$vs.notify({
                        title: "Enviado",
                        text: "Receta enviada exitosamente.",
                        color: "success",
                        iconPack: 'feather',
                        icon: 'icon-check'
                    });
                }).catch(err => {
                    console.log(err);
                    this.activeLoading = false;
                    this.$vs.loading.close();
                });
            },
            getMendinas() {
                let token = localStorage.getItem("tu");
                let idu = this.$route.params.idReceta;
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getInfoRecipie/" + idu,
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        //console.log(Response);
                        Response.data.forEach(element => {
                            this.medicinas.push(element);
                        });
                        //console.log(this.medicinas);
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    });
            },
            getRecipe() {
                let token = localStorage.getItem("tu");
                let idu = this.$route.params.idReceta;
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getReceta/" + idu,
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        let f = new Date();
                        let fecha =
                            f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
                        this.nuevaRecetaData.dateIssue = fecha;
                        this.pName = Response.data[0].name;
                        this.pPhone = Response.data[0].phone;
                        this.rId = Response.data[0].id;
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    });
            },
            getMedicamentos() {
                //nuevaRecetaData.medicamentos
            },
            getUser() {
                let token = localStorage.getItem("tu");
                let idu = this.$route.params.idMedico;
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getUser2/" + idu,
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        //console.log(Response);
                        if (
                            Response.data[0].clinicLogo == null ||
                            Response.data[0].clinicLogo == ""
                        ) {
                            this.image = "/images/medicamentos/demol.PNG";
                        } else {
                            this.image =
                                "data:image/png;base64," + Response.data[0].clinicLogo;
                        }
                        this.drName = Response.data[0].name;
                        if (Response.data[0].clinicPhone == null || Response.data[0].clinicPhone == '') {
                            this.clPhone = '+502: 8452-9862';
                        } else {
                            this.clPhone = Response.data[0].clinicPhone;
                        }
                        if (Response.data[0].clinicAddress == null || Response.data[0].clinicAddress ==
                            '') {
                            this.clAddress = 'Via 4 zona 4 Guatemala';
                        } else {
                            this.clAddress = Response.data[0].clinicAddress;
                        }
                        this.drEmail = Response.data[0].email;
                        if (
                            Response.data[0].phone == null ||
                            Response.data[0].phone == ""
                        ) {
                            this.drPhone = "+502: 8452-9862";
                        } else {
                            this.drPhone = "+502: " + Response.data[0].phone;
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    });
            },
            printInvoice() {
                window.print();
            }
        },
        components: {},
        mounted() {
            this.$emit("setAppClasses", "invoice-page");
        }
    };

</script>

<style lang="scss">
    @media print {
        .invoice-page {
            * {
                visibility: hidden;
            }

            #content-area {
                margin: 0 !important;
            }

            #invoice-container,
            #invoice-container * {
                visibility: visible;
            }

            #invoice-container {
                position: absolute;
                left: 0;
                top: 0;
                box-shadow: none;
            }
        }
    }

</style>
