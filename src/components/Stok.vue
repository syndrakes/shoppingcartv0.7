<template>
  <div id="stoklar">
    <h1>STOKLAR</h1>
    <button class="btn btn-secondary">Ürün ekle</button>
    <button class="btn btn-secondary">Ürün sil</button>
    <button class="btn btn-secondary">Stok güncelle</button>
  </div>
</template>
<script>
export default {
  name: "stok",
};
</script>
<style >
#stoklar {
  padding: 50px;
  margin: 0 auto;
  width: 700px;
  top: -50%;
  display: inline-block;
  height: 500px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(138, 135, 135);
}

</style>