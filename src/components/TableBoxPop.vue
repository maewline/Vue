<script lang="ts" setup>
//import { ref } from "vue";
const props = withDefaults(
  defineProps<{
    name: string;
    size: string;
    img: string;
    index: number;
  }>(),
  {}
);
</script>

<template>
  <v-card class="mx-auto" max-width="500" variant="outlined">
    <v-img :src="props.img" height="150px" cover></v-img>
    <v-card-item>
      <div class="text-center">
        <div class="text-h6 mb-1">{{ props.name }}</div>
        <div class="text-h6 mb-1">จำนวนที่นั่ง {{ props.size }}</div>
        <div>
          <v-select
            label="Satus"
            :items="['Ready', 'Used', 'Cleaning', 'Waiting']"
            variant="underlined"
          ></v-select>
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>

<script></script>
