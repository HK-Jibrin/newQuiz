<template>
  <div class="container">
    <div class="answers-container">
      <h3>Thank you for playing!</h3>
      <p>
        You scored
        <span>{{numCorrect}}/{{numTotal}}</span>
      </p>
      <div class="buttons">
        <router-link class="button" to="/question">Play Again</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["numCorrect", "numTotal"])
  }
};
</script>

<style scoped>
.answers-container h3 {
   padding: 2px;
  margin-top: 10rem;
  font-size: 2em;
 font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.answers-container {
  padding: 2px;
  margin-top: 10rem;
  font-size: 2em;
 font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.answers-container p {
  margin-top: 2rem;
  font-size: 2em;
  text-align: center;
  color: rgb(27, 228, 27);

}
.answers-container p span {
  font-weight: bolder;
}
.buttons {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  border: none !important;
  justify-content: center;
  align-items: center;
  margin-left: 14em;
  margin-top: 0em;
}
.buttons .button {
  margin-top: 1px;
  width: 50%;
  text-decoration: none;
  text-align: center;
  color: #fff;
  background: #3dc988;
  padding: 15px;
  font-size: 1em;
  border-radius: 20px;
}
.button:hover {
  background: greenyellow;
}
</style>