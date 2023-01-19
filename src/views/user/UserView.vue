<script lang="ts" setup>
import UserList from "@/views/user/UserList.vue";
import UserDialog from "@/views/user/UserDialog.vue";
import UserCardList from "./UserCardList.vue";
import { useUserStore } from "../../stores/users";
import { mdiTable, mdiCardOutline } from "@mdi/js";
const useStore = useUserStore();
</script>
<template>
  <v-container>
    <v-row>
      <UserList v-if="useStore.isTable"></UserList>
      <UserCardList v-if="!useStore.isTable"></UserCardList>
      <UserDialog></UserDialog>
    </v-row>
    <v-row class="justify-center">
      <v-btn :icon="mdiTable" flat @click="useStore.isTable = true"></v-btn>
      <v-btn
        :icon="mdiCardOutline"
        @click="useStore.isTable = false"
        flat
      ></v-btn>
    </v-row>
  </v-container>
  <div class="text-h1"></div>
</template>
<style scoped></style>
