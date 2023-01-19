import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type User from "@/types/User";

export const useMessageStore = defineStore("message", () => {
  const isShow = ref(false);
  const message = ref("");
  const timeout = ref(2000);
  const showMessage = (msg: string, tout: number = 2000) => {
    message.value = msg;
    isShow.value = true;
    timeout.value = tout;
  };
  const closeMessage = () => {
    message.value = "";
    isShow.value = false;
  };
  return { timeout, isShow, message, showMessage, closeMessage };
});
