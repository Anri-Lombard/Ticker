<template>
  <div>
    <section class="start">
      <div class="ticker">
        <h1 class="ticker__heading white_text">Ticker</h1>
        <p class="ticker__paragraph white_text">
          Tick the morning one task at a time
        </p>
      </div>
      <ImageWaiting />
      <h1 class="start__description mb-5 white_text">
        We have 1440 minutes every day... let's use the first few right
      </h1>
      <ImprovementMan class="mb-5" />
      <div class="story_text white_text">
        There is said to be a person... so devishly handsome as you, to be on
        the path the masters thought was not possible. Now it is up to you to
        prove them right... Every. Single. Morning.
        <br />
        <br />
        This is Tracy's part.
      </div>
      <WinkFace />
      <MaxOne />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageWaiting from "@/components/ImageWaiting";
import ImprovementMan from "../components/ImprovementMan";
import WinkFace from "../components/WinkFace";
import MaxOne from "../components/MaxOne";

export default {
  name: "Home",
  components: {
    ImageWaiting,
    ImprovementMan,
    WinkFace,
    MaxOne,
  },
};
</script>

<style lang="scss">
@import "../sass/main.scss";
</style>
