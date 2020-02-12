(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      nombre: null,
      activado: false
    };
  },
  methods: {
    cancel: function cancel() {
      this.$router.push("/listadoCategorias");
    },
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    onSubmit: function onSubmit() {
      var _this = this;

      this.openLoading();
      var token = localStorage.getItem("tu");
      var id = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "post",
        url: "http://127.0.0.1:8000/api/postCategory",
        data: JSON.stringify({
          name: this.nombre,
          user_id: id
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this.activeLoading = false;

        _this.$vs.loading.close();

        _this.$router.push("/listadoCategorias");

        _this.$vs.notify({
          title: "Agregado",
          text: "Categoría creada exitosamente.",
          color: "success"
        });
      }).catch(function (err) {
        _this.activeLoading = false;

        _this.$vs.loading.close();

        activado = true; //console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=template&id=37f3e9a3&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=template&id=37f3e9a3& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      "div",
      { staticClass: "vx-row" },
      [
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
                    return _vm.onSubmit()
                  }
                }
              },
              [
                _c("div", { staticClass: "vx-row mb-6" }, [
                  _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
                    _c("span", [_vm._v("Nombre")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-2/3 w-full" },
                    [
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
                            color: "success"
                          },
                          on: { click: _vm.onSubmit }
                        },
                        [_vm._v("Guardar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticClass: "mb-2",
                          attrs: { color: "danger", type: "border" },
                          on: { click: _vm.cancel }
                        },
                        [_vm._v("Cancel")]
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
            _c("h3", [_vm._v("Registra la categoría del medicamentos ...")]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nobis quo sunt ducimus minima unde labore dolores saepe qui doloribus numquam, accusantium ad adipisci voluptates velit necessitatibus vel totam dolor?"
              )
            ])
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/admin/categories/NuevaCategoria.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/NuevaCategoria.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NuevaCategoria_vue_vue_type_template_id_37f3e9a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NuevaCategoria.vue?vue&type=template&id=37f3e9a3& */ "./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=template&id=37f3e9a3&");
/* harmony import */ var _NuevaCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NuevaCategoria.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NuevaCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NuevaCategoria_vue_vue_type_template_id_37f3e9a3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NuevaCategoria_vue_vue_type_template_id_37f3e9a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/categories/NuevaCategoria.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevaCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NuevaCategoria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevaCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=template&id=37f3e9a3&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=template&id=37f3e9a3& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevaCategoria_vue_vue_type_template_id_37f3e9a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NuevaCategoria.vue?vue&type=template&id=37f3e9a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/NuevaCategoria.vue?vue&type=template&id=37f3e9a3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevaCategoria_vue_vue_type_template_id_37f3e9a3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NuevaCategoria_vue_vue_type_template_id_37f3e9a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);