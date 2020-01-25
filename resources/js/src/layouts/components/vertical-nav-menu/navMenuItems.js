/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  //Medico
  {
    url: "/home",
    name: "Medico",
    slug: "home",
    icon: "CircleIcon",
    rol: 2
  },
  {
    url: "/nuevoPaciente",
    name: "Nueva Receta",
    slug: "nuevaReceta",
    icon: "PlusIcon",
    rol: 2
  },
  //Admin
  {
    url: "/consola",
    name: "Consola",
    slug: "consola",
    icon: "CircleIcon",
    rol: 1
  },
  {
    url: "/nuevoProducto",
    name: "Nuevo Producto",
    slug: "nuevoProducto",
    icon: "PlusIcon",
    rol: 1
  },
  {
    url: "/listadoProductos",
    name: "Listado Medicamentos",
    slug: "listadoProductos",
    icon: "ListIcon",
    rol: 1
  }
]
