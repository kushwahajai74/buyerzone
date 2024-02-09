<script setup>
import VisionBox from "./VisionBox.vue";
</script>
<template>
  <div class="about-main" id="about">
    <div class="about-content">
      <div class="about-text">
        <h1>About Us</h1>
        <p>
          Born in 1973 on the streets of Portobello, worn in the world today. As
          a denim pioneer we have consistently reinvented the definition of
          denim to keep up with the trends. We are an iconic brand that is
          synonymously associated with denim and limitless creativity. Pepe
          Jeans London gives you the foundations to exude self-confidence,
          uniqueness and authenticity.
        </p>
      </div>
      <div class="vision-box">
        <VisionBox
          title="Our Vision"
          img="https://png.pngtree.com/png-clipart/20221227/original/pngtree-trust-vector-png-image_8815400.png"
          text="Our aim is to provide all goods and services to our customers at one
        place"
        />
        <VisionBox
          title="Our Approach"
          img="https://cdn-icons-png.flaticon.com/512/7379/7379445.png"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <VisionBox
          title="Our Process"
          img="https://png.pngtree.com/png-vector/20220806/ourmid/pngtree-loading-process-png-image_6102033.png"
          text=" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.about-main {
  background-color: #ffaf3d;
  width: 100%;
  height: 110vh;
  display: flex;
  align-items: center;
  padding: 2vmax;
}
.about-content {
  background-color: hsla(0, 4%, 89%, 0.747);
  -webkit-box-shadow: 15px 15px 37px 0px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 15px 15px 37px 0px rgba(0, 0, 0, 0.44);
  box-shadow: 15px 15px 37px 0px rgba(0, 0, 0, 0.44);
  width: 90%;
  height: 75%;

  border-radius: 10px;
  margin: auto;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2%;
}

.about-content h1 {
  color: #ff952a;
  font-weight: 500;
  stroke: black;

  stroke-width: 1px;
  font-size: 2.5vmax;
  margin-bottom: 1.5%;
}
.about-content p {
  font-size: 1.2vmax;
  line-height: 2.5 vmax;
}
.vision-box {
  display: flex;
  justify-content: space-around;
}
@media only screen and (max-width: 900px) {
  .about-main {
    height: 100vh;
    width: 100%;
  }
  .about-content {
    height: 80vh;
    text-align: center;
    padding: 2vmax;
  }

  .about-content h1 {
    font-size: 3vmax;
  }
  .about-content p {
    font-size: 1.5vmax;
    text-align: justify;
  }
  .vision-box {
    flex-direction: column;
    width: 80%;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
}
</style>
