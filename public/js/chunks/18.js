(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/NuevoProducto.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/NuevoProducto.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
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
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    data: {
      type: Object
    }
  },
  data: function data() {
    return {
      errors: {
        campo: "Este campo es requerido."
      },
      bol: "as",
      image: "images/medicamentos/default.png",
      name: null,
      precentation: null,
      description: null,
      activado: false,
      quantity: null,
      price: null,
      message: "Error en el servidor, Intente más tarde.",
      laboratory: null,
      warehouse: null,
      category: [],
      base64textString: "",
      categorias: [],
      laboratorios: [],
      presentaciones: [],
      Resid: null
    };
  },
  methods: {
    getPre: function getPre() {
      var _this = this;

      var token = localStorage.getItem("tu");
      var idu = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getPres",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this.presentaciones = [];
        Response.data.forEach(function (element) {
          if (element.user_id == idu) {
            _this.presentaciones.push({
              label: element.name + '-' + element.unidad + '-' + element.cantidad,
              value: element.id
            });
          }
        });
      }).catch(function (err) {
        console.log(err);
      });
    },
    getLab: function getLab() {
      var _this2 = this;

      var token = localStorage.getItem("tu");
      var idu = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getLabs",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this2.laboratorios = [];
        Response.data.forEach(function (element) {
          if (element.user_id == idu) {
            _this2.laboratorios.push({
              label: element.name,
              value: element.id
            });
          }
        });
      }).catch(function (err) {
        console.log(err);
      });
    },
    getCategories: function getCategories() {
      var _this3 = this;

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
            _this3.categorias.push({
              label: element.name,
              value: element.id
            });
          }
        });
      }).catch(function (err) {
        console.log(err);
      });
    },
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    cancel: function cancel() {
      this.$router.push("/consola");
    },
    touched: function touched() {
      this.bol = "";
    },
    doSave: function doSave() {
      var _this4 = this;

      this.openLoading();
      var token = localStorage.getItem("tu");
      var idu = localStorage.getItem("ui");
      var arrayFinal = [];
      this.category.forEach(function (element) {
        arrayFinal.push(element.value);
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "post",
        url: "http://127.0.0.1:8000/api/postProducts",
        data: JSON.stringify({
          name: this.name,
          image: this.base64textString,
          description: this.description,
          price: this.price,
          precentation: this.precentation.value,
          laboratory: this.laboratory.value,
          warehouse: this.warehouse,
          quantity: this.quantity,
          user_id: idu
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this4.Resid = Response.data.mess;
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
          method: "post",
          url: "http://127.0.0.1:8000/api/postProdCate",
          data: JSON.stringify({
            categories: arrayFinal,
            product_id: _this4.Resid
          }),
          headers: {
            authorization: "Bearer " + token,
            "content-type": "application/json"
          }
        }).then(function (Response) {
          _this4.activeLoading = false;

          _this4.$vs.loading.close();

          _this4.$router.push("/consola");

          _this4.$vs.notify({
            title: "Agregado",
            text: "Producto creado exitosamente.",
            color: "success"
          });
        }).catch(function (err) {
          _this4.activeLoading = false;

          _this4.$vs.loading.close();

          activado = true; //console.log(err);
        });
      }).catch(function (err) {
        _this4.activeLoading = false;

        _this4.$vs.loading.close();

        activado = true; //console.log(err);
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
      this.image = "data:image/png;base64," + this.base64textString;
    }
  },
  created: function created() {
    this.getCategories();
    this.getLab();
    this.getPre();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/NuevoProducto.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/NuevoProducto.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fileInput {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.subir {\n  color: #fff;\n}\n[dir] .subir {\n  padding: 5px 10px;\n  background: #003da5;\n  border: 0px solid #fff;\n  border-radius: 15px 15px 15px 15px;\n}\n.subir:hover {\n  color: #fff;\n}\n[dir] .subir:hover {\n  background: #003da5;\n}\n[dir] .vs-textarea {\n  background-color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/NuevoProducto.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/NuevoProducto.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NuevoProducto.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/NuevoProducto.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/NuevoProducto.vue?vue&type=template&id=a4bfcc86&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/NuevoProducto.vue?vue&type=template&id=a4bfcc86& ***!
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
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.doSave()
          }
        }
      },
      [
        _c("div", { staticClass: "vx-row" }, [
          _c(
            "div",
            { staticClass: "vx-col w-full" },
            [
              _c(
                "div",
                { staticClass: "flex items-start flex-col sm:flex-row" },
                [
                  _c("img", {
                    staticClass: "mr-8 rounded h-24 w-24",
                    attrs: { alt: "hola", src: _vm.image }
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
                        },
                        click: _vm.touched
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      { staticClass: "subir", attrs: { for: "image" } },
                      [_vm._v("Agregar Foto")]
                    ),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "info1" } }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.image === "images/medicamentos/default.png" &&
                              _vm.bol == "",
                            expression:
                              "image === 'images/medicamentos/default.png' && bol == ''"
                          }
                        ],
                        staticClass: "text-danger text-sm"
                      },
                      [_vm._v(_vm._s(_vm.errors.campo))]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
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
                [_vm._v(_vm._s(_vm.message))]
              )
            ],
            1
          )
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
                [
                  _c("vs-textarea", {
                    staticClass: "vs-textarea",
                    attrs: { label: "Nombre del Componente" },
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
              _c("label", { staticClass: "vs-input--label" }, [
                _vm._v("Precio")
              ]),
              _vm._v(" "),
              _c(
                "vx-input-group",
                { staticClass: "mb-base" },
                [
                  _c("template", { slot: "prepend" }, [
                    _c("div", { staticClass: "prepend-text bg-primary" }, [
                      _c("span", [_vm._v("Q")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("vs-input", {
                    attrs: { placeholder: "Price" },
                    model: {
                      value: _vm.price,
                      callback: function($$v) {
                        _vm.price = $$v
                      },
                      expression: "price"
                    }
                  })
                ],
                2
              ),
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
                  _c(
                    "label",
                    {
                      staticClass: "vs-input--label",
                      staticStyle: { color: "gray" }
                    },
                    [_vm._v("Presentación")]
                  ),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: { options: _vm.presentaciones },
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
                          name: "show",
                          rawName: "v-show",
                          value: _vm.precentation === "",
                          expression: "precentation === ''"
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
              _c("div", { staticClass: "mt-4" }, [
                _c(
                  "div",
                  [
                    _c(
                      "label",
                      {
                        staticClass: "vs-input--label",
                        staticStyle: { color: "gray" }
                      },
                      [_vm._v("Laboratorio")]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.laboratorios },
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
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-4" },
                [
                  _c("label", { staticClass: "vs-input--label" }, [
                    _vm._v("Proveedor")
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      options: ["NOVEMED"],
                      dir: _vm.$vs.rtl ? "rtl" : "ltr"
                    },
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
                        color: "success",
                        disabled:
                          _vm.name == null ||
                          _vm.name == "" ||
                          _vm.image == "images/medicamentos/default.png" ||
                          _vm.bol == "as" ||
                          _vm.quantity == null ||
                          _vm.quantity == "" ||
                          _vm.description == null ||
                          _vm.description == "" ||
                          _vm.precentation == null ||
                          _vm.precentation == "" ||
                          _vm.price == null ||
                          _vm.price == "" ||
                          _vm.laboratory == null ||
                          _vm.laboratory == "" ||
                          _vm.category == null ||
                          _vm.category.length == 0 ||
                          _vm.warehouse == null ||
                          _vm.warehouse == ""
                      },
                      on: { click: _vm.doSave }
                    },
                    [_vm._v("Guardar")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "ml-4 mt-2",
                      attrs: { type: "border", color: "danger" },
                      on: { click: _vm.cancel }
                    },
                    [_vm._v("Cancelar")]
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]
    )
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

/***/ "./resources/js/src/views/admin/NuevoProducto.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/admin/NuevoProducto.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NuevoProducto_vue_vue_type_template_id_a4bfcc86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NuevoProducto.vue?vue&type=template&id=a4bfcc86& */ "./resources/js/src/views/admin/NuevoProducto.vue?vue&type=template&id=a4bfcc86&");
/* harmony import */ var _NuevoProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NuevoProducto.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/NuevoProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NuevoProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NuevoProducto.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/admin/NuevoProducto.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NuevoProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NuevoProducto_vue_vue_type_template_id_a4bfcc86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NuevoProducto_vue_vue_type_template_id_a4bfcc86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/NuevoProducto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/NuevoProducto.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/admin/NuevoProducto.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NuevoProducto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/NuevoProducto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoProducto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/NuevoProducto.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/admin/NuevoProducto.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NuevoProducto.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/NuevoProducto.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoProducto_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/admin/NuevoProducto.vue?vue&type=template&id=a4bfcc86&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/admin/NuevoProducto.vue?vue&type=template&id=a4bfcc86& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoProducto_vue_vue_type_template_id_a4bfcc86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NuevoProducto.vue?vue&type=template&id=a4bfcc86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/NuevoProducto.vue?vue&type=template&id=a4bfcc86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoProducto_vue_vue_type_template_id_a4bfcc86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevoProducto_vue_vue_type_template_id_a4bfcc86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);