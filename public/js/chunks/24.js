(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      nombre: null,
      id: null,
      idu: null,
      activado: false,
      popupActive2: false
    };
  },
  methods: {
    getCategoria: function getCategoria() {
      var _this = this;

      this.openLoading();
      this.id = this.$route.params.categoryId;
      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getCategory/" + this.id,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        if (Response.data.length == 0) {
          _this.activeLoading = false;

          _this.$vs.loading.close();

          _this.$vs.notify({
            title: "Atención",
            text: "Categoría no encontrada.",
            color: "warning"
          });

          _this.$router.push("/listadoCategorias");
        } else {
          _this.nombre = Response.data[0].name;
          _this.idu = Response.data[0].user_id;
          _this.activeLoading = false;

          _this.$vs.loading.close();
        }
      }).catch(function (err) {
        _this.activeLoading = false;

        _this.$vs.loading.close();

        _this.$vs.notify({
          title: "Precaución",
          text: "Categoría no encontrada.",
          color: "warning"
        });

        _this.$router.push("/listadoCategorias");
      });
    },
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    onUpdate: function onUpdate() {
      var _this2 = this;

      this.popupActive2 = false;
      this.openLoading();
      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "put",
        url: "http://127.0.0.1:8000/api/putCategory",
        data: JSON.stringify({
          id: this.id,
          name: this.nombre,
          user_id: this.idu
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this2.activeLoading = false;

        _this2.$vs.loading.close();

        _this2.$router.push("/listadoCategorias");

        _this2.$vs.notify({
          title: "Actualizado",
          text: "Categoría actualizada exitosamente.",
          color: "success"
        });
      }).catch(function (err) {
        _this2.activeLoading = false;

        _this2.$vs.loading.close();

        activado = true; //console.log(err);
      });
    }
  },
  created: function created() {
    this.getCategoria();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=template&id=59f20a22&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=template&id=59f20a22& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "vs-popup",
        {
          attrs: { title: "Actualizar Categoría", active: _vm.popupActive2 },
          on: {
            "update:active": function($event) {
              _vm.popupActive2 = $event
            }
          }
        },
        [
          _c("p", [_vm._v("¿Está seguro de actualizar esta información?")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "filled" },
              on: { click: _vm.onUpdate }
            },
            [_vm._v("Actualizar")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { color: "danger", type: "filled" },
              on: {
                click: function($event) {
                  _vm.popupActive2 = false
                }
              }
            },
            [_vm._v("Cancelar")]
          )
        ],
        1
      ),
      _vm._v(" "),
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
                      _vm.popupActive2 = true
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
                              color: "warning"
                            },
                            on: {
                              click: function($event) {
                                _vm.popupActive2 = true
                              }
                            }
                          },
                          [_vm._v("Guardar")]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            staticClass: "mb-2",
                            attrs: { color: "danger", type: "border" },
                            on: {
                              click: function($event) {
                                return _vm.getCategoria()
                              }
                            }
                          },
                          [_vm._v("Resetear")]
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
              _c("h3", [_vm._v("Edita la categoría del medicamentos ...")]),
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/admin/categories/EditarCategoria.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/EditarCategoria.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditarCategoria_vue_vue_type_template_id_59f20a22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditarCategoria.vue?vue&type=template&id=59f20a22& */ "./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=template&id=59f20a22&");
/* harmony import */ var _EditarCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditarCategoria.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditarCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditarCategoria_vue_vue_type_template_id_59f20a22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditarCategoria_vue_vue_type_template_id_59f20a22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/categories/EditarCategoria.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditarCategoria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCategoria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=template&id=59f20a22&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=template&id=59f20a22& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCategoria_vue_vue_type_template_id_59f20a22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditarCategoria.vue?vue&type=template&id=59f20a22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/categories/EditarCategoria.vue?vue&type=template&id=59f20a22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCategoria_vue_vue_type_template_id_59f20a22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarCategoria_vue_vue_type_template_id_59f20a22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);