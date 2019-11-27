<template>
  <div>
    <div class="full-nav" :class="{'open': open}">
      <nav class="nav-two">
        <ul v-for="link of links" :key="link.title">
          <router-link tag="li" :to="link.url" class="nav-two-link">
            <a @click="open = false">{{link.title}}</a>
          </router-link>
        </ul>
      </nav>
    </div>
    <div class="nav-trigger" @click="open = !open">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="nav-one">
      <div class="logo">
        <img src="../../assets/img/nav-icon.png" alt />
      </div>
      <div class="nav-links col-md-8 col-lg-6">
        <ul v-for="link of links" :key="link.title" class="nav-one-link">
          <router-link tag="li" :to="link.url">
            <a href="#">{{link.title}}</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Home", url: "/" },
      { title: "Catalog", url: "/catalog" },
      { title: "Cart", url: "/cart" },
      { title: "Ingridients", url: "/" },
      { title: "Menu", url: "/" },
      { title: "Reservations", url: "/" }
    ],
    open: false
  })
};
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: #fff;
}
span {
  margin: 0;
  padding: 0;
}

.nav-one {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  z-index: 1;
  .nav-one-link {
    & a {
      padding: 5px 10px 6px;
      background: rgba(255, 255, 255, 0.55);
      border-radius: 50px;
      text-decoration: none;
      color: #000;
      font-weight: bold;
      transition: 0.2s;
      &:hover {
        background: rgb(173, 54, 54);
        color: #fff;
      }
    }
  }
}

.nav-two {
  padding-top: 150px;
  text-align: center;
}
.nav-two-link {
  & a {
    margin: 0 auto;
    display: block;
    height: 40px;
    width: 150px;
    background: rgba(255, 255, 255, 0.55);
    padding-top: 7px;
    border-radius: 50px;
    text-transform: uppercase;
    transition: 0.3s all;
    font-weight: bold;
    text-decoration: none;
    color: #000;
    &:hover {
      background: rgb(173, 54, 54);
      color: #fff;
    }
  }
}
.nav-links {
  display: flex;
  justify-content: space-between;
}
.full-nav {
  position: fixed;
  background: url("../../assets/img/nav-bg.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;
  transform: translateY(-100%);
  transition: all 0.3s;
}
.full-nav.open {
  opacity: 1;
  transform: translateY(0%);
}
.nav-trigger {
  z-index: 3;
  background: rgba(0, 0, 0, 0.7);
  padding-top: 10px;
  border-radius: 50%;
  position: fixed;
  display: none;
  flex-direction: column;
  width: 40px;
  height: 40px;
  top: 25px;
  right: 30px;
  text-align: center;
  align-items: center;
  cursor: pointer;
  & span {
    transition: all 0.3s;
  }
  &:hover span:nth-child(1),
  &:hover span:nth-child(3) {
    width: 30px;
  }
  & span:nth-child(1) {
    border-radius: 5px;
    width: 20px;
    height: 2px;
    background: white;
  }
  & span:nth-child(2) {
    border-radius: 5px;
    margin-top: 7px;
    width: 30px;
    height: 2px;
    background: white;
  }
  & span:nth-child(3) {
    border-radius: 5px;
    margin-top: 7px;
    width: 20px;
    height: 2px;
    background: white;
  }
}

@media (max-width: 800px) {
  .nav-trigger {
    display: flex;
  }
  .nav-links {
    display: none;
  }
}
</style>