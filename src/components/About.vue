<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="about-content col-md-6">
          <h3 class="title">Just the right food</h3>
          <div class="devider">
            <img src="../assets/img/Divider.png" alt />
          </div>
          <p
            class="about-text"
          >If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes, muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!</p>
          <div class="about-img-person">
            <img src="../assets/img/person.png" alt />
          </div>
        </div>
        <div class="about-img col-md-6">
          <img src="../assets/img/about-img.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  background: url("../assets/img/bg-about.png") no-repeat;
  background-size: cover;
}
.about-img {
  margin-top: 40px;
  & img {
    width: 100%;
  }
}
.about-content {
  margin-top: 95px;
  text-align: center;
}
.devider {
  margin-bottom: 30px;
}
.about-text {
  margin-bottom: 50px;
}
</style>