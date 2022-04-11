<script setup>
import { ref } from "vue";
import humanize from "humanize-duration";

const knowDate = 1647259200000;
const durationTime = ref(+new Date() - knowDate);
setInterval(() => {
  durationTime.value = +new Date() - knowDate;
}, 500);

/* 天气 */
const weather = ref({
  daily: null,
  indice: null,
});
fetch(
  "https://devapi.qweather.com/v7/weather/3d?location=116.27,40.04&key=350580cf5ace4eda8d25e97059810017"
)
  .then((res) => res.json())
  .then((res) => {
    weather.value.daily = res.daily;
  });

fetch(
  "https://devapi.qweather.com/v7/indices/1d?type=3&location=116.27,40.04&key=350580cf5ace4eda8d25e97059810017"
)
  .then((res) => res.json())
  .then((res) => {
    weather.value.indice = res.daily;
  });

const getWeatherText = (textDay, textNight) => {
  if (textDay === textNight) {
    return textDay
  }
  return `白天${textDay} 夜晚${textNight}`
}
</script>

<template>
  <div class="time-wrap">
    <div>包子！与你相识</div>
    <div class="count">
      {{
        humanize(durationTime, {
          language: "zh_CN",
          delimiter: " ",
          round: true,
          units: ["y", "mo", "d", "h", "m", "s"],
        })
      }}
    </div>
    <div class="shici">
      「<span id="jinrishici-sentence">一日不见兮，思之如狂。</span>」
    </div>

    <!-- 天气 °C  -->
    <div v-if="weather.daily" style="position: absolute; right: 5px; bottom: 5px; font-size: 14px; padding: 6px;">
      <div>
        今天{{ getWeatherText(weather.daily[0].textDay, weather.daily[0].textNight) }}
        {{ weather.daily[0].tempMin }}-{{ weather.daily[0].tempMax }}°C
        <!-- 明日{{ weather.daily[1].tempMin  }}-{{ weather.daily[1].tempMax }}°C -->
        <span v-if="weather.indice">{{ weather.indice[0].text }}</span>
      </div>
      <div style="font-size: 12px; margin-top: 5px; color: #fad0c4;">
        明天{{ getWeatherText(weather.daily[1].textDay, weather.daily[1].textNight) }}
        {{ weather.daily[1].tempMin }}-{{ weather.daily[1].tempMax }}°C
      </div>
    </div>
  </div>
</template>

<style scoped>
.time-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
}
.count {
  font-size: 26px;
}
.unit {
  font-size: 20px;
}
.shici {
  margin-top: 100px;
}
</style>
