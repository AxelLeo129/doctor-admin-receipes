<!-- =========================================================================================
	File Name: ECommerceCheckout.vue
	Description: eCommerce Checkout page
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="ecommerce-checkout-demo">
    <form-wizard
      ref="checkoutWizard"
      color="rgba(var(--vs-primary), 1)"
      :title="null"
      :subtitle="null"
      :hide-buttons="true"
    >
      <!-- tab 1 content -->
      <tab-content title="Cart" icon="feather icon-shopping-cart" class="mb-5">
        <!-- IF CART HAVE ITEMS -->
        <div class="vx-row">
          <!-- LEFT COL -->
          <div class="vx-col lg:w-2/3 w-full relative">
            <div class="items-list-view">
              <vx-card
                title="Title Color"
                title-color="primary"
                subtitle="Brownie pastry chocolate pastry chocolate pudding."
              >
                <div class="vx-row">
                  <div class="vx-col md:w-1/2 w-full">
                    <img src="" alt="image">
                  </div>
                  <div class="vx-col md:w-1/2 w-full">
                    <p class="mb-3">
                      You can use
                      <code>title-color</code> prop to change color of title of card. This prop supports hex, rgba, rgb and theme colors.
                    </p>
                    <p
                      class="mb-3"
                    >Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I love.</p>
                  </div>
                </div>
              </vx-card>
            </div>
          </div>

          <!-- RIGHT COL -->
          <div class="vx-col lg:w-1/3 w-full">
            <vx-card>
              <p class="text-grey mb-3">Detalles</p>

              <vs-divider />

              <p class="font-semibold mb-3">Detalles del Producto</p>
              <div class="flex justify-between mb-2">
                <span class="text-grey">Médico</span>
                <span>$598</span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="text-grey">Paciente</span>
                <span class="text-success">-25$</span>
              </div>

              <vs-divider />

              <vs-button class="w-full" @click="generarReceta">Siguiente</vs-button>
            </vx-card>
          </div>
        </div>

        <!-- IF NO ITEMS IN CART -->
        <!-- <vx-card title="You don't have any items in your cart.">
                    <vs-button @click="$router.push('/apps/eCommerce/shop').catch(() => {})">Browse Shop</vs-button>
        </vx-card>-->
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  data() {
    return {
      // TAB 2
      fullName: "",
      mobileNum: "",
      pincode: "",
      houseNum: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
      addressType: 1,
      addressTypeOptions: [
        { text: "Home", value: 1 },
        { text: "Office", value: 2 }
      ],

      // TAB 3
      paymentMethod: "debit-card",
      cvv: ""
    };
  },
  computed: {
    isInWishList() {
      return itemId => this.$store.getters["eCommerce/isInWishList"](itemId);
    }
  },
  methods: {
    generarReceta(){
        this.$router.push("/recetaFinal");
    },
    // TAB 1
    removeItemFromCart(item) {
      this.$store.dispatch("eCommerce/toggleItemInCart", item);
    },
    wishListButtonClicked(item) {
      // Toggle in Wish List
      if (this.isInWishList(item.objectID))
        this.$router.push("/apps/eCommerce/wish-list").catch(() => {});
      else {
        this.toggleItemInWishList(item);
        this.removeItemFromCart(item);
      }
    },
    toggleItemInWishList(item) {
      this.$store.dispatch("eCommerce/toggleItemInWishList", item);
    },
    updateItemQuantity(event, index) {
      const itemIndex = Math.abs(index + 1 - this.cartItems.length);
      this.$store.dispatch("eCommerce/updateItemQuantity", {
        quantity: event,
        index: itemIndex
      });
    },

    // TAB 2
    submitNewAddressForm() {
      return new Promise(() => {
        this.$validator.validateAll("add-new-address").then(result => {
          if (result) {
            // if form have no errors
            this.$refs.checkoutWizard.nextTab();
          } else {
            this.$vs.notify({
              title: "Error",
              text: "Please enter valid details",
              color: "warning",
              iconPack: "feather",
              icon: "icon-alert-circle"
            });
          }
        });
      });
    },

    // TAB 3
    makePayment() {
      return new Promise(() => {
        this.$validator.validateAll("cvv-form").then(result => {
          if (result) {
            // if form have no errors
            this.$vs.notify({
              title: "Success",
              text: "Payment received successfully",
              color: "success",
              iconPack: "feather",
              icon: "icon-check"
            });
          } else {
            this.$vs.notify({
              title: "Error",
              text: "Please enter valid details",
              color: "warning",
              iconPack: "feather",
              icon: "icon-alert-circle"
            });
          }
        });
      });
    }
  },
  components: {
    FormWizard,
    TabContent
  }
};
</script>

<style lang="scss" scoped>
#ecommerce-checkout-demo {
  .item-view-primary-action-btn {
    color: #2c2c2c !important;
    background-color: #f6f6f6;
  }

  .item-name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
  }

  .vue-form-wizard {
    padding-bottom: 0;

    ::v-deep .wizard-header {
      padding: 0;
    }

    ::v-deep .wizard-tab-content {
      padding-right: 0;
      padding-left: 0;
      padding-bottom: 0;

      .wizard-tab-container {
        margin-bottom: 0 !important;
      }
    }
  }
}
</style>
