<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-item col-md-4">
          <p class="title">About us</p>
          <img src="../../assets/img/footer-divider.png" alt />
          <p class="footer-text">
            Lambda's new and expanded Chelsea location represents a truly authentic
            <strong>Greek</strong> patisserie, featuring breakfasts of fresh croissants and steaming bowls of café.
            Lamda the best restaurant in town
          </p>
        </div>
        <div class="footer-item col-md-4">
          <p class="title">Opening Hours</p>
          <img src="../../assets/img/footer-divider.png" alt />
          <p class="footer-text">
            <strong>Mon-Thu:</strong> 7:00am - 8:00pm
          </p>
          <p class="footer-text">
            <strong>Fri-Sun:</strong> 7:00am - 10:00pm
          </p>
        </div>
        <div class="footer-item col-md-4">
          <p class="title">Our Location</p>
          <img src="../../assets/img/footer-divider.png" alt />
          <p class="footer-text">
            <strong>
              19th Paradise Street Sitia
              <br />128 Meserole Avenue
            </strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  padding-bottom: 50px;
  color: #fff;
  text-align: center;
  background: #191919;
  & .footer-item {
    margin-top: 50px;
  }
  & .title {
    margin: 0;
    margin-bottom: 15px;
    font-size: 21px;
    color: #fff;
  }
  & img {
    margin-bottom: 20px;
  }
  & .footer-text {
    margin: 0;
  }
}
</style>