<script>
import { defineComponent } from "vue";
import { useUserStore } from "../stores/user";

export default defineComponent({
  name: "InfoUser",

  props: {
    userParam: Object,
    boxShadowColor: String,
  },

  setup() {
    const user = useUserStore();

    return {
      user,
    };
  },
});
</script>

<template>
  <div
    class="container"
    :style="'box-shadow: ' + boxShadowColor + ' 0px 5px 15px;'"
  >
    <div
      class="container-avatar"
      :style="
        'background: linear-gradient(' +
        userParam.colorBackground.firstColor +
        ',' +
        userParam.colorBackground.secondColor +
        ');'
      "
    >
      <div
        class="avatar"
        :style="'background-image: url(' + userParam.avatar + ');'"
      ></div>
    </div>
    <p class="user-name">{{ userParam.username }}</p>
    <div class="container-score">
      <ul class="score">
        <li class="score-item">
          <div class="container-icon">
            <i class="score-icon fa-solid fa-circle-check color--success"></i>
          </div>
          <span class="separate"></span>
          <p class="score-count">{{ userParam.scoreAnswer }}</p>
        </li>
        <li class="score-item">
          <div class="container-icon">
            <i class="score-icon fa-solid fa-martini-glass color--violet"></i>
          </div>
          <span class="separate"></span>

          <p class="score-count">{{ userParam.scoreDrink }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 80%;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  border-radius: 24px;
  text-align: center;
}

.container-avatar {
  position: relative;
  height: 42%;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
}

.avatar {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  bottom: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.user-name {
  font-family: "Inter", sans-serif;
  position: relative;
  left: -3px;
  margin-top: 80px;
  font-size: 2.4rem;
  font-weight: 600;
  text-transform: uppercase;
}

.container-score{
  display: flex;
  justify-content: center;
  align-items: center;
}

.score {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 150px;
  margin-top: 20px;
}

li:nth-child(n + 2) {
  margin-top: 24px;
}

.score-item {
  display: flex;
  align-items: center;
}

.container-icon {
  width: 32px;
  text-align: left;
}
.score-icon {
  font-size: 3rem;
}

.score-count {
  font-size: 2.4rem;
  margin-left: 60px;
  font-weight: 600;
}

.separate {
  position: relative;
  left: 28px;
  width: 12px;
  height: 5px;
  background-color: #333;
}
</style>
