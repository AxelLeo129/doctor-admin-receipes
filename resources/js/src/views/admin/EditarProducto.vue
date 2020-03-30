<template>
    <div>
        <vs-popup title="Actualizar Datos" :active.sync="popupActive2">
            <p>¿Está seguro de actualizar esta información?</p>
            <br />
            <vs-button @click="doUpdate" color="primary" type="filled">Actualizar</vs-button>
            <vs-button @click="popupActive2=false" color="danger" type="filled">Cancelar</vs-button>
        </vs-popup>
        <form v-on:submit.prevent="doUpdate()" enctype="multipart/form-data">
            <div class="vx-row">
                <div class="vx-col w-full">
                    <div class="flex items-start flex-col sm:flex-row">
                        <!-- <img v-bind:src="imagen" class="mr-8 rounded h-24 w-24" /> -->
                        <img :src="imagen" alt="" class="mr-8 rounded w-24">
                        <!-- <vs-avatar :src="data.avatar" size="80px" class="mr-4" /> -->
                        <div>
                            <p class="text-lg font-medium mb-2 mt-4 sm:mt-0" v-text="name"></p>
                            <input accept="image/*" type="file" color="danger" id="image" name="image"
                                @change="handleFileSelect($event)" class="fileInput" />
                            <label for="image" class="subir">Cambiar Foto</label>
                            <div id="info1"></div>
                            <span></span>
                        </div>
                        <vs-alert color="danger" title="Error" :active.sync="activado" closable style="width: 70%"
                            icon-pack="feather" close-icon="icon-x">{{message}}</vs-alert>
                    </div>
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

                        <vs-input v-model="price" placeholder="Precio" />
                    </vx-input-group>
                    <span class="text-danger text-sm" v-show="price === ''">{{ errors.campo }}</span>

                    <label class="vs-input--label">Costo</label>
                    <vx-input-group class="mb-base">
                        <template slot="prepend">
                            <div class="prepend-text bg-primary">
                                <span>Q</span>
                            </div>
                        </template>

                        <vs-input v-model="cost" placeholder="Costo" />
                    </vx-input-group>
                    <span class="text-danger text-sm" v-show="cost === ''">{{ errors.campo }}</span>

                    <div class="mt-4">
                        <vs-textarea class="vs-textarea" label="Observaciones" v-model="observations" />
                    </div>

                </div>

                <div class="vx-col md:w-1/2 w-full">

                    <div class="mt-4">
                        <label class="vs-input--label">Categoría</label>
                        <v-select multiple :closeOnSelect="false" v-model="category" :options="categorias"
                            :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                    </div>
                    <span class="text-danger text-sm" v-show="category === ''">{{ errors.campo }}</span>

                    <div class="mt-4">
                        <div>
                            <label class="vs-input--label" style="color: gray;">Presentación</label>
                            <v-select v-model="precentation" :options="presentaciones" />
                            <span class="text-danger text-sm" v-show="precentation === ''">{{ errors.campo }}</span>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div>
                            <label class="vs-input--label" style="color: gray;">Laboratorio</label>
                            <v-select v-model="laboratory" :options="laboratorios" />
                            <span class="text-danger text-sm" v-show="laboratory === ''">{{ errors.campo }}</span>
                        </div>
                    </div>

                    <label class="vs-input--label">Proveedor</label>
                    <v-select class="w-full mt-4" :options="['NOVEMED']" :dir="$vs.rtl ? 'rtl' : 'ltr'"
                        v-model="warehouse" />
                    <span class="text-danger text-sm" v-show="warehouse === ''">{{ errors.campo }}</span>

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
                            <vs-button class="ml-auto mt-2" color="warning" @click="popupActive2 = true"
                                :disabled="cost == null || cost == '' || name == '' || name == null || quantity == '' || quantity == null || description == '' || precentation == '' || precentation == null || price == '' || laboratory == '' || laboratory == null || category == '' || category == null || warehouse == ''">
                                Guardar</vs-button>
                            <vs-button class="ml-4 mt-2" type="border" @click="getData" color="danger">Resetear
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
                imagen: "/images/medicamentos/demo.jpg",
                image1: null,
                name: null,
                cost: null,
                status: null,
                regulated: null,
                observations: null,
                imageName: null,
                precentation: [],
                precentation1: [],
                description: null,
                quantity: null,
                price: null,
                id: null,
                laboratory: [],
                laboratory1: [],
                warehouse: null,
                category: [],
                category1: null,
                message: "Error en el servidor, por favor inténtalo más tarde.",
                activado: false,
                base64textString: "",
                categorias: [],
                categories: [],
                laboratorios: [],
                presentaciones: [],
                popupActive2: false
            };
        },
        computed: {
            status_local: {
                get() {
                    return {
                        label: this.capitalize(this.data_local.status),
                        value: this.data_local.status
                    };
                },
                set(obj) {
                    this.data_local.status = obj.value;
                }
            },
            role_local: {
                get() {
                    return {
                        label: this.capitalize(this.data_local.role),
                        value: this.data_local.role
                    };
                },
                set(obj) {
                    this.data_local.role = obj.value;
                }
            },
            validateForm() {
                return !this.errors.any();
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getRoles(r) {
                let token = localStorage.getItem("tu");
                let ide = localStorage.getItem("ui");
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
                        this.laboratory = [];
                        //console.log(Response.data);
                        Response.data.forEach(element => {
                            if (element.user_id == ide) {
                                this.laboratorios.push({
                                    label: element.name,
                                    value: element.id
                                });
                                if (r == element.id) {
                                    this.laboratory.push({
                                        label: element.name,
                                        value: element.id
                                    });
                                    this.laboratory1 = element.id;
                                }
                            }
                        });
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            getPre(r) {
                let token = localStorage.getItem("tu");
                let ide = localStorage.getItem("ui");
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
                        this.precentation = [];
                        //console.log(Response.data);
                        Response.data.forEach(element => {
                            if (element.user_id == ide) {
                                this.presentaciones.push({
                                    label: element.name,
                                    value: element.id
                                });
                                if (r == element.id) {
                                    this.precentation.push({
                                        label: element.name,
                                        value: element.id
                                    });
                                    this.precentation1 = element.id;
                                }
                            }
                        });
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            getData() {
                this.openLoading();
                this.category = [];
                this.id = this.$route.params.productId;
                let token = localStorage.getItem("tu");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getProduct/" + this.id,
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        //console.log(Response.data);
                        if (Response.data.length == 0) {
                            axios({
                                    method: "get",
                                    url: "http://127.0.0.1:8000/api/getProduct1/" + this.id,
                                    headers: {
                                        authorization: "Bearer " + token,
                                        "content-type": "application/json"
                                    }
                                })
                                .then(Response => {
                                    //console.log(Response.data);
                                    if (Response.data.length == 0) {
                                        this.activeLoading = false;
                                        this.$vs.loading.close();
                                        this.$vs.notify({
                                            title: "Atención",
                                            text: "Producto no encontrado.",
                                            color: "warning",
                                            iconPack: 'feather',
                                            icon: 'icon-alert-circle'
                                        });
                                        this.$router.push("/consola");
                                    } else {
                                        this.name = Response.data[0].name;
                                        //this.imagen = "data:image/png;base64," + Response.data[0].image;
                                        this.imagen = 'https://pharmazone.app/images/productos/' + Response
                                            .data[0].img_url;
                                        this.imageName = Response.data[0].img_url;
                                        this.cost = Response.data[0].cost;
                                        this.base64textString = Response.data[0].image;
                                        this.quantity = Response.data[0].quantity;
                                        this.description = Response.data[0].description;
                                        this.status = Response.data[0].status;
                                        this.regulated = Response.data[0].regulated;
                                        let p = parseInt(Response.data[0].precentation);
                                        this.observations = Response.data[0].observations;
                                        this.getPre(p);
                                        this.price = Response.data[0].price;
                                        let l = parseInt(Response.data[0].laboratory);
                                        this.getRoles(l);
                                        this.warehouse = Response.data[0].warehouse;
                                        this.activeLoading = false;
                                        this.$vs.loading.close();
                                    }
                                })
                                .catch(err => {
                                    console.log(err);
                                    this.activeLoading = false;
                                    this.$vs.loading.close();
                                    this.$vs.notify({
                                        title: "Precaución",
                                        text: "Producto no encontrado.",
                                        color: "warning",
                                        iconPack: 'feather',
                                        icon: 'icon-alert-circle'
                                    });
                                    this.$router.push("/consola");
                                });
                        } else {
                            this.name = Response.data[0].name;
                            this.imagen = 'https://pharmazone.app/images/productos/' + Response.data[0].img_url;
                            this.imageName = Response.data[0].img_url;
                            this.base64textString = Response.data[0].image;
                            this.quantity = Response.data[0].quantity;
                            this.description = Response.data[0].description;
                            this.cost = Response.data[0].cost;
                            this.observations = Response.data[0].observations;
                            this.status = Response.data[0].status;
                            if (this.status == 0) {
                                this.status = {
                                    label: 'No Disponible',
                                    value: 0
                                };
                            } else if (this.status == 1) {
                                this.status = {
                                    label: 'Disponible',
                                    value: 1
                                };
                            } else if (this.status == 2) {
                                this.status = {
                                    label: 'Oferta',
                                    value: 2
                                };
                            } else {
                                this.status = {
                                    label: 'Agotado',
                                    value: 3
                                };
                            }
                            this.regulated = Response.data[0].regulated;
                            if (this.regulated == 0) {
                                this.regulated = {
                                    label: 'No',
                                    value: 0
                                }
                            } else {
                                this.regulated = {
                                    label: 'Si',
                                    value: 1
                                }
                            }
                            console.log(this.regulated);
                            let p = parseInt(Response.data[0].precentation);
                            this.getPre(p);
                            this.price = Response.data[0].price;
                            let l = parseInt(Response.data[0].laboratory);
                            this.getRoles(l);
                            this.category1 = Response.data[0].categories.split(",");
                            this.category1.forEach(element => {
                                element = parseInt(element);
                                this.categories.push(element);
                            });
                            this.warehouse = Response.data[0].warehouse;
                            this.getCategories();
                            this.activeLoading = false;
                            this.$vs.loading.close();
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        this.$vs.notify({
                            title: "Precaución",
                            text: "Producto no encontrado.",
                            color: "warning",
                            iconPack: 'feather',
                            icon: 'icon-alert-circle'
                        });
                        this.$router.push("/consola");
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
                            if (element.user_id == idu) {
                                this.categorias.push({
                                    label: element.name,
                                    value: element.id
                                });
                                if (this.categories.includes(element.id)) {
                                    this.category.push({
                                        label: element.name,
                                        value: element.id
                                    });
                                }
                            }
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            doUpdate() {
                this.popupActive2 = false;
                this.openLoading();
                let token = localStorage.getItem("tu");
                let idu = localStorage.getItem('ui');
                let arrayFinal = [];
                this.category.forEach(element => {
                    arrayFinal.push(element.value);
                });
                let p = this.precentation.value;
                let l = this.laboratory.value;
                if (p == undefined) {
                    p = this.precentation1;
                }
                if (l == undefined) {
                    l = this.laboratory1;
                }
                //console.log(this.id, this.name, this.imageName, this.image1, this.description, this.price, this.cost, p, l, this.warehouse, this.quantity, idu)
                let formData = new FormData();
                formData.append('id', this.id);
                formData.append('name', this.name);
                formData.append('image', this.image1);
                formData.append('imageName', this.imageName);
                formData.append('description', this.description);
                formData.append('price', this.price);
                formData.append('cost', this.cost);
                formData.append('precentation', p);
                formData.append('laboratory', l);
                formData.append('status', this.status.value);
                formData.append('regulated', this.regulated.value);
                formData.append('observations', this.observations);
                formData.append('warehouse', this.warehouse);
                formData.append('quantity', this.quantity);
                formData.append('user_id', idu)
                //console.log(formData)
                axios({
                        method: "post",
                        url: "http://127.0.0.1:8000/api/putProduct",
                        data: formData,
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "multipart/form-data"
                        }
                    })
                    .then(Response => {
                        console.log(Response);
                        axios({
                                method: "get",
                                url: "http://127.0.0.1:8000/api/deleteProdCate/" + this.id,
                                headers: {
                                    authorization: "Bearer " + token,
                                    "content-type": "application/json"
                                }
                            })
                            .then(Response => {
                                axios({
                                        method: "post",
                                        url: "http://127.0.0.1:8000/api/postProdCate",
                                        data: JSON.stringify({
                                            categories: arrayFinal,
                                            product_id: this.id
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
                                            title: "Actualizado",
                                            text: "Producto actualizado exitosamente.",
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
                                this.activado = true;
                                console.log(err);
                            });
                    })
                    .catch(err => {
                        this.activeLoading = false;
                        this.$vs.loading.close();
                        this.activado = true;
                        console.log(err);
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
                this.imagen = "data:image/png;base64," + this.base64textString;
            },
            openLoading() {
                //this.activeLoading = true;
                this.$vs.loading({
                    type: "default"
                });
            },
            capitalize(str) {
                return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
            },
            save_changes() {
                if (!this.validateForm) return;

                // Here will go your API call for updating data
                // You can get data in "this.data_local"
            },
            reset_data() {
                this.data_local = JSON.parse(JSON.stringify(this.data));
            },
            update_avatar() {
                // You can update avatar Here
                // For reference you can check dataList example
                // We haven't integrated it here, because data isn't saved in DB
            }
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
