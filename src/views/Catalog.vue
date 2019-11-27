<template>
  <div class="catalog">
    <Navbar />
    <div class="container">
      <div class="row catalog-content">
        <div class="card" :id="i.id" style="width: 230px;" v-for="i of items" :key="i.id">
          <img :src="i.url" class="card-img-top catalog-img" alt />
          <div class="card-body">
            <h5 class="card-title">{{i.name}}</h5>
            <p class="card-text">${{i.price}}</p>
            <div class="button-cart">
              <button class="btn-cart" @click="i.quantity++">+</button>
              <input class="quantity" min="1" :value="i.quantity" type="number" />
              <button class="btn-cart" @click="i.quantity > 1 ? i.quantity-- : 1">-</button>
            </div>
            <button type="button" class="btn btn-warning" @click="addToCart">Add to cart</button>
          </div>
        </div>
      </div>
    </div>

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
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";

export default {
  data: () => ({
    items: [
      {
        name: "Tzasiki",
        price: 3.99,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 1,
        url:
          "https://www.liveeatlearn.com/wp-content/uploads/2015/02/best-tzatziki-recipe-photo-vert2.jpg",
        quantity: 1
      },
      {
        name: "Aubergine Salad",
        price: 5.5,
        text: "Pureed eggplant, garlic, green pepper and tomato dip.",
        id: 2,
        url:
          "http://static1.squarespace.com/static/52bb306ae4b029ce89f86665/5a54267708522929292f163b/5a6d4196085229bac5fcf749/1518477599014/TFU-dukkahlamb-intro_NT.jpg?format=1500w",
        quantity: 1
      },
      {
        name: "Aubergine Sal",
        price: 5.25,
        text: "Pureed eggplant, garlic, green pepper and tomato dip.",
        id: 3,
        url:
          "https://i0.wp.com/www.akitcheninistanbul.com/wp-content/uploads/2016/10/Linsesalat-med-aubergine-og-urter-1-of-6.jpg?fit=770%2C1026&ssl=1",
        quantity: 1
      },
      {
        name: "Haloumi",
        price: 3.99,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 4,
        url:
          "https://wellnourished.com.au/wp-content/uploads/2016/02/Strawberry-haloumi-salad-web-1-of-1.jpg",
        quantity: 1
      },
      {
        name: "Spinach Pie",
        price: 5.5,
        text: "Pureed eggplant, garlic, green pepper and tomato dip.",
        id: 5,
        url:
          "https://www.halfbakedharvest.com/wp-content/uploads/2018/03/Greek-Spinach-and-Feta-Pie-Spanakopita-1.jpg",
        quantity: 1
      },
      {
        name: "Olive Special",
        price: 5.99,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 6,
        url:
          "https://www.giverecipe.com/wp-content/uploads/2009/03/green-olive-salad-image.jpg",
        quantity: 1
      },
      {
        name: "Greek Salad",
        price: 5.5,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 7,
        url:
          "https://monkeyandmekitchenadventures.com/wp-content/uploads/2018/06/No-Oil-Greek-Salad_01.jpg",
        quantity: 1
      },
      {
        name: "Gusto Salad",
        price: 5.25,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 8,
        url:
          "https://www.onceuponachef.com/images/2019/07/Big-Italian-Salad-760x983.jpg",
        quantity: 1
      },
      {
        name: "Cornish Mackerel",
        price: 5.99,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 9,
        url:
          "https://res.cloudinary.com/fish-for-thought/image/upload/c_fill,f_auto,g_auto,h_550,w_550/Cornish%20Mackerel%20with%20Gnocchi_1523975287",
        quantity: 1
      },
      {
        name: "Roast Lamb",
        price: 5.5,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 10,
        url:
          "https://www.simplybeefandlamb.co.uk/media/1619/lamb-roast-dill-and-lemon-web.jpg?width=550&height=570&mode=crop",
        quantity: 1
      },
      {
        name: "Fried Chicken",
        price: 5.25,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 11,
        url:
          "https://s23209.pcdn.co/wp-content/uploads/2019/01/Instant-Pot-Rotisserie-ChickenIMG_8266.jpg",
        quantity: 1
      },
      {
        name: "Pastitslo",
        price: 5.99,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 12,
        url:
          "https://www.foodiecrush.com/wp-content/uploads/2019/07/Pomodoro-Sauce-foodiecrush.com-015.jpg",
        quantity: 1
      }
    ]
  }),
  computed: {
    orders() {
      return this.$store.getters.orders;
    }
  },
  mounted() {},
  methods: {
    addToCart(event) {
      const parent = event.target.parentNode;
      const imgUrl = parent.parentNode.children[0].getAttribute("src");
      const children = parent.children;
      const dataForm = {
        title: children[0].textContent,
        price: Number(children[1].textContent.substring(1)),
        quantity: +children[2].children[1].value
      };
      const amount = dataForm.price * dataForm.quantity;
      const data = {
        ...dataForm,
        amount,
        imgUrl
      };
      this.$store.dispatch("addOrder", data);
      event.target.style.display = "none";
    }
  },
  components: {
    Footer,
    Navbar
  }
};
</script>

<style lang="scss" scoped>
.catalog {
  background: #5d4037;
  background-size: cover;
  color: #fff;
}
.catalog-content {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  justify-content: space-around;
}
.card {
  margin: 10px 0;
  background: rgba(0, 0, 0, 0.6);
  background-size: cover;
  border-radius: 50px;
  transition: 0.2s;
  &:hover {
    -webkit-box-shadow: 6px 17px 42px -2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 6px 17px 42px -2px rgba(0, 0, 0, 0.5);
    box-shadow: 6px 17px 42px -2px rgba(0, 0, 0, 0.5);
  }
  .card-body {
    padding: 5px 0;
  }
  .card-title {
    margin-bottom: 5px;
  }
}
.catalog-img {
  display: block;
  margin: 0 auto;
  width: 228px;
  height: 300px;
  border-radius: 50px 50px 0 0;
}
.button-cart {
  display: flex;
  margin-bottom: 13px;
  justify-content: center;
  align-items: center;
}
.btn-cart {
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  background: #cc9900;
  transition: all 0.6s;
  &:hover {
    background: yellow;
    color: #000;
  }
}
.quantity {
  margin: 0 10px;
  height: 25px;
  text-align: center;
  width: 35px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>