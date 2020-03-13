<template>
    <div id="email-app" class="border border-solid d-theme-border-grey-light rounded relative overflow-hidden">
        <vs-popup title="Posibles Clíentes" :active.sync="popupActive2">
            <vs-table pagination max-items="3" search :data="users">
                <template slot="thead">
                    <vs-th>NIT</vs-th>
                    <vs-th>Nombre</vs-th>
                    <vs-th>Teléfono</vs-th>
                    <vs-th>Dirección</vs-th>
                    <vs-th>Unir</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="data[indextr].client_nit">{{ data[indextr].client_nit }}</vs-td>

                        <vs-td :data="data[indextr].client_name">{{ data[indextr].client_name }}</vs-td>

                        <vs-td :data="data[indextr].client_phone">{{ data[indextr].client_phone }}</vs-td>

                        <vs-td
                            v-text="tr.paise + ',' + tr.depare + ' ' + tr.municipioe + ' ' + tr.callee + ' ' + tr.apartamentoe + ' ' + tr.residenciae">
                        </vs-td>
                        <vs-td>
                            <vs-button type="border" size="small" icon-pack="feather" icon="icon-send" class="mr-2"
                                @click.stop="editData(tr, idRecipe, idMedico, origen)"></vs-button>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <div class="mr-3">
                <vs-button class="bg-primary-gradient w-full" icon-pack="feather" icon="icon-plus"
                    @click="addNewData1(idRecipe, idMedico)">Nuevo Cliente</vs-button>
            </div>
        </vs-popup>
        <vs-popup class="holamundo" title="Reagendar la receta" :active.sync="popact">
            <p>Seleccione la fecha para reagendar.</p>
            <vs-input class="inputx" v-model="fechaR" type="date"/>
            <span class="text-danger text-sm" v-if="fechaR == ''">Este campo es requerido.</span>
            <vs-button color="primary" type="filled" class="mt-5" :disabled="fechaR == null || fechaR == ''" @click="reagendar">Reagendar</vs-button>
        </vs-popup>
        <vs-popup fullscreen class="holamundo" title="Detalles de la Receta" :active.sync="popupActive">
            <vx-card id="invoice-container">
                <!-- INVOICE METADATA -->
                <div class="vx-row leading-loose p-base">
                    <div class="vx-col w-full md:w-1/2 mt-base">
                        <img v-bind:src="image" class="mr-8 rounded h-24" />()
                    </div>
                    <div class="vx-col w-full md:w-1/2 text-right">
                        <h1>Receta</h1>
                        <div class="invoice__invoice-detail mt-6">
                            <h6>Receta No.</h6>
                            <p v-text="rId"></p>
                            <!-- <p>1</p> -->

                            <h6 class="mt-4">Fecha Receta</h6>
                            <p v-text="nuevaRecetaData.dateIssue"></p>
                            <!-- <p>12/2/2020</p> -->
                        </div>
                    </div>
                    <div class="vx-col w-full md:w-1/2 mt-12">
                        <h5>Paciente</h5>
                        <div class="invoice__recipient-info my-4">
                            <p v-text="pName"></p>
                            <!-- <p>Axel</p> -->
                            <p>Guatemala</p>
                            <p v-text="pPhone"></p>
                            <!-- <p>12345678</p> -->
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
                        <!-- <h5>Tec II</h5> -->
                        <div class="invoice__company-info my-4">
                            <p v-text="clAddress"></p>
                            <!-- <p>Address</p> -->
                            <p>
                                <strong v-text="drName"></strong>
                                <!-- <strong>Dr. Carlos</strong> -->
                            </p>
                            <p v-text="clPhone"></p>
                            <!-- <p>12345678</p> -->
                        </div>
                        <div class="invoice__company-contact">
                            <p class="flex items-center justify-end">
                                <feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
                                <span class="ml-2" v-text="drEmail"></span>
                                <!-- <span class="ml-2">ato@email.com</span> -->
                            </p>
                            <p class="flex items-center justify-end">
                                <feather-icon icon="PhoneIcon" svgClasses="h-4 w-4"></feather-icon>
                                <span class="ml-2" v-text="drPhone"></span>
                                <!-- <span class="ml-2">12345678</span> -->
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
        </vs-popup>
        <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />

        <vs-sidebar class="items-no-padding" parent="#email-app" :click-not-close="clickNotClose"
            :hidden-background="clickNotClose" v-model="isEmailSidebarActive">
            <template>
                <div class="email__email-sidebar h-full">
                    <div class="m-6 clearfix">
                        <vs-button class="bg-primary-gradient w-full" icon-pack="feather" icon="icon-plus"
                            @click="addNewData">Nuevo Cliente</vs-button>
                        <h2 class="mt-5">Listados</h2>
                    </div>

                    <!-- compose email -->
                    <vs-prompt class="email-compose" title="New Message" accept-text="Send">
                        <VuePerfectScrollbar :settings="settings" class="scroll-area p-4">
                            <form>
                                <vs-input v-validate="'required|email'" name="mailTo" label-placeholder="To"
                                    class="w-full mb-6" val-icon-danger="clear" val-icon-success="done" />
                                <vs-input name="mailSubject" label-placeholder="Subject" class="w-full mb-6" />
                                <vs-input name="mailCC" label-placeholder="CC" class="w-full mb-6" />
                                <vs-input name="mailBCC" label-placeholder="BCC" class="w-full mb-6" />
                                <quill-editor />
                                <vs-upload multiple text="Attachments" class="compose-mail-attachment" />
                            </form>
                        </VuePerfectScrollbar>
                    </vs-prompt>

                    <VuePerfectScrollbar :settings="settings" class="email-filter-scroll-area">
                        <div class="px-6 pb-2 flex flex-col">
                            <!-- inbox -->
                            <li tag="span" @click="getRecipes('Nuevo')"
                                class="flex justify-between items-center cursor-pointer"
                                :class="{'text-primary': activado == 'Nuevo'}">
                                <div class="flex items-center mb-2">
                                    <feather-icon icon="PlusIcon"></feather-icon>
                                    <span class="text-lg ml-3">Nuevos</span>
                                </div>
                            </li>

                            <!-- <li tag="span" @click="getFacturacion('Facturacion')"
                                class="flex items-center mt-4 mb-2 cursor-pointer" :class="{'text-primary': activado == 'Facturacion'}">
                                <feather-icon icon="FileIcon"></feather-icon>
                                <span class="text-lg ml-3">Facturación</span>
                            </li> -->

                            <!-- sent -->
                            <li tag="span" @click="getRecipes('Facturando')"
                                class="flex items-center mt-4 mb-2 cursor-pointer"
                                :class="{'text-primary': activado == 'Facturando'}">
                                <feather-icon icon="FileTextIcon"></feather-icon>
                                <span class="text-lg ml-3">Facturando</span>
                            </li>
                            
                            
                            <li tag="span" @click="getRecipes('Empaquetando')"
                                class="flex items-center mt-4 mb-2 cursor-pointer"
                                :class="{'text-primary': activado == 'Empaquetando'}">
                                <feather-icon icon="ArchiveIcon"></feather-icon>
                                <span class="text-lg ml-3">Despacho</span>
                            </li>

                            <!-- draft -->
                            <li tag="span" @click="getRecipes('Entregando')"
                                class="flex justify-between items-center mt-4 cursor-pointer"
                                :class="{'text-primary': activado == 'Entregando'}">
                                <div class="flex items-center mb-2">
                                    <feather-icon icon="TruckIcon"></feather-icon>
                                    <span class="text-lg ml-3">Entregando</span>
                                </div>
                            </li>

                            <!-- starred -->
                            <li tag="span" @click="getRecipes('Entregado')"
                                class="flex items-center mt-4 mb-2 cursor-pointer"
                                :class="{'text-primary': activado == 'Entregado'}">
                                <feather-icon icon="MapPinIcon"></feather-icon>
                                <span class="text-lg ml-3">Entregados</span>
                            </li>

                            <!-- spam -->
                            <li @click="getRecipes('Cancelado')" tag="span"
                                class="flex items-center justify-between items-center mt-4 cursor-pointer"
                                :class="{'text-primary': activado == 'Cancelado'}">
                                <div class="flex items-center mb-2">
                                    <feather-icon icon="HexagonIcon"></feather-icon>
                                    <span class="text-lg ml-3">Descartadas</span>
                                </div>
                            </li>
                            <li @click="getRecipes('Reagendado')" tag="span"
                                class="flex items-center justify-between items-center mt-4 cursor-pointer"
                                :class="{'text-primary': activado == 'Reagendado'}">
                                <div class="flex items-center mb-2">
                                    <feather-icon icon="ClockIcon"></feather-icon>
                                    <span class="text-lg ml-3">Reagendado</span>
                                </div>
                            </li>
                            <li @click="getRerecipes('Reprogramada')" tag="span"
                                class="flex items-center justify-between items-center mt-4 cursor-pointer"
                                :class="{'text-primary': activado == 'Reprogramada'}">
                                <div class="flex items-center mb-2">
                                    <feather-icon icon="WatchIcon"></feather-icon>
                                    <span class="text-lg ml-3">Reprogramada</span>
                                </div>
                            </li>
                        </div>
                    </VuePerfectScrollbar>
                </div>
            </template>
        </vs-sidebar>

        <div :class="{'sidebar-spacer': clickNotClose}"
            class="no-scroll-content border border-solid d-theme-border-grey-light border-r-0 border-t-0 border-b-0">
            <!-- SEARCH BAR -->
            <div class="flex border d-theme-dark-bg items-center">
                <feather-icon class="md:inline-flex lg:hidden ml-4 mr-4 cursor-pointer" icon="MenuIcon" />
                <vs-input icon-no-border icon="icon-search" size="large" v-model="buscar" icon-pack="feather"
                    placeholder="Buscar" class="vs-input-no-border vs-input-no-shdow-focus w-full" />
            </div>

            <!-- EMAIL ACTION BAR -->
            <hr />

            <!-- EMAILS LIST -->
            <div v-show="recipes.length == 0">
                <div align="center">
                    <h4 v-text="message"></h4>
                </div>
            </div>
            <VuePerfectScrollbar id="scrolll" class="email-content-scroll-area" :settings="settings">
                <transition-group name="list-enter-up" class="email__mails" tag="ul" appear>
                    <li class="email__mail-item" v-for="(mail, index) in searchRecipes" :key="mail.id"
                        :style="{transitionDelay: (index * 0.1) + 's'}">
                        <div class="mail__mail-item sm:px-4 px-2 py-6">
                            <!-- MAIL ROW 1 : META -->
                            <div class="flex w-full">
                                <!-- <vs-avatar class="sender__avatar flex-shrink-0 mr-3 border-2 border-solid border-white" :src="mail.img" size="40px"></vs-avatar> -->

                                <div class="flex w-full justify-between items-start">
                                    <div class="mail__details">
                                        <h5 class="mb-1">{{ mail.name }}</h5>
                                        <span v-if="mail.phone ">{{ mail.phone }}</span>
                                        <span v-else>(no subject)</span>
                                        <br>
                                        <span>{{ mail.doctor_name }}</span>
                                    </div>

                                    <div class="mail-item__meta flex items-center">
                                        <div class="mail__details">
                                            <div class="email__labels hidden sm:flex items-center">
                                                <div class="h-2 w-2 rounded-full mr-2" :class="'bg-' + mail.color">
                                                </div>
                                                <span>{{ mail.status }}</span>
                                            </div>
                                            <br>
                                            <div class="vx-row">
                                                <vx-tooltip text="Reagendar">
                                                    <vs-button @click="openReagendar(mail.id)"
                                                        v-show="mail.status == 'Nuevo'" color="rgb(249, 142, 5)"
                                                        size="small" type="filled" class="mr-3" icon-pack="feather"
                                                        icon="icon-clock">
                                                    </vs-button>
                                                </vx-tooltip>
                                                <vx-tooltip text="Descartar">
                                                    <vs-button @click="descartar(mail.id)"
                                                        v-show="mail.status == 'Nuevo' || mail.status == 'Reagendado'"
                                                        color="danger" size="small" type="filled" class="mr-3"
                                                        icon-pack="feather" icon="icon-trash">
                                                    </vs-button>
                                                </vx-tooltip>
                                                <vx-tooltip text="Ver Receta">
                                                    <vs-button @click="verReceta(mail.id, mail.doctor_id)"
                                                        color="rgb(62, 201, 214)" class="mr-3" size="small"
                                                        type="filled" icon-pack="feather" icon="icon-eye">
                                                    </vs-button>
                                                </vx-tooltip>
                                                <vx-tooltip text="Nuevo">
                                                    <vs-button color="primary" class="mr-5" type="filled" size="small"
                                                        v-show="mail.status == 'Nuevo' || mail.status == 'Reagendado' || mail.permission == 1"
                                                        @click="openModal(mail.phone, mail.id, mail.status, mail.origen, mail.idMedico)"
                                                        icon-pack="feather" icon="icon-send">
                                                    </vs-button>
                                                </vx-tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /MAIL ROW 1 -->

                            <!-- MAIL ROW 2 : MSG & ACTIONS -->
                            <div class="flex w-full">
                                <!-- Seleccionar el item -->
                                <!-- <div class="flex items-center ml-1">
                <vs-checkbox v-model="isSelectedMail" @click.stop class="vs-checkbox-small ml-0 mr-1"></vs-checkbox>
                <feather-icon icon="StarIcon" class="cursor-pointer" :svgClasses="[{'text-warning fill-current stroke-current': mail.isStarred}, 'w-5', 'h-5']" @click.stop="toggleIsStarred"></feather-icon>
                </div>-->
                                <div class="mail__message truncate">

                                </div>
                            </div>
                            <!-- /MAIL ROW 2 -->
                        </div>
                    </li>
                </transition-group>
            </VuePerfectScrollbar>
        </div>
        <!-- <iframe 
    id='efectiva-chat'
    style='position: fixed; right: 20px; bottom: 20px; z-index:3000;'
    frameborder='0'
    scrolling='auto'
    height='450px'
    width='428px'
    src='https://app.efectiva.merke.app/chats/chat_index.php?aWQ9NjAmYXJlYT0wLDEzMywxMzQmbG49ZXM='></iframe> -->
    </div>
