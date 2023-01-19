<script setup lang="ts">
import { ref } from "vue";
import { useOrderStoreTest } from "@/stores/order";

// var remainingMenu = new Array();
var remainingMenu = ref(0);
var orderStore = useOrderStoreTest();

// onMounted(() => {
//   remainingMenu = new Array();
//   var count = 0;
//   orderStore.order.forEach((order) => {
//     order.order.forEach<Order>((menu: Order) => {
//       if (menu.สถานะ === "พร้อมเสริฟ") {
//         count++;
//       }
//     });
//     remainingMenu.push(count);
//     count = 0;
//   });
// });

// onMounted(() => {
//   remainingMenu = new Array();
//   var count = 0;
//   orderStore.order.forEach((order) => {
//     order.order.forEach((menu) => {
//       if (menu.สถานะ === "พร้อมเสริฟ") {
//         count++;
//       }
//     });
//     remainingMenu.push(count);
//     count = 0;
//   });
// });

function serve(tableNo: string, sq: number) {
  var count = orderStore.updateStatus(tableNo, sq);
}
</script>

<template>
  <br />
  <h1>รายการอาหาร</h1>
  <br />
  <!-- <v-expansion-panels>
    <v-expansion-panel v-for="(table, index) in orderStore.order" :key="index">
      <v-expansion-panel-title>
        <v-row no-gutters>
          <v-col cols="4" class="d-flex justify-start">
            โต๊ะ {{ table.โต๊ะ }} &nbsp;&nbsp;&nbsp;
            {{ remainingMenu[index] }} /
            {{ Object.keys(table.order).length }}
            รายการอาหาร
          </v-col>
        </v-row>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <v-row no-gutters justify="end">
          <v-col cols="12">
            <v-list>
              <v-list-item v-for="(item, i) in table.order" :key="i">
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-list-item-title>{{ item.เมนู }} </v-list-item-title>
                    <v-list-item-subtitle v-if="item.พิเศษ"
                      >พิเศษ: {{ item.พิเศษ }}</v-list-item-subtitle
                    >
                    <v-list-item-subtitle v-if="item.หมายเหตุ"
                      >หมายเหตุ: {{ item.หมายเหตุ }}</v-list-item-subtitle
                    >
                  </v-col>
                  <v-col cols="4"> {{ item.สถานะ }} </v-col>
                  <v-col>
                    <v-btn
                      @click="orderStore.updateStatus(table.โต๊ะ, item.ลำดับ)"
                      :color="item.สถานะ === 'พร้อมเสริฟ' ? 'success' : 'grey'"
                      >เสริฟ</v-btn
                    >
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels> -->

  <v-expansion-panels>
    <v-expansion-panel
      v-for="(table, index) in orderStore.order"
      :key="index"
      style="border: solid yellow; margin: 10px; background-color: orange"
    >
      <v-expansion-panel-title style="font-size: 21px; font-weight: bolder">
        <v-row no-gutters>
          <v-col cols="4" class="d-flex justify-start" style="height: 30px">
            โต๊ะ {{ table.โต๊ะ }} &nbsp;&nbsp;&nbsp; {{ table.เสริฟสำเร็จ }} /
            {{ Object.keys(table.order).length }}
            รายการอาหาร
          </v-col>
        </v-row>
      </v-expansion-panel-title>

      <v-expansion-panel-text
        outline
        block
        style="
          /* border: solid red; */
          /* border: hidden;
          position: relative;
          margin-left: -24px;
          margin-right: -24px;
          margin-top: -8px;
          margin-bottom: -16px; */
        "
      >
        <v-row
          no-gutters
          style="
            margin-top: -7px;
            margin-left: -24px;
            margin-right: -24px;
            margin-bottom: -16px;
          "
        >
          <v-col cols="12">
            <v-list style="background-color: whitesmoke">
              <v-list-item v-for="(item, i) in table.order" :key="i">
                <v-row no-gutters>
                  <v-col cols="6" style="height: 70px">
                    <v-list-item-title style="font-size: 18px"
                      >{{ item.เมนู }}
                    </v-list-item-title>
                    <v-list-item-subtitle
                      style="font-size: 16px"
                      v-if="item.พิเศษ"
                      >พิเศษ: {{ item.พิเศษ }}</v-list-item-subtitle
                    >
                    <v-list-item-subtitle
                      style="font-size: 16px"
                      v-if="item.หมายเหตุ"
                      >หมายเหตุ: {{ item.หมายเหตุ }}</v-list-item-subtitle
                    >

                    <v-divider class="mt-2"></v-divider>
                    <br />
                  </v-col>
                  <v-col cols="4">
                    {{ item.สถานะ }} <v-divider class="mt-10"></v-divider>
                  </v-col>
                  <v-col>
                    <v-btn
                      rounded="pill"
                      @click="serve(table.โต๊ะ, item.ลำดับ)"
                      :color="item.สถานะ === 'พร้อมเสริฟ' ? 'success' : 'grey'"
                      >เสริฟ</v-btn
                    >
                    <v-divider class="mt-7"></v-divider>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<style scoped>
.extra * {
  font-size: 20px;
  color: red;
}
</style>
