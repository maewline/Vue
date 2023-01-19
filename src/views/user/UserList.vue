<script setup lang="ts">
import UserList from "@/views/user/UserList.vue";
import { useUserStore } from "../../stores/users";
import { mdiPencil, mdiDelete, mdiPlus } from "@mdi/js";
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
      <v-col cols="3" offset="9">
        <!--ofset: จุดเริ่มต้น cols จองพื้นที่ (6-9)-->
        <v-btn color="primary" :prepend-icon="mdiPlus" @click="addNewUser()"
          >Add New</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>ID</th>
              <th>login</th>
              <th>name</th>
              <th>password</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of userStore.users" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.login }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.password }}</td>
              <td>
                <v-btn
                  :icon="mdiPencil"
                  @click="editUser(item)"
                  color="secondary"
                  class="ma-1"
                ></v-btn
                ><v-btn
                  :icon="mdiDelete"
                  @click="deleteUser(item.id)"
                  color="error"
                  class="ma-1"
                ></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
