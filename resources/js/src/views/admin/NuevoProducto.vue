<template>
    <div>
        <form v-on:submit.prevent="doSave()" enctype="multipart/form-data">
            <div class="vx-row">
                <div class="vx-col w-full">
                    <div class="flex items-start flex-col sm:flex-row">
                        <img alt="hola" v-bind:src="image" class="mr-8 rounded w-24" />
                        <div>
                            <p class="text-lg font-medium mb-2 mt-4 sm:mt-0" v-text="name"></p>

                            <input accept="image/*" type="file" color="danger" id="image" name="image"
                                @change="handleFileSelect($event)" @click="touched" class="fileInput" />
                            <label for="image" class="subir">Agregar Foto</label>
                            <div id="info1"></div>
                            <span class="text-danger text-sm"
                                v-show="image === 'images/medicamentos/default.png' && bol == ''">{{ errors.campo }}</span>
                        </div>
                    </div>
                    <vs-alert color="danger" title="Error" :active.sync="activado" closable icon-pack="feather"
                        close-icon="icon-x">{{message}}</vs-alert>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col md:w-1/2 w-full">
                    <vs-input class="w-full mt-4" label="Nombre" v-model="name" name="name" />
                    <span class="text-danger text-sm" v-show="name === ''">{{ errors.campo }}</span>
                    <div class="mt-4">
                        <vs-textarea class="vs-textarea" label="Nombre del Componente" v-model="description" />
                        <span class="text-danger text-sm" v-show="description === ''">{{ errors.campo }}</span>
                    </div>

                    <vs-input class="w-full mt-4" label="Cantidad" v-model="quantity" name="cantidad" type="number" />
                    <span class="text-danger text-sm" v-show="quantity === ''">{{ errors.campo }}</span>

                    <label class="vs-input--label">Precio</label>
                    <vx-input-group class="mb-base">
                        <template slot="prepend">
                            <div class="prepend-text bg-primary">
                                <span>Q</span>
                            </div>
                        </template>

                        <vs-input v-model="price" type="number" placeholder="Precio" />
                    </vx-input-group>

                    <label class="vs-input--label">Costo</label>
                    <vx-input-group class="mb-base">
                        <template slot="prepend">
                            <div class="prepend-text bg-primary">
                                <span>Q</span>
                            </div>
                        </template>

                        <vs-input v-model="cost" type="number" placeholder="Costo" />
                    </vx-input-group>

                    <span class="text-danger text-sm" v-show="cost === ''">{{ errors.campo }}</span>

                    <div class="mt-4">
                        <vs-textarea class="vs-textarea" label="Observaciones" v-model="observations" />
                        <span class="text-danger text-sm" v-show="observations === ''">{{ errors.campo }}</span>
                    </div>
                </div>

                <div class="vx-col md:w-1/2 w-full">
                    <div class="mt-4">
                        <label class="vs-input--label">Categorías</label>
                        <v-select multiple :closeOnSelect="false" v-model="category" :options="categorias"
                            :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                    </div>
                    <span class="text-danger text-sm" v-show="category === ''">{{ errors.campo }}</span>

                    <div class="mt-4">
                        <label class="vs-input--label" style="color: gray;">Presentación</label>
                        <v-select v-model="precentation" :options="presentaciones" />
                        <span class="text-danger text-sm" v-show="precentation === ''">{{ errors.campo }}</span>
                    </div>

                    <div class="mt-4">
                        <div>
                            <label class="vs-input--label" style="color: gray;">Laboratorio</label>
                            <v-select v-model="laboratory" :options="laboratorios" />
                            <span class="text-danger text-sm" v-show="laboratory === ''">{{ errors.campo }}</span>
                        </div>
                    </div>

                    <div class="mt-4">
                        <label class="vs-input--label">Proveedor</label>
                        <v-select :options="['NOVEMED']" v-model="warehouse" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                        <span class="text-danger text-sm" v-show="warehouse === ''">{{ errors.campo }}</span>
                    </div>

                    <div class="mt-4">
                        <label class="vs-input--label">Estado</label>
                        <v-select
                            :options="[{label: 'No Disponible', value: 0},{label: 'Disponible', value: 1}, {label: 'Oferta', value: 2}, {label: 'Agotado', value: 3}, {label: 'Descontinuado', value: 4}]"
                            v-model="status" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                        <span class="text-danger text-sm" v-show="status === ''">{{ errors.campo }}</span>
                    </div>

                    <div class="mt-4">
                        <label class="vs-input--label">Regulado</label>
                        <v-select :options="[{label: 'No', value: 0},{label: 'Si', value: 1}]" v-model="regulated"
                            :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                        <span class="text-danger text-sm" v-show="regulated === ''">{{ errors.campo }}</span>
                    </div>

                </div>

                <div class="vx-row">
                    <div class="vx-col md:w-1/2 w-full">
                        <span></span>
                    </div>
                    <div class="vx-col w-full">
                        <div class="mt-8 flex flex-wrap items-center justify-end">
                            <vs-button class="ml-auto mt-2" color="success" @click="doSave"
                                :disabled="regulated == null || regulated == '' || status == null || status == '' || name == null || name == '' || image == 'images/medicamentos/default.png' || bol == 'as' || quantity == null || quantity == '' || description == null || description == '' || precentation == null || precentation == '' || price == null || price == '' || cost == null || cost == '' || laboratory == null || laboratory == '' || category == null || category.length == 0 || warehouse == null || warehouse == ''">
                                Guardar</vs-button>
                            <vs-button class="ml-4 mt-2" type="border" color="danger" @click="cancel">Cancelar
                            </vs-button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import vSelect from "vue-select";
    import axios from "axios";

    export default {
        components: {
            vSelect
        },
        props: {
            data: {
                type: Object
            }
        },
        data() {
            return {
                errors: {
                    campo: "Este campo es requerido."
                },
                bol: "as",
                image: "images/medicamentos/default.png",
                image1: null,
                name: null,
                status: {
                    label: 'Disponible',
                    value: 1
                },
                regulated: {
                    label: 'No',
                    value: 0
                },
                observations: null,
                precentation: null,
                description: null,
                activado: false,
                quantity: null,
                price: null,
                cost: null,
                message: "Error en el servidor, Intente más tarde.",
                laboratory: null,
                warehouse: 'NOVEMED',
                category: [{
                    label: "General",
                    value: 10
                }],
                base64textString: "",
                categorias: [],
                laboratorios: [],
                presentaciones: [],
                Resid: null
            };
        },
        methods: {
            getPre() {
                let token = localStorage.getItem("tu");
                let idu = localStorage.getItem("ui");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getPres",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        this.presentaciones = [];
                        Response.data.forEach(element => {
                            //if (element.user_id == idu) {
                            this.presentaciones.push({
                                label: element.name,
                                value: element.id
                            });
                            //}
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            getLab() {
                let token = localStorage.getItem("tu");
                let idu = localStorage.getItem("ui");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getLabs",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        this.laboratorios = [];
                        Response.data.forEach(element => {
                            //if (element.user_id == idu) {
                            this.laboratorios.push({
                                label: element.name,
                                value: element.id
                            });
                            //}
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            getCategories() {
                let token = localStorage.getItem("tu");
                let idu = localStorage.getItem("ui");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getCategories",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        Response.data.forEach(element => {
                            //if (element.user_id == idu) {
                            this.categorias.push({
                                label: element.name,
                                value: element.id
                            });
                            //}
                        });
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
            },
            cancel() {
                this.$router.push("/consola");
            },
            touched() {
                this.bol = "";
            },
            doSave() {
                this.openLoading();
                let token = localStorage.getItem("tu");
                let idu = localStorage.getItem("ui");
                let arrayFinal = [];
                this.category.forEach(element => {
                    arrayFinal.push(element.value);
                });
                let formData = new FormData();
                formData.append('name', this.name);
                formData.append('image', this.image1);
                formData.append('description', this.description);
                formData.append('price', this.price);
                formData.append('cost', this.cost);
                formData.append('precentation', this.precentation.value);
                formData.append('status', this.status.value);
                formData.append('regulated', this.regulated.value);
                formData.append('observations', this.observations);
                formData.append('laboratory', this.laboratory.value);
                formData.append('warehouse', this.warehouse);
                formData.append('quantity', this.quantity);
                formData.append('user_id', idu);
                //console.log(formData);
                axios({
                        method: "post",
                        url: "http://127.0.0.1:8000/api/postProducts",
                        data: formData,
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "multipart/form-data"
                        }
                    })
                    .then(Response => {
                        this.Resid = Response.data.mess;
                        //console.log(Response);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        axios({
                                method: "post",
                                url: "http://127.0.0.1:8000/api/postProdCate",
                                data: JSON.stringify({
                                    categories: arrayFinal,
                                    product_id: this.Resid
                                }),
                                headers: {
                                    authorization: "Bearer " + token,
                                    "content-type": "application/json"
                                }
                            })
                            .then(Response => {
                                this.activeLoading = false;
                                this.$vs.loading.close();
                                this.$router.push("/consola");
                                this.$vs.notify({
                                    title: "Agregado",
                                    text: "Producto creado exitosamente.",
                                    color: "success",
                                    iconPack: 'feather',
                                    icon: 'icon-check'
                                });
                            })
                            .catch(err => {
                                this.activeLoading = false;
                                this.$vs.loading.close();
                                activado = true;
                                //console.log(err);
                            });
                    })
                    .catch(err => {
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        activado = true;
                        //console.log(err);
                    });
            },
            handleFileSelect(evt) {
                let files = evt.target.files;
                let file = files[0];
                this.image1 = file;
                let nombre = files[0].name;
                document.getElementById("info1").innerHTML = nombre;

                if (files && file) {
                    let reader = new FileReader();

                    reader.onload = this._handleReaderLoaded1.bind(this);

                    reader.readAsBinaryString(file);
                }
            },
            _handleReaderLoaded1(readerEvt) {
                let binaryString1 = readerEvt.target.result;
                this.base64textString = btoa(binaryString1);
                this.image = "data:image/png;base64," + this.base64textString;
            }
        },
        created() {
            this.getCategories();
            this.getLab();
            this.getPre();
        }
    };

</script>

<style lang="scss">
    .fileInput {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .subir {
        padding: 5px 10px;
        background: #003da5;
        color: #fff;
        border: 0px solid #fff;
        border-radius: 15px 15px 15px 15px;
    }

    .subir:hover {
        color: #fff;
        background: #003da5;
    }

    .vs-textarea {
        background-color: white;
    }

</style>
