(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/FormWizardValidation1.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/FormWizardValidation1.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ "./node_modules/flatpickr/dist/flatpickr.min.css");
/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flatpickr/dist/l10n/es.js */ "./node_modules/flatpickr/dist/l10n/es.js");
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      symptom: null,
      diagnostics: null,
      observations: null,
      nextAppointment: null,
      actiErr: false,
      actiErr1: false,
      actiErr2: false,
      actiErr3: false,
      recetasData: []
    };
  },
  methods: {
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    formSubmitted: function formSubmitted() {
      var _this = this;

      if (this.symptom == null || this.symptom == "") {
        this.actiErr = true;
        this.symptom = "";
      } else if (this.diagnostics == null || this.diagnostics == "") {
        this.actiErr1 = true;
        this.diagnostics = "";
      } else if (this.observations == null || this.observations == "") {
        this.actiErr2 = true;
        this.observations = "";
      } else if (this.nextAppointment == null || this.nextAppointment == "") {
        this.actiErr3 = true;
        this.nextAppointment = "";
      } else {
        this.openLoading();
        var token = localStorage.getItem("tu");
        this.nuevaRecetaData = JSON.parse(localStorage.getItem("nuevaRecetaData"));
        this.recetasData.push({
          name: this.nuevaRecetaData.name,
          phone: this.nuevaRecetaData.phone,
          doctor_id: this.nuevaRecetaData.doctor_id,
          symptom: this.symptom,
          diagnostics: this.diagnostics,
          observations: this.observations,
          nextAppointment: this.nextAppointment,
          status: this.nuevaRecetaData.status,
          dateIssue: this.nuevaRecetaData.dateIssue,
          medicines: this.nuevaRecetaData.medicines,
          dispensing: this.nuevaRecetaData.dispensing,
          medicamentos: this.nuevaRecetaData.medicamentos
        });
        localStorage.setItem("recetasData", JSON.stringify(this.recetasData));
        axios__WEBPACK_IMPORTED_MODULE_6___default()({
          method: "post",
          url: "http://127.0.0.1:8000/api/postRecetas",
          data: JSON.stringify({
            name: this.nuevaRecetaData.name,
            phone: this.nuevaRecetaData.phone,
            doctor_id: this.nuevaRecetaData.doctor_id,
            symptom: this.symptom,
            diagnostics: this.diagnostics,
            observations: this.observations,
            nextAppointment: this.nextAppointment,
            status: this.nuevaRecetaData.status,
            dateIssue: this.nuevaRecetaData.dateIssue
          }),
          headers: {
            authorization: "Bearer " + token,
            "content-type": "application/json"
          }
        }).then(function (Response) {
          _this.Resid = Response.data.mess;
          axios__WEBPACK_IMPORTED_MODULE_6___default()({
            method: "post",
            url: "http://127.0.0.1:8000/api/postReceProd",
            data: JSON.stringify({
              medicines: _this.nuevaRecetaData.medicines,
              dispensing: _this.nuevaRecetaData.dispensing,
              recipe_id: _this.Resid
            }),
            headers: {
              authorization: "Bearer " + token,
              "content-type": "application/json"
            }
          }).then(function (Response) {
            _this.activeLoading = false;

            _this.$vs.loading.close();

            _this.$router.push("/recetaFinal");

            _this.$vs.notify({
              title: "Satisfactorio",
              text: "Receta creada exitosamente.",
              color: "success"
            });
          }).catch(function (err) {
            _this.activeLoading = false;

            _this.$vs.loading.close();

            _this.$vs.notify({
              title: "Error",
              text: "No se puedo crear la receta.",
              color: "danger"
            }); //console.log(err);

          });
        }).catch(function (err) {
          _this.activeLoading = false;

          _this.$vs.loading.close();

          _this.$vs.notify({
            title: "Error",
            text: "No se puedo crear la receta.",
            color: "danger"
          }); //console.log(err);

        });
      }
    }
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/paso4.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/paso4.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormWizardValidation1_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormWizardValidation1.vue */ "./resources/js/src/views/pages/FormWizardValidation1.vue");
//
//
//
//
//
//
//
//
//
//
//
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
    FormWizardValidation1: _FormWizardValidation1_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/FormWizardValidation1.vue?vue&type=template&id=6d6841c4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/FormWizardValidation1.vue?vue&type=template&id=6d6841c4& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    { attrs: { title: "Registro de la Consulta", "code-toggler": "" } },
    [
      _c("p", [
        _vm._v(
          "Ingrese información sobre los síntomas, diagnóstico y cualquier otra información de utilizadad para el seguimiento de su paciente."
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "form-wizard",
            {
              attrs: {
                color: "rgba(var(--vs-primary), 1)",
                title: null,
                subtitle: null,
                finishButtonText: "Finalizar"
              },
              on: { "on-complete": _vm.formSubmitted }
            },
            [
              _c(
                "tab-content",
                {
                  staticClass: "mb-5",
                  attrs: { title: "Paso 4", icon: "feather icon-home" }
                },
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c("vs-textarea", {
                          staticClass: "w-full",
                          attrs: { label: "Síntomas" },
                          model: {
                            value: _vm.symptom,
                            callback: function($$v) {
                              _vm.symptom = $$v
                            },
                            expression: "symptom"
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
                                  _vm.symptom === "" ||
                                  (_vm.symptom === "" && _vm.actiErr == true),
                                expression:
                                  "symptom === '' || (symptom === '' && actiErr == true)"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v("Este campo es requerido.")]
                        ),
                        _vm._v(" "),
                        _c("vs-textarea", {
                          staticClass: "w-full",
                          attrs: { label: "Diagnóstico" },
                          model: {
                            value: _vm.diagnostics,
                            callback: function($$v) {
                              _vm.diagnostics = $$v
                            },
                            expression: "diagnostics"
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
                                  _vm.diagnostics === "" ||
                                  (_vm.diagnostics === "" &&
                                    _vm.actiErr1 == true),
                                expression:
                                  "diagnostics === '' || (diagnostics === '' && actiErr1 == true)"
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
                                  _vm.observations === "" ||
                                  (_vm.observations === "" &&
                                    _vm.actiErr2 == true),
                                expression:
                                  "observations === '' || (observations === '' && actiErr2 == true)"
                              }
                            ],
                            staticClass: "text-danger text-sm"
                          },
                          [_vm._v("Este campo es requerido.")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-4" },
                          [
                            _c("label", { staticClass: "text-sm" }, [
                              _vm._v("Próxima Cita")
                            ]),
                            _vm._v(" "),
                            _c("flat-pickr", {
                              staticClass: "w-full",
                              attrs: {
                                config: {
                                  dateFormat: "d F Y",
                                  minDate: new Date()
                                },
                                name: "nextAppointment"
                              },
                              model: {
                                value: _vm.nextAppointment,
                                callback: function($$v) {
                                  _vm.nextAppointment = $$v
                                },
                                expression: "nextAppointment"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  _vm.nextAppointment === "" ||
                                  (_vm.nextAppointment === "" &&
                                    _vm.actiErr3 == true),
                                expression:
                                  "nextAppointment === '' || (nextAppointment === '' && actiErr3 == true)"
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
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/paso4.vue?vue&type=template&id=5020daa2&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/paso4.vue?vue&type=template&id=5020daa2& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    [_c("form-wizard-validation1")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/FormWizardValidation1.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/pages/FormWizardValidation1.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormWizardValidation1_vue_vue_type_template_id_6d6841c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormWizardValidation1.vue?vue&type=template&id=6d6841c4& */ "./resources/js/src/views/pages/FormWizardValidation1.vue?vue&type=template&id=6d6841c4&");
/* harmony import */ var _FormWizardValidation1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormWizardValidation1.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/FormWizardValidation1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormWizardValidation1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormWizardValidation1_vue_vue_type_template_id_6d6841c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormWizardValidation1_vue_vue_type_template_id_6d6841c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/FormWizardValidation1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/FormWizardValidation1.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/FormWizardValidation1.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizardValidation1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/FormWizardValidation1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/FormWizardValidation1.vue?vue&type=template&id=6d6841c4&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/FormWizardValidation1.vue?vue&type=template&id=6d6841c4& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation1_vue_vue_type_template_id_6d6841c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormWizardValidation1.vue?vue&type=template&id=6d6841c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/FormWizardValidation1.vue?vue&type=template&id=6d6841c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation1_vue_vue_type_template_id_6d6841c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormWizardValidation1_vue_vue_type_template_id_6d6841c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/paso4.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/pages/paso4.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paso4_vue_vue_type_template_id_5020daa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paso4.vue?vue&type=template&id=5020daa2& */ "./resources/js/src/views/pages/paso4.vue?vue&type=template&id=5020daa2&");
/* harmony import */ var _paso4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paso4.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/paso4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _paso4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paso4_vue_vue_type_template_id_5020daa2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _paso4_vue_vue_type_template_id_5020daa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/paso4.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/paso4.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/paso4.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paso4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./paso4.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/paso4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paso4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/paso4.vue?vue&type=template&id=5020daa2&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/paso4.vue?vue&type=template&id=5020daa2& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paso4_vue_vue_type_template_id_5020daa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./paso4.vue?vue&type=template&id=5020daa2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/paso4.vue?vue&type=template&id=5020daa2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paso4_vue_vue_type_template_id_5020daa2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paso4_vue_vue_type_template_id_5020daa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);