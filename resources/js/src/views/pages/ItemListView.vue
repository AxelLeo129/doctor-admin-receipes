<!-- =========================================================================================
	File Name: ItemGridView.vue
	Description: Item Component - Grid VIew
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <!-- <div class="item-grid-view vx-row match-height">
        <div class="vx-col" :class="gridColumnWidth" v-for="item in items" :key="item.objectID"> -->
    <vx-card class="grid-view-item mb-base overflow-hidden" v-on="$listeners">
        <template slot="no-body">

            <!-- ITEM IMAGE -->
            <div class="item-img-container bg-white h-64 flex items-center justify-center mb-4 cursor-pointer"
                @click="navigate_to_detail_view">
                <img :src="'https://pharmazone.app/images/productos/' + item.img + '.png'" :alt="item.nombre" class="grid-view-img px-4 h-48 w-48">
            </div>
            <div class="item-details px-4">

                <!-- TITLE & DESCRIPTION -->
                <div class="my-4">
                    <h6 class="truncate font-semibold mb-1 hover:text-primary cursor-pointer"
                        @click="navigate_to_detail_view">{{ item.nombre }}</h6>
                    <p class="item-description truncate text-sm" v-text="item.descripcion.slice(0, 10) + '...'"></p>
                </div>
            </div>

            <!-- SLOT: ACTION BUTTONS -->
            <slot name="action-buttons" />
        </template>
    </vx-card>
    <!--  </div>
    </div> -->
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            },
        },
        methods: {
            navigate_to_detail_view() {
                this.$router.push({
                        name: 'ecommerce-item-detail-view',
                        params: {
                            item_id: this.item.objectID
                        }
                    })
                    .catch(() => {})
            }
        }
    }

</script>

<style lang="scss" scoped>
    .grid-view-item {
        .grid-view-img {
            max-width: 100%;
            max-height: 100%;
            width: auto;
            transition: .35s;
        }

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, .25);

            .grid-view-img {
                opacity: 0.9;
            }
        }
    }

</style>
