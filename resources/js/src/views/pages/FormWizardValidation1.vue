<!-- =========================================================================================
    File Name: FormWizardNumberTab.vue
    Description: Form wizard with numbers in tabs
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Registro de la Consulta" code-toggler>
    <p>Ingrese información sobre los síntomas, diagnóstico y cualquier otra información de utilizadad para el seguimiento de su paciente.</p>
    <div align="center">
      <h4>Paso</h4>
      <h5>
        1 ... 2 ...
        3 ...
        <strong>4</strong>
      </h5>
    </div>
    <div>
      <form-wizard
        color="rgba(var(--vs-primary), 1)"
        :title="null"
        :subtitle="null"
        finishButtonText="Finalizar"
        @on-complete="formSubmitted"
      >
        <tab-content title="Paso 4" icon="feather icon-home" class="mb-5">
          <!-- tab 1 content -->
          <div class="vx-row">
            <div class="vx-col md:w-1/2 w-full mt-5">
              <vs-textarea label="Síntomas" v-model="symptom" class="w-full" />
              <span
                class="text-danger text-sm"
                v-show="symptom === '' || (symptom === '' && actiErr == true)"
              >Este campo es requerido.</span>

              <vs-textarea label="Diagnóstico" v-model="diagnostics" class="w-full" />
              <span
                class="text-danger text-sm"
                v-show="diagnostics === '' || (diagnostics === '' && actiErr1 == true)"
              >Este campo es requerido.</span>
            </div>
            <div class="vx-col md:w-1/2 w-full mt-5">
              <vs-textarea label="Observaciones" v-model="observations" class="w-full" />
              <span
                class="text-danger text-sm"
                v-show="observations === '' || (observations === '' && actiErr2 == true)"
              >Este campo es requerido.</span>
              <div class="mt-4">
                <label class="text-sm">Próxima Cita</label>
                <flat-pickr
                  v-model="nextAppointment"
                  :config="{ dateFormat: 'd F Y', minDate: new Date() }"
                  class="w-full"
                  name="nextAppointment"
                />
              </div>
              <span
                class="text-danger text-sm"
                v-show="nextAppointment === '' || (nextAppointment === '' && actiErr3 == true)"
              >Este campo es requerido.</span>
            </div>
          </div>
        </tab-content>
      </form-wizard>
    </div>
  </vx-card>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/flatpickr.min.css";
import { Spanish as SpanishLocale } from "flatpickr/dist/l10n/es.js";
import axios from "axios";

export default {
  data() {
    return {
      symptom: null,
      diagnostics: null,
      observations: null,
      nextAppointment: null,
      actiErr: false,
      actiErr1: false,
      actiErr2: false,
      actiErr3: false,
      recetasData: []
    };
  },
  methods: {
    openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    formSubmitted() {
      if (this.symptom == null || this.symptom == "") {
        this.actiErr = true;
        this.symptom = "";
      } else if (this.diagnostics == null || this.diagnostics == "") {
        this.actiErr1 = true;
        this.diagnostics = "";
      } else if (this.observations == null || this.observations == "") {
        this.actiErr2 = true;
        this.observations = "";
      } else if (this.nextAppointment == null || this.nextAppointment == "") {
        this.actiErr3 = true;
        this.nextAppointment = "";
      } else {
        this.openLoading();
        let token = localStorage.getItem("tu");
        this.nuevaRecetaData = JSON.parse(
          localStorage.getItem("nuevaRecetaData")
        );

        this.recetasData.push({
          name: this.nuevaRecetaData.name,
          phone: this.nuevaRecetaData.phone,
          doctor_id: this.nuevaRecetaData.doctor_id,
          symptom: this.symptom,
          diagnostics: this.diagnostics,
          observations: this.observations,
          nextAppointment: this.nextAppointment,
          status: this.nuevaRecetaData.status,
          dateIssue: this.nuevaRecetaData.dateIssue,
          medicines: this.nuevaRecetaData.medicines,
          medicamentos: this.nuevaRecetaData.medicamentos
        });

        localStorage.setItem("recetasData", JSON.stringify(this.recetasData));

        axios({
          method: "post",
          url: "http://127.0.0.1:8000/api/postRecetas",
          data: JSON.stringify({
            name: this.nuevaRecetaData.name,
            phone: this.nuevaRecetaData.phone,
            doctor_id: this.nuevaRecetaData.doctor_id,
            symptom: this.symptom,
            diagnostics: this.diagnostics,
            observations: this.observations,
            nextAppointment: this.nextAppointment,
            status: this.nuevaRecetaData.status,
            dateIssue: this.nuevaRecetaData.dateIssue
          }),
          headers: {
            authorization: "Bearer " + token,
            "content-type": "application/json"
          }
        })
          .then(Response => {
            this.Resid = Response.data.mess;
            axios({
              method: "post",
              url: "http://127.0.0.1:8000/api/postReceProd",
              data: JSON.stringify({
                medicines: this.nuevaRecetaData.medicines,
                recipe_id: this.Resid
              }),
              headers: {
                authorization: "Bearer " + token,
                "content-type": "application/json"
              }
            })
              .then(Response => {
                this.activeLoading = false;
                this.$vs.loading.close();
                this.$router.push("/recetaFinal");
                this.$vs.notify({
                  title: "Satisfactorio",
                  text: "Receta creada exitosamente.",
                  color: "success"
                });
              })
              .catch(err => {
                this.activeLoading = false;
                this.$vs.loading.close();
                this.$vs.notify({
                  title: "Error",
                  text: "No se puedo crear la receta.",
                  color: "danger"
                });
                //console.log(err);
              });
          })
          .catch(err => {
            this.activeLoading = false;
            this.$vs.loading.close();
            this.$vs.notify({
              title: "Error",
              text: "No se puedo crear la receta.",
              color: "danger"
            });
            //console.log(err);
          });
      }
    }
  },
  components: {
    FormWizard,
    TabContent,
    flatPickr
  },
  created() {}
};
</script>
