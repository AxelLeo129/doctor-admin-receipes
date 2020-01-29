(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/EditarProducto.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/EditarProducto.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
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
<<<<<<< HEAD
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



=======
>>>>>>> 137ae18b04aa3c9e6e9468a4dff4ac1d1e854bd9


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    data: {
      type: Object
    }
  },
  data: function data() {
    return {
<<<<<<< HEAD
      errors: {
        campo: "Este campo es requerido."
      },
      imagen: "/images/medicamentos/demo.jpg",
      name: null,
      precentation: null,
      description: null,
      quantity: null,
      price: null,
      id: null,
      laboratory: null,
      warehouse: null,
      category: [6],
      category1: null,
      message: "Error en el servidor, por favor inténtalo más tarde.",
      activado: false,
      base64textString: "",
      categorias: []
=======
      buscar: "",
      image: "",
      activar: false,
      precentacion: "",
      nuevaRecetaData: null,
      uso: "",
      nombre: "",
      descripcion: "",
      medicamentosList: {},
      popupActive: false,
      searchClient: algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3___default()("latency", "6be0576ff61c053d5f9a3225e2a90f76"),
      // Filter Sidebar
      isFilterSidebarActive: true,
      clickNotClose: true,
      currentItemView: "item-grid-view",
      categorias: [{
        label: "Ginecología"
      }, {
        label: "Gastroenterología"
      }, {
        label: "Pediatría"
      }, {
        label: "Psicología"
      }, {
        label: "Reumatología"
      }],
      marcas: [{
        label: "Bayern",
        count: 1
      }, {
        label: "Adenuric",
        count: 0
      }, {
        label: "Badyket",
        count: 0
      }, {
        label: "Carbimen",
        count: 0
      }, {
        label: "Cromatonbic Ferro",
        count: 0
      }],
      numericItems: [{
        label: "All"
      }, {
        label: "<= $10",
        end: 10
      }, {
        label: "$10 - $100",
        start: 10,
        end: 100
      }, {
        label: "$100 - $500",
        start: 100,
        end: 500
      }, {
        label: ">= $500",
        start: 500
      }],
      algoliaCategories: ["hierarchicalCategories.lvl0", "hierarchicalCategories.lvl1", "hierarchicalCategories.lvl2", "hierarchicalCategories.lvl3"]
>>>>>>> 7661dadc47fcf80554e653a2eab56bdaff43e7d6
    };
  },
  computed: {
    status_local: {
      get: function get() {
        return {
          label: this.capitalize(this.data_local.status),
          value: this.data_local.status
        };
      },
      set: function set(obj) {
        this.data_local.status = obj.value;
      }
    },
    role_local: {
      get: function get() {
        return {
          label: this.capitalize(this.data_local.role),
          value: this.data_local.role
        };
      },
      set: function set(obj) {
        this.data_local.role = obj.value;
      }
    },
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  created: function created() {
    var _this = this;

    this.getCategories();
    this.openLoading();
    this.id = this.$route.params.productId;
    var token = localStorage.getItem("tu");
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "get",
      url: "http://127.0.0.1:8000/api/getProduct/" + this.id,
      headers: {
        authorization: "Bearer " + token,
        "content-type": "application/json"
      }
    }).then(function (Response) {
      if (Response.data.length == 0) {
        _this.activeLoading = false;

        _this.$vs.loading.close();

        _this.$vs.notify({
          title: "Atención",
          text: "Producto no encontrado.",
          color: "warning"
        });

        _this.$router.push("/consola");
      } else {
        _this.name = Response.data[0].name;
        _this.imagen = "data:image/png;base64," + Response.data[0].image;
        _this.base64textString = Response.data[0].image;
        _this.quantity = Response.data[0].quantity;
        _this.description = Response.data[0].description;
        _this.precentation = Response.data[0].precentation;
        _this.price = Response.data[0].price;
        _this.laboratory = Response.data[0].laboratory;
        _this.category1 = Response.data[0].categories.split(",");
        console.log(_this.categorias, _this.category1);

        _this.category1.forEach(function (element) {
          element = parseInt(element); //this.categories.forEach(element1 => {
          //   console.log(element1);
          //   if (element == element1.value) {
          //     console.log(element1);
          //     this.category.push({
          //       label: element1.label,
          //       value: element1.value
          //     });
          //   }
          //});
        });

        _this.warehouse = Response.data[0].warehouse;
        _this.activeLoading = false;

        _this.$vs.loading.close();
      }
    }).catch(function (err) {
      _this.activeLoading = false;

      _this.$vs.loading.close();

      _this.$vs.notify({
        title: "Precaución",
        text: "Producto no encontrado.",
        color: "warning"
      });

      _this.$router.push("/consola");
    });
  },
  methods: {
<<<<<<< HEAD
    agregarmF: function agregarmF() {
      this.nuevaRecetaData = JSON.parse(localStorage.getItem("nuevaRecetaData"));
      this.nuevaRecetaData.medicamentos.push({
        nombre: this.nombre,
        precentacion: this.precentacion,
        descripcion: this.uso,
        img: this.image
      });
      localStorage.setItem("nuevaRecetaData", JSON.stringify(this.nuevaRecetaData));
      this.uso = "";
      this.activar = false;
      this.$router.push("/editarReceta");
    },
    agregarM: function agregarM() {
      this.nuevaRecetaData = JSON.parse(localStorage.getItem("nuevaRecetaData"));
      this.nuevaRecetaData.medicamentos.push({
        nombre: this.nombre,
        precentacion: this.precentacion,
        descripcion: this.uso,
        img: this.image
      });
      localStorage.setItem("nuevaRecetaData", JSON.stringify(this.nuevaRecetaData));
      this.uso = "";
      this.activar = false;
    },
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
=======
    getCategories: function getCategories() {
      var _this2 = this;

      var token = localStorage.getItem("tu");
      var idu = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getCategories",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        Response.data.forEach(function (element) {
          if (element.user_id == idu) {
            _this2.categorias.push({
              label: element.name,
              value: element.id
            });
          }
        });
      }).catch(function (err) {
        console.log(err);
>>>>>>> 137ae18b04aa3c9e6e9468a4dff4ac1d1e854bd9
      });
    },
    doUpdate: function doUpdate() {
      var _this3 = this;

      this.openLoading();
      var token = localStorage.getItem("tu");

      if (this.category1 != this.category) {
        this.category1 = this.category.value;
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "put",
        url: "http://127.0.0.1:8000/api/putProduct",
        data: JSON.stringify({
          id: this.id,
          name: this.name,
          image: this.base64textString,
          description: this.description,
          price: this.price,
          precentation: this.precentation,
          category: this.category1,
          laboratory: this.laboratory,
          warehouse: this.warehouse,
          quantity: this.quantity
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this3.activeLoading = false;

        _this3.$vs.loading.close();

        _this3.$router.push("/consola");

        _this3.$vs.notify({
          title: "Actualizado",
          text: "Producto actualizado exitosamente.",
          color: "success"
        });
      }).catch(function (err) {
        _this3.activeLoading = false;

        _this3.$vs.loading.close();

        _this3.activado = true;
        console.log(err);
      });
    },
    handleFileSelect: function handleFileSelect(evt) {
      var files = evt.target.files;
      var file = files[0];
      var nombre = files[0].name;
      document.getElementById("info1").innerHTML = nombre;

      if (files && file) {
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded1.bind(this);
        reader.readAsBinaryString(file);
      }
    },
    _handleReaderLoaded1: function _handleReaderLoaded1(readerEvt) {
      var binaryString1 = readerEvt.target.result;
      this.base64textString = btoa(binaryString1);
      this.imagen = "data:image/png;base64," + this.base64textString;
    },
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    capitalize: function capitalize(str) {
      return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
    },
    save_changes: function save_changes() {
      if (!this.validateForm) return; // Here will go your API call for updating data
      // You can get data in "this.data_local"
    },
    reset_data: function reset_data() {
      this.data_local = JSON.parse(JSON.stringify(this.data));
    },
    update_avatar: function update_avatar() {// You can update avatar Here
      // For reference you can check dataList example
      // We haven't integrated it here, because data isn't saved in DB
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/EditarProducto.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/EditarProducto.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fileInput {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.subir {\n  color: #fff;\n}\n[dir] .subir {\n  padding: 5px 10px;\n  background: #7044ff;\n  border: 0px solid #fff;\n  border-radius: 15px 15px 15px 15px;\n}\n.subir:hover {\n  color: #fff;\n}\n[dir] .subir:hover {\n  background: #7e57ff;\n}\n[dir] .vs-textarea {\n  background-color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/EditarProducto.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/EditarProducto.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditarProducto.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/EditarProducto.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/EditarProducto.vue?vue&type=template&id=1e0a3ba5&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/EditarProducto.vue?vue&type=template&id=1e0a3ba5& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-full" }, [
        _c(
          "div",
          { staticClass: "flex items-start flex-col sm:flex-row" },
          [
            _c("img", {
              staticClass: "mr-8 rounded h-24 w-24",
              attrs: { src: _vm.imagen }
            }),
            _vm._v(" "),
            _c("div", [
              _c("p", {
                staticClass: "text-lg font-medium mb-2 mt-4 sm:mt-0",
                domProps: { textContent: _vm._s(_vm.name) }
              }),
              _vm._v(" "),
              _c("input", {
                staticClass: "fileInput",
                attrs: {
                  accept: "image/*",
                  type: "file",
                  color: "danger",
                  id: "image",
                  name: "image"
                },
                on: {
                  change: function($event) {
                    return _vm.handleFileSelect($event)
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { staticClass: "subir", attrs: { for: "image" } }, [
                _vm._v("Cambiar Foto")
              ]),
              _vm._v(" "),
              _c("div", { attrs: { id: "info1" } }),
              _vm._v(" "),
              _c("span")
            ]),
            _vm._v(" "),
            _c(
              "vs-alert",
              {
                staticStyle: { width: "70%" },
                attrs: {
                  color: "danger",
                  title: "Error",
                  active: _vm.activado,
                  closable: "",
                  "icon-pack": "feather",
                  "close-icon": "icon-x"
                },
                on: {
                  "update:active": function($event) {
                    _vm.activado = $event
                  }
                }
              },
              [_vm._v(_vm._s(_vm.message))]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full" },
        [
          _c("vs-input", {
            staticClass: "w-full mt-4",
            attrs: { label: "Nombre", name: "name" },
            model: {
              value: _vm.name,
              callback: function($$v) {
                _vm.name = $$v
              },
              expression: "name"
            }
          }),
          _vm._v(" "),
          _c(
<<<<<<< HEAD
            "tab-content",
            {
              staticClass: "mb-5",
              attrs: { title: "Paso 2", icon: "feather icon-home" }
            },
=======
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.name === "",
                  expression: "name === ''"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.campo))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mt-4" },
>>>>>>> 137ae18b04aa3c9e6e9468a4dff4ac1d1e854bd9
            [
              _c("vs-textarea", {
                staticClass: "vs-textarea",
                attrs: { label: "Descripción" },
                model: {
                  value: _vm.description,
                  callback: function($$v) {
                    _vm.description = $$v
                  },
                  expression: "description"
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
                      value: _vm.description === "",
                      expression: "description === ''"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.campo))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-input", {
            staticClass: "w-full mt-4",
            attrs: {
              label: "Precio",
              name: "precio",
              placeholder: "Q",
              type: "number"
            },
            model: {
              value: _vm.price,
              callback: function($$v) {
                _vm.price = $$v
              },
              expression: "price"
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
                  value: _vm.price === "",
                  expression: "price === ''"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.campo))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mt-4" },
            [
              _c("label", { staticClass: "vs-input--label" }, [
                _vm._v("Categoría")
              ]),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  multiple: "",
                  closeOnSelect: false,
                  options: _vm.categorias,
                  dir: _vm.$vs.rtl ? "rtl" : "ltr"
                },
                model: {
                  value: _vm.category,
                  callback: function($$v) {
                    _vm.category = $$v
                  },
                  expression: "category"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.category === "",
                  expression: "category === ''"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.campo))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full" },
        [
          _c("vs-input", {
            staticClass: "w-full mt-4",
            attrs: { label: "Cantidad", name: "cantidad", type: "number" },
            model: {
              value: _vm.quantity,
              callback: function($$v) {
                _vm.quantity = $$v
              },
              expression: "quantity"
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
                  value: _vm.quantity === "",
                  expression: "quantity === ''"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.campo))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mt-4" },
            [
              _c("vs-textarea", {
                staticClass: "vs-textarea",
                attrs: { label: "Precentación" },
                model: {
                  value: _vm.precentation,
                  callback: function($$v) {
                    _vm.precentation = $$v
                  },
                  expression: "precentation"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
<<<<<<< HEAD
                      name: "show",
                      rawName: "v-show",
                      value: _vm.precentation === "",
                      expression: "precentation === ''"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.campo))]
=======
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
                                _vm._v("Categorías")
                              ]),
                              _vm._v(" "),
                              _c("ais-hierarchical-menu", {
                                attrs: { attributes: _vm.algoliaCategories },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var items = ref.items
                                      var refine = ref.refine
                                      return _c("div", {}, [
                                        _c(
                                          "ul",
                                          _vm._l(_vm.categorias, function(
                                            item
                                          ) {
                                            return _c(
                                              "li",
                                              {
                                                key: item.value,
                                                staticClass:
                                                  "flex items-center cursor-pointer py-1",
                                                on: {
                                                  click: function($event) {
                                                    return refine(item.value)
                                                  }
                                                }
                                              },
                                              [
                                                _c("feather-icon", {
                                                  attrs: {
                                                    icon: "CircleIcon",
                                                    svgClasses: [
                                                      {
                                                        "text-primary fill-current":
                                                          item.isRefined
                                                      },
                                                      "h-5 w-5"
                                                    ]
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass: "ml-2",
                                                    class: {
                                                      "text-primary":
                                                        item.isRefined
                                                    }
                                                  },
                                                  [_vm._v(_vm._s(item.label))]
                                                )
                                              ],
                                              1
                                            )
                                          }),
                                          0
                                        )
                                      ])
                                    }
                                  }
                                ])
                              }),
                              _vm._v(" "),
                              _c("vs-divider"),
                              _vm._v(" "),
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
                                      var refine = ref.refine
                                      return _c("div", {}, [
                                        _c(
                                          "ul",
                                          [
                                            isFromSearch && !items.length
                                              ? _c("li", [
                                                  _vm._v("No results.")
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm._l(_vm.marcas, function(item) {
                                              return _c(
                                                "li",
                                                {
                                                  key: item.value,
                                                  staticClass:
                                                    "mb-2 flex items-center justify-between"
                                                },
                                                [
                                                  _c(
                                                    "vs-checkbox",
                                                    {
                                                      staticClass: "ml-0",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return refine(
                                                            item.value
                                                          )
                                                        }
                                                      },
                                                      model: {
                                                        value: item.isRefined,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            item,
                                                            "isRefined",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "item.isRefined"
                                                      }
                                                    },
                                                    [_vm._v(_vm._s(item.label))]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("span", [
                                                    _vm._v(_vm._s(item.count))
                                                  ])
                                                ],
                                                1
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
                              _c("ais-clear-refinements", {
                                staticClass: "flex justify-center",
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var canRefine = ref.canRefine
                                      var refine = ref.refine
                                      var createURL = ref.createURL
                                      return _c(
                                        "vs-button",
                                        {
                                          staticClass: "w-full",
                                          attrs: { disabled: !canRefine },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return refine($event)
                                            }
                                          }
                                        },
                                        [_vm._v("Limpiar Filtros")]
                                      )
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          class: {
                            "sidebar-spacer-with-margin": _vm.clickNotClose
                          }
                        },
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
                                                svgClasses:
                                                  "h-6 w-6 cursor-pointer"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return refine("")
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
                          _c("ais-hits", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var items = ref.items
                                  return _c(
                                    "div",
                                    {},
                                    [
                                      _vm.currentItemView == "item-grid-view"
                                        ? [
                                            _c(
                                              "div",
                                              { staticClass: "vx-row" },
                                              _vm._l(
                                                _vm.searchMedicina,
                                                function(item) {
                                                  return _c(
                                                    "div",
                                                    {
                                                      key: item.id,
                                                      staticClass:
                                                        "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base"
                                                    },
                                                    [
                                                      _c(
                                                        "vx-card",
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              attrs: {
                                                                slot: "no-body"
                                                              },
                                                              slot: "no-body"
                                                            },
                                                            [
                                                              _c("img", {
                                                                staticClass:
                                                                  "responsive card-img-top",
                                                                attrs: {
                                                                  src:
                                                                    "data:image/png;base64," +
                                                                    item.image,
                                                                  alt:
                                                                    "content-img"
                                                                }
                                                              })
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "h5",
                                                            {
                                                              staticClass:
                                                                "mb-2"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.precentation
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "h6",
                                                            {
                                                              staticClass:
                                                                "mb-2"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.name
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("p", {
                                                            staticClass:
                                                              "text-grey"
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "text-grey"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.description
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "vs-popup",
                                                            {
                                                              attrs: {
                                                                classContent:
                                                                  "popup-example",
                                                                title:
                                                                  "Dosificación",
                                                                active:
                                                                  _vm.activar
                                                              },
                                                              on: {
                                                                "update:active": function(
                                                                  $event
                                                                ) {
                                                                  _vm.activar = $event
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "h4",
                                                                {
                                                                  staticClass:
                                                                    "mb-2"
                                                                },
                                                                [
                                                                  _c("strong", {
                                                                    domProps: {
                                                                      textContent: _vm._s(
                                                                        _vm.nombre
                                                                      )
                                                                    }
                                                                  })
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("h5", {
                                                                staticClass:
                                                                  "mb-2",
                                                                domProps: {
                                                                  textContent: _vm._s(
                                                                    _vm.descripcion
                                                                  )
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c("h6", {
                                                                staticClass:
                                                                  "mb-2",
                                                                domProps: {
                                                                  textContent: _vm._s(
                                                                    _vm.precentacion
                                                                  )
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "mt-4"
                                                                },
                                                                [
                                                                  _c(
                                                                    "vs-textarea",
                                                                    {
                                                                      staticClass:
                                                                        "vs-textarea",
                                                                      attrs: {
                                                                        label:
                                                                          "Descripción de uso"
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm.uso,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.uso = $$v
                                                                        },
                                                                        expression:
                                                                          "uso"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "vs-button",
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      "primary",
                                                                    type:
                                                                      "filled"
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      _vm.agregarM
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Agregar & Continuar"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "vs-button",
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      "rgb(62, 201, 214)",
                                                                    type:
                                                                      "filled"
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      _vm.agregarmF
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Agregar & Finalizar"
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          ),
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
                                                                    "mt-4 mr-2 shadow-lg",
                                                                  attrs: {
                                                                    type:
                                                                      "gradient",
                                                                    "gradient-color-secondary":
                                                                      "#CE9FFC"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      ;(_vm.activar = true),
                                                                        _vm.setData(
                                                                          item.name,
                                                                          item.description,
                                                                          item.precentation,
                                                                          item.image
                                                                        )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Agregar Medicamento"
                                                                  )
                                                                ]
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
                                              ),
                                              0
                                            )
                                          ]
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c("ais-pagination", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var currentRefinement = ref.currentRefinement
                                  var nbPages = ref.nbPages
                                  var pages = ref.pages
                                  var isFirstPage = ref.isFirstPage
                                  var isLastPage = ref.isLastPage
                                  var refine = ref.refine
                                  var createURL = ref.createURL
                                  return _c(
                                    "div",
                                    {},
                                    [
                                      _c("vs-pagination", {
                                        attrs: {
                                          total: nbPages,
                                          max: 7,
                                          value: currentRefinement + 1
                                        },
                                        on: {
                                          input: function(val) {
                                            refine(val - 1)
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  )
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
>>>>>>> 7661dadc47fcf80554e653a2eab56bdaff43e7d6
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-input", {
            staticClass: "w-full mt-4",
            attrs: { label: "Laboratorio", name: "laboratorio" },
            model: {
              value: _vm.laboratory,
              callback: function($$v) {
                _vm.laboratory = $$v
              },
              expression: "laboratory"
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
                  value: _vm.laboratory === "",
                  expression: "laboratory === ''"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.campo))]
          ),
          _vm._v(" "),
          _c("vs-input", {
            staticClass: "w-full mt-4",
            attrs: { label: "Bodega de Despacho", name: "bodega" },
            model: {
              value: _vm.warehouse,
              callback: function($$v) {
                _vm.warehouse = $$v
              },
              expression: "warehouse"
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
                  value: _vm.warehouse === "",
                  expression: "warehouse === ''"
                }
              ],
              staticClass: "text-danger text-sm"
            },
            [_vm._v(_vm._s(_vm.errors.campo))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "vx-col w-full" }, [
          _c(
            "div",
            { staticClass: "mt-8 flex flex-wrap items-center justify-end" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "ml-auto mt-2",
                  attrs: {
                    color: "warning",
                    disabled:
                      _vm.name == "" ||
                      _vm.quantity == "" ||
                      _vm.description == "" ||
                      _vm.precentation == "" ||
                      _vm.price == "" ||
                      _vm.laboratory == "" ||
                      _vm.category == "" ||
                      _vm.warehouse == ""
                  },
                  on: { click: _vm.doUpdate }
                },
                [_vm._v("Guardar")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "ml-4 mt-2",
                  attrs: { type: "border", color: "danger" }
                },
                [_vm._v("Resetear")]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "vx-col md:w-1/2 w-full" }, [_c("span")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/admin/EditarProducto.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/admin/EditarProducto.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditarProducto_vue_vue_type_template_id_1e0a3ba5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditarProducto.vue?vue&type=template&id=1e0a3ba5& */ "./resources/js/src/views/admin/EditarProducto.vue?vue&type=template&id=1e0a3ba5&");
/* harmony import */ var _EditarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditarProducto.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/EditarProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditarProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditarProducto.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/admin/EditarProducto.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditarProducto_vue_vue_type_template_id_1e0a3ba5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditarProducto_vue_vue_type_template_id_1e0a3ba5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/EditarProducto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/EditarProducto.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/admin/EditarProducto.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditarProducto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/EditarProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/EditarProducto.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/admin/EditarProducto.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditarProducto.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/EditarProducto.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/admin/EditarProducto.vue?vue&type=template&id=1e0a3ba5&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/admin/EditarProducto.vue?vue&type=template&id=1e0a3ba5& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_template_id_1e0a3ba5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditarProducto.vue?vue&type=template&id=1e0a3ba5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/EditarProducto.vue?vue&type=template&id=1e0a3ba5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_template_id_1e0a3ba5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarProducto_vue_vue_type_template_id_1e0a3ba5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);