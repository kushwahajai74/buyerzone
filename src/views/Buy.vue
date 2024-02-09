<script setup>
import { RouterLink, useRoute } from "vue-router";
import products from "../assets/data.json";
const route = useRoute();
const prodId = route.params.id;
const product = products.find((prod) => prod._id === prodId);

function showAlert() {
  alert("Order Placed Successfully");
  alert("Redirecting to Home Page");
  window.location.href = "/";
}
</script>
<template>
  <div class="confirmOrderPage">
    <div>
      <div class="confirmshippingArea">
        <h2>Shipping Info</h2>
        <div class="confirmshippingAreaBox">
          <div>
            <p>Name:</p>
            <span>Jai Kushwaha</span>
          </div>
          <div>
            <p>Phone:</p>
            <span>9876543210</span>
          </div>
          <div>
            <p>Address:</p>
            <span>Sector 53, Rohinipuram Raipur, CG</span>
          </div>
        </div>
      </div>
      <div class="confirmCartItems">
        <h2>Your Items:</h2>
        <div class="confirmCartItemsContainer">
          <div key="{item.product}">
            <img :src="product.images[0].url" alt="Product" />
            <RouterLink
              :to="`/product/${product._id}`"
              style="text-decoration: underline"
            >
              {{ product.name }}
            </RouterLink>
            <span>
              <b>₹ {{ product.price }}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="orderSummary">
        <h2>Order Summery</h2>
        <div>
          <div>
            <p>Subtotal:</p>
            <span>₹ {{ product.price }}</span>
          </div>
          <div>
            <p>Shipping Charges:</p>
            <span>₹ 0</span>
          </div>
          <div>
            <p>GST: 18%</p>
            <span>₹{{ product.price * 0.18 }}</span>
          </div>
        </div>

        <div class="orderSummaryTotal">
          <p>
            <b>Total:</b>
          </p>
          <span>₹ {{ product.price * 0.18 + product.price }}</span>
        </div>

        <button @click="showAlert">Place Order</button>
      </div>
    </div>
  </div>
</template>

<style>
.confirmOrderPage {
  height: 80vh;
  background-color: white;
  display: grid;
  grid-template-columns: 6fr 3fr;
}

.confirmOrderPage > div:last-child {
  border-left: 1px solid rgba(0, 0, 0, 0.247);
}

.confirmshippingArea {
  padding: 5vmax;
  padding-bottom: 0%;
}

.confirmshippingArea > p {
  font: 400 1.8vmax "Poppins";
}

.confirmshippingAreaBox,
.confirmCartItemsContainer {
  margin: 2vmax;
}

.confirmshippingAreaBox > div {
  display: flex;
  margin: 1vmax 0;
}

.confirmshippingAreaBox > div > p {
  font: 400 1vmax "Poppins";
  color: black;
}
.confirmshippingAreaBox > div > span {
  margin: 0 1vmax;
  font: 400 1vmax "Poppins";
  color: #575757;
}

.confirmCartItems > p {
  font: 400 1.8vmax "Poppins";
}

.confirmCartItems {
  padding: 5vmax;
  padding-top: 2vmax;
}

.confirmCartItemsContainer {
  max-height: 20vmax;
  overflow-y: auto;
}

.confirmCartItemsContainer > div {
  display: flex;
  font: 400 1vmax "Poppins";
  align-items: center;
  justify-content: space-between;
}

.confirmCartItemsContainer > div > img {
  width: 7vmax;
}

.confirmCartItemsContainer > div > a {
  color: #575757;
  margin: 0 2vmax;
  width: 60%;
  text-decoration: none;
}

.confirmCartItemsContainer > div > span {
  font: 300 1vmax "Poppins";
  color: #5e5e5e;
}

.orderSummary {
  padding: 7vmax;
}

.orderSummary > div > div {
  display: flex;
  justify-content: space-between;
  margin: 2vmax 0;
}
.orderSummary > div > div > span {
  color: rgba(0, 0, 0, 0.692);
}

.orderSummaryTotal {
  display: flex;
  font: 300 2vmax "Poppins";
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.363);
  padding: 2vmax 0;
}

.orderSummary > button {
  background-color: #e9af32;
  color: white;
  width: 100%;
  padding: 1vmax;
  border: none;
  margin: auto;
  cursor: pointer;
  transition: 0.5s;
  font: 400 1vmax "Poppins";
}

@media screen and (max-width: 600px) {
  .confirmOrderPage {
    grid-template-columns: 1fr;
    height: unset;
  }

  .confirmOrderPage > div:last-child {
    border-left: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.247);
  }

  .confirmshippingArea > p {
    font: 400 6vw "Poppins";
  }

  .confirmshippingAreaBox > div {
    display: flex;
    margin: 6vw 0;
  }

  .confirmshippingAreaBox > div > p {
    font: 400 5vw "Poppins";
  }
  .confirmshippingAreaBox > div > span {
    font: 400 4vw "Poppins";
  }
  .confirmCartItems {
    padding: 2vmax;
  }

  .confirmCartItems > p {
    font: 400 6vw "Poppins";
  }

  .confirmCartItemsContainer {
    max-height: 50vw;
  }

  .confirmCartItemsContainer > div {
    font: 400 4vw "Poppins";
    margin: 4vw 0;
  }

  .confirmCartItemsContainer > div > img {
    width: 15vw;
  }

  .confirmCartItemsContainer > div > a {
    margin: 0;
    width: 30%;
  }

  .confirmCartItemsContainer > div > span {
    font: 400 4vw "Poppins";
  }

  .orderSummary {
    padding: 12vw;
  }

  .orderSummary > p {
    font: 400 6vw "Poppins";
    padding: 4vw;
  }

  .orderSummary > div > div {
    font: 300 4vw "Poppins";
  }

  .orderSummaryTotal {
    font: 300 4vw "Poppins";
    padding: 5vw 0;
  }

  .orderSummary > button {
    padding: 4vw;
    margin: 4vw auto;
    font: 400 4vw "Poppins";
  }
}
</style>
