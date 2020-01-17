(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      name: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      info: "",
      checkbox_remember_me: false,
      params: {
        name: "",
        email: "",
        password: "",
        c_password: ""
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://www.instagram.com/axelleo129/?__a=1").then(function (response) {
      return _this.info = response;
    }).catch(function (err) {
      return console.log(err);
    });
  },
  methods: {
    registrar: function registrar() {
      //const queryString = require('query-string');
      this.params.name = this.name;
      this.params.email = this.email;
      this.params.c_password = this.password;
      this.params.password = this.password; //let parametros = queryString.stringify(this.params);

      var config = {
        headers: {
          "Content-Type": "application/application/x-www-form-urlencoded"
        }
      };
      /*axios
                    .post("http://127.0.0.1:8000/api/register", {
                        name: 'Axel',
                        email: 'axelleonardon129@gmail.com',
                        password: '123',
                        c_password: '123'
                    }, config)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => console.log(error));*/

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "post",
        url: "http://127.0.0.1:8000/api/register",
        data: qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
          name: "Axel",
          email: "axelleonardon129@gmail.coms",
          password: "123",
          c_password: "123"
        }),
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8"
        }
      }).then(function (response) {
        console.log(response);
      });
    },
    mostrar: function mostrar() {
      var hola;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/list").then(function (response) {
        hola = response.data;
        console.log(hola);
      });
    }
    /*registrar() {
              let params = {
                  name = this.name,
                  userName = this.userName,
                  email = this.email,
                  password = this.password
              }  
              console.log(params);
            }*/

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    },
    [
      _c(
        "div",
        {
          staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"
        },
        [
          _c("vx-card", [
            _c(
              "div",
              {
                staticClass: "full-page-bg-color",
                attrs: { slot: "no-body" },
                slot: "no-body"
              },
              [
                _c("div", { staticClass: "vx-row no-gutter" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"
                    },
                    [
                      _c("img", {
                        staticClass: "mx-auto",
                        attrs: {
                          src: __webpack_require__(/*! @assets/images/pages/register.jpg */ "./resources/assets/images/pages/register.jpg"),
                          alt: "register"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "px-8 pt-8 register-tabs-container",
                          staticStyle: { "padding-bottom": "2rem" }
                        },
                        [
                          _c("div", { staticClass: "vx-card__title mb-4" }, [
                            _c("h4", { staticClass: "mb-4" }, [
                              _vm._v("Crea una cuenta")
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v("Llena los campos para obtener tu cuenta.")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "clearfix" },
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: {
                                  "data-vv-validate-on": "blur",
                                  "label-placeholder": "Nombres y Apellidos",
                                  name: "name",
                                  placeholder: "Nombres y Apellidos"
                                },
                                model: {
                                  value: _vm.name,
                                  callback: function($$v) {
                                    _vm.name = $$v
                                  },
                                  expression: "name"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-input", {
                                staticClass: "w-full mt-6",
                                attrs: {
                                  "data-vv-validate-on": "blur",
                                  name: "email",
                                  type: "email",
                                  "label-placeholder": "Email",
                                  placeholder: "Email"
                                },
                                model: {
                                  value: _vm.email,
                                  callback: function($$v) {
                                    _vm.email = $$v
                                  },
                                  expression: "email"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: {
                                  "data-vv-validate-on": "blur",
                                  "label-placeholder": "Nombre de Usuario",
                                  name: "userName",
                                  placeholder: "Nombre de Usuario"
                                },
                                model: {
                                  value: _vm.userName,
                                  callback: function($$v) {
                                    _vm.userName = $$v
                                  },
                                  expression: "userName"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-input", {
                                ref: "password",
                                staticClass: "w-full mt-6",
                                attrs: {
                                  type: "password",
                                  "data-vv-validate-on": "blur",
                                  name: "password",
                                  "label-placeholder": "Contraseña",
                                  placeholder: "Contraseña"
                                },
                                model: {
                                  value: _vm.password,
                                  callback: function($$v) {
                                    _vm.password = $$v
                                  },
                                  expression: "password"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-input", {
                                staticClass: "w-full mt-6",
                                attrs: {
                                  type: "password",
                                  "data-vv-validate-on": "blur",
                                  "data-vv-as": "password",
                                  name: "confirm_password",
                                  "label-placeholder": "Confirmar Contraseña",
                                  placeholder: "Confirmar Contraseña"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-checkbox", { staticClass: "mt-6" }, [
                                _vm._v("Acepto los términos & condiciones.")
                              ]),
                              _vm._v(" "),
                              _c(
                                "vs-button",
                                {
                                  staticClass: "mt-6",
                                  attrs: { type: "border", to: "/" }
                                },
                                [_vm._v("Inicia Sesión")]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-button",
                                {
                                  staticClass: "float-right mt-6",
                                  on: { click: _vm.registrar }
                                },
                                [_vm._v("Registrar")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  )
                ])
              ]
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/pages/register.jpg":
/*!****************************************************!*\
  !*** ./resources/assets/images/pages/register.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/register.jpg?cfd9ef099bfc1f99c6f2970ae05a6a4a";

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=09126b38& */ "./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=09126b38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);