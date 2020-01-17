<!-- =========================================================================================
  File Name: ECommerceShop.vue
  Description: eCommerce Shop Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div>
        <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Siguiente"
            @on-complete="formSubmitted">
            <tab-content title="Paso 2" class="mb-5">
                <ais-instant-search :search-client="searchClient" index-name="instant_search"
                    id="algolia-instant-search-demo">

                    <!-- AIS CONFIG -->
                    <ais-configure :hits-per-page.camel="9" />

                    <div class="algolia-header mb-4">
                        <div class="flex md:items-end items-center justify-between flex-wrap">
                            <!-- TOGGLE SIDEBAR BUTTON -->
                            <feather-icon class="inline-flex lg:hidden cursor-pointer mr-4" icon="MenuIcon"
                                @click.stop="toggleFilterSidebar" />

                            <p class="lg:inline-flex hidden font-semibold algolia-filters-label">Filtros</p>

                            <div class="flex justify-between items-end flex-grow">
                                <!-- Stats -->
                                <ais-stats>
                                    <p slot-scope="{ hitsPerPage, nbPages, nbHits, query }"
                                        class="font-semibold md:block hidden">
                                        {{ nbHits }} resultados encontrados

                                    </p>
                                </ais-stats>
                                <vs-button @click="formSubmitted">Siguiente</vs-button>
                            </div>
                        </div>
                    </div>

                    <vs-popup class="holamundo" title="Dosificación" :active.sync="popupActive">
                        <h3><strong v-text="nombre"></strong></h3>
                        <p v-text="descripcion"></p>
                    </vs-popup>

                    <div id="algolia-content-container" class="relative clearfix">
                        <vs-sidebar class="items-no-padding vs-sidebar-rounded background-absolute"
                            parent="#algolia-content-container" :click-not-close="clickNotClose"
                            :hidden-background="clickNotClose" v-model="isFilterSidebarActive">

                            <div class="p-6 filter-container">

                                <!-- CATEGORIES -->
                                <h6 class="font-bold mb-4">Categorías</h6>
                                <ais-hierarchical-menu :attributes="algoliaCategories">
                                    <div slot-scope="{
                              items,
                              refine,
                            }">
                                        <ul>
                                            <li v-for="item in items" :key="item.value"
                                                class="flex items-center cursor-pointer py-1"
                                                @click="refine(item.value)">
                                                <feather-icon icon="CircleIcon"
                                                    :svgClasses="[{ 'text-primary fill-current': item.isRefined}, 'h-5 w-5']" />
                                                <span class="ml-2"
                                                    :class="{'text-primary': item.isRefined}">{{ item.label }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </ais-hierarchical-menu>

                                <vs-divider />

                                <!-- Brands -->
                                <h6 class="font-bold mb-4">Marcas</h6>
                                <ais-refinement-list attribute="brand">
                                    <div slot-scope="{
                              items,
                              isFromSearch,
                              refine,
                            }">
                                        <ul>
                                            <li v-if="isFromSearch && !items.length">No results.</li>
                                            <li v-for="item in items" :key="item.value"
                                                class="mb-2 flex items-center justify-between">
                                                <vs-checkbox v-model="item.isRefined" class="ml-0"
                                                    @click="refine(item.value)">{{ item.label }}</vs-checkbox>
                                                <span>{{ item.count }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </ais-refinement-list>
                                <vs-divider />

                                <ais-clear-refinements class="flex justify-center">
                                    <vs-button class="w-full" slot-scope="{ canRefine, refine, createURL }"
                                        @click.prevent="refine" :disabled="!canRefine">Limpiar Filtros</vs-button>
                                </ais-clear-refinements>
                            </div>
                        </vs-sidebar>

                        <!-- RIGHT COL -->
                        <div :class="{'sidebar-spacer-with-margin': clickNotClose}">

                            <!-- SEARCH BAR -->
                            <ais-search-box>
                                <div slot-scope="{ currentRefinement, isSearchStalled, refine }">
                                    <div class="relative mb-8">

                                        <!-- SEARCH INPUT -->

                                        <vs-input
                                            class="w-full vs-input-shadow-drop vs-input-no-border d-theme-input-dark-bg"
                                            placeholder="Ingrese su búsqueda" v-model="currentRefinement"
                                            @input="refine($event)" @keyup.esc="refine('')" size="large" />

                                        <!-- SEARCH LOADING -->
                                        <p :hidden="!isSearchStalled" class="mt-4 text-grey">
                                            <feather-icon icon="ClockIcon" svgClasses="w-4 h-4"
                                                class="mr-2 align-middle" />
                                            <span>Cargando...</span>
                                        </p>

                                        <!-- SEARCH ICON -->
                                        <div slot="submit-icon" class="absolute top-0 right-0 py-4 px-6"
                                            v-show="!currentRefinement">
                                            <feather-icon icon="SearchIcon" svgClasses="h-6 w-6" />
                                        </div>

                                        <!-- CLEAR INPUT ICON -->
                                        <div slot="reset-icon" class="absolute top-0 right-0 py-4 px-6"
                                            v-show="currentRefinement">
                                            <feather-icon icon="XIcon" svgClasses="h-6 w-6 cursor-pointer"
                                                @click="refine('')" />
                                        </div>
                                    </div>
                                </div>
                            </ais-search-box>

                            <!-- SEARCH RESULT -->
                            <ais-hits>
                                <div slot-scope="{ items }">

                                    <!-- GRID VIEW -->
                                    <template v-if="currentItemView == 'item-grid-view'">
                                        <div class="items-grid-view vx-row match-height">
                                            <div class="vx-col lg:w-1/3 sm:w-1/2 w-full"
                                                v-for="item in medicamentosList" :key="item.objectID">

                                                <item-grid-view :item="item">

                                                    <!-- SLOT: ACTION BUTTONS -->
                                                    <template slot="action-buttons">
                                                        <div class="flex flex-wrap">
                                                            <!-- SECONDARY BUTTON: ADD-TO/VIEW-IN CART -->
                                                            <div class="item-view-secondary-action-btn bg-primary p-3 flex flex-grow items-center justify-center text-white cursor-pointer"
                                                                @click="popupActive=true, nombre = item, descripcion = item.description">
                                                                <feather-icon icon="ShoppingBagIcon"
                                                                    svgClasses="h-4 w-4" />

                                                                <!-- <span class="text-sm font-semibold ml-2" v-if="isInCart(item.objectID)">VIEW IN CART</span> -->
                                                                <span class="text-sm font-semibold ml-2">Agregar
                                                                    Medicamento</span>
                                                            </div>
                                                        </div>
                                                    </template>
                                                </item-grid-view>

                                            </div>
                                        </div>
                                        <div class="vx-row">
                                            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base"
                                                v-for="item in medicamentosList" :key="item.id">
                                                <vx-card>
                                                    <div slot="no-body">
                                                        <img :src="item.img" alt="content-img"
                                                            class="responsive card-img-top">
                                                    </div>
                                                    <h5 class="mb-2">{{ item.name }}</h5>
                                                    <p class="text-grey"></p>
                                                    <p class="text-grey">{{ item.description }}</p>
                                                    <div class="flex justify-between flex-wrap">
                                                        <vs-button class="mt-4 mr-2 shadow-lg" type="gradient"
                                                            color="#7367F0" gradient-color-secondary="#CE9FFC">
                                                            Download</vs-button>
                                                        <vs-button class="mt-4" type="border" color="#b9b9b9">View
                                                            All</vs-button>
                                                    </div>
                                                </vx-card>
                                            </div>
                                        </div>
                                    </template>

                                    <!-- LIST VIEW -->

                                </div>
                            </ais-hits>

                            <!-- PAGINATION -->
                            <ais-pagination>
                                <div slot-scope="{
                                currentRefinement,
                                nbPages,
                                pages,
                                isFirstPage,
                                isLastPage,
                                refine,
                                createURL
                            }">

                                    <vs-pagination :total="nbPages" :max="7" :value="currentRefinement + 1"
                                        @input="(val) => { refine(val - 1) }" />
                                </div>
                            </ais-pagination>

                            <!-- ALGOLIA LOGO -->
                            <!-- <img class="flex mt-4 mx-auto h-8" src="@assets/images/pages/eCommerce/Algolia-logo.png" alt="algolia-logo"> -->
                        </div>
                    </div>
                </ais-instant-search>
            </tab-content>
        </form-wizard>
    </div>
