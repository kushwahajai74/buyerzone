<script setup>
import { useRoute } from "vue-router";
import products from "../assets/data.json";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const modules = [Navigation, Pagination, Autoplay];
const route = useRoute();
const prodId = route.params.id;
const product = products.find((prod) => prod._id === prodId);
</script>

<template>
  <div className="ProductDetails">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
    >
      <swiper-slide
        v-for="image in product.images"
        :key="image._id"
        id="swiper"
      >
        <img :src="image.url" class="CarouselImage" alt="Product Image" />
      </swiper-slide>
    </swiper>
    <div>
      <div class="detailsBlock-1">
        <h2>{{ product.name }}</h2>
        <p>Product #{{ product._id }}</p>
      </div>
      <div class="detailsBlock-2">
        <!-- <Rating {...options} /> -->
        <span class="detailsBlock-2-span">
          ({{ product.numberOfReviews }} Reviews)
        </span>
      </div>
      <div class="detailsBlock-3">
        <h1>₹ {{ product.price }}</h1>
        <div class="detailsBlock-3-1">
          <button>
            <router-link :to="`/buy/${product._id}`">BUY NOW</router-link>
          </button>
        </div>

        <p>
          Status:
          <b class="greenColor"> InStock </b>
        </p>
      </div>
      <div className="detailsBlock-4">
        Description :
        <p>{{ product.description }}</p>
      </div>

      <button class="submitReview">Submit Review</button>
    </div>
  </div>
</template>
<style scoped>
#swiper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.CarouselImage {
  height: 60vh;
  background-position: center;
  background-size: cover;
}
.ProductDetails {
  background-color: rgb(255, 255, 255);
  width: 100vw;
  max-width: 100%;
  padding: 3vmax;
  box-sizing: border-box;
  display: flex;
  height: 80vh;
  margin-top: 2vmax;
}
.ProductDetails > div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 2vmax;
  box-sizing: border-box;
}

.ProductDetails > div:last-child {
  align-items: flex-start;
}

.CarouselImage {
  /* width: auto !important; */
  max-height: 27vmax;
}

.detailsBlock-1 > h2 {
  color: rgb(54, 54, 54);
}

.detailsBlock-1 > p {
  color: rgba(54, 54, 54, 0.582);
}

.detailsBlock-2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.205);
  border-bottom: 1px solid rgba(0, 0, 0, 0.205);
  width: 70%;
  padding: 1vmax 0;
}

.detailsBlock-2-span {
  font: 200 1vmax "Open Sans";
  color: rgba(0, 0, 0, 0.699);
}

.detailsBlock-3 {
  width: 70%;
}

.detailsBlock-3 > h1 {
  color: rgba(17, 17, 17, 0.795);
  font: 400 1.8vmax "Franklin Gothic Medium";
  margin: 1vmax 0;
}
.detailsBlock-3-1 {
  display: flex;
  align-items: center;
}

.detailsBlock-3-1 > button:last-child {
  border: none;
  cursor: pointer;
  color: white;
  transition: all 0.5s;
  background-color: #e9af32;
  font: 500 1vmax "Poppins";
  border-radius: 20px;
  padding: 0.5vmax 2vmax;
  outline: none;
}
.detailsBlock-3-1 > button:last-child a {
  text-decoration: none;
  padding: 2vmax 2vmax;
  color: white;
}

.detailsBlock-3 > p {
  border-top: 1px solid rgba(0, 0, 0, 0.205);
  border-bottom: 1px solid rgba(0, 0, 0, 0.205);
  padding: 1vmax 0;
  color: rgba(0, 0, 0, 0.651);
  font: 400 1vmax "Roboto";
  margin: 1vmax 0;
}

.detailsBlock-4 {
  color: rgba(0, 0, 0, 0.897);
  font: 500 2vmax sans-serif;
}

.detailsBlock-4 > p {
  color: rgba(0, 0, 0, 0.534);
  font: 300 0.8vmax sans-serif;
}

.submitReview {
  border: none;
  background-color: #e9af32;
  font: 500 1vmax "Poppins";
  border-radius: 20px;
  padding: 0.6vmax 2vmax;
  margin: 1vmax 0;
  color: white;
  cursor: pointer;
  transition: all 0.5s;
  outline: none;
}

@media screen and (max-width: 900px) {
  .CarouselImage {
    height: 20vh;
  }

  .ProductDetails {
    padding: 1vmax;
    flex-direction: column;
    height: unset;
  }

  .ProductDetails > div:last-child {
    align-items: center;
  }

  .detailsBlock-1 > h2 {
    font-size: 2.8vmax;
    text-align: left;
  }

  .detailsBlock-1 > p {
    text-align: center;
    font-size: 1vmax;
  }

  .detailsBlock-2 {
    justify-content: center;
  }
  .detailsBlock-2 > span {
    font-size: 1.5vmax;
  }

  .detailsBlock-3 > h1 {
    font: 700 3vmax "Franklin Gothic Medium";
    text-align: center;
  }

  .detailsBlock-3-1 {
    flex-direction: column;
  }

  .detailsBlock-3-1-1 {
    padding: 2vmax 0;
  }
  .detailsBlock-3-1-1 > button {
    padding: 1.2vmax;
    width: 4vmax;
  }

  .detailsBlock-3-1-1 > input {
    padding: 1.5vmax;
    width: 3vmax;
    font: 400 1.8vmax "Roboto";
  }

  .detailsBlock-3-1 > button:last-child {
    font: 500 1.7vmax "Roboto";
    padding: 1.5vmax;
    width: 20vmax;
    margin: 3vmax 0;
  }

  .detailsBlock-3 > p {
    padding: 2.5vmax 0;
    text-align: center;
    font: 400 2vmax "Roboto";
  }

  .detailsBlock-4 {
    font: 500 2.5vmax sans-serif;
  }

  .detailsBlock-4 > p {
    font: 300 1.8vmax sans-serif;
  }

  .submitReview {
    font: 500 1.7vmax "Roboto";
    padding: 1.5vmax;
    width: 20vmax;
    margin: 3vmax 0;
  }
}
</style>
