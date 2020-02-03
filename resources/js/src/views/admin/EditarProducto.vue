<template>
  <div>
    <vs-popup title="Actualizar Datos" :active.sync="popupActive2">
      <p>¿Está seguro de actualizar esta información?</p>
      <br />
      <vs-button @click="doUpdate" color="primary" type="filled">Actualizar</vs-button>
      <vs-button @click="popupActive2=false" color="danger" type="filled">Cancelar</vs-button>
    </vs-popup>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="flex items-start flex-col sm:flex-row">
          <img v-bind:src="imagen" class="mr-8 rounded h-24 w-24" />
          <!-- <vs-avatar :src="data.avatar" size="80px" class="mr-4" /> -->
          <div>
            <p class="text-lg font-medium mb-2 mt-4 sm:mt-0" v-text="name"></p>
            <input
              accept="image/*"
              type="file"
              color="danger"
              id="image"
              name="image"
              @change="handleFileSelect($event)"
              class="fileInput"
            />
            <label for="image" class="subir">Cambiar Foto</label>
            <div id="info1"></div>
            <span></span>
          </div>
          <vs-alert
            color="danger"
            title="Error"
            :active.sync="activado"
            closable
            style="width: 70%"
            icon-pack="feather"
            close-icon="icon-x"
          >{{message}}</vs-alert>
        </div>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col md:w-1/2 w-full">
        <vs-input class="w-full mt-4" label="Nombre" v-model="name" name="name" />
        <span class="text-danger text-sm" v-show="name === ''">{{ errors.campo }}</span>

        <div class="mt-4">
          <vs-textarea class="vs-textarea" label="Nombre del Componente" v-model="description" />
          <span class="text-danger text-sm" v-show="description === ''">{{ errors.campo }}</span>
        </div>

        <vs-input
          class="w-full mt-4"
          label="Precio"
          v-model="price"
          name="precio"
          placeholder="Q"
          type="number"
        />
        <span class="text-danger text-sm" v-show="price === ''">{{ errors.campo }}</span>

        <div class="mt-4">
          <label class="vs-input--label">Categoría</label>
          <v-select
            multiple
            :closeOnSelect="false"
            v-model="category"
            :options="categorias"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
          />
        </div>
        <span class="text-danger text-sm" v-show="category === ''">{{ errors.campo }}</span>
      </div>

      <div class="vx-col md:w-1/2 w-full">
        <vs-input
          class="w-full mt-4"
          label="Cantidad"
          v-model="quantity"
          name="cantidad"
          type="number"
        />
        <span class="text-danger text-sm" v-show="quantity === ''">{{ errors.campo }}</span>
        <div class="mt-4">
          <vs-textarea class="vs-textarea" label="Precentación" v-model="precentation" />
          <span class="text-danger text-sm" v-show="precentation === ''">{{ errors.campo }}</span>
        </div>

        <vs-input class="w-full mt-4" label="Laboratorio" v-model="laboratory" name="laboratorio" />
        <span class="text-danger text-sm" v-show="laboratory === ''">{{ errors.campo }}</span>

        <vs-input class="w-full mt-4" label="Bodega de Despacho" v-model="warehouse" name="bodega" />
        <span class="text-danger text-sm" v-show="warehouse === ''">{{ errors.campo }}</span>
      </div>

      <div class="vx-row">
        <div class="vx-col md:w-1/2 w-full">
          <span></span>
        </div>
        <div class="vx-col w-full">
          <div class="mt-8 flex flex-wrap items-center justify-end">
            <vs-button
              class="ml-auto mt-2"
              color="warning"
              @click="popupActive2 = true"
              :disabled="name == '' || quantity == '' || description == '' || precentation == '' || price == '' || laboratory == '' || category == '' || warehouse == ''"
            >Guardar</vs-button>
            <vs-button class="ml-4 mt-2" type="border" @click="getData" color="danger">Resetear</vs-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vSelect from "vue-select";
import axios from "axios";

