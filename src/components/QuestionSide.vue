<script>
import { defineComponent } from "vue";
import { useQuestionStore } from "../stores/question";

export default defineComponent({
  name: "QuesitonSide",

  setup() {
    const questionStore = useQuestionStore();

    return {
      questionStore,
    };
  },

  data: () => {
    return {
      inputQuestion: "",
    };
  },

  methods: {
    handleAdd(question) {
      this.questionStore.addQuestion(question);
    },
    handleRemove(index) {
      console.log(index);
      this.questionStore.removeQuestion(index);
    },
    removeInputQuestion() {
      this.inputQuestion = "";
    },
  },
});
</script>

<template>
  <div class="container">
    <div class="container-add-question-side">
      <div class="container-input-quession">
        <input
          type="text"
          class="question-input"
          placeholder="Enter your question"
          v-model="inputQuestion"
        />
        <button
          class="btn-add-question"
          @click="
            handleAdd(inputQuestion);
            removeInputQuestion();
          "
        >
          ADD
        </button>
      </div>
    </div>

    <ul class="question-list">
      <li v-for="(question, index) in questionStore.questions" :key="index">
        <div
          class="container-question-item"
          :style="
            index % 2 !== 0
              ? 'background-color: #dbe5f1 ;'
              : 'background-color: #fff;'
          "
        >
          <div class="question-no">{{ index + 1 }}</div>
          <p class="question-content">{{ question }}</p>
          <div class="container-btn-remove">
            <button
              class="btn-remove"
              :style="
                index % 2 !== 0
                  ? 'background-color: #dbe5f1 ;'
                  : 'background-color: #fff;'
              "
              @click="handleRemove(index)"
            >
              <i class="remove-icon fa-solid fa-xmark color--danger"></i>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  margin-top: 32px;
  padding: 0 32px 32px 32px;
  height: 500px;
  overflow-y: scroll;
}

.container-add-question-side {
  display: flex;
  justify-content: center;
  height: 36px;
}

.container-input-quession {
  position: relative;
  width: 80%;
}

.question-input {
  padding: 12px 16px;
  font-size: 1.6rem;
  width: 100%;
  border-radius: 24px;
  outline: none;
  border: solid 2px #f48846;
}

.btn-add-question {
  font-size: 1.6rem;
  position: absolute;
  padding: 12px 16px;
  right: 0;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  cursor: pointer;
  border: solid 2px #f48846;
  color: #fff;
  background-color: #f48846;
  transition: all 0.3s ease-in-out;
}

.btn-add-question:hover {
  border: solid 2px #f46e1b;
  background-color: #f46e1b;
}

.question-list {
  display: block;
  margin-top: 20px;
}

.container-question-item {
  display: grid;
  grid-template-columns: 5rem auto 5rem;
}

.question-no,
.question-content,
.container-btn-remove {
  padding: 16px 24px;
  font-size: 1.6rem;
  line-height: 2rem;
  letter-spacing: 0.8px;
}

.container-btn-remove {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-remove {
  padding: 4px 8px;
  cursor: pointer;
  background: #fff;
  border: none;
}
.remove-icon {
  font-size: 2rem;
}

@media only screen and (max-width: 1024px) {
  .container {
    height: 600px;
  }
}

@media only screen and (max-width: 767px) {
  .container {
    padding: 0 8px 12px 8px;
    height: 400px;
  }
  .question-no,
  .question-content,
  .container-btn-remove {
    padding: 12px 16px;
    font-size: 1.6rem;
    line-height: 2rem;
    letter-spacing: 0.8px;
  }
}
</style>
