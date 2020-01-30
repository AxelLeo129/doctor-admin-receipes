(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      popupActive3: false,
      medicamentos: [],
      buscar: ""
    };
  },
  methods: {
    edit: function edit(id) {
      this.$router.push("/editarProducto/" + id);
    },
    getData: function getData() {
      var _this = this;

      var token = localStorage.getItem("tu");
      var id = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getProducts",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        Response.data.forEach(function (element) {
          if (element.user_id == id) {
            _this.medicamentos.push(element);
          }
        });
      }).catch(function (err) {
        console.log(err);
      });
    },
    deleteProduct: function deleteProduct(id) {
      var _this2 = this;

      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/deleteProduct/" + id,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this2.getData();

        _this2.popupActive3 = false;

        _this2.$vs.notify({
          title: "Eliminado",
          text: "Producto eliminado exitosamente.",
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
    searchPacientes: function searchPacientes() {
      var result = this.medicamentos;

      if (!this.buscar) {
        return result;
      }

      var texto = this.buscar.toLowerCase();

      var filter = function filter(event) {
        return event.name.toLowerCase().includes(texto) || event.laboratory.toLowerCase().includes(texto) || event.precentation.toLowerCase().includes(texto) || event.quantity.toLowerCase().includes(texto);
      };

      return result.filter(filter);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162& ***!
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
  return _c("div", [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full" },
        [
          _c(
            "vx-input-group",
            { staticClass: "mb-base" },
            [
              _c("vs-input", {
                attrs: {
                  placeholder: "Nombre / Laboratorio / Precentación / Cantidad"
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
              _c("template", { slot: "append" }, [
                _c("div", { staticClass: "append-text bg-primary" }, [
                  _c("span", [_c("vs-icon", { attrs: { icon: "search" } })], 1)
                ])
              ])
            ],
            2
          )
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
        { staticClass: "vx-col w-full" },
        [
          _c("vx-card", { attrs: { title: "Top más vendidos" } }, [
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
                  {
                    staticClass: "table-dark-inverted",
                    attrs: { data: _vm.dispatchedOrders }
                  },
                  [
                    _c(
                      "template",
                      { slot: "thead" },
                      [
                        _c("vs-th", [_vm._v("NUMERO.")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("IMAGEN")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("NOMBRE")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("LABORATORIO")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("PRECENTACION")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("CANTIDAD")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("ACCIONES")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.searchPacientes, function(item, index) {
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
                            _c("ul", { staticClass: "users-liked user-list" }, [
                              _c(
                                "li",
                                [
                                  _c(
                                    "vx-tooltip",
                                    { attrs: { position: "bottom" } },
                                    [
                                      _c("vs-avatar", {
                                        staticClass:
                                          "border-2 border-white border-solid -m-1",
                                        attrs: {
                                          size: "30px",
                                          src:
                                            "data:image/png;base64," +
                                            item.image
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("span", {
                              domProps: { textContent: _vm._s(item.name) }
                            })
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("span", {
                              domProps: { textContent: _vm._s(item.laboratory) }
                            })
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("span", {
                              domProps: {
                                textContent: _vm._s(item.precentation)
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("span", {
                              domProps: { textContent: _vm._s(item.quantity) }
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
                                title: "Eliminar Producto",
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
                                  "¿Está seguro de eliminar este producto?"
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
                                      return _vm.deleteProduct(item.id)
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

/***/ "./resources/js/src/views/admin/ListadoProductos.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/admin/ListadoProductos.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoProductos.vue?vue&type=template&id=5f53d162& */ "./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162&");
/* harmony import */ var _ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoProductos.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/ListadoProductos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoProductos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoProductos.vue?vue&type=template&id=5f53d162& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);