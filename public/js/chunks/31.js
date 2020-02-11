(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/visitador/dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/visitador/dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  methods: {
    getusers: function getusers() {
      var _this = this;

      this.users = [];
      var token = localStorage.getItem("tu");
      var id = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getCliente",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        Response.data.forEach(function (element) {
          _this.users.push(element);
        });
        console.log(_this.users);
      }).catch(function (err) {
        console.log(err);
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getDelivery",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        Response.data.forEach(function (element) {
          _this.deliveryP.push({
            label: element.name,
            value: element.id
          });
        });
        console.log(_this.deliveryP);
      }).catch(function (err) {
        console.log(err);
      });
    },
    setData: function setData(recipie) {
      this.recipie = recipie;
      console.log("Receta");
      console.log(this.recipie);
    },
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    inprogress: function inprogress(id_receta) {
      var _this2 = this;

      var token = localStorage.getItem("tu");
      var idu = localStorage.getItem("ui");

      if (this.select == null) {
        this.errors.push('Debe de seleccionar un mensajero');
        this.activeLoading = false;
        this.$vs.loading.close();
      } else {
        this.openLoading();
        axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: "post",
          url: "http://127.0.0.1:8000/api/postShipping",
          data: JSON.stringify({
            id_recipies: this.id_recipies,
            delivery: this.select.value
          }),
          headers: {
            authorization: "Bearer " + token,
            "content-type": "application/json"
          }
        }).then(function (Response) {
          _this2.activeLoading = false;

          _this2.$vs.loading.close();

          _this2.popupEnvio = false;

          _this2.getusers();

          _this2.$vs.notify({
            title: "En proceso",
            text: "La receta del cliente ahora está en proceso de envío.",
            color: "success"
          });
        }).catch(function (err) {
          _this2.popupEnvio = false;
          _this2.activeLoading = false;

          _this2.$vs.loading.close();

          console.log(err);
        });
      }
    },
    setClient: function setClient(id) {
      this.id_recipies = id;
    },
    realizarEM: function realizarEM() {
      if (this.mensajeroEM == null) {
        this.errorsEM.push('Debe de seleccionar un mensajero');
        this.activeLoading = false;
        this.$vs.loading.close();
      } else {
        this.openLoading();

        for (var i = 0; i <= Object.keys(this.selected).length - 1; i++) {
          console.log("Objeto No:" + i);
          this.crearPedido(this.selected[i].cliente.id_recipies);
        }

        this.getusers();
        this.activeLoading = false;
        this.$vs.loading.close();
        this.popupEnvioMultiple = false;
        this.$vs.notify({
          title: "En proceso",
          text: "Se realizaron los pedidos correctamente.",
          color: "success"
        });
      }
    },
    crearPedido: function crearPedido(id_receta) {
      var _this3 = this;

      var token = localStorage.getItem("tu");
      var idu = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "post",
        url: "http://127.0.0.1:8000/api/postShipping",
        data: JSON.stringify({
          id_recipies: id_receta,
          delivery: this.mensajeroEM.value
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this3.activeLoading = false;

        _this3.$vs.loading.close();

        _this3.popupEnvio = false;
      }).catch(function (err) {
        _this3.popupEnvio = false;
        _this3.activeLoading = false;

        _this3.$vs.loading.close();

        console.log(err);
      });
    }
  },
  data: function data() {
    return {
      users: [],
      recipie: [],
      deliveryP: [],
      popupActive: false,
      popupEnvio: false,
      popupEnvioMultiple: false,
      select: null,
      mensajeroEM: null,
      id_recipies: 0,
      errors: [],
      errorsEM: [],
      selected: []
    };
  },
  created: function created() {
    this.getusers();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/visitador/dashboard.vue?vue&type=template&id=c8c7ca08&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/visitador/dashboard.vue?vue&type=template&id=c8c7ca08& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    {},
    [
      _c("h4", [_vm._v("Información de los pedidos")]),
      _c("p", [
        _vm._v("Seleccione más de un registro para hacer un envío múltiple.")
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      Object.keys(this.selected).length >= 2
        ? _c(
            "vs-button",
            {
              attrs: {
                color: "primary",
                type: "filled",
                "icon-pack": "feather",
                icon: "icon-truck",
                "icon-after": ""
              },
              on: {
                click: function($event) {
                  _vm.popupEnvioMultiple = true
                }
              }
            },
            [_vm._v("Enviar pedidos")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "vs-table",
        {
          attrs: {
            multiple: "",
            "max-items": "10",
            search: "",
            pagination: "",
            data: _vm.users
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _vm._l(data, function(tr, indextr) {
                  return _c(
                    "vs-tr",
                    { key: indextr, attrs: { data: tr } },
                    [
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].cliente.client_id } },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(data[indextr].cliente.client_id) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].cliente.client_name } },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(data[indextr].cliente.client_name) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].cliente.client_phone } },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(data[indextr].cliente.client_phone) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        {
                          attrs: { data: data[indextr].cliente.client_addressf }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(data[indextr].cliente.client_addressf) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      data[indextr].cliente.status == 1
                        ? _c("vs-td", [
                            _vm._v(
                              "\n                    No asignado\n                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      data[indextr].cliente.status == 2
                        ? _c("vs-td", [
                            _vm._v(
                              "\n                    Asignado\n                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      data[indextr].cliente.status == 3
                        ? _c("vs-td", [
                            _vm._v(
                              "\n                    En entrega\n                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      data[indextr].cliente.status == 4
                        ? _c("vs-td", [
                            _vm._v(
                              "\n                    Entregado\n                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("vs-td", [
                        _c(
                          "div",
                          { staticClass: "row" },
                          [
                            _c("vs-button", {
                              attrs: {
                                size: "small",
                                radius: "",
                                color: "warning",
                                type: "filled",
                                "icon-pack": "feather",
                                icon: "icon-eye"
                              },
                              on: {
                                click: function($event) {
                                  ;(_vm.popupActive = true),
                                    _vm.setData(data[indextr].medicamentos)
                                }
                              }
                            }),
                            _vm._v(" "),
                            data[indextr].cliente.status == 1
                              ? _c(
                                  "div",
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        size: "small",
                                        radius: "",
                                        color: "primary",
                                        type: "filled",
                                        "icon-pack": "feather",
                                        icon: "icon-truck"
                                      },
                                      on: {
                                        click: function($event) {
                                          ;(_vm.popupEnvio = true),
                                            _vm.setClient(
                                              data[indextr].cliente.id_recipies
                                            )
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _c(
                                  "div",
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        disabled: "",
                                        size: "small",
                                        radius: "",
                                        color: "primary",
                                        type: "filled",
                                        "icon-pack": "feather",
                                        icon: "icon-truck"
                                      },
                                      on: {
                                        click: function($event) {
                                          ;(_vm.popupEnvio = true),
                                            _vm.setClient(
                                              data[indextr].cliente.id_recipies
                                            )
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
                    ],
                    1
                  )
                })
              }
            }
          ]),
          model: {
            value: _vm.selected,
            callback: function($$v) {
              _vm.selected = $$v
            },
            expression: "selected"
          }
        },
        [
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", [_vm._v("ID")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Paciente")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Teléfono")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Dirección")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Estatus")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Acciones")])
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: {
            title: "Ver información de la receta",
            active: _vm.popupActive
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive = $event
            }
          }
        },
        [
          _c("p", [_vm._v("Medicamentos recetados:")]),
          _c("br"),
          _vm._v(" "),
          _vm._l(_vm.recipie, function(item) {
            return _c("div", [
              _c("p", [
                _c("strong", [_vm._v(_vm._s(item.name))]),
                _vm._v(
                  "\n                (" +
                    _vm._s(item.dispensing) +
                    ")\n            "
                )
              ])
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: { title: "Configurar envío", active: _vm.popupEnvio },
          on: {
            "update:active": function($event) {
              _vm.popupEnvio = $event
            }
          }
        },
        [
          _c("p", [_vm._v("Seleccionar al encargado del envío:")]),
          _c("br"),
          _vm._v(" "),
          _vm.errors.length
            ? _c("p", [
                _c(
                  "ul",
                  _vm._l(_vm.errors, function(error) {
                    return _c("li", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(error))
                    ])
                  }),
                  0
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("v-select", {
            attrs: {
              closeOnSelect: true,
              options: _vm.deliveryP,
              required: !_vm.select,
              dir: _vm.$vs.rtl ? "rtl" : "ltr"
            },
            model: {
              value: _vm.select,
              callback: function($$v) {
                _vm.select = $$v
              },
              expression: "select"
            }
          }),
          _vm._v(" "),
          _c("br"),
          _c("br"),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "success", type: "filled" },
              on: {
                click: function($event) {
                  return _vm.inprogress(_vm.id_recipies)
                }
              }
            },
            [_vm._v("Realizar envío\n        ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: { title: "Configurar envío", active: _vm.popupEnvioMultiple },
          on: {
            "update:active": function($event) {
              _vm.popupEnvioMultiple = $event
            }
          }
        },
        [
          _c("p", [_vm._v("Seleccionar al encargado para los envíos:")]),
          _c("br"),
          _vm._v(" "),
          _vm.errorsEM.length
            ? _c("p", [
                _c(
                  "ul",
                  _vm._l(_vm.errorsEM, function(error) {
                    return _c("li", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(error))
                    ])
                  }),
                  0
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("v-select", {
            attrs: {
              closeOnSelect: true,
              options: _vm.deliveryP,
              required: !_vm.mensajeroEM,
              dir: _vm.$vs.rtl ? "rtl" : "ltr"
            },
            model: {
              value: _vm.mensajeroEM,
              callback: function($$v) {
                _vm.mensajeroEM = $$v
              },
              expression: "mensajeroEM"
            }
          }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Si el envío previamente ya se realizó, no se tomará en cuenta."
            )
          ]),
          _vm._v(" "),
          _c("br"),
          _c("br"),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "success", type: "filled" },
              on: {
                click: function($event) {
                  return _vm.realizarEM()
                }
              }
            },
            [_vm._v("Realizar envío\n        ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/visitador/dashboard.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/visitador/dashboard.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_c8c7ca08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=c8c7ca08& */ "./resources/js/src/views/visitador/dashboard.vue?vue&type=template&id=c8c7ca08&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/visitador/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_c8c7ca08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_c8c7ca08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/visitador/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/visitador/dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/visitador/dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/visitador/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/visitador/dashboard.vue?vue&type=template&id=c8c7ca08&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/visitador/dashboard.vue?vue&type=template&id=c8c7ca08& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_c8c7ca08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=c8c7ca08& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/visitador/dashboard.vue?vue&type=template&id=c8c7ca08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_c8c7ca08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_c8c7ca08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);