<script setup lang="ts">
import tableList from "../components/cook/TableList.vue";
import myTableList from "../components/cook/MyTableList.vue";
</script>

<template>
  <v-container>
    <v-row justify="space-around">
      <v-col
        cols="12"
        justify="space-around"
        xs="12"
        sm="12"
        md="6"
        lg="5"
        xl="5"
      >
        <h1 class="mb-6">รายการอาหาร</h1>
        <tableList> </tableList>
      </v-col>

      <v-col
        cols="12"
        justify="space-around"
        xs="12"
        sm="12"
        md="6"
        lg="5"
        xl="5"
      >
        <h1 class="mb-6">รายการอาหารของฉัน</h1>
        <myTableList> </myTableList>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
