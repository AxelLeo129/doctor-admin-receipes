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
    <div align="center">
      <h4>Paso</h4>
      <h5>
        1 ...
        <strong>2</strong> ... 3 ... 4
      </h5>
    </div>
    <form-wizard
      color="rgba(var(--vs-primary), 1)"
      :title="null"
      :subtitle="null"
      finishButtonText="Siguiente"
      @on-complete="formSubmitted"
    >
      <tab-content title="Paso 2" icon="feather icon-home" class="mb-5">
        <ais-instant-search
          :search-client="searchClient"
          index-name="instant_search"
          id="algolia-instant-search-demo"
        >
          <!-- AIS CONFIG -->
          <ais-configure :hits-per-page.camel="9" />

          <div class="algolia-header mb-4">
            <div class="flex md:items-end items-center justify-between flex-wrap">
              <!-- TOGGLE SIDEBAR BUTTON -->
              <feather-icon
                class="inline-flex lg:hidden cursor-pointer mr-4"
                icon="MenuIcon"
                @click.stop="toggleFilterSidebar"
              />

              <p class="lg:inline-flex hidden font-semibold algolia-filters-label">Filtros</p>

              <div class="flex justify-between items-end flex-grow">
                <!-- Stats -->
                <ais-stats>
                  <p
                    class="font-semibold md:block hidden"
                    v-text="numberData + ' resultados encontrados'"
                  ></p>
                </ais-stats>
                <vs-button @click="formSubmitted">Siguiente</vs-button>
              </div>
            </div>
          </div>

          <vs-popup class="holamundo" title="Dosificación" :active.sync="popupActive">
            <h3>
              <strong v-text="nombre"></strong>
            </h3>
            <p v-text="descripcion"></p>
          </vs-popup>

          <div id="algolia-content-container" class="relative clearfix">
            <vs-sidebar
              class="items-no-padding vs-sidebar-rounded background-absolute"
              parent="#algolia-content-container"
              :click-not-close="clickNotClose"
              :hidden-background="clickNotClose"
              v-model="isFilterSidebarActive"
            >
              <div class="p-6 filter-container">
                <!-- CATEGORIES -->
                <h6 class="font-bold mb-4">Categorías</h6>
                <ais-hierarchical-menu :attributes="algoliaCategories">
                  <div
                    slot-scope="{
                              items,
                              refine,
                            }"
                  >
                    <ul>
                      <li
                        v-for="item in categorias"
                        :key="item.value"
                        class="flex items-center cursor-pointer py-1"
                        @click="refine(item.value)"
                      >
                        <feather-icon
                          icon="CircleIcon"
                          :svgClasses="[{ 'text-primary fill-current': item.isRefined}, 'h-5 w-5']"
                        />
                        <span class="ml-2" :class="{'text-primary': item.isRefined}">{{item.name}}</span>
                      </li>
                    </ul>
                  </div>
                </ais-hierarchical-menu>

                <vs-divider />

                <!-- Brands -->
                <h6 class="font-bold mb-4">Marcas</h6>
                <ais-refinement-list attribute="brand">
                  <div
                    slot-scope="{
                              items,
                              isFromSearch,
                              refine,
                            }"
                  >
                    <ul>
                      <li v-if="isFromSearch && !items.length">No results.</li>
                      <li
                        v-for="item in marcas"
                        :key="item.value"
                        class="mb-2 flex items-center justify-between"
                      >
                        <vs-checkbox
                          v-model="item.isRefined"
                          class="ml-0"
                          @click="refine(item.value)"
                        >{{ item.label }}</vs-checkbox>
                        <span>{{ item.count }}</span>
                      </li>
                    </ul>
                  </div>
                </ais-refinement-list>
                <vs-divider />

                <ais-clear-refinements class="flex justify-center">
                  <vs-button class="w-full">Limpiar Filtros</vs-button>
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
                      placeholder="Ingrese su búsqueda"
                      v-model="buscar"
                      @input="refine($event)"
                      @keyup.esc="refine('')"
                      size="large"
                    />

                    <!-- SEARCH LOADING -->
                    <p :hidden="!isSearchStalled" class="mt-4 text-grey">
                      <feather-icon
                        icon="ClockIcon"
                        svgClasses="w-4 h-4"
                        class="mr-2 align-middle"
                      />
                      <span>Cargando...</span>
                    </p>

                    <!-- SEARCH ICON -->
                    <div
                      slot="submit-icon"
                      class="absolute top-0 right-0 py-4 px-6"
                      v-show="!currentRefinement"
                    >
                      <feather-icon icon="SearchIcon" svgClasses="h-6 w-6" />
                    </div>

                    <!-- CLEAR INPUT ICON -->
                    <div
                      slot="reset-icon"
                      class="absolute top-0 right-0 py-4 px-6"
                      v-show="currentRefinement"
                    >
                      <feather-icon
                        icon="XIcon"
                        svgClasses="h-6 w-6 cursor-pointer"
                        @click="refine('')"
                      />
                    </div>
                  </div>
                </div>
              </ais-search-box>

              <!-- SEARCH RESULT -->
              <ais-hits>
                <div>
                  <!-- GRID VIEW -->
                  <template v-if="currentItemView == 'item-grid-view'">
                    <div class="vx-row">
                      <div
                        class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base"
                        v-for="item in searchMedicina"
                        :key="item.id"
                      >
                        <vx-card>
                          <div slot="no-body">
                            <div align="center">
                              <img
                                :src="'data:image/png;base64,' + item.image"
                                alt="content-img"
                                class="responsive card-img-top size"
                              />
                            </div>
                          </div>
                          <h5 class="mb-2">{{ item.precentation }}</h5>
                          <h6 class="mb-2">{{ item.name }}</h6>
                          <p class="text-grey"></p>
                          <p class="text-grey">{{ item.description }}</p>
                          <vs-popup
                            classContent="popup-example"
                            title="Dosificación"
                            :active.sync="activar"
                          >
                            <h4 class="mb-2">
                              <strong v-text="nombre"></strong>
                            </h4>
                            <h5 class="mb-2" v-text="descripcion"></h5>
                            <h6 class="mb-2" v-text="precentacion"></h6>

                            <div class="mt-4">
                              <vs-textarea
                                class="vs-textarea"
                                label="Descripción de uso"
                                v-model="uso"
                              />
                            </div>

                            <vs-button
                              color="primary"
                              type="filled"
                              @click="agregarM"
                            >Agregar & Continuar</vs-button>
                            <vs-button
                              color="rgb(62, 201, 214)"
                              @click="agregarmF"
                              type="filled"
                            >Agregar & Finalizar</vs-button>
                          </vs-popup>
                          <div class="flex justify-between flex-wrap">
                            <vs-button
                              class="mt-4 mr-2 shadow-lg"
                              type="gradient"
                              @click="activar=true, setData(item.id, item.name, item.description, item.precentation, item.image)"
                              gradient-color-secondary="#CE9FFC"
                            >Agregar Medicamento</vs-button>
                          </div>
                        </vx-card>
                      </div>
                    </div>
                  </template>

                  <!-- LIST VIEW -->
                </div>
              </ais-hits>
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
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
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
} from "vue-instantsearch";
import algoliasearch from "algoliasearch/lite";
import axios from "axios";

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
      buscar: "",
      image: "",
      activar: false,
      precentacion: "",
      nuevaRecetaData: null,
      idMedicanto: "",
      uso: "",
      nombre: "",
      descripcion: "",
      medicamentosList: [],
      popupActive: false,
      numberData: 0,
      searchClient: algoliasearch(
        "latency",
        "6be0576ff61c053d5f9a3225e2a90f76"
      ),
      // Filter Sidebar
      isFilterSidebarActive: true,
      clickNotClose: true,
      currentItemView: "item-grid-view",
      categorias: [],
      marcas: [
        {
          label: "Bayern",
          count: 1
        },
        {
          label: "Adenuric",
          count: 0
        },
        {
          label: "Badyket",
          count: 0
        },
        {
          label: "Carbimen",
          count: 0
        },
        {
          label: "Cromatonbic Ferro",
          count: 0
        }
      ],
      algoliaCategories: [
        "hierarchicalCategories.lvl0",
        "hierarchicalCategories.lvl1",
        "hierarchicalCategories.lvl2",
        "hierarchicalCategories.lvl3"
      ]
    };
  },
  computed: {
    toValue() {
      return (value, range) => [
        value.min !== null ? value.min : range.min,
        value.max !== null ? value.max : range.max
      ];
    },

    searchMedicina: function() {
      let result = this.medicamentosList;
      if (!this.buscar) {
        return result;
      }
      let texto = this.buscar.toLowerCase();
      const filter = event =>
        event.name.toLowerCase().includes(texto) ||
        event.precentation.toLowerCase().includes(texto) ||
        event.description.toLowerCase().includes(texto);

      return result.filter(filter);
    },
    // GRID VIEW
    isInCart() {
      return itemId => this.$store.getters["eCommerce/isInCart"](itemId);
    },
    isInWishList() {
      return itemId => this.$store.getters["eCommerce/isInWishList"](itemId);
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  watch: {
    windowWidth() {
      this.setSidebarWidth();
    }
  },
  methods: {
    agregarmF() {
      this.activar = false;
      this.nuevaRecetaData = JSON.parse(
        localStorage.getItem("nuevaRecetaData")
      );
      this.nuevaRecetaData.medicamentos.push({
        nombre: this.nombre,
        precentacion: this.precentacion,
        descripcion: this.uso,
        img: this.image
      });

      this.nuevaRecetaData.medicines.push(this.idMedicanto);

      localStorage.setItem(
        "nuevaRecetaData",
        JSON.stringify(this.nuevaRecetaData)
      );
      this.uso = "";
      this.$router.push("/editarReceta");
    },
    agregarM() {
      this.nuevaRecetaData = JSON.parse(
        localStorage.getItem("nuevaRecetaData")
      );
      this.nuevaRecetaData.medicamentos.push({
        nombre: this.nombre,
        precentacion: this.precentacion,
        descripcion: this.uso,
        img: this.image
      });

      this.nuevaRecetaData.medicines.push(this.idMedicanto);

      localStorage.setItem(
        "nuevaRecetaData",
        JSON.stringify(this.nuevaRecetaData)
      );
      this.uso = "";
      this.activar = false;
    },
    openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    setData(id, nombre, descripcion, precentacion, img) {
      this.idMedicanto = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precentacion = precentacion;
      this.image = img;
    },
    getCategorias() {
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getCategories",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          this.categorias = Response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getData() {
      this.openLoading();
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getProducts",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          Response.data.forEach(element => {
            element.quantity = parseInt(element.quantity);
            if (element.quantity > 0) {
              this.numberData = this.numberData + 1;
              this.medicamentosList.push(element);
            }
          });
          this.$vs.loading.close();
          this.activado = true;
        })
        .catch(err => {
          this.$vs.loading.close();
          this.activado = true;
          console.log(err);
        });
    },
    setSidebarWidth() {
      if (this.windowWidth < 992) {
        this.isFilterSidebarActive = this.clickNotClose = false;
      } else {
        this.isFilterSidebarActive = this.clickNotClose = true;
      }
    },
    formSubmitted() {
      this.nuevaRecetaData = JSON.parse(
        localStorage.getItem("nuevaRecetaData")
      );
      //console.log(this.nuevaRecetaData.medicines);
      if (this.nuevaRecetaData.medicines.length > 0) {
        this.$router.push("/editarReceta");
      } else {
        this.$vs.notify({
          title: "Atención",
          text: "Debe de agregar medicamentos.",
          color: "warning",
          time: 4000,
          position: "top-center"
        });
      }
    },

    // GRID VIEW - ACTIONS
    toggleFilterSidebar() {
      if (this.clickNotClose) return;
      this.isFilterSidebarActive = !this.isFilterSidebarActive;
    },
    toggleItemInWishList(item) {
      this.$store.dispatch("eCommerce/toggleItemInWishList", item);
    },
    additemInCart(item) {
      this.$store.dispatch("eCommerce/additemInCart", item);
    },
    cartButtonClicked(item) {
      this.isInCart(item.objectID)
        ? this.$router.push("/apps/eCommerce/checkout").catch(() => {})
        : this.additemInCart(item);
    }
  },
  created() {
    this.setSidebarWidth();
    this.getCategorias();
    this.getData();
  }
};
</script>


<style lang="scss">
.size {
  height: 206px;
  width: 266px;
}

@media screen and (max-width: 1024px) {
  .size {
    height: 140px;
    width: 150px;
  }
}
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
      border-radius: 0.5rem;
    }

    .vs-sidebar--items {
      border-radius: 0.5rem;
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