export default {
  components: {
    vSelect
  },
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      errors: {
        campo: "Este campo es requerido."
      },
      imagen: "/images/medicamentos/demo.jpg",
      name: null,
      precentation: null,
      description: null,
      quantity: null,
      price: null,
      id: null,
      laboratory: null,
      warehouse: null,
      category: [],
      category1: null,
      message: "Error en el servidor, por favor inténtalo más tarde.",
      activado: false,
      base64textString: "",
      categorias: [],
      categories: [],
      popupActive2: false,
    };
  },
  computed: {
    status_local: {
      get() {
        return {
          label: this.capitalize(this.data_local.status),
          value: this.data_local.status
        };
      },
      set(obj) {
        this.data_local.status = obj.value;
      }
    },
    role_local: {
      get() {
        return {
          label: this.capitalize(this.data_local.role),
          value: this.data_local.role
        };
      },
      set(obj) {
        this.data_local.role = obj.value;
      }
    },
    validateForm() {
      return !this.errors.any();
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.openLoading();
      this.category = [];
      this.id = this.$route.params.productId;
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getProduct/" + this.id,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          if (Response.data.length == 0) {
            axios({
              method: "get",
              url: "http://127.0.0.1:8000/api/getProduct1/" + this.id,
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
                    text: "Producto no encontrado.",
                    color: "warning"
                  });
                  this.$router.push("/consola");
                } else {
                  this.name = Response.data[0].name;
                  this.imagen =
                    "data:image/png;base64," + Response.data[0].image;
                  this.base64textString = Response.data[0].image;
                  this.quantity = Response.data[0].quantity;
                  this.description = Response.data[0].description;
                  this.precentation = Response.data[0].precentation;
                  this.price = Response.data[0].price;
                  this.laboratory = Response.data[0].laboratory;
                  this.warehouse = Response.data[0].warehouse;
                  this.activeLoading = false;
                  this.$vs.loading.close();
                }
              })
              .catch(err => {
                console.log(err);
                this.activeLoading = false;
                this.$vs.loading.close();
                this.$vs.notify({
                  title: "Precaución",
                  text: "Producto no encontrado.",
                  color: "warning"
                });
                this.$router.push("/consola");
              });
          } else {
            this.name = Response.data[0].name;
            this.imagen = "data:image/png;base64," + Response.data[0].image;
            this.base64textString = Response.data[0].image;
            this.quantity = Response.data[0].quantity;
            this.description = Response.data[0].description;
            this.precentation = Response.data[0].precentation;
            this.price = Response.data[0].price;
            this.laboratory = Response.data[0].laboratory;
            this.category1 = Response.data[0].categories.split(",");
            this.category1.forEach(element => {
              element = parseInt(element);
              this.categories.push(element);
            });
            this.warehouse = Response.data[0].warehouse;
            this.getCategories();
            this.activeLoading = false;
            this.$vs.loading.close();
          }
        })
        .catch(err => {
          console.log(err);
          this.activeLoading = false;
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Precaución",
            text: "Producto no encontrado.",
            color: "warning"
          });
          this.$router.push("/consola");
        });
    },
    getCategories() {
      let token = localStorage.getItem("tu");
      let idu = localStorage.getItem("ui");
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
            if (element.user_id == idu) {
              this.categorias.push({
                label: element.name,
                value: element.id
              });
              if (this.categories.includes(element.id)) {
                this.category.push({
                  label: element.name,
                  value: element.id
                });
              }
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    doUpdate() {
      this.popupActive2 = false;
      this.openLoading();
      let token = localStorage.getItem("tu");
      let arrayFinal = [];
      this.category.forEach(element => {
        arrayFinal.push(element.value);
      });
      axios({
        method: "put",
        url: "http://127.0.0.1:8000/api/putProduct",
        data: JSON.stringify({
          id: this.id,
          name: this.name,
          image: this.base64textString,
          description: this.description,
          price: this.price,
          precentation: this.precentation,
          laboratory: this.laboratory,
          warehouse: this.warehouse,
          quantity: this.quantity
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/deleteProdCate/" + this.id,
            headers: {
              authorization: "Bearer " + token,
              "content-type": "application/json"
            }
          })
            .then(Response => {
              axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/postProdCate",
                data: JSON.stringify({
                  categories: arrayFinal,
                  product_id: this.id
                }),
                headers: {
                  authorization: "Bearer " + token,
                  "content-type": "application/json"
                }
              })
                .then(Response => {
                  this.activeLoading = false;
                  this.$vs.loading.close();
                  this.$router.push("/consola");
                  this.$vs.notify({
                    title: "Actualizado",
                    text: "Producto actualizado exitosamente.",
                    color: "success"
                  });
                })
                .catch(err => {
                  this.activeLoading = false;
                  this.$vs.loading.close();
                  activado = true;
                  //console.log(err);
                });
            })
            .catch(err => {
              this.activeLoading = false;
              this.$vs.loading.close();
              this.activado = true;
              console.log(err);
            });
        })
        .catch(err => {
          this.activeLoading = false;
          this.$vs.loading.close();
          this.activado = true;
          console.log(err);
        });
    },
    handleFileSelect(evt) {
      let files = evt.target.files;
      let file = files[0];
      let nombre = files[0].name;
      document.getElementById("info1").innerHTML = nombre;

      if (files && file) {
        let reader = new FileReader();

        reader.onload = this._handleReaderLoaded1.bind(this);

        reader.readAsBinaryString(file);
      }
    },
    _handleReaderLoaded1(readerEvt) {
      let binaryString1 = readerEvt.target.result;
      this.base64textString = btoa(binaryString1);
      this.imagen = "data:image/png;base64," + this.base64textString;
    },
    openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    capitalize(str) {
      return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
    },
    save_changes() {
      if (!this.validateForm) return;

      // Here will go your API call for updating data
      // You can get data in "this.data_local"
    },
    reset_data() {
      this.data_local = JSON.parse(JSON.stringify(this.data));
    },
    update_avatar() {
      // You can update avatar Here
      // For reference you can check dataList example
      // We haven't integrated it here, because data isn't saved in DB
    }
  }
};
</script>

<style lang="scss">
.fileInput {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.subir {
  padding: 5px 10px;
  background: #003da5;
  color: #fff;
  border: 0px solid #fff;
  border-radius: 15px 15px 15px 15px;
}

.subir:hover {
  color: #fff;
  background: #003da5;
}

.vs-textarea {
  background-color: white;
}
</style>
