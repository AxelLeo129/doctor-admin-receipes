<template>
  <div>
    <div class="vx-row">
      <div class="vx-col sm:w-1/2">
        <div align="left">
          <vs-button @click="nuevo" color="primary" size="small" type="filled">Nuevo Usuario</vs-button>
        </div>
      </div>
    </div>
    <vs-table pagination max-items="10" search :data="users">
      <template slot="thead">
        <vs-th sort-key="id">#</vs-th>
        <vs-th sort-key="username">Nombre</vs-th>
        <vs-th sort-key="website">Rol</vs-th>
        <vs-th sort-key="email">Email</vs-th>
        <vs-th sort-key="id">Acciones</vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].id">{{ data[indextr].id }}</vs-td>

          <vs-td :data="data[indextr].name">{{ data[indextr].name }}</vs-td>

          <vs-td :data="data[indextr].rol">{{ data[indextr].rol }}</vs-td>

          <vs-td :data="data[indextr].email">{{ data[indextr].email }}</vs-td>

          <vs-td>
            <vs-button size="small" color="warning" @click="edit(tr.id)">Editar</vs-button>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
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
    nuevo(){
      this.$router.push('/nuevoUsuario');
    },
    role(a) {
      if (a == "1") return "Administrador";
      if (a == "2") return "Médico";
      if (a == "3") return "Call-Center";
      if (a == "4") return "Despachador";
      if (a == "5") return "Mensajero";
      if (a == "6") return "Visitador";
      if (a == "7") return "Gerencia";
      if (a == "8") return "Contabilidad";
      if (a == "9") return "Facturador  ";
      return "";
    },
    edit(id) {
      this.$router.push("/editarUsuario/" + id);
    },
    getMedics() {
      this.openLoading();
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/listUsers",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          //console.log(Response);
          Response.data.forEach(element => {
            element.rol = this.role(element.rol);
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