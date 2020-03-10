<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@assets/images/pages/register.jpg" alt="register" class="mx-auto" />
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="px-8 pt-8 register-tabs-container" style="padding-bottom: 2rem;">
                                <div class="vx-card__title mb-4">
                                    <h4 class="mb-4">Recuperar Contraseña</h4>
                                    <p>Llena el campo para solicitar recuperar tu contraseña.</p>
                                </div>
                                <vs-alert color="danger" title="Error" :active.sync="activado1" closable
                                    icon-pack="feather" close-icon="icon-x">{{message}}</vs-alert>
                                <br />
                                <div class="clearfix">
                                    <form action>
                                        <vs-input data-vv-validate-on="blur" name="email" type="email" v-model="email"
                                            label="Email" placeholder="Email" class="w-full mt-5" />
                                        <span class="text-danger text-sm" v-if="email === ''">Este campo es
                                            requerido.</span>
                                        <span class="text-danger text-sm" v-if="bol === false && email !== ''">Ingrese
                                            un email válido.</span>
                                        <br />
                                        <br />
                                        <vs-button type="border" to="/" class="mt-6">Inicia Sesión</vs-button>
                                        <vs-button class="float-right mt-6" @click="registrar"
                                            :disabled="email == '' || email == null || bol == false || bol == null">
                                            Solicitar</vs-button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>
<script>
    import axios from "axios";

    export default {
        data() {
            return {
                bol: null,
                email: null,
                activado1: false,
                message: "Error en el Servidor."
            };
        },
        methods: {
            openLoading() {
                this.activeLoading = true;
                this.$vs.loading({
                    type: "default"
                });
            },
            registrar() {
                this.openLoading();
                axios({
                        method: "post",
                        url: "http://127.0.0.1:8000/api/forgotPassword",
                        data: JSON.stringify({
                            email: this.email
                        }),
                        headers: {
                            "content-type": "application/json"
                        }
                    })
                    .then(response => {
                        if (response.data == "Usuario no Encontrado") {
                            this.$vs.loading.close();
                            this.activeLoading = false;
                            this.message = "Usuario no Encontrado";
                            this.activado1 = true;
                            this.email = null;
                        } else {
                            this.$vs.loading.close();
                            this.activeLoading = false;
                            this.email = null;
                            this.$vs.notify({
                                time: 4000,
                                title: 'Exitosamente',
                                text: 'Solicitud enviada exitosamente, por favor ingresa a tu corro electrónico.',
                                color: 'success'
                            });
                            this.$router.push('/home');
                        }
                    })
                    .catch(err => {
                        this.message = "Error de servidor.";
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        this.activado1 = true;
                        this.email = null;
                        console.log(err);
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
