<script>
import { defineComponent } from "vue";

import { useUserStore } from "../stores/user";
import InfoUser from "../components/InfoUser.vue";
import QuestionSide from "../components/QuestionSide.vue";
import { useConditionViewStore } from "../stores/conditionView";
import PlaySide from "../components/PlaySide.vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    const userStore = useUserStore();
    const conditionViewStore = useConditionViewStore();

    return {
      userStore,
      conditionViewStore,
    };
  },

  methods: {
    handleTongleViewQuestionSide() {
      this.conditionViewStore.setTongleBtnManageQuestion()
    }
  },

  components: { InfoUser, QuestionSide, PlaySide },
});
</script>

<template>
  <div class="container-home">
    <div class="left-side">
      <InfoUser :userParam="userStore.user[0]" />
    </div>
    <div class="question-side">
      <div class="container-btn-manage-question">
        <button class="btn-manage-question" @click="handleTongleViewQuestionSide()">
          <div class="content-manage-question" v-show="conditionViewStore.isShowBtnManageQuestion">
            <i class="btn-icon fa-solid fa-gear"></i>
            <span>Manage Question</span>
          </div>
          <div class="content-play-game" v-show="!conditionViewStore.isShowBtnManageQuestion">
            <i class="btn-icon fa-solid fa-circle-question" ></i>
            <span>Play game</span>
          </div>
        </button>
      </div>

      <QuestionSide v-show="!conditionViewStore.isShowBtnManageQuestion"/>
      <PlaySide v-show="conditionViewStore.isShowBtnManageQuestion" />
    </div>
    <div class="right-side">
      <InfoUser :userParam="userStore.user[1]" />
    </div>
  </div>
</template>

<style scoped>
.container-home {
  padding: 0 50px;
  height: 100vh;
  display: grid;
  grid-template-columns: 32rem auto 32rem;
  gap: 2rem;
}
.left-side {
  height: 100%;
}
.question-side {
  padding: 24px;
  height: 90%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 24px;
}
.right-side {
  height: 100%;
}
.container-btn-manage-question {
  display: flex;
  justify-content: flex-end;
}
.btn-manage-question {
  padding: 12px 16px;
  border-radius: 12px;
  background-color: #fff;
  cursor: pointer;
  border: solid 2px #f48846;
  color: #f5670f;
  font-size: 1.6rem;
}

.btn-manage-question:hover {
  box-shadow: 0px 0px 10px #f48846;
}

.btn-icon {
  margin-right: 8px;
}
</style>
