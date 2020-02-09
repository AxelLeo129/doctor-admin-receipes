(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/FormWizardValidation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      nombres: null,
      telefono: null,
      fecha: "",
      actiErr: false,
      actiErr1: false
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
        dateIssue: "",
        medicines: [],
        dispensing: [],
        medicamentos: []
      };
      localStorage.setItem("nuevaRecetaData", JSON.stringify(nuevaRecetaData));
    },
    getDate: function getDate() {
      var f = new Date();
      this.fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    },
    formSubmitted: function formSubmitted() {
      if (this.nombres == null || this.nombres == "") {
        this.actiErr = true;
        this.nombres = "";
      } else if (this.telefono == null || this.telefono == "") {
        this.actiErr1 = true;
        this.telefono = "";
      } else {
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
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"]
  },
  created: function created() {
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FormWizardValidation: _FormWizardValidation_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

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
    _c(
      "div",
      { staticClass: "mt-5" },
      [
        _c("div", { attrs: { align: "center" } }, [
          _c("h4", [_vm._v("Paso")]),
          _vm._v(" "),
          _c("h5", [_c("strong", [_vm._v("1")]), _vm._v(" ... 2 ... 3 ... 4")])
        ]),
        _vm._v(" "),
        _c(
          "form-wizard",
          {
            attrs: {
              color: "rgba(var(--vs-primary), 1)",
              title: null,
              subtitle: null,
              finishButtonText: "Siguiente"
            },
            on: { "on-complete": _vm.formSubmitted }
          },
          [
            _c(
              "tab-content",
              {
                staticClass: "mb-5",
                attrs: { title: "Paso 1", icon: "feather icon-home" }
              },
              [
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
                        [_vm._v("Este campo es requerido.")]
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
                        [_vm._v("Este campo es requerido.")]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ],
          1
        )
      ],
      1
    )
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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