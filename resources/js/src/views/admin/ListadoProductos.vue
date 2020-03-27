<template>
    <div>
        <vs-popup title="Eliminar Producto" :active.sync="popupActive3">
            <p>¿Está seguro de eliminar este producto?</p>
            <br />
            <vs-button @click="deleteProduct(idMedicamento)" color="primary" type="filled">Aceptar
            </vs-button>
            <vs-button @click="popupActive3=false" color="danger" type="filled">Cancelar
            </vs-button>
        </vs-popup>
        <div class="vx-row">
            <div class="vx-col sm:w-1/2">
                <div align="left">
                    <vs-button color="primary" type="filled" @click="nuevo" size="small">Nuevo Medicamento</vs-button>
                </div>
            </div>
        </div>
        <vs-table pagination max-items="10" search :data="medicamentos">
            <template slot="thead">
                <vs-th sort-key='id'>#</vs-th>
                <vs-th sort-key="name">NOMBRE</vs-th>
                <vs-th sort-key="laboratory">LABORATORIO</vs-th>
                <vs-th sort-key="precentation">PRECENTACION</vs-th>
                <vs-th sort-key="quantity">CANTIDAD</vs-th>
                <vs-th sort-key="actions">ACCIONES</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="item" :key="indextr" v-for="(item, indextr) in data">
                    <vs-td>
                        <span v-text="item.id"></span>
                    </vs-td>
                    <vs-td>
                        <span v-text="item.name"></span>
                    </vs-td>
                    <vs-td>
                        <span v-text="item.lab"></span>
                    </vs-td>
                    <vs-td>
                        <span v-text="item.precentacion"></span>
                    </vs-td>
                    <vs-td>
                        <span v-text="item.quantity"></span>
                    </vs-td>
                    <vs-td>
                        <span>
                            <vs-button color="warning" type="filled" size="small" @click="edit(item.id)">Editar
                            </vs-button>
                            <vs-button color="danger" type="filled" size="small" @click="eliminar(item.id)">Eliminar
                            </vs-button>
                        </span>
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
                idMedicamento: null,
                popupActive3: false,
                medicamentos: [],
                buscar: ""
            };
        },
        methods: {
            eliminar(id){
                this.idMedicamento = id;
                this.popupActive3 = true;
            },
            openLoading() {
                this.activeLoading = true;
                this.$vs.loading({
                    type: "default"
                });
            },
            nuevo() {
                this.$router.push("/nuevoProducto");
            },
            edit(id) {
                this.$router.push("/editarProducto/" + id);
            },
            getData() {
                this.openLoading();
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
                        this.medicamentos = [];
                        Response.data.forEach(element => {
                            //if (element.user_id == id) {
                            this.medicamentos.push(element);
                            //}
                        });
                        //console.log(this.medicamentos);
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
                        this.idMedicamento = null;
                        this.popupActive3 = false;
                        this.$vs.notify({
                            title: "Eliminado",
                            text: "Producto eliminado exitosamente.",
                            color: "success",
                            iconPack: 'feather',
                            icon: 'icon-check'
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        created() {
            this.getData();
        },
        computed: {
            searchPacientes: function () {
                let result = this.medicamentos;
                if (!this.buscar) {
                    return result;
                }
                let texto = this.buscar.toLowerCase();
                const filter = event =>
                    event.name.toLowerCase().includes(texto) ||
                    event.laboratory.toLowerCase().includes(texto) ||
                    event.precentation.toLowerCase().includes(texto) ||
                    event.quantity.toLowerCase().includes(texto);

                return result.filter(filter);
            }
        }
    };

</script>
