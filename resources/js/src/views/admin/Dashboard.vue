<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <div class="vx-row">
      <!-- CARD 1: CONGRATS -->
      <div class="vx-col md:w-2/3 w-full lg:w-1/2 mb-base">
        <a href="nuevoProducto">
          <vx-card slot="no-body" class="text-center bg-light-gradient greet-user">
            <!-- <img src="@assets/images/elements/decore-left.png" class="decore-left" alt="Decore Left" width="200" >
            <img src="@assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="175">-->
            <feather-icon
              icon="PlusIcon"
              class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow"
              svgClasses="h-8 w-8"
            ></feather-icon>
            <!-- <h1 class="mb-6 text-white">Congratulations {{ checkpointReward.userName }},</h1> -->
            <h1 class="mb-6 text-black">Nuevo Medicamento/Producto</h1>
            <br />
            <p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-blue">
              Ingrese un nuevo
              medicamento/producto.
            </p>
          </vx-card>
        </a>
      </div>

      <!-- CARD 2: SUBSCRIBERS GAINED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-base">
        <a href="listadoProductos">
          <statistics-card-line
            icon="ListIcon"
            statistic="Medicamentos"
            statisticTitle="Listado de Medicamentos."
            :chartData="ordersRecevied.series"
            color="warning"
            type="area"
          ></statistics-card-line>
        </a>
      </div>

      <!-- CARD 3: ORDER RECIEVED -->
      <!-- <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <a href="/forms/form-wizard">
          <statistics-card-line
            icon="CalendarIcon"
            statistic="Calendario"
            statisticTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque, voluptatibus, aperiam, nesciunt laboriosam sint inventore odit consectetur nisi in accusamus libero dolores ducimus beatae perferendis quia. Veritatis, incidunt molestias?"
            :chartData="subscribersGained.series"
            type="area"
          ></statistics-card-line>
        </a>
      </div>-->
    </div>

    <div class="vx-row">
      <!-- CARD 9: DISPATCHED ORDERS -->
      <div class="vx-col w-full">
        <vx-card title="Últimos productos agregados.">
          <div slot="no-body" class="mt-4">
            <vs-table pagination max-items="10" search :data="medicamentos">
              <template slot="thead">
                <vs-th>NUMERO.</vs-th>
                <vs-th>NOMBRE</vs-th>
                <vs-th>LABORATORIO</vs-th>
                <vs-th>PRECENTACION</vs-th>
                <vs-th>CANTIDAD</vs-th>
                <vs-th>ACCIONES</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td>
                    <span v-text="tr.id"></span>
                  </vs-td>

                  <vs-td :data="data[indextr].name">{{ data[indextr].name }}</vs-td>

                  <vs-td :data="data[indextr].lab">{{ data[indextr].lab }}</vs-td>

                  <vs-td :data="data[indextr].precentacion">{{ data[indextr].precentacion }}</vs-td>

                  <vs-td :data="data[indextr].quantity">{{ data[indextr].quantity }}</vs-td>

                  <vs-td>
                    <span>
                      <vs-button
                        color="warning"
                        type="filled"
                        size="small"
                        @click="edit(tr.id)"
                      >Editar</vs-button>
                      <vs-button
                        color="danger"
                        type="filled"
                        size="small"
                        @click="popupActive3=true, iden=tr.id"
                      >Eliminar</vs-button>
                    </span>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
            <vs-popup title="Eliminar Producto" :active.sync="popupActive3">
              <p>¿Está seguro de eliminar este producto?</p>
              <br />
              <vs-button @click="deleteProduct(iden)" color="primary" type="filled">Aceptar</vs-button>
              <vs-button @click="popupActive3=false" color="danger" type="filled">Cancelar</vs-button>
            </vs-popup>

            <!-- <vs-table :data="dispatchedOrders" class="table-dark-inverted">
              <template slot="thead">
                <vs-th>NUMERO.</vs-th>
                <vs-th>IMAGEN</vs-th>
                <vs-th>NOMBRE</vs-th>
                <vs-th>LABORATORIO</vs-th>
                <vs-th>PRECENTACION</vs-th>
                <vs-th>CANTIDAD</vs-th>
                <vs-th>ACCIONES</vs-th>
              </template>

              <template>
                <vs-tr v-for="(item, index) in medicamentos" :key="item.id">
                  <vs-td>
                    <span v-text="'# ' + (index + 1)"></span>
                  </vs-td>
                  <vs-td>
                    <ul class="users-liked user-list">
                      <li>
                        <vx-tooltip position="bottom">
                          <vs-avatar
                            size="30px"
                            class="border-2 border-white border-solid -m-1"
                            v-bind:src="'data:image/png;base64,'+item.image"
                          ></vs-avatar>
                        </vx-tooltip>
                      </li>
                    </ul>
                  </vs-td>
                  <vs-td>
                    <span v-text="item.name"></span>
                  </vs-td>
                  <vs-td>
                    <span v-text="item.laboratory"></span>
                  </vs-td>
                  <vs-td>
                    <span v-text="item.precentation"></span>
                  </vs-td>
                  <vs-td>
                    <span v-text="item.quantity"></span>
                  </vs-td>
                  <vs-td>
                    <span>
                      <vs-button
                        color="warning"
                        type="filled"
                        size="small"
                        @click="edit(item.id)"
                      >Editar</vs-button>
                      <vs-button
                        color="danger"
                        type="filled"
                        size="small"
                        @click="popupActive3=true, iden=item.id"
                      >Eliminar</vs-button>
                    </span>
                  </vs-td>
                  <vs-popup title="Eliminar Producto" :active.sync="popupActive3">
                    <p>¿Está seguro de eliminar este producto?</p>
                    <br />
                    <vs-button @click="deleteProduct(iden)" color="primary" type="filled">Aceptar</vs-button>
                    <vs-button @click="popupActive3=false" color="danger" type="filled">Cancelar</vs-button>
                  </vs-popup>
                </vs-tr>
              </template>
            </vs-table> -->
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import analyticsData from "../ui-elements/card/analyticsData.js";
import ChangeTimeDurationDropdown from "@/components/ChangeTimeDurationDropdown.vue";
import VxTimeline from "@/components/timeline/VxTimeline";
import axios from "axios";

