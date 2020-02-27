<template>
  <div>
    <div class="vx-row">
      <div class="vx-col md:w-1/2 w-full">
        <vx-input-group class="mb-base">
          <vs-input placeholder="Nombre / Fecha" v-model="buscar" />

          <template slot="append">
            <div class="append-text bg-primary">
              <span>
                <vs-icon icon="search"></vs-icon>
              </span>
            </div>
          </template>
        </vx-input-group>
      </div>
      <div class="vx-col md:w-1/2 w-full">
        <!-- <vx-input-group class="mb-base">
          <vs-input placeholder="Laboratorio" />

          <template slot="append">
            <div class="append-text bg-primary">
              <span>
                <vs-icon icon="search"></vs-icon>
              </span>
            </div>
          </template>
        </vx-input-group>-->
      </div>
    </div>
    <div class="vx-row">
      <!-- CARD 9: DISPATCHED ORDERS -->
      <div class="vx-col w-full">
        <vx-card>
          <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
              <h4>Listado Recetas</h4>
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
              <div align="right">
                <vs-button color="primary" type="filled" @click="nuevo">Nueva Receta</vs-button>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <vs-table :data="recipes" class="table-dark-inverted">
              <template slot="thead">
                <vs-th>NUMERO.</vs-th>
                <vs-th>ESTATUS</vs-th>
                <vs-th>PACIENTE</vs-th>
                <vs-th>FECHA</vs-th>
                <vs-th>PROXIMA CITA</vs-th>
                <vs-th>ACCIONES</vs-th>
              </template>

              <template>
                <vs-tr v-for="(item, index) in searchRecetas" :key="index">
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
                        <span v-text="item.name"></span>
                      </li>
                    </ul>
                  </vs-td>
                  <vs-td>
                    <span v-text="item.dateIssue"></span>
                  </vs-td>
                  <vs-td>
                    <span
                      v-if="item.nextAppointment == '' || item.nextAppointment == null"
                    >Por definir</span>
                    <span v-else v-text="item.nextAppointment"></span>
                  </vs-td>
                  <vs-td>
                    <vs-button
                      color="rgb(62, 201, 214)"
                      type="filled"
                      size="small"
                      @click="verReceta(item.id)"
                    >Ver</vs-button>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </vx-card>
      </div>
    </div>
    <iframe 
    id='efectiva-chat'
    style='position: fixed; right: 2px; bottom: 2px; z-index:3000;'
    frameborder='0'
    scrolling='auto'
    height='450px'
    width='428px'
    src='https://app.efectiva.merke.app/chats/chat_index.php?aWQ9NjAmYXJlYT0wLDEzOSZsbj1lcyZwbGFuPTEz'></iframe>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      popupActive3: false,
      recipes: [],
      buscar: ""
    };
  },
  methods: {
    nuevo() {
      this.$router.push("/nuevoPaciente");
    },
    verReceta(id) {
      this.$router.push("/receta/" + id);
    },
    getRecipes() {
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
          Response.data.forEach(element => {
            if (element.doctor_id == id) {
              this.recipes.push(element);
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getRecipes();
  },
  computed: {
    searchRecetas: function() {
      let result = this.recipes;
      if (!this.buscar) {
        return result;
      }
      let texto = this.buscar.toLowerCase();
      const filter = event => event.name.toLowerCase().includes(texto) ||
                    event.dateIssue.toLowerCase().includes(texto);

      return result.filter(filter);
    }
  }
};
</script>