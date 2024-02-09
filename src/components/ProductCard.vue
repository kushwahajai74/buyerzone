<script setup>
defineProps({
  product: {
    type: Object,
  },
});
</script>

<template>
  <!-- <Link className="productCard" to={`/product/${product._id}`}> -->
  <RouterLink class="productCard" :to="`/product/${product._id}`">
    <img :src="product.images[0].url" alt="{product.name}" />

    <p>{{ product.name.substring(0, 15) }}</p>
    <div class="ratings">
      <font-awesome-icon icon="star" />
      <span>{{ product.ratings }}</span>
    </div>
    <span>₹{{ product.price }}</span>
    <button class="buy-now">BUY NOW</button>
  </RouterLink>
  <!-- </Link> -->
</template>

<style scoped>
.productCard {
  width: 18vmax;
  /* height: 25vmax; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-decoration: none;
  color: rgb(48, 48, 48);
  margin: 2vmax;
  transition: all 0.5s;

  box-shadow: 0 0 5px rgba(15, 15, 15, 0.26);
}

.productCard > img {
  width: 14rem;
  height: 14rem;
  object-fit: contain;
}

.productCard > div {
  margin: 0.5vmax;
  display: flex;
  align-items: center;
  gap: 0.5vmax;
}

.productCardSpan {
  margin: 0.5vmax;
}

.productCard > p {
  font-size: 1.2vmax;
  font-weight: 500;
  margin: 1vmax 0.5vmax;
  margin-bottom: 0;
}
.productCard svg {
  color: #f0c040;

  font-size: 1.2vmax;
}

.productCard > span {
  margin: 0.5vmax;
  color: tomato;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.5vmax;
}

.productCard:hover {
  -webkit-box-shadow: 0px 0px 33px -1px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 0px 0px 33px -1px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 0px 33px -1px rgba(0, 0, 0, 0.43);
  transform: translateY(-1vmax);
}
.productCard .buy-now {
  width: 100%;
  padding: 0.5vmax 1vmax;
  border: none;
  background-color: #f0c040;
  color: #fff;
  font-size: 1.2vmax;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s;
}
@media screen and (max-width: 900px) {
  .productCard {
    width: 15vmax;
  }
  .productCard > img {
    width: 7rem;
    height: 7rem;
  }
}
</style>
