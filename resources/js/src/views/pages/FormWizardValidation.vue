<!-- =========================================================================================
    File Name: FormWizardNumberTab.vue
    Description: Form wizard with numbers in tabs
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Datos del Paciente" code-toggler>
    <p>Ingrese los datos del paciente.</p>

    <div class="mt-5">
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
            </div>
            <div class="vx-col md:w-1/2 w-full mt-5">
              <vs-input label="Teléfono" type="number" v-model="telefono" class="w-full" />
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
      nombres: "",
      apellidos: "",
      peso: "",
      email: "",
      city: "new-york",
      proposalTitle: "",
      telefono: "",
      jobTitle: "",
      textarea: "",
      eventName: "",
      genero: "",
      eventLocation: "san-francisco",
      status: "plannning",
      generos: [
        { text: "Femenino", value: "f" },
        { text: "Masculino", value: "m" }
      ],
      statusOptions: [
        { text: "Plannning", value: "plannning" },
        { text: "In Progress", value: "in progress" },
        { text: "Finished", value: "finished" }
      ],
      LocationOptions: [
        { text: "New York", value: "new-york" },
        { text: "Chicago", value: "chicago" },
        { text: "San Francisco", value: "san-francisco" },
        { text: "Boston", value: "boston" }
      ]
    };
  },
  methods: {
    formSubmitted() {
      let nuevaRecetaData = {
        nombrePaciente: this.nombres,
        apellidoPaciente: "",
        fechaNacimiento: '',
        peso: '',
        genero: "",
        telefono: this.telefono,
        fecha: '',
        sintomas: "",
        diagnostico: "",
        observaciones: "",
        proximaCita: "",
        medicamentos: []
      };
      localStorage.setItem('nuevaRecetaData', JSON.stringify(nuevaRecetaData));
      location.href = "/agregarProductos";
    }
  },
  components: {
    FormWizard,
    TabContent
  }
};
</script>
