<template>
  <swiper direction="vertical" class="swiper-wrap">
    <swiper-slide
      class="slide0"
      style="background: #999;"
      :style="bgImg"
    >
      <Time />
    </swiper-slide>
    <!-- <swiper-slide class="slide1">
      <div>女子图鉴</div>
      <div class="container">
        <swiper
          :effect="'cards'"
          :grabCursor="true"
          :modules="modules"
          class="cards-swiper"
        >
          <swiper-slide>Slide 1</swiper-slide
          ><swiper-slide>Slide 2</swiper-slide
          ><swiper-slide>Slide 3</swiper-slide
          ><swiper-slide>Slide 4</swiper-slide
          ><swiper-slide>Slide 5</swiper-slide
          ><swiper-slide>Slide 6</swiper-slide
          ><swiper-slide>Slide 7</swiper-slide
          ><swiper-slide>Slide 8</swiper-slide
          ><swiper-slide>Slide 9</swiper-slide>
        </swiper>
      </div>
    </swiper-slide>
    <swiper-slide class="slide1">
      <div>2022.3.14</div>
      <div>第一次打台球</div>
    </swiper-slide>
    <swiper-slide class="slide2">
      <div>2022.3.14</div>
    </swiper-slide>
    <swiper-slide class="slide3">
      <div>2022.4.10</div>
      <div>我们在闲逛的时候发现一只蜗牛，它爬的很慢很慢</div>
      <img
        src="./assets/img/woniu.png"
        style="width: 200px; height: auto"
        alt=""
      />
    </swiper-slide> -->
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import Time from "./components/time.vue";
const bgImgList = [
  'background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);',
  'background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);',
  'background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);',
  'background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);',
  'background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);',
  'background-image: linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);',
  'background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);',
  'background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);',
  'background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);',
  'background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);',
  'background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);',
  'background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);',
  'background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);',
  'background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);',
  'background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);',
  'background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);',
  'background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);',
  'background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);',
  'background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);',
  'background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);',
  'background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);',
  'background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);',
  'background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);',
  'background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);',
  'background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);',
  'background-image: linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%);',
  'background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);',
  'background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);',
  'background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);',
  'background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);',
  'background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);',
  'background-image: linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);',
  'background-image: linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%);',
  'background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);',
  'background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%);',
  'background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);',
  'background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);',
  'background-image: linear-gradient(-225deg, #77FFD2 0%, #6297DB 48%, #1EECFF 100%);',
  'background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);',
  'background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);',
  'background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);',
  'background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%);',
  'background-image: linear-gradient(to top, #50cc7f 0%, #f5d100 100%);',
  'background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);',
  'background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);',
  'background-image: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);',
]

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Time,
  },
  setup() {
    const bgImg = bgImgList[Math.floor(+new Date() / 86400000) %  bgImgList.length];
    return {
      modules: [EffectCards],
      bgImg,
    };
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
<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  font-size: 18px;
  background: #fff;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-wrap {
  color: #fff;
}

.slide0 {
  // background-image: linear-gradient(
  //   45deg,
  //   #ff9a9e 0%,
  //   #fad0c4 99%,
  //   #fad0c4 100%
  // );
}
.slide1 {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  .swiper-slide {
    // align-items: center;
    // justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }
}
.slide2 {
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}
.slide3 {
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
}
.slide4 {
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
}
.slide5 {
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
}
.slide6 {
  background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
}
.slide7 {
  background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);
}
.slide8 {
  background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
}
.slide9 {
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
}
.slide10 {
  background-image: linear-gradient(
    to right,
    #eea2a2 0%,
    #bbc1bf 19%,
    #57c6e1 42%,
    #b49fda 79%,
    #7ac5d8 100%
  );
}
</style>
