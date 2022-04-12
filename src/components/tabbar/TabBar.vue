<template>
  <div class="tabbar">
    <TabBarItem
      v-for="(item, index) in tabBarData"
      :key="index"
      :item="item"
      :colorActive="colorActive"
    ></TabBarItem>
  </div>
</template>
 
<script>
const TabBarItem = () => import('./TabBarItem');
export default {
  name: 'TabBar',
  components: {
    TabBarItem,
  },
  props: ['tabBarData', 'colorActive'],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.tabbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  background: #fff;
  left: 0;
  bottom: 0;
  right: 0;
  height: 49px;
  padding: 10px 0;
  z-index: 999;
  border-top: 1px solid #f2f2f2;
}
</style>