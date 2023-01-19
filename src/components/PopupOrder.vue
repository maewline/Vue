<script setup lang="ts">
import { ref, onMounted } from "vue";
import { usemanagePopupStore } from "@/stores/popupManagement";
import { useFoodStore } from "@/stores/foods";
import { useSelectStore } from "@/stores/selectMenu";
const foodStore = useFoodStore();
const selected = useSelectStore();
const popupManagement = usemanagePopupStore();
const add = () => {
  popupManagement.piece += 1;
  console.log(selected.selectedID);
};
const remove = () => {
  if (popupManagement.piece - 1 == 0) {
    return;
  } else {
    popupManagement.piece -= 1;
  }
};
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="popupManagement.isShow" persistent>
      <v-container style="overflow-y: auto">
        <v-row>
          <v-col>
            <!-- <v-card> -->
            <v-card class="mx-auto" max-width="50vh" rounded>
              <v-img
                :src="foodStore.foods[selected.selectedID].img"
                width="100%"
                height="40vh"
                cover
              ></v-img>

              <v-card-title>
                {{ foodStore.foods[selected.selectedID].name }}
              </v-card-title>

              <v-card-subtitle> หวานหอมอะไร ทำจากเนื้อหมาแท้ๆ </v-card-subtitle>
              <v-divider class="mt-2"></v-divider>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-btn block @click="remove"> ลด </v-btn></v-col
                  >
                  <v-col cols="6"
                    ><v-btn block @click="add"> เพิ่ม </v-btn></v-col
                  >
                </v-row>
                <v-row>
                  <v-container>
                    <v-row class="justify-md-start">
                      <v-col
                        v-for="n in 6"
                        :key="n"
                        cols="6"
                        md="4"
                        style="margin: 0px"
                      >
                        <v-checkbox
                          label="หวาน"
                          style="border: red"
                        ></v-checkbox>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                  </v-container>
                </v-row>
                <v-row class="justify-space-around mb-4">
                  <v-col cols="3">รวม </v-col>
                  <v-col cols="3">{{ popupManagement.piece }} ชิ้น</v-col>
                  <v-col cols="3"
                    >{{
                      foodStore.foods[selected.selectedID].price *
                      popupManagement.piece
                    }}
                    บาท</v-col
                  >
                </v-row>
                <v-divider class="mt-2"></v-divider>
                <v-row class="mt-2">
                  <v-col>
                    <v-text-field
                      label="หมายเหตุ"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <v-card-actions>
                <v-btn text @click="popupManagement.switchOffPopup"
                  >ยกเลิก</v-btn
                >

                <v-btn color="purple" text> ตกลง </v-btn>

                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>
  </v-row>
</template>

<style scoped>
table {
  border: 1px solid black;
  border-collapse: collapse;
  background-color: antiquewhite;
}

img {
  margin: 20px 20px;
}
</style>
