<template>
    <div class="">
        <h4>Visitador Médico</h4>
        <vs-table max-items="3" pagination :data="users">

            <template slot="thead">
                <vs-th>Colegiado</vs-th>
                <vs-th>Nombre</vs-th>
                <vs-th>Especialidad</vs-th>
                <vs-th>Genero</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].client_nit">
                        {{ data[indextr].client_nit }}
                    </vs-td>

                    <vs-td :data="data[indextr].client_name">
                        {{ data[indextr].client_name }}
                    </vs-td>

                    <vs-td :data="data[indextr].client_address">
                        {{ data[indextr].client_address }}
                    </vs-td>

                    <vs-td :data="data[indextr].client_genre">
                        {{ data[indextr].client_genre }}
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        methods: {
            getusers(){
                this.users = [];
      let token = localStorage.getItem("tu");
      let id = localStorage.getItem("ui");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getCliente/" + 12345678,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          Response.data.forEach(element => {
            this.users.push(element);
          });
          console.log(this.users);
        })
        .catch(err => {
          console.log(err);
        });
            }
        },
        data: () => ({
            users: []
        }),
        created(){this.getusers()}
    }
</script>
