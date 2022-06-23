import { defineStore } from "pinia";
import { INIT_QUESTIONS } from "../constant/initQuestion";

export const useQuestionStore = defineStore({
  id: "question",
  state: () => ({
    questions: INIT_QUESTIONS,
    preIndexQuestion: null,
  }),
  actions: {
    addQuestion(question) {
      this.questions.push(question);
    },
    removeQuestion(index) {
      this.questions.splice(index, 1);
    },
  },
});
