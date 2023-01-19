<script setup lang="ts">
import UserList from "@/views/user/UserList.vue";
import { useUserStore } from "../../stores/users";
import type User from "@/types/User";
const userStore = useUserStore();
const deleteUser = (index: number): void => {
  userStore.deleteUser(index);
};
const addNewUser = () => {
  userStore.dialog = true;
  userStore.clear();
};
const editUser = (user: User) => {
  userStore.editUser(user);
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-btn @click="addNewUser" height="150px" width="100%" class="text-h3"
            >+</v-btn
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="4" v-for="item of userStore.users" :key="item.id">
        <v-card height="150px">
          <v-card-title>{{ item.id }} ({{ item.login }}) </v-card-title>
          <v-card-text> {{ item.name }} [{{ item.password }}] </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn @click="deleteUser" color="error">Delete</v-btn>
            <v-btn color="secondary" @click="editUser">Edit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
