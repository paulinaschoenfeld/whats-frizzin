<script setup lang="ts">
import type {FrozenItem} from "@/models/FrozenItem";

defineProps<{
  frizzin: FrozenItem
}>();
</script>

<template>
<div class="frizzin-card">
  <span>{{ frizzin.name }}</span>
  <span>{{ frizzin.category }}</span>
  <span>{{ frizzin.frozenOn }}</span>
  <span>{{ `${frizzin.quantity} - ${frizzin.quantityType}` }}</span>
  <span>{{ frizzin.notes }}</span>
</div>
</template>

<style scoped>
.frizzin-card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  padding: 0.5rem;
  margin:  0.5rem;

  border-radius: 2rem;
  border: 1px solid gray;
  background-color: #213547;
}
</style>