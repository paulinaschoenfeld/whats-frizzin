<template>
  <section class="q-px-lg">
    <div v-if="frizzins.length === 0" class="text-center q-pa-xl">
      <q-icon name="ac_unit" size="100px" color="blue-2" />
      <div class="text-h6 text-grey-6">Your freezer is so empty...</div>
      <div class="text-subtitle2 text-grey-5">Time to freeze something!</div>
    </div>

    <div v-else class="row q-col-gutter-md q-gutter-y-md items-stretch">
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

<script setup lang="ts">
import FrizzinCard from "@/components/FrizzinCard.vue";
import {freezerService} from "@/services/freezerService.ts";

const frizzins = freezerService.items;
</script>

<style scoped>

</style>