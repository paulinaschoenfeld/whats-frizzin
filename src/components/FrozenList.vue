<script setup lang="ts">
import {ref} from "vue";
import {frozenItems} from "../assets/frozenItems.ts";
import FrizzinCard from "./FrizzinCard.vue";

const frizzins = ref(frozenItems);
</script>

<template>
  <FrizzinCard v-for="(frizzin) in frizzins" :key="frizzin.id" :frizzin="frizzin"></FrizzinCard>
</template>

<style scoped>

</style>