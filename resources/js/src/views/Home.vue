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
      <div class="vx-col w-full lg:w-1/2 mb-base">
        <a href="nuevoPaciente">
          <vx-card slot="no-body" class="text-center bg-light-gradient greet-user">
            <!-- <img src="@assets/images/elements/decore-left.png" class="decore-left" alt="Decore Left" width="200" >
            <img src="@assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="175">-->
            <feather-icon
              icon="PlusIcon"
              class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow"
              svgClasses="h-8 w-8"
            ></feather-icon>
            <!-- <h1 class="mb-6 text-white">Congratulations {{ checkpointReward.userName }},</h1> -->
            <h1 class="mb-6 text-black">Nueva Receta</h1>
            <br />
            <p
              class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-blue"
            >Ingrese una nueva Receta y/o paciente.</p>
          </vx-card>
        </a>
      </div>

      <!-- CARD 2: SUBSCRIBERS GAINED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <a href="/apps/user/user-list">
          <statistics-card-line
            icon="ListIcon"
            statistic="Pacientes"
            statisticTitle="Busqueda de pacientes."
            :chartData="ordersRecevied.series"
            color="warning"
            type="area"
          ></statistics-card-line>
        </a>
      </div>

      <!-- CARD 3: ORDER RECIEVED -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <a href="/forms/form-wizard">
          <statistics-card-line
            icon="CalendarIcon"
            statistic="Calendario"
            statisticTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque, voluptatibus, aperiam, nesciunt laboriosam sint inventore odit consectetur nisi in accusamus libero dolores ducimus beatae perferendis quia. Veritatis, incidunt molestias?"
            :chartData="subscribersGained.series"
            type="area"
          ></statistics-card-line>
        </a>
      </div>
    </div>

    <div class="vx-row">
      <!-- CARD 9: DISPATCHED ORDERS -->
      <div class="vx-col w-full">
        <vx-card title="Recetas emitidas el día de hoy.">
          <div slot="no-body" class="mt-4">
            <vs-table :data="dispatchedOrders" class="table-dark-inverted">
              <template slot="thead">
                <vs-th>NUMERO.</vs-th>
                <vs-th>ESTATUS</vs-th>
                <vs-th>PACIENTE</vs-th>
                <vs-th>FECHA</vs-th>
                <vs-th>PROXIMA CITA</vs-th>
                <vs-th>ACCIONES</vs-th>
              </template>

              <template>
                <vs-tr v-for="(item, index) in recipes" :key="index">
                  <vs-td>
                    <span v-text="index + 1"></span>
                  </vs-td>
                  <vs-td>
                    <span class="flex items-center px-2 py-1 rounded">
                      <div class="h-3 w-3 rounded-full mr-2">Pendiente</div>
                    </span>
                  </vs-td>
                  <vs-td>
                    <ul class="users-liked user-list">
                      <li>
                        <vx-tooltip position="bottom">
                          <vs-avatar size="30px" class="border-2 border-white border-solid -m-1"></vs-avatar>
                        </vx-tooltip>
                        <span v-text="item.name"></span>
                      </li>
                    </ul>
                  </vs-td>
                  <vs-td>
                    <span v-text="item.dateIssue"></span>
                  </vs-td>
                  <vs-td>
                    <span>Por definir</span>
                  </vs-td>
                  <vs-td>
                    <span>Pendiente</span>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import analyticsData from "./ui-elements/card/analyticsData.js";
import ChangeTimeDurationDropdown from "@/components/ChangeTimeDurationDropdown.vue";
import VxTimeline from "@/components/timeline/VxTimeline";
import axios from "axios";

export default {
  data() {
    return {
      checkpointReward: {},
      subscribersGained: {},
      ordersRecevied: {},
      salesBarSession: {},
      supportTracker: {},
      productsOrder: {},
      salesRadar: {},
      //Variables usadas
      medicamentosData: [],
      recipes: [],

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
    getRecipes(){
      let token = localStorage.getItem("tu");
      let id = localStorage.getItem("ui");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getRecipes",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          Response.data.forEach(element => {
            if(element.doctor_id == id){
              this.recipes.push(element);
            }
            console.log(this.recipes);
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
    this.getRecipes();
    let data = JSON.parse(localStorage.getItem("recetas"));
    this.medicamentosData = data;
    console.log(this.medicamentosData);
    //  User Reward Card
    this.$http
      .get("/api/user/checkpoint-reward")
      .then(response => {
        this.checkpointReward = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    // Subscribers gained - Statistics
    this.$http
      .get("/api/card/card-statistics/subscribers")
      .then(response => {
        this.subscribersGained = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    // Orders - Statistics
    this.$http
      .get("/api/card/card-statistics/orders")
      .then(response => {
        this.ordersRecevied = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    // Sales bar - Analytics
    this.$http
      .get("/api/card/card-analytics/sales/bar")
      .then(response => {
        this.salesBarSession = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    // Support Tracker
    this.$http
      .get("/api/card/card-analytics/support-tracker")
      .then(response => {
        this.supportTracker = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    // Products Order
    this.$http
      .get("/api/card/card-analytics/products-orders")
      .then(response => {
        this.productsOrder = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    // Sales Radar
    this.$http
      .get("/api/card/card-analytics/sales/radar")
      .then(response => {
        this.salesRadar = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    // Dispatched Orders
    this.$http
      .get("/api/table/dispatched-orders")
      .then(response => {
        this.dispatchedOrders = response.data;
      })
      .catch(error => {
        console.log(error);
      });
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
