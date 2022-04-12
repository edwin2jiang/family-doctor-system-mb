<script>
import { isMainPage } from "./utils/useBaseUtils.js";

const TabBar = () => import('@/components/tabbar/TabBar.vue');
import tabbarDatas from '@/config/tabbar.config.js';

export default {
  components: {
    TabBar,
  },
  data() {
    return {
      tabbarDatas,
    };
  },
  methods: {
    isMainPage,
  },
  created(){
    console.log('App created', isMainPage(this.$route));
  },
};

</script>

<template>
  <div id="app">
    <!-- 非登录界面 -->
    <section class="page" v-if="isMainPage($route)">
      <router-view />
        <tab-bar
        :tabBarData="tabbarDatas"
        colorActive="#3dd4a7"
      ></tab-bar>
    </section>

    <!-- 
      登录界面或者等待界面
    -->
    <section class="page" v-else>
      <router-view />
    </section>
  </div>
</template>

<style lang="scss">
@import url(./assets/css/reset.css);
@import url(./assets/css/common.css);

#like996_identification {
  display: none;
}

html {
  font-size: 10px;
}
@media only screen and (min-width: 413px) {
  html {
    font-size: 12px !important;
  }
}
@media only screen and (min-width: 481px) {
  html {
    font-size: 15px !important;
  }
}
@media only screen and (min-width: 641px) {
  html {
    font-size: 20px !important;
  }
}
</style>
