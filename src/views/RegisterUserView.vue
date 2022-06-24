<script>
import { defineComponent } from "vue";
import InputUser from "../components/InputUser.vue";
import { useConditionViewStore } from "../stores/conditionView";
import { useUserStore } from "../stores/user";

export default defineComponent({
  name: "RegisterUserView",
  setup() {
    const userStore = useUserStore();
    const conditionView = useConditionViewStore();

    return {
      userStore,
      conditionView,
    };
  },

  data: () => {
    return {};
  },

  methods: {
    handleChangeAvatar(avatar, index) {
      //change preview avatar

      this.userStore.setAvatar(avatar, index);
    },
    handleShowHomePage() {
      this.conditionView.setShowHomePage();
    },
  },

  components: { InputUser },
});
</script>

<template>
  <div class="container">
    <div
      class="circle"
      style="
        width: 300px;
        height: 300px;
        top: -70px;
        right: -70px;
        animation: CircleBounceBig 1.5s linear 0.3s infinite;
      "
    ></div>
    <div
      class="circle"
      style="
        width: 100px;
        height: 100px;
        bottom: 30px;
        left: 30px;
        animation-delay: 0.2s;
      "
    ></div>
    <div
      class="circle"
      style="width: 135px; height: 135px; bottom: 80px; left: 135px"
    ></div>

    <div class="box">
      <div class="container-logo">
        <img class="logo" src="../assets/images/logo-together.png" />
      </div>
      <div class="container-input-user">
        <InputUser :index="0" />
        <InputUser :index="1" />
      </div>

      <div class="container-btn-start">
        <button class="btn-start" @click="handleShowHomePage()">
          GET GO !!!
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.logo {
  width: 250px;
}

.box {
  width: 800px;
  text-align: center;
}

.container-input-user {
  display: flex;
  justify-content: space-between;
}

.container-btn-start {
  margin-top: 24px;
}
.btn-start {
  position: relative;
  font-size: 4rem;
  padding: 12px 32px;
  color: #fff;
  background-color: #f48846;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}

.btn-start::after {
  display: none;
  content: "";
  position: absolute;
  background-color: #ccc;
  top: calc(100% + 20px);
  width: 100px;
  height: 5px;
  left: 80px;
  border-radius: 50%;
  box-shadow: 0 0 10px 10px #ccc;
}

.btn-start:hover {
  top: -5px;
}

.btn-start:hover.btn-start::after {
  display: block;
}
.btn-start:active {
  top: 3px;
}

@media only screen and (max-width: 1024px) {
  .container {
    overflow-y: auto;
    padding-bottom: 50px;
  }
  .box {
    padding: 20px;
    width: 700px;
  }

  .container-input-user > * {
    margin-top: 50px;
  }
}

@media only screen and (max-width: 768px) {
  .container {
    overflow-y: auto;
  }
  .box {
    height: fit-content;
    padding: 50px;
    width: 700px;
  }
  .container-input-user {
    flex-direction: column;
  }

  .container-input-user > * {
    margin-top: 50px;
  }
}
</style>
