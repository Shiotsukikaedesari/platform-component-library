<template>
  <div class="container">
    <img :src="logo" alt="" />
    <span>hello world {{ number }}</span>
    <button @click="add">增加</button>
  </div>
</template>

<script>
export default {
  data() {
    const url = import.meta.url;
    return {
      number: 1,
      logo: new URL("./logo.png", url).href,
    };
  },
  methods: {
    add() {
      this.number += 1;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
