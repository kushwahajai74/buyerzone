<script setup>
import { RouterLink } from "vue-router";
import ContactCard from "./ContactCard.vue";
</script>
<template>
  <div class="contact">
    <div class="contact-main">
      <div class="contact-content">
        <h1>How can we help you?</h1>
        <p>
          We're here to help you with whatever you need and to answer any
          questions about your online or in-store shopping.
        </p>

        <RouterLink to="/contact"
          ><button class="contact-btn">
            Write Here
            <font-awesome-icon icon="fa-brands fa-telegram" /></button
        ></RouterLink>
        <div class="contact-cards">
          <ContactCard
            icon="	https://d1pdzcnm6xgxlz.cloudfront.net/content/images/footer/help/contactUs/mobile.png"
            title="Call us"
            contact="1800-123123"
            content="Monday to Friday: from 10am to 6pm"
          />
          <ContactCard
            icon="https://d1pdzcnm6xgxlz.cloudfront.net/content/images/footer/help/contactUs/email.png"
            title="Write to us"
            contact="customercare@buyerszone.in"
            content="We read e-mails Monday to Friday during working hours and we will respond within a 24h period."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contact-main {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}
.contact-content {
  background-color: hsla(0, 4%, 89%, 0.747);
  -webkit-box-shadow: 15px 15px 37px 0px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 15px 15px 37px 0px rgba(0, 0, 0, 0.44);
  box-shadow: 15px 15px 37px 0px rgba(0, 0, 0, 0.44);
  border-radius: 10px;
  margin: auto;
  width: 80%;
  padding: 1vmax;

  text-align: center;
}
.contact-content h1 {
  font-size: 3vmax;
  line-height: 4vmax;
  font-weight: 600;
  letter-spacing: 0.2vmax;
}
.contact-content p {
  font-size: 1.2vmax;
}
.contact-btn a {
  text-decoration: none;
  color: black;
}
.contact-btn {
  margin-top: 2vmax;
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
.contact-btn:hover {
  background-color: #ffaf3d;
  color: white;
  transition: 0.3s;
  border: none;
}
.contact-cards {
  padding: 2vmax;
  display: flex;
  justify-content: center;
  gap: 2vmax;
}
@media screen and (max-width: 900px) {
  .contact-cards {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
