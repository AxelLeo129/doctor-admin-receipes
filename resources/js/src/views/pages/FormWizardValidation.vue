<!-- =========================================================================================
    File Name: FormWizardNumberTab.vue
    Description: Form wizard with numbers in tabs
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Datos del Paciente">
    <p>Ingrese los datos del paciente.</p>

    <div class="mt-5">
      <div align="center">
        <h4>Paso</h4>
        <h5><strong>1</strong> ... 2 ... 3 ... 4</h5>
      </div>
      <form-wizard
        color="rgba(var(--vs-primary), 1)"
        :title="null"
        :subtitle="null"
        finishButtonText="Siguiente"
        @on-complete="formSubmitted"
      >
        <tab-content title="Paso 1" icon="feather icon-home" class="mb-5">
          <!-- tab 1 content -->
          <div class="vx-row">
            <div class="vx-col md:w-1/2 w-full mt-5">
              <vs-input label="Nombre Completo del Paciente" v-model="nombres" class="w-full" />
              <span
                class="text-danger text-sm"
                v-show="nombres === '' || (nombres === '' && actiErr == true)"
              >Este campo es requerido.</span>
            </div>
            <div class="vx-col md:w-1/2 w-full mt-5">
              <vs-input label="Teléfono" type="number" v-model="telefono" class="w-full" />
              <span
                class="text-danger text-sm"
                v-show="telefono === '' || (telefono === '' && actiErr1 == true)"
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

export default {
  data() {
    return {
      nombres: null,
      telefono: null,
      fecha: "",
      actiErr: false,
      actiErr1: false
    };
  },
  methods: {
    getDate() {
      let f = new Date();
      this.fecha =
        f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    },
    formSubmitted() {
      if (this.nombres == null || this.nombres == "") {
        this.actiErr = true;
        this.nombres = "";
      } else if (this.telefono == null || this.telefono == "") {
        this.actiErr1 = true;
        this.telefono = "";
      } else {
        let idu = localStorage.getItem("ui");
        idu = parseInt(idu);
        let nuevaRecetaData = {
          recipe_id: "",
          name: this.nombres,
          phone: this.telefono,
          doctor_id: idu,
          symptom: "",
          diagnostics: "",
          observations: "",
          nextAppointment: "",
          status: 1,
          dateIssue: this.fecha,
          medicines: [],
          medicamentos: []
        };
        localStorage.setItem(
          "nuevaRecetaData",
          JSON.stringify(nuevaRecetaData)
        );
        this.$router.push("/agregarProductos");
      }
    }
  },
  components: {
    FormWizard,
    TabContent
  },
  created() {
    this.getDate();
  }
};
</script>
