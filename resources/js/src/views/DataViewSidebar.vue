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

    <vs-popup class="holamundo" title="Agregar Producto" :active.sync="popupActive4">
      <vs-table pagination max-items="3" search :data="users">
        <template slot="thead">
          <vs-th sort-key="email">Nombre</vs-th>
          <vs-th sort-key="username">Precentación</vs-th>
          <vs-th sort-key="website">Descripción</vs-th>
          <vs-th sort-key="id">Acción</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].name">{{ data[indextr].name }}</vs-td>

            <vs-td :data="data[indextr].precentacion">{{ data[indextr].precentacion }}</vs-td>

            <vs-td :data="data[indextr].description">{{ data[indextr].description }}</vs-td>

            <vs-td>
              <vs-button
                type="border"
                size="small"
                icon-pack="feather"
                icon="icon-send"
                class="mr-2"
                @click="agregarL(tr)"
              ></vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vs-popup>

    <vs-popup fullscreen title="Medicamentos" :active.sync="popupActive2">
      <p>Seleccione los medicamentos a enviar.</p>
      <br />

      <div class="vx-row">
        <div class="vx-col w-full sm:w-2/3 lg:w-2/3 mb-base">
          <vx-card>
            <div class="vx-row">
              <vs-table :data="medicines" class="responsive">
                <template slot="thead">
                  <vs-th>Nombre</vs-th>
                  <vs-th>Precentación</vs-th>
                  <vs-th>Precio</vs-th>
                  <vs-th>Cantidad</vs-th>
                  <!-- <vs-th>Total Esperado</vs-th> -->
                  <vs-th>Subtotal</vs-th>
                </template>

                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].name">{{ data[indextr].name }}</vs-td>

                    <vs-td :data="data[indextr].precentation">{{ data[indextr].precentation }}</vs-td>

                    <vs-td :data="data[indextr].price">Q {{ data[indextr].price }}</vs-td>

                    <vs-td>
                      <vs-input-number
                        min="0"
                        v-model="data[indextr].cantidad"
                        @input="sumar(data[indextr].cantidad, data[indextr].price, indextr)"
                        @change="sumar(data[indextr].cantidad, data[indextr].price, indextr)"
                      />
                    </vs-td>

                    <!-- <vs-td :data="data[indextr].totale">{{ data[indextr].totale }}</vs-td> -->

                    <vs-td
                      :data="(data[indextr].subtotal = data[indextr].price * data[indextr].cantidad)"
                    >Q {{ data[indextr].subtotal }}</vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </div>
            <div class="vx-row">
              <vs-button
                class="mt-5 mr-3"
                @click="popupActive2=false, isSidebarActiveLocal = false"
                color="warning"
                type="filled"
              >Regresar</vs-button>
              <vs-button class="mt-5 mr-3" @click="agregarP" type="filled">Nuevo Producto</vs-button>
            </div>
          </vx-card>
        </div>
        <div class="vx-col w-full sm:w-1/3 lg:w-1/3 mb-base">
          <vx-card>
            <p v-text="'Total: Q ' + total"></p>
            <vs-divider class="mb-0"></vs-divider>
            <div class="vx-row">
              <ul class="centerx">
                <li>
                  <vs-radio v-model="switch1" vs-value="1">Tarjeta de Crédito</vs-radio>
                </li>
                <li>
                  <vs-radio v-model="switch1" vs-value="2">Pago contra Entrega</vs-radio>
                </li>
              </ul>
            </div>
            <div class="vx-row" v-if="switch1 == '1'">
              <vs-input
                label="Nombre del Titular"
                v-model="nameT"
                class="mt-5 w-full"
                name="item-name"
              />
              <span class="text-danger text-sm" v-show="nameT  === ''">Este campo es requerido.</span>
            </div>
            <div class="vx-row" v-if="switch1 == '1'">
              <vs-input
                label="Número de Tarjeta"
                type="number"
                v-model="numberT"
                class="mt-5 w-full"
                name="item-name"
              />
              <span class="text-danger text-sm" v-show="numberT  === ''">Este campo es requerido.</span>
            </div>
            <div class="vx-row" v-if="switch1 == '1'">
              <vs-input
                label="Número de Transacción"
                v-model="numberTr"
                class="mt-5 w-full"
                name="item-name"
                type="number"
              />
              <span class="text-danger text-sm" v-show="numberTr  === ''">Este campo es requerido.</span>

              <vs-input
                label="Fecha de Vencimiento"
                v-model="numberTr"
                class="mt-5 w-full"
                name="item-name"
                type="date"
              />
              <span class="text-danger text-sm" v-show="numberTr  === ''">Este campo es requerido.</span>
            </div>
            <div class="vx-row" v-if="switch1 == '2'">
              <p class="mt-5">Paga en efectivo en el momento de la entrega.</p>
            </div>
            <div class="vx-row">
              <vs-button
                class="mt-5"
                @click="popupActive2=false, isSidebarActiveLocal = false, notificacion1()"
                color="primary"
                type="filled"
                v-if="tipe == 1 && switch1 == '1'"
                :disabled="total <= 0 || nameT == '' || nameT == null || numberT == '' || numberT == null || numberTr == '' || numberTr == null"
              >Realizar el Pedido</vs-button>
              <vs-button
                class="mt-5"
                @click="popupActive2=false, isSidebarActiveLocal = false, notificacion()"
                color="primary"
                v-if="tipe == 2 && switch1 == '1'"
                type="filled"
                :disabled="total <= 0 || nameT == '' || nameT == null || numberT == '' || numberT == null || numberTr == '' || numberTr == null"
              >Realizar el Pedido</vs-button>

              <vs-button
                class="mt-5"
                @click="popupActive2=false, isSidebarActiveLocal = false, notificacion1()"
                color="primary"
                type="filled"
                v-if="tipe == 1 && switch1 == '2'"
                :disabled="total <= 0"
              >Realizar el Pedido</vs-button>
              <vs-button
                class="mt-5"
                @click="popupActive2=false, isSidebarActiveLocal = false, notificacion()"
                color="primary"
                v-if="tipe == 2 && switch1 == '2'"
                type="filled"
                :disabled="total <= 0"
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
          <vs-input label="Nombre Completo" v-model="name" class="mt-5 w-full" name="item-name" />
          <span class="text-danger text-sm" v-show="name === ''">Este campo es requerido.</span>
        </div>

        <div class="vx-row">
          <vs-input label="Email" v-model="email" class="mt-5 w-full" name="item-name" />
          <span class="text-danger text-sm" v-show="email === ''">Este campo es requerido.</span>
        </div>

        <div class="vx-row">
          <vs-input
            label="Teléfono"
            type="number"
            v-model="phone"
            class="mt-5 w-full"
            name="item-name"
          />
          <span class="text-danger text-sm" v-show="phone === ''">Este campo es requerido.</span>
        </div>

        <div class="vx-row">
          <vs-input
            label="Fecha de Nacimiento"
            v-model="date"
            class="mt-5 w-full"
            name="date"
            type="date"
          />
          <span class="text-danger text-sm" v-show="date === ''">Este campo es requerido.</span>
        </div>

        <div class="vx-row">
          <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
            <vs-select v-model="genre" label="Género" class="mt-5 w-full" name="item-category">
              <vs-select-item
                :key="item.value"
                :value="item.value"
                :text="item.text"
                v-for="item in generos"
              />
            </vs-select>
            <span class="text-danger text-sm" v-show="genre === ''">Este campo es requerido.</span>
          </div>
          <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
            <vs-input label="Nit" v-model="nit" class="mt-5 w-full" name="item-name" />
            <span class="text-danger text-sm" v-show="nit === ''">Este campo es requerido.</span>
          </div>
        </div>
        <!-- CATEGORY -->
        <div class="vx-row">
          <p>Dirección para la Factura</p>
          <!-- <vs-input label="País" v-model="paisf" class="mt-5 w-full" name="paisf" disabled />
          <span class="text-danger text-sm" v-show="paisf === ''">Este campo es requerido.</span>-->
          <vs-input label="Calle o Avenida" v-model="callef" class="mt-5 w-full" name="callef" />
          <span class="text-danger text-sm" v-show="callef === ''">Este campo es requerido.</span>
          <vs-input
            label="Apartamento, habitación, etc."
            v-model="apartamentof"
            class="mt-5 w-full"
            name="apartamentof"
          />
          <vs-input
            label="Residencial/Colonia"
            v-model="residenciaf"
            class="mt-5 w-full"
            name="residenciaf"
          />
          <span class="text-danger text-sm" v-show="residenciaf  === ''">Este campo es requerido.</span>
          <vs-input label="Zona" v-model="codigof" class="mt-5 w-full" name="codigof" />
          <span class="text-danger text-sm" v-show="codigof === ''">Este campo es requerido.</span>
          <vs-input
            label="Ciudad/Municipio"
            v-model="municipiof"
            class="mt-5 w-full"
            name="municipiof"
          />
          <span class="text-danger text-sm" v-show="municipiof === ''">Este campo es requerido.</span>
          <vs-select v-model="deparf" label="Departamento" class="mt-5 w-full" name="depaf">
            <vs-select-item
              :key="item.id"
              :value="item.id"
              :text="item.name"
              v-for="item in departamentos"
            />
          </vs-select>
          <span class="text-danger text-sm" v-show="deparf === ''">Este campo es requerido.</span>
        </div>
        <div class="vx-row">
          <vs-input
            label="Teléfono"
            type="number"
            v-model="telefonof"
            class="mt-5 w-full"
            name="telefonof"
          />
          <span class="text-danger text-sm" v-show="telefonof === ''">Este campo es requerido.</span>
        </div>
        <div class="vx-row">
          <ul class="centerx mt-5">
            <li>
              <vs-radio v-model="checkBox1" vs-value="true">Dirección envio igual a facturación.</vs-radio>
            </li>
            <li>
              <vs-radio v-model="checkBox1" vs-value="false">Enviar a una dirección diferente.</vs-radio>
            </li>
          </ul>
        </div>
        <div class="vx-row" v-show="checkBox1 == 'false'">
          <p class="mt-5">Dirección de Entrenga/Envío</p>
          <!-- <vs-input label="País" v-model="paise" class="mt-5 w-full" name="paise" disabled />
          <span class="text-danger text-sm" v-show="paise === ''">Este campo es requerido.</span>-->
          <vs-input label="Calle o Avenida" v-model="callee" class="mt-5 w-full" name="callee" />
          <span class="text-danger text-sm" v-show="callee === ''">Este campo es requerido.</span>
          <vs-input
            label="Apartamento, habitación, etc."
            v-model="apartamentoe"
            class="mt-5 w-full"
            name="apartamentoe"
          />
          <vs-input
            label="Residencial/Colonia"
            v-model="residenciae"
            class="mt-5 w-full"
            name="residenciae"
          />
          <span class="text-danger text-sm" v-show="residenciae  === ''">Este campo es requerido.</span>
          <vs-input label="Zona" v-model="codigoe" class="mt-5 w-full" name="codigof" />
          <span class="text-danger text-sm" v-show="codigoe === ''">Este campo es requerido.</span>
          <vs-input
            label="Ciudad/Municipio"
            v-model="municipioe"
            class="mt-5 w-full"
            name="municipiof"
          />
          <span class="text-danger text-sm" v-show="municipioe === ''">Este campo es requerido.</span>
          <vs-select v-model="depare" label="Departamento" class="mt-5 w-full" name="depare">
            <vs-select-item
              :key="item.id"
              :value="item.id"
              :text="item.name"
              v-for="item in departamentos"
            />
          </vs-select>
          <span class="text-danger text-sm" v-show="depare === ''">Este campo es requerido.</span>
          <vs-input
            label="Teléfono"
            type="number"
            v-model="telefonoe"
            class="mt-5 w-full"
            name="telefonof"
          />
          <span class="text-danger text-sm" v-show="telefonoe === ''">Este campo es requerido.</span>
        </div>
      </div>
    </vx-card>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button
        @click="submitData"
        :disabled="nit == null || nit == '' || name == null || name == '' || phone == null || phone == '' || email == null || email == '' || genre == null || date == null || paisf == null || paisf == '' || deparf == null || deparf == undefined || callef == null || callef == '' ||  municipiof == null || municipiof == '' || residenciaf == null || residenciaf == '' || codigof == null || codigof == '' || telefonof == null || telefonof == '' || paise == null || paise == '' || depare == null || depare == undefined || callee == null || callee == '' ||  municipioe == null || municipioe == '' || residenciae == null || residenciae == '' || codigoe == null || codigoe == '' || telefonoe == null || telefonoe == ''"
        v-show="checkBox1 == 'false' && nuevo == false"
      >Nuevo Pedido</vs-button>
      <vs-button
        @click="nuevoCliente"
        :disabled="nit == null || nit == '' || name == null || name == '' || phone == null || phone == '' || email == null || email == '' || genre == null || date == null || paisf == null || paisf == '' || deparf == null || deparf == undefined || callef == null || callef == '' ||  municipiof == null || municipiof == '' || residenciaf == null || residenciaf == '' || codigof == null || codigof == '' || telefonof == null || telefonof == '' || paise == null || paise == '' || depare == null || depare == undefined || callee == null || callee == '' ||  municipioe == null || municipioe == '' || residenciae == null || residenciae == '' || codigoe == null || codigoe == '' || telefonoe == null || telefonoe == ''"
        v-show="nuevo == true && checkBox1 == 'false'"
      >Registrar Cliente</vs-button>
      <vs-button
        @click="nuevoCliente"
        :disabled="nit == null || nit == '' || name == null || name == '' || phone == null || phone == '' || email == null || email == '' || genre == null || date == null || paisf == null || paisf == '' || deparf == null || deparf == undefined || callef == null || callef == '' ||  municipiof == null || municipiof == '' || residenciaf == null || residenciaf == '' || codigof == null || codigof == '' || telefonof == null || telefonof == ''"
        v-show="checkBox1 == 'true' && nuevo == true"
      >Registrar Cliente</vs-button>
      <vs-button
        @click="submitData"
        :disabled="nit == null || nit == '' || name == null || name == '' || phone == null || phone == '' || email == null || email == '' || genre == null || date == null || paisf == null || paisf == '' || deparf == null || deparf == undefined || callef == null || callef == '' ||  municipiof == null || municipiof == '' || residenciaf == null || residenciaf == '' || codigof == null || codigof == '' || telefonof == null || telefonof == ''"
        v-show="checkBox1 == 'true' && nuevo == false"
      >Nuevo Pedido</vs-button>
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
      //Dirección de facturación
      paisf: "Guatemala",
      deparf: null,
      callef: null,
      apartamentof: null,
      municipiof: null,
      residenciaf: null,
      codigof: null,
      telefonof: null,
      //Dirección de envío
      paise: "Guatemala",
      depare: null,
      callee: null,
      apartamentoe: null,
      municipioe: null,
      residenciae: null,
      codigoe: null,
      telefonoe: null,
      //Demás variables
      cont: 0,
      popupActive4: false,
      cantidades: [],
      totales: [],
      departamentos: [
        {
          id: "Alta Verapaz",
          name: "Alta Verapaz"
        },
        {
          id: "Baja Verapaz",
          name: "Baja Verapaz"
        },
        {
          id: "Chimaltenango",
          name: "Chimaltenango"
        },
        {
          id: "Chiquimula",
          name: "Chiquimula"
        },
        {
          id: "El Progreso",
          name: "El Progreso"
        },
        {
          id: "Escuintla",
          name: "Escuintla"
        },
        {
          id: "Guatemala",
          name: "Guatemala"
        },
        {
          id: "Huehuetenango",
          name: "Huehuetenango"
        },
        {
          id: "Izabal",
          name: "Izabal"
        },
        {
          id: "Jalapa",
          name: "Jalapa"
        },
        {
          id: "Jutiapa",
          name: "Jutiapa"
        },
        {
          id: "Petén",
          name: "Petén"
        },
        {
          id: "Quetzaltenango",
          name: "Quetzaltenango"
        },
        {
          id: "Quiché",
          name: "Quiché"
        },
        {
          id: "Retalhuleu",
          name: "Retalhuleu"
        },
        {
          id: "Sacatepéquez",
          name: "Sacatepéquez"
        },
        {
          id: "San Marcos",
          name: "San Marcos"
        },
        {
          id: "Santa Rosa",
          name: "Santa Rosa"
        },
        {
          id: "Sololá",
          name: "Sololá"
        },
        {
          id: "Suchitepéquez",
          name: "Suchitepéquez"
        },
        {
          id: "Totonicapán",
          name: "Totonicapán"
        },
        {
          id: "Zacapa",
          name: "Zacapa"
        }
      ],
      users: [],
      tipe: 0,
      idRecipe: null,
      checkBox1: "true",
      switch3: false,
      switch2: false,
      switch1: "1",
      nameT: null,
      numberT: null,
      total: 0,
      numberTr: null,
      subtotal1: 0,
      subtotal2: 0,
      medicines: [],
      itms: [],
      popupActive2: false,
      idCliente: null,
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
      nuevo: false,
      generos: [
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
        this.nuevo = true;
        //console.log(this.nuevo);
        this.initValues();
        //this.$validator.reset()
      } else {
        //console.log(this.data);
        let {
          id,
          client_nit,
          client_name,
          client_phone,
          client_email,
          client_addressf,
          client_addresse,
          client_genre,
          birthdate,
          paisf,
          deparf,
          callef,
          apartamentof,
          municipiof,
          residenciaf,
          codigof,
          telefonof,
          paise,
          depare,
          callee,
          apartamentoe,
          municipioe,
          residenciae,
          codigoe,
          telefonoe
        } = JSON.parse(JSON.stringify(this.data.data));
        this.idCliente = id;
        this.nit = client_nit;
        this.name = client_name;
        if (this.name == undefined) {
          this.tipe = 1;
        } else {
          this.tipe = 2;
        }
        this.phone = client_phone;
        this.email = client_email;
        this.genre = client_genre;
        if (this.genre == undefined) {
          this.genre = "masculino";
        }
        this.date = birthdate;
        //this.paisf = paisf;
        this.deparf = deparf;
        if (this.deparf == undefined) {
          this.deparf = "Guatemala";
        }
        this.callef = callef;
        this.apartamentof = apartamentof;
        this.municipiof = municipiof;
        this.residenciaf = residenciaf;
        this.codigof = codigof;
        this.telefonof = telefonof;
        //this.paise = paise;
        this.depare = depare;
        if (this.depare == undefined) {
          this.depare = "Guatemala";
        }
        this.callee = callee;
        this.apartamentoe = apartamentoe;
        this.municipioe = municipioe;
        this.residenciae = residenciae;
        this.codigoe = codigoe;
        this.telefonoe = telefonoe;
        this.addresse = client_addresse;
        this.addressf = client_addressf;
        this.addressc = this.addressf;
        this.idRecipe = this.data.idRecipies;
        this.nuevo = false;
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
    agregarL(data) {
      //console.log(data);
      this.medicines.push({
        id: data.id,
        name: data.name,
        precentation: data.precentacion,
        price: data.price,
        cantidad: 1,
        totale: 0,
        unidad: "Pastillas"
      });
      let p = parseFloat(data.price);
      this.sumar(p, 1, this.cont);
      this.cont = this.cont + 1;
      this.popupActive4 = false;
    },
    agregarP() {
      let token = localStorage.getItem("tu");
      this.users = [];
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getProducts",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          //console.log(Response);
          Response.data.forEach(element => {
            element.quantity = parseInt(element.quantity);
            if (element.quantity > 0) {
              //this.numberData = this.numberData + 1;
              this.users.push(element);
            }
          });
          //console.log(this.users);
          this.popupActive4 = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    sumar(price, cantidad, index) {
      this.total = 0;
      cantidad = parseFloat(cantidad);
      this.cantidades[index] = price;
      this.totales[index] = price * cantidad;
      this.totales.forEach(element => {
        //console.log(element);
        this.total = this.total + element;
      });
    },
    openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    notificacion() {
      this.openLoading();
      let token = localStorage.getItem("tu");
      let ids = [];
      this.medicines.forEach(element => {
        ids.push(element.id);
      });
      axios({
        method: "put",
        url: "http://127.0.0.1:8000/api/putCliente",
        data: JSON.stringify({
          id: this.idCliente,
          client_name: this.name,
          client_nit: this.nit,
          client_phone: this.phone,
          client_genre: this.genre,
          client_email: this.email,
          birthdate: this.date,
          paisf: this.paisf,
          deparf: this.deparf,
          callef: this.callef,
          apartamentof: this.apartamentof,
          municipiof: this.municipiof,
          residenciaf: this.residenciaf,
          codigof: this.codigof,
          telefonof: this.telefonof,
          paise: this.paise,
          depare: this.depare,
          callee: this.callee,
          apartamentoe: this.apartamentoe,
          municipioe: this.municipioe,
          residenciae: this.residenciae,
          codigoe: this.codigoe,
          telefonoe: this.telefonoe
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          console.log(Response);
          axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/postOrder",
            data: JSON.stringify({
              client_id: Response.data.mess.id,
              namet: this.nameT,
              numbert: this.numberT,
              numbertr: this.numberTr,
              total: this.total
            }),
            headers: {
              authorization: "Bearer " + token,
              "content-type": "application/json"
            }
          })
            .then(Response => {
              console.log(Response);
              axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/postOrderProd",
                data: JSON.stringify({
                  cantidad: this.cantidades,
                  medicines: ids,
                  order_id: Response.data.mess.id
                }),
                headers: {
                  authorization: "Bearer " + token,
                  "content-type": "application/json"
                }
              })
                .then(Response => {
                  axios({
                    method: "put",
                    url: "http://127.0.0.1:8000/api/putReceSta",
                    data: JSON.stringify({
                      id: this.idRecipe,
                      status: 2
                    }),
                    headers: {
                      authorization: "Bearer " + token,
                      "content-type": "application/json"
                    }
                  })
                    .then(Response => {
                      this.activeLoading = false;
                      this.$vs.loading.close();
                      this.$vs.notify({
                        title: "Satisfactorio",
                        text: "Pedido enviado al despachador exitosamente.",
                        color: "success"
                      });
                    })
                    .catch(err => {
                      this.activeLoading = false;
                      this.$vs.loading.close();
                      activado = true;
                      console.log(err);
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
              activado = true;
              console.log(err);
            });
        })
        .catch(err => {
          this.activeLoading = false;
          this.$vs.loading.close();
          activado = true;
          console.log(err);
        });
    },
    notificacion1() {
      this.openLoading();
      let token = localStorage.getItem("tu");
      let ids = [];
      this.medicines.forEach(element => {
        ids.push(element.id);
      });
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/postCliente",
        data: JSON.stringify({
          client_name: this.name,
          client_nit: this.nit,
          client_phone: this.phone,
          client_genre: this.genre,
          client_email: this.email,
          birthdate: this.date,
          paisf: this.paisf,
          deparf: this.deparf,
          callef: this.callef,
          apartamentof: this.apartamentof,
          municipiof: this.municipiof,
          residenciaf: this.residenciaf,
          codigof: this.codigof,
          telefonof: this.telefonof,
          paise: this.paise,
          depare: this.depare,
          callee: this.callee,
          apartamentoe: this.apartamentoe,
          municipioe: this.municipioe,
          residenciae: this.residenciae,
          codigoe: this.codigoe,
          telefonoe: this.telefonoe
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          console.log(Response);
          axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/postOrder",
            data: JSON.stringify({
              client_id: Response.data.mess.id,
              namet: this.nameT,
              numbert: this.numberT,
              numbertr: this.numberTr,
              total: this.total
            }),
            headers: {
              authorization: "Bearer " + token,
              "content-type": "application/json"
            }
          })
            .then(Response => {
              console.log(Response);
              axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/postOrderProd",
                data: JSON.stringify({
                  cantidad: this.cantidades,
                  medicines: ids,
                  order_id: Response.data.mess.id
                }),
                headers: {
                  authorization: "Bearer " + token,
                  "content-type": "application/json"
                }
              })
                .then(Response => {
                  axios({
                    method: "put",
                    url: "http://127.0.0.1:8000/api/putReceSta",
                    data: JSON.stringify({
                      id: this.idRecipe,
                      status: 2
                    }),
                    headers: {
                      authorization: "Bearer " + token,
                      "content-type": "application/json"
                    }
                  })
                    .then(Response => {
                      this.activeLoading = false;
                      this.$vs.loading.close();
                      this.$vs.notify({
                        title: "Satisfactorio",
                        text: "Pedido enviado al despachador exitosamente.",
                        color: "success"
                      });
                    })
                    .catch(err => {
                      this.activeLoading = false;
                      this.$vs.loading.close();
                      activado = true;
                      console.log(err);
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
              activado = true;
              console.log(err);
            });
        })
        .catch(err => {
          this.activeLoading = false;
          this.$vs.loading.close();
          activado = true;
          console.log(err);
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
    getItem(id) {
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
            this.itms.push(element.product_id);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateData() {},
    nuevoCliente() {
      this.openLoading();
      if (this.checkBox1 == "true") {
        this.paise = this.paisf;
        this.depare = this.deparf;
        this.callee = this.callef;
        this.apartamentoe = this.apartamentof;
        this.municipioe = this.municipiof;
        this.residenciae = this.residenciaf;
        this.codigoe = this.codigof;
        this.telefonoe = this.telefonof;
      }
      if (this.nit == null || this.nit == "") {
        this.nit = "C/F";
      }
      let token = localStorage.getItem("tu");
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/postCliente",
        data: JSON.stringify({
          client_name: this.name,
          client_nit: this.nit,
          client_phone: this.phone,
          client_genre: this.genre,
          client_email: this.email,
          birthdate: this.date,
          paisf: this.paisf,
          deparf: this.deparf,
          callef: this.callef,
          apartamentof: this.apartamentof,
          municipiof: this.municipiof,
          residenciaf: this.residenciaf,
          codigof: this.codigof,
          telefonof: this.telefonof,
          paise: this.paise,
          depare: this.depare,
          callee: this.callee,
          apartamentoe: this.apartamentoe,
          municipioe: this.municipioe,
          residenciae: this.residenciae,
          codigoe: this.codigoe,
          telefonoe: this.telefonoe
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          this.name = null;
          this.nit = null;
          this.phone = null;
          this.genre = null;
          this.email = null;
          this.date = null;
          this.paisf = null;
          this.deparf = null;
          this.callef = null;
          this.apartamentof = null;
          this.municipiof = null;
          this.residenciaf = null;
          this.codigof = null;
          this.telefonof = null;
          this.paise = null;
          this.depare = null;
          this.callee = null;
          this.apartamentoe = null;
          this.municipioe = null;
          this.residenciae = null;
          this.codigoe = null;
          this.telefonoe = null;
          this.activeLoading = false;
          this.$vs.loading.close();
          this.isSidebarActiveLocal = false;
          this.$vs.notify({
            title: "Satisfactorio",
            text: "Cliente creado exitosamente.",
            color: "success"
          });
        })
        .catch(err => {
          this.activeLoading = false;
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: "Error, por favor intentelo más tarde.",
            color: "danger"
          });
          console.log(err);
        });
    },
    submitData() {
      if (this.checkBox1 == "true") {
        this.paise = this.paisf;
        this.depare = this.deparf;
        this.callee = this.callef;
        this.apartamentoe = this.apartamentof;
        this.municipioe = this.municipiof;
        this.residenciae = this.residenciaf;
        this.codigoe = this.codigof;
        this.telefonoe = this.telefonof;
      }
      this.nameT = null;
      this.numberT = null;
      this.numberTr = null;
      this.getItem(this.idRecipe);
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
          //console.log(Response.data);
          this.medicines = [];

          this.cont = 0;
          Response.data.forEach(element => {
            if (this.itms.includes(element.id)) {
              this.medicines.push({
                id: element.id,
                name: element.name,
                precentation: element.precentacion,
                price: element.price,
                cantidad: 1,
                totale: 0,
                unidad: "Pastillas"
              });
              let p = parseFloat(element.price);
              this.sumar(p, 1, this.cont);
              this.cont = this.cont + 1;
            }
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
