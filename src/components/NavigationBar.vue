<script setup>
import { computed, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
const route = useRoute();
const clicked = ref(false);
const toggleNav = () => {
  clicked.value = !clicked.value;
};
const isHome = computed(() => {
  return route.path === "/";
});
</script>
<template>
  <nav class="navBar" :class="{ 'home-nav': isHome }">
    <h3>
      Buyer<span style="color: transparent; -webkit-text-stroke: 2px black"
        >Zone</span
      >
    </h3>
    <div class="links" :class="[{ responsive_nav: clicked }]">
      <RouterLink @click="clicked = false" to="/">Home</RouterLink>
      <RouterLink @click="clicked = false" to="/products">Products</RouterLink>
      <a @click="clicked = false" href="/#about">About</a>
      <RouterLink @click="clicked = false" to="/contact">Contact</RouterLink>
      <div class="sign-in">Sign In</div>

      <button @click="toggleNav" class="navbar-btn">
        <font-awesome-icon icon="xmark" />
      </button>
    </div>
    <button @click="toggleNav" class="navbar-btn navbar-close">
      <font-awesome-icon icon="bars" />
    </button>
  </nav>
</template>
<style scoped>
.navBar {
  z-index: 1000;
  align-items: center;
  display: flex;
  font: 500 1.3vmax "Poppins";
  height: auto;
  justify-content: space-between;
  left: 0;
  padding: 15px 50px 10px 50px;
  top: 0;
  width: 100%;
  z-index: 200;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.home-nav a:hover {
  transition: 0.5s;
  color: rgb(255, 255, 255);
}
.home-nav {
  background-color: transparent;
  position: fixed;
  box-shadow: none;
}

.navBar > h3 {
  color: black;
  font: 600 3vmax "Poppins";
}
.navBar .links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navBar a {
  text-decoration: none;
  color: black;
  transition: 0.3s;
}

.navBar button {
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  display: none;
  /* visibility: hidden;
  opacity: 0; */
}
.navBar svg {
  font-size: 3.5vmax;
}
.sign-in {
  padding: 0.3vmax 1.5vmax 0.3vmax 1.5vmax;
  border: 2px solid black;
  color: black;
  font-size: 1vmax;
  border-radius: 17px;
  transition: 0.5s;
  cursor: pointer;
}
.sign-in:hover {
  background-color: black;
  color: white;
}
.navBar svg:hover {
  color: #e9af32;
}

@media only screen and (max-width: 900px) {
  .navBar {
    width: 100vw;
    padding: 25px 25px 25px 25px;
  }
  .navBar button {
    display: inline;
  }
  .links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font: 500 3vmax "Poppins";
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: white;
    gap: 1.5rem;
    transition: 0.3s;
    transform: translateX(-100%);
  }
  .links {
    display: flex;
    flex-direction: column;
  }
  .navBar a {
    color: black;
  }
  .navBar a:hover {
    color: #e9af32;
  }
  .links > button {
    position: absolute;
    right: 4.5vmax;
    top: 3vmax;
  }
  .navBar svg {
    font-size: 4vmax;
  }
  .responsive_nav {
    transform: none;
  }
}
</style>
