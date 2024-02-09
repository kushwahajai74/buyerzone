<script setup></script>
<template>
  <div class="contact">
    <div class="contact-main">
      <div class="contact-content">
        <h1>Write Us here!</h1>
        <div class="form">
          <form class="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" class="contact-btn">
              Send Message
              <font-awesome-icon icon="fa-brands fa-telegram" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contact-content {
  background-color: hsla(0, 4%, 89%, 0.747);
  -webkit-box-shadow: 15px 15px 37px 0px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 15px 15px 37px 0px rgba(0, 0, 0, 0.44);
  box-shadow: 15px 15px 37px 0px rgba(0, 0, 0, 0.44);
  border-radius: 10px;
  margin: auto;
  width: 80%;
  padding: 1vmax;
  height: 80vh;
  text-align: center;
}
.contact-content h1 {
  font-size: 3vmax;
  line-height: 4vmax;
  font-weight: 600;
  letter-spacing: 0.2vmax;
}
.contact-form {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
}
.form input {
  width: 80%;
  padding: 1vmax;
  margin: 1vmax;
  border: none;
  border-radius: 5px;
}
.form textarea {
  width: 80%;
  padding: 1vmax;
  margin: 1vmax;
  border: none;
  border-radius: 5px;
}
</style>
