<script setup lang="ts">
import { ref } from "vue";
import { useOrderStore } from "@/stores/orders";
import type Order from "@/types/Order";
import { mdiCheckboxMarkedCircle, mdiMinusCircle } from "@mdi/js";

const orderStore = useOrderStore();

function finishCooking(myOrder: Order, index: number) {
  orderStore.finish(myOrder, index);
}

function cancle(index: number) {
  orderStore.cancleMyOrder(index);
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
          v-for="item of orderStore.myOrders"
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
                  <v-icon end :icon="mdiMinusCircle"> </v-icon>
                </v-btn>
                <v-btn
                  rounded="pill"
                  color="secondary"
                  @click="finishCooking(item, item.id)"
                >
                  สำเร็จ
                  <v-icon end :icon="mdiCheckboxMarkedCircle"> </v-icon>
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
