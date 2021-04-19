<template>
  <div class="circular">
    <div class="circular__inner"></div>
    <div class="circular__number" :style="cssVars">{{ counter }}%</div>
    <div @click="finishCounter" class="circular__circle">
      <div class="circular__circle--bar circular__circle--bar-left">
        <div
          class="circular__circle--bar"
          :class="{ 'circular__circle--bar-left--progress': startProgress }"
          :style="cssVars"
        ></div>
      </div>
      <div class="circular__circle--bar circular__circle--bar-right">
        <div
          class="circular__circle--bar"
          :class="{ 'circular__circle--bar-right--progress': startProgress }"
          :style="cssVars"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Circle",
  props: ["counter", "startProgress", "cssVars", "finishCounter"],
};
</script>
