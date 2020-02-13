(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
=======
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
<<<<<<< HEAD
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

=======
      nombre: null,
      id: null,
      idu: null,
      activado: false,
      popupActive2: false
    };
  },
  methods: {
    getCategoria: function getCategoria() {
      var _this = this;

      this.openLoading();
      this.id = this.$route.params.categoryId;
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
<<<<<<< HEAD
        url: "http://127.0.0.1:8000/api/getProducts",
=======
        url: "http://127.0.0.1:8000/api/getCategory/" + this.id,
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
<<<<<<< HEAD
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
=======
        if (Response.data.length == 0) {
          _this.activeLoading = false;

          _this.$vs.loading.close();

          _this.$vs.notify({
            title: "Atención",
            text: "Categoría no encontrada.",
            color: "warning"
          });

          _this.$router.push("/listadoCategorias");
        } else {
          _this.nombre = Response.data[0].name;
          _this.idu = Response.data[0].user_id;
          _this.activeLoading = false;

          _this.$vs.loading.close();
        }
      }).catch(function (err) {
        _this.activeLoading = false;

        _this.$vs.loading.close();

        _this.$vs.notify({
          title: "Precaución",
          text: "Categoría no encontrada.",
          color: "warning"
        });

        _this.$router.push("/listadoCategorias");
      });
    },
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    onUpdate: function onUpdate() {
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
      var _this2 = this;

      this.popupActive2 = false;
      this.openLoading();
      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
<<<<<<< HEAD
        method: "get",
        url: "http://127.0.0.1:8000/api/deleteProduct/" + id,
=======
        method: "put",
        url: "http://127.0.0.1:8000/api/putCategory",
        data: JSON.stringify({
          id: this.id,
          name: this.nombre,
          user_id: this.idu
        }),
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this2.activeLoading = false;

        _this2.$vs.loading.close();

        _this2.$router.push("/listadoCategorias");

        _this2.$vs.notify({
<<<<<<< HEAD
          title: "Eliminado",
          text: "Producto eliminado exitosamente.",
=======
          title: "Actualizado",
          text: "Categoría actualizada exitosamente.",
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
          color: "success"
        });
      }).catch(function (err) {
        _this2.activeLoading = false;

        _this2.$vs.loading.close();

        activado = true; //console.log(err);
      });
    }
  },
  created: function created() {
<<<<<<< HEAD
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
=======
    this.getCategoria();
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162& ***!
  \************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=template&id=59f20a22&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=template&id=59f20a22& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "vs-popup",
        {
          attrs: { title: "Actualizar Categoría", active: _vm.popupActive2 },
          on: {
            "update:active": function($event) {
              _vm.popupActive2 = $event
            }
          }
        },
        [
          _c("p", [_vm._v("¿Está seguro de actualizar esta información?")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "filled" },
              on: { click: _vm.onUpdate }
            },
            [_vm._v("Actualizar")]
          ),
          _vm._v(" "),
          _c(
<<<<<<< HEAD
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
=======
            "vs-button",
            {
              attrs: { color: "danger", type: "filled" },
              on: {
                click: function($event) {
                  _vm.popupActive2 = false
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
                }
              }
            },
            [_vm._v("Cancelar")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-row" },
        [
<<<<<<< HEAD
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
=======
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
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col md:w-1/2 w-full" },
          [
            _c("vx-card", [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.popupActive2 = true
                    }
                  }
                },
                [
                  _c("div", { staticClass: "vx-row mb-6" }, [
                    _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
                      _c("span", [_vm._v("Nombre")])
                    ]),
                    _vm._v(" "),
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
                    _c(
                      "div",
                      { staticClass: "vx-col sm:w-2/3 w-full" },
                      [
<<<<<<< HEAD
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
=======
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
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
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
<<<<<<< HEAD
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
=======
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
                              color: "warning"
                            },
                            on: {
                              click: function($event) {
                                _vm.popupActive2 = true
                              }
                            }
                          },
                          [_vm._v("Guardar")]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            staticClass: "mb-2",
                            attrs: { color: "danger", type: "border" },
                            on: {
                              click: function($event) {
                                return _vm.getCategoria()
                              }
                            }
                          },
                          [_vm._v("Resetear")]
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col md:w-1/2 w-full" },
          [
            _c("vx-card", [
              _c("h3", [_vm._v("Edita la categoría del medicamentos ...")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nobis quo sunt ducimus minima unde labore dolores saepe qui doloribus numquam, accusantium ad adipisci voluptates velit necessitatibus vel totam dolor?"
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
                )
              ])
            ])
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/admin/ListadoProductos.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/admin/ListadoProductos.vue ***!
  \***********************************************************/
=======
/***/ "./resources/js/src/views/admin/categories/EditarCategoria.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/EditarCategoria.vue ***!
  \*********************************************************************/
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoProductos.vue?vue&type=template&id=5f53d162& */ "./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162&");
/* harmony import */ var _ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoProductos.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _EditarCategoria_vue_vue_type_template_id_59f20a22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditarCategoria.vue?vue&type=template&id=59f20a22& */ "./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=template&id=59f20a22&");
/* harmony import */ var _EditarCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditarCategoria.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _EditarCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditarCategoria_vue_vue_type_template_id_59f20a22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditarCategoria_vue_vue_type_template_id_59f20a22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/admin/ListadoProductos.vue"
=======
component.options.__file = "resources/js/src/views/admin/categories/EditarCategoria.vue"
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
=======
/***/ "./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoProductos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162& ***!
  \******************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditarCategoria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=template&id=59f20a22&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=template&id=59f20a22& ***!
  \****************************************************************************************************/
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoProductos.vue?vue&type=template&id=5f53d162& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCategoria_vue_vue_type_template_id_59f20a22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditarCategoria.vue?vue&type=template&id=59f20a22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=template&id=59f20a22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCategoria_vue_vue_type_template_id_59f20a22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCategoria_vue_vue_type_template_id_59f20a22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c



/***/ })

}]);