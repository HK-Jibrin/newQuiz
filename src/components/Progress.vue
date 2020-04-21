<template>
  <div class="progress">
    <div class="progressB">
      <div :style="proClass" id="bar"></div>
    </div>
    <p>{{numCorrect}}/{{numTotal}}</p>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: ["numCorrect", "numTotal"],
  computed: {
    proClass() {
      let style = "bar";
      let widthPercent = (this.numTotal / 10) * 100;
      style = `width:${widthPercent}%`;
      return style;
    }
  }
};
</script>

<style scoped>
.progress {
  display: flex;
  align-items: center;
}
.progressB {
  display: inline-block;
  margin-right: 10;
  width: 50%;
  background-color: rgb(80, 9, 211);
  border-radius: 20px;
  margin-left: 20%;
}
#bar {
  width: 1%;
  height: 6px;
  background-color: wheat;
  border-radius: 20px;
}
.progress p {
  display: inline-block;
  font-size: 0.8em;
  font-weight: lighter;
  margin-left: 40px;
}
</style>