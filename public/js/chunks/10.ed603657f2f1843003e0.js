(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1Gku":function(t,e,i){var s=i("r4Dg");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(s,n);s.locals&&(t.exports=s.locals)},UEzp:function(t,e,i){"use strict";var s=i("1Gku");i.n(s).a},a5mY:function(t,e,i){"use strict";i.r(e);var s={props:{item:{type:Object,required:!0}},computed:{isInCart:function(){var t=this;return function(e){return t.$store.getters["eCommerce/isInCart"](e)}},isInWishList:function(){var t=this;return function(e){return t.$store.getters["eCommerce/isInWishList"](e)}}},methods:{toggleItemInWishList:function(t){this.$store.dispatch("eCommerce/toggleItemInWishList",t)},additemInCart:function(t){this.$store.dispatch("eCommerce/additemInCart",t)},cartButtonClicked:function(t){this.isInCart(t.objectID)?this.$router.push("/apps/eCommerce/checkout").catch((function(){})):this.additemInCart(t)},navigate_to_detail_view:function(){this.$router.push({name:"ecommerce-item-detail-view",params:{item_id:this.item.objectID}}).catch((function(){}))}}},n=(i("UEzp"),i("KHd+")),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vx-card",t._g({staticClass:"list-view-item overflow-hidden"},t.$listeners),[i("template",{slot:"no-body"},[i("div",{staticClass:"vx-row item-details no-gutter"},[i("div",{staticClass:"vx-col sm:w-1/4 w-full item-img-container bg-white flex items-center justify-center cursor-pointer",on:{click:t.navigate_to_detail_view}},[i("img",{staticClass:"grid-view-img p-4",attrs:{src:t.item.image,alt:t.item.name}})]),t._v(" "),i("div",{staticClass:"vx-col sm:w-1/2"},[i("div",{staticClass:"p-4 pt-6"},[t._t("item-meta",[i("h6",{staticClass:"item-name font-semibold mb-1 hover:text-primary cursor-pointer",on:{click:t.navigate_to_detail_view}},[t._v(t._s(t.item.name))]),t._v(" "),i("p",{staticClass:"text-sm mb-4"},[t._v("By "),i("span",{staticClass:"font-semibold cursor-pointer"},[t._v(t._s(t.item.brand))])]),t._v(" "),i("p",{staticClass:"item-description text-sm"},[t._v(t._s(t.item.description))])])],2)]),t._v(" "),i("div",{staticClass:"vx-col sm:w-1/4 w-full flex items-center sm:border border-0 border-solid d-theme-border-grey-light border-r-0 border-t-0 border-b-0"},[i("div",{staticClass:"p-4 flex flex-col w-full"},[i("div",{staticClass:"text-warning flex self-end border border-solid border-warning py-1 px-2 rounded"},[i("span",{staticClass:"text-sm mr-1"},[t._v(t._s(t.item.rating))]),t._v(" "),i("feather-icon",{attrs:{icon:"StarIcon",svgClasses:"h-4 w-4"}})],1),t._v(" "),i("div",{staticClass:"my-6"},[i("h5",{staticClass:"font-bold text-center"},[t._v("$"+t._s(t.item.price))]),t._v(" "),t.item.free_shipping?i("span",{staticClass:"text-grey flex items-start justify-center mt-1"},[i("feather-icon",{attrs:{icon:"ShoppingCartIcon",svgClasses:"w-4 h-4"}}),t._v(" "),i("span",{staticClass:"text-sm ml-2"},[t._v("Free Shipping")])],1):t._e()]),t._v(" "),t._t("action-buttons")],2)])])])],2)}),[],!1,null,"5850bb20",null);e.default=a.exports},r4Dg:function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,".list-view-item .item-name[data-v-5850bb20], .list-view-item .item-description[data-v-5850bb20] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.list-view-item .item-name[data-v-5850bb20] {\n  -webkit-line-clamp: 2;\n}\n.list-view-item .item-description[data-v-5850bb20] {\n  -webkit-line-clamp: 5;\n}\n.list-view-item .grid-view-img[data-v-5850bb20] {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  -webkit-transition: 0.35s;\n  transition: 0.35s;\n}\n[dir] .list-view-item[data-v-5850bb20]:hover {\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);\n}\n.list-view-item:hover .grid-view-img[data-v-5850bb20] {\n  opacity: 0.9;\n}",""])}}]);