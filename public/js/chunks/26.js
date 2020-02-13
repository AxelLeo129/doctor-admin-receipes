(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
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
<<<<<<< HEAD
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
=======
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
<<<<<<< HEAD
      errors: {
        name: "Este campo es requerido.",
        noCollegiate: "Este campo es requerido.",
        email: "Este campo es requerido.",
        email1: "Ingrese un email válido.",
        password: "Este campo es requerido.",
        password1: "Este campo debe tener al menos 8 caracteres.",
        c_password: "Este campo es requerido.",
        c_password1: "Este campo debe tener al menos 8 caracteres.",
        c_password2: "La confirmación de contraseña no coincide."
      },
      bol: null,
      bol1: null,
      bol2: null,
      bol3: null,
      name: null,
      noCollegiate: null,
      email: null,
      password: null,
      confirmPassword: null,
      activado: false,
      activado1: false,
      message: "",
      checkbox_remember_me: false
    };
  },
  methods: {
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    registrar: function registrar() {
      var _this = this;

      this.openLoading();
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "post",
        url: "http://127.0.0.1:8000/api/register",
        data: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password,
          userName: this.name,
          noCollegiate: this.noCollegiate,
          c_password: this.confirmPassword,
          rol: "2",
          id_visitador: 1
        }),
=======
      popupActive3: false,
      medicamentos: [],
      buscar: ""
    };
  },
  methods: {
    edit: function edit(id) {
      this.$router.push("/editarProducto/" + id);
    },
    getData: function getData() {
      var _this = this;

      var token = localStorage.getItem("tu");
      var id = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getProducts",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        Response.data.forEach(function (element) {
          if (element.user_id == id) {
            _this.medicamentos.push(element);
          }
        });
      }).catch(function (err) {
        console.log(err);
      });
    },
    deleteProduct: function deleteProduct(id) {
      var _this2 = this;

      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/deleteProduct/" + id,
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
        headers: {
          "content-type": "application/json"
        }
<<<<<<< HEAD
      }).then(function (response) {
        _this.name = null;
        _this.email = null;
        _this.password = null;
        _this.confirmPassword = null;
        _this.userName = null;
        _this.bol = null;
        _this.bol1 = null;
        _this.bol2 = null;
        _this.bol3 = null;
        _this.activeLoading = false;

        _this.$vs.loading.close();

        _this.activado = true;
      }).catch(function (response) {
        _this.message = "Ya existe un usuario con este email.";
        _this.activeLoading = false;

        _this.$vs.loading.close();

        _this.activado1 = true;
        console.log(response);
      });
    }
  },
  watch: {
    email: function email(val, oldVal) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.bol = re.test(String(val).toLowerCase());
    },
    password: function password(val, oldVal) {
      if (val.length < 8) {
        this.bol1 = false;
      } else {
        this.bol1 = true;
      }
    },
    confirmPassword: function confirmPassword(val, oldVal) {
      if (val.length < 8) {
        this.bol2 = false;
      } else {
        this.bol2 = true;
      }

      if (val == this.password) {
        this.bol3 = true;
      } else {
        this.bol3 = false;
      }
=======
      }).then(function (Response) {
        _this2.getData();

        _this2.popupActive3 = false;

        _this2.$vs.notify({
          title: "Eliminado",
          text: "Producto eliminado exitosamente.",
          color: "success"
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  },
  created: function created() {
    this.getData();
  },
  computed: {
    searchPacientes: function searchPacientes() {
      var result = this.medicamentos;

      if (!this.buscar) {
        return result;
      }

      var texto = this.buscar.toLowerCase();

      var filter = function filter(event) {
        return event.name.toLowerCase().includes(texto) || event.laboratory.toLowerCase().includes(texto) || event.precentation.toLowerCase().includes(texto) || event.quantity.toLowerCase().includes(texto);
      };

      return result.filter(filter);
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38& ***!
  \****************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162& ***!
  \************************************************************************************************************************************************************************************************************************/
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
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
<<<<<<< HEAD
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
=======
  return _c("div", [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col md:w-1/2 w-full" },
        [
          _c(
            "vx-input-group",
            { staticClass: "mb-base" },
            [
              _c("vs-input", {
                attrs: {
                  placeholder: "Nombre / Laboratorio / Precentación / Cantidad"
                },
                model: {
                  value: _vm.buscar,
                  callback: function($$v) {
                    _vm.buscar = $$v
                  },
                  expression: "buscar"
                }
              }),
              _vm._v(" "),
              _c("template", { slot: "append" }, [
                _c("div", { staticClass: "append-text bg-primary" }, [
                  _c("span", [_c("vs-icon", { attrs: { icon: "search" } })], 1)
                ])
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "vx-col md:w-1/2 w-full" })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full" },
        [
          _c("vx-card", { attrs: { title: "Top más vendidos" } }, [
            _c(
              "div",
              {
                staticClass: "mt-4",
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
                attrs: { slot: "no-body" },
                slot: "no-body"
              },
              [
<<<<<<< HEAD
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
                            "vs-alert",
                            {
                              attrs: {
                                color: "success",
                                title: "Success",
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
                            [
                              _vm._v(
                                "Médico registrado, por favor inicie sesión."
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-alert",
                            {
                              attrs: {
                                color: "danger",
                                title: "Error",
                                active: _vm.activado1,
                                closable: "",
                                "icon-pack": "feather",
                                "close-icon": "icon-x"
                              },
                              on: {
                                "update:active": function($event) {
                                  _vm.activado1 = $event
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.message))]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "clearfix" },
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: {
                                  "data-vv-validate-on": "blur",
                                  label: "Nombres y Apellidos",
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
                              _vm.name === ""
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-sm" },
                                    [_vm._v(_vm._s(_vm.errors.name))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("vs-input", {
                                staticClass: "w-full mt-6",
                                attrs: {
                                  "data-vv-validate-on": "blur",
                                  name: "email",
                                  type: "email",
                                  label: "Email",
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
                              _vm.email === ""
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-sm" },
                                    [_vm._v(_vm._s(_vm.errors.email))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.bol === false && _vm.email !== ""
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-sm" },
                                    [_vm._v(_vm._s(_vm.errors.email1))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: {
                                  "data-vv-validate-on": "blur",
                                  label: "No.Colegiado",
                                  name: "noCollegiate",
                                  type: "number",
                                  placeholder: "No.Colegiado"
                                },
                                model: {
                                  value: _vm.noCollegiate,
                                  callback: function($$v) {
                                    _vm.noCollegiate = $$v
                                  },
                                  expression: "noCollegiate"
                                }
                              }),
                              _vm._v(" "),
                              _vm.noCollegiate === ""
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-sm" },
                                    [_vm._v(_vm._s(_vm.errors.noCollegiate))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("vs-input", {
                                ref: "password",
                                staticClass: "w-full mt-6",
                                attrs: {
                                  type: "password",
                                  "data-vv-validate-on": "blur",
                                  name: "password",
                                  label: "Contraseña",
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
                              _vm.password === ""
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-sm" },
                                    [_vm._v(_vm._s(_vm.errors.password))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.bol1 === false && _vm.password !== ""
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-sm" },
                                    [_vm._v(_vm._s(_vm.errors.password1))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("vs-input", {
                                staticClass: "w-full mt-6",
                                attrs: {
                                  type: "password",
                                  "data-vv-validate-on": "blur",
                                  "data-vv-as": "password",
                                  name: "confirm_password",
                                  label: "Confirmar Contraseña",
                                  placeholder: "Confirmar Contraseña"
                                },
                                model: {
                                  value: _vm.confirmPassword,
                                  callback: function($$v) {
                                    _vm.confirmPassword = $$v
                                  },
                                  expression: "confirmPassword"
                                }
                              }),
                              _vm._v(" "),
                              _vm.confirmPassword === ""
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-sm" },
                                    [_vm._v(_vm._s(_vm.errors.c_password))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.bol2 === false && _vm.confirmPassword !== ""
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-sm" },
                                    [_vm._v(_vm._s(_vm.errors.c_password1))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.bol3 === false &&
                              _vm.confirmPassword !== "" &&
                              _vm.bol2 == true
                                ? _c(
                                    "span",
                                    { staticClass: "text-danger text-sm" },
                                    [_vm._v(_vm._s(_vm.errors.c_password2))]
                                  )
                                : _vm._e(),
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
=======
                _c(
                  "vs-table",
                  {
                    staticClass: "table-dark-inverted",
                    attrs: { data: _vm.dispatchedOrders }
                  },
                  [
                    _c(
                      "template",
                      { slot: "thead" },
                      [
                        _c("vs-th", [_vm._v("NUMERO.")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("IMAGEN")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("NOMBRE")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("LABORATORIO")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("PRECENTACION")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("CANTIDAD")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("ACCIONES")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.searchPacientes, function(item, index) {
                      return _c(
                        "vs-tr",
                        { key: item.id },
                        [
                          _c("vs-td", [
                            _c("span", {
                              domProps: {
                                textContent: _vm._s("# " + (index + 1))
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("ul", { staticClass: "users-liked user-list" }, [
                              _c(
                                "li",
                                [
                                  _c(
                                    "vx-tooltip",
                                    { attrs: { position: "bottom" } },
                                    [
                                      _c("vs-avatar", {
                                        staticClass:
                                          "border-2 border-white border-solid -m-1",
                                        attrs: {
                                          size: "30px",
                                          src:
                                            "data:image/png;base64," +
                                            item.image
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("span", {
                              domProps: { textContent: _vm._s(item.name) }
                            })
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("span", {
                              domProps: { textContent: _vm._s(item.laboratory) }
                            })
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("span", {
                              domProps: {
                                textContent: _vm._s(item.precentation)
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("span", {
                              domProps: { textContent: _vm._s(item.quantity) }
                            })
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c(
                              "span",
                              [
                                _c(
                                  "vs-button",
                                  {
                                    attrs: {
                                      color: "warning",
                                      type: "filled",
                                      size: "small"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.edit(item.id)
                                      }
                                    }
                                  },
                                  [_vm._v("Editar")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-button",
                                  {
                                    attrs: {
                                      color: "danger",
                                      type: "filled",
                                      size: "small"
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.popupActive3 = true
                                      }
                                    }
                                  },
                                  [_vm._v("Eliminar")]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-popup",
                            {
                              attrs: {
                                title: "Eliminar Producto",
                                active: _vm.popupActive3
                              },
                              on: {
                                "update:active": function($event) {
                                  _vm.popupActive3 = $event
                                }
                              }
                            },
                            [
                              _c("p", [
                                _vm._v(
                                  "¿Está seguro de eliminar este producto?"
                                )
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "vs-button",
                                {
                                  attrs: { color: "primary", type: "filled" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteProduct(item.id)
                                    }
                                  }
                                },
                                [_vm._v("Aceptar")]
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-button",
                                {
<<<<<<< HEAD
                                  staticClass: "float-right mt-6",
                                  attrs: {
                                    disabled:
                                      _vm.name == null ||
                                      _vm.name == "" ||
                                      _vm.noCollegiate == null ||
                                      _vm.noCollegiate == "" ||
                                      _vm.email == "" ||
                                      _vm.email == null ||
                                      _vm.bol == false ||
                                      _vm.bol == null ||
                                      _vm.password == null ||
                                      _vm.password == "" ||
                                      _vm.bol1 == false ||
                                      _vm.bol1 == null ||
                                      _vm.confirmPassword == "" ||
                                      _vm.confirmPassword == null ||
                                      _vm.bol2 == false ||
                                      _vm.bol2 == null ||
                                      _vm.bol3 == false ||
                                      _vm.bol3 == null
                                  },
                                  on: { click: _vm.registrar }
                                },
                                [_vm._v("Registrar")]
=======
                                  attrs: { color: "danger", type: "filled" },
                                  on: {
                                    click: function($event) {
                                      _vm.popupActive3 = false
                                    }
                                  }
                                },
                                [_vm._v("Cancelar")]
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
<<<<<<< HEAD
                    ]
                  )
                ])
              ]
=======
                    })
                  ],
                  2
                )
              ],
              1
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
            )
          ])
        ],
        1
      )
<<<<<<< HEAD
    ]
  )
=======
    ])
  ])
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
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
=======
/***/ "./resources/js/src/views/admin/ListadoProductos.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/admin/ListadoProductos.vue ***!
  \***********************************************************/
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=09126b38& */ "./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoProductos.vue?vue&type=template&id=5f53d162& */ "./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162&");
/* harmony import */ var _ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoProductos.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js&");
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/pages/Register.vue"
=======
component.options.__file = "resources/js/src/views/admin/ListadoProductos.vue"
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
=======
/***/ "./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38& ***!
  \**********************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoProductos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162& ***!
  \******************************************************************************************/
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=09126b38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoProductos.vue?vue&type=template&id=5f53d162& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/ListadoProductos.vue?vue&type=template&id=5f53d162&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoProductos_vue_vue_type_template_id_5f53d162___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 1e3980de9ea1b7aab1a4d25673a91d07c1c1079c



/***/ })

}]);