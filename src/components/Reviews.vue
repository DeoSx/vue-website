<template>
  <div class="reviews">
    <div class="container">
      <div class="row">
        <div class="review-content col-md-7">
          <p class="title">Guest Reviews</p>
          <img src="../assets/img/divider-ing.png" alt />
          <p
            class="review-text"
          >If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes, muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!</p>
          <p class="review-quote">- food inc, New York</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.reviews {
  padding-top: 80px;
  background: url("../assets/img/bg-rev.png") no-repeat center;
  background-size: cover;
  color: #fff;
  text-align: center;
  height: 600px;
}
.review-content {
  margin: 0 auto;
  padding: 80px 75px;
  background: rgba(0, 0, 0, 0.7);
  & img {
    margin: 10px 0 20px;
  }
  & .review-quote {
    margin: 30px;
  }
}
.review-content .title {
  color: #fff;
}

@media (max-width: 992px) {
  .review-content {
    padding: 60px 30px;
  }
}
@media (max-width: 360px) {
  .review-content {
    padding: 30px 10px;
  }
}
</style>