<template>
    <q-card bordered class="frizzin-dialog-container bg-grey-9 text-white">
      <q-form @submit="onSubmit">
        <q-card-section class="q-pa-lg">
          <div class="text-h5 q-mb-lg">Let's Freeze Something!</div>

          <q-space />

          <q-input
              filled
              v-model="frizzin.name"
              label="Name"
              :rules="[(val: string) => val && val.length > 0 || 'You shall name your frizzin!']"
          />

          <q-input
              filled
              v-model="frizzin.quantity"
              label="Amount"
              :rules="[(val: number) => val !== null && val > 0 || 'You shall desclare how much you frizzin!']"
          />

          <q-select
              filled
              v-model="frizzin.quantityType"
              label="Quantity type"
              :options="quantityTypeOptions"
              class="q-mb-md"
          />

          <q-select
              filled
              v-model="frizzin.category"
              label="Category"
              :options="categoryOptions"
              class="q-mb-md"
          />

          <q-toggle v-model="frizzin.frozenToday" color="blue" label="It was frozen today" />

          <q-input
              v-if="!frizzin.frozenToday"
              filled
              v-model="frizzin.frozenOn"
              mask="##.##.####"
              :rules="[dateRule]"
              label="Frozen on">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="frizzin.frozenOn"
                          mask="##.##.####">
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

        </q-card-section>

        <q-space />
        <q-separator dark />

        <q-card-actions align="right" class="q-pa-md">
          <q-btn
              dense
              unelevated
              color="secondary"
              text-color="white"
              label="Cancel"
              @click="onCancel"
          />
          <q-btn
              dense
              unelevated
              type="submit"
              color="primary"
              text-color="white"
              label="Freeze"
          />
        </q-card-actions>
      </q-form>
    </q-card>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Category} from "@models/category.ts";
import {QuantityType} from "@models/quantityType.ts";
import type {FrozenItemDraft} from "@models/frozenItem.ts";
import {parseDateToISO} from "@/utils/dateUtils.ts";

const emits = defineEmits<{
  (e: 'cancel'): void,
  (e: 'submit', payLoad: {}): void,
}>()

const categoryOptions = Object.values(Category);
const quantityTypeOptions = Object.values(QuantityType);
const dateRule = (val: string) =>
    parseDateToISO(val) !== null || 'Format DD.MM.YYYY';

const initial: FrozenItemDraft = {
  name: null,
  quantity: null,
  quantityType: null,
  frozenToday: true,
  frozenOn: null,
  category: null,
  notes: null,
}

const frizzin = ref<FrozenItemDraft>({...initial});

const resetFrizzin = () => {
  frizzin.value = {...initial};
};

const onSubmit = () => {
  emits('submit', frizzin.value);
  resetFrizzin();
}

const onCancel = () => {
  resetFrizzin();
  emits('cancel');
}
</script>

<style scoped>
</style>