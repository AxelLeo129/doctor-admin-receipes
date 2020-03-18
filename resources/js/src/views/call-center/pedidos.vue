<template>
    <div>
        <vs-table pagination max-items="10" search :data="users">
            <template slot="thead">
                <vs-th sort-key="id">#</vs-th>
                <vs-th sort-key="name">Nombre</vs-th>
                <vs-th sort-key="phone">Teléfono</vs-th>
                <vs-th sort-key="doctor_name">Nombre del Doctor</vs-th>
                <vs-th sort-key="status">Estatus</vs-th>
                <vs-th sort-key="actions">Acciones</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].id">{{ data[indextr].id }}</vs-td>

                    <vs-td :data="data[indextr].name">{{ data[indextr].name }}</vs-td>

                    <vs-td :data="data[indextr].phone">{{ data[indextr].phone }}</vs-td>

                    <vs-td :data="data[indextr].doctor_name">{{ data[indextr].doctor_name }}</vs-td>

                    <vs-td>
                        <span class="flex items-center px-2 py-1 rounded">
                            <div class="h-2 w-2 rounded-full mr-2" :class="'bg-' + data[indextr].color">
                            </div>{{data[indextr].status}}
                        </span>
                    </vs-td>

                    <vs-td>
                        <vs-button size="small" color="rgb(62, 201, 214)" @click="edit(tr.id)" icon-pack="feather"
                            icon="icon-eye" disabled></vs-button>
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
                users: [],
                medicos: [],
                status: ["Nuevo", "Empaquetando", "En Ruta", "Entregado", "Cancelado", "Reagendado", "Facturando"],
            };
        },
        methods: {
            nuevo() {
                this.$router.push('/nuevoUsuario');
            },
            edit(id) {
                this.$router.push("/editarUsuario/" + id);
            },
            getMedicos() {
                this.openLoading();
                let token = localStorage.getItem("tu");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getMedicos",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        Response.data.forEach(element => {
                            this.medicos.push({
                                id: element.id,
                                name: element.name
                            });
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    });
            },
            colore(a) {
                if (a == 1) return "primary";
                if (a == 2) return "warning";
                if (a == 3) return "warning";
                if (a == 4) return "success";
                if (a == 5) return "danger";
                if (a == 6) return "danger";
                if (a == 7) return "warning";
                return "primary";
            },
            getMedics() {
                let token = localStorage.getItem("tu");
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
                            element.color = this.colore(element.status);
                            element.status = this.status[element.status - 1];
                            this.medicos.forEach(e => {
                                if (e.id == element.doctor_id) {
                                    element.doctor_name = e.name;
                                }
                            });
                            this.users.push(element);
                        });
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
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
            this.getMedicos();
            this.getMedics();
        }
    };

</script>
