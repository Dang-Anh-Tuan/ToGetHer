<script>
import { defineComponent } from "vue";
import { useConditionViewStore } from "./stores/conditionView";
import RegisterUserView from "./views/RegisterUserView.vue";
import HomeView from "./views/HomeView.vue";

export default defineComponent({
  name: "App",
  setup() {
    const conditionView = useConditionViewStore();
    return {
      conditionView,
    };
  },
  components: { RegisterUserView, HomeView },
});
</script>

<template>
  <header>
    <div class="wrapper">
      <RegisterUserView  v-show="!conditionView.isShowHomePage"/>
      <HomeView v-show="conditionView.isShowHomePage" />
    </div>
  </header>
</template>

<style>
@import "./assets/global.css";
</style>
