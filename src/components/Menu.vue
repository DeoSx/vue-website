<template>
  <div class="menu" id="menu">
    <div class="container">
      <div class="row">
        <div class="menu-item col-md-6">
          <p class="title">Appetisers</p>
          <img src="../assets/img/Divider.png" alt />
          <div class="menu-item-content" v-for="a of appetisers" :key="a.id">
            <div class="menu-name-price">
              <p class="name">{{a.name}}</p>
              <p class="price">${{a.price}}</p>
            </div>
            <p class="menu-text">{{a.text}}</p>
          </div>
        </div>
        <div class="menu-item col-md-6">
          <p class="title">Starters</p>
          <img src="../assets/img/Divider.png" alt />
          <div class="menu-item-content" v-for="s of starters" :key="s.id">
            <div class="menu-name-price">
              <p class="name">{{s.name}}</p>
              <p class="price">${{s.price}}</p>
            </div>
            <p class="menu-text">{{s.text}}</p>
          </div>
        </div>
        <div class="menu-item col-md-6">
          <p class="title">Salads</p>
          <img src="../assets/img/Divider.png" alt />
          <div class="menu-item-content" v-for="s of salads" :key="s.id">
            <div class="menu-name-price">
              <p class="name">{{s.name}}</p>
              <p class="price">${{s.price}}</p>
            </div>
            <p class="menu-text">{{s.text}}</p>
          </div>
        </div>
        <div class="menu-item col-md-6">
          <p class="title">Main Dishes</p>
          <img src="../assets/img/Divider.png" alt />
          <div class="menu-item-content" v-for="d of dishes" :key="d.id">
            <div class="menu-name-price">
              <p class="name">{{d.name}}</p>
              <p class="price">${{d.price}}</p>
            </div>
            <p class="menu-text">{{d.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    appetisers: [
      {
        name: "Tzasiki",
        price: 3.99,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 1
      },
      {
        name: "Aubergine Salad",
        price: 5.5,
        text: "Pureed eggplant, garlic, green pepper and tomato dip.",
        id: 2
      },
      {
        name: "Aubergine Salad",
        price: 5.25,
        text: "Pureed eggplant, garlic, green pepper and tomato dip.",
        id: 3
      }
    ],
    starters: [
      {
        name: "Haloumi",
        price: 3.99,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 4
      },
      {
        name: "Spinach Pie",
        price: 5.5,
        text: "Pureed eggplant, garlic, green pepper and tomato dip.",
        id: 5
      }
    ],
    salads: [
      {
        name: "Olive Special",
        price: 5.99,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 6
      },
      {
        name: "Greek Salad",
        price: 5.5,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 7
      },
      {
        name: "Gusto Salad",
        price: 5.25,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 8
      }
    ],
    dishes: [
      {
        name: "Cornish Mackerel",
        price: 5.99,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 9
      },
      {
        name: "Roast Lamb",
        price: 5.5,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 10
      },
      {
        name: "Fried Chicken",
        price: 5.25,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 11
      },
      {
        name: "Pastitslo",
        price: 5.99,
        text: "Refreshing traditional cucumber and garlic yoghurt dip.",
        id: 12
      }
    ]
  })
};
</script>

<style lang="scss">
.menu {
  padding-top: 80px;
  padding-bottom: 60px;
  background: url("../assets/img/bg-menu.png");
  background-size: cover;
}
.menu-item {
  & .title {
    text-align: center;
  }
  & img {
    display: block;
    margin: 0 auto;
    text-align: center;
  }
}
.menu-name-price {
  margin-bottom: 10px;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  color: #c89f2d;
  font-family: "Yeseva One", sans-serif;
  font-size: 21px;
  border-bottom: 1px solid #fbf7c0;
  & .name {
    margin: 0;
  }
  & .price {
    margin: 0;
  }
}
</style>