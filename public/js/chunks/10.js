(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      registro: null,
      nombres: null,
      telefono: null,
      fecha: "",
      actiErr: false,
      actiErr1: false,
      call_center: true
    };
  },
  methods: {
    newData: function newData() {
      var nuevaRecetaData = {
        recipe_id: "",
        name: "",
        phone: "",
        doctor_id: "",
        symptom: "",
        diagnostics: "",
        observations: "",
        nextAppointment: "",
        status: 1,
        call_center: "",
        dateIssue: "",
        medicines: [],
        dispensing: [],
        medicamentos: []
      };
      localStorage.setItem("nuevaRecetaData", JSON.stringify(nuevaRecetaData));
    },
    getDate: function getDate() {
      var f = new Date();
      this.fecha = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();
    },
    formSubmitted: function formSubmitted() {
      if (this.nombres == null || this.nombres == "") {
        this.actiErr = true;
        this.nombres = "";
      } else if (this.telefono == null || this.telefono == "") {
        this.actiErr1 = true;
        this.telefono = "";
      } else {
        if (this.call_center == true) {
          this.call_center = 1;
        } else {
          this.call_center = 0;
        }

        var idu = localStorage.getItem("ui");
        idu = parseInt(idu);
        var nuevaRecetaData = {
          recipe_id: "",
          name: this.nombres,
          phone: this.telefono,
          doctor_id: idu,
          symptom: "",
          diagnostics: "",
          observations: "",
          nextAppointment: "",
          status: 1,
          call_center: this.call_center,
          dateIssue: this.fecha,
          medicines: [],
          dispensing: [],
          medicamentos: []
        };
        localStorage.setItem("nuevaRecetaData", JSON.stringify(nuevaRecetaData));
        this.$router.push("/agregarProductos");
      }
    }
  },
  created: function created() {
    this.registro = localStorage.getItem("regi");
    this.newData();
    this.getDate();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/nuevoPaciente.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/nuevoPaciente.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormWizardValidation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormWizardValidation.vue */ "./resources/js/src/views/pages/FormWizardValidation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FormWizardValidation: _FormWizardValidation_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".div {\n  max-width: 100px;\n}[dir] .div {\n  margin: auto;\n}\n.nav-flex {\n  display: flex;\n  flex-flow: row wrap;\n}\n.timeline {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.li {\n  transition: all 200ms ease-in;\n}\n.status {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  transition: all 200ms ease-in;\n}\n[dir] .status {\n  padding: 0px 40px;\n  border-top: 2px solid #d6dce0;\n}\n.status h4 {\n  font-weight: 600;\n}\n.status:before {\n  content: \"\";\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: -15px;\n  transition: all 200ms ease-in;\n}\n[dir] .status:before {\n  background-color: white;\n  border-radius: 25px;\n  border: 1px solid #ddd;\n}\n[dir=ltr] .status:before {\n  left: 42%;\n}\n[dir=rtl] .status:before {\n  right: 42%;\n}\n[dir] .li.complete .status {\n  border-top: 2px solid #003da5;\n}\n.li.complete .status:before {\n  transition: all 200ms ease-in;\n}\n[dir] .li.complete .status:before {\n  background-color: #003da5;\n  border: none;\n}\n.li.complete .status h4 {\n  color: #003da5;\n}\n@media (min-device-width: 320px) and (max-device-width: 700px) {\n.status {\n    display: flex;\n    justify-content: center;\n    position: relative;\n    transition: all 200ms ease-in;\n}\n[dir] .status {\n    padding: 0px 20px;\n    border-top: 2px solid #d6dce0;\n}\n.status h4 {\n    font-weight: 600;\n    font-size: 100;\n}\n.status:before {\n    content: \"\";\n    width: 25px;\n    height: 25px;\n    position: absolute;\n    top: -15px;\n    transition: all 200ms ease-in;\n}\n[dir] .status:before {\n    background-color: white;\n    border-radius: 25px;\n    border: 1px solid #ddd;\n}\n[dir=ltr] .status:before {\n    left: 42%;\n}\n[dir=rtl] .status:before {\n    right: 42%;\n}\n[dir] .li.complete .status {\n    border-top: 2px solid #003da5;\n}\n.li.complete .status:before {\n    transition: all 200ms ease-in;\n}\n[dir] .li.complete .status:before {\n    background-color: #003da5;\n    border: none;\n}\n.li.complete .status h4 {\n    color: #003da5;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizardValidation.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=template&id=e02b7086&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=template&id=e02b7086& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { attrs: { title: "Datos del Paciente" } }, [
    _c("p", [_vm._v("Ingrese los datos del paciente.")]),
    _vm._v(" "),
    _c("div", { staticClass: "mt-5" }, [
      _vm.registro == 1
        ? _c("div", { attrs: { align: "center" } }, [
            _c(
              "ul",
              { staticClass: "timeline mt-5", attrs: { id: "timeline" } },
              [
                _c("li", { staticClass: "li complete" }, [
                  _c("div", { staticClass: "status" }, [
                    _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 1")])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "li" }, [
                  _c("div", { staticClass: "status" }, [
                    _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 2")])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "li" }, [
                  _c("div", { staticClass: "status" }, [
                    _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 3")])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "li" }, [
                  _c("div", { staticClass: "status" }, [
                    _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 4")])
                  ])
                ])
              ]
            )
          ])
        : _c("div", { staticClass: "div" }, [
            _c(
              "ul",
              { staticClass: "timeline mt-5", attrs: { id: "timeline" } },
              [
                _c("li", { staticClass: "li complete" }, [
                  _c("div", { staticClass: "status" }, [
                    _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 1")])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "li" }, [
                  _c("div", { staticClass: "status" }, [
                    _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 2")])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "li" }, [
                  _c("div", { staticClass: "status" }, [
                    _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 3")])
                  ])
                ])
              ]
            )
          ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col md:w-1/2 w-full mt-5" },
          [
            _c("vs-input", {
              staticClass: "w-full",
              attrs: { label: "Nombre Completo del Paciente" },
              model: {
                value: _vm.nombres,
                callback: function($$v) {
                  _vm.nombres = $$v
                },
                expression: "nombres"
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
                    value:
                      _vm.nombres === "" ||
                      (_vm.nombres === "" && _vm.actiErr == true),
                    expression:
                      "nombres === '' || (nombres === '' && actiErr == true)"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [
                _vm._v(
                  "\n                    Este campo es\n                    requerido.\n                "
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col md:w-1/2 w-full mt-5" },
          [
            _c("vs-input", {
              staticClass: "w-full",
              attrs: { label: "Teléfono", type: "number" },
              model: {
                value: _vm.telefono,
                callback: function($$v) {
                  _vm.telefono = $$v
                },
                expression: "telefono"
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
                    value:
                      _vm.telefono === "" ||
                      (_vm.telefono === "" && _vm.actiErr1 == true),
                    expression:
                      "telefono === '' || (telefono === '' && actiErr1 == true)"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [
                _vm._v(
                  "\n                    Este campo es\n                    requerido.\n                "
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col md:w-1/2 w-full mt-5" },
          [
            _c(
              "vs-checkbox",
              {
                model: {
                  value: _vm.call_center,
                  callback: function($$v) {
                    _vm.call_center = $$v
                  },
                  expression: "call_center"
                }
              },
              [
                _vm._v(
                  "El paciente autoriza que le llamen para que le envíen su\n                    medicamento."
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c("div", { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/2 mb-base" }),
        _vm._v(" "),
        _c("div", { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/2 mb-base" }, [
          _c(
            "div",
            { attrs: { align: "right" } },
            [
              _c(
                "vs-button",
                {
                  staticClass: "mt-5",
                  attrs: { color: "primary", type: "filled" },
                  on: { click: _vm.formSubmitted }
                },
                [_vm._v("Siguiente\n                    ")]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/nuevoPaciente.vue?vue&type=template&id=0f3976ba&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/nuevoPaciente.vue?vue&type=template&id=0f3976ba& ***!
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
    { attrs: { id: "extra-component-form-wizard-demo" } },
    [_c("form-wizard-validation")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/FormWizardValidation.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/pages/FormWizardValidation.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormWizardValidation_vue_vue_type_template_id_e02b7086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormWizardValidation.vue?vue&type=template&id=e02b7086& */ "./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=template&id=e02b7086&");
/* harmony import */ var _FormWizardValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormWizardValidation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FormWizardValidation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormWizardValidation.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FormWizardValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormWizardValidation_vue_vue_type_template_id_e02b7086___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormWizardValidation_vue_vue_type_template_id_e02b7086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/FormWizardValidation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizardValidation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizardValidation.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=template&id=e02b7086&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=template&id=e02b7086& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_template_id_e02b7086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizardValidation.vue?vue&type=template&id=e02b7086& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=template&id=e02b7086&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_template_id_e02b7086___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation_vue_vue_type_template_id_e02b7086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/nuevoPaciente.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/nuevoPaciente.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuevoPaciente_vue_vue_type_template_id_0f3976ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuevoPaciente.vue?vue&type=template&id=0f3976ba& */ "./resources/js/src/views/pages/nuevoPaciente.vue?vue&type=template&id=0f3976ba&");
/* harmony import */ var _nuevoPaciente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuevoPaciente.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/nuevoPaciente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nuevoPaciente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nuevoPaciente_vue_vue_type_template_id_0f3976ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nuevoPaciente_vue_vue_type_template_id_0f3976ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/nuevoPaciente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/nuevoPaciente.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/nuevoPaciente.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuevoPaciente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./nuevoPaciente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/nuevoPaciente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuevoPaciente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/nuevoPaciente.vue?vue&type=template&id=0f3976ba&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/nuevoPaciente.vue?vue&type=template&id=0f3976ba& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nuevoPaciente_vue_vue_type_template_id_0f3976ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./nuevoPaciente.vue?vue&type=template&id=0f3976ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/nuevoPaciente.vue?vue&type=template&id=0f3976ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nuevoPaciente_vue_vue_type_template_id_0f3976ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nuevoPaciente_vue_vue_type_template_id_0f3976ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);