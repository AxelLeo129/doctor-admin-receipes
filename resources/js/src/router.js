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
            if (rol == 1 || rol == 2) {
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
            if (rol == 1 || rol == 2) {
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
            if (rol == 2) {
              next();
            } else {
              next({
                name: 'consola'
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
            if (rol == 1) {
              next();
            } else if (rol == null) {
              next({
                name: 'page-login'
              });
            } else {
              next({
                name: 'home'
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
            if (token) {
              next();
            } else {
              next({
                name: 'home'
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
          component: () => import('@/views/admin/nuevoProducto.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            if (rol == 1) {
              next();
            } else {
              next({
                name: 'home'
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
            if (rol == 1) {
              next();
            } else {
              next({
                name: 'home'
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
          component: () => import('@/views/admin/listadoProductos.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            if (rol == 1) {
              next();
            } else {
              next({
                name: 'home'
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
          path: '/nuevoPaciente',
          name: 'extra-component-form-wizard',
          component: () => import('@/views/pages/nuevoPaciente.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            if (rol == 2) {
              next();
            } else {
              next({
                name: 'consola'
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
            if (rol == 2) {
              next();
            } else {
              next({
                name: 'consola'
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
            if (rol == 2) {
              next();
            } else {
              next({
                name: 'consola'
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
          path: '/recetaFinal',
          name: 'recetaFinal',
          component: () => import('./views/pages/recetaFinal.vue'),
          beforeEnter(to, from, next) {
            let rol = localStorage.getItem('ru');
            if (rol == 2) {
              next();
            } else {
              next({
                name: 'consola'
              });
            }
          }
        },
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
