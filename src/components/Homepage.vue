<script setup></script>
<template>
  <div class="home-main">
    <div class="hero-content">
      <p>Grab Upto 50% off on selected items</p>
      <img
        class="offer-img"
        src="../assets/images/offer.png"
        alt="offer"
        srcset=""
      /><router-link to="/products">
        <button class="main_btn">
          Shop Now <font-awesome-icon icon="bag-shopping" /></button
      ></router-link>
    </div>
  </div>
</template>
<style>
.home-main {
  background-image: url("../assets/images/banner.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vmin;
  width: 100%;
}
.hero-content {
  width: 30%;
  font-size: 2vmax;
  font-weight: 500;
  color: white;
  position: absolute;
  top: 40vmin;
  left: 30vmin;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 1vmax;
}
.offer-img {
  position: absolute;
  top: 0;
  left: 180vmin;
  width: 40%;
  height: auto;
}
.main_btn {
  margin-top: 1vmax;
  background-color: transparent;
  color: black;
  padding: 0.7vmax 2vmax;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 1.5vmax;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
}
.main_btn:hover {
  background-color: rgba(75, 74, 74, 0.562);
  color: white;
  transition: 0.3s;
}
@media only screen and (max-width: 900px) {
  .offer-img {
    display: none;
  }
  .hero-content {
    font-size: 1.5vmax;
    top: 40vmin;
    left: 15vmin;
  }
  .main_btn {
    font-size: 1vmax;
    padding: 0.5vmax 1vmax;
  }
}
</style>
