<template>
    <div>
        <vx-card>
            <div class="vx-row">
                <div class="vx-col md:w-1/4 w-full">
                    <label>Datos Generales</label>
                </div>
            </div>
            <br>
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
                    <div>
                        <label class="vs-input--label" style="color: gray;">Roles</label>
                        <v-select v-model="rol" :options="roles" />
                    </div>
                </div>
                <div class="vx-col sm:w-1/2 w-full mb-2">
                    <vs-input class="w-full" v-show="rol.value == 2" label-placeholder="No. Colegiado"
                        v-model="noCollegiate" />
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-button v-if="rol.value != 2" color="warning" class="float-right mt-6" @click="registrar"
                        :disabled="rol == null || rol == '' || name == null || name == '' || email == '' || email == null || bol == false || bol == null">
                        Actualizar</vs-button>
                    <vs-button v-if="rol.value == 2" color="warning" class="float-right mt-6" @click="registrar"
                        :disabled="rol == null || rol == '' || name == null || name == '' || email == '' || email == null || bol == false || bol == null || noCollegiate == '' || noCollegiate == null">
                        Actualizar</vs-button>
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
                id: "",
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
                rol: {
                    label: '',
                    value: 0
                },
                roles: []
            };
        },
        components: {
            "v-select": vSelect
        },
        created() {
            this.id = this.$route.params.idUsuario;
            this.getUser();
        },
        methods: {
            getUser() {
                this.openLoading();
                let token = localStorage.getItem("tu");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getUser/" + this.id,
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        //console.log(Response);
                        this.name = Response.data[0].name;
                        this.email = Response.data[0].email;
                        this.noCollegiate = Response.data[0].noCollegiate;
                        let r = parseInt(Response.data[0].rol);
                        this.getRoles(r);
                        //this.rol = r;
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    });
            },
            getRoles(r) {
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
                        this.roles = [];
                        this.rol = [];
                        Response.data.forEach(element => {
                            this.roles.push({
                                label: element.name,
                                value: element.id
                            });
                            if (r == element.id) {
                                this.rol = {
                                    label: element.name,
                                    value: element.id
                                };
                            }
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
                axios({
                        method: "put",
                        url: "http://127.0.0.1:8000/api/putUser3",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        },
                        data: JSON.stringify({
                            id: this.id,
                            name: this.name,
                            email: this.email,
                            noCollegiate: this.noCollegiate,
                            rol: this.rol.value,
                        })
                    })
                    .then(response => {
                        //console.log(response);
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
            }
        }
    };

</script>
