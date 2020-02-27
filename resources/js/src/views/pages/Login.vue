<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="layout--full-page">
    <div
      class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
      id="page-login"
    >
      <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
        <vx-card>
          <div slot="no-body" class="full-page-bg-color">
            <div class="vx-row no-gutter justify-center items-center">
              <div class="vx-col hidden lg:block lg:w-1/2">
                <img src="@assets/images/pages/login.png" alt="login" class="mx-auto" />
              </div>

              <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                <div class="px-8 pt-8 login-tabs-container" style="padding: 4rem;">
                  <div class="vx-card__title mb-4">
                    <h4 class="mb-4">Ingresar</h4>
                    <p>Bienvenido de nuevo, inicie sesión en su cuenta.</p>
                  </div>
                  <vs-alert
                    color="danger"
                    title="Error"
                    :active.sync="activado"
                    closable
                    icon-pack="feather"
                    close-icon="icon-x"
                  >{{message}}</vs-alert>
                  <br />
                  <div>
                    <form v-on:submit.prevent="doLogin()">
                      <vs-input
                        name="email"
                        icon-no-border
                        icon="icon icon-user"
                        icon-pack="feather"
                        label-placeholder="No.Colegiado/Email"
                        v-model="email"
                        class="w-full"
                      />

                      <vs-input
                        type="password"
                        name="password"
                        icon-no-border
                        icon="icon icon-lock"
                        icon-pack="feather"
                        label-placeholder="Password"
                        v-model="password"
                        class="w-full mt-6"
                      />

                      <div class="flex flex-wrap justify-between my-5">
                        <!-- <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Recordarme</vs-checkbox> -->
                        <!-- <router-link to>¿Olvidó su Contraseña?</router-link> -->
                      </div>
                      <!-- <vs-button type="border" @click="registro">Registro</vs-button> -->
                      <vs-button class="float-right" @click="doLogin()">Ingresar</vs-button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      activado: false,
      message: "Email o contraseña incorrectas.",
      email: "",
      password: "",
      rol: "",
      user_id: null,
      token: "",
      checkbox_remember_me: true
    };
  },
  methods: {
    registro() {
      this.$router.push("/register");
    },
    openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    doLogin() {
      this.openLoading();
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/login",
        data: JSON.stringify({
          email: this.email,
          password: this.password
        }),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(Response => {
          this.token = Response.data.success.token;
          this.rol = Response.data.rol;
          this.user_id = Response.data.id;
          let registro = Response.data.regis;
          localStorage.setItem("tu", this.token);
          localStorage.setItem("ru", this.rol);
          localStorage.setItem("ui", this.user_id);
          localStorage.setItem("regi", registro);
          if (this.rol == 1) {
            this.$router.push("/consola");
          } else if(this.rol==5){
            this.$router.push("/boodskapper");
          }
          else {
            this.$router.push("/home");
          }
          this.activeLoading = false;
          this.$vs.loading.close();
        })
        .catch(err => {
          this.activeLoading = false;
          this.$vs.loading.close();
          this.activado = true;
          this.password = "";
        });
    }
  }
};
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
</style>
