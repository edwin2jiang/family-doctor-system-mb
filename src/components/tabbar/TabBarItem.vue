<template>
  <div @click="toPage()" class="tabbar-item">
    <div>
      <img v-if="!isActive" :src="icon" alt="" width="18"  />
      <img v-else :src="iconActive" alt="" width="18"  />
    </div>
    <div class="text" :style="color">
      {{ item.text }}
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'TabBarItem',
  props: ['item', 'colorActive'],
  data() {
    return {
      icon: this.item.icon,
      iconActive: this.item.iconActive,
    };
  },
  methods: {
    toPage() {
      this.$router.replace(
        this.item.path,
        (onComplete) => {},
        (onAbort) => {},
      );
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.item.path || (this.$route.path === '/' && this.item.path === '/home');
    },
    color() {
      const colorSelect = this.colorActive || 'blue';
      return this.isActive ? 'color:' + colorSelect : '';
    },
  },
};
</script>

<style scoped>
.tabbar-item img {
  vertical-align: middle;
}
.tabbar-item {
  text-align: center;
  margin-top: 1px;
}

.tabbar-item .text{
  margin-top: 8px;
}
</style>