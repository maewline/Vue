<script setup lang="ts">
import { ref } from "vue";
import { useOrderStore } from "@/stores/orders";
import type Order from "@/types/Order";
import { mdiCheckboxMarkedCircleOutline, mdiCancel } from "@mdi/js";

const orderStore = useOrderStore();
function myCooking(order: Order, index: number) {
  orderStore.addMyOrders(order, index);
}

function cancle(index: number) {
  orderStore.cancleOrder(index);
}
</script>

<template>
  <v-sheet class="rounded-lg" elevation="4" value="rounded-lg">
    <v-table class="bg-grey-lighten-4" fixed-header height="600">
      <thead>
        <tr>
          <th class="text-center text-h5">รายการ</th>
          <th class="text-center text-h5">โต๊ะ</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item of orderStore.orders"
          :key="item.id"
          style="height: 10vh"
        >
          <td>
            <v-container>
              <v-row style="font-size: large; font-weight: bold">
                {{ item.name }}
              </v-row>
              <v-row> หมายเหตุ : {{ item.note }}</v-row>
            </v-container>
          </td>

          <td>
            <v-container>
              <v-row
                justify="center"
                style="font-size: large; font-weight: normal"
              >
                {{ item.table }}
              </v-row>
            </v-container>
          </td>

          <td>
            <v-container>
              <v-row justify="space-evenly">
                <v-btn rounded="pill" color="error" @click="cancle(item.id)">
                  ยกเลิก
                  <v-icon end :icon="mdiCancel"> </v-icon>
                </v-btn>
                <v-btn
                  rounded="pill"
                  color="secondary"
                  @click="myCooking(item, item.id)"
                >
                  ตกลง
                  <v-icon end :icon="mdiCheckboxMarkedCircleOutline"> </v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<style scoped>
.btn {
  height: 5vh;
  font-size: 14pt;
}
</style>
