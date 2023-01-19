import { ref } from "vue";
import { defineStore } from "pinia";
import type User from "@/types/User";

export const useUserStore = defineStore("user", () => {
  // const dialog = ref(false);
  // let lastId = 4;
  // const isTable = ref(true);
  // const editedUser = ref<User>({
  //   id: -1,
  //   login: "",
  //   name: "",
  //   password: "",
  //   img: "",
  //   position: "",
  // });
  const users = ref<User[]>([
    {
      id: 1,
      login: "admin",
      name: "Administrator",
      password: "Pass@1234",
      img: "./src/assets/img/admin.png",
      position: "เจ้าของร้าน",
    },
    {
      id: 2,
      login: "user1",
      name: "User 1",
      password: "Pass@1234",
      img: "./src/assets/img/user1.png",
      position: "พนักงาน",
    },
    {
      id: 3,
      login: "user2",
      name: "User 2",
      password: "Pass@1234",
      img: "./src/assets/img/user2.png",
      position: "พนักงาน",
    },

    {
      id: 4,
      login: "arthit",
      name: "Arthit",
      password: "Arthit@2545",
      img: "./src/assets/img/arthit.png",
      position: "พนักงาน",
    },

    {
      id: 5,
      login: "thanwa",
      name: "Thanwa",
      password: "Thanwa@1234",
      img: "./src/assets/img/user1.png",
      position: "พนักงาน",
    },
  ]);

  const login = (loginName: string, password: string): User => {
    const index = users.value.findIndex((item) => item.login === loginName);
    if (index >= 0) {
      const user = users.value[index];
      if (user.password === password) {
        return user;
      }
      return user;
    }
    return {
      id: 0,
      login: "",
      name: "",
      password: "",
      img: "",
      position: "",
    };
  };
  // const clear = () => {
  //   editedUser.value = {
  //     id: -1,
  //     login: "",
  //     name: "",
  //     password: "",
  //     img: "",
  //     position: "",
  //   };
  // };

  // const saveUser = () => {
  //   if (editedUser.value.id < 0) {
  //     editedUser.value.id = lastId++;
  //     users.value.push(editedUser.value);
  //   } else {
  //     const index = users.value.findIndex(
  //       (item) => item.id === editedUser.value.id
  //     );
  //     users.value[index] = editedUser.value;
  //   }
  //   dialog.value = false;
  //   clear();
  // };

  // const deleteUser = (id: number): void => {};
  // const deleteUser = function (id: number): void {};
  // function deleteUser(id: number): void {}

  // const deleteUser = (id: number): void => {
  //   const index = users.value.findIndex((item) => item.id === id);
  //   users.value.splice(index, 1);
  // };

  // const editUser = (user: User) => {
  //   editedUser.value = { ...user }; //JSON.parse(JSON.stringify(user));
  //   dialog.value = true;
  // };
  return {
    // isTable,
    // editUser,
    // saveUser,
    // clear,
    users,
    // deleteUser,
    // dialog,
    // editedUser,
    login,
  };
});
