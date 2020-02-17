<template>
  <div>
    <vs-popup title="Actualizar Categoría" :active.sync="popupActive2">
      <p>¿Está seguro de actualizar esta información?</p>
      <br />
      <vs-button @click="onUpdate" color="primary" type="filled">Actualizar</vs-button>
      <vs-button @click="popupActive2=false" color="danger" type="filled">Cancelar</vs-button>
    </vs-popup>
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
          <form v-on:submit.prevent="popupActive2 = true">
            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/3 w-full">
                <span>Nombre</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" v-model="nombre" />
                <span class="text-danger text-sm" v-show="nombre === ''">Este campo es requerido.</span>
              </div>
            </div>
            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/3 w-full">
                <span>Unidad</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" v-model="unidad" />
                <span class="text-danger text-sm" v-show="unidad === ''">Este campo es requerido.</span>
              </div>
            </div>
            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/3 w-full">
                <span>Cantidad</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" type="number" v-model="cantidad" />
                <span class="text-danger text-sm" v-show="cantidad === ''">Este campo es requerido.</span>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col sm:w-2/3 w-full ml-auto">
                <vs-button
                  class="mr-3 mb-2"
                  :disabled="nombre == null || nombre == ''"
                  @click="popupActive2 = true"
                  color="warning"
                >Guardar</vs-button>
                <vs-button
                  color="danger"
                  type="border"
                  class="mb-2"
                  @click="getCategoria()"
                >Resetear</vs-button>
              </div>
            </div>
          </form>
        </vx-card>
      </div>
      <div class="vx-col md:w-1/2 w-full">
        <vx-card style="height: 19rem;">
          <h3>Edita las Presentaciones de los medicamentos ...</h3>
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
      cantidad: null,
      unidad: null,
      id: null,
      idu: null,
      activado: false,
      popupActive2: false
    };
  },
  methods: {
    getCategoria() {
      this.openLoading();
      this.id = this.$route.params.preId;
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getPre/" + this.id,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          if (Response.data.length == 0) {
            this.activeLoading = false;
            this.$vs.loading.close();
            this.$vs.notify({
              title: "Atención",
              text: "Presentación no encontrada.",
              color: "warning"
            });
            this.$router.push("/listadoPres");
          } else {
            this.nombre = Response.data[0].name;
            this.unidad = Response.data[0].unidad;
            this.cantidad = Response.data[0].cantidad;
            this.activeLoading = false;
            this.$vs.loading.close();
          }
        })
        .catch(err => {
          this.activeLoading = false;
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Precaución",
            text: "Presentación no encontrada.",
            color: "warning"
          });
          this.$router.push("/listadoPres");
        });
    },
    openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    onUpdate() {
      this.popupActive2=false;
      this.openLoading();
      let token = localStorage.getItem("tu");
      let id = localStorage.getItem("ru");
      axios({
        method: "put",
        url: "http://127.0.0.1:8000/api/putPre",
        data: JSON.stringify({
          id: this.id,
          name: this.nombre,
          unidad: this.unidad,
          cantidad: this.cantidad,
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
          this.$router.push("/listadoPres");
          this.$vs.notify({
            title: "Actualizado",
            text: "Presentación actualizada exitosamente.",
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
  },
  created() {
    this.getCategoria();
  }
};
</script>