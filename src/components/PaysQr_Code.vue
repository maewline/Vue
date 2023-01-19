<script setup lang="ts"></script>

<template>
  <div>
    <table>
      <tr>
        <th colspan="2" style="text-align: left">สแกน QR Code</th>
      </tr>
      <tr>
        <td>
          <img
            class="QR-Code"
            type="image"
            src="../assets/img/Qr_Code.png"
            style="width: 300px; height: 200px"
          />
        </td>
      </tr>
      <tr>
        <td style="text-align: center">ยอดรวม 150 บาท</td>
      </tr>
      <tr>
        <td>
          <v-card-actions class="justify-center">
            <v-btn variant="flat" color="error"> ยกเลิก </v-btn>
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

table {
  background-color: #c9e265;
  color: black;
}
.image {
  padding: 20px 10px;
  margin-right: 20%;
}
.QR-Code {
  padding: 20px 50px;
}
</style>
