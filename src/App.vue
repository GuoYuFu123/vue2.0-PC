<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    import Vue from 'vue'
    import 'element-ui/lib/theme-default/index.css'
    // https://github.com/surmon-china/vue-awesome-swiper
    import { Menu, MenuItem, Row, Col ,Button } from 'element-ui'
    Vue.use(Menu)
    Vue.use(MenuItem)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Button)

    import 'animate.css'
    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
    }

    body {
        min-width: 880px;
        line-height: 1.6;
        font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
    }
    *{margin: 0;padding: 0;}
    li{list-style: none;}

</style>
