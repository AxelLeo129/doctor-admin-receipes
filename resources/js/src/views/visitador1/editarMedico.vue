<!-- =========================================================================================
  File Name: UserEdit.vue
  Description: User Edit Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-edit">
    <vs-popup title="Actualizar Datos de Usuario" :active.sync="popupActive2">
      <p>¿Está seguro de actualizar esta información?</p>
      <br />
      <vs-button @click="update1" color="primary" type="filled">Actualizar</vs-button>
      <vs-button @click="popupActive3=false" color="danger" type="filled">Cancelar</vs-button>
    </vs-popup>
    <vs-popup title="Actualizar Datos Médicos" :active.sync="popupActive3">
      <p>¿Está seguro de actualizar esta información?</p>
      <br />
      <vs-button @click="update2" color="primary" type="filled">Actualizar</vs-button>
      <vs-button @click="popupActive3=false" color="danger" type="filled">Cancelar</vs-button>
    </vs-popup>
    <vx-card>
      <div slot="no-body" class="tabs-container px-6 pt-6">
        <vs-tabs class="tab-action-btn-fill-conatiner">
          <vs-tab label="Cuenta" icon-pack="feather" icon="icon-user">
            <div class="tab-text">
              <div id="user-edit-tab-info">
                <!-- Avatar Row -->
                <div class="vx-row">
                  <div class="vx-col w-full">
                    <div class="flex items-start flex-col sm:flex-row">
                      <img v-bind:src="image" class="mr-8 rounded w-24" />
                      <!-- <vs-avatar :src="data.avatar" size="80px" class="mr-4" /> -->
                      <div>
                        <p class="text-lg font-medium mb-2 mt-4 sm:mt-0" v-text="name"></p>
                        <input
                          type="file"
                          class="hidden"
                          ref="update_avatar_input"
                          accept="image/*"
                        />

                        <input
                          accept="image/*"
                          type="file"
                          color="warning"
                          id="image"
                          name="image"
                          @change="handleFileSelect($event)"
                          class="fileInput"
                        />
                        <label for="image" class="subir">
                          <vs-icon icon="edit"></vs-icon>
                        </label>
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
                      >Error en el servidor, por favor intentelo más tarde.</vs-alert>
                    </div>
                  </div>
                </div>

                <!-- Content Row -->
                <div class="vx-row">
                  <br />
                  <br />
                  <div class="vx-col md:w-1/4 w-full">
                    <label>Configuración Plataforma</label>
                  </div>
                </div>
                <div class="vx-row">
                  <div class="vx-col md:w-1/4 w-full">
                    <ul class="centerx">
                      <li>
                        <vs-checkbox v-model="registro">Guardar Registro Clínico</vs-checkbox>
                      </li>
                    </ul>
                  </div>
                  <div class="vx-col md:w-1/4 w-full">
                    <ul>
                      <li>
                        <vs-checkbox
                          v-if="rol == 2"
                          v-model="registro"
                        >¿Desea usar registro Clínico?</vs-checkbox>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="vx-row">
                  <div class="vx-col md:w-1/2 w-full">
                    <vs-input
                      class="w-full mt-4"
                      label="Nombres y Apellidos"
                      name="name"
                      v-model="name"
                    />
                    <span class="text-danger text-sm" v-show="name === ''">{{ errors.campo }}</span>

                    <vs-input
                      class="w-full mt-4"
                      label="Teléfono"
                      type="number"
                      name="phone"
                      v-model="phone"
                    />

                    <vs-input
                      class="w-full mt-4"
                      label="Email"
                      type="email"
                      name="email"
                      v-model="email"
                    />
                    <span class="text-danger text-sm" v-show="email === ''">{{ errors.campo }}</span>
                  </div>

                  <div class="vx-col md:w-1/2 w-full">
                    <!-- <vs-input
                      class="w-full mt-4"
                      label="Nombre de Usuario"
                      name="userName"
                      v-model="userName"
                    />
                    <span class="text-danger text-sm" v-show="userName === ''">{{ errors.campo }}</span>-->

                    <vs-input
                      class="w-full mt-4"
                      label="No. Colegiado"
                      name="noCollegiate"
                      v-model="noCollegiate"
                    />
                    <span
                      class="text-danger text-sm"
                      v-show="noCollegiate === ''"
                    >{{ errors.campo }}</span>
                    <div class="mt-4">
                      <vs-input
                        label="Fecha de Nacimiento"
                        type="date"
                        class="w-full mt-4"
                        name="birthDate"
                        v-model="birthDate"
                      />
                    </div>
                  </div>
                </div>

                <!-- Save & Reset Button -->
                <div class="vx-row">
                  <div class="vx-col w-full">
                    <div class="mt-8 flex flex-wrap items-center justify-end">
                      <vs-button
                        class="ml-auto mt-2"
                        color="warning"
                        @click="popupActive2=true"
                        :disabled="name == '' || noCollegiate == '' || email === ''"
                      >Guardar Cambios</vs-button>
                      <vs-button
                        class="ml-4 mt-2"
                        type="border"
                        color="danger"
                        @click="getData"
                      >Resetear</vs-button>
                    </div>
                  </div>
                </div>
                <div class="vx-row">
                  <div class="vx-col md:w-1/2 w-full"></div>
                  <div class="vx-col md:w-1/2 w-full">
                    <div align="right">
                      <p>Recuerde guardar antes de cambiar pestaña.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </vs-tab>
          <vs-tab label="Información Médica" icon-pack="feather" icon="icon-info">
            <div class="tab-text">
              <div id="user-edit-tab-info">
                <div class="vx-row">
                  <vs-alert
                    color="danger"
                    title="Error"
                    :active.sync="activado1"
                    closable
                    style="width: 70%"
                    icon-pack="feather"
                    close-icon="icon-x"
                  >Error en el servidor, por favor intentelo más tarde.</vs-alert>
                </div>
                <br />
                <div class="vx-row">
                  <div class="vx-col w-full md:w-1/2">
                    <!-- Col Header -->
                    <div class="flex items-end">
                      <feather-icon icon="HomeIcon" class="mr-2" svgClasses="w-5 h-5" />
                      <span class="leading-none font-medium">Clínica</span>
                    </div>

                    <!-- Col Content -->
                    <div>
                      <!-- DOB -->
                      <div class="vx-row">
                        <div class="vx-col w-full">
                          <div class="flex items-start flex-col sm:flex-row mt-4">
                            <img v-bind:src="clinicLogo" class="mr-8 rounded w-24" />
                            <!-- <vs-avatar :src="data.avatar" size="80px" class="mr-4" /> -->
                            <div>
                              <p class="text-lg font-medium mb-2 mt-4 sm:mt-0">Logo Clínica</p>
                              <input
                                type="file"
                                class="hidden"
                                ref="update_avatar_input"
                                accept="image/*"
                              />

                              <input
                                accept="image/*"
                                type="file"
                                color="warning"
                                id="logo"
                                name="logo"
                                @change="handleFileSelect1($event)"
                                class="fileInput"
                              />
                              <label for="logo" class="subir">
                                <vs-icon icon="edit"></vs-icon>
                              </label>
                              <div id="info2"></div>
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
                            >Error en el servidor, por favor intentelo más tarde.</vs-alert>
                          </div>
                        </div>
                      </div>

                      <vs-input
                        class="w-full mt-4"
                        label="Nombre Clínica"
                        name="clinicName"
                        v-model="clinicName"
                      />

                      <vs-input
                        class="w-full mt-4"
                        type="number"
                        label="Teléfono"
                        name="clinicPhone"
                        v-model="clinicPhone"
                      />

                      <div class="mt-4">
                        <vs-textarea label="Dirección" v-model="clinicAddress" />
                      </div>
                    </div>
                  </div>

                  <!-- Address Col -->
                  <div class="vx-col w-full md:w-1/2">
                    <!-- Col Header -->
                    <div class="flex items-end md:mt-0 mt-base">
                      <feather-icon icon="PlusIcon" class="mr-2" svgClasses="w-5 h-5" />
                      <span class="leading-none font-medium">Especialidades</span>
                    </div>

                    <!-- Col Content -->
                    <div>
                      <div class="mt-4">
                        <label class="vs-input--label">Lista Especialidades</label>
                        <v-select
                          multiple
                          :closeOnSelect="false"
                          v-model="specialties"
                          :options="categorias"
                          :dir="$vs.rtl ? 'rtl' : 'ltr'"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Save & Reset Button -->
                <div class="vx-row">
                  <div class="vx-col w-full">
                    <div class="mt-8 flex flex-wrap items-center justify-end">
                      <vs-button
                        class="ml-auto mt-2"
                        color="warning"
                        @click="popupActive3=true"
                      >Guardar Cambios</vs-button>
                      <vs-button
                        class="ml-4 mt-2"
                        type="border"
                        color="danger"
                        @click="getData"
                      >Resetear</vs-button>
                    </div>
                  </div>
                </div>
                <div class="vx-row">
                  <div class="vx-col md:w-1/2 w-full"></div>
                  <div class="vx-col md:w-1/2 w-full">
                    <div align="right">
                      <p>Recuerde guardar antes de cambiar pestaña.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </vs-tab>
        </vs-tabs>
      </div>
    </vx-card>
  </div>
