<template>
  <div class="ingridients" id="ingridients">
    <div class="container">
      <Parallax :fixed="true" class="parallax">
        <img class="ing-img" src="../assets/img/ing-bg.png" />
      </Parallax>
      <div class="row">
        <div class="ingredient-content col-md-5 col-10">
          <p class="title">Fine ingredients</p>
          <img
            src="../assets/img/divider-ing.png"
            alt
            class="ingredients-divider"
          />
          <p class="text">
            If you’ve been to one of our restaurants, you’ve seen – and tasted –
            what keeps our customers coming back for more. Perfect materials and
            freshly baked food, delicious Lambda cakes, muffins, and gourmet
            coffees make us hard to resist! Stop in today and check us out!
          </p>
          <div class="ingredient-img">
            <img src="../assets/img/ing1.png" alt />
            <img src="../assets/img/ing2.png" alt />
            <img src="../assets/img/ing3.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";

export default {
  components: {
    Parallax
  }
};
</script>

<style lang="scss" scoped>
.ingridients {
  position: relative;
  height: 760px;
}
.title {
  color: #fff;
}
.ingredient-content {
  max-width: 600px;
  background: rgba(0, 0, 0, 0.67);
  color: #fff;
  position: absolute;
  text-align: center;
  padding: 80px 80px 60px;
  border: 1px solid rgba(0, 0, 0, 0.9);
  top: 100px;
  right: 150px;
}
.text {
  margin-top: 30px;
}
.ingredient-img {
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
  & img {
    width: auto;
  }
}
.parallax {
  overflow: hidden;
}

@media (max-width: 900px) {
  .ingredient-content {
    right: 50%;
    transform: translateX(50%);
  }
}
@media (max-width: 540px) {
  .ingredient-content {
    padding: 50px 60px 30px;
  }
}
@media (max-width: 470px) {
  .ingredient-content {
    padding: 30px 30px 30px;
  }
}
@media (max-width: 390px) {
  .ingredient-content {
    padding: 30px 5px 30px;
  }
}
</style>
