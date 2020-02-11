(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mensajero/dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mensajero/dashboard.vue?vue&type=script&lang=js& ***!
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
        url: "http://127.0.0.1:8000/api/my-orderds/" + id,
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
      this.openLoading();
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "post",
        url: "http://127.0.0.1:8000/api/confirm-order",
        data: JSON.stringify({
          id_recipies: this.id_recipies
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
          title: "En camino",
          text: "Cambiaste el estado de asignado a en camino",
          color: "success"
        });
      }).catch(function (err) {
        _this2.popupEnvio = false;
        _this2.activeLoading = false;

        _this2.$vs.loading.close();

        console.log(err);
      });
    },
    setConfirm: function setConfirm(id) {
      this.id_recipies = id;
    },
    completarPedido: function completarPedido() {
      var _this3 = this;

      if (this.nombre_confirmacion == "") {
        this.errorsEM.push('Debe de escribirse el nombre de recibido');
        this.activeLoading = false;
        this.$vs.loading.close();
      } else {
        var token = localStorage.getItem("tu");
        var idu = localStorage.getItem("ui");
        this.openLoading();
        axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: "post",
          url: "http://127.0.0.1:8000/api/confirm-delivery",
          data: JSON.stringify({
            id_recipies: this.id_recipies,
            name_recibed: this.nombre_confirmacion
          }),
          headers: {
            authorization: "Bearer " + token,
            "content-type": "application/json"
          }
        }).then(function (Response) {
          _this3.activeLoading = false;

          _this3.$vs.loading.close();

          _this3.popupEnvio = false;

          _this3.getusers();

          _this3.$vs.notify({
            title: "Entrega completada",
            text: "Felicidades, completaste tu entrega",
            color: "success"
          });
        }).catch(function (err) {
          _this3.popupEnvio = false;
          _this3.activeLoading = false;

          _this3.$vs.loading.close();

          console.log(err);
        });
      }
    }
  },
  data: function data() {
    return {
      users: [],
      recipie: [],
      deliveryP: [],
      popupActive: false,
      popupEnvio: false,
      popupEntrega: false,
      select: null,
      nombre_confirmacion: "",
      id_recipies: 0,
      name_client: "",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mensajero/dashboard.vue?vue&type=template&id=40654c07&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mensajero/dashboard.vue?vue&type=template&id=40654c07& ***!
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
      _c("h4", [_vm._v("Tus pedidos")]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "vs-table",
        {
          attrs: {
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
                            _c("i", {
                              staticClass: "feather icon-clock text-primary"
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      data[indextr].cliente.status == 2
                        ? _c("vs-td", [
                            _c("i", {
                              staticClass: "feather icon-clock text-primary"
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      data[indextr].cliente.status == 3
                        ? _c("vs-td", [
                            _c("i", {
                              staticClass: "feather icon-truck text-warning"
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      data[indextr].cliente.status == 4
                        ? _c("vs-td", [
                            _c("i", {
                              staticClass:
                                "feather icon-check-circle text-success"
                            })
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
                            data[indextr].cliente.status == 2
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
                                              data[indextr].cliente.id_recipies,
                                              data[indextr].cliente.client_name
                                            )
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            data[indextr].cliente.status == 3
                              ? _c(
                                  "div",
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        size: "small",
                                        radius: "",
                                        color: "success",
                                        type: "filled",
                                        "icon-pack": "feather",
                                        icon: "icon-check-circle"
                                      },
                                      on: {
                                        click: function($event) {
                                          ;(_vm.popupEntrega = true),
                                            _vm.setConfirm(
                                              data[indextr].cliente.id_recipies
                                            )
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e()
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
          ])
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
                _c("strong", [_vm._v("- " + _vm._s(item.name))]),
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
          attrs: { title: "Confirmar envío", active: _vm.popupEnvio },
          on: {
            "update:active": function($event) {
              _vm.popupEnvio = $event
            }
          }
        },
        [
          _c("strong", [
            _vm._v(
              "Confirma el envío de entrega al cliente: " +
                _vm._s(_vm.name_client)
            )
          ]),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Verifica que todo está en órden y si hay suficientes medicamentos"
            )
          ]),
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
            [_vm._v("Confirmar envío\n        ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: { title: "Confirmar entrega", active: _vm.popupEntrega },
          on: {
            "update:active": function($event) {
              _vm.popupEntrega = $event
            }
          }
        },
        [
          _c("p", [_vm._v("Escriba su nombre de recibido:")]),
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
          _c("div", { staticClass: "vx-row mb-2" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: { "label-placeholder": "Nombre de recibido" },
                  model: {
                    value: _vm.nombre_confirmacion,
                    callback: function($$v) {
                      _vm.nombre_confirmacion = $$v
                    },
                    expression: "nombre_confirmacion"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "success", type: "filled" },
              on: {
                click: function($event) {
                  return _vm.completarPedido()
                }
              }
            },
            [_vm._v("Completar pedido\n        ")]
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

/***/ "./resources/js/src/views/mensajero/dashboard.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/mensajero/dashboard.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_40654c07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=40654c07& */ "./resources/js/src/views/mensajero/dashboard.vue?vue&type=template&id=40654c07&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/mensajero/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_40654c07___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_40654c07___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/mensajero/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/mensajero/dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/mensajero/dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mensajero/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/mensajero/dashboard.vue?vue&type=template&id=40654c07&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/mensajero/dashboard.vue?vue&type=template&id=40654c07& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_40654c07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=40654c07& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mensajero/dashboard.vue?vue&type=template&id=40654c07&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_40654c07___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_40654c07___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);