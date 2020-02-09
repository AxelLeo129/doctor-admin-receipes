<template>
  <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>

    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
    <p>asdfasdfasdfsa</p>
  </VuePerfectScrollbar>
</template>
 
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
 
export default {
  components: {
    VuePerfectScrollbar
  },
  name: 'app',
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    }
  },
  methods: {
  }
}
 
</script> 
<style lang="scss">
.scroll-area {
  position: relative;
  margin: auto;
  width: 400px;
  height: 300px;
}
</style> w