import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from "./users";
import { useMessageStore } from "./message";
export const useLoginStore = defineStore("login", () => {
  const dialog = ref(false);
  const userStore = useUserStore();
  const loginName = ref("");
  const img = ref("");
  const position = ref("");
  const messageStore = useMessageStore();
  const isLogin = computed(() => {
    //loginName is not empty ทำไมต้องใช้ computed
    return loginName.value !== "";
  });

  const login = (userName: string, password: string): void => {
    const user = userStore.login(userName, password);
    if (user.id !== 0) {
      loginName.value = userName;
      img.value = user.img;
      position.value = user.position;
      localStorage.setItem("loginName", userName);
    } else {
      messageStore.showMessage("Login หรือ Password ไม่ถูกต้อง!!");
    }
  };
  const logout = () => {
    loginName.value = "";
    localStorage.removeItem("loginName");
    dialog.value = false;
  };
  const loadData = () => {
    loginName.value = localStorage.getItem("loginName") || "";
  };

  return { isLogin, login, logout, loadData, loginName, img, position, dialog };
});
