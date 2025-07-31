<script setup>
import FrozenList from "./components/FrozenList.vue";
</script>

<template>
  <header>
    <p><span class="title">What's Frizzin</span> is coming...</p>
    <span>❄️</span>
  </header>
<!--  <FrozenList />-->
</template>

<style scoped>
header {
  line-height: 1.5;
  display:  flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-weight: bold;
}
</style>
