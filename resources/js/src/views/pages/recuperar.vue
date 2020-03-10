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
                <vs-alert
                  color="success"
                  title="Success"
                  :active.sync="activado"
                  closable
                  icon-pack="feather"
                  close-icon="icon-x"
                >Solicitud enviada exitosamente</vs-alert>
                <vs-alert
                  color="danger"
                  title="Error"
                  :active.sync="activado1"
                  closable
                  icon-pack="feather"
                  close-icon="icon-x"
                >{{message}}</vs-alert>
                <br />
                <div class="clearfix">

                  <vs-input
                    data-vv-validate-on="blur"
                    name="email"
                    type="email"
                    v-model="email"
                    label="Email"
                    placeholder="Email"
                    class="w-full mt-5"
                  />
                  <span class="text-danger text-sm" v-if="email === ''">{{ errors.email }}</span>
                  <span
                    class="text-danger text-sm"
                    v-if="bol === false && email !== ''"
                  >{{ errors.email1 }}</span>
                  <br>
                  <br>
                  <vs-button type="border" to="/" class="mt-6">Inicia Sesión</vs-button>
                  <vs-button
                    class="float-right mt-6"
                    @click="registrar"
                    :disabled="name == null || name == '' || noCollegiate == null || noCollegiate == '' || email == '' || email == null || bol == false || bol == null || password == null || password == '' || bol1 == false || bol1 == null || confirmPassword == '' || confirmPassword == null || bol2 == false || bol2 == null || bol3 == false || bol3 == null"
                  >Solicitar</vs-button>
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
      message: "",
      checkbox_remember_me: false
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
        url: "http://127.0.0.1:8000/api/register",
        data: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password,
          userName: this.name,
          noCollegiate: this.noCollegiate,
          c_password: this.confirmPassword,
          rol: "2",
          id_visitador: 1
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
          this.activado = true;
        })
        .catch(response => {
          this.message = "Ya existe un usuario con este email.";
          this.activeLoading = false;
          this.$vs.loading.close();
          this.activado1 = true;
          console.log(response);
        });
    }
  },
  watch: {
    email: function(val, oldVal) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.bol = re.test(String(val).toLowerCase());
    },
    password: function(val, oldVal) {
      if (val.length < 8) {
        this.bol1 = false;
      } else {
        this.bol1 = true;
      }
    },
    confirmPassword: function(val, oldVal) {
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
