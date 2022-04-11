<template>
  <swiper direction="vertical">
    <swiper-slide>
      <Time />
    </swiper-slide>
    <!-- <swiper-slide>Slide 2</swiper-slide> -->
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import Time from "./components/time.vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Time,
  },
  setup() {
    return {};
  },
};
</script>
<style>
html,
body {
  margin: 0;
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
