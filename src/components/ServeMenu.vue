<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  index: number;
}>();

const order = ref([
  {
    โต๊ะ: "1",
    order: [
      {
        เมนู: "กระเพรา",
        พิเศษ: "ใช่",
        หมายเหตุ: "ไม่ผัก ไม่พริก ไม่หวาน ไม่เส้น",
        สถานะ: "กำลังทำ",
      },
      {
        เมนู: "ข้าวผัดหมู",
        พิเศษ: "ธรรมดา",
        หมายเหตุ: "ไม่ข้าว ไม่หมู ไม่ไข่ ไม่กิน",
        สถานะ: "พร้อมเสริฟ",
      },
      {
        เมนู: "ต้มยำกุ้ง",
        พิเศษ: "พิเศษ",
        หมายเหตุ: "ไม่กุ้ง ไม่น้ำ ไม่ถ้วย ไม่ถุง",
        สถานะ: "กำลังทำ",
      },
    ],
  },
  {
    โต๊ะ: "2",
    order: [
      {
        เมนู: "คอหมูย่าง",
        พิเศษ: "ใช่",
        หมายเหตุ: "-",
        สถานะ: "พร้อมเสริฟ",
      },
      {
        เมนู: "ข้าวไข่ดาว",
        พิเศษ: "ธรรมดา",
        หมายเหตุ: "ไม่สุกมาก",
        สถานะ: "พร้อมเสริฟ",
      },
      {
        เมนู: "ข้าวไข่ข้น",
        พิเศษ: "ธรรมดา",
        หมายเหตุ: "ไม่เอาไข่",
        สถานะ: "กำลังทำ",
      },
    ],
  },
]);
</script>
<template>
  <!-- <table style="width: 100%">
    <tr>
      <td>กระเพรา (พิเศษ)</td>
      <td>กำลังทำ</td>
      <td style="left: 5em; position: relative">
        <v-btn color="gray">เสริฟ</v-btn>
      </td>
    </tr>
    <tr>
      <td>หมายเหตุ: ไม่ผัก ไม่พริก ไม่หวาน ไม่เส้น</td>
    </tr>
  </table>
  <v-divider></v-divider> -->

  <v-list>
    <v-list-item v-for="(item, i) in order[props.index].order" :key="i">
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
          <v-btn :color="item.สถานะ === 'กำลังทำ' ? 'grey' : 'success'"
            >เสริฟ</v-btn
          >
        </v-col>
      </v-row>
    </v-list-item>
  </v-list>
</template>
<style scoped></style>
