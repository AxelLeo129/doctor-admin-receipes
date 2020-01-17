<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-full">
                <div class="flex items-start flex-col sm:flex-row">
                    <img alt="hola" v-bind:src="image" class="mr-8 rounded h-24 w-24" />
                    <div>
                        <p class="text-lg font-medium mb-2 mt-4 sm:mt-0" v-text="name"></p>

                        <input accept="image/*" type="file" color="danger" id="image" name="image"
                            @change="handleFileSelect($event)" @click="touched" class="fileInput" />
                        <label for="image" class="subir">Agregar Foto</label>
                        <div id="info1"></div>
                        <span class="text-danger text-sm"
                            v-show="image === 'images/medicamentos/demo.jpg' && bol == ''">{{ errors.campo }}</span>
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
                    <vs-textarea class="vs-textarea" label="Descripción" v-model="description" />
                    <span class="text-danger text-sm" v-show="description === ''">{{ errors.campo }}</span>
                </div>

                <vs-input class="w-full mt-4" label="Precio" v-model="price" name="precio" placeholder="Q"
                    type="number" />
                <span class="text-danger text-sm" v-show="price === ''">{{ errors.campo }}</span>
                <div class="mt-4">
                    <label class="vs-input--label">Categoría</label>
                    <v-select v-model="category" :clearable="false" :options="categorias" name="category"
                        :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                </div>
                <span class="text-danger text-sm" v-show="category === ''">{{ errors.campo }}</span>
            </div>

            <div class="vx-col md:w-1/2 w-full">
                <vs-input class="w-full mt-4" label="Cantidad" v-model="quantity" name="cantidad" type="number" />
                <span class="text-danger text-sm" v-show="quantity === ''">{{ errors.campo }}</span>

                <div class="mt-4">
                    <vs-textarea class="vs-textarea" label="Precentación" v-model="precentation" />
                    <span class="text-danger text-sm" v-show="precentation === ''">{{ errors.campo }}</span>
                </div>

                <vs-input class="w-full mt-4" label="Laboratorio" v-model="laboratory" name="laboratorio" />
                <span class="text-danger text-sm" v-show="laboratory === ''">{{ errors.campo }}</span>

                <vs-input class="w-full mt-4" label="Bodega de Despacho" v-model="warehouse" name="bodega" />
                <span class="text-danger text-sm" v-show="warehouse === ''">{{ errors.campo }}</span>
            </div>

            <div class="vx-row">
                <div class="vx-col md:w-1/2 w-full">
                    <span></span>
                </div>
                <div class="vx-col w-full">
                    <div class="mt-8 flex flex-wrap items-center justify-end">
                        <vs-button class="ml-auto mt-2" color="success" @click="doSave"
                            :disabled="name == null || name == '' || image == 'images/medicamentos/demo.jpg' || bol == 'as' || quantity == null || quantity == '' || description == null || description == '' || precentation == null || precentation == '' || price == null || price == '' || laboratory == null || laboratory == '' || category == null || category == '' || warehouse == null || warehouse == ''">
                            Guardar</vs-button>
                        <vs-button class="ml-4 mt-2" type="border" color="danger" @click="cancel">Cancelar</vs-button>
                    </div>
                </div>
            </div>
        </div>
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
                image: "images/medicamentos/demo.jpg",
                name: null,
                precentation: null,
                description: null,
                activado: false,
                quantity: null,
                price: null,
                message: "Error en el servidor, Intente más tarde.",
                laboratory: null,
                warehouse: null,
                category: null,
                base64textString: "",
                categorias: [{
                        label: "Ginecología",
                        value: "ginecologia"
                    },
                    {
                        label: "Dermatología",
                        value: "dermatologia"
                    },
                    {
                        label: "Psicología",
                        value: "psicologia"
                    },
                    {
                        label: "Pediatría",
                        value: "pediatria"
                    },
                    {
                        label: "Otros",
                        value: "otros"
                    }
                ]
            };
        },
        methods: {
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
                axios({
                        method: "post",
                        url: "http://127.0.0.1:8000/api/postProducts",
                        data: JSON.stringify({
                            name: this.name,
                            image: this.base64textString,
                            description: this.description,
                            price: this.price,
                            precentation: this.precentation,
                            category: this.category.value,
                            laboratory: this.laboratory,
                            warehouse: this.warehouse,
                            quantity: this.quantity
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
                            color: "success"
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
        background: #7044ff;
        color: #fff;
        border: 0px solid #fff;
        border-radius: 15px 15px 15px 15px;
    }

    .subir:hover {
        color: #fff;
        background: #7e57ff;
    }

    .vs-textarea {
        background-color: white;
    }

</style>
