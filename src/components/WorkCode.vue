<template>
  <div class="wk-code width">
        <h2 class="my-work">My work</h2>
        <div class="project" v-for="work in works" :key="work.name">
            <h3 class="title">{{ work.title }}</h3>
            <div class="main-overview">
                <div class="image-preview">
                    <!--<a :href="work.web">-->
                        <img :src="work.source" :alt="`${work.name} image`">    
                    <!--</a>-->
                </div>
                <div class="main-info">
                    <h4 class="overview">Overview</h4>
                    <p class="text-overview light">{{ work.briefOverview }}</p>
                    <h4 class="links">Links</h4>
                    <ul class="src-ul">
                        <li class="src"><a :href="work.github"><img src="../assets/img/github.svg" alt="github"></a></li>
                        <li class="src"><a :href="work.web"><img src="../assets/img/www.svg" alt="WWW"></a></li>
                    </ul>
                </div>
            </div>
            <div class="tech">
                <h4>Technology used</h4>
                <ul v-for="tech in work.techs" :key="tech">
                    <li class="light">{{tech}}</li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data () {
        return{
            works: [
                {
                    title: "Study App",
                    source: require('../assets/img/studyApp.png'),
                    github: 'https://github.com/DavidDrob/study-app/tree/master/src',
                    web: 'https://daviddrob.github.io/study-app/',
                    briefOverview: 'Just a simple serverless single-page app made with Vue to help you with studying for your next maths exam.',
                    techs:['Vue.Js', 'Javascript', 'HTML5', 'CSS3', 'JSON']
                },
                {
                    title: "Catch 'em all",
                    source: require('../assets/img/catchAll.png'),
                    github: 'https://github.com/DavidDrob/catch-em-all/tree/main/src',
                    web: 'https://catch-em-all-vue.herokuapp.com/',
                    briefOverview: 'The User can create an account, login, collect tokens by clicking on a button and purchasing virtual pokemon cards.',
                    techs:['Vue.Js', 'Firebase', 'Vuex', 'Javascript', 'HTML5', 'CSS3']
                },
                {
                    title: "Personal Portfolio",
                    source: require('../assets/img/personalWeb.png'),
                    github: 'https://github.com/DavidDrob/study-app/tree/master/src',
                    web: '#',
                    briefOverview: 'Everyone has a portfolio so I decided to make one as well. I used Vue for it, as I think it’s a really easy tool to make Webpages with.',
                    techs:['Vue.Js', 'Figma', 'Photoshop', 'HTML5', 'CSS3']
                }
            ]
        }
    }
}
</script>

<style>
@font-face {
  font-family: gothamMedium;
  src: url(../assets/font/gotham-medium.woff);
}

.tech li::before{
    content: "• ";
    color: #FFD576;
}
.tech li{
    padding-top: 9px;
    font-size: 18px;
}
.tech h4{
    padding-top: 16px;
}

.my-work{
    color: #FFD576;
    padding-bottom: 35px;
}

.wk-code{
    display: flex;
    flex-direction: column;
    padding-top: 100px;
}
.project{
    margin-bottom: 10%;
}
.image-preview img{
    width: 20vw;
}
.image-preview{
    padding: 36px 24px 24px 0px;
}
.main-overview{
    display: flex;
    align-items: center;
}
.overview{
    padding-bottom: 0.5em;
}
.text-overview{
    padding-bottom: 1em;
    line-height: 1.2;
    width: 50%;
}
.links{
    padding-bottom: 0.5em;
}
li img{
    width: 36px;
}
.src{
    margin-right: 24px;
}
.src:last-child{
    margin-right: 0px;
}
.src-ul{
    justify-content: flex-start;
}

.light{
    font-family: gothamMedium;
}

.title{
    color: #FFD576;
}

@media screen and (max-width: 768px){
    .wk-code{
        flex-direction: column;
        text-align: center;
    }
    h2, h3{
        text-align: center;
        font-size: 2em;
    }
    .main-overview{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .main-info{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .tech ul{
        display: block;
    }
    .src:first-child{
        margin-bottom: 2vh;
    }
    .src{
        margin: 0;
    }
    .image-preview img{
        width: 50vw;
    }
    .tech li{
        margin-bottom: 1.5vh;
    }
}
</style>