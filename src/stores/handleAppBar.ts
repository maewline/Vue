import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppBarStore = defineStore("handleAppeBar", () => {
  const appBarTitle = ref("หน้าหลัก");

  const updateTitle = (title: string) => {
    appBarTitle.value = title;
  };
  const getTitle = (): string => {
    return appBarTitle.value;
  };

  return { appBarTitle, updateTitle, getTitle };
});
