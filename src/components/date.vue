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

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div>{{ dayjs(knowDate).toNow(true) }}</div>
</template>

<style scoped></style>
