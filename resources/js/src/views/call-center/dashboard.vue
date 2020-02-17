<template>
  <div
    id="email-app"
    class="border border-solid d-theme-border-grey-light rounded relative overflow-hidden"
  >
    <vs-popup title="Posibles Clíentes" :active.sync="popupActive2">
      <p>Listado de clíentes anteriores.</p>
      <br />
      <vs-table pagination max-items="3" search :data="users">
        <template slot="thead">
          <vs-th>NIT</vs-th>
          <vs-th>Nombre</vs-th>
          <vs-th>Teléfono</vs-th>
          <vs-th>Dirección</vs-th>
          <vs-th>Unir</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].client_nit">{{ data[indextr].client_nit }}</vs-td>

            <vs-td :data="data[indextr].client_name">{{ data[indextr].client_name }}</vs-td>

            <vs-td :data="data[indextr].client_phone">{{ data[indextr].client_phone }}</vs-td>

            <vs-td
              v-text="tr.paise + ',' + tr.depare + ' ' + tr.municipioe + ' ' + tr.callee + ' ' + tr.apartamentoe + ' ' + tr.residenciae"
            ></vs-td>
            <vs-td>
              <vs-button
                type="border"
                size="small"
                icon-pack="feather"
                icon="icon-send"
                class="mr-2"
                @click.stop="editData(tr, idRecipe)"
              ></vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
      <div class="mr-3">
        <vs-button
          class="bg-primary-gradient w-full"
          icon-pack="feather"
          icon="icon-plus"
          @click="addNewData1(idRecipe)"
        >Nuevo Cliente</vs-button>
      </div>
    </vs-popup>
    <data-view-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />

    <vs-sidebar
      class="items-no-padding"
      parent="#email-app"
      :click-not-close="clickNotClose"
      :hidden-background="clickNotClose"
      v-model="isEmailSidebarActive"
    >
      <template>
        <div class="email__email-sidebar h-full">
          <div class="m-6 clearfix">
            <!-- <vs-button
              class="bg-primary-gradient w-full"
              icon-pack="feather"
              icon="icon-plus"
              @click="addNewData"
            >Nuevo Cliente</vs-button>-->
            <h2>Listados</h2>
          </div>

          <!-- compose email -->
          <vs-prompt class="email-compose" title="New Message" accept-text="Send">
            <VuePerfectScrollbar :settings="settings" class="scroll-area p-4">
              <form>
                <vs-input
                  v-validate="'required|email'"
                  name="mailTo"
                  label-placeholder="To"
                  class="w-full mb-6"
                  val-icon-danger="clear"
                  val-icon-success="done"
                />
                <vs-input name="mailSubject" label-placeholder="Subject" class="w-full mb-6" />
                <vs-input name="mailCC" label-placeholder="CC" class="w-full mb-6" />
                <vs-input name="mailBCC" label-placeholder="BCC" class="w-full mb-6" />
                <quill-editor />
                <vs-upload multiple text="Attachments" class="compose-mail-attachment" />
              </form>
            </VuePerfectScrollbar>
          </vs-prompt>

          <VuePerfectScrollbar :settings="settings" class="email-filter-scroll-area">
            <div class="px-6 pb-2 flex flex-col">
              <!-- inbox -->
              <li
                tag="span"
                @click="getRecipes('Nuevo')"
                class="flex justify-between items-center cursor-pointer"
              >
                <div class="flex items-center mb-2">
                  <feather-icon icon="PlusIcon"></feather-icon>
                  <span class="text-lg ml-3">Nuevos</span>
                </div>
              </li>

              <!-- sent -->
              <li
                tag="span"
                @click="getRecipes('Empaquetando')"
                class="flex items-center mt-4 mb-2 cursor-pointer"
              >
                <feather-icon icon="ArchiveIcon"></feather-icon>
                <span class="text-lg ml-3">Empaquetando</span>
              </li>

              <!-- draft -->
              <li
                tag="span"
                @click="getRecipes('Entregando')"
                class="flex justify-between items-center mt-4 cursor-pointer"
              >
                <div class="flex items-center mb-2">
                  <feather-icon icon="TruckIcon"></feather-icon>
                  <span class="text-lg ml-3">Entregando</span>
                </div>
              </li>

              <!-- starred -->
              <li
                tag="span"
                @click="getRecipes('Entregado')"
                class="flex items-center mt-4 mb-2 cursor-pointer"
              >
                <feather-icon icon="MapPinIcon"></feather-icon>
                <span class="text-lg ml-3">Entregados</span>
              </li>

              <!-- spam -->
              <li
                @click="getRecipes('Cancelado')"
                tag="span"
                class="flex items-center justify-between items-center mt-4 cursor-pointer"
              >
                <div class="flex items-center mb-2">
                  <feather-icon icon="HexagonIcon"></feather-icon>
                  <span class="text-lg ml-3">Cancelado</span>
                </div>
              </li>
            </div>
          </VuePerfectScrollbar>
        </div>
      </template>
    </vs-sidebar>

    <div
      :class="{'sidebar-spacer': clickNotClose}"
      class="no-scroll-content border border-solid d-theme-border-grey-light border-r-0 border-t-0 border-b-0"
    >
      <!-- SEARCH BAR -->
      <div class="flex border d-theme-dark-bg items-center">
        <feather-icon class="md:inline-flex lg:hidden ml-4 mr-4 cursor-pointer" icon="MenuIcon" />
        <vs-input
          icon-no-border
          icon="icon-search"
          size="large"
          v-model="buscar"
          icon-pack="feather"
          placeholder="Buscar"
          class="vs-input-no-border vs-input-no-shdow-focus w-full"
        />
      </div>

      <!-- EMAIL ACTION BAR -->
      <hr />

      <!-- EMAILS LIST -->
      <div v-show="recipes.length == 0">
        <div align="center">
          <h4 v-text="message"></h4>
        </div>
      </div>
      <VuePerfectScrollbar id="scrolll" class="email-content-scroll-area" :settings="settings">
        <transition-group name="list-enter-up" class="email__mails" tag="ul" appear>
          <li
            class="cursor-pointer email__mail-item"
            v-for="(mail, index) in searchRecipes"
            :key="mail.id"
            @click="openModal(mail.phone, mail.id)"
            :style="{transitionDelay: (index * 0.1) + 's'}"
          >
            <div class="mail__mail-item sm:px-4 px-2 py-6">
              <!-- MAIL ROW 1 : META -->
              <div class="flex w-full">
                <!-- <vs-avatar class="sender__avatar flex-shrink-0 mr-3 border-2 border-solid border-white" :src="mail.img" size="40px"></vs-avatar> -->

                <div class="flex w-full justify-between items-start">
                  <div class="mail__details">
                    <h5 class="mb-1">{{ mail.name }}</h5>
                    <span v-if="mail.phone ">{{ mail.phone }}</span>
                    <span v-else>(no subject)</span>
                  </div>

                  <div class="mail-item__meta flex items-center">
                    <div class="email__labels hidden sm:flex items-center">
                      <div class="h-2 w-2 rounded-full mr-2" :class="'bg-' + mail.color"></div>
                    </div>
                    <span>{{ mail.status }}</span>
                  </div>
                </div>
              </div>
              <!-- /MAIL ROW 1 -->

              <!-- MAIL ROW 2 : MSG & ACTIONS -->
              <div class="flex w-full">
                <!-- Seleccionar el item -->
                <!-- <div class="flex items-center ml-1">
                <vs-checkbox v-model="isSelectedMail" @click.stop class="vs-checkbox-small ml-0 mr-1"></vs-checkbox>
                <feather-icon icon="StarIcon" class="cursor-pointer" :svgClasses="[{'text-warning fill-current stroke-current': mail.isStarred}, 'w-5', 'h-5']" @click.stop="toggleIsStarred"></feather-icon>
                </div>-->
                <div class="mail__message truncate">
                  <span>{{ mail.doctor_id }}</span>
                </div>
              </div>
              <!-- /MAIL ROW 2 -->
            </div>
          </li>
        </transition-group>
      </VuePerfectScrollbar>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import axios from "axios";
