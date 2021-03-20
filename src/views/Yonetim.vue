<template>
<div>
<div class="nested-links">   
<router-link tag="li" to="/stok">Stoklar</router-link>
<router-link tag="li"  to="/cuzdan">Cüzdanınız</router-link>
<router-view></router-view>
</div>    
<section>

</section>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
.nested-links {
    top: 0;
    left: 0;
    list-style-type: none;
    width: 200px;
    height: 150px;
    margin-top: 100px;
    margin-left: 100px;
    display: inline-block;
}

.nested-links li {
    margin-bottom: 50px;
    margin-top: 20px;
    border-bottom: 1px solid black;
    cursor: pointer;
}
</style>