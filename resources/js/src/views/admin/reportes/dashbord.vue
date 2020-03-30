<template>
    <div>
        <div class="vx-row">
            <div v-if="iden == 1" class="vx-col w-full md:w-1/3 lg:w-1/3 mb-base">
                <vx-card @click="reporteIngresos" slot="no-body" class="text-center bg-light-gradient greet-user">
                    <feather-icon icon="ListIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow"
                        svgClasses="h-4 w-4"></feather-icon>
                    <h3 class="mb-6 text-black">Visitas de Usuarios</h3>
                </vx-card>
            </div>
            <div v-if="iden == '2' || iden == '3' || iden == '6' || iden == '5'" class="vx-col w-full md:w-1/3 lg:w-1/3 mb-base">
                <vx-card @click="reporteGeneral" slot="no-body" class="text-center bg-light-gradient greet-user">
                    <feather-icon icon="FileIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow"
                        svgClasses="h-4 w-4"></feather-icon>
                    <h3 class="mb-6 text-black">Ingresos</h3>
                </vx-card>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                iden: null
            }
        },
        created() {
            this.iden = localStorage.getItem('ru');
        },
        methods: {
            openLoading() {
                this.activeLoading = true;
                this.$vs.loading({
                    type: "default"
                });
            },
            reporteGeneral() {
                this.openLoading();
                let token = localStorage.getItem('tu');
                let idu = localStorage.getItem('ru');
                let query = "";
                if(idu == '2'){
                    query = "SELECT fecha_compra AS fecha, valor_comision_med AS valor FROM `transactions` WHERE id_medico = " + idu;
                }else if(idu == '6'){
                    query = "SELECT fecha_compra AS fecha, valor_comision_vistador AS valor FROM `transactions` WHERE id_visitador = " + idu;
                }else if(idu == '3'){
                    query = "SELECT fecha_compra AS fecha, valor_comi_callcenter AS valor FROM `transactions` WHERE id_callcenter = " + idu;
                }else if(idu == '5'){
                    query = "SELECT fecha_compra AS fecha, valor_comision_mensajero AS valor FROM `transactions` WHERE id_mensajero = " + idu;
                }
                axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8000/api/reporteIngresos/' + query,
                    responseType: 'arraybuffer',
                    headers: {
                        authorization: "Bearer " + token,
                        "content-type": "application/json"
                    }
                }).then(response => {
                    let blob = new Blob([response.data], {
                        type: 'application/pdf'
                    })
                    let link = document.createElement('a')
                    link.href = window.URL.createObjectURL(blob)
                    link.download = 'reporte.pdf'
                    //link.click()
                    this.activeLoading = false;
                    this.$vs.loading.close();
                    window.open(link.href);
                }).catch(err => {
                    this.activeLoading = false;
                    this.$vs.loading.close();
                    $vs.notify({
                        title: 'Error',
                        text: 'Error al realizar la petición',
                        color: 'danger',
                        iconPack: 'feather',
                        icon: 'icon-alert-circle'
                    });
                });
            },
            reporteIngresos() {
                this.openLoading();
                let token = localStorage.getItem('tu');
                axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8000/api/reporteGeneral',
                    responseType: 'arraybuffer',
                    headers: {
                        authorization: "Bearer " + token,
                        "content-type": "application/json"
                    }
                }).then(response => {
                    let blob = new Blob([response.data], {
                        type: 'application/pdf'
                    })
                    let link = document.createElement('a')
                    link.href = window.URL.createObjectURL(blob)
                    link.download = 'reporte.pdf'
                    //link.click()
                    this.activeLoading = false;
                    this.$vs.loading.close();
                    window.open(link.href);
                }).catch(err => {
                    this.activeLoading = false;
                    this.$vs.loading.close();
                    $vs.notify({
                        title: 'Error',
                        text: 'Error al realizar la petición',
                        color: 'danger',
                        iconPack: 'feather',
                        icon: 'icon-alert-circle'
                    });
                });
            },
        }
    }

</script>
