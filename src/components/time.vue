<script setup>
import { ref } from "vue";
import { chineseDay } from "../utils/constants";
import { countLeapYears, fixPrecision, isLeapYear } from "../utils/index";
const emit = defineEmits();

const knowDate = 1647259200000;
let date = ref(new Date());
const getDuration = (date = new Date()) => {
  const leapYearsCount = Math.round(
    countLeapYears(date.getFullYear()) -
      countLeapYears(new Date(knowDate).getFullYear())
  );
  const durationTimestamp = +date - knowDate;
  const years = Math.floor(
    (durationTimestamp - leapYearsCount * 31622400000) / 31536000000 +
      leapYearsCount
  );
  const yearsTimestamp =
    31622400000 * leapYearsCount + 31536000000 * (years - leapYearsCount);

  const days = Math.floor((durationTimestamp - yearsTimestamp) / 86400000);
  /* 闰年年份 1/1 - 3/14 由于 yearsTimestamp 多算一天，会导致天数少一天，展示上需要加回来 */
  const daysShow =
    isLeapYear(date.getFullYear()) &&
    +(+`${date.getMonth() + 1}${date.getDate()}`) <=
      +(+`${new Date(knowDate).getMonth() + 1}${new Date(knowDate).getDate()}`) &&
      +date % (24 * 60 *60 * 1000) < +new Date(knowDate) % (24 * 60 *60 * 1000)
      ? days + 1
      : days;
  const hours = Math.floor(
    (durationTimestamp - yearsTimestamp - 86400000 * days) / 3600000
  );
  const minutes = Math.floor(
    (durationTimestamp - yearsTimestamp - 86400000 * days - 3600000 * hours) /
      60000
  );
  const seconds = Math.floor(
    (durationTimestamp -
      yearsTimestamp -
      86400000 * days -
      3600000 * hours -
      60000 * minutes) /
      1000
  );
  return {
    years,
    days: daysShow,
    hours,
    minutes,
    seconds,
  };
};

const duration = ref(getDuration());

setInterval(() => {
  date.value = new Date();
  duration.value = getDuration(date.value);
  // 每半小时拉一次
  if (
    (date.value.getMinutes() === 0 || date.value.getMinutes() === 30) &&
    date.value.getSeconds() === 0 &&
    date.value.getMilliseconds() > 500 &&
    date.value.getMilliseconds() < 999
  ) {
    fetchWeather();
  }
}, 500);

/* 天气 */
const weather = ref({
  daily: [],
  indice: [],
});
const fetchWeather = () => {
  fetch(
    "https://devapi.qweather.com/v7/weather/3d?location=116.27,40.04&key=350580cf5ace4eda8d25e97059810017"
  )
    .then((res) => res.json())
    .then((res) => {
      weather.value.daily = res.daily;
    });
};
fetchWeather();

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

const clickCount = ref(0);
const handleClickIcon = () => {
  clickCount.value = clickCount.value + 1;
  setTimeout(() => {
    clickCount.value = 0;
  }, 1000);
  if (clickCount.value >= 3) {
    emit("iconClick");
    clickCount.value = 0;
  }
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
        <span v-if="+duration.years > 0">{{ duration.years }}年</span>
        <span
          v-if="+duration.days > 0"
          :style="{
            'font-size': +duration.years > 0 ? '36px' : 'unset',
          }"
          ><span v-if="+duration.years > 0">零</span>{{ duration.days }}天</span
        >
        <span
          v-if="
            +duration.years > 0 &&
            date.getMonth() === 2 &&
            date.getDate() === 14
          "
          class="memorial-day-label"
          >{{ fixPrecision(date.getFullYear() - 2022) }}周年纪念日</span
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
        <div @click="handleClickIcon" class="icon">天气</div>
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
  .memorial-day-label {
    position: absolute;
    right: 40px;
    transform: rotate(20deg);
    font-size: 18px;
    margin-left: 10px;
    border-radius: 4px;
    background: linear-gradient(45deg, rgb(68, 47, 17), rgb(215, 163, 160));
    padding: 5px 10px;
    &::after {
      content: "🎁";
      font-size: 28px;
      position: absolute;
      right: -15px;
      top: -20px;
      transform: rotate(15deg);
    }
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
        &:active {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
