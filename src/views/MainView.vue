<style scoped>
h1 {
  position: relative;
  left: 60px;
  top: 5px;
  font-size: 40px;
}
</style>
<template>
  <v-app :theme="theme" style="overflow-y: hidden">
    <v-app-bar
      color="teal lighten-3"
      elevation="2"
      dark
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <v-avatar color="indigo" class="ml-1">
        <v-img src="src/assets/img/logo.jpg" cover />
      </v-avatar>
      <p style="font-size: 25px" class="ml-2">
        {{ appBarStore.getTitle() }}
      </p>
      <v-spacer></v-spacer>
      <v-avatar color="indigo" class="mr-1">
        <v-img :src="loginStore.img" alt="" cover />
      </v-avatar>
      <IntroduceAvatar class="mr-1 mt-5"></IntroduceAvatar>
    </v-app-bar>

    <!-- drawer left -->
    <v-navigation-drawer width="130">
      <v-list density="comfortable" nav>
        <v-list-item
          value="menu"
          height="80"
          class="my-9"
          to="/menu"
          @click="appBarStore.updateTitle('สั่งอาหาร')"
        >
          <drawerMenu></drawerMenu>
        </v-list-item>

        <v-list-item
          value="table"
          height="80"
          class="mb-9"
          to="/table"
          @click="appBarStore.updateTitle('ดูสถานะ')"
        >
          <drawerTable></drawerTable>
        </v-list-item>

        <v-list-item
          value="serve"
          height="80"
          class="mb-9"
          to="/serve"
          @click="appBarStore.updateTitle('เสริฟอาหาร')"
        >
          <drawerServe></drawerServe>
        </v-list-item>

        <v-list-item
          value="cook"
          height="80"
          class="mb-9"
          to="/cook"
          @click="appBarStore.updateTitle('ทำอาหาร')"
        >
          <drawerCook></drawerCook>
        </v-list-item>

        <v-list-item
          value="cashier"
          height="80"
          class="mb-9"
          to="/cashier"
          @click="appBarStore.updateTitle('คิดเงิน')"
        >
          <drawerCashier></drawerCashier>
        </v-list-item>

        <v-list-item value="logout" height="80" @click="logoutDialog()">
          <drawerLogout></drawerLogout>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- bottom navigation -->
    <!-- <v-bottom-navigation :elevation="0" grow>
      <v-btn
        value="menu"
        to="/menu"
        @click="appBarStore.updateTitle('สั่งอาหาร')"
      >
        <drawerCook></drawerCook>
      </v-btn>

      <v-btn
        value="table"
        to="/table"
        @click="appBarStore.updateTitle('ดูสถานะ')"
      >
        <drawerTable></drawerTable>
      </v-btn>

      <v-btn
        value="serve"
        to="/serve"
        @click="appBarStore.updateTitle('เสริฟอาหาร')"
      >
        <drawerServe></drawerServe>
      </v-btn>

      <v-btn
        value="cook"
        to="/cook"
        @click="appBarStore.updateTitle('ทำอาหาร')"
      >
        <drawerCook></drawerCook>
      </v-btn>

      <v-btn
        value="cashier"
        to="/cashier"
        @click="appBarStore.updateTitle('คิดเงิน')"
      >
        <drawerCashier></drawerCashier>
      </v-btn>
    </v-bottom-navigation> -->

    <v-main>
      <RouterView></RouterView>
    </v-main>

    <confirmLogout></confirmLogout>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLoginStore } from "@/stores/Login";
import { useAppBarStore } from "@/stores/handleAppBar";
import confirmLogout from "@/components/ConfirmLogout.vue";
import drawerMenu from "@/components/drawer/DrawerMenu.vue";
import drawerTable from "@/components/drawer/DrawerTable.vue";
import drawerServe from "@/components/drawer/DrawerServe.vue";
import drawerCook from "@/components/drawer/DrawerCook.vue";
import drawerLogout from "@/components/drawer/DrawerLogout.vue";
import drawerCashier from "@/components/drawer/DrawerCashier.vue";
import IntroduceAvatar from "@/components/IntroduceAvatar.vue";

const theme = ref("light");
const loginStore = useLoginStore();
const appBarStore = useAppBarStore();

function logoutDialog() {
  loginStore.dialog = true;
}
function showLog() {
  console.log("click");
}
</script>