import DataViewSidebar from "../DataViewSidebar.vue";

export default {
  data() {
    return {
      message: "",
      idRecipe: null,
      users: [],
      popupActive2: false,
      addNewDataSidebar: false,
      sidebarData: {},
      status: [
        "Nuevo",
        "Entregando",
        "Empaquetando",
        "Entregado",
        "Cancelado"
      ],
      buscar: "",
      clickNotClose: true,
      isEmailSidebarActive: true,
      mailFilter: "inbox",
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.3
      },
      recipes: [],
      doctors: [],
      primary: "primary"
    };
  },
  components: {
    VuePerfectScrollbar,
    DataViewSidebar
  },
  computed: {
    searchRecipes: function() {
      let result = this.recipes;
      if (!this.buscar) {
        return result;
      }
      let texto = this.buscar.toLowerCase();
      const filter = event =>
        event.name.toLowerCase().includes(texto) ||
        event.phone.toLowerCase().includes(texto) ||
        event.doctor_id.toLowerCase().includes(texto);

      return result.filter(filter);
    }
  },
  created() {
    this.getUsers();
    this.getRecipes("Nuevo");
  },
  methods: {
    editData(data, id) {
      this.popupActive2 = false;
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      let data1 = {
        data: data,
        idRecipies: id
      };
      //console.log(data1);
      this.sidebarData = data1;
      this.toggleDataSidebar(true);
    },
    openModal(phone, id) {
      this.idRecipe = id;
      this.users = [];
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getCliente1/" + phone,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          Response.data.forEach(element => {
            this.users.push(element);
          });
          this.popupActive2 = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    addNewData1(id) {
      let data = {
        data: {},
        idRecipies: id
      };
      this.popupActive2 = false;
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },
    openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
        //container: "#scrolll"
      });
    },
    getUsers() {
      let token = localStorage.getItem("tu");
      let id = localStorage.getItem("ui");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/listUsers",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          Response.data.forEach(element => {
            this.doctors.push({
              id: element.id,
              name: element.name
            });
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    colore(a) {
      if (a == 1) return "primary";
      if (a == 2) return "warning";
      if (a == 3) return "warning";
      if (a == 4) return "warning";
      if (a == 5) return "success";
      if (a == 6) return "danger";
      return "primary";
    },
    getRecipes(a) {
      this.openLoading();
      let token = localStorage.getItem("tu");
      let id = localStorage.getItem("ui");
      let f = new Date();
      let fecha =
        f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
      fecha = fecha.toString();
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getRecipes",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          this.recipes = [];
          //console.log(Response.data);
          Response.data.forEach(element => {
            element.color = this.colore(element.status);
            element.status = this.status[element.status - 1];
            //console.log(element.status);
            this.doctors.forEach(e => {
              if (e.id == element.doctor_id) {
                element.doctor_id = e.name;
              }
            });
            if (element.status == a) {
              this.recipes.push(element);
            }
            if (this.recipes.length == 0) {
              this.message = "No hay resultados.";
            }
          });
          this.activeLoading = false;
          this.$vs.loading.close();
        })
        .catch(err => {
          console.log(err);
          this.activeLoading = false;
          this.$vs.loading.close();
        });
    }
  }
};
</script>

<style lang="scss">
@import "@sass/vuexy/apps/email.scss";
</style>