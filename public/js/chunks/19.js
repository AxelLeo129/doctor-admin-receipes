(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/agregarProductos.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/agregarProductos.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-instantsearch */ "./node_modules/vue-instantsearch/dist/vue-instantsearch.esm.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/src/browser/builds/algoliasearchLite.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AisClearRefinements: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisClearRefinements"],
    AisHierarchicalMenu: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisHierarchicalMenu"],
    AisHits: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisHits"],
    AisInstantSearch: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisInstantSearch"],
    AisNumericMenu: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisNumericMenu"],
    AisPagination: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisPagination"],
    AisRangeInput: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisRangeInput"],
    AisRatingMenu: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisRatingMenu"],
    AisRefinementList: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisRefinementList"],
    AisSearchBox: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisSearchBox"],
    AisSortBy: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisSortBy"],
    AisStats: vue_instantsearch__WEBPACK_IMPORTED_MODULE_0__["AisStats"]
  },
  data: function data() {
    return {
      popupActive2: false,
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
      searchClient: algoliasearch_lite__WEBPACK_IMPORTED_MODULE_1___default()("latency", "6be0576ff61c053d5f9a3225e2a90f76"),
      // Filter Sidebar
      isFilterSidebarActive: true,
      clickNotClose: true,
      currentItemView: "item-grid-view",
      categorias: [],
      categoriasId: [],
      marcas: [],
      marcasId: [],
      algoliaCategories: ["hierarchicalCategories.lvl0", "hierarchicalCategories.lvl1", "hierarchicalCategories.lvl2", "hierarchicalCategories.lvl3"]
    };
  },
  computed: {
    toValue: function toValue() {
      return function (value, range) {
        return [value.min !== null ? value.min : range.min, value.max !== null ? value.max : range.max];
      };
    },
    searchMedicina: function searchMedicina() {
      var _this = this;

      return this.medicamentosList.filter(function (medicina) {
        if (_this.filterMar == 0) return medicina.name.toLowerCase().includes(_this.buscar.toLowerCase()) || medicina.precentacion.toLowerCase().includes(_this.buscar.toLowerCase()) || medicina.description.toLowerCase().includes(_this.buscar.toLowerCase());else if (_this.marcasId.includes(_this.filterMar)) return medicina.laboratory == _this.filterMar && (medicina.name.toLowerCase().includes(_this.buscar.toLowerCase()) || medicina.precentacion.toLowerCase().includes(_this.buscar.toLowerCase()) || medicina.description.toLowerCase().includes(_this.buscar.toLowerCase()));
      });
    },
    // GRID VIEW
    isInCart: function isInCart() {
      var _this2 = this;

      return function (itemId) {
        return _this2.$store.getters["eCommerce/isInCart"](itemId);
      };
    },
    isInWishList: function isInWishList() {
      var _this3 = this;

      return function (itemId) {
        return _this3.$store.getters["eCommerce/isInWishList"](itemId);
      };
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  watch: {
    windowWidth: function windowWidth() {
      this.setSidebarWidth();
    }
  },
  methods: {
    limpiar: function limpiar() {
      this.buscar = "";
      this.filterMar = 0;
    },
    getNum: function getNum() {
      var num = JSON.parse(localStorage.getItem("nuevaRecetaData"));

      if (num != null || num != "") {
        this.mediNum = num.medicines.length; //console.log(num.medicines);
      } else {
        this.mediNum = 0;
      }
    },
    agregarmF: function agregarmF() {
      this.nuevaRecetaData = JSON.parse(localStorage.getItem("nuevaRecetaData"));
      this.nuevaRecetaData.medicamentos.push({
        nombre: this.nombre,
        precentacion: this.precentacion,
        descripcion: this.uso,
        img: this.image
      });
      this.nuevaRecetaData.medicines.push(this.idMedicanto);
      this.nuevaRecetaData.dispensing.push(this.uso);
      localStorage.setItem("nuevaRecetaData", JSON.stringify(this.nuevaRecetaData));
      this.uso = null;
      this.activar = false;
      this.$router.push("/editarReceta");
    },
    agregarM: function agregarM() {
      this.mediNum = this.mediNum + 1;
      this.nuevaRecetaData = JSON.parse(localStorage.getItem("nuevaRecetaData"));
      this.nuevaRecetaData.medicamentos.push({
        nombre: this.nombre,
        precentacion: this.precentacion,
        descripcion: this.uso,
        img: this.image
      });
      this.nuevaRecetaData.medicines.push(this.idMedicanto);
      this.nuevaRecetaData.dispensing.push(this.uso);
      localStorage.setItem("nuevaRecetaData", JSON.stringify(this.nuevaRecetaData));
      this.uso = null;
      this.activar = false;
    },
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    setData: function setData(id, nombre, descripcion, precentacion) {
      this.idMedicanto = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precentacion = precentacion;
      this.image = id;
    },
    getMarcas: function getMarcas() {
      var _this4 = this;

      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_2___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getLabs",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        //console.log(Response.data);
        Response.data.forEach(function (element) {
          _this4.marcas.push({
            label: element.name,
            value: element.id
          });

          _this4.marcasId.push(element.id);
        }); //this.marcas = Response.data;
      }).catch(function (err) {
        console.log(err);
      });
    },
    getData: function getData() {
      var _this5 = this;

      this.openLoading();
      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_2___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getProducts1",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        //console.log(Response);
        Response.data.forEach(function (element) {
          element.quantity = parseInt(element.quantity);
          element.laboratory = parseInt(element.laboratory);

          if (element.quantity > 0) {
            _this5.numberData = _this5.numberData + 1;

            _this5.medicamentosList.push(element);
          }
        }); //console.log(this.medicamentosList);

        _this5.$vs.loading.close();

        _this5.activado = true;
      }).catch(function (err) {
        _this5.$vs.loading.close();

        _this5.activado = true;
        console.log(err);
      });
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 992) {
        this.isFilterSidebarActive = this.clickNotClose = false;
      } else {
        this.isFilterSidebarActive = this.clickNotClose = true;
      }
    },
    formSubmitted: function formSubmitted() {
      this.nuevaRecetaData = JSON.parse(localStorage.getItem("nuevaRecetaData")); //console.log(this.nuevaRecetaData.medicines);

      if (this.nuevaRecetaData.medicines.length > 0) {
        this.$router.push("/editarReceta");
      } else {
        this.$vs.notify({
          title: "Atención",
          text: "Debe de agregar medicamentos.",
          color: "warning",
          time: 4000,
          position: "top-center",
          iconPack: 'feather',
          icon: 'icon-alert-circle'
        });
      }
    },
    // GRID VIEW - ACTIONS
    toggleFilterSidebar: function toggleFilterSidebar() {
      if (this.clickNotClose) return;
      this.isFilterSidebarActive = !this.isFilterSidebarActive;
    },
    toggleItemInWishList: function toggleItemInWishList(item) {
      this.$store.dispatch("eCommerce/toggleItemInWishList", item);
    },
    additemInCart: function additemInCart(item) {
      this.$store.dispatch("eCommerce/additemInCart", item);
    },
    cartButtonClicked: function cartButtonClicked(item) {
      this.isInCart(item.objectID) ? this.$router.push("/apps/eCommerce/checkout").catch(function () {}) : this.additemInCart(item);
    }
  },
  created: function created() {
    this.registro = localStorage.getItem("regi");
    this.getNum();
    this.setSidebarWidth();
    this.getMarcas();
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/agregarProductos.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/agregarProductos.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeline {\n  list-style-type: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.li {\n  -webkit-transition: all 200ms ease-in;\n  transition: all 200ms ease-in;\n}\n.status {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  -webkit-transition: all 200ms ease-in;\n  transition: all 200ms ease-in;\n}\n[dir] .status {\n  padding: 0px 40px;\n  border-top: 2px solid #d6dce0;\n}\n.status h4 {\n  font-weight: 600;\n}\n.status:before {\n  content: \"\";\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: -15px;\n  -webkit-transition: all 200ms ease-in;\n  transition: all 200ms ease-in;\n}\n[dir] .status:before {\n  background-color: white;\n  border-radius: 25px;\n  border: 1px solid #ddd;\n}\n[dir=ltr] .status:before {\n  left: 42%;\n}\n[dir=rtl] .status:before {\n  right: 42%;\n}\n[dir] .li.complete .status {\n  border-top: 2px solid #003da5;\n}\n.li.complete .status:before {\n  -webkit-transition: all 200ms ease-in;\n  transition: all 200ms ease-in;\n}\n[dir] .li.complete .status:before {\n  background-color: #003da5;\n  border: none;\n}\n.li.complete .status h4 {\n  color: #003da5;\n}\n@media (min-device-width: 320px) and (max-device-width: 700px) {\n.timeline {\n    list-style-type: none;\n    display: block;\n}\n.li {\n    -webkit-transition: all 200ms ease-in;\n    transition: all 200ms ease-in;\n    display: -webkit-box;\n    display: flex;\n    width: inherit;\n}\n.timestamp {\n    width: 100px;\n}\n.status:before {\n    top: 30%;\n    -webkit-transition: all 200ms ease-in;\n    transition: all 200ms ease-in;\n}\n[dir=ltr] .status:before {\n    left: -8%;\n}\n[dir=rtl] .status:before {\n    right: -8%;\n}\n}\n[dir] .alineacion {\n  text-align: center;\n}\n.size {\n  height: 206px;\n  width: 266px;\n}\n@media screen and (max-width: 1024px) {\n.size {\n    height: 140px;\n    width: 150px;\n}\n}\n#algolia-instant-search-demo .algolia-header .algolia-filters-label {\n  width: calc(260px + 2.4rem);\n}\n#algolia-instant-search-demo #algolia-content-container .vs-sidebar {\n  position: relative;\n}\n[dir=ltr] #algolia-instant-search-demo #algolia-content-container .vs-sidebar {\n  float: left;\n}\n[dir=rtl] #algolia-instant-search-demo #algolia-content-container .vs-sidebar {\n  float: right;\n}\n[dir] #algolia-instant-search-demo .algolia-search-input-right-aligned-icon {\n  padding: 1rem 1.5rem;\n}\n#algolia-instant-search-demo .algolia-price-slider {\n  min-width: unset;\n}\n#algolia-instant-search-demo .item-view-primary-action-btn {\n  color: #2c2c2c !important;\n  min-width: 50%;\n}\n[dir] #algolia-instant-search-demo .item-view-primary-action-btn {\n  background-color: #f6f6f6;\n}\n#algolia-instant-search-demo .item-view-secondary-action-btn {\n  min-width: 50%;\n}\n[dir] .theme-dark #algolia-instant-search-demo #algolia-content-container .vs-sidebar {\n  background-color: #10163a;\n}\n@media (min-width: 992px) {\n[dir] .vs-sidebar-rounded .vs-sidebar {\n    border-radius: 0.5rem;\n}\n[dir] .vs-sidebar-rounded .vs-sidebar--items {\n    border-radius: 0.5rem;\n}\n}\n@media (max-width: 992px) {\n#algolia-content-container .vs-sidebar {\n    position: absolute !important;\n}\n[dir] #algolia-content-container .vs-sidebar {\n    float: none !important;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/agregarProductos.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/agregarProductos.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./agregarProductos.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/agregarProductos.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/agregarProductos.vue?vue&type=template&id=91a7952e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/agregarProductos.vue?vue&type=template&id=91a7952e& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.registro == 1
        ? _c("div", { attrs: { align: "center" } }, [_vm._m(0)])
        : _c("div", { attrs: { align: "center" } }, [_vm._m(1)]),
      _vm._v(" "),
      _c(
        "ais-instant-search",
        {
          attrs: {
            "search-client": _vm.searchClient,
            "index-name": "instant_search",
            id: "algolia-instant-search-demo"
          }
        },
        [
          _c("div", { staticClass: "algolia-header mb-4" }, [
            _c(
              "div",
              {
                staticClass:
                  "flex md:items-end items-center justify-between flex-wrap"
              },
              [
                _c("feather-icon", {
                  staticClass: "inline-flex lg:hidden cursor-pointer mr-4",
                  attrs: { icon: "MenuIcon" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.toggleFilterSidebar($event)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "lg:inline-flex hidden font-semibold algolia-filters-label"
                  },
                  [_vm._v("Filtros")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex justify-between items-end flex-grow" },
                  [
                    _c("ais-stats", [
                      _c("p", {
                        staticClass: "font-semibold md:block hidden",
                        domProps: {
                          textContent: _vm._s(
                            _vm.numberData + " resultados encontrados"
                          )
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { attrs: { align: "right" } },
                      [
                        _c("label", [_vm._v("Medicamentos agregados:")]),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "cursor-pointer mt-1 sm:mr-6 mr-2",
                          attrs: { icon: "FileTextIcon", badge: _vm.mediNum }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-button",
                      {
                        attrs: { disabled: _vm.mediNum == 0 },
                        on: { click: _vm.formSubmitted }
                      },
                      [_vm._v("Siguiente")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "vs-popup",
            {
              attrs: { title: "Medicamento Recetado", active: _vm.activar },
              on: {
                "update:active": function($event) {
                  _vm.activar = $event
                }
              }
            },
            [
              _c("h4", { staticClass: "mb-2" }, [
                _c("strong", { domProps: { textContent: _vm._s(_vm.nombre) } })
              ]),
              _vm._v(" "),
              _c("h5", {
                staticClass: "mb-2",
                domProps: { textContent: _vm._s(_vm.precentacion) }
              }),
              _vm._v(" "),
              _c("h6", {
                staticClass: "mb-2",
                domProps: { textContent: _vm._s(_vm.descripcion) }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-4" },
                [
                  _c("vs-textarea", {
                    staticClass: "vs-textarea",
                    attrs: { label: "Descripción de uso" },
                    model: {
                      value: _vm.uso,
                      callback: function($$v) {
                        _vm.uso = $$v
                      },
                      expression: "uso"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.uso == "",
                          expression: "uso == ''"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [
                      _vm._v(
                        "\n                    Este\n                    campo es requerido.\n                "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/2 mb-base" },
                  [
                    _c(
                      "vs-button",
                      {
                        attrs: {
                          color: "rgb(62, 201, 214)",
                          type: "filled",
                          disabled: _vm.uso == null || _vm.uso == ""
                        },
                        on: { click: _vm.agregarmF }
                      },
                      [_vm._v("Agregar & Finalizar")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/2 mb-base" },
                  [
                    _c(
                      "div",
                      { attrs: { align: "right" } },
                      [
                        _c(
                          "vs-button",
                          {
                            attrs: {
                              color: "primary",
                              type: "filled",
                              disabled: _vm.uso == null || _vm.uso == ""
                            },
                            on: { click: _vm.agregarM }
                          },
                          [
                            _vm._v(
                              "\n                            Agregar &\n                            Continuar\n                        "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "relative clearfix",
              attrs: { id: "algolia-content-container" }
            },
            [
              _c(
                "vs-sidebar",
                {
                  staticClass:
                    "items-no-padding vs-sidebar-rounded background-absolute",
                  attrs: {
                    parent: "#algolia-content-container",
                    "click-not-close": _vm.clickNotClose,
                    "hidden-background": _vm.clickNotClose
                  },
                  model: {
                    value: _vm.isFilterSidebarActive,
                    callback: function($$v) {
                      _vm.isFilterSidebarActive = $$v
                    },
                    expression: "isFilterSidebarActive"
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "p-6 filter-container" },
                    [
                      _c("h6", { staticClass: "font-bold mb-4" }, [
                        _vm._v("Marcas")
                      ]),
                      _vm._v(" "),
                      _c("ais-refinement-list", {
                        attrs: { attribute: "brand" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var items = ref.items
                              var isFromSearch = ref.isFromSearch
                              return _c("div", {}, [
                                _c(
                                  "ul",
                                  [
                                    isFromSearch && !items.length
                                      ? _c("li", [_vm._v("No results.")])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "li",
                                      {
                                        staticClass:
                                          "mb-2 flex cursor-pointer items-center justify-between",
                                        on: {
                                          click: function($event) {
                                            _vm.filterMar = 0
                                          }
                                        }
                                      },
                                      [_vm._v("Todos")]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.marcas, function(item) {
                                      return _c(
                                        "li",
                                        {
                                          key: item.value,
                                          staticClass:
                                            "mb-2 flex items-center cursor-pointer justify-between",
                                          on: {
                                            click: function($event) {
                                              _vm.filterMar = item.value
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(item.label))]
                                      )
                                    })
                                  ],
                                  2
                                )
                              ])
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c(
                        "ais-clear-refinements",
                        { staticClass: "flex justify-center" },
                        [
                          _c(
                            "vs-button",
                            {
                              staticClass: "w-full",
                              on: { click: _vm.limpiar }
                            },
                            [_vm._v("Limpiar Filtros")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { class: { "sidebar-spacer-with-margin": _vm.clickNotClose } },
                [
                  _c("ais-search-box", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var currentRefinement = ref.currentRefinement
                          var isSearchStalled = ref.isSearchStalled
                          var refine = ref.refine
                          return _c("div", {}, [
                            _c(
                              "div",
                              { staticClass: "relative mb-8" },
                              [
                                _c("vs-input", {
                                  staticClass:
                                    "w-full vs-input-shadow-drop vs-input-no-border d-theme-input-dark-bg",
                                  attrs: {
                                    placeholder: "Ingrese su búsqueda",
                                    size: "large"
                                  },
                                  on: {
                                    input: function($event) {
                                      return refine($event)
                                    },
                                    keyup: function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "esc",
                                          27,
                                          $event.key,
                                          ["Esc", "Escape"]
                                        )
                                      ) {
                                        return null
                                      }
                                      return refine("")
                                    }
                                  },
                                  model: {
                                    value: _vm.buscar,
                                    callback: function($$v) {
                                      _vm.buscar = $$v
                                    },
                                    expression: "buscar"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass: "mt-4 text-grey",
                                    attrs: { hidden: !isSearchStalled }
                                  },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "mr-2 align-middle",
                                      attrs: {
                                        icon: "ClockIcon",
                                        svgClasses: "w-4 h-4"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Cargando...")])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !currentRefinement,
                                        expression: "!currentRefinement"
                                      }
                                    ],
                                    staticClass:
                                      "absolute top-0 right-0 py-4 px-6",
                                    attrs: { slot: "submit-icon" },
                                    slot: "submit-icon"
                                  },
                                  [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "SearchIcon",
                                        svgClasses: "h-6 w-6"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: currentRefinement,
                                        expression: "currentRefinement"
                                      }
                                    ],
                                    staticClass:
                                      "absolute top-0 right-0 py-4 px-6",
                                    attrs: { slot: "reset-icon" },
                                    slot: "reset-icon"
                                  },
                                  [
                                    _c("feather-icon", {
                                      attrs: {
                                        icon: "XIcon",
                                        svgClasses: "h-6 w-6 cursor-pointer"
                                      },
                                      on: {
                                        click: function($event) {
                                          ;(_vm.buscar = ""), refine("")
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("ais-hits", [
                    _c(
                      "div",
                      [
                        _vm.currentItemView == "item-grid-view"
                          ? [
                              _c(
                                "div",
                                { staticClass: "vx-row" },
                                _vm._l(_vm.searchMedicina, function(item) {
                                  return _c(
                                    "div",
                                    {
                                      key: item.id,
                                      staticClass:
                                        "vx-col w-full sm:w-1/3 lg:w-1/3 mb-base"
                                    },
                                    [
                                      _c("vx-card", [
                                        _c(
                                          "div",
                                          {
                                            attrs: { slot: "no-body" },
                                            slot: "no-body"
                                          },
                                          [
                                            _c(
                                              "div",
                                              { attrs: { align: "center" } },
                                              [
                                                _c("img", {
                                                  staticClass:
                                                    "responsive pt-8 card-img-top h-48 w-48",
                                                  attrs: {
                                                    src:
                                                      "https://pharmazone.app/images/productos/" +
                                                      item.img_url,
                                                    alt: "content-img"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("h5", { staticClass: "mb-2" }, [
                                          _vm._v(_vm._s(item.name))
                                        ]),
                                        _vm._v(" "),
                                        _c("h6", { staticClass: "mb-2" }, [
                                          _vm._v(_vm._s(item.precentacion))
                                        ]),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "text-grey" }),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "text-grey" }, [
                                          _vm._v(_vm._s(item.description))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "flex justify-between flex-wrap"
                                          },
                                          [
                                            _c(
                                              "vs-button",
                                              {
                                                staticClass:
                                                  "mt-4 mr-2 alineacion",
                                                on: {
                                                  click: function($event) {
                                                    ;(_vm.activar = true),
                                                      _vm.setData(
                                                        item.id,
                                                        item.name,
                                                        item.description,
                                                        item.precentacion
                                                      )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                Agregar Medicamento"
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                }),
                                0
                              )
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "timeline mt-5", attrs: { id: "timeline" } },
      [
        _c("li", { staticClass: "li complete" }, [
          _c("div", { staticClass: "status" }, [
            _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 1")])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "li complete" }, [
          _c("div", { staticClass: "status" }, [
            _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 2")])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "li" }, [
          _c("div", { staticClass: "status" }, [
            _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 3")])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "li" }, [
          _c("div", { staticClass: "status" }, [
            _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 4")])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "timeline mt-5", attrs: { id: "timeline" } },
      [
        _c("li", { staticClass: "li complete" }, [
          _c("div", { staticClass: "status" }, [
            _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 1")])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "li complete" }, [
          _c("div", { staticClass: "status" }, [
            _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 2")])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "li" }, [
          _c("div", { staticClass: "status" }, [
            _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 3")])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/agregarProductos.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/pages/agregarProductos.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _agregarProductos_vue_vue_type_template_id_91a7952e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregarProductos.vue?vue&type=template&id=91a7952e& */ "./resources/js/src/views/pages/agregarProductos.vue?vue&type=template&id=91a7952e&");
/* harmony import */ var _agregarProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregarProductos.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/agregarProductos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _agregarProductos_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agregarProductos.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/agregarProductos.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _agregarProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _agregarProductos_vue_vue_type_template_id_91a7952e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _agregarProductos_vue_vue_type_template_id_91a7952e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/agregarProductos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/agregarProductos.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/agregarProductos.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./agregarProductos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/agregarProductos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/agregarProductos.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/agregarProductos.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarProductos_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./agregarProductos.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/agregarProductos.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarProductos_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarProductos_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarProductos_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarProductos_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarProductos_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/agregarProductos.vue?vue&type=template&id=91a7952e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/agregarProductos.vue?vue&type=template&id=91a7952e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarProductos_vue_vue_type_template_id_91a7952e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./agregarProductos.vue?vue&type=template&id=91a7952e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/agregarProductos.vue?vue&type=template&id=91a7952e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarProductos_vue_vue_type_template_id_91a7952e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarProductos_vue_vue_type_template_id_91a7952e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);