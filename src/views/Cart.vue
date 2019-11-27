<template>
  <div class="cart">
    <Navbar />
    <div class="cart-content">
      <p v-if="orders.length" class="title">
        Total:
        <strong style="color: #fff;">$ {{amount.toFixed(2)}}</strong>
      </p>
      <p class="title" v-if="!orders.length">
        No orders in cart.
        <router-link to="catalog">Add order.</router-link>
      </p>
      <div v-else class="cart-item col-md-8" v-for="o of orders" :key="o.imgUrl">
        <div class="close-trigger" @click="deleteOrder(o.imgUrl)">
          <span></span>
        </div>
        <img :src="o.imgUrl" alt />
        <p class="cart-text">
          <span>{{o.title}}</span>
        </p>
        <p class="cart-text">
          Quantity:
          <span>{{o.quantity}}</span>
        </p>
        <p class="cart-text">
          Price:
          <span>$ {{o.price}}</span>
        </p>
        <p class="cart-text">
          Amount:
          <span>$ {{o.amount.toFixed(2)}}</span>
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";

export default {
  data: () => ({
    amount: 0,
    text: ""
  }),
  computed: {
    orders() {
      return this.$store.getters.orders;
    }
  },
  methods: {
    deleteOrder(urlId) {
      this.$store.dispatch("deleteOrder", urlId);
      this.amount = this.orders.reduce((total, o) => {
        return (total += +o.amount);
      }, 0);
    }
  },
  mounted() {
    this.amount = this.orders.reduce((total, o) => {
      return (total += +o.amount);
    }, 0);
  },
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.cart {
  background: #5d4037;
  background-size: cover;
  color: #fff;
  text-align: center;
}
.cart-content {
  margin-bottom: 50px;
  padding-top: 50px;
  min-height: 300px;
}
.cart-item {
  position: relative;
  padding: 15px;
  margin: 10px auto;
  border-radius: 60px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  & img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
}
.close-trigger {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 30px;
  & span {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 3px;
      width: 20px;
      height: 5px;
      border-radius: 40%;
      background: red;
      transform: rotate(-45deg);
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 3px;
      width: 20px;
      height: 5px;
      border-radius: 40%;
      background: red;
      transform: rotate(45deg);
    }
  }
}
span {
  font-size: 18px;
  font-weight: bold;
  color: #cc9900;
}

@media (max-width: 550px) {
  .cart-item {
    width: 300px;
    flex-direction: column;
  }
}
</style>