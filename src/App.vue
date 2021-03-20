<template>
  <nav>
   <div id="headings">
    <h1>Blahblah.com</h1>
    <p>Best blah's.</p>
    <hr>
   </div>
   <div id="links">
    <router-link tag="li" to="/sepet">S E P E T</router-link>|
    <router-link tag="li" to="/market">M A R K E T</router-link> |
    <router-link tag="li" to="/yonetim">Y Ö N E T İ M</router-link>
   </div>
  <router-view :sendthese="{products, shopcart}"></router-view>
  </nav>
</template>

<script>



export default {
  data:() => {
    return {
      
      products: [
      {
        productId: "0",
        productName: "iPhone",
        price: "8.950",
        stock: 100,
        

      },
       {
        productId: "1",
        productName: "iMac",
        price: "15.800",
        stock: 50,
        
      },
       {
        productId: "2",
        productName: "Macbook",
        price: "20.999",
        stock: 50,
        
      },
       {
        productId: "3",
        productName: "iPad",
        price: "4.580",
        stock: 100,
        
      },
       {
        productId: "4",
        productName: "iPod",
        price: "1.540",
        stock: 100,
        
      }
      ],
      shopcart: []


    }
     

      
  },
  methods: {

    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#links {
  display: flex;
  justify-content: space-between;
  width: 35%;
  margin: 20px auto;
}

#links li {
  list-style-type: none;
  cursor: pointer;
  border-bottom: 1px solid white;
}

#links li:hover {
border-bottom: 1px solid black;
visibility: visible;
}

h1 {
  text-align: center;
}

p {
  text-align: center;
}

</style>
