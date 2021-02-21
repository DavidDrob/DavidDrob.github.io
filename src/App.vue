<template>
  <div id="app">
    <div class="width">
      <NavBar />
    </div>
    <div class="main width">
      <div class="hello">
          <div class="text-one">
            <h1>Hey there! 👋</h1>
          </div>
          <div class="text-two">
            <h1>I am David. <br>
                a <span>computer science student</span> <br>
                and a <span>front-end developer</span>.</h1>
          </div>
      </div>
      <div class="illustration">
        <img src="./assets/img/illustration.svg" alt="that's me">
      </div>
    </div>
    <div class="cta">
      <img class="mouse" src="./assets/img/mouse.svg" alt="mouse">
      <img class="mouseWheel" src="./assets/img/mouseWheel.svg" alt="mouseScroll">
    </div>
    <Skills />
    <div id="work"><WorkCode /></div>
    <div id="contact"><Contact /></div>
    <footer>
      <div class="socials">
        <a href="https://github.com/DavidDrob"><img src="./assets/img/github.svg" alt="github"></a>
        <a href="https://www.behance.net/l1ght"><img src="./assets/img/behance.svg" alt="behance"></a>
      </div>
      <h6>©2020 David Drobnak</h6>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import WorkCode from './components/WorkCode.vue'
import './index.css'


export default {
  name: 'App',
  components: {
     NavBar,
     Skills,
     Contact,
     WorkCode
  }
}
</script>

<style scoped>
@keyframes mouseScroll{
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
        transform: translateY(0.5em);
    }
}

@font-face {
  font-family: gotham;
  src: url(./assets/font/gotham.woff);
}

.main{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cta{
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 20px;
  margin: 4em 0em 4em 0em;
}
.mouseWheel{
  position: absolute;
  top: 15%;
  animation: mouseScroll 1s ease-in infinite forwards;
}
.text-one{
  padding-bottom: 3vh;
}
.illustration{
  display: flex;
  justify-content: flex-end;
}
.illustration img{
  width: 600px;
}

.width{
  width: 85vw;
  margin: 0 auto;
}

footer{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0px 90px 0px;
}
.socials{
  display: flex;
  align-items: center;
  width: 10vw;
  justify-content: space-evenly;
}
.socials img{
  width: 40px;
  padding-bottom: 10px;
}

@media screen and (min-width: 300px) and (max-width: 1440px){
  h1{
    font-size: 1.6em;
  }
  .illustration, .illustration img{
    width: 40%;
  }
}

@media screen and (max-width: 768px){
  .main{
    flex-direction: column;
    text-align: center;
  }
  h1{
    font-size: 1.2em;
  }
  .text-two{
    padding-bottom: 10vh;
  }
  .illustration, .illustration img{
    width: 45vw;
  }
  .container{
    align-items: center;
  }
  .cta .mouseWheel{
    width: 1.2%;
  }
  .cta .mouse{
    width: 6%;
  }
  .socials{
    width: 50vw;
  }
}
</style>
