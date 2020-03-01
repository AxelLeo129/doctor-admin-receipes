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
    <!-- <div align="center">
      <h4>Paso</h4>
      <h5>
        1 ...
        <strong>2</strong> ... 3 ... 4
      </h5>
    </div>-->
    <!-- <div align="right">
            <feather-icon icon="FileTextIcon" class="cursor-pointer mt-1 sm:mr-6 mr-2" :badge="mediNum" />
    </div>-->
    <div align="center" v-if="registro == 1">
      <ul class="timeline mt-5" id="timeline">
        <li class="li complete">
          <div class="status">
            <h4 class="mt-5">Paso 1</h4>
          </div>
        </li>
        <li class="li complete">
          <div class="status">
            <h4 class="mt-5">Paso 2</h4>
          </div>
        </li>
        <li class="li">
          <div class="status">
            <h4 class="mt-5">Paso 3</h4>
          </div>
        </li>
        <li class="li">
          <div class="status">
            <h4 class="mt-5">Paso 4</h4>
          </div>
        </li>
      </ul>
    </div>
    <div align="center" v-else>
      <ul class="timeline mt-5" id="timeline">
        <li class="li complete">
          <div class="status">
            <h4 class="mt-5">Paso 1</h4>
          </div>
        </li>
        <li class="li complete">
          <div class="status">
            <h4 class="mt-5">Paso 2</h4>
          </div>
        </li>
        <li class="li">
          <div class="status">
            <h4 class="mt-5">Paso 3</h4>
          </div>
        </li>
      </ul>
    </div>
    <ais-instant-search
      :search-client="searchClient"
      index-name="instant_search"
      id="algolia-instant-search-demo"
    >
      <!-- AIS CONFIG -->

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
            <div align="right">
              <label>Medicamentos agregados:</label>
              <feather-icon
                icon="FileTextIcon"
                class="cursor-pointer mt-1 sm:mr-6 mr-2"
                :badge="mediNum"
              />
            </div>
            <vs-button @click="formSubmitted" :disabled="mediNum == 0">Siguiente</vs-button>
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
              <div>
                <ul>
                  <li class="flex items-center cursor-pointer py-1" @click="filterCate = 0">Todos</li>
                  <li
                    v-for="(item, index) in categorias"
                    :key="index"
                    class="flex items-center cursor-pointer py-1"
                    @click="filterCate = item.id"
                  >
                    {{item.name}}
                    <!-- <vs-checkbox v-model="buscar1" :vs-value="item.id">{{item.name}}</vs-checkbox> -->
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
                    @click="filterMar = 0"
                    class="mb-2 flex cursor-pointer items-center justify-between"
                  >Todos</li>
                  <li
                    v-for="item in marcas"
                    :key="item.value"
                    class="mb-2 flex items-center cursor-pointer justify-between"
                    @click="filterMar = item.value"
                  >{{item.label}}</li>
                </ul>
              </div>
            </ais-refinement-list>
            <vs-divider />

            <ais-clear-refinements class="flex justify-center">
              <vs-button @click="limpiar" class="w-full">Limpiar Filtros</vs-button>
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
                  <feather-icon icon="ClockIcon" svgClasses="w-4 h-4" class="mr-2 align-middle" />
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
                    class="vx-col w-full sm:w-1/3 lg:w-1/3 mb-base"
                    v-for="item in searchMedicina"
                    :key="item.id"
                  >
                    <vx-card>
                      <div slot="no-body">
                        <div align="center">
                          <img
                            :src="'https://pharmazone.app/images/productos/' + item.img_url + '.png'"
                            alt="content-img"
                            class="responsive pt-8 card-img-top h-48 w-48"
                          />
                        </div>
                      </div>
                      <h5 class="mb-2">{{ item.name }}</h5>
                      <h6 class="mb-2">{{ item.precentacion }}</h6>
                      <p class="text-grey"></p>
                      <p class="text-grey">{{ item.description }}</p>
                      <vs-popup title="Medicamento Recetado" :active.sync="activar">
                        <h4 class="mb-2">
                          <strong v-text="nombre"></strong>
                        </h4>
                        <h5 class="mb-2" v-text="precentacion"></h5>
                        <h6 class="mb-2" v-text="descripcion"></h6>

                        <div class="mt-4">
                          <vs-textarea
                            class="vs-textarea"
                            label="Descripción de uso"
                            v-model="uso"
                          />
                          <span class="text-danger text-sm" v-show="uso == ''">
                            Este
                            campo es requerido.
                          </span>
                        </div>
                        <div class="vx-row">
                          <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                            <vs-button
                              color="rgb(62, 201, 214)"
                              @click="agregarmF"
                              type="filled"
                              :disabled="uso == null || uso == ''"
                            >Agregar & Finalizar</vs-button>
                          </div>
                          <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                            <div align="right">
                              <vs-button
                                color="primary"
                                type="filled"
                                @click="agregarM"
                                :disabled="uso == null || uso == ''"
                              >
                                Agregar &
                                Continuar
                              </vs-button>
                            </div>
                          </div>
                        </div>
                      </vs-popup>
                      <div class="flex justify-between flex-wrap">
                        <vs-button
                          class="mt-4 mr-2 alineacion"
                          @click="activar=true, setData(item.id, item.name, item.description, item.precentacion)"
                        >Agregar Medicamento</vs-button>
                      </div>
                    </vx-card>
                  </div>
                </div>
                <!-- <div class="row">
                  <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base"></div>
                  <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
                    <div align="right">
                      <vs-button @click="formSubmitted" :disabled="mediNum == 0">Siguiente</vs-button>
                    </div>
                  </div>
                </div> -->
              </template>

              <!-- LIST VIEW -->
            </div>
          </ais-hits>
          <!-- ALGOLIA LOGO -->
          <!-- <img class="flex mt-4 mx-auto h-8" src="@assets/images/pages/eCommerce/Algolia-logo.png" alt="algolia-logo"> -->
        </div>
      </div>
    </ais-instant-search>
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
import {
  AisClearRefinements,
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
  },
  data() {
    return {
      registro: null,
      filterCate: 0,
      filterMar: 0,
      buscar1: [],
      mediNum: 0,
      buscar: "",
      image: "",
      activar: false,
      precentacion: "",
      nuevaRecetaData: null,
      idMedicanto: "",
      uso: null,
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
      categoriasId: [],
      marcas: [],
      marcasId: [],
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
      return this.medicamentosList.filter(medicina => {
        if (this.filterCate == 0 && this.filterMar == 0)
          return (
            medicina.name.toLowerCase().includes(this.buscar.toLowerCase()) ||
            medicina.precentacion
              .toLowerCase()
              .includes(this.buscar.toLowerCase()) ||
            medicina.description
              .toLowerCase()
              .includes(this.buscar.toLowerCase())
          );
        else if (
          this.categoriasId.includes(this.filterCate) &&
          this.filterMar == 0
        )
          return (
            medicina.categories.includes(this.filterCate) &&
            (medicina.name.toLowerCase().includes(this.buscar.toLowerCase()) ||
              medicina.precentacion
                .toLowerCase()
                .includes(this.buscar.toLowerCase()) ||
              medicina.description
                .toLowerCase()
                .includes(this.buscar.toLowerCase()))
          );
        else if (this.marcasId.includes(this.filterMar) && this.filterCate == 0)
          return (
            medicina.laboratory == this.filterMar &&
            (medicina.name.toLowerCase().includes(this.buscar.toLowerCase()) ||
              medicina.precentacion
                .toLowerCase()
                .includes(this.buscar.toLowerCase()) ||
              medicina.description
                .toLowerCase()
                .includes(this.buscar.toLowerCase()))
          );
        else if (
          this.marcasId.includes(this.filterMar) &&
          this.categoriasId.includes(this.filterCate)
        )
          return (
            medicina.laboratory == this.filterMar &&
            medicina.categories.includes(this.filterCate) &&
            (medicina.name.toLowerCase().includes(this.buscar.toLowerCase()) ||
              medicina.precentacion
                .toLowerCase()
                .includes(this.buscar.toLowerCase()) ||
              medicina.description
                .toLowerCase()
                .includes(this.buscar.toLowerCase()))
          );
      });
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
    limpiar() {
      this.buscar = "";
      this.filterCate = 0;
      this.filterCate = 0;
    },
    getNum() {
      let num = JSON.parse(localStorage.getItem("nuevaRecetaData"));
      if (num != null || num != "") {
        this.mediNum = num.medicines.length;
        //console.log(num.medicines);
      } else {
        this.mediNum = 0;
      }
    },
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

      this.nuevaRecetaData.dispensing.push(this.uso);

      localStorage.setItem(
        "nuevaRecetaData",
        JSON.stringify(this.nuevaRecetaData)
      );
      this.uso = null;
      this.$router.push("/editarReceta");
    },
    agregarM() {
      this.mediNum = this.mediNum + 1;
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

      this.nuevaRecetaData.dispensing.push(this.uso);

      localStorage.setItem(
        "nuevaRecetaData",
        JSON.stringify(this.nuevaRecetaData)
      );
      this.uso = null;
      this.activar = false;
    },
    openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    setData(id, nombre, descripcion, precentacion) {
      this.idMedicanto = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precentacion = precentacion;
      this.image = id;
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
          //console.log(Response.data);
          this.categorias = Response.data;
          Response.data.forEach(element => {
            this.categoriasId.push(element.id);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    getMarcas() {
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getLabs",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          //console.log(Response.data);
          Response.data.forEach(element => {
            this.marcas.push({
              label: element.name,
              value: element.id
            });
            this.marcasId.push(element.id);
          });
          //this.marcas = Response.data;
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
        url: "http://127.0.0.1:8000/api/getProducts1",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          Response.data.forEach(element => {
            element.quantity = parseInt(element.quantity);
            element.laboratory = parseInt(element.laboratory);
            let arrayc = [];
            arrayc = element.categories.split(",");
            element.categories = [];
            arrayc.forEach(e => {
              element.categories.push(parseInt(e));
            });
            if (element.quantity > 0) {
              this.numberData = this.numberData + 1;
              this.medicamentosList.push(element);
            }
          });
          //console.log(this.medicamentosList);
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
    this.registro = localStorage.getItem("regi");
    this.getNum();
    this.setSidebarWidth();
    this.getCategorias();
    this.getMarcas();
    this.getData();
  }
};
</script>


<style lang="scss">
.timeline {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.li {
  transition: all 200ms ease-in;
}

.status {
  padding: 0px 40px;
  display: flex;
  justify-content: center;
  border-top: 2px solid #d6dce0;
  position: relative;
  transition: all 200ms ease-in;

  h4 {
    font-weight: 600;
  }

  &:before {
    content: "";
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 25px;
    border: 1px solid #ddd;
    position: absolute;
    top: -15px;
    left: 42%;
    transition: all 200ms ease-in;
  }
}

.li.complete {
  .status {
    border-top: 2px solid #003da5;

    &:before {
      background-color: #003da5;
      border: none;
      transition: all 200ms ease-in;
    }

    h4 {
      color: #003da5;
    }
  }
}

@media (min-device-width: 320px) and (max-device-width: 700px) {
  .timeline {
    list-style-type: none;
    display: block;
  }

  .li {
    transition: all 200ms ease-in;
    display: flex;
    width: inherit;
  }

  .timestamp {
    width: 100px;
  }

  .status {
    &:before {
      left: -8%;
      top: 30%;
      transition: all 200ms ease-in;
    }
  }
}

.alineacion {
  text-align: center;
}

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
