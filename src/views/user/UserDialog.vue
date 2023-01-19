<script setup lang="ts">
import type { VForm } from "vuetify/components";
import { useUserStore } from "../../stores/users";
import { ref } from "vue";
const useStore = useUserStore();
const form = ref<VForm | null>(null);
const save = async () => {
  const { valid } = await form.value!.validate();
  if (valid) {
    useStore.saveUser();
  }
};
const clear = () => {
  useStore.dialog = false;
};
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="useStore.dialog" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Login**"
                    v-model="useStore.editedUser.login"
                    :rules="[
                      (v) => !!v || 'Name จะต้องไม่เป็นช่องว่าง',
                      (v) =>
                        v.length >= 5 ||
                        'Name ต้องมากกว่าหรือเท่ากับ 5 ตัวอักษร',
                    ]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Name"
                    v-model="useStore.editedUser.name"
                    required
                    :rules="[
                      (v) => !!v || 'Name จะต้องไม่เป็นช่องว่าง',
                      (v) =>
                        v.length >= 5 ||
                        'Name ต้องมากกว่าหรือเท่ากับ 5 ตัวอักษร',
                    ]"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="useStore.editedUser.password"
                    label="Password*"
                    type="password"
                    required
                    :rules="[
                      (v) => !!v || 'password จะต้องไม่เป็นช่องว่าง',
                      (v) =>
                        v.length >= 5 ||
                        'password ต้องมากกว่าหรือเท่ากับ 8 ตัวอักษร',
                      (v) =>
                        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
                          v
                        ) ||
                        'password ต้องมีตัวอักษรตัวเล็ก ตัวใหญ่ และตัวอักษรพิเศษ',
                    ]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="clear()">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped></style>
