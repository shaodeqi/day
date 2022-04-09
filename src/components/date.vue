<script setup>
import { ref } from 'vue';
import humanize from 'humanize-duration';

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
    <div>包子！与你相识</div>
    <div class="count">
      {{
        humanize(durationTime, {
          language: 'zh_CN',
          delimiter: ' ',
          round: true,
          units: ['y', 'mo', 'd', 'h', 'm', 's'],
        })
      }}
    </div>
    <div class="shici">
      「<span id="jinrishici-sentence">正在加载今日诗词....</span>」
    </div>
  </div>
</template>

<style scoped>
.date-wrap {
  width: 100%;
  height: 100%;
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
