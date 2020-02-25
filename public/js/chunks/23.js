(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/showRecipe.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/showRecipe.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      image: "/images/medicamentos/demol.PNG",
      drName: "",
      drEmail: "",
      drPhone: "",
      nuevaRecetaData: {},
      recetas: [],
      mailTo: "",
      companyDetails: {
        name: "",
        addressLine1: "9 N. Sherwood Court",
        addressLine2: "Nombre Médico",
        zipcode: "94203",
        mailId: "hello@pixinvent.net",
        mobile: "s"
      },
      recipientDetails: {
        fullName: "Peter Stark",
        addressLine1: "8577 West West Drive ",
        addressLine2: "Holbrook, NY",
        zipcode: "90001",
        mailId: "peter@mail.com",
        mobile: "+91 988 888 8888"
      },
      invoiceDetails: {
        invoiceNo: "001/2019",
        invoiceDate: "Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)"
      },
      invoiceData: {
        tasks: [{
          id: 1,
          task: "Website Redesign",
          hours: 60,
          rate: 15,
          amount: 90000
        }, {
          id: 2,
          task: "Newsletter template design",
          hours: 20,
          rate: 12,
          amount: 24000
        }],
        subtotal: 114000,
        discountPercentage: 5,
        discountedAmount: 5700,
        total: 108300
      },
      imagen64: "/images/medicamentos/unnamed.jpg"
    };
  },
  computed: {},
  created: function created() {
    this.getUser();
    var data = JSON.parse(localStorage.getItem("nuevaRecetaData"));
    this.nuevaRecetaData = data;
    console.log(this.nuevaRecetaData);
  },
  methods: {
    getUser: function getUser() {
      var _this = this;

      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/details",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        console.log(Response);

        if (Response.data.success.clinicalRecord == null || Response.data.success.clinicalRecord == "") {
          _this.image = "/images/medicamentos/demol.PNG";
        } else {
          _this.image = "data:image/png;base64," + Response.data.success.clinicalRecord;
        }

        _this.drName = Response.data.success.name;
        _this.drEmail = Response.data.success.email;

        if (Response.data.success.phone == null || Response.data.success.phone == "") {
          _this.drPhone = '+502: 8452-9862';
        } else {
          _this.drPhone = '+502: ' + Response.data.success.phone;
        }

        _this.activeLoading = false;

        _this.$vs.loading.close();
      }).catch(function (err) {
        console.log(err);
        _this.activeLoading = false;

        _this.$vs.loading.close();
      });
    },
    printInvoice: function printInvoice() {
      window.print();
    },
    finalizar: function finalizar() {
      var a = JSON.parse(localStorage.getItem("recetas"));
      this.recetas = a;

      if (this.recetas == null) {
        this.recetas = [];
      }

      this.recetas.push({
        nombrePaciente: this.nuevaRecetaData.nombrePaciente,
        apellidoPaciente: this.nuevaRecetaData.apellidoPaciente,
        genero: this.nuevaRecetaData.genero,
        telefono: this.nuevaRecetaData.telefono,
        medicamentos: this.nuevaRecetaData.medicamentos
      });
      localStorage.setItem("recetas", JSON.stringify(this.recetas));
      location.href = "/home";
    }
  },
  components: {},
  mounted: function mounted() {
    this.$emit("setAppClasses", "invoice-page");
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/showRecipe.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/showRecipe.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media print {\n.invoice-page * {\n    visibility: hidden;\n}\n[dir] .invoice-page #content-area {\n    margin: 0 !important;\n}\n.invoice-page #invoice-container,\n.invoice-page #invoice-container * {\n    visibility: visible;\n}\n.invoice-page #invoice-container {\n    position: absolute;\n    top: 0;\n}\n[dir] .invoice-page #invoice-container {\n    box-shadow: none;\n}\n[dir=ltr] .invoice-page #invoice-container {\n    left: 0;\n}\n[dir=rtl] .invoice-page #invoice-container {\n    right: 0;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/showRecipe.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/showRecipe.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showRecipe.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/showRecipe.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/showRecipe.vue?vue&type=template&id=20e167c0&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/showRecipe.vue?vue&type=template&id=20e167c0& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "invoice-page" } },
    [
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-between" },
        [
          _c(
            "vx-input-group",
            { staticClass: "mb-base mr-3" },
            [
              _c("vs-input", {
                attrs: { placeholder: "Email" },
                model: {
                  value: _vm.mailTo,
                  callback: function($$v) {
                    _vm.mailTo = $$v
                  },
                  expression: "mailTo"
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "append" }, [
                _c(
                  "div",
                  { staticClass: "append-text btn-addon" },
                  [
                    _c(
                      "vs-button",
                      {
                        staticClass: "whitespace-no-wrap",
                        attrs: { type: "border" },
                        on: {
                          click: function($event) {
                            _vm.mailTo = ""
                          }
                        }
                      },
                      [_vm._v("Enviar Receta")]
                    )
                  ],
                  1
                )
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex items-center" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "mb-base mr-3",
                  attrs: { "icon-pack": "feather", icon: "icon icon-file" },
                  on: { click: _vm.printInvoice }
                },
                [_vm._v("Imprimir")]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "mb-base mr-3",
                  attrs: {
                    color: "warning",
                    "icon-pack": "feather",
                    icon: "icon icon-check"
                  },
                  on: { click: _vm.finalizar }
                },
                [_vm._v("Finalizar")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("vx-card", { attrs: { id: "invoice-container" } }, [
        _c("div", { staticClass: "vx-row leading-loose p-base" }, [
          _c("div", { staticClass: "vx-col w-full md:w-1/2 mt-base" }, [
            _c("img", {
              staticClass: "mr-8 rounded h-48 w-48",
              attrs: { src: _vm.image }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-col w-full md:w-1/2 text-right" }, [
            _c("h1", [_vm._v("Receta")]),
            _vm._v(" "),
            _c("div", { staticClass: "invoice__invoice-detail mt-6" }, [
              _c("h6", [_vm._v("Receta No.")]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.invoiceDetails.invoiceNo))]),
              _vm._v(" "),
              _c("h6", { staticClass: "mt-4" }, [_vm._v("Fecha Receta")]),
              _vm._v(" "),
              _c("p", {
                domProps: { textContent: _vm._s(_vm.nuevaRecetaData.dateIssue) }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-col w-full md:w-1/2 mt-12" }, [
            _c("h5", [_vm._v("Paciente")]),
            _vm._v(" "),
            _c("div", { staticClass: "invoice__recipient-info my-4" }, [
              _c("p", {
                domProps: { textContent: _vm._s(_vm.nuevaRecetaData.name) }
              }),
              _vm._v(" "),
              _c("p", [_vm._v("Guatemala")]),
              _vm._v(" "),
              _c("p", {
                domProps: { textContent: _vm._s(_vm.nuevaRecetaData.phone) }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "invoice__recipient-contact" })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col w-full md:w-1/2 mt-base text-right mt-12" },
            [
              _c("h5", [_vm._v(_vm._s(_vm.companyDetails.name))]),
              _vm._v(" "),
              _c("div", { staticClass: "invoice__company-info my-4" }, [
                _c("p", [_vm._v("Via 4 zona 4 Guatemala")]),
                _vm._v(" "),
                _c("p", [
                  _c("strong", {
                    domProps: { textContent: _vm._s(_vm.drName) }
                  })
                ]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.companyDetails.zipcode))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "invoice__company-contact" }, [
                _c(
                  "p",
                  { staticClass: "flex items-center justify-end" },
                  [
                    _c("feather-icon", {
                      attrs: { icon: "MailIcon", svgClasses: "h-4 w-4" }
                    }),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "ml-2",
                      domProps: { textContent: _vm._s(_vm.drEmail) }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "flex items-center justify-end" },
                  [
                    _c("feather-icon", {
                      attrs: { icon: "PhoneIcon", svgClasses: "h-4 w-4" }
                    }),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "ml-2",
                      domProps: { textContent: _vm._s(_vm.drPhone) }
                    })
                  ],
                  1
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "p-base" },
          [
            _c(
              "vs-table",
              { attrs: { hoverFlat: "", data: _vm.invoiceData.tasks } },
              [
                _vm._l(_vm.nuevaRecetaData.medicamentos, function(item) {
                  return _c(
                    "vs-tr",
                    { key: item.nombre },
                    [
                      _c("vs-td", {
                        domProps: {
                          textContent: _vm._s(
                            item.nombre +
                              " " +
                              item.precentacion +
                              " " +
                              item.descripcion
                          )
                        }
                      })
                    ],
                    1
                  )
                })
              ],
              2
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "invoice__footer text-right p-base" }, [
          _c("div", { attrs: { align: "right" } }, [
            _c("img", {
              staticClass: "h-24 w-64",
              attrs: { src: _vm.imagen64, alt: "" }
            })
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/showRecipe.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/pages/showRecipe.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showRecipe_vue_vue_type_template_id_20e167c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showRecipe.vue?vue&type=template&id=20e167c0& */ "./resources/js/src/views/pages/showRecipe.vue?vue&type=template&id=20e167c0&");
/* harmony import */ var _showRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showRecipe.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/showRecipe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _showRecipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showRecipe.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/showRecipe.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _showRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _showRecipe_vue_vue_type_template_id_20e167c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _showRecipe_vue_vue_type_template_id_20e167c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/showRecipe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/showRecipe.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/showRecipe.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showRecipe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/showRecipe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/showRecipe.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/showRecipe.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_showRecipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showRecipe.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/showRecipe.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_showRecipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_showRecipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_showRecipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_showRecipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_showRecipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/showRecipe.vue?vue&type=template&id=20e167c0&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/showRecipe.vue?vue&type=template&id=20e167c0& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showRecipe_vue_vue_type_template_id_20e167c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showRecipe.vue?vue&type=template&id=20e167c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/showRecipe.vue?vue&type=template&id=20e167c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showRecipe_vue_vue_type_template_id_20e167c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showRecipe_vue_vue_type_template_id_20e167c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);