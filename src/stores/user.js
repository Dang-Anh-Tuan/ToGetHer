import { defineStore } from "pinia";
import AvatarDefault from "../assets/images/avatar-default.png";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: [
      {
        avatar: AvatarDefault,
        username: "",
        scoreAnswer: 0,
        scoreDrink: 0,
        colorBackground: {
          firstColor: "#63a4ff",
          secondColor: "#83eaf1",
        },
      },
      {
        avatar: AvatarDefault,
        username: "",
        scoreAnswer: 0,
        scoreDrink: 0,
        colorBackground: {
          firstColor: "#ffecd2",
          secondColor: "#fcb69f",
        },
      },
    ],
    currentUser: 0,
  }),
  actions: {
    setAvatar(avatar, index) {
      this.user[index].avatar = avatar;
      this.$patch(avatar);
    },

    setUserName(username, index) {
      this.user[index].username = username;
      this.$patch(username);
    },

    increaseScoreAnswer(index) {
      console.log("call");
      this.user[index].scoreAnswer++;
    },

    increaseScoreDrink(index) {
      this.user[index].scoreDrink++;
    },
    changeCurrentUser() {
      this.currentUser = this.currentUser === 0 ? 1 : 0;
    },
  },
});
