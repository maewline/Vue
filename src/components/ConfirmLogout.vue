<script setup lang="ts">
import { mdiLogout } from "@mdi/js";
import { useLoginStore } from "@/stores/Login";

const loginStore = useLoginStore();
</script>

<template>
  <v-row>
    <v-dialog v-model="loginStore.dialog">
      <v-card>
        <v-card-title class="text-center">
          <span class="text-h5">ต้องการออกจากระบบหรือไม่ ?</span>
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn
            color="error"
            :prepend-icon="mdiLogout"
            variant="text"
            @click="loginStore.logout"
          >
            ออกจากระบบ
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="loginStore.dialog = false"
          >
            ยกเลิก
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
