<template>
    <div>
        <vx-card>
            <div class="vx-row">
                <div class="vx-col sm:w-1/2 w-full mb-2">
                    <vs-input class="w-full" label-placeholder="Nombres y Apellidos" v-model="name" />
                    <span class="text-danger text-sm" v-if="name === ''">{{ errors.name }}</span>
                </div>
                <div class="vx-col sm:w-1/2 w-full mb-2">
                    <vs-input class="w-full" label-placeholder="Email" v-model="email" />
                    <span class="text-danger text-sm" v-if="email === ''">{{ errors.email }}</span>
                    <span class="text-danger text-sm" v-if="bol === false && email !== ''">{{ errors.email1 }}</span>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col sm:w-1/2 w-full mb-2">
                    <vs-input class="w-full" label-placeholder="No. Colegiado" v-model="noCollegiate" />
                </div>
                <div class="vx-col sm:w-1/2 w-full mb-2">
                    <vs-input class="w-full" type="password" label-placeholder="Contraseña" v-model="password" />
                    <span class="text-danger text-sm" v-if="password === ''">{{ errors.password }}</span>
                    <span class="text-danger text-sm"
                        v-if="bol1 === false && password !== ''">{{ errors.password1 }}</span>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col sm:w-1/2 w-full mb-2">
                    <vs-input class="w-full" type="password" label-placeholder="Confirmar Contraseña"
                        v-model="confirmPassword" />
                    <span class="text-danger text-sm" v-if="confirmPassword === ''">{{ errors.c_password }}</span>
                    <span class="text-danger text-sm"
                        v-if="bol2 === false && confirmPassword !== ''">{{ errors.c_password1 }}</span>
                    <span class="text-danger text-sm"
                        v-if="bol3 === false && confirmPassword !== '' && bol2 == true">{{ errors.c_password2 }}</span>
                </div>
                <div class="vx-col sm:w-1/2 w-full mb-2">
                    <div>
                        <label class="vs-input--label" style="color: gray;">Roles</label>
                        <v-select v-model="rol" :options="roles" />
                    </div>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-button class="float-right mt-6" @click="registrar"
                        :disabled="rol == null || rol == '' || name == null || name == '' || email == '' || email == null || bol == false || bol == null || password == null || password == '' || bol1 == false || bol1 == null || confirmPassword == '' || confirmPassword == null || bol2 == false || bol2 == null || bol3 == false || bol3 == null">
                        Registrar</vs-button>
                    <vs-button color="danger" type="border" class="mb-2 mt-5">Cancelar</vs-button>
                </div>
            </div>
        </vx-card>
    </div>
</template>

<script>
    import axios from "axios";
    import vSelect from "vue-select";

    export default {
        data() {
            return {
                errors: {
                    name: "Este campo es requerido.",
                    noCollegiate: "Este campo es requerido.",
                    email: "Este campo es requerido.",
                    email1: "Ingrese un email válido.",
                    password: "Este campo es requerido.",
                    password1: "Este campo debe tener al menos 8 caracteres.",
                    c_password: "Este campo es requerido.",
                    c_password1: "Este campo debe tener al menos 8 caracteres.",
                    c_password2: "La confirmación de contraseña no coincide."
                },
                bol: null,
                bol1: null,
                bol2: null,
                bol3: null,
                name: null,
                noCollegiate: null,
                email: null,
                password: null,
                confirmPassword: null,
                activado: false,
                activado1: false,
                rol: null,
                roles: []
            };
        },
        components: {
            "v-select": vSelect
        },
        created() {
            this.getRoles();
        },
        methods: {
            getRoles() {
                let token = localStorage.getItem("tu");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getRoles",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        //console.log(Response);
                        this.roles = [];
                        Response.data.forEach(element => {
                            this.roles.push({
                                label: element.name,
                                value: element.id
                            });
                        });
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            openLoading() {
                this.activeLoading = true;
                this.$vs.loading({
                    type: "default"
                });
            },
            registrar() {
                this.openLoading();
                let token = localStorage.getItem("tu");
                let idu = localStorage.getItem("ui");
                axios({
                        method: "post",
                        url: "http://127.0.0.1:8000/api/register",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        },
                        data: JSON.stringify({
                            name: this.name,
                            email: this.email,
                            password: this.password,
                            userName: this.name,
                            noCollegiate: this.noCollegiate,
                            c_password: this.confirmPassword,
                            rol: this.rol.value,
                            id_visitador: idu
                        }),
                        headers: {
                            "content-type": "application/json"
                        }
                    })
                    .then(response => {
                        this.name = null;
                        this.email = null;
                        this.password = null;
                        this.confirmPassword = null;
                        this.userName = null;
                        this.bol = null;
                        this.bol1 = null;
                        this.bol2 = null;
                        this.bol3 = null;
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        //this.activado = true;
                        this.$vs.notify({
                            title: "Satisfactorio",
                            text: "Médico creado satisfactoriamente",
                            color: "success",
                            iconPack: 'feather',
                            icon: 'icon-check'
                        });
                        this.$router.push("/listadoUsurios");
                    })
                    .catch(response => {
                        //this.message = "Ya existe un usuario con este email.";
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        //this.activado1 = true;
                        console.log(response);
                    });
            }
        },
        watch: {
            email: function (val, oldVal) {
                const re =
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                this.bol = re.test(String(val).toLowerCase());
            },
            password: function (val, oldVal) {
                if (val.length < 8) {
                    this.bol1 = false;
                } else {
                    this.bol1 = true;
                }
            },
            confirmPassword: function (val, oldVal) {
                if (val.length < 8) {
                    this.bol2 = false;
                } else {
                    this.bol2 = true;
                }

                if (val == this.password) {
                    this.bol3 = true;
                } else {
                    this.bol3 = false;
                }
            }
        }
    };

</script>
