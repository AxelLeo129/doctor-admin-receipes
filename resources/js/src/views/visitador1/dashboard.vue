<template>
  <vs-table pagination max-items="10" search :data="users">
    <template slot="thead">
      <vs-th sort-key="id">#</vs-th>
      <vs-th sort-key="username">Nombre</vs-th>
      <vs-th sort-key="website">No. Colegiado</vs-th>
      <vs-th sort-key="email">Email</vs-th>
      <vs-th sort-key="id">Acciones</vs-th>
    </template>

    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
        <vs-td v-text="indextr + 1"></vs-td>

        <vs-td :data="data[indextr].name">{{ data[indextr].name }}</vs-td>

        <vs-td :data="data[indextr].noCollegiate">{{ data[indextr].noCollegiate }}</vs-td>

        <vs-td :data="data[indextr].email">{{ data[indextr].email }}</vs-td>

        <vs-td>
          <vs-button size="small" color="warning" @click="edit(tr.id)">Editar</vs-button>
        </vs-td>
      </vs-tr>
    </template>
  </vs-table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tableList: [
        "vs-th: Component",
        "vs-tr: Component",
        "vs-td: Component",
        "thread: Slot",
        "tbody: Slot",
        "header: Slot"
      ],
      users: []
    };
  },
  methods: {
    edit(id) {
      this.$router.push("/editarMedico/" + id);
    },
    getMedics() {
      this.openLoading();
      let token = localStorage.getItem("tu");
      let id = localStorage.getItem("ui");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getVisitador/" + id,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          //console.log(Response);
          Response.data.forEach(element => {
            if (element.noCollegiate == null) {
              element.noCollegiate = "";
            }
            this.users.push(element);
          });
          this.activeLoading = false;
          this.$vs.loading.close();
        })
        .catch(err => {
          console.log(err);
        });
    },
    openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    }
  },
  created() {
    this.getMedics();
  }
};
</script>