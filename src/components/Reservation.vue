<template>
  <div class="reservation">
    <div class="container">
      <div class="row">
        <div class="reservation-img col-lg-6">
          <img src="../assets/img/reserv-1.png" alt />
          <img src="../assets/img/reserv-2.png" alt />
        </div>
        <div class="reservation-content col-lg-6">
          <p class="title">Just the right food</p>
          <img src="../assets/img/Divider.png" alt />
          <p
            class="reservation-text"
          >If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food.</p>
          <p
            class="reservation-text"
          >Delicious Lambda cakes, muffins, and gourmet coffees make us hard to resist! Stop in today and check us out! Perfect materials and freshly baked food.</p>
          <form @submit.prevent>
            <div class="row">
              <div class="input-group input-group-sm input-form col-md-6">
                <label for="name">Name</label>
                <input id="name" type="text" class="form-control" />
              </div>
              <div class="input-group input-group-sm input-form col-md-6">
                <label for="email">Email</label>
                <input id="email" type="email" class="form-control" />
              </div>
              <div class="input-group input-group-sm input-form col-md-6">
                <label for="date">Date</label>
                <input id="date" type="date" class="form-control" />
              </div>
              <div class="input-group input-group-sm input-form col-md-6">
                <label for="number">Party Number</label>
                <input id="number" type="number" class="form-control" />
              </div>
            </div>
            <button type="submit" class="btn btn-warning btn-reserv">Book now!</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.reservation {
  padding: 80px 0 70px;
  background: url("../assets/img/reser-bg.png");
  background-size: cover;
}
.reservation-img {
  & img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 240px;
  }
  display: flex;
  justify-content: space-around;
}
.reservation-content {
  text-align: center;
}
form {
  margin-top: 40px;
}
.reservation-form {
  display: flex;
  justify-content: space-between;
}
.input-form {
  margin-top: 30px;
  position: relative;
}
label {
  display: block;
  position: absolute;
  top: -25px;
  left: 15px;
  font-size: 14px;
  font-weight: 700;
  color: #c9a131;
}
.btn-reserv {
  margin-top: 30px;
  background-color: #c89f2d;
  color: #fff;
}

@media (max-width: 490px) {
  .reservation-img {
    & img {
      max-width: 150px;
    }
  }
}
</style>