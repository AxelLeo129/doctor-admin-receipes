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
        <vx-card title="Listado Pacientes">
          <div class="mt-4">
            <vs-table :data="recipes" class="table-dark-inverted">
              <template slot="thead">
                <vs-th>NUMERO.</vs-th>
                <vs-th>PACIENTE</vs-th>
                <vs-th>TELÉFONO</vs-th>
                <vs-th>FECHA</vs-th>
                <vs-th>ACCIONES</vs-th>
              </template>

              <template>
                <vs-tr v-for="(item, index) in searchRecetas" :key="index">
                  <vs-td>
                    <span v-text="index + 1"></span>
                  </vs-td>
                  <vs-td>
                    <ul class="users-liked user-list">
                      <li>
                        <span v-text="item.name"></span>
                      </li>
                    </ul>
                  </vs-td>
                  <vs-td>
                    <span v-text="item.phone"></span>
                  </vs-td>
                  <vs-td>
                    <span v-text="item.dateIssue"></span>
                  </vs-td>
                  <vs-td>
                    <vs-button
                      color="rgb(62, 201, 214)"
                      type="filled"
                      size="small"
                      @click="verDiag(item.id)"
                    >Ver</vs-button>
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
    verDiag(id) {
      this.$router.push("/verDiagnostico/" + id);
    },
    openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    getRecipes() {
      this.openLoading();
      let token = localStorage.getItem("tu");
      let id = localStorage.getItem("ui");
      let f = new Date();
      let fecha =
        f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
      fecha = fecha.toString();
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getPacientes",
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
          this.activeLoading = false;
          this.$vs.loading.close();
        })
        .catch(err => {
          console.log(err);
          this.activeLoading = false;
          this.$vs.loading.close();
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
      const filter = event =>
        event.name.toLowerCase().includes(texto) ||
        event.dateIssue.toLowerCase().includes(texto);

      return result.filter(filter);
    }
  }
};
</script>