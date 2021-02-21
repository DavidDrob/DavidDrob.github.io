<template>
  <div class="nav-bar">
    <div class="logo">
      <a href="#">
        <img src="../assets/img/logo.svg" alt="logo">
      </a>
    </div>
    <div class="links">
      <ul>
        <li><a href="#work" @click="closeBurgerMobile()">Work</a></li>
        <li><a href="#contact" @click="closeBurgerMobile()">Contact</a></li>
      </ul>
    </div>
    <div class="hamburger">
      <img src="../assets/img/burger.svg" @click="openBurger()" alt="hamburger icon">
    </div>
    <div class="xIcon">
      <img src="../assets/img/x.svg" @click="closeBurgerMobile()" alt="hamburger icon">
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    openBurger(){
      const hamburger = document.querySelector(".hamburger");
      const xIco = document.querySelector(".xIcon");
      const links = document.querySelector(".links");

      xIco.style.display = 'inline';
      hamburger.style.display = 'none';
      links.style.display = 'inline';
    },
    closeBurgerMobile(){
      const hamburger = document.querySelector(".hamburger");
      const xIco = document.querySelector(".xIcon");
      const links = document.querySelector(".links");
      const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

      if (width >= 375 && width < 1440){
        links.style.display = 'none';
        hamburger.style.display = 'inline';     
        xIco.style.display = 'none';   
      }
      else{
        xIco.style.display = 'none';
      }
      
    }
  }
}
</script>

<style>
.nav-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0px 5em 0px;
}
li{
  margin-right: 120px;
  font-size: 1.2em;
}
li:last-child{
  margin-right: 0px;
}
.logo{
  width: 18vw;
}
.hamburger{
  display: none;
}
.xIcon{
  display: none;
}

@media screen and (min-width: 300px) and (max-width: 1440px){
  li{
    margin-right: 60px;
  }
  li:last-child{
    margin-right: 0px;
  } 
}

@media screen and (max-width: 768px){
  .links{
    display: none;
    position: absolute;
    width: 80vw;
    margin-top: 60vh;
    filter: drop-shadow(0 0 0.75rem rgb(22, 22, 17));
   }
  ul{
    flex-direction: column;
  }
  li{
    margin: 0px 0px 5vh 0px;
    padding: 0;
  }
  .hamburger{
    display: inline;
    cursor: pointer;
  }
  .hamburger img{
    width: 80%;
  }
  .logo{
    width: 60%;
  }
  .xIcon{
    display: none;
    cursor: pointer;
    width: 7%;
  }
  .xIcon img{
    height: 26px;
  }
}


</style>