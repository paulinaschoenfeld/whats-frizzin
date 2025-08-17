<script setup lang="ts">
import type {FrozenItem} from '@/models/FrozenItem';

defineProps<{
  frizzin: FrozenItem
}>();
</script>

<template>
  <q-card bordered class=" frizzin-card column full-height bg-grey-9 text-white">
    <q-card-section class="q-pa-md">
      <div class="text-h6 q-mb-xs">{{ frizzin.name }}</div>

      <div class="row items-center q-gutter-sm q-mb-sm">
        <q-chip dense square color="primary" text-color="white" class="q-px-sm">
          {{ frizzin.category }}
        </q-chip>
        <div class="text-caption text-grey-3">
          {{ frizzin.frozenOn }}
        </div>
      </div>

      <div class="text-body2 q-mb-xs">
        {{ `${frizzin.quantity} - ${frizzin.quantityType}` }}
      </div>

      <div class="text-caption text-grey-3">
        {{ frizzin.notes }}
      </div>
    </q-card-section>

    <q-space />
    <q-separator dark />

    <q-card-actions align="right" class="q-pa-sm">
      <q-btn
          dense
          unelevated
          color="negative"
          text-color="white"
          label="Remove"
      />
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="scss">
.frizzin-card {
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(255,255,255,.06);
  transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
  will-change: transform;
}

.frizzin-card:hover,
.frizzin-card:focus-within {
  transform: translateY(-3px);
  border-color: rgba(255,255,255,.22);
}
</style>