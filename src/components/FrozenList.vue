<script setup lang="ts">
import {ref} from "vue";
import {frozenItems} from "../assets/frozenItems.ts";
import FrizzinCard from "@/components/FrizzinCard.vue";

const frizzins = ref(frozenItems);
</script>

<template>
  <section class="q-px-lg">
    <div class="row q-col-gutter-md q-gutter-y-md items-stretch">
      <div
          v-for="frizzin in frizzins"
          :key="frizzin.id"
          class="col-12 col-sm-6 col-md-4 col-lg-3 flex"
      >
        <FrizzinCard :frizzin="frizzin" class="fit"/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>