<template>
  <section>
    <div class="mt-5 margin-bottom-large">
      <div class="mb-5 col-12">
        <button
          type="submit"
          class="btn btn-primary mx-2"
          v-if="!clicked"
          @click="
            startCounter();
            testMode();
          "
        >
          For testing (15 second activities)
        </button>
      </div>
      <div class="mb-5 col-12">
        <button
          type="submit"
          class="btn btn-primary mx-2"
          v-if="!clicked"
          @click="
            startCounter();
            maxMode();
          "
        >
          Max Mode (for preparation to present - 1 minute activities)
        </button>
      </div>
      <div class="mb-5 col-12 responsive-button">
        <button
          type="submit"
          class="btn btn-primary mx-2"
          v-if="!clicked"
          @click="
            startCounter();
            easyMode();
          "
        >
          Einstein in a year (10 min activities)
        </button>
      </div>
      <div class="mb-5 col-12">
        <button
          type="submit"
          class="btn btn-primary mx-2"
          v-if="!clicked"
          @click="
            startCounter();
            hardMode();
          "
        >
          Beyonce in a month! (20 min activities!)
        </button>
      </div>
      <!-- </form> -->
    </div>

    <figure v-if="!clicked" class="margin_response margin-bottom-large">
      <blockquote class="blockquote">
        <p>
          The journey starts with a single step—not with thinking about taking a
          step.
        </p>
      </blockquote>
      <figcaption class="blockquote-footer">
        Jeff Olson,
        <cite title="Source Title"
          >The Slight Edge: Turning Simple Disciplines into Massive Success and
          Happiness</cite
        >
      </figcaption>
    </figure>

    <Number1 v-if="numberAnimation === 5" />
    <Number2 v-if="numberAnimation === 4" />
    <Number3 v-if="numberAnimation === 3" />
    <Number4 v-if="numberAnimation === 2" />
    <Number5 v-if="numberAnimation === 1" />

    <div v-if="showFirstCircle">
      <p class="circular__title" :key="id" v-for="{ id, firstTask } in tasks">
        {{ firstTask }}
      </p>
      <Circle
        :cssVars="cssVars"
        :counter="counter"
        :startProgress="startProgress"
        :finishCounter="finishCounter"
      />
    </div>

    <div v-if="showSecondCircle">
      <p class="circular__title" :key="id" v-for="{ id, secondTask } in tasks">
        {{ secondTask }}
      </p>
      <Circle
        :cssVars="cssVars"
        :counter="counter"
        :startProgress="startProgress"
        :finishCounter="finishCounter"
      />
    </div>

    <div v-if="showThirdCircle">
      <p class="circular__title" :key="id" v-for="{ id, thirdTask } in tasks">
        {{ thirdTask }}
      </p>
      <Circle
        :cssVars="cssVars"
        :counter="counter"
        :startProgress="startProgress"
        :finishCounter="finishCounter"
      />
    </div>
    <Confetti v-if="celebrate" />
    <UserList v-if="!clicked" />
  </section>
</template>

<script>
import { useLoadTasks } from "@/firebase";
import Circle from "./Circle";
import UserList from "./UserList";
import Number1 from "./Number1";
import Number2 from "./Number2";
import Number3 from "./Number3";
import Number4 from "./Number4";
import Number5 from "./Number5";
import Confetti from "./Confetti";

// audio.play();

