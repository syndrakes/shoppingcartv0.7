<template>
  <div id="hum">
    <label class="m" for="number">Yüklenecek Miktar: </label>
    <input class="m" type="number" v-model="addValue" />
    <button class="btn btn-secondary" id="balanceUp" v-on:click=" values.money += parseInt(addValue)">Yükle</button>
    <p>Cüzdandaki paralar: {{ values.money }} ₺</p>
  </div>
</template>
<script>
export default {
  name: "cüzdan",
  data() {
    return {
      values: {
         money: 0,
         addValue: null,
    },
};
    
  },
};
</script>
<style>
.m {
  margin: 0 auto;
  text-align: center;
  justify-content: center;
}
</style>
