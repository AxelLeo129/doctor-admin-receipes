<template>
  <div class="the-navbar__user-meta flex items-center" v-if="activeUserInfo.displayName">
    <div class="text-right leading-tight hidden sm:block">
      <!-- <p class="font-semibold">{{ activeUserInfo.displayName }}</p> -->
      <p class="font-semibold" v-text="name"></p>
      <small v-text="rol"></small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
      <div class="con-img ml-3">
        <img
          v-if="activeUserInfo.photoURL"
          key="onlineImg"
          :src="image"
          alt="user-img"
          width="40"
          height="40"
          class="rounded-full shadow-md cursor-pointer block"
        />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/user/profile').catch(() => {})"
          >
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Perfil</span>
          </li>

          <!-- <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/email').catch(() => {})">
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Inbox</span>
          </li>-->

          <!-- <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/todo').catch(() => {})">
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Tasks</span>
          </li>-->

          <!-- <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/chat').catch(() => {})"
          >
            <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Chat</span>
          </li> -->

          <!-- <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/eCommerce/wish-list').catch(() => {})">
            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Wish List</span>
          </li>-->

          <vs-divider class="m-1" />

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout1"
          >
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Salir</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      rol: "",
      image: ""
    };
  },
  created() {
    this.getData();
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  methods: {
    logout1() {
      localStorage.removeItem("tu");
      localStorage.removeItem("ru");
      localStorage.removeItem("ui");
      localStorage.removeItem("nuevaRecetaData");
      this.$router.push("/");
    },
    getData() {
      let token = localStorage.getItem("tu");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/details",
        headers: {
          authorization: "Bearer " + token,
          "content-type": "application/json"
        }
      })
        .then(Response => {
          this.name = Response.data.success.name;
          let r = localStorage.getItem("ru");
          if (r == 1) {
            this.rol = "Admin";
          } else if (r == 2) {
            this.rol = "Médico";
          } else if (r == 3){
            this.rol = "Call Center";
          }else if(r == 4){
            this.rol = "Despachador";
          }else if(r == 6){
            this.rol = "Visitador";
          }else {
            this.rol = "Mensajero";
          }
          if (
            Response.data.success.image == null ||
            Response.data.success.image == ""
          ) {
            this.image = "/images/medicamentos/avatar.jpeg";
          } else {
            this.image = "data:image/png;base64," + Response.data.success.image;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    logout() {
      // if user is logged in via auth0
      if (this.$auth.profile) this.$auth.logOut();

      // if user is logged in via firebase
      const firebaseCurrentUser = firebase.auth().currentUser;

      if (firebaseCurrentUser) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.push("/pages/login").catch(() => {});
          });
      }
      // If JWT login
      if (localStorage.getItem("accessToken")) {
        localStorage.removeItem("accessToken");
        this.$router.push("/pages/login").catch(() => {});
      }

      // Change role on logout. Same value as initialRole of acj.js
      this.$acl.change("admin");
      localStorage.removeItem("userInfo");

      // This is just for demo Purpose. If user clicks on logout -> redirect
      this.$router.push("/pages/login").catch(() => {});
    }
  }
};
</script>
