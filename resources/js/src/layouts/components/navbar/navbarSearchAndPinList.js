export default {
  pages: {
    key: "title",
    data: [
      //Medico
      {title: 'Medico',   url: '/home',      icon: 'CircleIcon', is_bookmarked: false, id: 2},
      {title: 'Nueva Receta', url: '/nuevoPaciente', icon: 'PlusIcon', is_bookmarked: false, id: 2},
      //admin
      {title: 'Consola', url: '/consola', icon: 'CircleIcon', is_bookmarked: false, id:1},
      {title: 'Listado Medicamentos', url: '/listadoProductos', icon: 'ListIcon', is_bookmarked: false, id: 1},
      {title: 'Nuevo Medicamento', url: '/nuevoProducto', icon: 'PlusIcon', is_bookmarked: false, id: 1},
      {title: 'Listado Categorias', url: '/listadoCategorias', icon: 'ListIcon', is_bookmarked: false, id: 1},
      {title: 'Nueva Categoría', url: '/nuevaCategoria', icon: 'PlusIcon', is_bookmarked: false, id: 1},
    ]
  }
}
