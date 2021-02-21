<template>
<div class="bg">
    <div class="skills width">
        <ul>
            <li><img src="../assets/img/skills/html.svg" alt="HTML"></li>
            <li><img src="../assets/img/skills/css.svg" alt="CSS"></li>
            <li><img src="../assets/img/github.svg" alt="Github"></li>
            <li><img src="../assets/img/skills/vue.svg" alt="VUE"></li>
            <li><img src="../assets/img/skills/php.svg" alt="PHP"></li>
            <li><img src="../assets/img/skills/js.svg" alt="JS"></li>
            <li><img src="../assets/img/skills/figma.svg" alt="Figma"></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg{
    padding: 5vh 0px 5vh 0px;
}
.skills img{
    width: 3vw;
}
@media screen and (min-width: 300px) and (max-width: 1440px){
  .bg{
        padding: 3vh 0px 3vh 0px;
    }
}

@media screen and (max-width: 768px){
    .skills img{
        width: 15vw;
    }
}
</style>