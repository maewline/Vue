import { ref } from "vue";
import { defineStore } from "pinia";
import type Food from "@/types/Food";

export const useFoodStore = defineStore("food", () => {
  const foods = ref<Food[]>([
    // {
    //   id: -1,
    //   name: "เห็ดปี้",
    //   type: [],
    //   img: "",
    // },
    {
      id: 0,
      name: "ซาลาเปา",
      type: ["นึ่ง", "ขนม"],
      img: "./src/assets/img/salapao.jpg",
      price: 50,
    },
    {
      id: 1,
      name: "ไก่",
      type: ["ทอด", "ย่าง", "ต้ม"],
      img: "./src/assets/img/chicken.jpeg",
      price: 70,
    },

    // {
    //   id: 2,
    //   name: "ก๋วยเตี๋ยว",
    //   type: "เส้น",
    //   img: "",
    // },
    // {
    //   id: 3,
    //   name: "สปาเก็ตตี้",
    //   type: "เส้น",
    //   img: "",
    // },
    // {
    //   id: 4,
    //   name: "หอยเป่าหื้อ",
    //   type: "ต้ม",
    //   img: "",
    // },
    // {
    //   id: 5,
    //   name: "ซูชิ",
    //   type: "หมัก",
    //   img: "",
    // },
    // {
    //   id: 6,
    //   name: "ต้มยำ",
    //   type: "ต้ม",
    //   img: "",
    // },
  ]);

  return { foods };
});
