(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        console.log(Response.data);
        Response.data.forEach(function (element) {
          element.cliente.client_addresse = element.cliente.callee + ' ' + element.cliente.apartamentoe + ' ' + element.cliente.residenciae + ' zona ' + element.cliente.codigoe + ' ' + element.cliente.municipioe + ' ' + element.cliente.depare + ' ' + element.cliente.paise;

          _this.users.push(element);
        }); //console.log("USUARIO");
        //console.log(this.users);
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
        }); //console.log(this.deliveryP);
      }).catch(function (err) {
        console.log(err);
      });
    },
    setData: function setData(recipie, address) {
      this.recipie = recipie;
      this.address = address;
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
            id_recipies: id_receta,
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
            text: "El pedido del cliente ahora está en proceso de envío.",
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
          this.crearPedido(this.selected[i].cliente.order_id);
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
    },
    format: function format(input) {
      var num = input.value.replace(/\./g, '');

      if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/, '');
        input.value = num;
      } else {
        alert('Solo se permiten numeros');
        input.value = input.value.replace(/[^\d\.]*/g, '');
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
      popupEnvioMultiple: false,
      select: null,
      mensajeroEM: null,
      id_recipies: 0,
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/visitador/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/visitador/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] #table-search{\n  margin-top:-55px;\n}\n@media only screen and (max-width:600px){\n[dir] #table-search{\n    margin-top:0px;\n}\n[dir] #btn-envio{\n    margin-top:10px;\n}\n[dir=ltr] #btn-envio{\n    float:left;\n}\n[dir=rtl] #btn-envio{\n    float:right;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/visitador/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/visitador/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/visitador/dashboard.vue?vue&type=style&index=0&lang=css&");

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
                id: "btn-envio",
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
            id: "table-search",
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
                        { attrs: { data: data[indextr].cliente.id } },
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
                            _vm._v(
                              "\n                    Despachando\n                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      data[indextr].cliente.status == 2
                        ? _c("vs-td", [
                            _vm._v(
                              "\n                    En ruta\n                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      data[indextr].cliente.status == 3
                        ? _c("vs-td", [
                            _vm._v(
                              "\n                    En ruta\n                "
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
                      _c("vs-td", [
                        _c(
                          "span",
                          { staticStyle: { float: "left" } },
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
                                    _vm.setData(
                                      data[indextr].medicamentos,
                                      data[indextr].cliente.client_addresse
                                    )
                                }
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("span", { staticStyle: { float: "right" } }, [
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
                                            data[indextr].cliente.order_id
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
                                            data[indextr].cliente.order_id
                                          )
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                        ])
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
            title: "Ver información del Pedido\n    ",
            active: _vm.popupActive
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive = $event
            }
          }
        },
        [
          _c("p", [_vm._v("Medicamentos Pedidos:")]),
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
          _c("p", [_c("strong", [_vm._v(_vm._s(this.address))])])
        ],
        1
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
                    return _c(
                      "li",
                      { key: error, staticClass: "text-danger" },
                      [_vm._v(_vm._s(error))]
                    )
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
                    return _c(
                      "li",
                      { key: error, staticClass: "text-danger" },
                      [_vm._v(_vm._s(error))]
                    )
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
/* empty/unused harmony star reexport *//* harmony import */ var _dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/visitador/dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/src/views/visitador/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/visitador/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/visitador/dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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