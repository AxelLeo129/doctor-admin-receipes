<!-- =========================================================================================
    File Name: FormWizardNumberTab.vue
    Description: Form wizard with numbers in tabs
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Datos del Paciente">
        <p>Ingrese los datos del paciente.</p>

        <div class="mt-5">
            <!-- <div align="center">
        <h4>Paso</h4>
        <h5><strong>1</strong> ... 2 ... 3 ... 4</h5>
      </div>-->
            <div class="row" v-if="registro == 1">
                <div class="flex mb-4">
                    <div class="w-1/3"></div>
                    <div class="w-1/3">
                        <ul class="timeline mt-5" id="timeline">
                            <li class="li complete">
                                <div class="status">
                                    <h4 class="mt-5">Paso 1</h4>
                                </div>
                            </li>
                            <li class="li">
                                <div class="status">
                                    <h4 class="mt-5">Paso 2</h4>
                                </div>
                            </li>
                            <li class="li">
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
                    <div class="w-1/3"></div>
                </div>
            </div>
            <div class="row" v-else>
                <div class="flex mb-4">
                    <div class="w-1/3"></div>
                    <div class="w-1/3">
                        <ul class="timeline mt-5" id="timeline">
                            <li class="li complete">
                                <div class="status">
                                    <h4 class="mt-5">Paso 1</h4>
                                </div>
                            </li>
                            <li class="li">
                                <div class="status">
                                    <h4 class="mt-5">Paso 2</h4>
                                </div>
                            </li>
                            <li class="li">
                                <div class="status">
                                    <h4 class="mt-5">Paso 3</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="w-1/3"></div>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col md:w-1/2 w-full mt-5">
                    <vs-input label="Nombre Completo del Paciente" v-model="nombres" class="w-full" />
                    <span class="text-danger text-sm" v-show="nombres === '' || (nombres === '' && actiErr == true)">
                        Este campo es
                        requerido.
                    </span>
                </div>
                <div class="vx-col md:w-1/2 w-full mt-5">
                    <vs-input label="Teléfono" type="number" v-model="telefono" class="w-full" />
                    <span class="text-danger text-sm" v-show="telefono === '' || (telefono === '' && actiErr1 == true)">
                        Este campo es
                        requerido.
                    </span>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col md:w-1/2 w-full mt-5">
                    <vs-checkbox v-model="call_center">Llamar al Paciente</vs-checkbox>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                </div>
                <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                    <div align="right">
                        <vs-button class="mt-5" color="primary" type="filled" @click="formSubmitted">Siguiente
                        </vs-button>
                    </div>
                </div>
            </div>
        </div>
    </vx-card>
</template>

<script>
    export default {
        data() {
            return {
                registro: null,
                nombres: null,
                telefono: null,
                fecha: "",
                actiErr: false,
                actiErr1: false,
                call_center: true
            };
        },
        methods: {
            newData() {
                let nuevaRecetaData = {
                    recipe_id: "",
                    name: "",
                    phone: "",
                    doctor_id: "",
                    symptom: "",
                    diagnostics: "",
                    observations: "",
                    nextAppointment: "",
                    status: 1,
                    call_center: "",
                    dateIssue: "",
                    medicines: [],
                    dispensing: [],
                    medicamentos: []
                };
                localStorage.setItem("nuevaRecetaData", JSON.stringify(nuevaRecetaData));
            },
            getDate() {
                let f = new Date();
                this.fecha =
                    f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();
            },
            formSubmitted() {
                if (this.nombres == null || this.nombres == "") {
                    this.actiErr = true;
                    this.nombres = "";
                } else if (this.telefono == null || this.telefono == "") {
                    this.actiErr1 = true;
                    this.telefono = "";
                } else {
                    if (this.call_center == true) {
                        this.call_center = 1;
                    } else {
                        this.call_center = 0;
                    }
                    let idu = localStorage.getItem("ui");
                    idu = parseInt(idu);
                    let nuevaRecetaData = {
                        recipe_id: "",
                        name: this.nombres,
                        phone: this.telefono,
                        doctor_id: idu,
                        symptom: "",
                        diagnostics: "",
                        observations: "",
                        nextAppointment: "",
                        status: 1,
                        call_center: this.call_center,
                        dateIssue: this.fecha,
                        medicines: [],
                        dispensing: [],
                        medicamentos: []
                    };
                    localStorage.setItem(
                        "nuevaRecetaData",
                        JSON.stringify(nuevaRecetaData)
                    );
                    this.$router.push("/agregarProductos");
                }
            }
        },
        created() {
            this.registro = localStorage.getItem("regi");
            this.newData();
            this.getDate();
        }
    };

</script>
<style lang="scss">
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

            h4 {
                font-weight: 200;
            }
        }
    }

    /// Layout stuff

</style>