export default {
  data() {
    return {
      iden: 0,
      popupActive3: false,
      medicamentos: [],
      checkpointReward: {},
      subscribersGained: {},
      ordersRecevied: {},
      salesBarSession: {},
      supportTracker: {},
      productsOrder: {},
      salesRadar: {},

      timelineData: [
        {
          color: "primary",
          icon: "PlusIcon",
          title: "Client Meeting",
          desc: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
          time: "25 mins Ago"
        },
        {
          color: "warning",
          icon: "MailIcon",
          title: "Email Newsletter",
          desc: "Cupcake gummi bears soufflé caramels candy",
          time: "15 Days Ago"
        },
        {
          color: "danger",
          icon: "UsersIcon",
          title: "Plan Webinar",
          desc: "Candy ice cream cake. Halvah gummi bears",
          time: "20 days ago"
        },
        {
          color: "success",
          icon: "LayoutIcon",
          title: "Launch Website",
          desc:
            "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.",
          time: "25 days ago"
        },
        {
          color: "primary",
          icon: "TvIcon",
          title: "Marketing",
          desc: "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.",
          time: "28 days ago"
        }
      ],

      analyticsData: analyticsData,
      dispatchedOrders: []
    };
  },
  methods: {
    edit(id) {
      this.$router.push("/editarProducto/" + id);
    },
    getData() {
      let token = localStorage.getItem("tu");
      let id = localStorage.getItem("ui");
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
            //if (element.user_id == id) {
              this.medicamentos.push(element);
            //}
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteProduct(id) {
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/deleteProduct/" + id,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          this.getData();
          this.popupActive3 = false;
          this.$vs.notify({
            title: "Eliminado",
            text: "Producto eliminado exitosamente.",
            color: "success"
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    VueApexCharts,
    StatisticsCardLine,
    ChangeTimeDurationDropdown,
    VxTimeline
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss">
/*! rtl:begin:ignore */
#dashboard-analytics {
  .greet-user {
    position: relative;

    .decore-left {
      position: absolute;
      left: 0;
      top: 0;
    }

    .decore-right {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  @media (max-width: 576px) {
    .decore-left,
    .decore-right {
      width: 140px;
    }
  }
}

/*! rtl:end:ignore */
</style>
