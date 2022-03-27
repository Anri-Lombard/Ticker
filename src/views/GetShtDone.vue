<template>
  <div id="top" class="about">
    <ProgressBar />
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";

export default {
  name: "GetShtDone",
  components: {
    ProgressBar,
  },
};
</script>

<style lang="scss">
@import "../sass/main.scss";
</style>
