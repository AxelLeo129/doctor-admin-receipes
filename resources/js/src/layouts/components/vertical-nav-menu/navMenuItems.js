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
    name: "Pacientes",
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
  //Admin - Productos
  {
    url: "/nuevoProducto",
    name: "Nuevo Medicamento",
    slug: "nuevoMedicamento",
    icon: "PlusIcon",
    rol: 1
  },
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
    url: "/nuevaCategoria",
    name: "Nueva Categoria",
    slug: "nuevaCategoria",
    icon: "PlusIcon",
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
