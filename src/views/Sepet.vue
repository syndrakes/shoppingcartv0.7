<template>
   <div id="area">
    <h2>Seçilen Ürünler: ({{shopcart}})</h2>
    <SepetItems
      v-for="product in sendthese.shopcart"
      :key="product.productId"
      :product="product"
    />
    <ul>
      <li v-for="item in sendthese.shopcart" :key="item.id">{{ item.productName }}</li>
      
    </ul>
    <h6 v-if="sendthese.shopcart == 0">Sepetinizde ürün bulunmamaktadır.</h6>
    <h6 class="toplam">Toplam: {{total}}₺</h6> 
    <h6 class="toplam">Bakiyeniz: {{money}}₺</h6>
    <button  class="btn flex-row-reverse btn-primary"  v-if="total > 0" @click="toplam()">Satın Al</button>
    <button  class="btn flex-row-reverse btn-primary" v-else-if="sendthese.shopcart == 0" @click="sepetEmpty">Satın Al</button>
    <button  class="btn flex-row-reverse btn-primary" v-else @click="moneyNotEnough()">Satın Al</button>
    <button v-if="sendthese.shopcart > 0">Sepetten çıkart</button>
  </div>
</template>
<script>

import SepetItems from "../components/SepetItems.vue";

export default {
  name: "Sepet",
  props: ['sendthese','values'],
  components: {
    SepetItems,

    
  },
  data() {
    return {
      total: 0,
    };
  },
  methods: {
    sepetEmpty() {
      confirm("Sepette hiç ürün yok.");
    },
    moneyNotEnough() {
      confirm("Bakiyeniz yetersiz. Lütfen yükleme yapınız.")
    }
  },
    
    
    
};
</script>
<style >
h1 {
  text-align: center;
  font-size: 50px;
}
strong {
  font-size: 20px;
}

#area {
  padding: 50px;
  margin: 0 auto;
  width: 700px;
  border: 1px solid rgb(138, 135, 135);
}


.toplam {
    text-align: right;
}
.p{
  text-align: right;

}

ul li {
  display: flex;
  flex-wrap: wrap;
}
</style>
