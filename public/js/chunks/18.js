(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

      this.openLoading();
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
        console.log(Response.data);
        Response.data.forEach(function (element) {
          element.cliente.client_addresse = element.cliente.callee + ' ' + element.cliente.apartamentoe + ' ' + element.cliente.residenciae + ' zona ' + element.cliente.codigoe + ' ' + element.cliente.municipioe + ' ' + element.cliente.depare + ' ' + element.cliente.paise;

          _this.users.push(element);
        }); //console.log(this.users);

        _this.activeLoading = false;

        _this.$vs.loading.close();
      }).catch(function (err) {
        console.log(err);
        _this.activeLoading = false;

        _this.$vs.loading.close();

        localStorage.removeItem("tu");
        localStorage.removeItem("ru");
        localStorage.removeItem("ui");
        localStorage.removeItem("regi");
        localStorage.removeItem("nuevaRecetaData");

        _this.$router.push("/");
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
        }); //console.log(this.deliveryP);
      }).catch(function (err) {
        console.log(err);
      });
    },
    setClient: function setClient(id_recipies, name) {
      this.id_recipies = id_recipies;
      this.name_client = name;
    },
    setData: function setData(recipie, address) {
      this.recipie = recipie;
      this.address = address;
      console.log(this.id_recipies);
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
      console.log(this.id_recipies);
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
          color: "success",
          iconPack: 'feather',
          icon: 'icon-check'
        });
      }).catch(function (err) {
        _this2.popupEnvio = false;
        _this2.activeLoading = false;

        _this2.$vs.loading.close();

        console.log(err);
      });
    },
    setConfirm: function setConfirm(id, recipe_id) {
      this.id_order = id;
      this.recipe_id = recipe_id;
    },
    completarPedido: function completarPedido() {
      var _this3 = this;

      this.openLoading();

      if (this.status == true) {
        this.status = 5;
      } else {
        this.status = 4;
      }

      var token = localStorage.getItem("tu");
      var idu = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "post",
        url: "http://127.0.0.1:8000/api/confirm-delivery",
        data: JSON.stringify({
          id_recipies: this.id_order,
          name_recibed: this.nombre_confirmacion,
          observations: this.observations,
          status: this.status
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        if (_this3.recipe_id != null || _this3.recipe_id != undefined || _this3.status == 4) {
          axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "put",
            url: "http://127.0.0.1:8000/api/changeStatus1",
            data: JSON.stringify({
              id: _this3.recipe_id,
              status: 4,
              receiver: _this3.nombre_confirmacion
            }),
            headers: {
              authorization: "Bearer " + token,
              "content-type": "application/json"
            }
          }).then(function (Response) {
            _this3.activeLoading = false;

            _this3.$vs.loading.close();

            _this3.popupEntrega = false;

            _this3.getusers();

            _this3.nombre_confirmacion = null;
            _this3.observations = null;
            _this3.status = false;

            _this3.$vs.notify({
              title: "Entrega completada",
              text: "Felicidades, completaste tu entrega",
              color: "success",
              iconPack: 'feather',
              icon: 'icon-check'
            });
          }).catch(function (err) {
            _this3.activeLoading = false;

            _this3.$vs.loading.close();

            console.log(err);
          });
        } else {
          _this3.activeLoading = false;

          _this3.$vs.loading.close();

          _this3.popupEntrega = false;

          _this3.getusers();

          _this3.nombre_confirmacion = null;
          _this3.observations = null;
          _this3.status = false;

          _this3.$vs.notify({
            title: "Entrega completada",
            text: "Felicidades, completaste tu entrega",
            color: "success",
            iconPack: 'feather',
            icon: 'icon-check'
          });
        }
      }).catch(function (err) {
        _this3.popupEntrega = false;
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
      popupEntrega: false,
      select: null,
      nombre_confirmacion: null,
      observations: null,
      status: false,
      recipe_id: null,
      id_recipies: 0,
      id_order: 0,
      name_client: "",
      address: "",
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mensajero/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mensajero/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] #table-search {\n  margin-top: -65px;\n}\n@media only screen and (max-width:600px) {\n[dir] #table-search {\n    margin-top: 0px;\n}\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mensajero/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/mensajero/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mensajero/dashboard.vue?vue&type=style&index=0&lang=css&");

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
            id: "table-search",
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
                              _vm._s(data[indextr].cliente.id) +
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
                      data[indextr].cliente.client_addresse.length > 25
                        ? _c(
                            "vs-td",
                            {
                              attrs: {
                                data: data[indextr].cliente.client_addresse
                              }
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(
                                    data[
                                      indextr
                                    ].cliente.client_addresse.substring(0, 25) +
                                      "..."
                                  ) +
                                  "\n                "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      data[indextr].cliente.client_addresse.length <= 25
                        ? _c(
                            "vs-td",
                            {
                              attrs: {
                                data: data[indextr].cliente.client_addresse
                              }
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(
                                    data[
                                      indextr
                                    ].cliente.client_addresse.substring(0, 25)
                                  ) +
                                  "\n                "
                              )
                            ]
                          )
                        : _vm._e(),
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
                      data[indextr].cliente.status == 5
                        ? _c("vs-td", [
                            _c("i", {
                              staticClass: "feather icon-x-circle text-danger"
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        {
                          attrs: { data: data[indextr].cliente.delivery_date }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(data[indextr].cliente.delivery_date) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        [
                          _c("vs-button", {
                            staticStyle: { float: "left" },
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
                                  _vm.setData(
                                    data[indextr].medicamentos,
                                    data[indextr].cliente.client_addresse
                                  )
                              }
                            }
                          }),
                          _vm._v(" "),
                          data[indextr].cliente.status == 2
                            ? _c(
                                "div",
                                { staticStyle: { float: "right" } },
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
                                            data[indextr].cliente.order_id,
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
                                { staticStyle: { float: "right" } },
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
                                            data[indextr].cliente.order_id,
                                            data[indextr].cliente.recipe_id
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
              _c("vs-th", [_vm._v("Cliente")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Teléfono")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Dirección")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Estatus")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Fecha/Hora de entrega")]),
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
            fullscreen: "",
            title: "Ver información del Pedido",
            active: _vm.popupActive
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive = $event
            }
          }
        },
        [
          _c("p", [_vm._v("Medicamentos ordenados:")]),
          _c("br"),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              attrs: { "max-items": "10", data: _vm.recipie },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(_vm.recipie, function(tr, indextr) {
                      return _c(
                        "vs-tr",
                        { key: indextr },
                        [
                          _c("vs-td", { attrs: { data: data[indextr].name } }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(data[indextr].name) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].description } },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(data[indextr].description) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].preName } },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(data[indextr].preName) +
                                  " - " +
                                  _vm._s(data[indextr].unidad) +
                                  " - " +
                                  _vm._s(data[indextr].preCantidad) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].labName } },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(data[indextr].labName) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].warehouse } },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(data[indextr].warehouse) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].cantidad } },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(data[indextr].cantidad) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].price } },
                            [
                              _vm._v(
                                "\n                        Q " +
                                  _vm._s(
                                    data[indextr].price ||
                                      _vm.numFormat("000,000.00")
                                  ) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].cantidad } },
                            [
                              _vm._v(
                                "\n                        Q " +
                                  _vm._s(
                                    data[indextr].price *
                                      data[indextr].cantidad ||
                                      _vm.numFormat("000,000.00")
                                  ) +
                                  "\n                    "
                              )
                            ]
                          )
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
                  _c("vs-th", [_vm._v("Nombre del producto")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Descripción")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Presentación")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Laboratorio")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Almacén")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Cantidad")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Precio")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Subtotal")])
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("p", [_vm._v("Dirección exacta:")]),
          _vm._v(" "),
          _vm.address == ""
            ? _c("p", [_c("strong", [_vm._v("No se adjuntó la dirección")])])
            : _vm._e(),
          _vm._v(" "),
          _c("p", [_c("strong", [_vm._v(_vm._s(_vm.address))])])
        ],
        1
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
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c("div", {
              staticClass: "vx-col w-full sm:w-1/2 lg:w-1/2 mb-base"
            }),
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
                      "vs-checkbox",
                      {
                        model: {
                          value: _vm.status,
                          callback: function($$v) {
                            _vm.status = $$v
                          },
                          expression: "status"
                        }
                      },
                      [_vm._v("No se pudo entregar")]
                    )
                  ],
                  1
                )
              ]
            )
          ]),
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
                }),
                _vm._v(" "),
                _vm.status == false && _vm.nombre_confirmacion == ""
                  ? _c("span", { staticClass: "text-danger" }, [
                      _vm._v("Este campo es\n                    requerido")
                    ])
                  : _vm._e()
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-2" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c("vs-textarea", {
                  staticClass: "w-full",
                  attrs: { label: "Observaciones" },
                  model: {
                    value: _vm.observations,
                    callback: function($$v) {
                      _vm.observations = $$v
                    },
                    expression: "observations"
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
          _vm.status == false
            ? _c(
                "vs-button",
                {
                  attrs: {
                    color: "success",
                    type: "filled",
                    disabled:
                      _vm.nombre_confirmacion == "" ||
                      _vm.nombre_confirmacion == null
                  },
                  on: {
                    click: function($event) {
                      return _vm.completarPedido()
                    }
                  }
                },
                [_vm._v("Completar pedido\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.status == true
            ? _c(
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
            : _vm._e()
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
/* empty/unused harmony star reexport *//* harmony import */ var _dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/mensajero/dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/src/views/mensajero/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/mensajero/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/mensajero/dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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