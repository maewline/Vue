import { ref } from "vue";
import { defineStore } from "pinia";
import type Food from "@/types/Food";

export const useSelectStore = defineStore("selectMenu", () => {
  const selectedID = ref(-1);
  const editSelected = (num: number) => {
    selectedID.value = num;
  };

  return { selectedID, editSelected };
});
