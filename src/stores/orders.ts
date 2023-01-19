import { ref } from "vue";
import { defineStore } from "pinia";
import type Order from "@/types/Order";

export const useOrderStore = defineStore("order", () => {
  function addMyOrders(order: Order, id: number): void {
    const index = orders.value.findIndex((item) => item.id === id);
    myOrders.value.push(order);
    orders.value.splice(index, 1);
    //ต้องเพิ่มเปลี่ยนสถานะเป็นกำลังทำ
  }

  function cancleOrder(id: number): void {
    const index = orders.value.findIndex((item) => item.id === id);
    orders.value.splice(index, 1);
    //ต้องเพิ่มเปลี่ยนสถานะเป็นยกเลิก
  }

  function finish(myOrder: Order, id: number): void {
    const index = myOrders.value.findIndex((item) => item.id === id);
    //ต้องเพิ่มไปในรายการเสริฟ
    myOrders.value.splice(index, 1);
    //ต้องเพิ่มเปลี่ยนสถานะเป็นกำลังทำ
  }

  function cancleMyOrder(id: number): void {
    const index = myOrders.value.findIndex((item) => item.id === id);
    myOrders.value.splice(index, 1);
    //ต้องเพิ่มเปลี่ยนสถานะเป็นยกเลิก
  }

  const orders = ref<Order[]>([
    {
      id: 1,
      food: 1,
      name: "ต้มยำตับยุง",
      note: "ใส่น้ำแข็งเยอะๆ ใส่กล้วยด้วย",
      table: 1,
    },
    { id: 2, food: 1, name: "ต้มยำตับยุง", note: "เอาแห้งๆ", table: 1 },
    { id: 3, food: 2, name: "ผัดเผ็ดเป็ดล้านปี", note: "-", table: 2 },
  ]);

  const myOrders = ref<Order[]>([]);
  return { orders, myOrders, addMyOrders, cancleOrder, cancleMyOrder, finish };
});
