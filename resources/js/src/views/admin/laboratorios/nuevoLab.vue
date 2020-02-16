<template>
  <div>
    <div class="vx-row">
      <vs-alert
        color="danger"
        title="Error"
        :active.sync="activado"
        closable
        icon-pack="feather"
        close-icon="icon-x"
      >Error en el Servidor</vs-alert>
    </div>
    <br />
    <div class="vx-row">
      <div class="vx-col md:w-1/2 w-full">
        <vx-card style="height: 10rem;">
          <form v-on:submit.prevent="onSubmit()">
            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/3 w-full">
                <span>Nombre</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" v-model="nombre" />
                <span class="text-danger text-sm" v-show="nombre === ''">Este campo es requerido.</span>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col sm:w-2/3 w-full ml-auto">
                <vs-button
                  class="mr-3 mb-2"
                  :disabled="nombre == null || nombre == ''"
                  @click="onSubmit"
                  color="success"
                >Guardar</vs-button>
                <vs-button color="danger" type="border" class="mb-2" @click="cancel">Cancel</vs-button>
              </div>
            </div>
          </form>
        </vx-card>
      </div>
      <div class="vx-col md:w-1/2 w-full">
        <vx-card style="height: 10rem;">
          <h3>Nuevo Laboratorio ...</h3>
          <br />
          <p>Registra los laboratorios a los que pertenecen tus medicamentos.</p>
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
      nombre: null,
      activado: false
    };
  },
  methods: {
    cancel() {
      this.$router.push("/listadoRoles");
    },
    openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    onSubmit() {
      this.openLoading();
      let token = localStorage.getItem("tu");
      let id = localStorage.getItem("ui");
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/postLab",
        data: JSON.stringify({
          name: this.nombre,
          user_id: id
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          this.activeLoading = false;
          this.$vs.loading.close();
          this.$router.push("/listadoLabs");
          this.$vs.notify({
            title: "Agregado",
            text: "Laboratorio creado exitosamente.",
            color: "success"
          });
        })
        .catch(err => {
          this.activeLoading = false;
          this.$vs.loading.close();
          activado = true;
          //console.log(err);
        });
    }
  }
};
</script>