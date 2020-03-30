/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  //Facturador
  {
    url: "/facturacion",
    name: "Listado de Pedidos ",
    slug: "facturacion",
    icon: "ListIcon",
    rol: [9],
    disabled: 3,
  },
  //Medico
  {
    url: "/home",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
    rol: [2],
    disabled: 3
  },
  {
    url: "/nuevoPaciente",
    name: "Nueva Receta",
    slug: "nuevoPaciente",
    icon: "PlusIcon",
    rol: [2],
    disabled: 3
  },
  {
    url: "/listadoRecetas",
    name: "Listado Recetas",
    slug: "listadoRecetas",
    icon: "ListIcon",
    rol: [2],
    disabled: 3
  },
  {
    url: "/listadoPacientes",
    name: "Listado Diagnósticos",
    slug: "listadoPacientes",
    icon: "ListIcon",
    rol: [2],
    disabled: 1
  },
  //Admin
  {
    url: "/consola",
    name: "Consola",
    slug: "consola",
    icon: "HomeIcon",
    rol: [1],
    disabled: 3
  },
  //Admin - Productos
  {
    url: "/listadoProductos",
    name: "Listado Medicamentos",
    slug: "listadoProductos",
    icon: "ListIcon",
    rol: [1],
    disabled: 3
  },
  //Admin - Categorias
  {
    url: "/listadoCategorias",
    name: "Listado Categorias",
    slug: "listadoCategorias",
    icon: "ListIcon",
    rol: [1],
    disabled: 3
  },
  //Admin - roles
  {
    url: "/listadoRoles",
    name: "Listado Roles",
    slug: "listadoRoles",
    icon: "ListIcon",
    rol: [1],
    disabled: 3
  },
  //Admin - Laboratorios 
  {
    url: "/listadoLabs",
    name: "Listado Laboratorios",
    slug: "listadoLabs",
    icon: "ListIcon",
    rol: [1],
    disabled: 3
  },
  //Admin - Presentaciones
  {
    url: "/listadoPres",
    name: "Listado Presentaciones",
    slug: "listadoPres",
    icon: "ListIcon",
    rol: [1],
    disabled: 3
  },
  {
    url: "/boodskapper",
    name: "Listado Envíos",
    slug: "boodskapper",
    icon: "ListIcon",
    rol: [5],
    disabled: 3
  },
  {
    url: "/visitador",
    name: "Listado Pedidos",
    slug: "visitador",
    icon: "ListIcon",
    rol: [4],
    disabled: 3
  },
  //Admin - Usuarios
  {
    url: "/listadoUsurios",
    name: "Listado Usuarios",
    slug: "listadoUsurios",
    icon: "ListIcon",
    rol: [1],
    disabled: 3
  },
  {
    url: "/dashboardCallCenter",
    name: "Listado Call-Center",
    slug: "ListCallCenter",
    icon: "ListIcon",
    rol: [3],
    disabled: 3
  },
  // {
  //   url: "/buscarRecetas",
  //   name: "Buscar Recetas",
  //   slug: "BuscarRecetas",
  //   icon: "ListIcon",
  //   rol: 3,
  //   disabled: 3
  // },
  {
    url: "/buscarPedidos",
    name: "Buscar Pedidos",
    slug: "BuscarPedidos",
    icon: "ListIcon",
    rol: [3],
    disabled: 3
  },
  {
    url: "/1visitador",
    name: "Listado médicos",
    slug: "ListMedicos",
    icon: "ListIcon",
    rol: [6],
    disabled: 3
  },
  {
    url: "/nuevoMedico",
    name: "Nuevo Médico",
    slug: "nuevoMedico",
    icon: "PlusIcon",
    rol: [6],
    disabled: 3
  },
  //Todos
  {
    url: "/user/profile",
    name: "Cambiar Contreseña ",
    slug: "user/profile",
    icon: "KeyIcon",
    rol: [0],
    disabled: 3
  },
  {
    url: "/reportes",
    name: "Reportes",
    slug: "reportes",
    icon: "FileIcon",
    rol: [1,2,6,3,5],
    disabled: 3
  }
]
