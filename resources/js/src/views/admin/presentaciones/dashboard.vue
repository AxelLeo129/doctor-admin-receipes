<template>
    <div>
        <div class="vx-row">
            <div class="vx-col sm:w-1/2">
                <div align="left">
                    <vs-button @click="nuevo" color="primary" size="small" type="filled">Nueva Presentación</vs-button>
                </div>
            </div>
        </div>
        <vs-table pagination max-items="10" search :data="roles">
            <template slot="thead">
                <vs-th sort-key="id">#</vs-th>
                <vs-th sort-key="Precentacion">Nombre</vs-th>
                <vs-th sort-key="unidad">Unidad</vs-th>
                <vs-th sort-key="unidad">Cantidad</vs-th>
                <vs-th sort-key="id">Acciones</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td v-text="indextr + 1"></vs-td>

                    <vs-td :data="data[indextr].name">{{ data[indextr].name }}</vs-td>

                    <vs-td :data="data[indextr].unidad">{{ data[indextr].unidad }}</vs-td>

                    <vs-td :data="data[indextr].cantidad">{{ data[indextr].cantidad }}</vs-td>

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
                roles: []
            };
        },
        methods: {
            nuevo() {
                this.$router.push("/nuevaPre");
            },
            edit(id) {
                this.$router.push("/editarPre/" + id);
            },
            getRoles() {
                this.openLoading();
                let token = localStorage.getItem("tu");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getPres",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        //console.log(Response);
                        Response.data.forEach(element => {
                            this.roles.push(element);
                        });
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    })
                    .catch(err => {
                        console.log(err);
                        localStorage.removeItem("tu");
                        localStorage.removeItem("ru");
                        localStorage.removeItem("ui");
                        localStorage.removeItem("regi");
                        localStorage.removeItem("nuevaRecetaData");
                        this.$router.push("/");
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
            this.getRoles();
        }
    };

</script>
