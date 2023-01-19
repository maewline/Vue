<script setup lang="ts">
import MainView from "@/views/MainView.vue";
import LoginView from "./views/LoginView.vue";
import { ref, computed, onMounted } from "vue";
import { useLoginStore } from "@/stores/Login";
import MessageBox from "./components/MessageBox.vue";

const loginStore = useLoginStore();
onMounted(() => {
  loginStore.loadData();
});
</script>

<template>
  <LoginView v-if="!loginStore.isLogin"></LoginView>
  <MainView
    v-if="loginStore.isLogin"
    @logout="loginStore.logout"
    :loginName="loginStore.loginName"
  ></MainView>
  <MessageBox></MessageBox>
  <!--props login Name-->
</template>

<style scoped></style>
