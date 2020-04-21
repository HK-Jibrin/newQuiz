<template>
  <div class="quiz">
    <div class="container">
    <div class="home-container">
      <h2 class="ops">WELCOME TO CHARALITES QUIZ GAME</h2>
      <h3>I am a computer litrate? Try out this quiz</h3>
      <p>Select level</p>
      <div class="buttons">
        <router-link class="button" to="question/easy">Easy</router-link>
        <router-link class="button" to="question/medium">Medium</router-link>
        <router-link class="button" to="question/hard">Hard</router-link>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
   width: 100%;
   }
.home-container {
  padding: 20px;
   border: 1px solid black;
   width: 100%;
   height: 100%;
   border-radius: 20px;
   margin-top: 10em;
   background-color: brown;

}

.home-container p {
  margin-top: 20px;
  font-size: 1.1em;
  text-align: center;
  color: white;
}

.container h3{
  color: white;
}
.buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: none !important;
  justify-content: center;
  align-items: center;
}
.buttons .button {
  margin-top: 10px;
  width: 100px;
  text-decoration: none;
  text-align: center;
  color: #fff;
  background: green;
  padding: 15px;
  font-size: 1.1em;
}
.button:hover {
  background: limegreen;
}
.ops{
  color: white;
  font-style: italic;
}
</style>
