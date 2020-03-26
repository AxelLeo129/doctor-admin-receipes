(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/checkOut.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/checkOut.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var ItemListView = function ItemListView() {
  return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./ItemListView.vue */ "./resources/js/src/views/pages/ItemListView.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cardType: true,
      registro: null,
      nextStep: null,
      resid: null,
      recetasData: [],
      nuevaRecetaData: null,
      // TAB 2
      fullName: "",
      mobileNum: "",
      pincode: "",
      houseNum: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
      addressType: 1,
      addressTypeOptions: [{
        text: "Home",
        value: 1
      }, {
        text: "Office",
        value: 2
      }],
      // TAB 3
      paymentMethod: "debit-card",
      cvv: ""
    };
  },
  components: {
    ItemListView: ItemListView
  },
  computed: {
    isInWishList: function isInWishList() {
      var _this = this;

      return function (itemId) {
        return _this.$store.getters["eCommerce/isInWishList"](itemId);
      };
    },
    windowWidth: function windowWidth() {
      return screen.width;
    }
  },
  watch: {
    windowWidth: function windowWidth() {
      this.setSidebarWidth();
    }
  },
  created: function created() {
    this.setSidebarWidth();
    this.openLoading();
    this.registro = localStorage.getItem("regi");
    this.getUser();
    this.getData();
  },
  methods: {
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 992) {
        this.cardType = false;
      } else {
        this.cardType = true;
      }
    },
    agregarmas: function agregarmas() {
      this.$router.push("/agregarProductos");
    },
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    remover: function remover(index) {
      this.nuevaRecetaData.medicamentos.splice(index, 1);
      this.nuevaRecetaData.medicines.splice(index, 1);
      localStorage.setItem("nuevaRecetaData", JSON.stringify(this.nuevaRecetaData));

      if (this.nuevaRecetaData.medicamentos.length <= 0 || this.nuevaRecetaData.medicines.length <= 0) {
        this.$vs.notify({
          title: "Atención",
          text: "Debe de agregar medicamentos.",
          color: "warning",
          time: 4000,
          position: "top-center",
          iconPack: 'feather',
          icon: 'icon-alert-circle'
        });
        this.$router.push("/agregarProductos");
      }
    },
    getData: function getData() {
      this.nuevaRecetaData = JSON.parse(localStorage.getItem("nuevaRecetaData"));
    },
    getUser: function getUser() {
      var _this2 = this;

      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/details",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this2.nextStep = Response.data.success.clinicalRecord;
        _this2.activeLoading = false;

        _this2.$vs.loading.close();
      }).catch(function (err) {
        console.log(err);
        _this2.activeLoading = false;

        _this2.$vs.loading.close();
      });
    },
    generarReceta: function generarReceta() {
      var _this3 = this;

      if (this.nextStep == 0) {
        this.openLoading();
        var token = localStorage.getItem("tu");
        this.nuevaRecetaData = JSON.parse(localStorage.getItem("nuevaRecetaData"));
        this.recetasData.push({
          name: this.nuevaRecetaData.name,
          phone: this.nuevaRecetaData.phone,
          doctor_id: this.nuevaRecetaData.doctor_id,
          symptom: this.nuevaRecetaData.symptom,
          diagnostics: this.nuevaRecetaData.diagnostics,
          observations: this.nuevaRecetaData.observations,
          nextAppointment: this.nuevaRecetaData.nextAppointment,
          status: this.nuevaRecetaData.status,
          call_center: this.nuevaRecetaData.call_center,
          dateIssue: this.nuevaRecetaData.dateIssue,
          medicines: this.nuevaRecetaData.medicines,
          medicamentos: this.nuevaRecetaData.medicamentos
        });
        localStorage.setItem("recetasData", JSON.stringify(this.recetasData));
        axios__WEBPACK_IMPORTED_MODULE_0___default()({
          method: "post",
          url: "http://127.0.0.1:8000/api/postRecetas",
          data: JSON.stringify({
            name: this.nuevaRecetaData.name,
            phone: this.nuevaRecetaData.phone,
            doctor_id: this.nuevaRecetaData.doctor_id,
            symptom: this.nuevaRecetaData.symptom,
            diagnostics: this.nuevaRecetaData.diagnostics,
            observations: this.nuevaRecetaData.observations,
            nextAppointment: this.nuevaRecetaData.nextAppointment,
            status: this.nuevaRecetaData.status,
            call_center: this.nuevaRecetaData.call_center,
            dateIssue: this.nuevaRecetaData.dateIssue
          }),
          headers: {
            authorization: "Bearer " + token,
            "content-type": "application/json"
          }
        }).then(function (Response) {
          _this3.Resid = Response.data.mess;
          axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "post",
            url: "http://127.0.0.1:8000/api/postReceProd",
            data: JSON.stringify({
              medicines: _this3.nuevaRecetaData.medicines,
              dispensing: _this3.nuevaRecetaData.dispensing,
              recipe_id: _this3.Resid
            }),
            headers: {
              authorization: "Bearer " + token,
              "content-type": "application/json"
            }
          }).then(function (Response) {
            _this3.activeLoading = false;

            _this3.$vs.loading.close();

            _this3.$router.push("/recetaFinal");

            _this3.$vs.notify({
              title: "Satisfactorio",
              text: "Receta creada exitosamente.",
              color: "success",
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            });
          }).catch(function (err) {
            _this3.activeLoading = false;

            _this3.$vs.loading.close();

            _this3.$vs.notify({
              title: "Error",
              text: "No se puedo crear la receta.",
              color: "danger",
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            }); //console.log(err);

          });
        }).catch(function (err) {
          _this3.activeLoading = false;

          _this3.$vs.loading.close();

          _this3.$vs.notify({
            title: "Error",
            text: "No se puedo crear la receta.",
            color: "danger",
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          }); //console.log(err);

        });
      } else {
        this.$router.push("/datosPaciente");
      }
    },
    // TAB 1
    removeItemFromCart: function removeItemFromCart(item) {
      this.$store.dispatch("eCommerce/toggleItemInCart", item);
    },
    wishListButtonClicked: function wishListButtonClicked(item) {
      // Toggle in Wish List
      if (this.isInWishList(item.objectID)) this.$router.push("/apps/eCommerce/wish-list").catch(function () {});else {
        this.toggleItemInWishList(item);
        this.removeItemFromCart(item);
      }
    },
    toggleItemInWishList: function toggleItemInWishList(item) {
      this.$store.dispatch("eCommerce/toggleItemInWishList", item);
    },
    updateItemQuantity: function updateItemQuantity(event, index) {
      var itemIndex = Math.abs(index + 1 - this.cartItems.length);
      this.$store.dispatch("eCommerce/updateItemQuantity", {
        quantity: event,
        index: itemIndex
      });
    },
    // TAB 2
    submitNewAddressForm: function submitNewAddressForm() {
      var _this4 = this;

      return new Promise(function () {
        _this4.$validator.validateAll("add-new-address").then(function (result) {
          if (result) {
            // if form have no errors
            _this4.$refs.checkoutWizard.nextTab();
          } else {
            _this4.$vs.notify({
              title: "Error",
              text: "Please enter valid details",
              color: "warning",
              iconPack: "feather",
              icon: "icon-alert-circle"
            });
          }
        });
      });
    },
    // TAB 3
    makePayment: function makePayment() {
      var _this5 = this;

      return new Promise(function () {
        _this5.$validator.validateAll("cvv-form").then(function (result) {
          if (result) {
            // if form have no errors
            _this5.$vs.notify({
              title: "Success",
              text: "Payment received successfully",
              color: "success",
              iconPack: "feather",
              icon: "icon-check"
            });
          } else {
            _this5.$vs.notify({
              title: "Error",
              text: "Please enter valid details",
              color: "warning",
              iconPack: "feather",
              icon: "icon-alert-circle"
            });
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/checkOut.vue?vue&type=style&index=0&id=1f78c41b&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/checkOut.vue?vue&type=style&index=0&id=1f78c41b&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-card[data-v-1f78c41b] {\n  height: 14rem;\n}\n.timeline[data-v-1f78c41b] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.li[data-v-1f78c41b] {\n  transition: all 200ms ease-in;\n}\n.status[data-v-1f78c41b] {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  transition: all 200ms ease-in;\n}\n[dir] .status[data-v-1f78c41b] {\n  padding: 0px 40px;\n  border-top: 2px solid #d6dce0;\n}\n.status h4[data-v-1f78c41b] {\n  font-weight: 600;\n}\n.status[data-v-1f78c41b]:before {\n  content: \"\";\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: -15px;\n  transition: all 200ms ease-in;\n}\n[dir] .status[data-v-1f78c41b]:before {\n  background-color: white;\n  border-radius: 25px;\n  border: 1px solid #ddd;\n}\n[dir=ltr] .status[data-v-1f78c41b]:before {\n  left: 42%;\n}\n[dir=rtl] .status[data-v-1f78c41b]:before {\n  right: 42%;\n}\n[dir] .li.complete .status[data-v-1f78c41b] {\n  border-top: 2px solid #003da5;\n}\n.li.complete .status[data-v-1f78c41b]:before {\n  transition: all 200ms ease-in;\n}\n[dir] .li.complete .status[data-v-1f78c41b]:before {\n  background-color: #003da5;\n  border: none;\n}\n.li.complete .status h4[data-v-1f78c41b] {\n  color: #003da5;\n}\n@media (min-device-width: 320px) and (max-device-width: 700px) {\n.w-card[data-v-1f78c41b] {\n    width: 100px;\n    height: 14rem;\n}\n.status[data-v-1f78c41b] {\n    display: flex;\n    justify-content: center;\n    position: relative;\n    transition: all 200ms ease-in;\n}\n[dir] .status[data-v-1f78c41b] {\n    padding: 0px 10px;\n    border-top: 2px solid #d6dce0;\n}\n.status h4[data-v-1f78c41b] {\n    font-weight: 600;\n    font-size: 100;\n}\n.status[data-v-1f78c41b]:before {\n    content: \"\";\n    width: 25px;\n    height: 25px;\n    position: absolute;\n    top: -15px;\n    transition: all 200ms ease-in;\n}\n[dir] .status[data-v-1f78c41b]:before {\n    background-color: white;\n    border-radius: 25px;\n    border: 1px solid #ddd;\n}\n[dir=ltr] .status[data-v-1f78c41b]:before {\n    left: 42%;\n}\n[dir=rtl] .status[data-v-1f78c41b]:before {\n    right: 42%;\n}\n[dir] .li.complete .status[data-v-1f78c41b] {\n    border-top: 2px solid #003da5;\n}\n.li.complete .status[data-v-1f78c41b]:before {\n    transition: all 200ms ease-in;\n}\n[dir] .li.complete .status[data-v-1f78c41b]:before {\n    background-color: #003da5;\n    border: none;\n}\n.li.complete .status h4[data-v-1f78c41b] {\n    color: #003da5;\n}\n}\n#ecommerce-checkout-demo .item-view-primary-action-btn[data-v-1f78c41b] {\n  color: #2c2c2c !important;\n}\n[dir] #ecommerce-checkout-demo .item-view-primary-action-btn[data-v-1f78c41b] {\n  background-color: #f6f6f6;\n}\n#ecommerce-checkout-demo .item-name[data-v-1f78c41b] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  -webkit-line-clamp: 2;\n}\n[dir] #ecommerce-checkout-demo .vue-form-wizard[data-v-1f78c41b] {\n  padding-bottom: 0;\n}\n[dir] #ecommerce-checkout-demo .vue-form-wizard[data-v-1f78c41b]  .wizard-header {\n  padding: 0;\n}\n[dir] #ecommerce-checkout-demo .vue-form-wizard[data-v-1f78c41b]  .wizard-tab-content {\n  padding-bottom: 0;\n}\n[dir=ltr] #ecommerce-checkout-demo .vue-form-wizard[data-v-1f78c41b]  .wizard-tab-content {\n  padding-right: 0;\n  padding-left: 0;\n}\n[dir=rtl] #ecommerce-checkout-demo .vue-form-wizard[data-v-1f78c41b]  .wizard-tab-content {\n  padding-left: 0;\n  padding-right: 0;\n}\n[dir] #ecommerce-checkout-demo .vue-form-wizard[data-v-1f78c41b]  .wizard-tab-content .wizard-tab-container {\n  margin-bottom: 0 !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/checkOut.vue?vue&type=style&index=0&id=1f78c41b&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/checkOut.vue?vue&type=style&index=0&id=1f78c41b&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./checkOut.vue?vue&type=style&index=0&id=1f78c41b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/checkOut.vue?vue&type=style&index=0&id=1f78c41b&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/checkOut.vue?vue&type=template&id=1f78c41b&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/checkOut.vue?vue&type=template&id=1f78c41b&scoped=true& ***!
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
  return _c("div", [
    _vm.registro == 1
      ? _c("div", { attrs: { align: "center" } }, [_vm._m(0)])
      : _c("div", { attrs: { align: "center" } }, [_vm._m(1)]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row mt-5" }, [
      _vm.cardType == true
        ? _c("div", { staticClass: "vx-col sm:w-2/3 lg:w-2/3 w-full" }, [
            _c(
              "div",
              { staticClass: "mt-5" },
              _vm._l(_vm.nuevaRecetaData.medicamentos, function(item, index) {
                return _c(
                  "vx-card",
                  { key: item.id, staticClass: "mt-5 w-card" },
                  [
                    _c("div", { staticClass: "vx-row" }, [
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 sm:w-1/2 mb-base" },
                        [
                          _c("img", {
                            staticClass: "h-48 w-48",
                            attrs: {
                              alt: "image",
                              src:
                                "https://pharmazone.app/images/productos/" +
                                item.img +
                                ".png"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/2 sm:w-1/2 mb-base" },
                        [
                          _c("h3", {
                            staticClass: "mb-3",
                            domProps: { textContent: _vm._s(item.nombre) }
                          }),
                          _vm._v(" "),
                          _c("h5", {
                            staticClass: "mb-3",
                            domProps: { textContent: _vm._s(item.precentacion) }
                          }),
                          _vm._v(" "),
                          _c("p", {
                            staticClass: "mb-3",
                            domProps: {
                              textContent: _vm._s(
                                item.descripcion.slice(0, 10) + "..."
                              )
                            }
                          }),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "vs-button",
                            {
                              staticClass: "w-full",
                              attrs: { color: "danger" },
                              on: {
                                click: function($event) {
                                  return _vm.remover(index)
                                }
                              }
                            },
                            [_vm._v("Remover")]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                )
              }),
              1
            )
          ])
        : _c(
            "div",
            { staticClass: "vx-col lg:w-2/3 w-full relative" },
            _vm._l(_vm.nuevaRecetaData.medicamentos, function(item) {
              return _c(
                "div",
                { key: item.id, staticClass: "items-list-view" },
                [
                  _c(
                    "item-list-view",
                    { staticClass: "mb-base", attrs: { item: item } },
                    [
                      _c("template", { slot: "action-buttons" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "item-view-secondary-action-btn bg-danger p-3 rounded-lg flex flex-grow items-center justify-center text-white cursor-pointer",
                            on: {
                              click: function($event) {
                                return _vm.remover(_vm.index)
                              }
                            }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "text-sm font-semibold ml-2" },
                              [_vm._v("Remover")]
                            )
                          ]
                        )
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            }),
            0
          ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col lg:w-1/3 w-full" },
        [
          _c(
            "vx-card",
            { staticClass: "mt-5" },
            [
              _c("p", { staticClass: "font-semibold mb-3" }, [
                _vm._v("Detalles del Paciente")
              ]),
              _vm._v(" "),
              _c("vs-divider"),
              _vm._v(" "),
              _c("div", { staticClass: "flex justify-between mb-2" }, [
                _c("span", { staticClass: "text-grey" }, [_vm._v("Nombre")]),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm.nuevaRecetaData.name))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex justify-between mb-2" }, [
                _c("span", { staticClass: "text-grey" }, [_vm._v("Teléfono")]),
                _vm._v(" "),
                _c("span", { staticClass: "text-success" }, [
                  _vm._v(_vm._s(_vm.nuevaRecetaData.phone))
                ])
              ]),
              _vm._v(" "),
              _c("vs-divider"),
              _vm._v(" "),
              _vm.nextStep == 0
                ? _c(
                    "vs-button",
                    {
                      staticClass: "w-full mb-2",
                      on: { click: _vm.generarReceta }
                    },
                    [_vm._v("Finalizar")]
                  )
                : _c(
                    "vs-button",
                    {
                      staticClass: "w-full mb-2",
                      on: { click: _vm.generarReceta }
                    },
                    [_vm._v("Siguiente")]
                  )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "timeline mt-5", attrs: { id: "timeline" } },
      [
        _c("li", { staticClass: "li complete" }, [
          _c("div", { staticClass: "status" }, [
            _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 1")])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "li complete" }, [
          _c("div", { staticClass: "status" }, [
            _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 2")])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "li complete" }, [
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "timeline mt-5", attrs: { id: "timeline" } },
      [
        _c("li", { staticClass: "li complete" }, [
          _c("div", { staticClass: "status" }, [
            _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 1")])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "li complete" }, [
          _c("div", { staticClass: "status" }, [
            _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 2")])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "li complete" }, [
          _c("div", { staticClass: "status" }, [
            _c("h4", { staticClass: "mt-5" }, [_vm._v("Paso 3")])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/checkOut.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/pages/checkOut.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkOut_vue_vue_type_template_id_1f78c41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkOut.vue?vue&type=template&id=1f78c41b&scoped=true& */ "./resources/js/src/views/pages/checkOut.vue?vue&type=template&id=1f78c41b&scoped=true&");
/* harmony import */ var _checkOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkOut.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/checkOut.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _checkOut_vue_vue_type_style_index_0_id_1f78c41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkOut.vue?vue&type=style&index=0&id=1f78c41b&lang=scss&scoped=true& */ "./resources/js/src/views/pages/checkOut.vue?vue&type=style&index=0&id=1f78c41b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checkOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkOut_vue_vue_type_template_id_1f78c41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkOut_vue_vue_type_template_id_1f78c41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f78c41b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/checkOut.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/checkOut.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/checkOut.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./checkOut.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/checkOut.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/checkOut.vue?vue&type=style&index=0&id=1f78c41b&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/checkOut.vue?vue&type=style&index=0&id=1f78c41b&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_style_index_0_id_1f78c41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./checkOut.vue?vue&type=style&index=0&id=1f78c41b&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/checkOut.vue?vue&type=style&index=0&id=1f78c41b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_style_index_0_id_1f78c41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_style_index_0_id_1f78c41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_style_index_0_id_1f78c41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_style_index_0_id_1f78c41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_style_index_0_id_1f78c41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/checkOut.vue?vue&type=template&id=1f78c41b&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/checkOut.vue?vue&type=template&id=1f78c41b&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_template_id_1f78c41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./checkOut.vue?vue&type=template&id=1f78c41b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/checkOut.vue?vue&type=template&id=1f78c41b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_template_id_1f78c41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_template_id_1f78c41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);