<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>Datos del Clíente</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <vs-popup fullscreen title="Medicamentos" :active.sync="popupActive2">
      <p>Seleccione los medicamentos a enviar.</p>
      <br />

      <div class="vx-row">
        <div class="vx-col w-full sm:w-2/3 lg:w-2/3 mb-base">
          <vx-card>
            <div class="vx-row">
              <vs-table :data="medicines">
                <template slot="thead">
                  <vs-th>Nombre</vs-th>
                  <vs-th>Precentación</vs-th>
                  <vs-th>Precio</vs-th>
                  <vs-th>Cantidad</vs-th>
                  <vs-th>Total Esperado</vs-th>
                  <vs-th>Unidad</vs-th>
                  <vs-th>Subtotal</vs-th>
                </template>

                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].name">{{ data[indextr].name }}</vs-td>

                    <vs-td :data="data[indextr].presentation">{{ data[indextr].presentation }}</vs-td>

                    <vs-td :data="data[indextr].price">{{ data[indextr].price }}</vs-td>

                    <vs-td>
                      <vs-input-number min="0" v-model="data[indextr].cantidad" />
                    </vs-td>

                    <vs-td :data="data[indextr].totale">{{ data[indextr].totale }}</vs-td>

                    <vs-td :data="data[indextr].unidad">{{ data[indextr].unidad }}</vs-td>

                    <vs-td
                      :data="(data[indextr].subtotal = data[indextr].price * data[indextr].cantidad)"
                    >{{ data[indextr].subtotal }}</vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </div>
            <div class="vx-row">
              <vs-button
                class="mt-5"
                @click="popupActive2=false, isSidebarActiveLocal = false"
                color="warning"
                type="filled"
              >Regresar</vs-button>
            </div>
          </vx-card>
        </div>
        <div class="vx-col w-full sm:w-1/3 lg:w-1/3 mb-base">
          <vx-card>
            <p v-text="'Total '"></p>
            <vs-divider class="mb-0"></vs-divider>
            <div class="vx-row">
              <vx-tooltip class="mt-5 mr-4" text="Tarjeta de Crédito">
                <vs-switch v-model="switch1" />
              </vx-tooltip>
              <p class="mt-5">Tarjeta de Crédito</p>
            </div>
            <div class="vx-row" v-if="switch1 == true">
              <vs-input
                label="Nombre del Titular"
                v-model="nameT"
                class="mt-5 w-full"
                name="item-name"
              />
            </div>
            <div class="vx-row" v-if="switch1 == true">
              <vs-input
                label="Número de Tarjeta"
                type="number"
                v-model="numberT"
                class="mt-5 w-full"
                name="item-name"
              />
            </div>
            <div class="vx-row" v-if="switch1 == true">
              <div>
                <vs-input
                  label="Número de Transacción"
                  v-model="numberTr"
                  class="mt-5 w-full"
                  name="item-name"
                />
              </div>
            </div>
            <div class="vx-row">
              <vx-tooltip class="mt-5 mr-4" text="Pago contra Entrega">
                <vs-switch v-model="switch2" />
              </vx-tooltip>
              <p class="mt-5">Pago contra Entrega</p>
            </div>
            <div class="vx-row">
              <p class="mt-5">Paga en efectivo en el momento de la entrega.</p>
            </div>
            <div class="vx-row">
              <vs-button
                class="mt-5"
                @click="popupActive2=false, isSidebarActiveLocal = false, notificacion()"
                color="primary"
                type="filled"
              >Realizar el Pedido</vs-button>
            </div>
          </vx-card>
        </div>
      </div>
    </vs-popup>

    <vx-card class="scroll-area--data-list-add-new">
      <div class="p-3">
        <!-- NAME -->
        <div class="vx-row">
          <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
            <vs-input label="Nit" v-model="nit" class="mt-5 w-full" name="item-name" />
          </div>
          <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
            <vs-input label="Nombre Completo" v-model="name" class="mt-5 w-full" name="item-name" />
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
            <vs-input label="Teléfono" v-model="phone" class="mt-5 w-full" name="item-name" />
          </div>
          <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
            <vs-input label="Email" v-model="email" class="mt-5 w-full" name="item-name" />
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
            <vs-select v-model="genre" label="Género" class="mt-5 w-full" name="item-category">
              <vs-select-item
                :key="item.value"
                :value="item.value"
                :text="item.text"
                v-for="item in category_choices"
              />
            </vs-select>
          </div>
          <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
            <vs-input
              label="Fecha de Nacimiento"
              v-model="date"
              class="mt-5 w-full"
              name="date"
              type="date"
            />
          </div>
        </div>
        <!-- CATEGORY -->
        <div class="vx-row">
          <vs-textarea label="Dirección de Facturación" v-model="addressf" />
        </div>
        <div class="vx-row">
          <vs-checkbox v-model="checkBox1" class="mt-5 w-full">Dirección envio igual a facturación</vs-checkbox>
          <vs-textarea
            label="Dirección de Envió"
            v-model="addresse"
            v-show="checkBox1 == false"
            class="mt-5 w-full"
          />
          <vs-textarea
            label="Dirección de Envió"
            v-model="addressc"
            v-show="checkBox1 == true"
            class="mt-5 w-full"
          />
        </div>

        <div class="vx-row">
          <vx-tooltip class="mt-5 mr-4" text="Tarjeta de Crédito">
            <vs-switch v-model="switch3" />
          </vx-tooltip>
          <p class="mt-5">¿Enviar a una dirección diferente?</p>
        </div>

        <div class="vx-row" v-if="switch3 == true">
          <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
            <vs-input
              label="Nombre de la Empresa"
              v-model="empresa"
              class="mt-5 w-full"
              name="item-name"
            />
          </div>
          <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
            <vs-input label="Nombre Completo" v-model="name1" class="mt-5 w-full" name="item-name" />
          </div>
        </div>
        <div class="vx-row" v-if="switch3 == true">
          <vs-textarea label="Dirección de Envió" v-model="direccion" />
        </div>
      </div>
    </vx-card>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button @click="submitData">Nuevo Pedido</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import axios from "axios";

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      idRecipe: null,
      checkBox1: true,
      switch3: false,
      switch2: false,
      switch1: true,
      nameT: null,
      numberT: null,
      numberTr: null,
      subtotal1: 0,
      subtotal2: 0,
      medicines: [],
      itms: [],
      popupActive2: false,
      nit: null,
      name: null,
      name1: null,
      empresa: null,
      direccion: null,
      phone: null,
      email: null,
      date: null,
      genre: null,
      addressf: null,
      addresse: null,
      addressc: null,
      dataId: null,
      dataName: "",
      dataCategory: null,
      dataImg: null,
      dataOrder_status: "pending",
      dataPrice: 0,

      category_choices: [
        { text: "Femenino", value: "femenino" },
        { text: "Masculino", value: "masculino" }
      ],

      order_status_choices: [
        { text: "Pending", value: "pending" },
        { text: "Canceled", value: "canceled" },
        { text: "Delivered", value: "delivered" },
        { text: "On Hold", value: "on_hold" }
      ],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    };
  },
  watch: {
    isSidebarActive(val) {
      this.nit = null;
      this.name = null;
      this.phone = null;
      this.email = null;
      this.addresse = null;
      this.addressf = null;
      if (!val) return;
      if (Object.entries(this.data).length === 0) {
        this.initValues();
        //this.$validator.reset()
      } else {
        console.log(this.data);
        let {
          client_nit,
          client_name,
          client_phone,
          client_email,
          client_addressf,
          client_addresse
        } = JSON.parse(JSON.stringify(this.data));
        this.nit = client_nit;
        this.name = client_name;
        this.phone = client_phone;
        this.email = client_email;
        this.addresse = client_addresse;
        this.addressf = client_addressf;
        this.addressc = this.addressf;
        this.idRecipe = client_id;
        this.initValues();
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebar");
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid() {
      //return !this.errors.any() && this.dataName && this.dataCategory && (this.dataPrice > 0)
    },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  methods: {
    getReceProd(id) {
      let token = localStorage.getItem("tu");
      let rol = localStorage.getItem("ru");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getReceProd/" + id,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          console.log(Response);
          /*Response.data.forEach(element => {
            this.users.push(element);
          });
          this.popupActive2 = true;*/
        })
        .catch(err => {
          console.log(err);
        });
    },
    notificacion() {
      this.$vs.notify({
        title: "Enviado",
        text: "Pedido enviado correctamente",
        color: "success"
      });
    },
    initValues() {
      if (this.data.id) return;
      this.dataId = null;
      this.dataName = "";
      this.dataCategory = null;
      this.dataOrder_status = "pending";
      this.dataPrice = 0;
      this.dataImg = null;
    },
    getItem(id){
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getReceProd/" + id,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          Response.data.forEach(element => {
            this.itms.push(element);
          });
          this.popupActive2 = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitData() {
      //this.getItem(this.idRecipe);
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getProducts",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          Response.data.forEach(element => {
            this.medicines.push(element);
          });
          this.popupActive2 = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateCurrImg(input) {
      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
          this.dataImg = e.target.result;
        };
        reader.readAsDataURL(input.target.files[0]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);

  &:not(.ps) {
    overflow-y: auto;
  }
}
</style>
