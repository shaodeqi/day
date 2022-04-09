<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

const knowDate = '2022-3-14 20:00';
const durationTime = ref(+new Date() - +new Date(knowDate));
setInterval(() => {
  durationTime.value = +new Date() - +new Date(knowDate);
}, 500);
defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="date-wrap">
    <div>与你相识</div>
    <div>
      <span v-if="dayjs.duration(durationTime).years()" class="count"
        >{{ dayjs.duration(durationTime).years() }} <span class="unit">年</span>
      </span>
      <span v-if="dayjs.duration(durationTime).months()" class="count"
        >{{ dayjs.duration(durationTime).months() }}
        <span class="unit">年</span>
      </span>
      <span v-if="dayjs.duration(durationTime).days()" class="count"
        >{{ dayjs.duration(durationTime).days() }}<span class="unit">天</span>
      </span>
      <span v-if="dayjs.duration(durationTime).hours()" class="count"
        >{{ dayjs.duration(durationTime).hours()
        }}<span class="unit">小时</span>
      </span>
      <span v-if="dayjs.duration(durationTime).minutes()" class="count"
        >{{ dayjs.duration(durationTime).minutes()
        }}<span class="unit">分钟</span>
      </span>
      <span v-if="dayjs.duration(durationTime).seconds()" class="count"
        >{{ dayjs.duration(durationTime).seconds()
        }}<span class="unit">秒</span>
      </span>
    </div>
    <div class="shici">
      「<span id="jinrishici-sentence">正在加载今日诗词....</span>」
    </div>
  </div>
</template>

<style scoped>
.date-wrap {
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
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
