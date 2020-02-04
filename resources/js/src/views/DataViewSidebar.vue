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
        <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
          <vx-card>
            <vs-table :data="medicines">
              <template slot="thead">
                <vs-th>Nombre</vs-th>
                <vs-th>Precentación</vs-th>
                <vs-th>Precio</vs-th>
                <vs-th>Cantidad</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].name">{{ data[indextr].name }}</vs-td>

                  <vs-td :data="data[indextr].presentation">{{ data[indextr].presentation }}</vs-td>

                  <vs-td :data="data[indextr].price">{{ data[indextr].price }}</vs-td>

                  <vs-td><vs-input-number/></vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </vx-card>
        </div>
        <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
          <vx-card>
            <p v-text="'Total ' + subtotal1"></p>
            <vs-divider class="mb-0"></vs-divider>
            <p>Tarjeta de Crédito</p>
            <div class="vx-row">
              <vs-input
                label="Nombre del Titular"
                v-model="phone"
                class="mt-5 w-full"
                name="item-name"
              />
            </div>
            <div class="vx-row">
              <vs-input
                label="Número de Tarjeta"
                type="number"
                v-model="phone"
                class="mt-5 w-full"
                name="item-name"
              />
            </div>
            <div class="vx-row">
              <div>
                <vs-input label="CVV" v-model="phone" class="mt-5 w-full" name="item-name" />
              </div>
            </div>
          </vx-card>
        </div>
      </div>

      <vs-button @click="popupActive2=false, isSidebarActiveLocal = false" color="primary" type="filled">Realizar Pedido</vs-button>
      <vs-button @click="popupActive2=false, isSidebarActiveLocal = false" color="danger" type="filled">Cancelar</vs-button>
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
        </div>
        <!-- CATEGORY -->
        <div class="vx-row">
          <vs-textarea label="Dirección de Facturación" v-model="addressf" />
        </div>
        <div class="vx-row">
          <vs-textarea label="Dirección de Envió" v-model="addresse" />
        </div>
      </div>
    </vx-card>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button class="mr-6" color="warning">Actualizar</vs-button>
      <vs-button @click="submitData">Nuevo Pedido</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

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
      subtotal1: 0,
      subtotal2: 0,
      medicines: [
        {
          name: "Lunes 50 mg",
          presentation: "Caja 20 tabletas",
          price: "Q 50",
          totale: "20",
          unidad: "Tabletas"
        },
        {
          name: "Bipark",
          presentation: "Blister 10 tabletas",
          price: "Q 20",
          totale: "10",
          unidad: "Tabletas"
        }
      ],
      popupActive2: false,
      nit: null,
      name: null,
      phone: null,
      email: null,
      genre: null,
      addressf: null,
      addresse: null,
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
        let { nit, name, phone, email, addressf, addresse } = JSON.parse(
          JSON.stringify(this.data)
        );
        this.nit = nit;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.addresse = addresse;
        this.addressf = addressf;
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
    initValues() {
      if (this.data.id) return;
      this.dataId = null;
      this.dataName = "";
      this.dataCategory = null;
      this.dataOrder_status = "pending";
      this.dataPrice = 0;
      this.dataImg = null;
    },
    submitData() {
      /*this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.dataId,
            name: this.dataName,
            img: this.dataImg,
            category: this.dataCategory,
            order_status: this.dataOrder_status,
            price: this.dataPrice
          };

          if (this.dataId !== null && this.dataId >= 0) {
            this.$store.dispatch("dataList/updateItem", obj).catch(err => {
              console.error(err);
            });
          } else {
            delete obj.id;
            obj.popularity = 0;
            this.$store.dispatch("dataList/addItem", obj).catch(err => {
              console.error(err);
            });
          }

          this.$emit("closeSidebar");
          this.initValues();
        }
      });*/
      //this.$router.push("/recetaFinal");
      this.popupActive2 = true;
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
