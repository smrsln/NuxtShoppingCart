<template>
  <div class="container">
    <h3 class="text-center mt-3">Nuxt.js | Express.js | Session Kullanımı</h3>
    <div class="d-flex pt-3 justify-content-center" style="height: 100%">
        <Products :products="products" />
        <Cart />
    </div>
  </div>
</template>
<script>
import Cart from "@/components/cart/Cart"
import Products from "@/components/product/Products"
export default {
  components:{
    Cart,
    Products
  },
  computed:{
    products(){
      //console.log(this.$store.getters.getProducts)
      return this.$store.getters.getProducts
    }
  }
}
</script>
<style>
        .product-container, .cart-container {
            padding: 1em;
            flex: 1 !important;
        }
        .container {
            height: 90vh;
        }
        body {
            background-color: #FAF3DF;
        }
        .price-container{
            background-color: #D15385 !important;
            font-size: 12px;
        }
        .total-price-container{
            color: #D15385 !important;
            font-size: 20px;
        }
        .custom-alert {
            background-color: #FAF3DF !important;
            font-size: 12px;
        }
        .bg-custom-color {
            background-color: #FAF3DF !important;
        }
</style>
