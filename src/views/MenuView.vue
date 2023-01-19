<script setup lang="ts">
import { ref } from "vue";
import { mdiIceCream, mdiFoodTurkey, mdiGlassCocktail } from "@mdi/js";
import FrameworkFoodMenu from "@/components/FrameworkFoodMenu.vue";
import PopupOrder from "@/components/PopupOrder.vue";
import { usemanagePopupStore } from "@/stores/popupManagement";
import { useFoodStore } from "@/stores/foods";
const foodStore = useFoodStore();
const selectMainTab = ref("one");
function changeMainTab(select: string) {
  selectMainTab.value = select;
}
const frameList = ref([
  {
    name: "VueJS",
    img: "https://img.icons8.com/color/512/vue-js.png",
    rating: 10,
  },
]);
function changeRating(index: number, rating: number) {
  console.log("action " + index + " : " + rating);
  frameList.value[index].rating = rating;
}

// const orderList = computed(() => {
//   return [...frameList.value].sort((n1, n2) => n2.rating - n1.rating);
// });
//
const tab = ref(null);
const tab2 = ref(null);

const popupManagement = usemanagePopupStore();
const indexFood = ref(0);
</script>

<template>
  <PopupOrder
    :name="foodStore.foods[indexFood].name"
    :img="foodStore.foods[indexFood].img"
    :type="foodStore.foods[indexFood].type"
    :price="foodStore.foods[indexFood].price"
    style="position: relative"
  ></PopupOrder>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <v-tabs v-model="tab" bg-color="teal-darken-2" height="40">
                <v-tab
                  :class="selectMainTab === 'one' ? 'text-h5' : 'text-h6'"
                  value="one"
                  @click="changeMainTab('one')"
                  >อาหาร</v-tab
                >
                <v-tab
                  :class="selectMainTab === 'two' ? 'text-h5' : 'text-h6'"
                  @click="changeMainTab('two')"
                  value="two"
                  >เครื่องดื่ม</v-tab
                >
                <v-tab
                  :class="selectMainTab === 'three' ? 'text-h5' : 'text-h6'"
                  @click="changeMainTab('three')"
                  value="three"
                  >ของหวาน</v-tab
                >
              </v-tabs>

              <v-container fluid>
                <v-window v-model="tab">
                  <v-window-item value="one">
                    <v-container
                      class="bg-yellow"
                      fluid
                      style="width: 100%; overflow-x: auto; height: 40vh"
                    >
                      <v-row>
                        <v-col cols="6">
                          <FrameworkFoodMenu
                            name="ส้มตำ"
                            :type="['อาหาร']"
                            :id="5"
                            img="https://img.icons8.com/color/512/vue-js.png"
                          ></FrameworkFoodMenu>
                        </v-col>
                        <v-col cols="6">
                          <FrameworkFoodMenu
                            name="ส้มตำ"
                            :type="['อาหาร']"
                            :id="5"
                            img="https://img.icons8.com/color/512/vue-js.png"
                          ></FrameworkFoodMenu>
                        </v-col>
                        <v-col cols="6">
                          <FrameworkFoodMenu
                            name="ส้มตำ"
                            :type="['อาหาร']"
                            :id="5"
                            img="https://img.icons8.com/color/512/vue-js.png"
                          ></FrameworkFoodMenu>
                        </v-col>
                        <v-col cols="6">
                          <FrameworkFoodMenu
                            name="ส้มตำ"
                            :type="['อาหาร']"
                            :id="5"
                            img="https://img.icons8.com/color/512/vue-js.png"
                          ></FrameworkFoodMenu>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-window-item>

                  <v-window-item value="two"> Two </v-window-item>

                  <v-window-item value="three"> Three </v-window-item>
                </v-window>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-btn.s {
  width: 100px;
  /* height: 200px; */
  min-width: 250px;
  min-height: 100px;
  background-color: rgb(233, 255, 133);
  border-radius: 30px;
  color: black;
}
.v-btn.type {
  /* height: 200px; */
  min-height: 40px;
  background-color: rgb(233, 255, 133);
  border-radius: 30px;
  color: black;
  margin-left: 15px;
}

.fill-width {
  overflow-y: auto;
  flex-wrap: nowrap;
}

.order {
  margin-top: 50px;
  margin-bottom: 100px;
}
.example::-webkit-scrollbar {
  display: none;
}
</style>
