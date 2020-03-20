(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DataViewSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DataViewSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: function _default() {}
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      //Dirección de facturación
      idVisitador: null,
      paisf: "Guatemala",
      deparf: null,
      callef: null,
      apartamentof: null,
      municipiof: null,
      residenciaf: null,
      codigof: null,
      telefonof: null,
      //Dirección de envío
      paise: "Guatemala",
      depare: null,
      callee: null,
      apartamentoe: null,
      municipioe: null,
      residenciae: null,
      codigoe: null,
      telefonoe: null,
      //Demás variables
      idMedico: null,
      origen: null,
      cont: 0,
      popupActive4: false,
      cantidades: [],
      totales: [],
      fechaHoy: null,
      departamentos: [{
        id: "Alta Verapaz",
        name: "Alta Verapaz"
      }, {
        id: "Baja Verapaz",
        name: "Baja Verapaz"
      }, {
        id: "Chimaltenango",
        name: "Chimaltenango"
      }, {
        id: "Chiquimula",
        name: "Chiquimula"
      }, {
        id: "El Progreso",
        name: "El Progreso"
      }, {
        id: "Escuintla",
        name: "Escuintla"
      }, {
        id: "Guatemala",
        name: "Guatemala"
      }, {
        id: "Huehuetenango",
        name: "Huehuetenango"
      }, {
        id: "Izabal",
        name: "Izabal"
      }, {
        id: "Jalapa",
        name: "Jalapa"
      }, {
        id: "Jutiapa",
        name: "Jutiapa"
      }, {
        id: "Petén",
        name: "Petén"
      }, {
        id: "Quetzaltenango",
        name: "Quetzaltenango"
      }, {
        id: "Quiché",
        name: "Quiché"
      }, {
        id: "Retalhuleu",
        name: "Retalhuleu"
      }, {
        id: "Sacatepéquez",
        name: "Sacatepéquez"
      }, {
        id: "San Marcos",
        name: "San Marcos"
      }, {
        id: "Santa Rosa",
        name: "Santa Rosa"
      }, {
        id: "Sololá",
        name: "Sololá"
      }, {
        id: "Suchitepéquez",
        name: "Suchitepéquez"
      }, {
        id: "Totonicapán",
        name: "Totonicapán"
      }, {
        id: "Zacapa",
        name: "Zacapa"
      }],
      users: [],
      numeroCompra: [],
      fechasCompra: [],
      tipe: 0,
      idRecipe: null,
      checkBox1: "true",
      switch3: false,
      switch2: false,
      switch1: "1",
      nameT: null,
      numberT: null,
      total: 0,
      numberTr: null,
      datetr: null,
      subtotal1: 0,
      subtotal2: 0,
      medicines: [],
      itms: [],
      popupActive2: false,
      idCliente: null,
      nit: null,
      name: null,
      name1: null,
      empresa: null,
      direccion: null,
      phone: null,
      email: null,
      date: null,
      genre: null,
      addressf: null,
      addresse: null,
      addressc: null,
      dataId: null,
      dataName: "",
      dataCategory: null,
      dataImg: null,
      dataOrder_status: "pending",
      dataPrice: 0,
      nuevo: false,
      generos: [{
        text: "Femenino",
        value: "femenino"
      }, {
        text: "Masculino",
        value: "masculino"
      }],
      order_status_choices: [{
        text: "Pending",
        value: "pending"
      }, {
        text: "Canceled",
        value: "canceled"
      }, {
        text: "Delivered",
        value: "delivered"
      }, {
        text: "On Hold",
        value: "on_hold"
      }],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    };
  },
  watch: {
    isSidebarActive: function isSidebarActive(val) {
      this.datetr = null;
      this.nit = null;
      this.name = null;
      this.phone = null;
      this.email = null;
      this.addresse = null;
      this.addressf = null;
      if (!val) return;

      if (Object.entries(this.data).length === 0) {
        this.nuevo = true; //console.log(this.nuevo);

        this.initValues();
        this.visitadrasdf(); //this.$validator.reset()
      } else {
        //console.log(this.data);
        var _JSON$parse = JSON.parse(JSON.stringify(this.data.data)),
            id = _JSON$parse.id,
            client_nit = _JSON$parse.client_nit,
            client_name = _JSON$parse.client_name,
            client_phone = _JSON$parse.client_phone,
            client_email = _JSON$parse.client_email,
            client_addressf = _JSON$parse.client_addressf,
            client_addresse = _JSON$parse.client_addresse,
            client_genre = _JSON$parse.client_genre,
            birthdate = _JSON$parse.birthdate,
            paisf = _JSON$parse.paisf,
            deparf = _JSON$parse.deparf,
            callef = _JSON$parse.callef,
            apartamentof = _JSON$parse.apartamentof,
            municipiof = _JSON$parse.municipiof,
            residenciaf = _JSON$parse.residenciaf,
            codigof = _JSON$parse.codigof,
            telefonof = _JSON$parse.telefonof,
            paise = _JSON$parse.paise,
            depare = _JSON$parse.depare,
            callee = _JSON$parse.callee,
            apartamentoe = _JSON$parse.apartamentoe,
            municipioe = _JSON$parse.municipioe,
            residenciae = _JSON$parse.residenciae,
            codigoe = _JSON$parse.codigoe,
            telefonoe = _JSON$parse.telefonoe;

        this.idCliente = id;
        this.nit = client_nit;
        this.name = client_name;

        if (this.name == undefined) {
          this.tipe = 1;
        } else {
          this.tipe = 2;
        }

        this.phone = client_phone;
        this.email = client_email;
        this.genre = client_genre;

        if (this.genre == undefined) {
          this.genre = "masculino";
        }

        this.date = birthdate; //this.paisf = paisf;

        this.deparf = deparf;

        if (this.deparf == undefined) {
          this.deparf = "Guatemala";
        }

        this.callef = callef;
        this.apartamentof = apartamentof;
        this.municipiof = municipiof;
        this.residenciaf = residenciaf;
        this.codigof = codigof;
        this.telefonof = telefonof; //this.paise = paise;

        this.depare = depare;

        if (this.depare == undefined) {
          this.depare = "Guatemala";
        }

        this.callee = callee;
        this.apartamentoe = apartamentoe;
        this.municipioe = municipioe;
        this.residenciae = residenciae;
        this.codigoe = codigoe;
        this.telefonoe = telefonoe;
        this.addresse = client_addresse;
        this.addressf = client_addressf;
        this.addressc = this.addressf;
        this.idRecipe = this.data.idRecipies;
        this.idMedico = this.data.idMedico;
        this.origen = this.data.origen;
        this.nuevo = false;
        this.initValues();
        this.visitadrasdf();
      } // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))

    }
  },
  computed: {
    isSidebarActiveLocal: {
      get: function get() {
        return this.isSidebarActive;
      },
      set: function set(val) {
        if (!val) {
          this.$emit("closeSidebar"); // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid: function isFormValid() {//return !this.errors.any() && this.dataName && this.dataCategory && (this.dataPrice > 0)
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  methods: {
    getDate: function getDate() {
      var f = new Date();
      this.fechaHoy = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    },
    agregarL: function agregarL(data) {
      var _this = this;

      function sumarDias(fecha, dias) {
        fecha.setDate(fecha.getDate() + dias);
        return fecha;
      }

      var d = new Date();
      var c = 1;
      var a = sumarDias(d, c);
      var e = (a.getMonth() + 1).toString();
      var f = a.getFullYear().toString();
      var g = a.getDate().toString();

      if (e.length == 1) {
        e = "0" + e;
      }

      if (g.length == 1) {
        g = "0" + g;
      }

      var h = f + "-" + e + "-" + g;

      if (this.idCliente == null || this.idCliente == undefined || this.idCliente == "") {
        this.idCliente = 0;
      }

      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getComiProd/" + data.id + "/" + this.idMedico + "/" + this.idCliente,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this.numeroCompra.push(Response.data[0].numero_compra_medico);

        _this.fechasCompra.push(Response.data[0].fecha_compra);
      }).catch(function (err) {
        console.log(err);
      });
      this.medicines.push({
        id: data.id,
        name: data.name,
        presentacion: data.precentacion,
        price: data.price,
        cantidad: 1,
        totale: 0,
        costo: data.cost,
        unidad: "Pastillas",
        repro: false,
        next: h,
        origen: 3
      });
      var p = parseFloat(data.price);
      this.sumar(1, p, this.cont);
      this.cont = this.cont + 1;
      this.popupActive4 = false;
    },
    agregarP: function agregarP() {
      var _this2 = this;

      var token = localStorage.getItem("tu");
      this.users = [];
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getProducts",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        //console.log(Response);
        Response.data.forEach(function (element) {
          element.quantity = parseInt(element.quantity);

          if (element.quantity > 0) {
            //this.numberData = this.numberData + 1;
            _this2.users.push(element);
          }
        }); //console.log(this.users);

        _this2.popupActive4 = true;
      }).catch(function (err) {
        console.log(err);
      });
    },
    sumar: function sumar(cantidad, price, index) {
      var _this3 = this;

      function trunc(x) {
        var posiciones = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var s = x.toString();
        var l = s.length;
        var decimalLength = s.indexOf(".") + 1;

        if (l - decimalLength <= posiciones) {
          return x;
        } // Parte decimal del número


        var isNeg = x < 0;
        var decimal = x % 1;
        var entera = isNeg ? Math.ceil(x) : Math.floor(x); // Parte decimal como número entero
        // Ejemplo: parte decimal = 0.77
        // decimalFormated = 0.77 * (10^posiciones)
        // si posiciones es 2 ==> 0.77 * 100
        // si posiciones es 3 ==> 0.77 * 1000

        var decimalFormated = Math.floor(Math.abs(decimal) * Math.pow(10, posiciones)); // Sustraemos del número original la parte decimal
        // y le sumamos la parte decimal que hemos formateado

        var finalNum = entera + decimalFormated / Math.pow(10, posiciones) * (isNeg ? -1 : 1);
        return finalNum;
      }

      this.total = 0;
      price = parseFloat(price);
      this.cantidades[index] = cantidad;
      this.totales[index] = price * cantidad;
      this.totales.forEach(function (element) {
        //console.log(element);
        _this3.total = _this3.total + element;
        _this3.total = trunc(_this3.total, 2); //this.total = parseFloat(this.total).toFixed(2);
      });
    },
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default"
      });
    },
    cantidadess: function cantidadess() {
      console.log(this.medicines);
    },
    visitadrasdf: function visitadrasdf() {
      var _this4 = this;

      var token = localStorage.getItem('tu');
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getVisitador1/" + this.idMedico,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this4.idVisitador = Response.data[0].id_visitador; //console.log(this.idVisitador);
      }).catch(function (err) {
        console.log(err);
        _this4.activeLoading = false;

        _this4.$vs.loading.close();
      });
    },
    notificacion: function notificacion() {
      var _this5 = this;

      this.openLoading();
      var token = localStorage.getItem("tu");
      var ids = [];
      var fechass = [];
      var fecha = [];
      var quantita = []; //console.log(this.medicines);

      this.medicines.forEach(function (element) {
        if (element.cantidad > 0) {
          ids.push(element.id);
        }
      });
      this.cantidades.forEach(function (element) {
        if (element > 0) {
          quantita.push(element);
        }
      });
      this.medicines.forEach(function (element) {
        //console.log(element.next);
        if (element.repro == true && element.next != "") {
          fecha.push(element.next);
        }
      });

      function sumarDias(fecha, dias) {
        fecha.setDate(fecha.getDate() + dias);
        return fecha;
      }

      var d = new Date();
      var c = 1;
      var a = sumarDias(d, 45);
      var e = (a.getMonth() + 1).toString();
      var f = a.getFullYear().toString();
      var g = a.getDate().toString();

      if (e.length == 1) {
        e = "0" + e;
      }

      if (g.length == 1) {
        g = "0" + g;
      }

      var fs45 = f + "-" + e + "-" + g;
      var date = null;
      var status = 0; //console.log(this.medicines, fecha);

      if (fecha.length > 0) {
        date = fecha[0];
        status = 1;
        fecha.forEach(function (element) {
          if (element > date) {
            date = element;
          }
        });
      } else if (fecha.length == 0) {
        date = fecha[0];
        status = 1;
      } else {
        date = "";
      }

      var idsProductos = [];
      var namesProductos = [];
      var origenes = [];
      var cantidadesProductos = [];
      var precios = [];
      var ingresosIva = [];
      var porcentaje_iva = 12;
      var ivas = [];
      var formapago = 0;
      var porcentaje_tc = 0;

      if (this.switch1 == 1) {
        formapago = 1;
        porcentaje_tc = 2.5;
      } else {
        formapago = 2;
      }

      var costsProductos = [];
      var margenes = [];
      var tc = [];
      var contador = 0;
      var idCallcenter = localStorage.getItem('ui');
      var porcent_comi_med = 0;
      var porcent_comi_vist = 2;
      var porcent_comi_mensajero = 0.5;
      var porcent_comi_callcenter = 0;
      var valor_comi_med = [];
      var valor_comision_visitador = [];
      var valor_comision_callcenter = [];
      var total_comisiones = [];
      var saldo_margen = [];
      var valor_comision_mensajero = [];
      this.medicines.forEach(function (element) {
        idsProductos.push(element.id);
        namesProductos.push(element.name);
        origenes.push(element.origen);
        cantidadesProductos.push(element.cantidad);
        precios.push(parseFloat(element.price) * parseInt(element.cantidad));
        var iN = parseFloat(element.price) / (1 + porcentaje_iva / 100);
        ingresosIva.push(iN);
        var iva = iN * porcentaje_iva / 100;
        ivas.push(iva);
        var cost = parseFloat(element.costo);
        costsProductos.push(cost);
        var t = iN * porcentaje_tc / 100;
        tc.push(t);
        var margen = iN - t - cost;
        margenes.push(margen);

        if (_this5.numeroCompra[contador] == null) {
          porcent_comi_med = 20;
          porcent_comi_callcenter = 0;
          _this5.numeroCompra[contador] = _this5.numeroCompra[contador] + 1;
        } else if (_this5.numeroCompra[contador] == 1) {
          porcent_comi_med = 15;
          porcent_comi_callcenter = 1;
          _this5.numeroCompra[contador] = _this5.numeroCompra[contador] + 1;
        } else if (_this5.numeroCompra[contador] == 2) {
          porcent_comi_callcenter = 1;
          porcent_comi_med = 10;
          _this5.numeroCompra[contador] = _this5.numeroCompra[contador] + 1;
        } else if (_this5.numeroCompra[contador] == 3) {
          porcent_comi_callcenter = 1;
          porcent_comi_med = 5;
          _this5.numeroCompra[contador] = _this5.numeroCompra[contador] + 1;
        } else if (_this5.numeroCompra[contador] == 4) {
          porcent_comi_callcenter = 1;
          porcent_comi_med = 0;
          _this5.numeroCompra[contador] = _this5.numeroCompra[contador] + 1;
        } else {
          porcent_comi_callcenter = 1;
          porcent_comi_med = 0;
          _this5.numeroCompra[contador] = _this5.numeroCompra[contador] + 1;
        }

        var m = margen * porcent_comi_med / 100;
        var v = margen * porcent_comi_vist / 100;
        var c = margen * porcent_comi_callcenter / 100;
        var me = margen * porcent_comi_mensajero / 100;
        valor_comi_med.push(m);
        valor_comision_mensajero.push(me);
        valor_comision_visitador.push(v);
        valor_comision_callcenter.push(c);
        total_comisiones.push(m + v + c);
        saldo_margen.push(margen - (m + v + c));
        contador = contador + 1;
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "put",
        url: "http://127.0.0.1:8000/api/putCliente",
        data: JSON.stringify({
          id: this.idCliente,
          client_name: this.name,
          client_nit: this.nit,
          client_phone: this.phone,
          client_genre: this.genre,
          client_email: this.email,
          birthdate: this.date,
          paisf: this.paisf,
          deparf: this.deparf,
          callef: this.callef,
          apartamentof: this.apartamentof,
          municipiof: this.municipiof,
          residenciaf: this.residenciaf,
          codigof: this.codigof,
          telefonof: this.telefonof,
          paise: this.paise,
          depare: this.depare,
          callee: this.callee,
          apartamentoe: this.apartamentoe,
          municipioe: this.municipioe,
          residenciae: this.residenciae,
          codigoe: this.codigoe,
          telefonoe: this.telefonoe
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        //console.log(Response);
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
          method: "post",
          url: "http://127.0.0.1:8000/api/postOrder",
          data: JSON.stringify({
            client_id: Response.data.mess.id,
            namet: _this5.nameT,
            numbert: _this5.numberT,
            numbertr: _this5.numberTr,
            datetr: _this5.datetr,
            total: _this5.total,
            recipe_id: _this5.idRecipe
          }),
          headers: {
            authorization: "Bearer " + token,
            "content-type": "application/json"
          }
        }).then(function (Response) {
          //console.log(Response);
          var idOrder = Response.data.mess.id;
          axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "post",
            url: "http://127.0.0.1:8000/api/postOrderProd",
            data: JSON.stringify({
              cantidad: quantita,
              medicines: ids,
              order_id: Response.data.mess.id
            }),
            headers: {
              authorization: "Bearer " + token,
              "content-type": "application/json"
            }
          }).then(function (Response) {
            _this5.datetr = null;
            axios__WEBPACK_IMPORTED_MODULE_1___default()({
              method: "put",
              url: "http://127.0.0.1:8000/api/putReceSta",
              data: JSON.stringify({
                id: _this5.idRecipe,
                status: 7,
                status1: date,
                reproDate: _this5.fechaHoy,
                status2: status
              }),
              headers: {
                authorization: "Bearer " + token,
                "content-type": "application/json"
              }
            }).then(function (Response) {
              //Response.data.mess.id;
              axios__WEBPACK_IMPORTED_MODULE_1___default()({
                method: "post",
                url: "http://127.0.0.1:8000/api/postTransaction",
                data: JSON.stringify({
                  origenes: origenes,
                  idsProductos: idsProductos,
                  namesProductos: namesProductos,
                  orden_id: idOrder,
                  id_cliente: _this5.idCliente,
                  fecha_compra: _this5.fechaHoy,
                  cantidadesProductos: cantidadesProductos,
                  precios: precios,
                  porcentaje_iva: porcentaje_iva,
                  ingresosIva: ingresosIva,
                  ivas: ivas,
                  forma_pago: formapago,
                  porcentaje_tc: porcentaje_tc,
                  tc: tc,
                  costsProductos: costsProductos,
                  margenes: margenes,
                  numeroCompra: _this5.numeroCompra,
                  id_medico: _this5.idMedico,
                  porcent_comi_med: porcent_comi_med,
                  valor_comi_med: valor_comi_med,
                  id_visitador: _this5.idVisitador,
                  porcent_comi_vist: porcent_comi_vist,
                  valor_comision_visitador: valor_comision_visitador,
                  id_callcenter: idCallcenter,
                  porcent_comi_callcenter: porcent_comi_callcenter,
                  valor_comision_callcenter: valor_comision_callcenter,
                  porcent_comi_mensajero: porcent_comi_mensajero,
                  valor_comision_mensajero: valor_comision_mensajero,
                  total_comisiones: total_comisiones,
                  saldo_margen: saldo_margen
                }),
                headers: {
                  authorization: "Bearer " + token,
                  "content-type": "application/json"
                }
              }).then(function (Response) {
                _this5.isSidebarActiveLocal = false;
                _this5.activeLoading = false;

                _this5.$vs.loading.close();

                _this5.$vs.notify({
                  title: "Satisfactorio",
                  text: "Pedido enviado al facturador exitosamente.",
                  color: "success",
                  iconPack: 'feather',
                  icon: 'icon-check'
                });

                _this5.$router.go();
              }).catch(function (err) {
                console.log(err);
                _this5.isSidebarActiveLocal = false;
                _this5.activeLoading = false;

                _this5.$vs.loading.close();
              });
            }).catch(function (err) {
              _this5.activeLoading = false;

              _this5.$vs.loading.close(); //activado = true;


              console.log(err);
            });
          }).catch(function (err) {
            _this5.activeLoading = false;

            _this5.$vs.loading.close();

            activado = true; //console.log(err);
          });
        }).catch(function (err) {
          _this5.activeLoading = false;

          _this5.$vs.loading.close();

          activado = true;
          console.log(err);
        });
      }).catch(function (err) {
        _this5.activeLoading = false;

        _this5.$vs.loading.close();

        activado = true;
        console.log(err);
      });
    },
    notificacion1: function notificacion1() {
      var _this6 = this;

      this.openLoading();
      var token = localStorage.getItem("tu");
      var ids = [];
      var fechass = [];
      var fecha = [];
      var quantita = []; //console.log(this.medicines);

      this.medicines.forEach(function (element) {
        if (element.cantidad > 0) {
          ids.push(element.id);
        }
      });
      this.cantidades.forEach(function (element) {
        if (element > 0) {
          quantita.push(element);
        }
      });
      this.medicines.forEach(function (element) {
        //console.log(element.next);
        if (element.repro == true && element.next != "") {
          fecha.push(element.next);
        }
      });
      var date = null; //console.log(this.medicines, fecha);

      var status = 0;

      if (fecha.length > 0) {
        status = 1;
        date = fecha[0];
        fecha.forEach(function (element) {
          if (element > date) {
            date = element;
          }
        });
      } else if (fecha.length == 0) {
        status = 1;
        date = fecha[0];
      } else {
        date = "";
      }

      var idsProductos = [];
      var namesProductos = [];
      var origenes = [];
      var cantidadesProductos = [];
      var precios = [];
      var ingresosIva = [];
      var porcentaje_iva = 12;
      var ivas = [];
      var formapago = 0;
      var porcentaje_tc = 0;

      if (this.switch1 == 1) {
        formapago = 1;
        porcentaje_tc = 2.5;
      } else {
        formapago = 2;
      }

      var costsProductos = [];
      var margenes = [];
      var tc = [];
      var contador = 0;
      var idCallcenter = localStorage.getItem('ui');
      var porcent_comi_med = 0;
      var porcent_comi_vist = 2;
      var porcent_comi_callcenter = 0;
      var porcent_comi_mensajero = 0.5;
      var valor_comi_med = [];
      var valor_comision_visitador = [];
      var valor_comision_callcenter = [];
      var total_comisiones = [];
      var saldo_margen = [];
      var valor_comision_mensajero = [];
      this.medicines.forEach(function (element) {
        idsProductos.push(element.id);
        namesProductos.push(element.name);
        origenes.push(element.origen);
        cantidadesProductos.push(element.cantidad);
        precios.push(parseFloat(element.price) * parseInt(element.cantidad));
        var iN = parseFloat(element.price) / (1 + porcentaje_iva / 100);
        ingresosIva.push(iN);
        var iva = iN * porcentaje_iva / 100;
        ivas.push(iva);
        var cost = parseFloat(element.costo);
        costsProductos.push(cost);
        var t = iN * porcentaje_tc / 100;
        tc.push(t);
        var margen = iN - t - cost;
        margenes.push(margen);

        if (_this6.numeroCompra[contador] == null) {
          porcent_comi_med = 20;
          porcent_comi_callcenter = 0;
          _this6.numeroCompra[contador] = _this6.numeroCompra[contador] + 1;
        } else if (_this6.numeroCompra[contador] == 1) {
          porcent_comi_med = 15;
          porcent_comi_callcenter = 1;
          _this6.numeroCompra[contador] = _this6.numeroCompra[contador] + 1;
        } else if (_this6.numeroCompra[contador] == 2) {
          porcent_comi_callcenter = 1;
          porcent_comi_med = 10;
          _this6.numeroCompra[contador] = _this6.numeroCompra[contador] + 1;
        } else if (_this6.numeroCompra[contador] == 3) {
          porcent_comi_callcenter = 1;
          porcent_comi_med = 5;
          _this6.numeroCompra[contador] = _this6.numeroCompra[contador] + 1;
        } else if (_this6.numeroCompra[contador] == 4) {
          porcent_comi_callcenter = 1;
          porcent_comi_med = 0;
          _this6.numeroCompra[contador] = _this6.numeroCompra[contador] + 1;
        } else {
          porcent_comi_callcenter = 1;
          porcent_comi_med = 0;
          _this6.numeroCompra[contador] = _this6.numeroCompra[contador] + 1;
        }

        var m = margen * porcent_comi_med / 100;
        var v = margen * porcent_comi_vist / 100;
        var me = margen * porcent_comi_mensajero / 100;
        var c = margen * porcent_comi_callcenter / 100;
        valor_comi_med.push(m);
        valor_comision_visitador.push(v);
        valor_comision_mensajero.push(me);
        valor_comision_callcenter.push(c);
        total_comisiones.push(m + v + c);
        saldo_margen.push(margen - (m + v + c));
        contador = contador + 1;
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "post",
        url: "http://127.0.0.1:8000/api/postCliente",
        data: JSON.stringify({
          client_name: this.name,
          client_nit: this.nit,
          client_phone: this.phone,
          client_genre: this.genre,
          client_email: this.email,
          birthdate: this.date,
          paisf: this.paisf,
          deparf: this.deparf,
          callef: this.callef,
          apartamentof: this.apartamentof,
          municipiof: this.municipiof,
          residenciaf: this.residenciaf,
          codigof: this.codigof,
          telefonof: this.telefonof,
          paise: this.paise,
          depare: this.depare,
          callee: this.callee,
          apartamentoe: this.apartamentoe,
          municipioe: this.municipioe,
          residenciae: this.residenciae,
          codigoe: this.codigoe,
          telefonoe: this.telefonoe
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        //console.log(this.datetr);
        var idC = Response.data.mess.id;
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
          method: "post",
          url: "http://127.0.0.1:8000/api/postOrder",
          data: JSON.stringify({
            client_id: Response.data.mess.id,
            namet: _this6.nameT,
            numbert: _this6.numberT,
            datetr: _this6.datetr,
            numbertr: _this6.numberTr,
            total: _this6.total,
            recipe_id: _this6.idRecipe
          }),
          headers: {
            authorization: "Bearer " + token,
            "content-type": "application/json"
          }
        }).then(function (Response) {
          //console.log(Response);
          var idOrder = Response.data.mess.id;
          axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "post",
            url: "http://127.0.0.1:8000/api/postOrderProd",
            data: JSON.stringify({
              cantidad: quantita,
              medicines: ids,
              order_id: Response.data.mess.id
            }),
            headers: {
              authorization: "Bearer " + token,
              "content-type": "application/json"
            }
          }).then(function (Response) {
            axios__WEBPACK_IMPORTED_MODULE_1___default()({
              method: "put",
              url: "http://127.0.0.1:8000/api/putReceSta",
              data: JSON.stringify({
                id: _this6.idRecipe,
                status: 7,
                status1: date,
                reproDate: _this6.fechaHoy,
                status2: status
              }),
              headers: {
                authorization: "Bearer " + token,
                "content-type": "application/json"
              }
            }).then(function (Response) {
              axios__WEBPACK_IMPORTED_MODULE_1___default()({
                method: "post",
                url: "http://127.0.0.1:8000/api/postTransaction",
                data: JSON.stringify({
                  origenes: origenes,
                  idsProductos: idsProductos,
                  namesProductos: namesProductos,
                  orden_id: idOrder,
                  id_cliente: idC,
                  fecha_compra: _this6.fechaHoy,
                  cantidadesProductos: cantidadesProductos,
                  precios: precios,
                  porcentaje_iva: porcentaje_iva,
                  ingresosIva: ingresosIva,
                  ivas: ivas,
                  forma_pago: formapago,
                  porcentaje_tc: porcentaje_tc,
                  tc: tc,
                  costsProductos: costsProductos,
                  margenes: margenes,
                  numeroCompra: _this6.numeroCompra,
                  id_medico: _this6.idMedico,
                  porcent_comi_med: porcent_comi_med,
                  valor_comi_med: valor_comi_med,
                  id_visitador: _this6.idVisitador,
                  porcent_comi_vist: porcent_comi_vist,
                  valor_comision_visitador: valor_comision_visitador,
                  id_callcenter: idCallcenter,
                  porcent_comi_callcenter: porcent_comi_callcenter,
                  valor_comision_callcenter: valor_comision_callcenter,
                  total_comisiones: total_comisiones,
                  saldo_margen: saldo_margen
                }),
                headers: {
                  authorization: "Bearer " + token,
                  "content-type": "application/json"
                }
              }).then(function (Response) {
                _this6.isSidebarActiveLocal = false;
                _this6.activeLoading = false;

                _this6.$vs.loading.close();

                _this6.$vs.notify({
                  title: "Satisfactorio",
                  text: "Pedido enviado al facturador exitosamente.",
                  color: "success",
                  iconPack: 'feather',
                  icon: 'icon-check'
                });

                _this6.$router.go();
              }).catch(function (err) {
                console.log(err);
                _this6.isSidebarActiveLocal = false;
                _this6.activeLoading = false;

                _this6.$vs.loading.close();
              });
            }).catch(function (err) {
              _this6.activeLoading = false;

              _this6.$vs.loading.close();

              activado = true;
              console.log(err);
            });
          }).catch(function (err) {
            _this6.activeLoading = false;

            _this6.$vs.loading.close();

            activado = true; //console.log(err);
          });
        }).catch(function (err) {
          _this6.activeLoading = false;

          _this6.$vs.loading.close();

          activado = true;
          console.log(err);
        });
      }).catch(function (err) {
        _this6.activeLoading = false;

        _this6.$vs.loading.close();

        activado = true;
        console.log(err);
      });
    },
    initValues: function initValues() {
      if (this.data.id) return;
      this.dataId = null;
      this.dataName = "";
      this.dataCategory = null;
      this.dataOrder_status = "pending";
      this.dataPrice = 0;
      this.dataImg = null;
    },
    getItem: function getItem(id) {
      var _this7 = this;

      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getReceProd/" + id,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        Response.data.forEach(function (element) {
          _this7.itms.push(element.product_id);
        });
      }).catch(function (err) {
        console.log(err);
      });
    },
    updateData: function updateData() {},
    nuevoCliente: function nuevoCliente() {
      var _this8 = this;

      this.openLoading();

      if (this.checkBox1 == "true") {
        this.paise = this.paisf;
        this.depare = this.deparf;
        this.callee = this.callef;
        this.apartamentoe = this.apartamentof;
        this.municipioe = this.municipiof;
        this.residenciae = this.residenciaf;
        this.codigoe = this.codigof;
        this.telefonoe = this.telefonof;
      }

      if (this.nit == null || this.nit == "") {
        this.nit = "C/F";
      }

      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "post",
        url: "http://127.0.0.1:8000/api/postCliente",
        data: JSON.stringify({
          client_name: this.name,
          client_nit: this.nit,
          client_phone: this.phone,
          client_genre: this.genre,
          client_email: this.email,
          birthdate: this.date,
          paisf: this.paisf,
          deparf: this.deparf,
          callef: this.callef,
          apartamentof: this.apartamentof,
          municipiof: this.municipiof,
          residenciaf: this.residenciaf,
          codigof: this.codigof,
          telefonof: this.telefonof,
          paise: this.paise,
          depare: this.depare,
          callee: this.callee,
          apartamentoe: this.apartamentoe,
          municipioe: this.municipioe,
          residenciae: this.residenciae,
          codigoe: this.codigoe,
          telefonoe: this.telefonoe
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this8.name = null;
        _this8.nit = null;
        _this8.phone = null;
        _this8.genre = null;
        _this8.email = null;
        _this8.date = null;
        _this8.paisf = null;
        _this8.deparf = null;
        _this8.callef = null;
        _this8.apartamentof = null;
        _this8.municipiof = null;
        _this8.residenciaf = null;
        _this8.codigof = null;
        _this8.telefonof = null;
        _this8.paise = null;
        _this8.depare = null;
        _this8.callee = null;
        _this8.apartamentoe = null;
        _this8.municipioe = null;
        _this8.residenciae = null;
        _this8.codigoe = null;
        _this8.telefonoe = null;
        _this8.activeLoading = false;

        _this8.$vs.loading.close();

        _this8.isSidebarActiveLocal = false;

        _this8.$vs.notify({
          title: "Satisfactorio",
          text: "Cliente creado exitosamente.",
          color: "success",
          iconPack: 'feather',
          icon: 'icon-check'
        });
      }).catch(function (err) {
        _this8.activeLoading = false;

        _this8.$vs.loading.close();

        _this8.$vs.notify({
          title: "Error",
          text: "Error, por favor intentelo más tarde.",
          color: "danger",
          iconPack: 'feather',
          icon: 'icon-check'
        });

        console.log(err);
      });
    },
    submitData: function submitData() {
      var _this9 = this;

      if (this.checkBox1 == "true") {
        this.paise = this.paisf;
        this.depare = this.deparf;
        this.callee = this.callef;
        this.apartamentoe = this.apartamentof;
        this.municipioe = this.municipiof;
        this.residenciae = this.residenciaf;
        this.codigoe = this.codigof;
        this.telefonoe = this.telefonof;
      }

      this.nameT = null;
      this.numberT = null;
      this.numberTr = null; //this.getItem(this.idRecipe);

      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getMedicines/" + this.idRecipe,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        //console.log(Response.data);
        _this9.getDate();

        _this9.medicines = [];

        function sumarDias(fecha, dias) {
          fecha.setDate(fecha.getDate() + dias);
          return fecha;
        }

        if (_this9.idCliente == null || _this9.idCliente == undefined || _this9.idCliente == "") {
          _this9.idCliente = 0;
        }

        _this9.cont = 0;
        Response.data.forEach(function (element) {
          //console.log(element);
          axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "get",
            url: "http://127.0.0.1:8000/api/getComiProd/" + element.product_id + "/" + _this9.idMedico + "/" + _this9.idCliente,
            headers: {
              authorization: "Bearer " + token,
              "content-type": "application/json"
            }
          }).then(function (Response) {
            _this9.numeroCompra.push(Response.data[0].numero_compra_medico);

            _this9.fechasCompra.push(Response.data[0].fecha_compra);
          }).catch(function (err) {
            console.log(err);
          });
          var d = new Date();
          var c = parseInt(element.cantidad);
          var a = sumarDias(d, c);
          var e = (a.getMonth() + 1).toString();
          var f = a.getFullYear().toString();
          var g = a.getDate().toString();

          if (e.length == 1) {
            e = "0" + e;
          }

          if (g.length == 1) {
            g = "0" + g;
          }

          var h = f + "-" + e + "-" + g;

          _this9.medicines.push({
            id: element.product_id,
            name: element.name,
            presentacion: element.presentacion,
            dispensing: element.dispensing,
            price: element.price,
            costo: element.cost,
            cantidad: 1,
            totale: 0,
            unidad: "Pastillas",
            repro: false,
            next: h,
            origen: 1
          });

          var p = parseFloat(element.price);

          _this9.sumar(p, 1, _this9.cont);

          _this9.cont = _this9.cont + 1;
        }); //console.log(this.numeroCompra, this.medicines,this.idRecipe,this.idMedico,this.origen,this.idCliente, this.fechaHoy);

        _this9.popupActive2 = true;
      }).catch(function (err) {
        console.log(err);
      });
    },
    updateCurrImg: function updateCurrImg(input) {
      var _this10 = this;

      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this10.dataImg = e.target.result;
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/call-center/dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DataViewSidebar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataViewSidebar.vue */ "./resources/js/src/views/DataViewSidebar.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      idReceta: null,
      fechaR: null,
      activado: 'Nuevo',
      companyDetails: {
        name: "",
        addressLine1: "9 N. Sherwood Court",
        addressLine2: "Nombre Médico",
        zipcode: "94203",
        mailId: "hello@pixinvent.net",
        mobile: "s"
      },
      rId: '',
      clAddress: '',
      clPhone: '',
      pName: '',
      pPhone: '',
      medicinas: [],
      image: "/images/medicamentos/demol.PNG",
      drName: "",
      drEmail: "",
      drPhone: "",
      nuevaRecetaData: {},
      invoiceData: {
        tasks: [{
          id: 1,
          task: "Website Redesign",
          hours: 60,
          rate: 15,
          amount: 90000
        }, {
          id: 2,
          task: "Newsletter template design",
          hours: 20,
          rate: 12,
          amount: 24000
        }],
        subtotal: 114000,
        discountPercentage: 5,
        discountedAmount: 5700,
        total: 108300
      }
    }, _defineProperty(_ref, "medicinas", []), _defineProperty(_ref, "popupActive", false), _defineProperty(_ref, "message", ""), _defineProperty(_ref, "idRecipe", null), _defineProperty(_ref, "origen", null), _defineProperty(_ref, "idMedico", null), _defineProperty(_ref, "popact", false), _defineProperty(_ref, "users", []), _defineProperty(_ref, "popupActive2", false), _defineProperty(_ref, "addNewDataSidebar", false), _defineProperty(_ref, "sidebarData", {}), _defineProperty(_ref, "status", ["Nuevo", "Empaquetando", "En Ruta", "Entregado", "Cancelado", "Reagendado", "Facturando"]), _defineProperty(_ref, "buscar", ""), _defineProperty(_ref, "clickNotClose", true), _defineProperty(_ref, "isEmailSidebarActive", true), _defineProperty(_ref, "mailFilter", "inbox"), _defineProperty(_ref, "settings", {
      maxScrollbarLength: 60,
      wheelSpeed: 0.3
    }), _defineProperty(_ref, "recipes", []), _defineProperty(_ref, "doctors", []), _defineProperty(_ref, "primary", "primary"), _ref;
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    DataViewSidebar: _DataViewSidebar_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    searchRecipes: function searchRecipes() {
      var result = this.recipes;

      if (!this.buscar) {
        return result;
      }

      var texto = this.buscar.toLowerCase();

      var filter = function filter(event) {
        return event.name.toLowerCase().includes(texto) || event.phone.toLowerCase().includes(texto) || event.doctor_name.toLowerCase().includes(texto);
      };

      return result.filter(filter);
    }
  },
  created: function created() {
    this.getUsers();
    this.getRecipesNew();
  },
  methods: {
    openReagendar: function openReagendar(id) {
      this.popact = true;
      this.idReceta = id;
    },
    reagendar: function reagendar() {
      var _this = this;

      this.openLoading();
      var token = localStorage.getItem('tu');
      var f = new Date();
      var fecha = f.getDate() + "-" + (f.getMonth() + 1) + "-" + f.getFullYear();
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "put",
        url: "http://127.0.0.1:8000/api/reagendar",
        data: JSON.stringify({
          id: this.idReceta,
          status: 6,
          reproDate: fecha,
          status1: this.fechaR
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this.fechaR = null;
        _this.popact = false;
        _this.activeLoading = false;

        _this.$vs.loading.close();

        _this.getRecipesNew();

        _this.$vs.notify({
          title: "Satisfactorio",
          text: "Pedido reagendado exitosamente.",
          color: "success",
          iconPack: 'feather',
          icon: 'icon-check'
        });
      }).catch(function (err) {
        _this.activeLoading = false;

        _this.$vs.loading.close();

        console.log(err);
      });
    },
    descartar: function descartar(id) {
      var _this2 = this;

      this.openLoading();
      var token = localStorage.getItem('tu');
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "put",
        url: "http://127.0.0.1:8000/api/changeStatus",
        data: JSON.stringify({
          id: id,
          status: 5
        }),
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this2.activeLoading = false;

        _this2.$vs.loading.close();

        _this2.getRecipesNew();

        _this2.$vs.notify({
          title: "Satisfactorio",
          text: "Pedido descartado exitosamente.",
          color: "success",
          iconPack: 'feather',
          icon: 'icon-check'
        });
      }).catch(function (err) {
        _this2.activeLoading = false;

        _this2.$vs.loading.close();

        console.log(err);
      });
    },
    verReceta: function verReceta(id, id1) {
      var _this3 = this;

      this.popupActive = true;
      var token = localStorage.getItem("tu");
      var idu = id;
      var idm = id1;
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getReceta/" + idu,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        var f = new Date();
        var fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
        _this3.nuevaRecetaData.dateIssue = fecha;
        _this3.pName = Response.data[0].name;
        _this3.pPhone = Response.data[0].phone;
        _this3.rId = Response.data[0].id;
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
          method: "get",
          url: "http://127.0.0.1:8000/api/getInfoRecipie/" + idu,
          headers: {
            authorization: "Bearer " + token,
            "content-type": "application/json"
          }
        }).then(function (Response) {
          _this3.medicinas = []; //console.log(Response);

          Response.data.forEach(function (element) {
            _this3.medicinas.push(element);
          }); //console.log(idm);

          axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "get",
            url: "http://127.0.0.1:8000/api/getUser/" + idm,
            headers: {
              authorization: "Bearer " + token,
              "content-type": "application/json"
            }
          }).then(function (Response) {
            _this3.drName = Response.data.name;

            if (Response.data.clinicPhone == null || Response.data.clinicPhone == '') {
              _this3.clPhone = '+502: 8452-9862';
            } else {
              _this3.clPhone = Response.data.clinicPhone;
            }

            if (Response.data.clinicAddress == null || Response.data.clinicAddress == '') {
              _this3.clAddress = 'Via 4 zona 4 Guatemala';
            } else {
              _this3.clAddress = Response.data.clinicAddress;
            }

            _this3.drEmail = Response.data.email;

            if (Response.data.phone == null || Response.data.phone == "") {
              _this3.drPhone = "+502: 8452-9862";
            } else {
              _this3.drPhone = "+502: " + Response.data.phone;
            }
          }).catch(function (err) {
            console.log(err);
            _this3.activeLoading = false;

            _this3.$vs.loading.close();
          });
        }).catch(function (err) {
          console.log(err);
          _this3.activeLoading = false;

          _this3.$vs.loading.close();
        });
      }).catch(function (err) {
        console.log(err);
        _this3.activeLoading = false;

        _this3.$vs.loading.close();
      });
    },
    editData: function editData(data, id, id1, id2) {
      //console.log(data, id, id1, id2);
      this.popupActive2 = false; // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))

      var data1 = {
        data: data,
        idRecipies: id,
        idMedico: id1,
        origen: id2
      }; //console.log(data1);

      this.sidebarData = data1;
      this.toggleDataSidebar(true);
    },
    openModal: function openModal(phone, id, status, origen, id1) {
      var _this4 = this;

      //console.log('Modal');
      //console.log(id1);
      //console.log(status);
      //if (status == "Nuevo") {
      this.idRecipe = id;
      this.origen = origen;
      this.idMedico = id1;
      this.users = [];
      var token = localStorage.getItem("tu");
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getCliente1/" + phone,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        Response.data.forEach(function (element) {
          _this4.users.push(element);
        });
        _this4.popupActive2 = true;
      }).catch(function (err) {
        console.log(err);
      }); //}
    },
    addNewData: function addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    addNewData1: function addNewData1(id, id1) {
      var data = {
        data: {},
        idRecipies: id,
        idMedico: id1
      };
      this.popupActive2 = false;
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    },
    openLoading: function openLoading() {
      this.activeLoading = true;
      this.$vs.loading({
        type: "default" //container: "#scrolll"

      });
    },
    getUsers: function getUsers() {
      var _this5 = this;

      var token = localStorage.getItem("tu");
      var id = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/listUsers",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        Response.data.forEach(function (element) {
          _this5.doctors.push({
            id: element.id,
            name: element.name
          });
        });
      }).catch(function (err) {
        console.log(err);
      });
    },
    colore: function colore(a) {
      if (a == 1) return "primary";
      if (a == 2) return "warning";
      if (a == 3) return "warning";
      if (a == 4) return "success";
      if (a == 5) return "danger";
      if (a == 6) return "warning";
      if (a == 7) return "warning";
      return "primary";
    },
    getFacturacion: function getFacturacion(a) {
      var _this6 = this;

      //console.log(a);
      this.activado = a;
      this.openLoading();
      var token = localStorage.getItem("tu");
      var id = localStorage.getItem("ui");
      var f = new Date();
      var fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
      fecha = fecha.toString();
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getClientess",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this6.recipes = []; //console.log(Response.data);

        Response.data.forEach(function (element) {
          element.color = 'warning';
          element.status = 'Facturación'; //console.log(element.status);

          _this6.doctors.forEach(function (e) {
            if (e.id == element.doctor_id) {
              element.doctor_name = e.name;
            }
          });

          _this6.recipes.push(element);

          if (_this6.recipes.length == 0) {
            _this6.message = "No hay resultados.";
          }
        });
        _this6.activeLoading = false;

        _this6.$vs.loading.close();
      }).catch(function (err) {
        console.log(err);
        _this6.activeLoading = false;

        _this6.$vs.loading.close();

        localStorage.removeItem("tu");
        localStorage.removeItem("ru");
        localStorage.removeItem("ui");
        localStorage.removeItem("regi");
        localStorage.removeItem("nuevaRecetaData");

        _this6.$router.push("/");
      });
    },
    getRecipesNew: function getRecipesNew() {
      var _this7 = this;

      this.activado = 'Nuevo';
      this.openLoading();
      var token = localStorage.getItem("tu");
      var id = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getReceNew",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this7.recipes = []; //console.log(Response.data);

        Response.data.forEach(function (element) {
          element.color = "primary";
          element.status = "Nuevo";
          element.permission = 0;
          element.origen = 1;
          element.idMedico = element.doctor_id; //console.log(element.status);

          _this7.doctors.forEach(function (e) {
            if (e.id == element.doctor_id) {
              element.doctor_name = e.name;
            }
          });

          _this7.recipes.push(element);

          if (_this7.recipes.length == 0) {
            _this7.message = "No hay resultados.";
          }
        });
        _this7.activeLoading = false;

        _this7.$vs.loading.close();
      }).catch(function (err) {
        console.log(err);
        _this7.activeLoading = false;

        _this7.$vs.loading.close();

        localStorage.removeItem("tu");
        localStorage.removeItem("ru");
        localStorage.removeItem("ui");
        localStorage.removeItem("regi");
        localStorage.removeItem("nuevaRecetaData");

        _this7.$router.push("/");
      });
    },
    getRecipes: function getRecipes(a) {
      var _this8 = this;

      this.activado = a;
      this.openLoading();
      var token = localStorage.getItem("tu");
      var id = localStorage.getItem("ui");

      if (a == 'Empaquetando') {
        a = 2;
      } else if (a == 'En Ruta') {
        a = 3;
      } else if (a == 'Entregado') {
        a = 4;
      } else if (a == 'Cancelado') {
        a = 5;
      } else if (a == 'Reagendado') {
        a = 6;
      } else if (a == 'Facturando') {
        a = 7;
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getReceSta/" + a,
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        _this8.recipes = []; //console.log(Response.data);

        Response.data.forEach(function (element) {
          element.color = _this8.colore(element.status);
          element.status = _this8.status[element.status - 1];
          element.permission = 0;
          element.origen = 1;
          element.idMedico = element.doctor_id; //console.log(element.status);

          _this8.doctors.forEach(function (e) {
            if (e.id == element.doctor_id) {
              element.doctor_name = e.name;
            }
          });

          _this8.recipes.push(element);

          if (_this8.recipes.length == 0) {
            _this8.message = "No hay resultados.";
          }
        });
        _this8.activeLoading = false;

        _this8.$vs.loading.close();
      }).catch(function (err) {
        console.log(err);
        _this8.activeLoading = false;

        _this8.$vs.loading.close();

        localStorage.removeItem("tu");
        localStorage.removeItem("ru");
        localStorage.removeItem("ui");
        localStorage.removeItem("regi");
        localStorage.removeItem("nuevaRecetaData");

        _this8.$router.push("/");
      });
    },
    getRerecipes: function getRerecipes(a) {
      var _this9 = this;

      this.activado = a;
      this.openLoading();
      var token = localStorage.getItem("tu");
      var id = localStorage.getItem("ui");
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "http://127.0.0.1:8000/api/getRerecipes",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      }).then(function (Response) {
        //console.log(Response);
        _this9.recipes = []; //console.log(Response.data);

        Response.data.forEach(function (element) {
          element.color = 'warning';
          element.status = 'Reprogramada';
          element.permission = 1;
          element.origen = 3;
          element.idMedico = element.doctor_id; //console.log(element.status);

          _this9.doctors.forEach(function (e) {
            if (e.id == element.doctor_id) {
              element.doctor_name = e.name;
            }
          });

          _this9.recipes.push(element);

          if (_this9.recipes.length == 0) {
            _this9.message = "No hay resultados.";
          }
        });
        _this9.activeLoading = false;

        _this9.$vs.loading.close();
      }).catch(function (err) {
        console.log(err);
        _this9.activeLoading = false;

        _this9.$vs.loading.close();

        localStorage.removeItem("tu");
        localStorage.removeItem("ru");
        localStorage.removeItem("ui");
        localStorage.removeItem("regi");
        localStorage.removeItem("nuevaRecetaData");

        _this9.$router.push("/");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DataViewSidebar.vue?vue&type=style&index=0&id=6ebd1a33&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DataViewSidebar.vue?vue&type=style&index=0&id=6ebd1a33&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".add-new-data-sidebar[data-v-6ebd1a33]  .vs-sidebar--background {\n  z-index: 52010;\n}\n.add-new-data-sidebar[data-v-6ebd1a33]  .vs-sidebar {\n  z-index: 52010;\n  width: 400px;\n  max-width: 90vw;\n}\n[dir] .add-new-data-sidebar[data-v-6ebd1a33]  .vs-sidebar .img-upload {\n  margin-top: 2rem;\n}\n[dir] .add-new-data-sidebar[data-v-6ebd1a33]  .vs-sidebar .img-upload .con-img-upload {\n  padding: 0;\n}\n.add-new-data-sidebar[data-v-6ebd1a33]  .vs-sidebar .img-upload .con-input-upload {\n  width: 100%;\n}\n[dir] .add-new-data-sidebar[data-v-6ebd1a33]  .vs-sidebar .img-upload .con-input-upload {\n  margin: 0;\n}\n.scroll-area--data-list-add-new[data-v-6ebd1a33] {\n  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);\n}\n.scroll-area--data-list-add-new[data-v-6ebd1a33]:not(.ps) {\n  overflow-y: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*=========================================================================================\n    File Name: email.scss\n    Description: Email app's styles. This is imported in Email.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n#email-app .vs-sidebar--background {\n  position: absolute;\n}\n[dir=ltr] #email-app .select-all-chexkbox .vs-checkbox {\n  margin-right: 0.8rem;\n}\n[dir=rtl] #email-app .select-all-chexkbox .vs-checkbox {\n  margin-left: 0.8rem;\n}\n#email-app .email-filter-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 75px);\n}\n[dir] #email-app .email-filter-scroll-area {\n  margin: auto;\n}\n#email-app .email-content-scroll-area {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 100px);\n}\n[dir] #email-app .email-content-scroll-area {\n  margin: auto;\n}\n#email-app .scroll-area-mail-content {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 6.3%);\n}\n[dir] #email-app .scroll-area-mail-content {\n  margin: auto;\n}\n[dir] #email-app .email__mails .mail__opened-mail {\n  background-color: #eee;\n}\n#email-app .email__mails .email__mail-item {\n  transition: all 0.35s;\n}\n[dir] #email-app .email__mails .email__mail-item:not(:first-of-type) .mail__mail-item {\n  border-top: 1px solid #dae1e7;\n}\n#email-app .email__mails .email__mail-item .mail__mail-item {\n  transition: all 0.2s;\n}\n#email-app .email__mails .email__mail-item .mail__mail-item:hover {\n  transition: all 0.2s;\n}\n[dir] #email-app .email__mails .email__mail-item .mail__mail-item:hover {\n  transform: translateY(-4px);\n  box-shadow: 0px 3px 10px 0px #ccc;\n}\n#email-app .email__mails .email__mail-item .mail__mail-item .feather-icon {\n  color: #9c9c9c;\n}\n[dir] #email-app .email-view-sidebar .vs-sidebar {\n  background-color: #f8f8f8 !important;\n}\n[dir=ltr] #email-app .email-view-sidebar .vs-sidebar {\n  border-left: 1px solid #dae1e7;\n}\n[dir=rtl] #email-app .email-view-sidebar .vs-sidebar {\n  border-right: 1px solid #dae1e7;\n}\n#email-app .email-view-sidebar .email-header {\n  z-index: 1;\n  position: relative;\n}\n[dir] #email-app .email-view-sidebar .email-header {\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.04);\n  border-bottom: 1px solid #eee;\n}\n#email-app .email-view-sidebar .open-mail-label {\n  transition: all 0.35s;\n}\n[dir=ltr] #email-app .email-view-sidebar .mail__attachment .vs-chip--text {\n  margin-left: 0;\n  margin-right: 0;\n}\n[dir=rtl] #email-app .email-view-sidebar .mail__attachment .vs-chip--text {\n  margin-right: 0;\n  margin-left: 0;\n}\n.con-vs-dialog.email-compose .vs-dialog {\n  max-width: 530px;\n}\n[dir] .con-vs-dialog.email-compose .vs-dialog .vs-dialog-text {\n  padding: 0;\n}\n.con-vs-dialog.email-compose .vs-dialog .vs-dialog-text .scroll-area {\n  max-height: 75vh;\n}\n[dir] .con-vs-dialog.email-compose .vs-dialog .vs-dialog-text .compose-mail-attachment .con-input-upload {\n  margin: 0;\n}\n.con-vs-dialog.email-compose .con-img-upload .con-input-upload {\n  height: 2.5rem;\n  width: 100%;\n}\n[dir] .con-vs-dialog.email-compose .con-img-upload .img-upload {\n  margin: 0;\n  margin-bottom: 0.5rem;\n}\n[dir=ltr] .con-vs-dialog.email-compose .con-img-upload .img-upload {\n  margin-right: 1.5rem;\n}\n[dir=rtl] .con-vs-dialog.email-compose .con-img-upload .img-upload {\n  margin-left: 1.5rem;\n}\n[dir] .con-vs-dialog.email-compose .quill-editor {\n  margin-bottom: 1.5rem;\n}\n.con-vs-dialog.email-compose .ql-editor {\n  height: 150px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DataViewSidebar.vue?vue&type=style&index=0&id=6ebd1a33&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DataViewSidebar.vue?vue&type=style&index=0&id=6ebd1a33&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=style&index=0&id=6ebd1a33&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DataViewSidebar.vue?vue&type=style&index=0&id=6ebd1a33&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DataViewSidebar.vue?vue&type=template&id=6ebd1a33&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/DataViewSidebar.vue?vue&type=template&id=6ebd1a33&scoped=true& ***!
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
    "vs-sidebar",
    {
      staticClass: "add-new-data-sidebar items-no-padding",
      attrs: {
        "click-not-close": "",
        "position-right": "",
        parent: "body",
        "default-index": "1",
        color: "primary",
        spacer: ""
      },
      model: {
        value: _vm.isSidebarActiveLocal,
        callback: function($$v) {
          _vm.isSidebarActiveLocal = $$v
        },
        expression: "isSidebarActiveLocal"
      }
    },
    [
      _c(
        "div",
        { staticClass: "mt-6 flex items-center justify-between px-6" },
        [
          _c("h4", [_vm._v("Datos del Clíente")]),
          _vm._v(" "),
          _c("feather-icon", {
            staticClass: "cursor-pointer",
            attrs: { icon: "XIcon" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.isSidebarActiveLocal = false
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-divider", { staticClass: "mb-0" }),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: { title: "Agregar Producto", active: _vm.popupActive4 },
          on: {
            "update:active": function($event) {
              _vm.popupActive4 = $event
            }
          }
        },
        [
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
                        { key: indextr, attrs: { data: tr } },
                        [
                          _c("vs-td", { attrs: { data: data[indextr].name } }, [
                            _vm._v(_vm._s(data[indextr].name))
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].precentacion } },
                            [_vm._v(_vm._s(data[indextr].precentacion))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].description } },
                            [_vm._v(_vm._s(data[indextr].description))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            {
                              staticStyle: { "white-space": "nowrap" },
                              attrs: { data: data[indextr].precentacion }
                            },
                            [_vm._v("Q " + _vm._s(data[indextr].price))]
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
                                  icon: "icon-plus"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.agregarL(tr)
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
                  _c("vs-th", { attrs: { "sort-key": "email" } }, [
                    _vm._v("Nombre")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "username" } }, [
                    _vm._v("Precentación")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "website" } }, [
                    _vm._v("Descripción")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "website" } }, [
                    _vm._v("Precio")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "id" } }, [
                    _vm._v("Acción")
                  ])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            fullscreen: "",
            title: "Medicamentos",
            active: _vm.popupActive2
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive2 = $event
            }
          }
        },
        [
          _c("p", [_vm._v("Seleccione los medicamentos a enviar.")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full sm:w-3/4 lg:w-3/4 mb-base" },
              [
                _c("vx-card", [
                  _c(
                    "div",
                    { staticClass: "vx-row" },
                    [
                      _c(
                        "vs-table",
                        {
                          staticClass: "responsive",
                          attrs: { data: _vm.medicines },
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
                                        { attrs: { data: data[indextr].name } },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(data[indextr].name) +
                                              "\n                                        "
                                          ),
                                          _c(
                                            "vs-checkbox",
                                            {
                                              staticClass: "mt-5",
                                              model: {
                                                value: tr.repro,
                                                callback: function($$v) {
                                                  _vm.$set(tr, "repro", $$v)
                                                },
                                                expression: "tr.repro"
                                              }
                                            },
                                            [_vm._v("Reprogramar")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-td",
                                        {
                                          attrs: {
                                            data: data[indextr].presentacion
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                data[indextr].presentacion
                                              ) +
                                              "\n                                        "
                                          ),
                                          _c("vs-input", {
                                            staticClass: "inputx mt-5",
                                            attrs: {
                                              size: "small",
                                              type: "date"
                                            },
                                            model: {
                                              value: tr.next,
                                              callback: function($$v) {
                                                _vm.$set(tr, "next", $$v)
                                              },
                                              expression: "tr.next"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-td",
                                        {
                                          attrs: {
                                            data: data[indextr].dispensing
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(data[indextr].dispensing)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-td",
                                        [
                                          _c("vs-input-number", {
                                            attrs: { min: "0" },
                                            on: {
                                              input: function($event) {
                                                return _vm.sumar(
                                                  data[indextr].cantidad,
                                                  data[indextr].price,
                                                  indextr
                                                )
                                              },
                                              change: function($event) {
                                                return _vm.sumar(
                                                  data[indextr].cantidad,
                                                  data[indextr].price,
                                                  indextr
                                                )
                                              }
                                            },
                                            model: {
                                              value: data[indextr].cantidad,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  data[indextr],
                                                  "cantidad",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "data[indextr].cantidad"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-td",
                                        {
                                          staticStyle: {
                                            "white-space": "nowrap"
                                          },
                                          attrs: { data: data[indextr].price }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Q\n                                        " +
                                              _vm._s(data[indextr].price) +
                                              "\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-td",
                                        {
                                          staticStyle: {
                                            "white-space": "nowrap"
                                          },
                                          attrs: {
                                            data: (data[indextr].subtotal =
                                              data[indextr].price *
                                              data[indextr].cantidad)
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Q " +
                                              _vm._s(data[indextr].subtotal)
                                          )
                                        ]
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
                              _c("vs-th", [_vm._v("Nombre")]),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("Precentación")]),
                              _vm._v(" "),
                              _c(
                                "vs-th",
                                { attrs: { "sort-key": "username" } },
                                [_vm._v("Dosis Médica")]
                              ),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("Cantidad")]),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("Precio")]),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("Subtotal")])
                            ],
                            1
                          )
                        ],
                        2
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
                        "vs-button",
                        {
                          staticClass: "mt-5 mr-3",
                          attrs: { color: "warning", type: "filled" },
                          on: {
                            click: function($event) {
                              ;(_vm.popupActive2 = false),
                                (_vm.isSidebarActiveLocal = false)
                            }
                          }
                        },
                        [_vm._v("Regresar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          staticClass: "mt-5 mr-3",
                          attrs: { type: "filled" },
                          on: { click: _vm.agregarP }
                        },
                        [_vm._v("Nuevo Producto")]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col w-full sm:w-1/4 lg:w-1/4 mb-base" },
              [
                _c(
                  "vx-card",
                  [
                    _c("p", {
                      domProps: { textContent: _vm._s("Total: Q " + _vm.total) }
                    }),
                    _vm._v(" "),
                    _c("vs-divider", { staticClass: "mb-0" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-row" }, [
                      _c("ul", { staticClass: "centerx" }, [
                        _c(
                          "li",
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: { "vs-value": "1" },
                                model: {
                                  value: _vm.switch1,
                                  callback: function($$v) {
                                    _vm.switch1 = $$v
                                  },
                                  expression: "switch1"
                                }
                              },
                              [_vm._v("Tarjeta de Crédito")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: { "vs-value": "2" },
                                model: {
                                  value: _vm.switch1,
                                  callback: function($$v) {
                                    _vm.switch1 = $$v
                                  },
                                  expression: "switch1"
                                }
                              },
                              [_vm._v("Pago contra Entrega")]
                            )
                          ],
                          1
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.switch1 == "1"
                      ? _c(
                          "div",
                          { staticClass: "vx-row" },
                          [
                            _c("vs-input", {
                              staticClass: "mt-5 w-full",
                              attrs: {
                                label: "Nombre del Titular",
                                name: "item-name"
                              },
                              model: {
                                value: _vm.nameT,
                                callback: function($$v) {
                                  _vm.nameT = $$v
                                },
                                expression: "nameT"
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
                                    value: _vm.nameT === "",
                                    expression: "nameT  === ''"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [_vm._v("Este campo es requerido.")]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.switch1 == "1"
                      ? _c(
                          "div",
                          { staticClass: "vx-row" },
                          [
                            _c("vs-input", {
                              staticClass: "mt-5 w-full",
                              attrs: {
                                label: "Número de Tarjeta",
                                type: "number",
                                name: "item-name"
                              },
                              model: {
                                value: _vm.numberT,
                                callback: function($$v) {
                                  _vm.numberT = $$v
                                },
                                expression: "numberT"
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
                                    value: _vm.numberT === "",
                                    expression: "numberT  === ''"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [_vm._v("Este campo es requerido.")]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.switch1 == "1"
                      ? _c(
                          "div",
                          { staticClass: "vx-row" },
                          [
                            _c("vs-input", {
                              staticClass: "mt-5 w-full",
                              attrs: {
                                label: "Número de Transacción",
                                name: "item-name",
                                type: "number"
                              },
                              model: {
                                value: _vm.numberTr,
                                callback: function($$v) {
                                  _vm.numberTr = $$v
                                },
                                expression: "numberTr"
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
                                    value: _vm.numberTr === "",
                                    expression: "numberTr  === ''"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [_vm._v("Este campo es requerido.")]
                            ),
                            _vm._v(" "),
                            _c("vs-input", {
                              staticClass: "mt-5 w-full",
                              attrs: {
                                label: "Fecha de Vencimiento",
                                name: "item-name",
                                type: "month"
                              },
                              model: {
                                value: _vm.datetr,
                                callback: function($$v) {
                                  _vm.datetr = $$v
                                },
                                expression: "datetr"
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
                                    value: _vm.datetr === "",
                                    expression: "datetr  === ''"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [_vm._v("Este campo es requerido.")]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.switch1 == "2"
                      ? _c("div", { staticClass: "vx-row" }, [
                          _c("p", { staticClass: "mt-5" }, [
                            _vm._v(
                              "Paga en efectivo en el momento de la entrega."
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-row" },
                      [
                        _vm.tipe == 1 && _vm.switch1 == "1"
                          ? _c(
                              "vs-button",
                              {
                                staticClass: "mt-5",
                                attrs: {
                                  color: "primary",
                                  type: "filled",
                                  disabled:
                                    _vm.total <= 0 ||
                                    _vm.nameT == "" ||
                                    _vm.nameT == null ||
                                    _vm.numberT == "" ||
                                    _vm.numberT == null ||
                                    _vm.numberTr == "" ||
                                    _vm.numberTr == null ||
                                    _vm.datetr == null ||
                                    _vm.datetr == ""
                                },
                                on: {
                                  click: function($event) {
                                    ;(_vm.popupActive2 = false),
                                      _vm.notificacion1()
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            Realizar el Pedido"
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.tipe == 2 && _vm.switch1 == "1"
                          ? _c(
                              "vs-button",
                              {
                                staticClass: "mt-5",
                                attrs: {
                                  color: "primary",
                                  type: "filled",
                                  disabled:
                                    _vm.total <= 0 ||
                                    _vm.nameT == "" ||
                                    _vm.nameT == null ||
                                    _vm.numberT == "" ||
                                    _vm.numberT == null ||
                                    _vm.numberTr == "" ||
                                    _vm.numberTr == null ||
                                    _vm.datetr == null ||
                                    _vm.datetr == ""
                                },
                                on: {
                                  click: function($event) {
                                    ;(_vm.popupActive2 = false),
                                      _vm.notificacion()
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            Realizar el Pedido"
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.tipe == 1 && _vm.switch1 == "2"
                          ? _c(
                              "vs-button",
                              {
                                staticClass: "mt-5",
                                attrs: {
                                  color: "primary",
                                  type: "filled",
                                  disabled: _vm.total <= 0
                                },
                                on: {
                                  click: function($event) {
                                    ;(_vm.popupActive2 = false),
                                      _vm.notificacion1()
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            Realizar el\n                            Pedido\n                        "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.tipe == 2 && _vm.switch1 == "2"
                          ? _c(
                              "vs-button",
                              {
                                staticClass: "mt-5",
                                attrs: {
                                  color: "primary",
                                  type: "filled",
                                  disabled: _vm.total <= 0
                                },
                                on: {
                                  click: function($event) {
                                    ;(_vm.popupActive2 = false),
                                      _vm.notificacion()
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            Realizar el\n                            Pedido\n                        "
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("vx-card", { staticClass: "scroll-area--data-list-add-new" }, [
        _c("div", { staticClass: "p-3" }, [
          _c(
            "div",
            { staticClass: "vx-row" },
            [
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Nombre Completo", name: "item-name" },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
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
                      value: _vm.name === "",
                      expression: "name === ''"
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
            { staticClass: "vx-row" },
            [
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Email", name: "item-name" },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
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
                      value: _vm.email === "",
                      expression: "email === ''"
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
            { staticClass: "vx-row" },
            [
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Teléfono", type: "number", name: "item-name" },
                model: {
                  value: _vm.phone,
                  callback: function($$v) {
                    _vm.phone = $$v
                  },
                  expression: "phone"
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
                      value: _vm.phone === "",
                      expression: "phone === ''"
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
            { staticClass: "vx-row" },
            [
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: {
                  label: "Fecha de Nacimiento",
                  name: "date",
                  type: "date"
                },
                model: {
                  value: _vm.date,
                  callback: function($$v) {
                    _vm.date = $$v
                  },
                  expression: "date"
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
                      value: _vm.date === "",
                      expression: "date === ''"
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
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/2 mb-base" },
              [
                _c(
                  "vs-select",
                  {
                    staticClass: "mt-5 w-full",
                    attrs: { label: "Género", name: "item-category" },
                    model: {
                      value: _vm.genre,
                      callback: function($$v) {
                        _vm.genre = $$v
                      },
                      expression: "genre"
                    }
                  },
                  _vm._l(_vm.generos, function(item) {
                    return _c("vs-select-item", {
                      key: item.value,
                      attrs: { value: item.value, text: item.text }
                    })
                  }),
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
                        value: _vm.genre === "",
                        expression: "genre === ''"
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
              { staticClass: "vx-col w-full sm:w-1/2 lg:w-1/2 mb-base" },
              [
                _c("vs-input", {
                  staticClass: "mt-5 w-full",
                  attrs: { label: "Nit", name: "item-name" },
                  model: {
                    value: _vm.nit,
                    callback: function($$v) {
                      _vm.nit = $$v
                    },
                    expression: "nit"
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
                        value: _vm.nit === "",
                        expression: "nit === ''"
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
          _c(
            "div",
            { staticClass: "vx-row" },
            [
              _c("p", [_vm._v("Dirección para la Factura")]),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Calle o Avenida", name: "callef" },
                model: {
                  value: _vm.callef,
                  callback: function($$v) {
                    _vm.callef = $$v
                  },
                  expression: "callef"
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
                      value: _vm.callef === "",
                      expression: "callef === ''"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v("Este campo es requerido.")]
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: {
                  label: "Apartamento, habitación, etc.",
                  name: "apartamentof"
                },
                model: {
                  value: _vm.apartamentof,
                  callback: function($$v) {
                    _vm.apartamentof = $$v
                  },
                  expression: "apartamentof"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Residencial/Colonia", name: "residenciaf" },
                model: {
                  value: _vm.residenciaf,
                  callback: function($$v) {
                    _vm.residenciaf = $$v
                  },
                  expression: "residenciaf"
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
                      value: _vm.residenciaf === "",
                      expression: "residenciaf  === ''"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v("Este campo es requerido.")]
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Zona", name: "codigof" },
                model: {
                  value: _vm.codigof,
                  callback: function($$v) {
                    _vm.codigof = $$v
                  },
                  expression: "codigof"
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
                      value: _vm.codigof === "",
                      expression: "codigof === ''"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v("Este campo es requerido.")]
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Ciudad/Municipio", name: "municipiof" },
                model: {
                  value: _vm.municipiof,
                  callback: function($$v) {
                    _vm.municipiof = $$v
                  },
                  expression: "municipiof"
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
                      value: _vm.municipiof === "",
                      expression: "municipiof === ''"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v("Este campo es requerido.")]
              ),
              _vm._v(" "),
              _c(
                "vs-select",
                {
                  staticClass: "mt-5 w-full",
                  attrs: { label: "Departamento", name: "depaf" },
                  model: {
                    value: _vm.deparf,
                    callback: function($$v) {
                      _vm.deparf = $$v
                    },
                    expression: "deparf"
                  }
                },
                _vm._l(_vm.departamentos, function(item) {
                  return _c("vs-select-item", {
                    key: item.id,
                    attrs: { value: item.id, text: item.name }
                  })
                }),
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
                      value: _vm.deparf === "",
                      expression: "deparf === ''"
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
            { staticClass: "vx-row" },
            [
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Teléfono", type: "number", name: "telefonof" },
                model: {
                  value: _vm.telefonof,
                  callback: function($$v) {
                    _vm.telefonof = $$v
                  },
                  expression: "telefonof"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c("ul", { staticClass: "centerx mt-5" }, [
              _c(
                "li",
                [
                  _c(
                    "vs-radio",
                    {
                      attrs: { "vs-value": "true" },
                      model: {
                        value: _vm.checkBox1,
                        callback: function($$v) {
                          _vm.checkBox1 = $$v
                        },
                        expression: "checkBox1"
                      }
                    },
                    [
                      _vm._v(
                        "Dirección envio igual a facturación.\n                        "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "vs-radio",
                    {
                      attrs: { "vs-value": "false" },
                      model: {
                        value: _vm.checkBox1,
                        callback: function($$v) {
                          _vm.checkBox1 = $$v
                        },
                        expression: "checkBox1"
                      }
                    },
                    [_vm._v("Enviar a una dirección diferente.")]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.checkBox1 == "false",
                  expression: "checkBox1 == 'false'"
                }
              ],
              staticClass: "vx-row"
            },
            [
              _c("p", { staticClass: "mt-5" }, [
                _vm._v("Dirección de Entrenga/Envío")
              ]),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Calle o Avenida", name: "callee" },
                model: {
                  value: _vm.callee,
                  callback: function($$v) {
                    _vm.callee = $$v
                  },
                  expression: "callee"
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
                      value: _vm.callee === "",
                      expression: "callee === ''"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v("Este campo es requerido.")]
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: {
                  label: "Apartamento, habitación, etc.",
                  name: "apartamentoe"
                },
                model: {
                  value: _vm.apartamentoe,
                  callback: function($$v) {
                    _vm.apartamentoe = $$v
                  },
                  expression: "apartamentoe"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Residencial/Colonia", name: "residenciae" },
                model: {
                  value: _vm.residenciae,
                  callback: function($$v) {
                    _vm.residenciae = $$v
                  },
                  expression: "residenciae"
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
                      value: _vm.residenciae === "",
                      expression: "residenciae  === ''"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v("Este campo es requerido.")]
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Zona", name: "codigof" },
                model: {
                  value: _vm.codigoe,
                  callback: function($$v) {
                    _vm.codigoe = $$v
                  },
                  expression: "codigoe"
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
                      value: _vm.codigoe === "",
                      expression: "codigoe === ''"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v("Este campo es requerido.")]
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Ciudad/Municipio", name: "municipiof" },
                model: {
                  value: _vm.municipioe,
                  callback: function($$v) {
                    _vm.municipioe = $$v
                  },
                  expression: "municipioe"
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
                      value: _vm.municipioe === "",
                      expression: "municipioe === ''"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v("Este campo es requerido.")]
              ),
              _vm._v(" "),
              _c(
                "vs-select",
                {
                  staticClass: "mt-5 w-full",
                  attrs: { label: "Departamento", name: "depare" },
                  model: {
                    value: _vm.depare,
                    callback: function($$v) {
                      _vm.depare = $$v
                    },
                    expression: "depare"
                  }
                },
                _vm._l(_vm.departamentos, function(item) {
                  return _c("vs-select-item", {
                    key: item.id,
                    attrs: { value: item.id, text: item.name }
                  })
                }),
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
                      value: _vm.depare === "",
                      expression: "depare === ''"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v("Este campo es requerido.")]
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Teléfono", type: "number", name: "telefonof" },
                model: {
                  value: _vm.telefonoe,
                  callback: function($$v) {
                    _vm.telefonoe = $$v
                  },
                  expression: "telefonoe"
                }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex flex-wrap items-center p-6",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "vs-button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.checkBox1 == "false" && _vm.nuevo == false,
                  expression: "checkBox1 == 'false' && nuevo == false"
                }
              ],
              attrs: {
                disabled:
                  _vm.nit == null ||
                  _vm.nit == "" ||
                  _vm.name == null ||
                  _vm.name == "" ||
                  _vm.phone == null ||
                  _vm.phone == "" ||
                  _vm.email == null ||
                  _vm.email == "" ||
                  _vm.genre == null ||
                  _vm.date == null ||
                  _vm.paisf == null ||
                  _vm.paisf == "" ||
                  _vm.deparf == null ||
                  _vm.deparf == undefined ||
                  _vm.callef == null ||
                  _vm.callef == "" ||
                  _vm.municipiof == null ||
                  _vm.municipiof == "" ||
                  _vm.residenciaf == null ||
                  _vm.residenciaf == "" ||
                  _vm.codigof == null ||
                  _vm.codigof == "" ||
                  _vm.paise == null ||
                  _vm.paise == "" ||
                  _vm.depare == null ||
                  _vm.depare == undefined ||
                  _vm.callee == null ||
                  _vm.callee == "" ||
                  _vm.municipioe == null ||
                  _vm.municipioe == "" ||
                  _vm.residenciae == null ||
                  _vm.residenciae == "" ||
                  _vm.codigoe == null ||
                  _vm.codigoe == ""
              },
              on: { click: _vm.submitData }
            },
            [_vm._v("Nuevo Pedido")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.nuevo == true && _vm.checkBox1 == "false",
                  expression: "nuevo == true && checkBox1 == 'false'"
                }
              ],
              attrs: {
                disabled:
                  _vm.nit == null ||
                  _vm.nit == "" ||
                  _vm.name == null ||
                  _vm.name == "" ||
                  _vm.phone == null ||
                  _vm.phone == "" ||
                  _vm.email == null ||
                  _vm.email == "" ||
                  _vm.genre == null ||
                  _vm.date == null ||
                  _vm.paisf == null ||
                  _vm.paisf == "" ||
                  _vm.deparf == null ||
                  _vm.deparf == undefined ||
                  _vm.callef == null ||
                  _vm.callef == "" ||
                  _vm.municipiof == null ||
                  _vm.municipiof == "" ||
                  _vm.residenciaf == null ||
                  _vm.residenciaf == "" ||
                  _vm.codigof == null ||
                  _vm.codigof == "" ||
                  _vm.paise == null ||
                  _vm.paise == "" ||
                  _vm.depare == null ||
                  _vm.depare == undefined ||
                  _vm.callee == null ||
                  _vm.callee == "" ||
                  _vm.municipioe == null ||
                  _vm.municipioe == "" ||
                  _vm.residenciae == null ||
                  _vm.residenciae == "" ||
                  _vm.codigoe == null ||
                  _vm.codigoe == ""
              },
              on: { click: _vm.nuevoCliente }
            },
            [_vm._v("Registrar Cliente")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.checkBox1 == "true" && _vm.nuevo == true,
                  expression: "checkBox1 == 'true' && nuevo == true"
                }
              ],
              attrs: {
                disabled:
                  _vm.nit == null ||
                  _vm.nit == "" ||
                  _vm.name == null ||
                  _vm.name == "" ||
                  _vm.phone == null ||
                  _vm.phone == "" ||
                  _vm.email == null ||
                  _vm.email == "" ||
                  _vm.genre == null ||
                  _vm.date == null ||
                  _vm.paisf == null ||
                  _vm.paisf == "" ||
                  _vm.deparf == null ||
                  _vm.deparf == undefined ||
                  _vm.callef == null ||
                  _vm.callef == "" ||
                  _vm.municipiof == null ||
                  _vm.municipiof == "" ||
                  _vm.residenciaf == null ||
                  _vm.residenciaf == "" ||
                  _vm.codigof == null ||
                  _vm.codigof == "" ||
                  _vm.telefonof == null ||
                  _vm.telefonof == ""
              },
              on: { click: _vm.nuevoCliente }
            },
            [_vm._v("Registrar Cliente")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.checkBox1 == "true" && _vm.nuevo == false,
                  expression: "checkBox1 == 'true' && nuevo == false"
                }
              ],
              attrs: {
                disabled:
                  _vm.nit == null ||
                  _vm.nit == "" ||
                  _vm.name == null ||
                  _vm.name == "" ||
                  _vm.phone == null ||
                  _vm.phone == "" ||
                  _vm.email == null ||
                  _vm.email == "" ||
                  _vm.genre == null ||
                  _vm.date == null ||
                  _vm.paisf == null ||
                  _vm.paisf == "" ||
                  _vm.deparf == null ||
                  _vm.deparf == undefined ||
                  _vm.callef == null ||
                  _vm.callef == "" ||
                  _vm.municipiof == null ||
                  _vm.municipiof == "" ||
                  _vm.residenciaf == null ||
                  _vm.residenciaf == "" ||
                  _vm.codigof == null ||
                  _vm.codigof == "" ||
                  _vm.telefonof == null ||
                  _vm.telefonof == ""
              },
              on: { click: _vm.submitData }
            },
            [_vm._v("Nuevo Pedido")]
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
                          _c("vs-td", {
                            domProps: {
                              textContent: _vm._s(
                                tr.paise +
                                  "," +
                                  tr.depare +
                                  " " +
                                  tr.municipioe +
                                  " " +
                                  tr.callee +
                                  " " +
                                  tr.apartamentoe +
                                  " " +
                                  tr.residenciae
                              )
                            }
                          }),
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
                                    return _vm.editData(
                                      tr,
                                      _vm.idRecipe,
                                      _vm.idMedico,
                                      _vm.origen
                                    )
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
                  on: {
                    click: function($event) {
                      return _vm.addNewData1(_vm.idRecipe, _vm.idMedico)
                    }
                  }
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
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: { title: "Reagendar la receta", active: _vm.popact },
          on: {
            "update:active": function($event) {
              _vm.popact = $event
            }
          }
        },
        [
          _c("p", [_vm._v("Seleccione la fecha para reagendar.")]),
          _vm._v(" "),
          _c("vs-input", {
            staticClass: "inputx",
            attrs: { type: "date" },
            model: {
              value: _vm.fechaR,
              callback: function($$v) {
                _vm.fechaR = $$v
              },
              expression: "fechaR"
            }
          }),
          _vm._v(" "),
          _vm.fechaR == ""
            ? _c("span", { staticClass: "text-danger text-sm" }, [
                _vm._v("Este campo es requerido.")
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "mt-5",
              attrs: {
                color: "primary",
                type: "filled",
                disabled: _vm.fechaR == null || _vm.fechaR == ""
              },
              on: { click: _vm.reagendar }
            },
            [_vm._v("Reagendar")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: {
            fullscreen: "",
            title: "Detalles de la Receta",
            active: _vm.popupActive
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive = $event
            }
          }
        },
        [
          _c("vx-card", { attrs: { id: "invoice-container" } }, [
            _c("div", { staticClass: "vx-row leading-loose p-base" }, [
              _c("div", { staticClass: "vx-col w-full md:w-1/2 mt-base" }, [
                _c("img", {
                  staticClass: "mr-8 rounded h-24",
                  attrs: { src: _vm.image }
                }),
                _vm._v("()\n                ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-col w-full md:w-1/2 text-right" }, [
                _c("h1", [_vm._v("Receta")]),
                _vm._v(" "),
                _c("div", { staticClass: "invoice__invoice-detail mt-6" }, [
                  _c("h6", [_vm._v("Receta No.")]),
                  _vm._v(" "),
                  _c("p", { domProps: { textContent: _vm._s(_vm.rId) } }),
                  _vm._v(" "),
                  _c("h6", { staticClass: "mt-4" }, [_vm._v("Fecha Receta")]),
                  _vm._v(" "),
                  _c("p", {
                    domProps: {
                      textContent: _vm._s(_vm.nuevaRecetaData.dateIssue)
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-col w-full md:w-1/2 mt-12" }, [
                _c("h5", [_vm._v("Paciente")]),
                _vm._v(" "),
                _c("div", { staticClass: "invoice__recipient-info my-4" }, [
                  _c("p", { domProps: { textContent: _vm._s(_vm.pName) } }),
                  _vm._v(" "),
                  _c("p", [_vm._v("Guatemala")]),
                  _vm._v(" "),
                  _c("p", { domProps: { textContent: _vm._s(_vm.pPhone) } })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "invoice__recipient-contact" })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "vx-col w-full md:w-1/2 mt-base text-right mt-12"
                },
                [
                  _c("h5", [_vm._v(_vm._s(_vm.companyDetails.name))]),
                  _vm._v(" "),
                  _c("div", { staticClass: "invoice__company-info my-4" }, [
                    _c("p", {
                      domProps: { textContent: _vm._s(_vm.clAddress) }
                    }),
                    _vm._v(" "),
                    _c("p", [
                      _c("strong", {
                        domProps: { textContent: _vm._s(_vm.drName) }
                      })
                    ]),
                    _vm._v(" "),
                    _c("p", { domProps: { textContent: _vm._s(_vm.clPhone) } })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "invoice__company-contact" }, [
                    _c(
                      "p",
                      { staticClass: "flex items-center justify-end" },
                      [
                        _c("feather-icon", {
                          attrs: { icon: "MailIcon", svgClasses: "h-4 w-4" }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "ml-2",
                          domProps: { textContent: _vm._s(_vm.drEmail) }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "flex items-center justify-end" },
                      [
                        _c("feather-icon", {
                          attrs: { icon: "PhoneIcon", svgClasses: "h-4 w-4" }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "ml-2",
                          domProps: { textContent: _vm._s(_vm.drPhone) }
                        })
                      ],
                      1
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "p-base" },
              [
                _c(
                  "vs-table",
                  { attrs: { hoverFlat: "", data: _vm.invoiceData.tasks } },
                  [
                    _vm._l(_vm.medicinas, function(item) {
                      return _c(
                        "vs-tr",
                        { key: item.id },
                        [
                          _c("vs-td", {
                            domProps: {
                              textContent: _vm._s(
                                item.name +
                                  " " +
                                  item.presentacion +
                                  " " +
                                  item.dispensing
                              )
                            }
                          })
                        ],
                        1
                      )
                    })
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "invoice__footer text-right p-base" }, [
              _c("div", { attrs: { align: "right" } }, [
                _c("h6", [_vm._v("PHARMAZone.app")])
              ])
            ])
          ])
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
                    ),
                    _vm._v(" "),
                    _c("h2", { staticClass: "mt-5" }, [_vm._v("Listados")])
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
                          class: { "text-primary": _vm.activado == "Nuevo" },
                          attrs: { tag: "span" },
                          on: {
                            click: function($event) {
                              return _vm.getRecipesNew()
                            }
                          }
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
                          class: {
                            "text-primary": _vm.activado == "Facturando"
                          },
                          attrs: { tag: "span" },
                          on: {
                            click: function($event) {
                              return _vm.getRecipes("Facturando")
                            }
                          }
                        },
                        [
                          _c("feather-icon", {
                            attrs: { icon: "FileTextIcon" }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-lg ml-3" }, [
                            _vm._v("Facturando")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass:
                            "flex items-center mt-4 mb-2 cursor-pointer",
                          class: {
                            "text-primary": _vm.activado == "Empaquetando"
                          },
                          attrs: { tag: "span" },
                          on: {
                            click: function($event) {
                              return _vm.getRecipes("Empaquetando")
                            }
                          }
                        },
                        [
                          _c("feather-icon", {
                            attrs: { icon: "ArchiveIcon" }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-lg ml-3" }, [
                            _vm._v("Despacho")
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
                          class: { "text-primary": _vm.activado == "En Ruta" },
                          attrs: { tag: "span" },
                          on: {
                            click: function($event) {
                              return _vm.getRecipes("En Ruta")
                            }
                          }
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
                                _vm._v("En Ruta")
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
                          class: {
                            "text-primary": _vm.activado == "Entregado"
                          },
                          attrs: { tag: "span" },
                          on: {
                            click: function($event) {
                              return _vm.getRecipes("Entregado")
                            }
                          }
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
                          class: {
                            "text-primary": _vm.activado == "Reagendado"
                          },
                          attrs: { tag: "span" },
                          on: {
                            click: function($event) {
                              return _vm.getRecipes("Reagendado")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "flex items-center mb-2" },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "ClockIcon" }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-lg ml-3" }, [
                                _vm._v("Reagendado")
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
                            "flex items-center justify-between items-center mt-4 cursor-pointer",
                          class: {
                            "text-primary": _vm.activado == "Reprogramada"
                          },
                          attrs: { tag: "span" },
                          on: {
                            click: function($event) {
                              return _vm.getRerecipes("Reprogramada")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "flex items-center mb-2" },
                            [
                              _c("feather-icon", {
                                attrs: { icon: "WatchIcon" }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-lg ml-3" }, [
                                _vm._v("Reprogramada")
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
                            "flex items-center justify-between items-center mt-4 cursor-pointer",
                          class: {
                            "text-primary": _vm.activado == "Cancelado"
                          },
                          attrs: { tag: "span" },
                          on: {
                            click: function($event) {
                              return _vm.getRecipes("Cancelado")
                            }
                          }
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
                                _vm._v("Descartadas")
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
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.recipes.length == 0,
                  expression: "recipes.length == 0"
                }
              ]
            },
            [
              _c("div", { attrs: { align: "center" } }, [
                _c("h4", { domProps: { textContent: _vm._s(_vm.message) } })
              ])
            ]
          ),
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
                      staticClass: "email__mail-item",
                      style: { transitionDelay: index * 0.1 + "s" }
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
                                    : _c("span", [_vm._v("(no subject)")]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  mail.status1 != "2020"
                                    ? _c("span", [
                                        _vm._v(
                                          "Próxima llamada: " +
                                            _vm._s(mail.status1)
                                        )
                                      ])
                                    : _c("span", [
                                        _vm._v(_vm._s(mail.dateIssue))
                                      ]),
                                  _vm._v(" "),
                                  mail.receiver != null ? _c("br") : _vm._e(),
                                  _vm._v(" "),
                                  mail.receiver != null
                                    ? _c("span", [
                                        _vm._v(
                                          "Recivido por: " +
                                            _vm._s(mail.receiver)
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(mail.doctor_name))])
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
                                      { staticClass: "mail__details" },
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
                                                "vx-row h-2 w-2 rounded-full mr-2",
                                              class: "bg-" + mail.color
                                            }),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(_vm._s(mail.status))
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        mail.reproDate == "2020"
                                          ? _c("br")
                                          : _vm._e(),
                                        _vm._v(" "),
                                        mail.reproDate != "2020"
                                          ? _c(
                                              "div",
                                              { staticClass: "vx-row" },
                                              [
                                                _c("span", [
                                                  _vm._v(_vm._s(mail.reproDate))
                                                ])
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "vx-row" },
                                          [
                                            _c(
                                              "vx-tooltip",
                                              { attrs: { text: "Reagendar" } },
                                              [
                                                _c("vs-button", {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value:
                                                        mail.status == "Nuevo",
                                                      expression:
                                                        "mail.status == 'Nuevo'"
                                                    }
                                                  ],
                                                  staticClass: "mr-3",
                                                  attrs: {
                                                    color: "rgb(249, 142, 5)",
                                                    size: "small",
                                                    type: "filled",
                                                    "icon-pack": "feather",
                                                    icon: "icon-clock"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.openReagendar(
                                                        mail.id
                                                      )
                                                    }
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "vx-tooltip",
                                              { attrs: { text: "Descartar" } },
                                              [
                                                _c("vs-button", {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value:
                                                        mail.status ==
                                                          "Nuevo" ||
                                                        mail.status ==
                                                          "Reagendado",
                                                      expression:
                                                        "mail.status == 'Nuevo' || mail.status == 'Reagendado'"
                                                    }
                                                  ],
                                                  staticClass: "mr-3",
                                                  attrs: {
                                                    color: "danger",
                                                    size: "small",
                                                    type: "filled",
                                                    "icon-pack": "feather",
                                                    icon: "icon-trash"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.descartar(
                                                        mail.id
                                                      )
                                                    }
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "vx-tooltip",
                                              { attrs: { text: "Ver Receta" } },
                                              [
                                                _c("vs-button", {
                                                  staticClass: "mr-3",
                                                  attrs: {
                                                    color: "rgb(62, 201, 214)",
                                                    size: "small",
                                                    type: "filled",
                                                    "icon-pack": "feather",
                                                    icon: "icon-eye"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.verReceta(
                                                        mail.id,
                                                        mail.doctor_id
                                                      )
                                                    }
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "vx-tooltip",
                                              { attrs: { text: "Nuevo" } },
                                              [
                                                _c("vs-button", {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value:
                                                        mail.status ==
                                                          "Nuevo" ||
                                                        mail.status ==
                                                          "Reagendado" ||
                                                        mail.permission == 1,
                                                      expression:
                                                        "mail.status == 'Nuevo' || mail.status == 'Reagendado' || mail.permission == 1"
                                                    }
                                                  ],
                                                  staticClass: "mr-5",
                                                  attrs: {
                                                    color: "primary",
                                                    type: "filled",
                                                    size: "small",
                                                    "icon-pack": "feather",
                                                    icon: "icon-send"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.openModal(
                                                        mail.phone,
                                                        mail.id,
                                                        mail.status,
                                                        mail.origen,
                                                        mail.idMedico
                                                      )
                                                    }
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex w-full" }, [
                            _c("div", { staticClass: "mail__message truncate" })
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

/***/ "./resources/js/src/views/DataViewSidebar.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/DataViewSidebar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataViewSidebar_vue_vue_type_template_id_6ebd1a33_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataViewSidebar.vue?vue&type=template&id=6ebd1a33&scoped=true& */ "./resources/js/src/views/DataViewSidebar.vue?vue&type=template&id=6ebd1a33&scoped=true&");
/* harmony import */ var _DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataViewSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/DataViewSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DataViewSidebar_vue_vue_type_style_index_0_id_6ebd1a33_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataViewSidebar.vue?vue&type=style&index=0&id=6ebd1a33&lang=scss&scoped=true& */ "./resources/js/src/views/DataViewSidebar.vue?vue&type=style&index=0&id=6ebd1a33&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataViewSidebar_vue_vue_type_template_id_6ebd1a33_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataViewSidebar_vue_vue_type_template_id_6ebd1a33_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6ebd1a33",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/DataViewSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/DataViewSidebar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/DataViewSidebar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DataViewSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/DataViewSidebar.vue?vue&type=style&index=0&id=6ebd1a33&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/DataViewSidebar.vue?vue&type=style&index=0&id=6ebd1a33&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_6ebd1a33_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=style&index=0&id=6ebd1a33&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DataViewSidebar.vue?vue&type=style&index=0&id=6ebd1a33&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_6ebd1a33_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_6ebd1a33_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_6ebd1a33_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_6ebd1a33_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_style_index_0_id_6ebd1a33_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/DataViewSidebar.vue?vue&type=template&id=6ebd1a33&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/DataViewSidebar.vue?vue&type=template&id=6ebd1a33&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_template_id_6ebd1a33_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataViewSidebar.vue?vue&type=template&id=6ebd1a33&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/DataViewSidebar.vue?vue&type=template&id=6ebd1a33&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_template_id_6ebd1a33_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataViewSidebar_vue_vue_type_template_id_6ebd1a33_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/call-center/dashboard.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/call-center/dashboard.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_d669a862___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=d669a862& */ "./resources/js/src/views/call-center/dashboard.vue?vue&type=template&id=d669a862&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/call-center/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss&");
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/call-center/dashboard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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