export default {
  setup() {
    const tasks = useLoadTasks();
    return {
      tasks,
    };
  },
  name: "ProgressBar",
  components: {
    Circle,
    UserList,
    Number1,
    Number2,
    Number3,
    Number4,
    Number5,
    Confetti,
  },
  data() {
    return {
      numberAudio: new Audio(
        require("../sounds/countdown/ES_Firework Boom - SFX Producer.mp3")
      ),
      numberAudioCount: 0,
      clockAudio: new Audio(
        require("../sounds/clock/ES_Watch Clock Ticking - SFX Producer.mp3")
      ),
      clickItRedAudio: new Audio(
        require("../sounds/clock/ES_Sci Fi Alarm Warning 1 - SFX Producer.mp3")
      ),
      fireworkAudio: new Audio(
        require("../sounds/celebrate/139973__jessepash__crowd-yay-applause-25ppl-long.wav")
      ),
      correctAudio: new Audio(
        require("../sounds/right/421002__eponn__correct.wav")
      ),
      wrongAudio: new Audio(
        require("../sounds/wrong/493163__breviceps__buzzer-sounds-wrong-answer-error.wav")
      ),
      numberAnimation: 0,
      showFirstCircle: false,
      showSecondCircle: false,
      showThirdCircle: false,
      counter: 0,
      loop: 0,
      startProgress: false,
      finishProgress: false,
      clicked: false,
      activityTime: 0,
      timeOfAnimation: this.task1Time + this.task2Time + this.task3Time,
      task1Text: "",
      task2Text: "",
      task3Text: "",
      timerColor: 4158 + "d" + 0,
      celebrate: false,
    };
  },
  computed: {
    cssVars() {
      return {
        "--time-of-animation": (this.activityTime * 60 * 1000) / 2 + "ms",
        "--timer-color": "#" + this.timerColor,
      };
    },
    timeOfAnimationText() {
      return this.taskTime;
    },
  },
  methods: {
    testMode() {
      this.activityTime = 0.25;
    },
    maxMode() {
      this.activityTime = 1;
    },
    easyMode() {
      this.activityTime = 10;
    },
    hardMode() {
      this.activityTime = 20;
    },
    startCounter() {
      this.clicked = true;

      setTimeout(() => {
        console.log("In first interval");
        this.timeOfAnimation = parseFloat(this.taskTime);
        this.startProgress = true;
        var interval = setInterval(() => {
          console.log("In second interval");

          if (this.counter == 100 || this.finishProgress === true) {
            this.finishProgress = true;
            this.clickItRedAudio.pause();
            this.clockAudio.pause();

            // Reset for next circle
            setTimeout(() => {
              if (this.loop === 3) {
                clearInterval(interval);
                this.showThirdCircle = false;
                this.celebrate = true;
                this.fireworkAudio.loop = true;
                this.fireworkAudio.play();
              } else if (this.loop == 1) {
                this.showSecondCircle = true;
                this.showFirstCircle = false;
              } else if (this.loop == 2) {
                this.showThirdCircle = true;
                this.showSecondCircle = false;
              }
              if (this.loop < 3) {
                console.log("Working!");
                this.finishProgress = false;
                this.startProgress = false;
                this.counter = 0;
                this.timerColor = 4158 + "d" + 0;
              }
            }, 2000);

            // Add to loop
            this.loop += 1;

            clearInterval(interval);
            // If loop not 3 start over
            this.startCounter();
          } else {
            if (this.counter == 90) {
              this.timerColor = "d" + 44000;
              this.clickItRedAudio.currentTime = 0;
              this.clickItRedAudio.play();
              this.clockAudio.pause();
            } else if (this.counter < 90 && this.counter > 0) {
              this.clockAudio.play();
            }
            this.counter += 1;
          }
        }, this.activityTime * 60 * 10);
      }, 6000);
      var timerAnimate = setInterval(() => {
        this.numberAnimation += 1;
        if (this.numberAudioCount < 5) {
          this.numberAudio.playbackRate = 3.0;
          this.numberAudio.play();
          this.numberAudioCount += 1;
        }
        if (this.numberAnimation === 6) {
          this.showFirstCircle = true;
          clearInterval(timerAnimate);
        }
      }, 1000);
    },
    finishCounter() {
      this.finishProgress = true;
      if (this.counter >= 90) {
        this.timerColor = "ffc" + 93 + "c";
        this.correctAudio.play();
      } else if (this.counter < 90) {
        this.timerColor = 9 + "e" + 9 + "d" + 89;
        this.wrongAudio.play();
      }
    },
  },
};
</script>