</template>

<script>
    import VuePerfectScrollbar from "vue-perfect-scrollbar";
    import axios from "axios";
    import DataViewSidebar from "../DataViewSidebar.vue";

    export default {
        data() {
            return {
                idReceta: null,
                fechaR: null,
                activado: 'Nuevo',
                companyDetails: {
                    name: "",
                    addressLine1: "9 N. Sherwood Court",
                    addressLine2: "Nombre Médico",
                    zipcode: "94203",
                    mailId: "hello@pixinvent.net",
                    mobile: "s"
                },
                rId: '',
                clAddress: '',
                clPhone: '',
                pName: '',
                pPhone: '',
                medicinas: [],
                image: "/images/medicamentos/demol.PNG",
                drName: "",
                drEmail: "",
                drPhone: "",
                nuevaRecetaData: {},
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
                medicinas: [],
                popupActive: false,
                message: "",
                idRecipe: null,
                origen: null,
                idMedico: null,
                popact: false,
                users: [],
                popupActive2: false,
                addNewDataSidebar: false,
                sidebarData: {},
                status: ["Nuevo", "Empaquetando", "Entregando", "Entregado", "Cancelado", "Reagendado", "Facturando"],
                buscar: "",
                clickNotClose: true,
                isEmailSidebarActive: true,
                mailFilter: "inbox",
                settings: {
                    maxScrollbarLength: 60,
                    wheelSpeed: 0.3
                },
                recipes: [],
                doctors: [],
                primary: "primary"
            };
        },
        components: {
            VuePerfectScrollbar,
            DataViewSidebar
        },
        computed: {
            searchRecipes: function () {
                let result = this.recipes;
                if (!this.buscar) {
                    return result;
                }
                let texto = this.buscar.toLowerCase();
                const filter = event =>
                    event.name.toLowerCase().includes(texto) ||
                    event.phone.toLowerCase().includes(texto) ||
                    event.doctor_name.toLowerCase().includes(texto);

                return result.filter(filter);
            }
        },
        created() {
            this.getUsers();
            this.getRecipes("Nuevo");
        },
        methods: {
            openReagendar(id) {
                this.popact = true;
                this.idReceta = id;
            },
            reagendar() {
                this.openLoading();
                let token = localStorage.getItem('tu');
                axios({
                        method: "put",
                        url: "http://127.0.0.1:8000/api/changeStatus",
                        data: JSON.stringify({
                            id: this.idReceta,
                            status: 6
                        }),
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        this.fechaR = null;
                        this.popact = false; 
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        this.getRecipes("Nuevo");
                        this.$vs.notify({
                            title: "Satisfactorio",
                            text: "Pedido reagendado exitosamente.",
                            color: "success"
                        });
                    })
                    .catch(err => {
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        console.log(err);
                    });
            },
            descartar(id) {
                this.openLoading();
                let token = localStorage.getItem('tu');
                axios({
                        method: "put",
                        url: "http://127.0.0.1:8000/api/changeStatus",
                        data: JSON.stringify({
                            id: id,
                            status: 5
                        }),
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        this.getRecipes("Nuevo");
                        this.$vs.notify({
                            title: "Satisfactorio",
                            text: "Pedido descartado exitosamente.",
                            color: "success"
                        });
                    })
                    .catch(err => {
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        console.log(err);
                    });
            },
            verReceta(id, id1) {
                this.popupActive = true;
                let token = localStorage.getItem("tu");
                let idu = id;
                let idm = id1;
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
                        axios({
                                method: "get",
                                url: "http://127.0.0.1:8000/api/getInfoRecipie/" + idu,
                                headers: {
                                    authorization: "Bearer " + token,
                                    "content-type": "application/json"
                                }
                            })
                            .then(Response => {
                                this.medicinas = [];
                                //console.log(Response);
                                Response.data.forEach(element => {
                                    this.medicinas.push(element);
                                });
                                //console.log(idm);
                                axios({
                                        method: "get",
                                        url: "http://127.0.0.1:8000/api/getUser/" + idm,
                                        headers: {
                                            authorization: "Bearer " + token,
                                            "content-type": "application/json"
                                        }
                                    })
                                    .then(Response => {
                                        this.drName = Response.data.name;
                                        if (Response.data.clinicPhone == null || Response.data
                                            .clinicPhone == '') {
                                            this.clPhone = '+502: 8452-9862';
                                        } else {
                                            this.clPhone = Response.data.clinicPhone;
                                        }
                                        if (Response.data.clinicAddress == null || Response.data
                                            .clinicAddress == '') {
                                            this.clAddress = 'Via 4 zona 4 Guatemala';
                                        } else {
                                            this.clAddress = Response.data.clinicAddress;
                                        }
                                        this.drEmail = Response.data.email;
                                        if (
                                            Response.data.phone == null ||
                                            Response.data.phone == ""
                                        ) {
                                            this.drPhone = "+502: 8452-9862";
                                        } else {
                                            this.drPhone = "+502: " + Response.data.phone;
                                        }
                                    })
                                    .catch(err => {
                                        console.log(err);
                                        this.activeLoading = false;
                                        this.$vs.loading.close();
                                    });
                            })
                            .catch(err => {
                                console.log(err);
                                this.activeLoading = false;
                                this.$vs.loading.close();
                            });
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    });
            },
            editData(data, id, id1, id2) {
                //console.log(data, id, id1, id2);
                this.popupActive2 = false;
                // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
                let data1 = {
                    data: data,
                    idRecipies: id,
                    idMedico: id1,
                    origen: id2
                };
                //console.log(data1);
                this.sidebarData = data1;
                this.toggleDataSidebar(true);
            },
            openModal(phone, id, status, origen, id1) {
                //console.log('Modal');
                //console.log(id1);
                //console.log(status);
                //if (status == "Nuevo") {
                this.idRecipe = id;
                this.origen = origen;
                this.idMedico = id1;
                this.users = [];
                let token = localStorage.getItem("tu");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getCliente1/" + phone,
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        Response.data.forEach(element => {
                            this.users.push(element);
                        });
                        this.popupActive2 = true;
                    })
                    .catch(err => {
                        console.log(err);
                    });
                //}
            },
            addNewData() {
                this.sidebarData = {};
                this.toggleDataSidebar(true);
            },
            addNewData1(id, id1) {
                let data = {
                    data: {},
                    idRecipies: id,
                    idMedico: id1
                };
                this.popupActive2 = false;
                this.sidebarData = data;
                this.toggleDataSidebar(true);
            },
            toggleDataSidebar(val = false) {
                this.addNewDataSidebar = val;
            },
            openLoading() {
                this.activeLoading = true;
                this.$vs.loading({
                    type: "default"
                    //container: "#scrolll"
                });
            },
            getUsers() {
                let token = localStorage.getItem("tu");
                let id = localStorage.getItem("ui");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/listUsers",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        Response.data.forEach(element => {
                            this.doctors.push({
                                id: element.id,
                                name: element.name
                            });
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            colore(a) {
                if (a == 1) return "primary";
                if (a == 2) return "warning";
                if (a == 3) return "warning";
                if (a == 4) return "success";
                if (a == 5) return "danger";
                if (a == 6) return "warning";
                if (a == 7) return "warning";
                return "primary";
            },
            getFacturacion(a) {
                //console.log(a);
                this.activado = a;
                this.openLoading();
                let token = localStorage.getItem("tu");
                let id = localStorage.getItem("ui");
                let f = new Date();
                let fecha =
                    f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
                fecha = fecha.toString();
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getClientess",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        this.recipes = [];
                        //console.log(Response.data);
                        Response.data.forEach(element => {
                            element.color = 'warning';
                            element.status = 'Facturación';
                            //console.log(element.status);
                            this.doctors.forEach(e => {
                                if (e.id == element.doctor_id) {
                                    element.doctor_name = e.name;
                                }
                            });
                            this.recipes.push(element);
                            if (this.recipes.length == 0) {
                                this.message = "No hay resultados.";
                            }
                        });
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    });
            },
            getRecipes(a) {
                this.activado = a;
                this.openLoading();
                let token = localStorage.getItem("tu");
                let id = localStorage.getItem("ui");
                let f = new Date();
                let fecha =
                    f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
                fecha = fecha.toString();
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getRecipes",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        this.recipes = [];
                        //console.log(Response.data);
                        Response.data.forEach(element => {
                            element.color = this.colore(element.status);
                            element.status = this.status[element.status - 1];
                            element.permission = 0;
                            element.origen = 1;
                            element.idMedico = element.doctor_id;
                            //console.log(element.status);
                            this.doctors.forEach(e => {
                                if (e.id == element.doctor_id) {
                                    element.doctor_name = e.name;
                                }
                            });
                            if (element.status == a) {
                                this.recipes.push(element);
                            }
                            if (this.recipes.length == 0) {
                                this.message = "No hay resultados.";
                            }
                        });
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    });
            },
            getRerecipes(a) {
                this.activado = a;
                this.openLoading();
                let token = localStorage.getItem("tu");
                let id = localStorage.getItem("ui");
                let f = new Date();
                let fecha =
                    f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
                fecha = fecha.toString();
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getRerecipes",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        console.log(Response);
                        this.recipes = [];
                        //console.log(Response.data);
                        Response.data.forEach(element => {
                            element.color = this.colore(element.status);
                            element.status = this.status[element.status - 1];
                            element.permission = 1;
                            element.origen = 3;
                            element.idMedico = element.doctor_id;
                            //console.log(element.status);
                            this.doctors.forEach(e => {
                                if (e.id == element.doctor_id) {
                                    element.doctor_id = e.name;
                                }
                            });
                            this.recipes.push(element);
                            if (this.recipes.length == 0) {
                                this.message = "No hay resultados.";
                            }
                        });
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    });
            }
        }
    };

</script>

<style lang="scss">
    @import "@sass/vuexy/apps/email.scss";

</style>
