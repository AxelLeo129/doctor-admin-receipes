(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/ListadoCategorias.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/categories/ListadoCategorias.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
=======
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
<<<<<<< HEAD
      popupActive3: false,
      categorias: [],
      buscar: ""
    };
  },
  methods: {
    edit: function edit(id) {
      this.$router.push("/editarCategoria/" + id);
    },
    getData: function getData() {
      var _this = this;

      this.openLoading();
      var token = localStorage.getItem("tu");
      var id = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getCategories",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        Response.data.forEach(function (element) {
          if (element.user_id == id) {
            _this.categorias.push(element);
          }
        }); //this.categorias = Response.data;

        _this.activeLoading = false;

        _this.$vs.loading.close();
      }).catch(function (err) {
        console.log(err);
      });
=======
      nombre: null,
      activado: false
    };
  },
  methods: {
    cancel: function cancel() {
      this.$router.push("/listadoCategorias");
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
    },
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
<<<<<<< HEAD
    deleteCategory: function deleteCategory(id) {
      var _this2 = this;

      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/deleteCategory/" + id,
=======
    onSubmit: function onSubmit() {
      var _this = this;

      this.openLoading();
      var token = localStorage.getItem("tu");
      var id = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "post",
        url: "http://127.0.0.1:8000/api/postCategory",
        data: JSON.stringify({
          name: this.nombre,
          user_id: id
        }),
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
<<<<<<< HEAD
        _this2.getData();

        _this2.popupActive3 = false;

        _this2.$vs.notify({
          title: "Eliminado",
          text: "Categoría eliminada exitosamente.",
          color: "success"
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  },
  created: function created() {
    this.getData();
  },
  computed: {
    searchCategorias: function searchCategorias() {
      var result = this.categorias;

      if (!this.buscar) {
        return result;
      }

      var texto = this.buscar.toLowerCase();

      var filter = function filter(event) {
        return event.name.toLowerCase().includes(texto);
      };

      return result.filter(filter);
=======
        _this.activeLoading = false;

        _this.$vs.loading.close();

        _this.$router.push("/listadoCategorias");

        _this.$vs.notify({
          title: "Agregado",
          text: "Categoría creada exitosamente.",
          color: "success"
        });
      }).catch(function (err) {
        _this.activeLoading = false;

        _this.$vs.loading.close();

        activado = true; //console.log(err);
      });
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/ListadoCategorias.vue?vue&type=template&id=d8cef7f6&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/categories/ListadoCategorias.vue?vue&type=template&id=d8cef7f6& ***!
  \************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=template&id=37f3e9a3&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=template&id=37f3e9a3& ***!
  \*********************************************************************************************************************************************************************************************************************************/
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
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
<<<<<<< HEAD
=======
    _c(
      "div",
      { staticClass: "vx-row" },
      [
        _c(
          "vs-alert",
          {
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
          [_vm._v("Error en el Servidor")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full" },
        [
<<<<<<< HEAD
          _c(
            "vx-input-group",
            { staticClass: "mb-base" },
            [
              _c("vs-input", {
                attrs: { placeholder: "Nombre" },
                model: {
                  value: _vm.buscar,
                  callback: function($$v) {
                    _vm.buscar = $$v
                  },
                  expression: "buscar"
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "append" }, [
                _c("div", { staticClass: "append-text bg-primary" }, [
                  _c("span", [_c("vs-icon", { attrs: { icon: "search" } })], 1)
                ])
              ])
            ],
            2
          )
=======
          _c("vx-card", [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.onSubmit()
                  }
                }
              },
              [
                _c("div", { staticClass: "vx-row mb-6" }, [
                  _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
                    _c("span", [_vm._v("Nombre")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-2/3 w-full" },
                    [
                      _c("vs-input", {
                        staticClass: "w-full",
                        model: {
                          value: _vm.nombre,
                          callback: function($$v) {
                            _vm.nombre = $$v
                          },
                          expression: "nombre"
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
                              value: _vm.nombre === "",
                              expression: "nombre === ''"
                            }
                          ],
                          staticClass: "text-danger text-sm"
                        },
                        [_vm._v("Este campo es requerido.")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-2/3 w-full ml-auto" },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "mr-3 mb-2",
                          attrs: {
                            disabled: _vm.nombre == null || _vm.nombre == "",
                            color: "success"
                          },
                          on: { click: _vm.onSubmit }
                        },
                        [_vm._v("Guardar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticClass: "mb-2",
                          attrs: { color: "danger", type: "border" },
                          on: { click: _vm.cancel }
                        },
                        [_vm._v("Cancel")]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ])
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "vx-col md:w-1/2 w-full" })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
<<<<<<< HEAD
        { staticClass: "vx-col w-full" },
        [
          _c("vx-card", { attrs: { title: "Categorias" } }, [
            _c(
              "div",
              {
                staticClass: "mt-4",
                attrs: { slot: "no-body" },
                slot: "no-body"
              },
              [
                _c(
                  "vs-table",
                  { staticClass: "table-dark-inverted" },
                  [
                    _c(
                      "template",
                      { slot: "thead" },
                      [
                        _c("vs-th", [_vm._v("NUMERO.")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("NONBRE")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("ACCIONES")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.searchCategorias, function(item, index) {
                      return _c(
                        "vs-tr",
                        { key: item.id },
                        [
                          _c("vs-td", [
                            _c("span", {
                              domProps: {
                                textContent: _vm._s("# " + (index + 1))
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("span", {
                              domProps: { textContent: _vm._s(item.name) }
                            })
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c(
                              "span",
                              [
                                _c(
                                  "vs-button",
                                  {
                                    attrs: {
                                      color: "warning",
                                      type: "filled",
                                      size: "small"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.edit(item.id)
                                      }
                                    }
                                  },
                                  [_vm._v("Editar")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-button",
                                  {
                                    attrs: {
                                      color: "danger",
                                      type: "filled",
                                      size: "small"
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.popupActive3 = true
                                      }
                                    }
                                  },
                                  [_vm._v("Eliminar")]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-popup",
                            {
                              attrs: {
                                title: "Eliminar Categoría",
                                active: _vm.popupActive3
                              },
                              on: {
                                "update:active": function($event) {
                                  _vm.popupActive3 = $event
                                }
                              }
                            },
                            [
                              _c("p", [
                                _vm._v(
                                  "¿Está seguro de eliminar esta categoría?"
                                )
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "vs-button",
                                {
                                  attrs: { color: "primary", type: "filled" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteCategory(item.id)
                                    }
                                  }
                                },
                                [_vm._v("Aceptar")]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-button",
                                {
                                  attrs: { color: "danger", type: "filled" },
                                  on: {
                                    click: function($event) {
                                      _vm.popupActive3 = false
                                    }
                                  }
                                },
                                [_vm._v("Cancelar")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    })
                  ],
                  2
                )
              ],
              1
            )
=======
        { staticClass: "vx-col md:w-1/2 w-full" },
        [
          _c("vx-card", [
            _c("h3", [_vm._v("Registra la categoría del medicamentos ...")]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nobis quo sunt ducimus minima unde labore dolores saepe qui doloribus numquam, accusantium ad adipisci voluptates velit necessitatibus vel totam dolor?"
              )
            ])
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/admin/categories/ListadoCategorias.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/ListadoCategorias.vue ***!
  \***********************************************************************/
=======
/***/ "./resources/js/src/views/admin/categories/NuevaCategoria.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/NuevaCategoria.vue ***!
  \********************************************************************/
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _ListadoCategorias_vue_vue_type_template_id_d8cef7f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoCategorias.vue?vue&type=template&id=d8cef7f6& */ "./resources/js/src/views/admin/categories/ListadoCategorias.vue?vue&type=template&id=d8cef7f6&");
/* harmony import */ var _ListadoCategorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoCategorias.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/categories/ListadoCategorias.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _NuevaCategoria_vue_vue_type_template_id_37f3e9a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NuevaCategoria.vue?vue&type=template&id=37f3e9a3& */ "./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=template&id=37f3e9a3&");
/* harmony import */ var _NuevaCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NuevaCategoria.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=script&lang=js&");
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _ListadoCategorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoCategorias_vue_vue_type_template_id_d8cef7f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoCategorias_vue_vue_type_template_id_d8cef7f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _NuevaCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NuevaCategoria_vue_vue_type_template_id_37f3e9a3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NuevaCategoria_vue_vue_type_template_id_37f3e9a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/admin/categories/ListadoCategorias.vue"
=======
component.options.__file = "resources/js/src/views/admin/categories/NuevaCategoria.vue"
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/admin/categories/ListadoCategorias.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/ListadoCategorias.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
=======
/***/ "./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCategorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCategorias.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/ListadoCategorias.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCategorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/categories/ListadoCategorias.vue?vue&type=template&id=d8cef7f6&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/ListadoCategorias.vue?vue&type=template&id=d8cef7f6& ***!
  \******************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevaCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NuevaCategoria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevaCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=template&id=37f3e9a3&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=template&id=37f3e9a3& ***!
  \***************************************************************************************************/
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCategorias_vue_vue_type_template_id_d8cef7f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCategorias.vue?vue&type=template&id=d8cef7f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/ListadoCategorias.vue?vue&type=template&id=d8cef7f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCategorias_vue_vue_type_template_id_d8cef7f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCategorias_vue_vue_type_template_id_d8cef7f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevaCategoria_vue_vue_type_template_id_37f3e9a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NuevaCategoria.vue?vue&type=template&id=37f3e9a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=template&id=37f3e9a3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevaCategoria_vue_vue_type_template_id_37f3e9a3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevaCategoria_vue_vue_type_template_id_37f3e9a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c



/***/ })

}]);