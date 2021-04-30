<template>
  <div>
    <section class="start">
      <div class="ticker">
        <h1 class="ticker__heading white_text">Ticker</h1>
        <p class="ticker__paragraph white_text">
          One small tick for Alex, one task completed for you!
        </p>
      </div>
      <ImageWaiting />
      <h1 class="start__description white_text">
        We have 1440 minutes every day... let's use the first few right
      </h1>
      <div class="story_text white_text">
        Welcome to Acornia...
        <!-- Anri you can probably put the first acorn person svg here-->
        <br />
      </div>
      <ImprovementMan
        style="background: white"
        class="mb-5 ImprovementManScaling"
      />
      <div class="story_text white_text">
        <br />
        Olaf is unflappable and on top of it all!
        <br />
        They don't hide from a challenge, no win is ever a close call
        <br />
        While everyone else is snoozing away
        <br />
        This early bird gets their way
        <br />
      </div>
      <ImprovementWoman class="ImprovementWomanScaling" />
      <div class="story_text white_text">
        <br />
        Sal is straightforward - a plain old pal
        <br />
        Everything requires just one try by 'ol Sal
        <br />
        Especially getting up in the morning
        <br />
        Because while others slumber, they go exploring
        <br />
      </div>
      <MaxOne class="MaxOneScaling" style="backgroundColor: white;" />
      <div class="story_text white_text">
        <br />
        Now meet Alex....<!--Anri then the second one after this, probably-->
        <br />
        <br />
        Alex has dysania - a hard time waking up
        <br />
        And it's not because he was at the club
        <br />
        He needs your help getting up each day
        <br />
        I promise, he won't get in your way
        <br />
        <br />
        Born in Acornia, the land of his people
        <br />
        To others, he's considered feeble
        <br />
        Simply because he gets left behind
        <br />
        Every morning, in his bed, confined
        <br />
        ...
        <br />
        <br />
        Help him change his narrative from helpless to proactive. <br />
        Get Alex through the morning and get some tasks done along the way...
        <br />then maybe you and Alex could be great, too, one day
        <br />
        <br />
        <button class="maxButton" onclick="location.href = '/getshtdone'">
          Let's Go
        </button>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageWaiting from "@/components/ImageWaiting";
import ImprovementMan from "../components/ImprovementMan";
import ImprovementWoman from "../components/ImprovementWoman";
import MaxOne from "../components/MaxOne";

export default {
  name: "Home",
  components: {
    ImageWaiting,
    ImprovementMan,
    ImprovementWoman,
    MaxOne,
  },
};
</script>

<style lang="scss">
@import "../sass/main.scss";
</style>
