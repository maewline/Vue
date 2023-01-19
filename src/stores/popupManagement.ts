import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usemanagePopupStore = defineStore("popupHandle", () => {
  const isShow = ref(false);
  const piece = ref(1);
  const switchPopup = () => {
    isShow.value = true;
    console.log(isShow);
  };
  const switchOffPopup = () => {
    isShow.value = false;
    piece.value = 1;
  };
  return { isShow, switchPopup, switchOffPopup, piece };
});
