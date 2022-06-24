<script>
import { defineComponent } from "vue";
import { useUserStore } from "../stores/user";

export default defineComponent({
  name: "InputUser",
  setup() {
    const userStore = useUserStore();

    return {
      userStore,
    };
  },

  props: {
    index: Number,
  },

  data: () => {
    return {
      inputUserName: "",
    };
  },

  methods: {
    handleChange() {
      this.userStore.setUserName(this.inputUserName, this.index);
    },
    handlePreviewAvatar(event) {
      const url = URL.createObjectURL(event.target.files[0]);
      this.$refs.preview.style.backgroundImage = `url(${url})`;
      this.userStore.setAvatar(url, this.index);
    },
  },
});
</script>

<template>
  <div class="container-input-user">
    <div class="container-choose-avatar">
      <div ref="preview" class="preview-avatar">
        <div class="icon-add-avatar">
          <i class="icon-add fa-solid fa-circle-plus color--success"></i>
        </div>
      </div>
      <input
        type="file"
        class="input-avatar"
        @change="handlePreviewAvatar($event)"
      />
    </div>
    <input
      type="text"
      class="input-name"
      placeholder="Enter name user"
      v-model="inputUserName"
      @change="handleChange()"
    />
  </div>
</template>

<style scoped>
.container-input-user {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.preview-avatar {
  background-image: url("../assets/images/avatar-default.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 150px;
  height: 160px;
  margin-bottom: 12px;
}
.container-choose-avatar {
  position: relative;
  margin-bottom: 20px;
}

.container-choose-avatar:hover {
  box-shadow: 0px 0px 10px #f48846;
}
.input-avatar {
  margin-bottom: 12px;
  background-color: #f48846;
  cursor: pointer;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  /*This makes the button huge. If you want a bigger button, increase the font size*/
  /*Opacity settings for all browsers*/
  opacity: 0;
  -moz-opacity: 0;
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
}
.input-name {
  margin-bottom: 12px;
  padding: 8px 12px;
  font-size: 2rem;
  border: 1px solid #f48846;
  border-radius: 8px;
}

.input-name:focus {
  outline: none;
  box-shadow: 0px 0px 20px #f48846;
}

.icon-add-avatar {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
}

.icon-add {
  font-size: 3rem;
}

.container-choose-avatar:hover .icon-add-avatar {
  display: flex;
}


</style>
