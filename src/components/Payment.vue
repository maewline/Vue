<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>

<template>
  <div>
    <table>
      <tr>
        <th colspan="2" style="text-align: left">ชำระเงิน</th>
      </tr>
      <tr>
        <td>
          <img
            class="QR-Code"
            type="image"
            src="../assets/img/QRCode.png"
            style="width: 300px; height: 200px"
          />
        </td>
        <td>
          <img
            class="image"
            src="../assets/img/payment.png"
            style="width: 200px; height: 150px"
          />
        </td>
      </tr>
      <tr>
        <td style="text-align: center">สแกน QR Code</td>
        <td style="text-align: center">เงินสด</td>
      </tr>
      <br />

      <tr>
        <td colspan="2">
          <v-card-actions class="justify-center"
            ><v-btn variant="flat" color="error">ยกเลิก</v-btn>
          </v-card-actions>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table,
th {
  border: 1px solid black;
  border-collapse: collapse;
}
.image {
  padding: 20px 10px;
  margin-right: 20%;
}
.QR-Code {
  padding: 20px 50px;
}
</style>
