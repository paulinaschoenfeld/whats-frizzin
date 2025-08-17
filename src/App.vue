<script setup>
import FrozenList from "@/components/FrozenList.vue";
import {ref} from "vue";

const showDialog = ref(false);

const addFrizzin = () => {
  console.log('add frizzin');
  showDialog.value = true;
}
</script>

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

<!--        <q-dialog v-model="showDialog" persistent>-->
<!--          <div>hello!</div>-->
<!--        </q-dialog>-->

        <FrozenList />
      </q-page>
    </q-page-container>
  </q-layout>


</template>