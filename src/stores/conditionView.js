import { defineStore } from "pinia";

export const useConditionViewStore = defineStore({
  id: "conditionView",
  state: () => ({
    isShowHomePage: false,
    isShowBtnManageQuestion: true,
  }),

  actions: {
    setShowHomePage() {
      this.isShowHomePage = true;
    },
    setTongleBtnManageQuestion() {
      this.isShowBtnManageQuestion = !this.isShowBtnManageQuestion;
    },
  },
});
