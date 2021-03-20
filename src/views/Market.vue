<template>
<div>
  <section class="urunler">
       <button class="icon">   
           <i class="fas fa-shopping-cart"></i>
       </button>
       <span class="quantity">{{inStock.taken}}</span>
       <div v-for="product in sendthese.products" :key="product.name" class="urun">
        <h3 class="urun_header">{{ product.productName }}</h3>
      <img src="https://via.placeholder.com/150" class="urun_image">
      <p class="urun_price">Fiyat: {{product.price}}₺</p>
      <p class="sepet_quantity">| Stok: {{ product.stock }} |</p>
     <!-- <div class="sepeteat"> 
       <button v-on:click="increment(product)" class="sepet_button"> - </button>
         <span class="sepet_take">{{inStock.taken}}</span>
        <button v-on:click="decrement(product)" class="sepet_button"> + </button>
      </div> -->
      <div id="sepeteAdd">
      <button v-on:click="addProductToCart(product)" v-if="product.stock > 0">Sepete Ekle</button>
      <p v-if="product.stock <= 0">OUT OF STOCK!</p>
      </div>
      </div>
  </section>  
  </div>
</template>
<script>



export default {
    name: "Market",
    data: () => {
        return {
            inStock: {
                taken: 0
            } 
        };
    },
    props: ["sendthese", "shopcart"],
    methods: {
      addProductToCart (product) {
      this.sendthese.shopcart.push(product);
      this.inStock.taken++;
      product.stock--;
      

      },

},
    components: {
      
    }
     
}
</script>
<style scoped>
nav {
  display: flex;
  border-bottom: 2px solid black;
  height: 70px;
  position: sticky;
  justify-content: space-between;
 
}

#headings {
  padding: 10px;
  margin-left: 50px;
}
/* burada h1 ve p düzenle. */
#links {
  padding: 25px;
  display: flex;
  width: 35%;
  justify-content: space-around;
}

#links > li {
  
  list-style-type: none;
  
}
.icon {
    border: none;
    background-color: dodgerblue;
    color: white;
    border-radius: 5px;
}
.urunler {
    display: flex;
    flex-wrap: wrap;
    padding: 25px;
    align-items: center;
    
}


.urun:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}
.urun {
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 2rem;
    padding: 1rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}   
.urun_header {
      font-size: 2rem;
      text-align: center;
    }
.urun_price {
    margin: 5px none;
}
.urun_image {
      display: block;
      margin: 1rem auto;
    }
.sepet_quantity {
  text-align: center;
}
.sepet_button {
    border: none;
    border-radius: 5px;
    color: white;
    background-color: dodgerblue;
    width: 2rem;
    height: 2rem;
    margin: 5px;
    transition: all 0.3s;
}
.sepet_button:hover {
    background-color: rgb(27, 118, 209);
}

.sepeteat {
    text-align: center;
}

#sepeteAdd {
    text-align: center;
    
}

#sepeteAdd button {
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    color: white;
    background-color: rgb(22, 120, 247);
    transition: all 0.3s;
}
#sepeteAdd button:hover {
    background-color: rgb(27, 86, 196);
}

</style>