(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{R12x:function(e,a,t){"use strict";t.r(a);var s=t("Snq/"),o=t.n(s),i=t("vDqi"),n=t.n(i),r={components:{vSelect:o.a},props:{data:{type:Object}},data:function(){return{errors:{campo:"Este campo es requerido."},bol:"as",image:"images/medicamentos/demo.jpg",name:null,precentation:null,description:null,activado:!1,quantity:null,price:null,message:"Error en el servidor, Intente más tarde.",laboratory:null,warehouse:null,category:null,base64textString:"",categorias:[{label:"Ginecología",value:"ginecologia"},{label:"Dermatología",value:"dermatologia"},{label:"Psicología",value:"psicologia"},{label:"Pediatría",value:"pediatria"},{label:"Otros",value:"otros"}]}},methods:{openLoading:function(){this.activeLoading=!0,this.$vs.loading({type:"default"})},cancel:function(){this.$router.push("/consola")},touched:function(){this.bol=""},doSave:function(){var e=this;this.openLoading();var a=localStorage.getItem("tu");n()({method:"post",url:"http://127.0.0.1:8000/api/postProducts",data:JSON.stringify({name:this.name,image:this.base64textString,description:this.description,price:this.price,precentation:this.precentation,category:this.category.value,laboratory:this.laboratory,warehouse:this.warehouse,quantity:this.quantity}),headers:{authorization:"Bearer "+a,"content-type":"application/json"}}).then((function(a){e.activeLoading=!1,e.$vs.loading.close(),e.$router.push("/consola"),e.$vs.notify({title:"Agregado",text:"Producto creado exitosamente.",color:"success"})})).catch((function(a){e.activeLoading=!1,e.$vs.loading.close(),activado=!0}))},handleFileSelect:function(e){var a=e.target.files,t=a[0],s=a[0].name;if(document.getElementById("info1").innerHTML=s,a&&t){var o=new FileReader;o.onload=this._handleReaderLoaded1.bind(this),o.readAsBinaryString(t)}},_handleReaderLoaded1:function(e){var a=e.target.result;this.base64textString=btoa(a),this.image="data:image/png;base64,"+this.base64textString}}},l=(t("jmA1"),t("KHd+")),c=Object(l.a)(r,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col w-full"},[t("div",{staticClass:"flex items-start flex-col sm:flex-row"},[t("img",{staticClass:"mr-8 rounded h-24 w-24",attrs:{alt:"hola",src:e.image}}),e._v(" "),t("div",[t("p",{staticClass:"text-lg font-medium mb-2 mt-4 sm:mt-0",domProps:{textContent:e._s(e.name)}}),e._v(" "),t("input",{staticClass:"fileInput",attrs:{accept:"image/*",type:"file",color:"danger",id:"image",name:"image"},on:{change:function(a){return e.handleFileSelect(a)},click:e.touched}}),e._v(" "),t("label",{staticClass:"subir",attrs:{for:"image"}},[e._v("Agregar Foto")]),e._v(" "),t("div",{attrs:{id:"info1"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:"images/medicamentos/demo.jpg"===e.image&&""==e.bol,expression:"image === 'images/medicamentos/demo.jpg' && bol == ''"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.campo))])])]),e._v(" "),t("vs-alert",{attrs:{color:"danger",title:"Error",active:e.activado,closable:"","icon-pack":"feather","close-icon":"icon-x"},on:{"update:active":function(a){e.activado=a}}},[e._v(e._s(e.message))])],1)]),e._v(" "),t("div",{staticClass:"vx-row"},[t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("vs-input",{staticClass:"w-full mt-4",attrs:{label:"Nombre",name:"name"},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:""===e.name,expression:"name === ''"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.campo))]),e._v(" "),t("div",{staticClass:"mt-4"},[t("vs-textarea",{staticClass:"vs-textarea",attrs:{label:"Descripción"},model:{value:e.description,callback:function(a){e.description=a},expression:"description"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:""===e.description,expression:"description === ''"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.campo))])],1),e._v(" "),t("vs-input",{staticClass:"w-full mt-4",attrs:{label:"Precio",name:"precio",placeholder:"Q",type:"number"},model:{value:e.price,callback:function(a){e.price=a},expression:"price"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:""===e.price,expression:"price === ''"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.campo))]),e._v(" "),t("div",{staticClass:"mt-4"},[t("label",{staticClass:"vs-input--label"},[e._v("Categoría")]),e._v(" "),t("v-select",{attrs:{clearable:!1,options:e.categorias,name:"category",dir:e.$vs.rtl?"rtl":"ltr"},model:{value:e.category,callback:function(a){e.category=a},expression:"category"}})],1),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:""===e.category,expression:"category === ''"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.campo))])],1),e._v(" "),t("div",{staticClass:"vx-col md:w-1/2 w-full"},[t("vs-input",{staticClass:"w-full mt-4",attrs:{label:"Cantidad",name:"cantidad",type:"number"},model:{value:e.quantity,callback:function(a){e.quantity=a},expression:"quantity"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:""===e.quantity,expression:"quantity === ''"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.campo))]),e._v(" "),t("div",{staticClass:"mt-4"},[t("vs-textarea",{staticClass:"vs-textarea",attrs:{label:"Precentación"},model:{value:e.precentation,callback:function(a){e.precentation=a},expression:"precentation"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:""===e.precentation,expression:"precentation === ''"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.campo))])],1),e._v(" "),t("vs-input",{staticClass:"w-full mt-4",attrs:{label:"Laboratorio",name:"laboratorio"},model:{value:e.laboratory,callback:function(a){e.laboratory=a},expression:"laboratory"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:""===e.laboratory,expression:"laboratory === ''"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.campo))]),e._v(" "),t("vs-input",{staticClass:"w-full mt-4",attrs:{label:"Bodega de Despacho",name:"bodega"},model:{value:e.warehouse,callback:function(a){e.warehouse=a},expression:"warehouse"}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:""===e.warehouse,expression:"warehouse === ''"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.campo))])],1),e._v(" "),t("div",{staticClass:"vx-row"},[e._m(0),e._v(" "),t("div",{staticClass:"vx-col w-full"},[t("div",{staticClass:"mt-8 flex flex-wrap items-center justify-end"},[t("vs-button",{staticClass:"ml-auto mt-2",attrs:{color:"success",disabled:null==e.name||""==e.name||"images/medicamentos/demo.jpg"==e.image||"as"==e.bol||null==e.quantity||""==e.quantity||null==e.description||""==e.description||null==e.precentation||""==e.precentation||null==e.price||""==e.price||null==e.laboratory||""==e.laboratory||null==e.category||""==e.category||null==e.warehouse||""==e.warehouse},on:{click:e.doSave}},[e._v("\n                        Guardar")]),e._v(" "),t("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"danger"},on:{click:e.cancel}},[e._v("Cancelar")])],1)])])])])}),[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("span")])}],!1,null,null,null);a.default=c.exports},ZdsL:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".fileInput {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.subir {\n  color: #fff;\n}\n[dir] .subir {\n  padding: 5px 10px;\n  background: #7044ff;\n  border: 0px solid #fff;\n  border-radius: 15px 15px 15px 15px;\n}\n.subir:hover {\n  color: #fff;\n}\n[dir] .subir:hover {\n  background: #7e57ff;\n}\n[dir] .vs-textarea {\n  background-color: white;\n}",""])},jmA1:function(e,a,t){"use strict";var s=t("keJu");t.n(s).a},keJu:function(e,a,t){var s=t("ZdsL");"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(s,o);s.locals&&(e.exports=s.locals)}}]);