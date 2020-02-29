<template>
  <div>
    <div class="vx-row">
      <div class="vx-col md:w-1/2 w-full">
        <vx-input-group class="mb-base">
          <vs-input placeholder="Nombre" v-model="buscar" />

          <template slot="append">
            <div class="append-text bg-primary">
              <span>
                <vs-icon icon="search"></vs-icon>
              </span>
            </div>
          </template>
        </vx-input-group>
      </div>
      <div class="vx-col md:w-1/2 w-full">
        <!-- <vx-input-group class="mb-base">
          <vs-input placeholder="Laboratorio" />

          <template slot="append">
            <div class="append-text bg-primary">
              <span>
                <vs-icon icon="search"></vs-icon>
              </span>
            </div>
          </template>
        </vx-input-group>-->
      </div>
    </div>
    <div class="vx-row">
      <!-- CARD 9: DISPATCHED ORDERS -->
      <div class="vx-col w-full">
        <vx-card>
          <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
              <h4>Categorías</h4>
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
              <div align="right">
                <vs-button color="primary" type="filled" @click="nuevo">Nueva Categoría</vs-button>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <vs-table class="table-dark-inverted">
              <template slot="thead">
                <vs-th>NUMERO.</vs-th>
                <vs-th>NONBRE</vs-th>
                <vs-th>ACCIONES</vs-th>
              </template>

              <template>
                <vs-tr v-for="(item, index) in searchCategorias" :key="item.id">
                  <vs-td>
                    <span v-text="'# ' + (index + 1)"></span>
                  </vs-td>
                  <vs-td>
                    <span v-text="item.name"></span>
                  </vs-td>
                  <vs-td>
                    <span>
                      <vs-button
                        color="warning"
                        type="filled"
                        size="small"
                        @click="edit(item.id)"
                      >Editar</vs-button>
                      <vs-button
                        color="danger"
                        type="filled"
                        size="small"
                        @click="popupActive3=true"
                      >Eliminar</vs-button>
                    </span>
                  </vs-td>
                  <vs-popup title="Eliminar Categoría" :active.sync="popupActive3">
                    <p>¿Está seguro de eliminar esta categoría?</p>
                    <br />
                    <vs-button
                      @click="deleteCategory(item.id)"
                      color="primary"
                      type="filled"
                    >Aceptar</vs-button>
                    <vs-button @click="popupActive3=false" color="danger" type="filled">Cancelar</vs-button>
                  </vs-popup>
                </vs-tr>
              </template>
            </vs-table>
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
      popupActive3: false,
      categorias: [],
      buscar: ""
    };
  },
  methods: {
    nuevo(){
      this.$router.push('/nuevaCategoria');
    },
    edit(id) {
      this.$router.push("/editarCategoria/" + id);
    },
    getData() {
      this.openLoading();
      let token = localStorage.getItem("tu");
      let id = localStorage.getItem("ui");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getCategories",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          Response.data.forEach(element => {
            //if(element.user_id == id){
              this.categorias.push(element);
            //}
          });
          //this.categorias = Response.data;
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
    deleteCategory(id) {
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/deleteCategory/" + id,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          this.getData();
          this.popupActive3 = false;
          this.$vs.notify({
            title: "Eliminado",
            text: "Categoría eliminada exitosamente.",
            color: "success"
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getData();
  },
  computed: {
    searchCategorias: function() {
      let result = this.categorias;
      if (!this.buscar) {
        return result;
      }
      let texto = this.buscar.toLowerCase();
      const filter = event => event.name.toLowerCase().includes(texto);

      return result.filter(filter);
    }
  }
};
</script>