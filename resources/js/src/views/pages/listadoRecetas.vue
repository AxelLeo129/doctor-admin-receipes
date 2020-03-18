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
                                <vs-th>ACCIONES</vs-th>
                            </template>

                            <template>
                                <vs-tr v-for="(item, index) in searchRecetas" :key="index">
                                    <vs-td>
                                        <span v-text="index + 1"></span>
                                    </vs-td>
                                    <vs-td>
                                        <span class="flex items-center px-2 py-1 rounded">
                                            <div class="h-2 w-2 rounded-full mr-2" :class="'bg-' + item.color">
                                            </div>{{item.status}}
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
                                        <vs-button color="rgb(62, 201, 214)" type="filled" size="small"
                                            @click="verReceta(item.id)">Ver</vs-button>
                                    </vs-td>
                                </vs-tr>
                            </template>
                        </vs-table>
                    </div>
                </vx-card>
            </div>
        </div>
        <!-- <iframe 
    id='efectiva-chat'
    style='position: fixed; right: 2px; bottom: 2px; z-index:3000;'
    frameborder='0'
    scrolling='auto'
    height='450px'
    width='428px'
    src='https://app.efectiva.merke.app/chats/chat_index.php?aWQ9NjAmYXJlYT0wLDEzOSZsbj1lcyZwbGFuPTEz'></iframe> -->
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                popupActive3: false,
                recipes: [],
                buscar: "",
                status: ["Nuevo", "Empaquetando", "En Ruta", "Entregado", "Cancelado", "No Compró", "Facturando"]
            };
        },
        methods: {
            openLoading() {
                this.activeLoading = true;
                this.$vs.loading({
                    type: "default"
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
            nuevo() {
                this.$router.push("/nuevoPaciente");
            },
            verReceta(id) {
                this.$router.push("/receta/" + id);
            },
            getRecipes() {
                this.openLoading();
                let token = localStorage.getItem("tu");
                let id = localStorage.getItem("ui");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getReceMed1/" + id,
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        Response.data.forEach(element => {
                            element.color = this.colore(element.status);
                            element.status = this.status[element.status - 1];
                            this.recipes.push(element);
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
            }
        },
        created() {
            this.getRecipes();
        },
        computed: {
            searchRecetas: function () {
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
