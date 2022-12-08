<template>
  <div class="easy-display-header" :style="{ '--theme-color': themeColor }">
    <div class="logo-part">
      <img
        :src="logo"
        alt="logo"
        :style="{ width: logoSize, height: logoSize }"
      />
    </div>
    <div class="main-part">
      <div class="title-label">
        <div
          class="title"
          :style="{
            fontSize: titleFontSize,
            color: textColor,
          }"
          v-text="title"
        ></div>
        <div
          class="desp"
          :style="{
            color: textColor,
          }"
          style="opacity: 0.7"
          v-text="desp"
        ></div>
      </div>
      <div class="date-label">
        <div class="date-box">
          <div
            class="day"
            :style="{
              color: textColor,
            }"
            v-text="getDay()"
          ></div>
          <div
            class="date"
            :style="{
              color: textColor,
            }"
            v-text="date"
          ></div>
        </div>
        <div class="separator"></div>
        <div
          class="time"
          :style="{
            color: textColor,
            fontSize: timeFontSize,
          }"
          style="font-weight: bold"
          v-text="time"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const url = import.meta.url;
    return {
      textColor: "rgb(255, 255, 255)",
      logo: new URL("./logo.png", url).href,
      logoSize: "50px",
      themeColor: "rgba(0, 148, 255, 0.5)",
      title: "默认大屏标题",
      titleFontSize: "32px",
      desp: "默认大屏副标题与描述文字",
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      day: new Date().getDay(),
      timeFontSize: "20px",
      timer: "",
    };
  },
  methods: {
    getDay() {
      return `星期${["一", "二", "三", "四", "五", "六", "日"][this.day]}`;
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      const nowDate = new Date();

      this.time = nowDate.toLocaleTimeString();
      this.date = nowDate.toLocaleDateString();
      this.day = nowDate.getDay();
    }, 1000);
  },

  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped>
.easy-display-header {
  width: 100%;
  height: 100%;
  display: flex;
  > * {
    text-shadow: 0 0 12px var(--theme-color);
  }
}

.logo-part {
  width: 5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  border-left: 2px solid rgb(227, 232, 255);
  border-top: 1px solid rgb(234, 238, 255);
  border-bottom: 1px solid rgba(182, 195, 255, 0.3);
  // background: linear-gradient(
  //   45deg,
  //   rgba(0, 0, 0, 0) 0%,
  //   rgba(0, 0, 0, 0) 60%,
  //   var(--theme-color)
  // );
  box-shadow: 0 0 5vw var(--theme-color) inset;
  box-sizing: border-box;
  margin-right: 2px;
}

.main-part {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2vw;
  position: relative;
  // background: linear-gradient(
  //   90deg,
  //   var(--theme-color) 0%,
  //   rgba(0, 0, 0, 0) 10%
  // );
  box-shadow: 0 0 200px var(--theme-color) inset;

  > .title-label {
    display: flex;
    align-items: center;
    > .title {
      font-weight: bold;
      margin-right: 32px;
    }
  }

  > .date-label {
    display: flex;
    align-items: center;
  }

  .separator {
    width: 2px;
    height: 10px;
    background-color: var(--theme-color);
    margin: 12px;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
  }

  &::before {
    top: 0px;
    left: 0;
    background: linear-gradient(
      to right,
      rgb(243, 247, 255) 0%,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0) 70%,
      rgb(243, 247, 255) 100%
    );
  }

  &::after {
    top: unset;
    left: 0;
    bottom: 0px;
    background: linear-gradient(
      to right,
      rgb(243, 247, 255, 0.4) 0%,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 90%,
      rgb(243, 247, 255) 100%
    );
  }
}
</style>
