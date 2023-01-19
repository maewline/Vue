<script setup lang="ts">
import { ref } from "vue";
import { usemanagePopupStore } from "@/stores/popupManagement";
import { useFoodStore } from "@/stores/foods";
import { useSelectStore } from "@/stores/selectMenu";
const popupManagement = usemanagePopupStore();
const selectMenu = useSelectStore();
const foodStore = useFoodStore();
const props = withDefaults(
  defineProps<{
    id: number;
    name: string;
    img: string;
    type: string[];
    // index: number;
  }>(),
  {}
);

// const emits = defineEmits<{
//   (e: "change", index: number, rating: number): void;
// }>();

const count = ref(props.type);

const selectedMenu = () => {
  popupManagement.isShow = true;
  selectMenu.selectedID = props.id;
  console.log("selectMenu: " + selectMenu.selectedID);
};
</script>

<template>
  <v-card class="mx-auto" max-width="150" height="25vh" variant="outlined">
    <!-- <v-img :src="props.img" style="height: 100vh"></v-img> -->

    <v-card-item class="text-center">
      <v-avatar size="50" color="red" class="justify-center">
        <v-img :src="props.img"></v-img>
      </v-avatar>
      <div>
        <div class="text-h6 mb-1">{{ props.name }}</div>
        <div class="text-caption">ประเภท: {{ count.toString() }}</div>
      </div>
    </v-card-item>

    <v-card-actions class="justify-center">
      <v-btn block variant="flat" @click="selectedMenu" color="success">
        สั่ง</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
