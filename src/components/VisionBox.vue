<script setup>
const props = defineProps(["img", "text", "title"]);
</script>
<template>
  <div class="vision-container">
    <div class="vision-heading">
      <h3>{{ props.title }}</h3>
    </div>
    <div class="vision-content">
      <img :src="props.img" alt="Icon" srcset="" height="100px" width="100px" />
      <p>
        {{ props.text }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.vision-container {
  border-radius: 1vmax;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}
.vision-heading {
  width: 100%;
  background: #ffaf3d;
}
.vision-heading h3 {
  text-align: center;
  color: black;
  font-size: 1.5rem;
  padding: 1rem;
}
.vision-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 70%;
  height: 30vh;
}

@media screen and (max-width: 900px) {
  .vision-container {
    width: 100%;
  }
  .vision-heading {
    padding: 0;
  }
  .vision-heading h3 {
    text-align: center;
    color: black;
    font-size: 1rem;
    padding: 0.1rem;
  }
  .vision-content {
    flex-direction: row;
    align-items: center;
    gap: 0.7rem;
    padding: 1rem;
    width: 100%;
    height: 8vh;
  }
  .vision-content img {
    height: 50px;
    width: 50px;
  }
  .vision-content p {
    font-size: 0.7rem;
  }
}
</style>
