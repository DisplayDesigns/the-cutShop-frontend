<template>
  <div class="container">
    <h1>Cart</h1>
    <div v-for="(order, key) in this.cart" :key="order" class="displayOrders">
    <div class="order">
      <div class="title">Order {{key + 1}}</div>
      <p>{{order.materialType}}, {{order.materialThickness}}mm, {{order.material}}</p> 
      <p>{{order.materialArea}}SqM, {{order.numberOfCuts}}cuts/pcs</p> 
    </div>
    <div class="cost">
      <p>Cost: £{{order.cost}}</p> 
    </div>    
  </div>
  <hr>
  <div class="cart_total">
    <h3>Cart Total: £{{ cart_total }}</h3>
  </div>
  </div>
  
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: 'Cart',
    computed: {
      ...mapGetters(["cart"]),
       cart_total() {
            return this.$store.getters.cartTotal
        }
    }
}
</script>

<style scoped>
.container {
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  background-image: url("../assets/cnc3-edit.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow-y: auto;
}

.displayOrders {
  max-width: 400px;
  padding: 1rem;
  margin: 1rem auto;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  text-align: left;
}
.title {
  font-size: 1.25rem;
  font-weight: bold;
}
.cost {
  font-weight: bold;
  align-self: flex-end;
}

</style>