<script setup lang="ts">
import { useMessageStore } from "@/stores/message";
const messageStore = useMessageStore();
</script>

<template>
  <div
    class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height"
  >
    <v-btn variant="flat" color="secondary"> อาหาร </v-btn>

    <v-btn variant="flat" color="secondary"> เครื่องดื่ม </v-btn>

    <v-btn variant="flat" color="secondary"> ของหวาน </v-btn>
  </div>
  <br />
  <v-col cols="12" class="py-2">
    <v-btn-toggle rounded="0" color="deep-purple-accent-3" group>
      <v-btn value="left"> ทั้งหมด </v-btn>

      <v-btn value="center"> ผัด </v-btn>

      <v-btn value="right"> ทอด </v-btn>

      <v-btn value="justify"> มัน </v-btn>
    </v-btn-toggle>
  </v-col>
</template>
