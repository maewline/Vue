<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>

<template>
  <v-card class="mx-auto" max-width="100vh" rounded height="80%">
    <v-table class="justify-center">
      <v-row>
        <v-col cols="6" style="margin: 1%">
          <th>รายการ</th>
        </v-col>
        <v-col cols="4" style="margin: 1%">
          <th>จำนวน</th>
        </v-col>
        <v-col style="margin: 1%">
          <th>ราคา</th>
        </v-col>
      </v-row>
      <v-divider class="mt-2"></v-divider>
      <v-row>
        <v-col cols="6" style="margin: 1%">
          <td>ผัดกระเพรา(พิเศษ)</td>
          <v-card-subtitle> หมายเหตุ: ไม่งอก ไม่เผ็ด ไม่กิน </v-card-subtitle>
        </v-col>
        <v-col cols="4" style="margin: 1%">
          <td>1</td>
        </v-col>
        <v-col style="margin: 1%">
          <td>60</td>
        </v-col>
      </v-row>
      <v-divider class="mt-2"></v-divider>
      <v-row>
        <v-col cols="6" style="margin: 1%">
          <td>ต้มแซ่บปลาร้า</td>
          <v-card-subtitle> หมายเหตุ: ไม่ผัก ไม่เผ็ด </v-card-subtitle>
        </v-col>
        <v-col cols="4" style="margin: 1%">
          <td>2</td>
        </v-col>
        <v-col style="margin: 1%">
          <td>120</td>
        </v-col>
      </v-row>
      <v-divider class="mt-2"></v-divider>
      <v-row>
        <v-col cols="6" style="margin: 1%">
          <td>ยำปลาดุก</td>
          <v-card-subtitle> หมายเหตุ: ขอพริกเยอะๆ </v-card-subtitle>
        </v-col>
        <v-col cols="4" style="margin: 1%">
          <td>1</td>
        </v-col>
        <v-col style="margin: 1%">
          <td>50</td>
        </v-col>
      </v-row>
      <v-divider class="mt-2"></v-divider>
      <v-row>
        <v-col cols="6" style="margin: 1%">
          <td>ผัดผงกระหรี่(พิเศษ)</td>
          <v-card-subtitle> หมายเหตุ: </v-card-subtitle>
        </v-col>
        <v-col cols="4" style="margin: 1%">
          <td>1</td>
        </v-col>
        <v-col style="margin: 1%">
          <td>80</td>
        </v-col>
      </v-row>
      <v-divider class="mt-2"></v-divider>
      <v-row>
        <v-col cols="6" style="margin: 1%">
          <td>ทอดมันปลากราย</td>
          <v-card-subtitle> หมายเหตุ: ไม่เส้น ไม่เผ็ด </v-card-subtitle>
        </v-col>
        <v-col cols="4" style="margin: 1%">
          <td>2</td>
        </v-col>
        <v-col style="margin: 1%">
          <td>100</td>
        </v-col>
      </v-row>
      <v-divider class="mt-2"></v-divider>
      <v-row style="src: 50px; width: 100%">
        <v-container>
          <v-row class="justify-md-start">
            <v-col cols="6" md="4" style="margin: 10px">
              <v-btn style="background-color: forestgreen; color: white"
                >ชำระเงิน</v-btn
              >
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-container>
      </v-row>
    </v-table>
  </v-card>
</template>

<style scoped></style>
