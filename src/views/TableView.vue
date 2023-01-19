<script setup lang="ts">
import TableBoxPop from "@/components/TableBoxPop.vue";
import { ref } from "vue";
const frameList = ref([
  {
    name: "โต๊ะที่ 1",
    size: "4",
    img: "https://www.pngbie.com/assets/images/icon/Pngbie-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9F%E0%B8%A3%E0%B8%B5-20210513011834.png",
  },
  {
    name: "โต๊ะที่ 2",
    size: "4",
    img: "https://www.pngbie.com/assets/images/icon/Pngbie-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9F%E0%B8%A3%E0%B8%B5-20210513011834.png",
  },
  {
    name: "โต๊ะที่ 3",
    size: "4",
    img: "https://www.pngbie.com/assets/images/icon/Pngbie-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9F%E0%B8%A3%E0%B8%B5-20210513011834.png",
  },
  {
    name: "โต๊ะที่ 4",
    size: "4",
    img: "https://www.pngbie.com/assets/images/icon/Pngbie-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9F%E0%B8%A3%E0%B8%B5-20210513011834.png",
  },
  {
    name: "โต๊ะที่ 5",
    size: "6",
    img: "https://www.pngbie.com/assets/images/icon/Pngbie-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9F%E0%B8%A3%E0%B8%B5-20210513011834.png",
  },
  {
    name: "โต๊ะที่ 6",
    size: "6",
    img: "https://www.pngbie.com/assets/images/icon/Pngbie-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9F%E0%B8%A3%E0%B8%B5-20210513011834.png",
  },
  {
    name: "โต๊ะที่ 7",
    size: "6",
    img: "https://www.pngbie.com/assets/images/icon/Pngbie-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9F%E0%B8%A3%E0%B8%B5-20210513011834.png",
  },
  {
    name: "โต๊ะที่ 8",
    size: "6",
    img: "https://www.pngbie.com/assets/images/icon/Pngbie-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9F%E0%B8%A3%E0%B8%B5-20210513011834.png",
  },
  {
    name: "โต๊ะที่ 9",
    size: "8",
    img: "https://www.pngbie.com/assets/images/icon/Pngbie-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9F%E0%B8%A3%E0%B8%B5-20210513011834.png",
  },
]);
</script>

<template>
  <v-container>
    <v-row justify="start">
      <v-col
        v-for="(item, index) of frameList"
        :key="index"
        cols="12"
        xs="12"
        sm="12"
        md="3"
        lg="3"
        xl="3"
      >
        <TableBoxPop
          :name="item.name"
          :size="item.size"
          :img="item.img"
          :index="index"
        ></TableBoxPop>
      </v-col>
    </v-row>
  </v-container>
</template>
