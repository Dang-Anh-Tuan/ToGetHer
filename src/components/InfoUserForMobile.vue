<template>
  <div class="container">
    <div
      class="container-info"
      :style="isReverse ? 'flex-direction: row-reverse;' : ''"
    >
      <div
        class="container-avatar"
        :style="
          boxShadowColor
            ? 'box-shadow: ' + boxShadowColor + ' 0px 5px 15px;'
            : ''
        "
      >
        <div
          class="avatar"
          :style="'background-image: url(' + userParam.avatar + ');'"
        ></div>
      </div>
      <div
        :class="
          isReverse
            ? 'container-score-answer--reverse'
            : 'container-score-answer'
        "
      >
        <div class="container-icon">
          <i class="score-icon fa-solid fa-circle-check color--success"></i>
        </div>
        <p :class="isReverse ? 'score-count--reverse' : 'score-count'">
          {{ userParam.scoreAnswer }}
        </p>
      </div>
      <div
        :class="
          isReverse
            ? 'container-score-drink--reverse'
            : 'container-score-answer'
        "
      >
        <div class="container-icon">
          <i class="score-icon fa-solid fa-martini-glass color--violet"></i>
        </div>
        <span class="separate"></span>

        <p :class="isReverse ? 'score-count--reverse' : 'score-count'">
          {{ userParam.scoreDrink }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userParam: Object,
    isReverse: Boolean,
    boxShadowColor: String,
  },
};
</script>

<style scoped>
.container-info {
  display: flex;
  height: 100%;
  align-items: center;
}

.container-avatar {
  width: 50px;
  height: 100%;
  border-radius: 50%;

}
.avatar {
  height: 100%;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.container-score-answer,
.container-score-drink {
  display: flex;
  align-items: center;
  margin-left: 12px;
}

.container-score-answer--reverse,
.container-score-drink--reverse {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-right: 12px;
}
.container-icon {
  font-size: 2rem;
}

.score-count {
  font-size: 1.6rem;
  margin-left: 12px;
}

.score-count--reverse {
  font-size: 1.6rem;
  margin-right: 12px;
}
</style>
