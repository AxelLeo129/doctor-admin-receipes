<!-- =========================================================================================
    File Name: Invoice.vue
    Description: Invoice Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div id="invoice-page">
    <div class="flex flex-wrap items-center justify-between">
      <vx-input-group class="mb-base mr-3">
        <vs-input v-model="mailTo" placeholder="Email" />

        <template slot="append">
          <div class="append-text btn-addon">
            <vs-button type="border" @click="mailTo = ''" class="whitespace-no-wrap">Enviar Receta</vs-button>
          </div>
        </template>
      </vx-input-group>
      <div class="flex items-center">
        <vs-button
          class="mb-base mr-3"
          icon-pack="feather"
          icon="icon icon-file"
          @click="printInvoice"
        >Imprimir</vs-button>
        <vs-button
          class="mb-base mr-3"
          color="warning"
          icon-pack="feather"
          icon="icon icon-check"
          @click="finalizar"
        >Finalizar</vs-button>
      </div>
    </div>

    <vx-card id="invoice-container">
      <!-- INVOICE METADATA -->
      <div class="vx-row leading-loose p-base">
        <div class="vx-col w-full md:w-1/2 mt-base">
          <img v-bind:src="image" class="mr-8 rounded h-48 w-48" />
        </div>
        <div class="vx-col w-full md:w-1/2 text-right">
          <h1>Receta</h1>
          <div class="invoice__invoice-detail mt-6">
            <h6>Receta No.</h6>
            <p>{{ invoiceDetails.invoiceNo }}</p>

            <h6 class="mt-4">Fecha Receta</h6>
            <p v-text="nuevaRecetaData.dateIssue"></p> 
          </div>
        </div>
        <div class="vx-col w-full md:w-1/2 mt-12">
          <h5>Paciente</h5>
          <div class="invoice__recipient-info my-4">
            <p v-text="nuevaRecetaData.name"></p>
            <p>Guatemala</p>
            <p v-text="nuevaRecetaData.phone"></p>
          </div>
          <div class="invoice__recipient-contact">
            <!-- <p class="flex items-center">
              <feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
              <span class="ml-2">{{ recipientDetails.mailId }}</span>
            </p>-->
          </div>
        </div>
        <div class="vx-col w-full md:w-1/2 mt-base text-right mt-12">
          <h5>{{ companyDetails.name }}</h5>
          <div class="invoice__company-info my-4">
            <p>Via 4 zona 4 Guatemala</p>
            <p><strong v-text="drName"></strong></p>
            <p>{{ companyDetails.zipcode }}</p>
          </div>
          <div class="invoice__company-contact">
            <p class="flex items-center justify-end">
              <feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
              <span class="ml-2" v-text="drEmail"></span>
            </p>
            <p class="flex items-center justify-end">
              <feather-icon icon="PhoneIcon" svgClasses="h-4 w-4"></feather-icon>
              <span class="ml-2" v-text="drPhone"></span>
            </p>
          </div>
        </div>
      </div>

      <!-- INVOICE CONTENT -->
      <div class="p-base">
        <!-- INVOICE TASKS TABLE -->
        <vs-table hoverFlat :data="invoiceData.tasks">
          <!-- HEADER -->

          <!-- DATA -->
          <template>
            <vs-tr v-for="item in nuevaRecetaData.medicamentos" :key="item.nombre">
              <vs-td v-text="item.nombre + ' ' + item.precentacion + ' ' + item.descripcion"></vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>

      <!-- INVOICE FOOTER -->
      <div class="invoice__footer text-right p-base">
        <div align="right">
          <img class="h-24 w-64" :src="imagen64" alt />
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      image: "/images/medicamentos/demol.PNG",
      drName: "",
      drEmail: "",
      drPhone: "",
      nuevaRecetaData: {},
      recetas: [],
      mailTo: "",
      companyDetails: {
        name: "",
        addressLine1: "9 N. Sherwood Court",
        addressLine2: "Nombre Médico",
        zipcode: "94203",
        mailId: "hello@pixinvent.net",
        mobile: "s"
      },
      recipientDetails: {
        fullName: "Peter Stark",
        addressLine1: "8577 West West Drive ",
        addressLine2: "Holbrook, NY",
        zipcode: "90001",
        mailId: "peter@mail.com",
        mobile: "+91 988 888 8888"
      },
      invoiceDetails: {
        invoiceNo: "001/2019",
        invoiceDate: "Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)"
      },
      invoiceData: {
        tasks: [
          {
            id: 1,
            task: "Website Redesign",
            hours: 60,
            rate: 15,
            amount: 90000
          },
          {
            id: 2,
            task: "Newsletter template design",
            hours: 20,
            rate: 12,
            amount: 24000
          }
        ],
        subtotal: 114000,
        discountPercentage: 5,
        discountedAmount: 5700,
        total: 108300
      },
      imagen64: "/images/medicamentos/unnamed.jpg"
    };
  },
  computed: {},
  created() {
    this.getUser();
    let data = JSON.parse(localStorage.getItem("nuevaRecetaData"));
    this.nuevaRecetaData = data;
    console.log(this.nuevaRecetaData);
  },
  methods: {
    getUser() {
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/details",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          console.log(Response);
          if(Response.data.success.clinicalRecord == null || Response.data.success.clinicalRecord == ""){
            this.image = "/images/medicamentos/demol.PNG";
          }else{
            this.image = "data:image/png;base64," + Response.data.success.clinicalRecord;
          }
          this.drName = Response.data.success.name;
          this.drEmail = Response.data.success.email;
          if(Response.data.success.phone == null || Response.data.success.phone == ""){
            this.drPhone = '+502: 8452-9862';
          }else{
            this.drPhone = '+502: ' + Response.data.success.phone;
          }
          this.activeLoading = false;
          this.$vs.loading.close();
        })
        .catch(err => {
          console.log(err);
          this.activeLoading = false;
          this.$vs.loading.close();
        });
    },
    printInvoice() {
      window.print();
    },
    finalizar() {
      let a = JSON.parse(localStorage.getItem("recetas"));
      this.recetas = a;
      if (this.recetas == null) {
        this.recetas = [];
      }
      this.recetas.push({
        nombrePaciente: this.nuevaRecetaData.nombrePaciente,
        apellidoPaciente: this.nuevaRecetaData.apellidoPaciente,
        genero: this.nuevaRecetaData.genero,
        telefono: this.nuevaRecetaData.telefono,
        medicamentos: this.nuevaRecetaData.medicamentos
      });

      localStorage.setItem("recetas", JSON.stringify(this.recetas));

      location.href = "/home";
    }
  },
  components: {},
  mounted() {
    this.$emit("setAppClasses", "invoice-page");
  }
};
</script>

<style lang="scss">
@media print {
  .invoice-page {
    * {
      visibility: hidden;
    }

    #content-area {
      margin: 0 !important;
    }

    #invoice-container,
    #invoice-container * {
      visibility: visible;
    }
    #invoice-container {
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: none;
    }
  }
}
</style>