</template>

<script>
    import {
        FormWizard,
        TabContent
    } from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import {
        AisClearRefinements,
        AisConfigure,
        AisHierarchicalMenu,
        AisHits,
        AisInstantSearch,
        AisNumericMenu,
        AisPagination,
        AisRangeInput,
        AisRatingMenu,
        AisRefinementList,
        AisSearchBox,
        AisSortBy,
        AisStats
    } from 'vue-instantsearch'
    import algoliasearch from 'algoliasearch/lite'

    export default {
        components: {
            ItemGridView: () => import("../../components/eCommerce/ItemGridView.vue"),
            ItemListView: () => import("../../components/eCommerce/ItemListView.vue"),
            AisClearRefinements,
            AisConfigure,
            AisHierarchicalMenu,
            AisHits,
            AisInstantSearch,
            AisNumericMenu,
            AisPagination,
            AisRangeInput,
            AisRatingMenu,
            AisRefinementList,
            AisSearchBox,
            AisSortBy,
            AisStats,
            FormWizard,
            TabContent
        },
        data() {
            return {
                nombre: "",
                descripcion: "",
                medicamentosList: [{
                        id: '1',
                        img: '../../../../app-assets/images/pages/eCommerce/Lunes50-Vista1.png',
                        precentacion: 'Caja 30 Tabletas',
                        name: 'Lunest 50 mg',
                        description: 'Inductor de sueño.'
                    },
                    {
                        id: '2',
                        img: '../../../app-assets/images/pages/eCommerce/Quetioxal100-Vista1.png',
                        precentacion: 'Caja 30 Tabletas',
                        name: 'Quetioxal 100 mg',
                        description: 'Tratamiento de esquizofrenia y trastorno bipolar.'
                    },
                    {
                        id: '3',
                        img: '',
                        precentacion: 'Jarabe Suspensión 120 ml',
                        name: 'RECOANTROL (Acido Valproico)',
                        description: 'Anticonvulsivante y estabilizador del ánimo en pacientes bipolares manicos.'
                    },
                    {
                        id: '4',
                        img: '../../../app-assets/images/pages/eCommerce/Bodegon-Neuro2019 copia.png',
                        precentacion: 'Combo',
                        name: 'Bodegon Neuro',
                        description: 'Combo para pacientes manicos.'
                    },
                    {
                        id: '5',
                        img: '../../../app-assets/images/pages/eCommerce/Bipark-Vista1.png',
                        precentacion: 'Caja 50 tabletas',
                        name: 'Bipark 2 mg',
                        description: 'Tratamiento de Parkinson y corrector de efectos extrapiramidales por antipsicóticos.'
                    },
                    {
                        id: '6',
                        img: '../../../app-assets/images/pages/eCommerce/Esidep10-Vista1.png',
                        precentacion: 'Caja 30 tabletas',
                        name: 'Esidep  10 mg',
                        description: 'Antidepresivo'
                    },
                    {
                        id: '7',
                        img: '../../../app-assets/images/pages/eCommerce/Establex25-Vista1.png',
                        precentacion: 'Caja 30 tabletas',
                        name: 'Establex  25 mg',
                        description: 'Anticonvulsivante y estabilizador del ánimo en pacientes bipolares depresivos.'
                    }
                ],
                popupActive: false,
                searchClient: algoliasearch(
                    'latency',
                    '6be0576ff61c053d5f9a3225e2a90f76'
                ),
                // Filter Sidebar
                isFilterSidebarActive: true,
                clickNotClose: true,
                currentItemView: 'item-grid-view',
                numericItems: [{
                        label: 'All'
                    },
                    {
                        label: '<= $10',
                        end: 10
                    },
                    {
                        label: '$10 - $100',
                        start: 10,
                        end: 100
                    },
                    {
                        label: '$100 - $500',
                        start: 100,
                        end: 500
                    },
                    {
                        label: '>= $500',
                        start: 500
                    },
                ],
                algoliaCategories: [
                    'hierarchicalCategories.lvl0',
                    'hierarchicalCategories.lvl1',
                    'hierarchicalCategories.lvl2',
                    'hierarchicalCategories.lvl3',
                ]
            }
        },
        computed: {
            toValue() {
                return (value, range) => [
                    value.min !== null ? value.min : range.min,
                    value.max !== null ? value.max : range.max,
                ]
            },

            // GRID VIEW
            isInCart() {
                return (itemId) => this.$store.getters['eCommerce/isInCart'](itemId)
            },
            isInWishList() {
                return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
            },
            windowWidth() {
                return this.$store.state.windowWidth
            }
        },
        watch: {
            windowWidth() {
                this.setSidebarWidth()
            }
        },
        methods: {
            setSidebarWidth() {
                if (this.windowWidth < 992) {
                    this.isFilterSidebarActive = this.clickNotClose = false
                } else {
                    this.isFilterSidebarActive = this.clickNotClose = true
                }
            },
            formSubmitted() {
                location.href = "/home";
            },

            // GRID VIEW - ACTIONS
            toggleFilterSidebar() {
                if (this.clickNotClose) return
                this.isFilterSidebarActive = !this.isFilterSidebarActive
            },
            toggleItemInWishList(item) {
                this.$store.dispatch('eCommerce/toggleItemInWishList', item)
            },
            additemInCart(item) {
                this.$store.dispatch('eCommerce/additemInCart', item)
            },
            cartButtonClicked(item) {
                this.isInCart(item.objectID) ? this.$router.push('/apps/eCommerce/checkout').catch(() => {}) : this
                    .additemInCart(item)
            }
        },
        created() {
            this.setSidebarWidth()
        }
    }

</script>


<style lang="scss">
    #algolia-instant-search-demo {
        .algolia-header {
            .algolia-filters-label {
                width: calc(260px + 2.4rem);
            }
        }

        #algolia-content-container {

            .vs-sidebar {
                position: relative;
                float: left;
            }
        }

        .algolia-search-input-right-aligned-icon {
            padding: 1rem 1.5rem;
        }

        .algolia-price-slider {
            min-width: unset;
        }

        .item-view-primary-action-btn {
            color: #2c2c2c !important;
            background-color: #f6f6f6;
            min-width: 50%;
        }

        .item-view-secondary-action-btn {
            min-width: 50%;
        }
    }

    .theme-dark {
        #algolia-instant-search-demo {
            #algolia-content-container {
                .vs-sidebar {
                    background-color: #10163a;
                }
            }
        }
    }

    @media (min-width: 992px) {
        .vs-sidebar-rounded {
            .vs-sidebar {
                border-radius: .5rem;
            }

            .vs-sidebar--items {
                border-radius: .5rem;
            }
        }
    }

    @media (max-width: 992px) {
        #algolia-content-container {
            .vs-sidebar {
                position: absolute !important;
                float: none !important;
            }
        }
    }

</style>
