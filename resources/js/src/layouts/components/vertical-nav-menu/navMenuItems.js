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
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
    rol: 2
  },
  {
    url: "/listadoRecetas",
    name: "Listado Recetas",
    slug: "listadoRecetas",
    icon: "ListIcon",
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
  //Admin - Productos
  {
    url: "/listadoProductos",
    name: "Listado Medicamentos",
    slug: "listadoProductos",
    icon: "ListIcon",
    rol: 1
  },
  //Admin - Categorias
  {
    url: "/listadoCategorias",
    name: "Listado Categorias",
    slug: "listadoCategorias",
    icon: "ListIcon",
    rol: 1
  },
  {
    url: "/dashboardCallCenter",
    name: "Listado Call-Center",
    slug: "ListCallCenter",
    icon: "ListIcon",
    rol: 3
  },
  {
    url: "/1visitador",
    name: "Listado médicos",
    slug: "ListMedicos",
    icon: "ListIcon",
    rol: 6
  },
  {
    url: "/nuevoMedico",
    name: "Nuevo Médico",
    slug: "nuevoMedico",
    icon: "PlusIcon",
    rol: 6
  }
]
