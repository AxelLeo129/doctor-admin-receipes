(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/call-center/dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\DELL\\Desktop\\pharmazone.app\\resources\\js\\src\\views\\call-center\\dashboard.vue: Identifier 'id' has already been declared (282:10)\n\n\u001b[0m \u001b[90m 280 | \u001b[39m      \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39musers \u001b[33m=\u001b[39m []\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 281 | \u001b[39m      let token \u001b[33m=\u001b[39m localStorage\u001b[33m.\u001b[39mgetItem(\u001b[32m\"tu\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 282 | \u001b[39m      let id \u001b[33m=\u001b[39m localStorage\u001b[33m.\u001b[39mgetItem(\u001b[32m\"ui\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 283 | \u001b[39m      axios({\u001b[0m\n\u001b[0m \u001b[90m 284 | \u001b[39m        method\u001b[33m:\u001b[39m \u001b[32m\"get\"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 285 | \u001b[39m        url\u001b[33m:\u001b[39m \u001b[32m\"http://127.0.0.1:8000/api/getCliente/\"\u001b[39m \u001b[33m+\u001b[39m phone\u001b[33m,\u001b[39m\u001b[0m\n    at Parser.raise (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:7012:17)\n    at ScopeHandler.checkRedeclarationInScope (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:4288:12)\n    at ScopeHandler.declareName (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:4254:12)\n    at Parser.checkLVal (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:8852:22)\n    at Parser.parseVarId (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:11363:10)\n    at Parser.parseVar (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:11338:12)\n    at Parser.parseVarStatement (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:11160:10)\n    at Parser.parseStatementContent (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:10757:21)\n    at Parser.parseStatement (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:11266:25)\n    at Parser.parseBlockBody (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:11253:10)\n    at Parser.parseBlock (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:11237:10)\n    at Parser.parseFunctionBody (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:10256:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:10226:10)\n    at Parser.parseMethod (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:10180:10)\n    at Parser.parseObjectMethod (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:10096:19)\n    at Parser.parseObjPropValue (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:10138:23)\n    at Parser.parseObjectMember (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:10062:10)\n    at Parser.parseObj (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9982:25)\n    at Parser.parseExprAtom (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9604:28)\n    at Parser.parseExprSubscripts (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9237:23)\n    at Parser.parseMaybeUnary (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9217:21)\n    at Parser.parseExprOps (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9083:23)\n    at Parser.parseMaybeConditional (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9056:23)\n    at Parser.parseMaybeAssign (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9015:21)\n    at Parser.parseObjectProperty (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:10113:101)\n    at Parser.parseObjPropValue (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:10138:101)\n    at Parser.parseObjectMember (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:10062:10)\n    at Parser.parseObj (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9982:25)\n    at Parser.parseExprAtom (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9604:28)\n    at Parser.parseExprSubscripts (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9237:23)\n    at Parser.parseMaybeUnary (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9217:21)\n    at Parser.parseExprOps (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9083:23)\n    at Parser.parseMaybeConditional (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9056:23)\n    at Parser.parseMaybeAssign (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:9015:21)\n    at Parser.parseExportDefaultExpression (C:\\Users\\DELL\\Desktop\\pharmazone.app\\node_modules\\@babel\\parser\\lib\\index.js:11870:24)");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: email.scss\n    Description: Email app's styles. This is imported in Email.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n#email-app .vs-sidebar--background {\n  position: absolute;\n}\n[dir=ltr] #email-app .select-all-chexkbox .vs-checkbox {\n  margin-right: 0.8rem;\n}\n[dir=rtl] #email-app .select-all-chexkbox .vs-checkbox {\n  margin-left: 0.8rem;\n}\n#email-app .email-filter-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 75px);\n}\n[dir] #email-app .email-filter-scroll-area {\n  margin: auto;\n}\n#email-app .email-content-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 100px);\n}\n[dir] #email-app .email-content-scroll-area {\n  margin: auto;\n}\n#email-app .scroll-area-mail-content {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 6.3%);\n}\n[dir] #email-app .scroll-area-mail-content {\n  margin: auto;\n}\n[dir] #email-app .email__mails .mail__opened-mail {\n  background-color: #eee;\n}\n#email-app .email__mails .email__mail-item {\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n}\n[dir] #email-app .email__mails .email__mail-item:not(:first-of-type) .mail__mail-item {\n  border-top: 1px solid #dae1e7;\n}\n#email-app .email__mails .email__mail-item .mail__mail-item {\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n#email-app .email__mails .email__mail-item .mail__mail-item:hover {\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n[dir] #email-app .email__mails .email__mail-item .mail__mail-item:hover {\n  -webkit-transform: translateY(-4px);\n          transform: translateY(-4px);\n  box-shadow: 0px 3px 10px 0px #ccc;\n}\n#email-app .email__mails .email__mail-item .mail__mail-item .feather-icon {\n  color: #9c9c9c;\n}\n[dir] #email-app .email-view-sidebar .vs-sidebar {\n  background-color: #f8f8f8 !important;\n}\n[dir=ltr] #email-app .email-view-sidebar .vs-sidebar {\n  border-left: 1px solid #dae1e7;\n}\n[dir=rtl] #email-app .email-view-sidebar .vs-sidebar {\n  border-right: 1px solid #dae1e7;\n}\n#email-app .email-view-sidebar .email-header {\n  z-index: 1;\n  position: relative;\n}\n[dir] #email-app .email-view-sidebar .email-header {\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.04);\n  border-bottom: 1px solid #eee;\n}\n#email-app .email-view-sidebar .open-mail-label {\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n}\n[dir=ltr] #email-app .email-view-sidebar .mail__attachment .vs-chip--text {\n  margin-left: 0;\n  margin-right: 0;\n}\n[dir=rtl] #email-app .email-view-sidebar .mail__attachment .vs-chip--text {\n  margin-right: 0;\n  margin-left: 0;\n}\n.con-vs-dialog.email-compose .vs-dialog {\n  max-width: 530px;\n}\n[dir] .con-vs-dialog.email-compose .vs-dialog .vs-dialog-text {\n  padding: 0;\n}\n.con-vs-dialog.email-compose .vs-dialog .vs-dialog-text .scroll-area {\n  max-height: 75vh;\n}\n[dir] .con-vs-dialog.email-compose .vs-dialog .vs-dialog-text .compose-mail-attachment .con-input-upload {\n  margin: 0;\n}\n.con-vs-dialog.email-compose .con-img-upload .con-input-upload {\n  height: 2.5rem;\n  width: 100%;\n}\n[dir] .con-vs-dialog.email-compose .con-img-upload .img-upload {\n  margin: 0;\n  margin-bottom: 0.5rem;\n}\n[dir=ltr] .con-vs-dialog.email-compose .con-img-upload .img-upload {\n  margin-right: 1.5rem;\n}\n[dir=rtl] .con-vs-dialog.email-compose .con-img-upload .img-upload {\n  margin-left: 1.5rem;\n}\n[dir] .con-vs-dialog.email-compose .quill-editor {\n  margin-bottom: 1.5rem;\n}\n.con-vs-dialog.email-compose .ql-editor {\n  height: 150px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=template&id=d669a862&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/call-center/dashboard.vue?vue&type=template&id=d669a862& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        "border border-solid d-theme-border-grey-light rounded relative overflow-hidden",
      attrs: { id: "email-app" }
    },
    [
      _c(
        "vs-popup",
        {
          attrs: { title: "Posibles Clíentes", active: _vm.popupActive2 },
          on: {
            "update:active": function($event) {
              _vm.popupActive2 = $event
            }
          }
        },
        [
          _c("p", [_vm._v("Listado de clíentes anteriores.")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              attrs: {
                pagination: "",
                "max-items": "3",
                search: "",
                data: _vm.users
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(tr, indextr) {
                      return _c(
                        "vs-tr",
                        { key: indextr },
                        [
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].client_nit } },
                            [_vm._v(_vm._s(data[indextr].client_nit))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].client_name } },
                            [_vm._v(_vm._s(data[indextr].client_name))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].client_phone } },
                            [_vm._v(_vm._s(data[indextr].client_phone))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].client_addresse } },
                            [_vm._v(_vm._s(data[indextr].client_addresse))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c("vs-button", {
                                staticClass: "mr-2",
                                attrs: {
                                  type: "border",
                                  size: "small",
                                  "icon-pack": "feather",
                                  icon: "icon-send"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.editData(tr)
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    })
                  }
                }
              ])
            },
            [
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("NIT")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Nombre")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Teléfono")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Dirección")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Unir")])
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mr-3" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "bg-primary-gradient w-full",
                  attrs: { "icon-pack": "feather", icon: "icon-plus" },
                  on: { click: _vm.addNewData1 }
                },
                [_vm._v("Nuevo Cliente")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("data-view-sidebar", {
        attrs: {
          isSidebarActive: _vm.addNewDataSidebar,
          data: _vm.sidebarData
        },
        on: { closeSidebar: _vm.toggleDataSidebar }
      }),
      _vm._v(" "),
      _c(
        "vs-sidebar",
        {
          staticClass: "items-no-padding",
          attrs: {
            parent: "#email-app",
            "click-not-close": _vm.clickNotClose,
            "hidden-background": _vm.clickNotClose
          },
          model: {
            value: _vm.isEmailSidebarActive,
            callback: function($$v) {
              _vm.isEmailSidebarActive = $$v
            },
            expression: "isEmailSidebarActive"
          }
        },
        [
          [
            _c(
              "div",
              { staticClass: "email__email-sidebar h-full" },
              [
                _c(
                  "div",
                  { staticClass: "m-6 clearfix" },
                  [
                    _c(
                      "vs-button",
                      {
                        staticClass: "bg-primary-gradient w-full",
                        attrs: { "icon-pack": "feather", icon: "icon-plus" },
                        on: { click: _vm.addNewData }
                      },
                      [_vm._v("Nuevo Cliente")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-prompt",
                  {
                    staticClass: "email-compose",
                    attrs: { title: "New Message", "accept-text": "Send" }
                  },
                  [
                    _c(
                      "VuePerfectScrollbar",
                      {
                        staticClass: "scroll-area p-4",
                        attrs: { settings: _vm.settings }
                      },
                      [
                        _c(
                          "form",
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|email",
                                  expression: "'required|email'"
                                }
                              ],
                              staticClass: "w-full mb-6",
                              attrs: {
                                name: "mailTo",
                                "label-placeholder": "To",
                                "val-icon-danger": "clear",
                                "val-icon-success": "done"
                              }
                            }),
                            _vm._v(" "),
                            _c("vs-input", {
                              staticClass: "w-full mb-6",
                              attrs: {
                                name: "mailSubject",
                                "label-placeholder": "Subject"
                              }
                            }),
                            _vm._v(" "),
                            _c("vs-input", {
                              staticClass: "w-full mb-6",
                              attrs: {
                                name: "mailCC",
                                "label-placeholder": "CC"
                              }
                            }),
                            _vm._v(" "),
                            _c("vs-input", {
                              staticClass: "w-full mb-6",
                              attrs: {
                                name: "mailBCC",
                                "label-placeholder": "BCC"
                              }
                            }),
                            _vm._v(" "),
                            _c("quill-editor"),
                            _vm._v(" "),
                            _c("vs-upload", {
                              staticClass: "compose-mail-attachment",
                              attrs: { multiple: "", text: "Attachments" }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "VuePerfectScrollbar",
                  {
                    staticClass: "email-filter-scroll-area",
                    attrs: { settings: _vm.settings }
                  },
                  [
                    _c("div", { staticClass: "px-6 pb-2 flex flex-col" }, [
                      _c(
                        "li",
                        {
                          staticClass:
                            "flex justify-between items-center cursor-pointer",
                          attrs: { tag: "span" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "flex items-center mb-2" },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "PlusIcon" }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-lg ml-3" }, [
                                _vm._v("Nuevos")
                              ])
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass:
                            "flex items-center mt-4 mb-2 cursor-pointer",
                          attrs: { tag: "span" }
                        },
                        [
                          _c("feather-icon", {
                            attrs: { icon: "ArchiveIcon" }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-lg ml-3" }, [
                            _vm._v("Empaquetando")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass:
                            "flex justify-between items-center mt-4 cursor-pointer",
                          attrs: { tag: "span" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "flex items-center mb-2" },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "TruckIcon" }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-lg ml-3" }, [
                                _vm._v("Entregando")
                              ])
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass:
                            "flex items-center mt-4 mb-2 cursor-pointer",
                          attrs: { tag: "span" }
                        },
                        [
                          _c("feather-icon", { attrs: { icon: "MapPinIcon" } }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-lg ml-3" }, [
                            _vm._v("Entregados")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass:
                            "flex items-center justify-between items-center mt-4 cursor-pointer",
                          attrs: { tag: "span" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "flex items-center mb-2" },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "HexagonIcon" }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-lg ml-3" }, [
                                _vm._v("Cancelado")
                              ])
                            ],
                            1
                          )
                        ]
                      )
                    ])
                  ]
                )
              ],
              1
            )
          ]
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "no-scroll-content border border-solid d-theme-border-grey-light border-r-0 border-t-0 border-b-0",
          class: { "sidebar-spacer": _vm.clickNotClose }
        },
        [
          _c(
            "div",
            { staticClass: "flex border d-theme-dark-bg items-center" },
            [
              _c("feather-icon", {
                staticClass:
                  "md:inline-flex lg:hidden ml-4 mr-4 cursor-pointer",
                attrs: { icon: "MenuIcon" }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass:
                  "vs-input-no-border vs-input-no-shdow-focus w-full",
                attrs: {
                  "icon-no-border": "",
                  icon: "icon-search",
                  size: "large",
                  "icon-pack": "feather",
                  placeholder: "Buscar"
                },
                model: {
                  value: _vm.buscar,
                  callback: function($$v) {
                    _vm.buscar = $$v
                  },
                  expression: "buscar"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "VuePerfectScrollbar",
            {
              staticClass: "email-content-scroll-area",
              attrs: { id: "scrolll", settings: _vm.settings }
            },
            [
              _c(
                "transition-group",
                {
                  staticClass: "email__mails",
                  attrs: { name: "list-enter-up", tag: "ul", appear: "" }
                },
                _vm._l(_vm.searchRecipes, function(mail, index) {
                  return _c(
                    "li",
                    {
                      key: mail.id,
                      staticClass: "cursor-pointer email__mail-item",
                      style: { transitionDelay: index * 0.1 + "s" },
                      on: {
                        click: function($event) {
                          return _vm.openModal(mail.phone, mail.id)
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "mail__mail-item sm:px-4 px-2 py-6" },
                        [
                          _c("div", { staticClass: "flex w-full" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex w-full justify-between items-start"
                              },
                              [
                                _c("div", { staticClass: "mail__details" }, [
                                  _c("h5", { staticClass: "mb-1" }, [
                                    _vm._v(_vm._s(mail.name))
                                  ]),
                                  _vm._v(" "),
                                  mail.phone
                                    ? _c("span", [_vm._v(_vm._s(mail.phone))])
                                    : _c("span", [_vm._v("(no subject)")])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mail-item__meta flex items-center"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "email__labels hidden sm:flex items-center"
                                      },
                                      [
                                        _c("div", {
                                          staticClass:
                                            "h-2 w-2 rounded-full mr-2",
                                          class: "bg-" + mail.color
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("span", [_vm._v(_vm._s(mail.status))])
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex w-full" }, [
                            _c(
                              "div",
                              { staticClass: "mail__message truncate" },
                              [_c("span", [_vm._v(_vm._s(mail.doctor_id))])]
                            )
                          ])
                        ]
                      )
                    ]
                  )
                }),
                0
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/call-center/dashboard.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/call-center/dashboard.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_d669a862___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=d669a862& */ "./resources/js/src/views/call-center/dashboard.vue?vue&type=template&id=d669a862&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/call-center/dashboard.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_d669a862___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_d669a862___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/call-center/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/call-center/dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/call-center/dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/call-center/dashboard.vue?vue&type=template&id=d669a862&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/call-center/dashboard.vue?vue&type=template&id=d669a862& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_d669a862___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=d669a862& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=template&id=d669a862&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_d669a862___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_d669a862___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);