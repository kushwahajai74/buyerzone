<script setup>
const props = defineProps({
  icon: String,
  title: String,
  contact: String,
  content: String,
});
</script>
<template>
  <div class="contact-card">
    <div class="card-content">
      <img :src="icon" alt="icon" />
      <p>{{ title }}</p>
      <h3>{{ contact }}</h3>
      <p class="content">{{ content }}</p>
    </div>
  </div>
</template>
<style scoped>
.contact-card:hover {
  transform: translate(0, -10px);
  transition: 0.5s;
  cursor: pointer;
}
.card-content {
  text-align: center;
  background-color: #fff;
  width: 18vmax;
  height: 15vmax;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vmax;
  gap: 0.5vmax;
}
.card-content p:nth-child(2) {
  font-size: 1vmax;
  font-weight: 300;
  letter-spacing: 2px;
}
.card-content p:nth-child(4) {
  font-size: 1vmax;
}
.card-content img {
  border: 1px solid black;
  border-radius: 50%;

  width: 3vmax;
}
.card-content h3 {
  font-size: 1vmax;
  font-weight: 700;
}
</style>
