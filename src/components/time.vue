<script setup>
import { ref } from "vue";
import { chineseDay } from "../config/constants";

const knowDate = 1647259200000;
const getDuration = () => {
  const durationTimestamp = +new Date() - knowDate;
  const years = Math.floor(durationTimestamp / 31536000000);
  const days = Math.floor((durationTimestamp - 31536000000 * years) / 86400000);
  const hours = Math.floor(
    (durationTimestamp - 31536000000 * years - 86400000 * days) / 3600000
  );
  const minutes = Math.floor(
    (durationTimestamp -
      31536000000 * years -
      86400000 * days -
      3600000 * hours) /
      60000
  );
  const seconds = Math.floor(
    (durationTimestamp -
      31536000000 * years -
      86400000 * days -
      3600000 * hours -
      60000 * minutes) /
      1000
  );
  return {
    years,
    days,
    hours,
    minutes,
    seconds,
  };
};

const duration = ref(getDuration());

setInterval(() => {
  duration.value = getDuration();
}, 500);

/* 天气 */
const weather = ref({
  daily: [],
  indice: [],
});
fetch(
  "https://devapi.qweather.com/v7/weather/3d?location=116.27,40.04&key=350580cf5ace4eda8d25e97059810017"
)
  .then((res) => res.json())
  .then((res) => {
    weather.value.daily = res.daily;
  });

const getWeatherText = (daily) => {
  if (!daily) {
    return "--";
  }
  if (daily.textDay === daily.textNight) {
    return `${daily.textDay} ${daily.tempMin}-${daily.tempMax}°C`;
  }
  return `白天${daily.textDay} 夜晚${daily.textNight} ${daily.tempMin}-${daily.tempMax}°C`;
};
const header = {
  date: `${new Date().getMonth() + 1}/${new Date().getDate()}`,
  day: `星期${chineseDay[new Date().getDay()]}`,
};
</script>

<template>
  <div class="time-container">
    <div class="header">
      <div class="date-block">
        <div>{{ header.date }}</div>
        <div>{{ header.day }}</div>
      </div>
    </div>
    <div class="content">
      <div>德总&包子相识</div>
      <div style="font-size: 88px; font-weight: bold">
        <span v-if="+duration.years > 0">{{ duration.years }}年</span
        ><span
          :style="{
            'font-size': +duration.years > 0 ? '36px' : 'unset',
          }"
          ><span v-if="+duration.years > 0">零</span>{{ duration.days }}天</span
        >
      </div>
      <div style="font-size: 26px">
        <span v-if="+duration.hours > 0">{{ duration.hours }} 小时 </span>
        <span v-if="+duration.minutes > 0">{{ duration.minutes }} 分钟 </span>
        <span v-if="+duration.seconds > 0">{{ duration.seconds }} 秒</span>
      </div>
    </div>
    <div class="footer">
      <div>
        <span id="jinrishici-sentence">春宵一刻值千金，花有清香月有阴</span>
      </div>
      <div class="weather-block">
        <div class="icon">天气</div>
        <div>
          <div>今日{{ getWeatherText(weather.daily[0]) }}</div>
          <div style="margin-top: 5px">
            明日{{ getWeatherText(weather.daily[1]) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.time-container {
  font-family: PingFang SC, Microsoft YaHei, sans-serif;
  flex: 1;
  padding: 40px 30px 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#f3bdbe, #b29dd1);
  font-size: 12px;
  .header {
    .date-block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 60px;
      height: 60px;
      border: 2px solid #fff;
      padding: 8px;
    }
  }
  .content {
    flex: 1;
    margin-top: 112px;
  }
  .footer {
    .weather-block {
      display: flex;
      align-items: center;
      margin-top: 10px;
      .icon {
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: #fff;
        color: #b29dd1;
        font-weight: bold;
      }
    }
  }
}
</style>
