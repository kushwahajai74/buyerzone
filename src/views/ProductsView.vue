<script setup>
import ProductCard from "@/components/ProductCard.vue";
import products from "@/assets/data.json"; // Assuming `products` is exported from a file
</script>

<template>
  <div class="products">
    <div class="products-container">
      <h2 class="productsHeading">Products</h2>
      <div class="products">
        <ProductCard
          v-for="product in products || []"
          :key="product._id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.productsHeading {
  margin: 2vmax auto;
  width: 15vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.171);
  padding: 2vmax;
  color: rgba(0, 0, 0, 0.678);
  text-align: center;
}

.products {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4vmax;
  justify-content: center;
  min-height: 30vh;
}
@media screen and (max-width: 900px) {
  .products {
    padding: 0 1vmax;
  }
  .productsHeading {
    width: 50vw;
  }
}
</style>
