<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="ac_unit" class="q-mr-sm" />
          What's Frizzin ❄️
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="bg-dark text-white q-pa-md">
        <div class="text-center q-mb-md">
          <q-btn @click="addFrizzin" color="primary" label="Freeze item" icon="ac_unit" class="q-mt-sm" />
        </div>

        <q-dialog v-model="showDialog" persistent no-shake>
          <AddFrizzin @cancel="closeDialog" @submit="addToFreezer" />
        </q-dialog>

        <FrozenList />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import FrozenList from "@/components/FrozenList.vue";
import AddFrizzin from "@components/AddFrizzin.vue";
import {ref} from "vue";
import {useQuasar} from "quasar";
import {freezerService} from "@/services/freezerService.js";

const $q = useQuasar();

const showDialog = ref(false);

const addFrizzin = () => {
  showDialog.value = true;
}

const addToFreezer = async (frizzin) => {
  try {
    await freezerService.freezeItem(frizzin);
    $q.notify({
      type: 'positive',
      message: `${frizzin.name} is being frozen! ❄️`,
      icon: 'ac_unit',
    })
    showDialog.value = false;
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Something went wrong!.'
    });
  }
}

const closeDialog = () => {
  showDialog.value = false;
}
</script>