/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/',
          name: 'page-login',
          component: () => import('@/views/pages/Login.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next();
            } else if (rol == 1 || rol == 2 || rol == 3 || rol == 4 || rol == 5 || rol == 6) {
              next({
                name: 'home'
              });
            } else {
              next();
            }
          }
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/views/pages/Register.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next();
            } else if (rol == 1 || rol == 2 || rol == 3 || rol == 4 || rol == 5 || rol == 6) {
              next({
                name: 'home'
              });
            } else {
              next();
            }
          }
        },
        {
          path: '/recuperar',
          name: 'recuperar',
          component: () => import('@/views/pages/recuperar.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next();
            } else if (rol == 1 || rol == 2 || rol == 3 || rol == 4 || rol == 5 || rol == 6) {
              next({
                name: 'home'
              });
            } else {
              next();
            }
          }
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue')
        },
      ]
    },
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next();
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 4) {
              next({
                name: "visitador"
              });
            } else if (rol == 5) {
              next({
                name: "boodskapper"
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          }
        },
        {
          path: '/boodskapper',
          name: 'boodskapper',
          component: () => import('@/views/mensajero/dashboard.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 4) {
              next({ name: "visitador" });
            } else if (rol == 5) {
              next();
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          }
        },
        {
          path: '/consola',
          name: 'consola',
          component: () => import('@/views/admin/Dashboard.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 4) {
              next({
                name: "visitador"
              });
            } else if (rol == 5) {
              next({
                name: "boodskapper"
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          }
        },
        {
          path: '/user/profile',
          name: 'perfil',
          component: () => import('@/views/user/EditarUsuario.vue'),
          beforeEnter(to, from, next) {
            let token = localStorage.getItem('tu');
            let idu = localStorage.getItem('ui');
            let rol = localStorage.getItem('ru');
            if (token != null && token != "" && idu != null && idu != "" && rol != null && rol != "") {
              next();
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Usuario' },
              { title: 'Editar Perfil', active: true },
            ],
            pageTitle: 'Editar Perfil',
            rule: 'editor'
          }
        },
        {
          path: '/nuevoProducto',
          name: 'nuevoProducto',
          component: () => import('@/views/admin/NuevoProducto.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Productos' },
              { title: 'Nuevo Producto', active: true },
            ],
            pageTitle: 'Nuevo Producto',
            rule: 'editor'
          }
        },
        {
          path: '/editarProducto/:productId',
          name: 'app-user-edit',
          component: () => import('@/views/admin/EditarProducto.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Productos' },
              { title: 'Editar Producto', active: true },
            ],
            pageTitle: 'Editar Producto',
            rule: 'editor'
          },
        },
        {
          path: '/listadoProductos',
          name: 'listadoProductos',
          component: () => import('@/views/admin/ListadoProductos.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Productos' },
              { title: 'Listado Medicamentos', active: true },
            ],
            pageTitle: 'Listado Medicamentos',
            rule: 'editor'
          }
        },
        {
          path: '/page2',
          name: 'page-2',
          component: () => import('./views/Page2.vue')
        },
        {
          path: '/listadoRecetas',
          name: 'listadoRecetas',
          component: () => import('@/views/pages/listadoRecetas.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next();
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Recetas' },
              { title: 'Listado Recetas', active: true },
            ],
            pageTitle: 'Listado Recetas',
            rule: 'editor'
          }
        },
        {
          path: '/listadoPacientes',
          name: 'listadoPacientes',
          component: () => import('@/views/pages/pacientes.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next();
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Pacientes' },
              { title: 'Listado Diagnósticos', active: true },
            ],
            pageTitle: 'Listado Diagnósticos',
            rule: 'editor'
          }
        },
        {
          path: '/verDiagnostico/:idPa',
          name: 'verDiagnostico',
          component: () => import('@/views/pages/diagnostico.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next();
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Pacientes' },
              { title: 'Diagnósticos', active: true },
            ],
            pageTitle: 'Diagnósticos',
            rule: 'editor'
          }
        },
        {
          path: '/nuevoPaciente',
          name: 'extra-component-form-wizard',
          component: () => import('@/views/pages/nuevoPaciente.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next();
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Medico', url: '/home' },
              { title: 'Pacientes' },
              { title: 'Nueva Receta', active: true },
            ],
            pageTitle: 'Nueva Receta',
            rule: 'editor'
          }
        },
        {
          path: '/agregarProductos',
          name: 'ecommerce-shop',
          component: () => import('./views/pages/agregarProductos.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next();
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/home' },
              { title: 'Paciente' },
              { title: 'Nueva Receta', active: true },
            ],
            pageTitle: 'Agregar Medicamentos',
            rule: 'editor'
          }
        },
        {
          path: '/editarReceta',
          name: 'editarReceta',
          component: () => import('./views/pages/checkOut.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next();
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/home' },
              { title: 'Paciente' },
              { title: 'Nueva Receta', active: true },
            ],
            pageTitle: 'Editar Medicamentos',
            rule: 'editor'
          }
        },
        {
          path: '/datosPaciente',
          name: 'datosPaciente',
          component: () => import('./views/pages/paso4.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next();
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/home' },
              { title: 'Paciente' },
              { title: 'Nueva Receta', active: true },
            ],
            pageTitle: 'Agregar Datos Paciente',
            rule: 'editor'
          },
        },
        {
          path: '/recetaFinal',
          name: 'recetaFinal',
          component: () => import('./views/pages/recetaFinal.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next();
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          }
        },
        {
          path: '/receta/:idReceta',
          name: 'receta',
          component: () => import('./views/pages/verReceta.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next();
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          }
        },
        {
          path: '/showRecipe/:recipeId',
          name: 'showRecipe',
          component: () => import('./views/pages/showRecipe.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next();
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          }
        },
        //Admin - Presentación
        {
          path: '/listadoPres',
          name: 'listadoPres',
          component: () => import('@/views/admin/presentaciones/dashboard.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Presentaciones' },
              { title: 'Listado Presentaciones', active: true },
            ],
            pageTitle: 'Listado Presentaciones',
            rule: 'editor'
          }
        },
        {
          path: '/nuevaPre',
          name: 'nuevaPre',
          component: () => import('@/views/admin/presentaciones/nuevoPre.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Presentaciones' },
              { title: 'Nueva Presentación', active: true },
            ],
            pageTitle: 'Nueva Presentación',
            rule: 'editor'
          }
        },
        {
          path: '/editarPre/:preId',
          name: 'editarPre',
          component: () => import('@/views/admin/presentaciones/editarPre.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Presentaciones' },
              { title: 'Editar Presentación', active: true },
            ],
            pageTitle: 'Editar Presentación',
            rule: 'editor'
          }
        },
        //Admin - Laboratorios
        {
          path: '/listadoLabs',
          name: 'listadoLabs',
          component: () => import('@/views/admin/laboratorios/dashboard.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Laboratorios' },
              { title: 'Listado Laboratorios', active: true },
            ],
            pageTitle: 'Listado Laboratorios',
            rule: 'editor'
          }
        },
        {
          path: '/nuevoLab',
          name: 'nuevoLab',
          component: () => import('@/views/admin/laboratorios/nuevoLab.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Laboratorios' },
              { title: 'Nuevo Laboratorio', active: true },
            ],
            pageTitle: 'Nuevo Laboratorio',
            rule: 'editor'
          }
        },
        {
          path: '/editarLab/:labId',
          name: 'editarLab',
          component: () => import('@/views/admin/laboratorios/editLab.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Laboratorio' },
              { title: 'Editar Laboratorio', active: true },
            ],
            pageTitle: 'Editar Laboratorio',
            rule: 'editor'
          }
        },
        //Admin - Users
        {
          path: '/listadoUsurios',
          name: 'listadoUsurios',
          component: () => import('@/views/admin/users/dashboard.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Usuarios' },
              { title: 'Listado Usuarios', active: true },
            ],
            pageTitle: 'Listado Usuarios',
            rule: 'editor'
          }
        },
        {
          path: '/nuevoUsuario',
          name: 'nuevoUsuario',
          component: () => import('@/views/admin/users/nuevoUsurio.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Usuarios' },
              { title: 'Nuevo Usuario', active: true },
            ],
            pageTitle: 'Nuevo Usuario',
            rule: 'editor'
          }
        },
        {
          path: '/editarUsuario/:idUsuario',
          name: 'editarUsuario',
          component: () => import('@/views/admin/users/editarUsuario.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Usuarios' },
              { title: 'Editar Usuario', active: true },
            ],
            pageTitle: 'Editar Usuario',
            rule: 'editor'
          }
        },
        //Admin - Roles 
        {
          path: '/listadoRoles',
          name: 'listadoRoles',
          component: () => import('@/views/admin/roles/dashboard.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Roles' },
              { title: 'Listado Roles', active: true },
            ],
            pageTitle: 'Listado Roles',
            rule: 'editor'
          }
        },
        {
          path: '/nuevoRol',
          name: 'nuevoRol',
          component: () => import('@/views/admin/roles/nuevoRol.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Roles' },
              { title: 'Nuevo Rol', active: true },
            ],
            pageTitle: 'Nuevo Rol',
            rule: 'editor'
          }
        },
        {
          path: '/editarRol/:rolId',
          name: 'editarRol',
          component: () => import('@/views/admin/roles/editarRol.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Roles' },
              { title: 'Editar Rol', active: true },
            ],
            pageTitle: 'Editar Rol',
            rule: 'editor'
          }
        },
        //Admin - Categorias
        {
          path: '/listadoCategorias',
          name: 'listadoCategorias',
          component: () => import('@/views/admin/categories/ListadoCategorias.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Categorias' },
              { title: 'Listado Categorias', active: true },
            ],
            pageTitle: 'Listado Categorias',
            rule: 'editor'
          }
        },
        {
          path: '/nuevaCategoria',
          name: 'nuevaCategoria',
          component: () => import('@/views/admin/categories/NuevaCategoria.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Categorías' },
              { title: 'Nueva Categoría', active: true },
            ],
            pageTitle: 'Nueva Categoría',
            rule: 'editor'
          }
        },
        {
          path: '/editarCategoria/:categoryId',
          name: 'category-edit',
          component: () => import('@/views/admin/categories/EditarCategoria.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next();
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Categorías' },
              { title: 'Editar Categoría ', active: true },
            ],
            pageTitle: 'Editar Categoría',
            rule: 'editor'
          },
        },
        //Call Center
        {
          path: '/dashboardCallCenter',
          name: 'ListCallCenter',
          component: () => import('./views/call-center/dashboard.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next();
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Listado Call-Center' },
              { title: 'Listado Call-Center', active: true },
            ],
            pageTitle: 'Listado Call-Center',
            rule: 'editor'
          },
        },
        {
          path: '/buscarRecetas',
          name: 'BuscarRecetas',
          component: () => import('./views/call-center/recetas.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next();
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Listado Recetas' },
              { title: 'Listado Recetas', active: true },
            ],
            pageTitle: 'Listado Recetas',
            rule: 'editor'
          },
        },
        {
          path: '/buscarPedidos',
          name: 'BuscarPedidos',
          component: () => import('./views/call-center/pedidos.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next();
            } else if (rol == 6) {
              next({
                name: "1visitador"
              });
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Listado Pedidos' },
              { title: 'Listado Pedidos', active: true },
            ],
            pageTitle: 'Listado Pedidos',
            rule: 'editor'
          },
        },
        //Facturador
        {
          path: '/facturacion',
          name: 'facturacion',
          component: () => import('./views/facturacion/dashboard.vue'),
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Listado de pedidos' },
              { title: 'Pedidos', active: true },
            ],
            pageTitle: 'Listado de pedidos',
            rule: 'editor'
          },
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: '1visitador'
              });
            } else if (rol == 4) {
              next({
                name: "visitador"
              });
            } else if (rol == 9){
              next();
            } else {
              next({
                name: 'page-login'
              });
            }
          }
        },
        //Visitador Medico
        {
          path: '/visitador',
          name: 'visitador',
          component: () => import('./views/visitador/dashboard.vue'),
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Listado de pedidos' },
              { title: 'Pedidos', active: true },
            ],
            pageTitle: 'Listado de pedidos',
            rule: 'editor'
          },
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 6) {
              next({
                name: '1visitador'
              });
            } else if (rol == 4) {
              next();
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          }
        },
        //Visitador Medico
        {
          path: '/1visitador',
          name: '1visitador',
          component: () => import('./views/visitador1/dashboard.vue'),
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Listado de Usuarios' },
              { title: 'Usuarios', active: true },
            ],
            pageTitle: 'Listado de Usuarios',
            rule: 'editor'
          },
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 4) {
              next({
                name: "visitador"
              });
            } else if (rol == 6) {
              next();
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
        },
        {
          path: '/nuevoMedico',
          name: 'nuevoMedico',
          component: () => import('./views/visitador1/nuevoMedico.vue'),
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Nuevo Médico' },
              { title: 'Nuevo Médico', active: true },
            ],
            pageTitle: 'Nuevo Médico',
            rule: 'editor'
          },
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 4) {
              next({
                name: "visitador"
              });
            } else if (rol == 6) {
              next();
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
        },
        {
          path: '/editarMedico/:idMedico',
          name: 'editarMedico',
          component: () => import('./views/visitador1/editarMedico.vue'),
          meta: {
            breadcrumb: [
              { title: 'Consola', url: '/consola' },
              { title: 'Editar Médico' },
              { title: 'Editar Médico', active: true },
            ],
            pageTitle: 'Editar Médico',
            rule: 'editor'
          },
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            let idu = localStorage.getItem('ui');
            let token = localStorage.getItem('tu');
            if (rol == null || rol == "" || idu == null || idu == "" || token == null || token == "") {
              next({
                name: 'page-login'
              });
            } else if (rol == 1) {
              next({
                name: 'consola'
              });
            } else if (rol == 2) {
              next({
                name: 'home'
              });
            } else if (rol == 3) {
              next({
                name: 'ListCallCenter'
              });
            } else if (rol == 4) {
              next({
                name: "visitador"
              });
            } else if (rol == 6) {
              next();
            } else if (rol == 9) {
              next({
                name: "facturacion"
              });
            } else {
              next({
                name: 'page-login'
              });
            }
          },
        }
      ],
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
})

export default router
