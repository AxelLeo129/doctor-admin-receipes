<!-- =========================================================================================
    File Name: AgGridTable.vue
    Description: Ag Grid table
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="ag-grid-demo">
        <vx-card>

            <!-- TABLE ACTION ROW -->
            <div class="flex flex-wrap justify-between items-center">

                <!-- ITEMS PER PAGE -->
                <div class="mb-4 md:mb-0 mr-4 ag-grid-table-actions-left">
                    <vs-dropdown vs-trigger-click class="cursor-pointer">
                        <div
                            class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                            <span class="mr-2">{{ currentPage * paginationPageSize - (paginationPageSize - 1) }} -
                                {{ contacts.length - currentPage * paginationPageSize > 0 ? currentPage * paginationPageSize : contacts.length }}
                                of {{ contacts.length }}</span>
                            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                        </div>
                        <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
                        <vs-dropdown-menu>

                            <vs-dropdown-item @click="gridApi.paginationSetPageSize(20)">
                                <span>20</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="gridApi.paginationSetPageSize(50)">
                                <span>50</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="gridApi.paginationSetPageSize(100)">
                                <span>100</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="gridApi.paginationSetPageSize(150)">
                                <span>150</span>
                            </vs-dropdown-item>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                </div>

                <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
                <div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
                    <vs-input class="mb-4 md:mb-0 mr-4" v-model="searchQuery" @input="updateSearchQuery"
                        placeholder="Buscar..." />
                    <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Exportar Datos (Excel)</vs-button>
                </div>
            </div>
            <ag-grid-vue ref="agGridTable" :gridOptions="gridOptions" class="ag-theme-material w-100 my-4 ag-grid-table"
                :columnDefs="columnDefs" :defaultColDef="defaultColDef" :rowData="contacts" colResizeDefault="shift"
                :animateRows="true" :floatingFilter="true" :pagination="true" :paginationPageSize="paginationPageSize"
                :suppressPaginationPanel="true" :enableRtl="$vs.rtl">
            </ag-grid-vue>
            <vs-pagination :total="totalPages" :max="maxPageNumbers" v-model="currentPage" />

        </vx-card>
    </div>
</template>

<script>
    import {
        AgGridVue
    } from "ag-grid-vue";
    import axios from "axios";

    import '@sass/vuexy/extraComponents/agGridStyleOverride.scss'

    export default {
        components: {
            AgGridVue
        },
        data() {
            return {
                searchQuery: '',
                gridOptions: {},
                maxPageNumbers: 7,
                gridApi: null,
                defaultColDef: {
                    sortable: true,
                    editable: true,
                    resizable: true,
                    suppressMenu: true
                },
                columnDefs: [
                  {
                        headerName: 'No. Orden',
                        field: 'orden_id',
                        filter: true,
                        width: 130,
                  },
                  {
                        headerName: 'Nombre',
                        field: 'nombre_producto',
                        width: 190,
                        filter: true,
                        /*checkboxSelection: true,
                        headerCheckboxSelectionFilteredOnly: true,
                        headerCheckboxSelection: true,*/
                    },
                    {
                        headerName: 'Fecha Compra',
                        field: 'fecha_compra',
                        filter: true,
                        width: 160,
                    },
                    {
                        headerName: 'Precio',
                        field: 'precio_facturacion',
                        filter: true,
                        width: 150,
                    },
                    {
                        headerName: 'Ingreso Neto',
                        field: 'ingreso_neto',
                        filter: true,
                        width: 150,
                    },
                    {
                        headerName: 'Iva',
                        field: 'iva',
                        filter: true,
                        width: 130,
                    },
                    {
                        headerName: 'Comisión Médico',
                        field: 'valor_comision_med',
                        filter: true,
                        width: 180,
                    },
                    {
                        headerName: 'Comisión Visitador',
                        field: 'valor_comision_vistador',
                        filter: true,
                        width: 200,
                    },
                    {
                        headerName: 'Comisión Call-center',
                        field: 'valor_comi_callcenter',
                        filter: true,
                        width: 250,
                    },
                    {
                        headerName: 'Comisión Mensajero',
                        field: 'valor_comision_mensajero',
                        filter: true,
                        width: 200,
                    },
                ],
                contacts: [],
            }
        },
        watch: {
            '$store.state.windowWidth'(val) {
                if (val <= 576) {
                    this.maxPageNumbers = 4
                    this.gridOptions.columnApi.setColumnPinned('email', null)
                } else this.gridOptions.columnApi.setColumnPinned('email', 'left')
            }
        },
        computed: {
            paginationPageSize() {
                if (this.gridApi) return this.gridApi.paginationGetPageSize()
                else return 50
            },
            totalPages() {
                if (this.gridApi) return this.gridApi.paginationGetTotalPages()
                else return 0
            },
            currentPage: {
                get() {
                    if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1
                    else return 1
                },
                set(val) {
                    this.gridApi.paginationGoToPage(val - 1)
                }
            }
        },
        methods: {
            openLoading() {
                this.activeLoading = true;
                this.$vs.loading({
                    type: "default"
                });
            },
            updateSearchQuery(val) {
                this.gridApi.setQuickFilter(val)
            },
            getTrans() {
                this.openLoading();
                let token = localStorage.getItem("tu");
                axios({
                        method: "get",
                        url: "http://127.0.0.1:8000/api/getTransactions",
                        headers: {
                            authorization: "Bearer " + token,
                            "content-type": "application/json"
                        }
                    })
                    .then(Response => {
                        this.contacts = Response.data;
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    })
                    .catch(err => {
                        console.log(err);
                        this.activeLoading = false;
                        this.$vs.loading.close();
                    });
            },
            hola(){
              console.log('adsfad');
            }
        },
        mounted() {
            this.gridApi = this.gridOptions.api

            /* =================================================================
              NOTE:
              Header is not aligned properly in RTL version of agGrid table.
              However, we given fix to this issue. If you want more robust solution please contact them at gitHub
            ================================================================= */
            if (this.$vs.rtl) {
                const header = this.$refs.agGridTable.$el.querySelector(".ag-header-container")
                header.style.left = "-" + String(Number(header.style.transform.slice(11, -3)) + 9) + "px"
            }
        },
        created() {
          this.getTrans();
        }
    }

</script>
