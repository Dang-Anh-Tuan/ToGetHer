<template>
  <div class="container">
    <div class="wrapper">
      <div class="container-btn-random">
        <button class="btn btn-random-question" @click="handleRandomQuestion()">
          Random Question
        </button>
      </div>
      <div class="container-question">
        <pulse-loader
          :loading="loading"
          :color="color"
          :size="size"
          v-if="isLoading"
        ></pulse-loader>
        <p v-if="!isLoading" class="question">
          {{ questionStore.questions[indexQuestion] }}
        </p>
      </div>
      <div class="container-btn-choose">
        <button
          :class="
            isDisabledAnswer ? 'btn btn-answer btn-disabled' : 'btn btn-answer'
          "
          @click="handleButtonAnswer()"
        >
          Answer
        </button>
        <button
          :class="
            isDisabledAnswer ? 'btn btn-drink btn-disabled' : 'btn btn-drink'
          "
          @click="handleButtonDrink()"
        >
          Drink
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuestionStore } from "../stores/question";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useUserStore } from "../stores/user";

export default defineComponent({
  setup() {
    const questionStore = useQuestionStore();
    const userStore = useUserStore();

    return {
      questionStore,
      userStore,
    };
  },

  data: () => {
    return {
      indexQuestion: null,
      isLoading: false,
      isDisabledAnswer: true,
      isDisabledDrink: true,
    };
  },

  methods: {
    unDisabledChooseBtn() {
      this.isDisabledAnswer = false;
      this.isDisabledDrink = false;
    },
    disabledChooseBtn() {
      this.isDisabledAnswer = true;
      this.isDisabledDrink = true;
    },
    randomIndexQuestion() {
      return Math.floor(
        Math.random() * (this.questionStore.questions.length - 0) + 0
      );
    },
    handleRandomQuestion() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;

        this.unDisabledChooseBtn();

        let newIndex = this.randomIndexQuestion();
        while (newIndex === this.questionStore.preIndexQuestion) {
          newIndex = this.randomIndexQuestion();
        }
        this.indexQuestion = newIndex;
      }, 1000);
    },
    handleCommonBtnChoose() {
      this.userStore.changeCurrentUser();
      this.disabledChooseBtn();
    },
    handleButtonAnswer() {
      const currentUser = this.userStore.currentUser;
      this.userStore.increaseScoreAnswer(currentUser);
      this.handleCommonBtnChoose();
    },
    handleButtonDrink() {
      const currentUser = this.userStore.currentUser;
      this.userStore.increaseScoreDrink(currentUser);
      this.handleCommonBtnChoose();
    },
  },

  components: {
    PulseLoader,
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}

.wrapper {
  width: 350px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.container-btn-random {
  display: flex;
  justify-content: center;
}
.btn {
  position: relative;
  padding: 16px 24px;
  cursor: pointer;
  font-size: 2rem;
}

.btn-random-question {
  padding: 18px 24px;
}

.btn-answer,
.btn-drink {
  color: #fff;
  border-radius: 24px;
}

.btn-answer {
  background-color: #52c41a;
  border: none;
}

.btn-answer:hover,
.btn-drink:hover {
  top: -3px;
}

.btn-answer:active,
.btn-drink:active {
  top: 2px;
}
.btn-drink {
  background-color: #b57bff;
  border: none;
}

.container-btn-choose {
  width: 350px;
  display: flex;
  justify-content: space-between;
}

.btn-random-question {
  border-radius: 24px;
  color: #fff;
  background-color: #f48846;
  border: none;
}

.btn-random-question:hover {
  box-shadow: 0px 0px 10px #f48846;
}

.container-question {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
}

.question {
  font-size: 2.4rem;
  line-height: 2.8rem;
}

.btn-disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
