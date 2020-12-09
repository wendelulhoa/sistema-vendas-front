<template>
  <div>
    <b-button @click="show = true" variant="primary">Checkout</b-button>
    <b-modal
      hide-header
      hide-footer
      v-model="show"
      id="modal-scrollable"
      scrollable
      size="lg"
      title="atividades enviadas"
    >
      <Checkout />
    </b-modal>
  </div>
</template>

<script>
import Checkout from "./Checkout"
export default {
    data() {
        return {
            show: false,
        }
    },
    components: {
        Checkout
    }
}
</script>