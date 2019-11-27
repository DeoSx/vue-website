<template>
  <div class="home">
    <router-view />
    <div class="hero">
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="hero-content">
            <h1 class="hero-title col-md-11">
              the right ingredients
              for the right food
            </h1>
            <div class="hero-img">
              <img src="../assets/img/hero-decoration.png" alt />
            </div>
            <div class="hero-buttons">
              <router-link class="hero-btn" to="/catalog">Go to catalog</router-link>
              <a class="hero-btn" href="#menu">See the menu</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <About />
    <Ingredients />
    <Menu />
    <Reviews />
    <Reservation />
    <Footer />
    <div class="cart-button" v-if="orders.length">
      <router-link to="/cart" class="cart-text">
        in cart
        <span>{{orders.length}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/app/Navbar";
import About from "@/components/About";
import Ingredients from "@/components/Ingredients";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Reservation from "@/components/Reservation";
import Footer from "@/components/app/Footer";

export default {
  name: "home",
  computed: {
    orders() {
      return this.$store.getters.orders;
    }
  },
  components: {
    Navbar,
    About,
    Ingredients,
    Menu,
    Reviews,
    Reservation,
    Footer
  }
};
</script>

<style lang="scss">
.home {
  position: relative;
}
.hero {
  background: url("../assets/img/hero-bg.png") no-repeat;
  background-size: cover;
}
.hero-content {
  text-align: center;
}
.hero-title {
  margin: 240px auto 0;
  font-family: "Yeseva One", sans-serif;
  text-shadow: 1px 1px 2px rgba(1, 1, 1, 0.64);
  opacity: 0.92;
  font-size: 90px;
  color: #ffffff;
}
.hero-img {
  margin-top: 35px;
}
.hero-buttons {
  margin-top: 35px;
  margin-bottom: 105px;
  display: flex;
  justify-content: center;

  & .hero-btn {
    width: 228px;
    color: #fff;
    padding: 13px 45px;
    display: block;
    position: relative;
    border: 2px solid #c89f2d;
    overflow: hidden;
    font-weight: bold;
    transition: 0.6s all ease;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;
  }
  & .hero-btn:hover {
    background: #c89f2d;
  }
  & a:nth-child(1) {
    margin-right: 5px;
  }
  & a:nth-child(2) {
    margin-left: 5px;
  }
}

.cart-button {
  position: fixed;
  padding-top: 8px;
  bottom: 50px;
  right: 20px;
  width: 60px;
  height: 60px;
  text-align: center;
  background: #cc9900;
  border-radius: 50%;
  & .cart-text {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    transition: 0.4s all;
    &:hover {
      color: red;
    }
    & span {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: red;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #fff;
      color: #fff;
      font-size: 16px;
    }
  }
}

@media (max-width: 1200px) {
  .hero-title {
    margin: 200px auto 0;
    font-size: 60px;
  }
}

@media (max-width: 1024px) {
  .hero-title {
    margin: 200px auto 0;
    font-size: 50px;
  }
}

@media (max-width: 560px) {
  .hero-title {
    font-size: 30px;
  }
  .hero-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    & a:nth-child(1) {
      margin: 0;
      margin-bottom: 10px;
    }
    & a:nth-child(2) {
      margin: 0;
    }
  }
}
</style>
