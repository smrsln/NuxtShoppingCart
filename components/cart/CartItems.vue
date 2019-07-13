<template>
    <table class="table table-hover table-striped table-bordered">
                <thead>
                  <th class="text-center">Product Name</th>
                  <th class="text-center">Piece</th>
                  <th class="text-center">Price</th>
                  <th class="text-center">Amount</th>
                  <th class="text-center">Delete</th>
                </thead>
                <tbody>
                    <CartItem v-for="item in cart" :item="item" :key="item.id"/>

                </tbody>
            </table>
</template>
<script>
import CartItem from "@/components/cart/CartItem"
export default {
    components: {
        CartItem
    },
    props:{
        cart:{
            type: Array,
            required: false
        }
    }
}
</script>
