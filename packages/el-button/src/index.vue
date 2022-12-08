<template>
  <el-button
    class="container"
    :style="{
      fontSize,
    }"
    :icon="icon"
    :loading="loading"
    :type="type"
    >{{ text }}</el-button
  >
</template>

<script>
import ElButton from "@vis-resm/el-button";
export default {
  components: {
    ElButton,
  },
  data() {
    return {
      icon: "",
      loading: false,
      text: "按钮",
      color: "green",
      type: "primary",
      fontSize: "12px",
    };
  },
  methods: {},
};
</script>

<style scoped>
.container {
  width: 100% !important;
  height: 100% !important;
}
</style>
