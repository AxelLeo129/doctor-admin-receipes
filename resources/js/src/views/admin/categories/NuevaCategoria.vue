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
        <vx-card>
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
                <vs-button
                  color="warning"
                  type="border"
                  class="mb-2"
                  @click="nombre =  null"
                >Resetear</vs-button>
              </div>
            </div>
          </form>
        </vx-card>
      </div>
      <div class="vx-col md:w-1/2 w-full">
        <vx-card>
          <h3>Registra la categoría del medicamentos ...</h3>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nobis quo sunt ducimus minima unde labore dolores saepe qui doloribus numquam, accusantium ad adipisci voluptates velit necessitatibus vel totam dolor?</p>
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
        url: "http://127.0.0.1:8000/api/postCategory",
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
          this.$router.push("/listadoCategorias");
          this.$vs.notify({
            title: "Agregado",
            text: "Categoría creada exitosamente.",
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