<template >
<div>
    
    <div class="container content-area">
	<div class="">
        
        <Checkout/>
        <Cart />
        <Product />
    </div>
    </div>
    </div>
</template>

<script>
import Checkout from "@/components/ModalCheckout"
import Cart from '@/components/Cart'
import Product from '@/components/Products'
export default {
    components: {
        Checkout,
        Cart,
        Product
    }
}
</script>