</template>

<script>
import vSelect from "vue-select";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/flatpickr.min.css";
import { Spanish as SpanishLocale } from "flatpickr/dist/l10n/es.js";
import axios from "axios";

export default {
  components: {
    vSelect,
    flatPickr
  },
  data() {
    return {
      categorias: [],
      rol: null,
      errors: {
        campo: "Este campo es requerido"
      },
      id: "",
      configdateTimePicker: {
        locale: SpanishLocale
      },
      birthDate: null,
      image: "",
      alertas: null,
      registro: null,
      name: null,
      noCollegiate: null,
      email: null,
      phone: null,
      userName: null,
      clinicName: null,
      clinicPhone: null,
      clinicAddress: null,
      specialties: [],
      email: null,
      clinicalRecord: null,
      showAlerts: null,
      base64textString: null,
      base64textString1: null,
      activado: false,
      activado1: false,
      clinicLogo: null,
      popupActive2: false,
      popupActive3: false,
      category1: [],
      categories: []
    };
  },
  methods: {
    getCategories() {
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getCategories",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          this.specialties = [];
          Response.data.forEach(element => {
            this.categorias.push({
              label: element.name,
              value: element.id
            });
            if (this.categories.includes(element.id)) {
              this.specialties.push({
                label: element.name,
                value: element.id
              });
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    getCategories1() {
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getCategories",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          this.specialties = [];
          Response.data.forEach(element => {
            this.categorias.push({
              label: element.name,
              value: element.id
            });
          });
        })
        .catch(err => {
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
      this.image = "data:image/png;base64," + this.base64textString;
    },
    handleFileSelect1(evt) {
      let files = evt.target.files;
      let file = files[0];
      let nombre = files[0].name;
      document.getElementById("info2").innerHTML = nombre;

      if (files && file) {
        let reader = new FileReader();

        reader.onload = this._handleReaderLoaded2.bind(this);

        reader.readAsBinaryString(file);
      }
    },
    _handleReaderLoaded2(readerEvt) {
      let binaryString1 = readerEvt.target.result;
      this.base64textString1 = btoa(binaryString1);
      this.clinicLogo = "data:image/png;base64," + this.base64textString1;
    },
    update1() {
      this.popupActive2 = false;
      this.openLoading();
      let token = localStorage.getItem("tu");
      if (this.registro == false) {
        this.clinicalRecord = 0;
      } else {
        this.clinicalRecord = 1;
      }

      if (this.alertas == false) {
        this.showAlerts = 0;
      } else {
        this.showAlerts = 1;
      }
      if (this.image == "/images/medicamentos/avatar.jpeg") {
        this.image = null;
      }
      axios({
        method: "put",
        url: "http://127.0.0.1:8000/api/putUser1",
        data: JSON.stringify({
          id: this.id,
          name: this.name,
          userName: "",
          noCollegiate: this.noCollegiate,
          phone: this.phone,
          birthDate: this.birthDate,
          clinicalRecord: this.clinicalRecord,
          //showAlerts: this.showAlerts,
          showAlerts: 0,
          email: this.email,
          image: this.base64textString
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
            title: "Actualizado",
            text: "Usuario actualizado exitosamente.",
            color: "success",
            iconPack: 'feather',
                                                        icon: 'icon-check'
          });
          this.$router.push("/1visitador");
        })
        .catch(err => {
          this.activeLoading = false;
          this.$vs.loading.close();
          this.activado = true;
          console.log(err);
        });
    },
    update2() {
      this.popupActive3 = false;
      this.openLoading();
      let token = localStorage.getItem("tu");
      let arrayFinal = [];
      this.specialties.forEach(element => {
        arrayFinal.push(element.value);
      });
      axios({
        method: "put",
        url: "http://127.0.0.1:8000/api/putUser2",
        data: JSON.stringify({
          id: this.id,
          clinicName: this.clinicName,
          clinicLogo: this.base64textString1,
          clinicPhone: this.clinicPhone,
          clinicAddress: this.clinicAddress,
          specialties: this.specialties
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/deleteUserCate/" + this.id,
            headers: {
              authorization: "Bearer " + token,
              "content-type": "application/json"
            }
          })
            .then(Response => {
              axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/postUserCate",
                data: JSON.stringify({
                  categories: arrayFinal,
                  user_id: this.id
                }),
                headers: {
                  authorization: "Bearer " + token,
                  "content-type": "application/json"
                }
              })
                .then(Response => {
                  this.activeLoading = false;
                  this.$vs.loading.close();
                  this.$router.push("/1visitador");
                  this.$vs.notify({
                    title: "Actualizado",
                    text: "Médico actualizado exitosamente.",
                    color: "success",
                    iconPack: 'feather',
                                                        icon: 'icon-check'
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
          this.activado1 = true;
          console.log(err);
        });
    },
    openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    getData() {
      this.openLoading();
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getUser1/" + this.id,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          if (Response.data.length == 0) {
            axios({
              method: "get",
              url: "http://127.0.0.1:8000/api/getUser2/" + this.id,
              headers: {
                authorization: "Bearer " + token,
                "content-type": "application/json"
              }
            })
              .then(Response => {
                this.getCategories1();
                this.name = Response.data[0].name;
                this.userName = Response.data[0].userName;
                if (Response.data[0].clinicalRecord == 0) {
                  this.registro = false;
                } else {
                  this.registro = true;
                }
                this.phone = Response.data[0].phone;
                if (Response.data[0].showAlerts == 0) {
                  this.alertas = false;
                } else {
                  this.alertas = true;
                }
                if (
                  Response.data[0].image == null ||
                  Response.data[0].image == ""
                ) {
                  this.image = "/images/medicamentos/avatar.jpeg";
                } else {
                  this.image =
                    "data:image/png;base64," + Response.data[0].image;
                  this.base64textString = Response.data[0].image;
                }
                this.email = Response.data[0].email;
                if (
                  Response.data[0].clinicLogo == null ||
                  Response.data[0].clinicLogo == ""
                ) {
                  this.clinicLogo = "/images/medicamentos/demol.PNG";
                } else {
                  this.clinicLogo =
                    "data:image/png;base64," + Response.data[0].clinicLogo;
                  this.base64textString1 = Response.data[0].clinicLogo;
                }

                this.clinicName = Response.data[0].clinicName;
                this.clinicPhone = Response.data[0].clinicPhone;
                this.clinicAddress = Response.data[0].clinicAddress;
                this.specialties = Response.data[0].specialties;
                this.noCollegiate = Response.data[0].noCollegiate;
                if (Response.data[0].birthDate == "") {
                  this.birthDate = null;
                } else {
                  this.birthDate = Response.data[0].birthDate;
                }
                this.activeLoading = false;
                this.$vs.loading.close();
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            this.category1 = Response.data[0].categories.split(",");
            this.category1.forEach(element => {
              element = parseInt(element);
              this.categories.push(element);
            });
            this.getCategories();
            this.name = Response.data[0].name;
            this.userName = Response.data[0].userName;
            if (Response.data[0].clinicalRecord == 0) {
              this.registro = false;
            } else {
              this.registro = true;
            }
            this.phone = Response.data[0].phone;
            if (Response.data[0].showAlerts == 0) {
              this.alertas = false;
            } else {
              this.alertas = true;
            }
            if (
              Response.data[0].image == null ||
              Response.data[0].image == ""
            ) {
              this.image = "/images/medicamentos/avatar.jpeg";
            } else {
              this.image = "data:image/png;base64," + Response.data[0].image;
              this.base64textString = Response.data[0].image;
            }
            this.email = Response.data[0].email;
            if (
              Response.data[0].clinicLogo == null ||
              Response.data[0].clinicLogo == ""
            ) {
              this.clinicLogo = "/images/medicamentos/demol.PNG";
            } else {
              this.clinicLogo =
                "data:image/png;base64," + Response.data[0].clinicLogo;
              this.base64textString1 = Response.data[0].clinicLogo;
            }

            this.clinicName = Response.data[0].clinicName;
            this.clinicPhone = Response.data[0].clinicPhone;
            this.clinicAddress = Response.data[0].clinicAddress;
            this.specialties = Response.data[0].specialties;
            this.noCollegiate = Response.data[0].noCollegiate;
            if (Response.data[0].birthDate == "") {
              this.birthDate = null;
            } else {
              this.birthDate = Response.data[0].birthDate;
            }
            this.activeLoading = false;
            this.$vs.loading.close();
          }
        })
        .catch(err => {
          console.log(err);
          this.activeLoading = false;
          this.$vs.loading.close();
        });
    }
  },
  created() {
    this.id = this.$route.params.idMedico;
    this.getData();
  }
};
</script>
<style lang="scss">
.fileInput {
  width: 1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.subir {
  padding: 5px 10px;
  background: #ffce00;
  color: #fff;
  border: 0px solid #fff;
  border-radius: 15px 15px 15px 15px;
}

.subir:hover {
  color: #fff;
  background: #e0b500;
}
</style>