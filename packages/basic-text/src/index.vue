<template>
  <div
    class="basic-text-container"
    @click="edit"
    :style="{
      justifyContent: textAlign,
      alignItems: baseline,
      backgroundColor,
      color,
    }"
  >
    <input
      v-show="focus"
      type="text"
      v-model="text"
      @blur="focus = false"
      :style="{ fontSize }"
      @mousedown.stop="() => {}"
      ref="input"
    />
    <span v-show="!focus" :style="{ fontSize }" v-text="text"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "默认文本",
      fontSize: "16px",
      textAlign: "center",
      baseline: "center",
      focus: false,
      backgroundColor: "",
      color: "rgb(255, 255, 255)",
    };
  },
  methods: {
    edit() {
      this.focus = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
  },
};
</script>

<style scoped>
.basic-text-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  outline: none;
  margin: 0;
  border: 0;
  padding: 0;
  display: inline;
}
</style>
