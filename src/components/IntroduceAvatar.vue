<script lang="ts" setup>
import { useLoginStore } from "@/stores/Login";
const loginStore = useLoginStore();
</script>

<template>
  <table>
    <tr>
      <p>{{ loginStore.loginName }}</p>
    </tr>
    <tr>
      <p>{{ loginStore.position }}</p>
    </tr>
  </table>
</template>
<style></style>
