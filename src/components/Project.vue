<template>
  <div
    class="
      flex flex-col
      md:w-10/12
      py-12
      md:my-0
      items-center
      md:items-start
      overflow-y-scroll
      md:overflow-y-visible
      lg:w-4/5 lg:ml-16
      m-auto
      md:ml-0
      text-neutral-900
      dark:text-white
    "
  >
    <h1 class="text-6xl mb-12 font-bold font-serif">Projects</h1>
    <div
      id="hero"
      class="
        font-serif
        flex flex-col
        items-center
        md:items-start
        w-fit
        overflow-x-hidden
      "
    >
      <ProjectItem
        class="mb-12"
        title="Gradient Animator"
        description="Gradient Animator allows you to create and animate those cool looking modern gradients and get the CSS code right away or pick one of the pre-made gradients."
        :techs="['Vue.JS', 'TailwindCSS']"
        github="https://github.com/DavidDrob/gradient-animator"
        demo="https://gradient-tool-daviddrob.vercel.app/"
        video="gradient-animator"
      />

      <ProjectItem
        class="mb-12"
        title="Clean Tab"
        description="Clean Tab is a chromium extension that allows you to style a new tab in your chromium browser. It also shows the current weather in you area."
        :techs="['Vue.JS']"
        github="https://github.com/DavidDrob/clean-tab"
        demo="https://github.com/DavidDrob/clean-tab"
        image="clean-tab"
      />

      <ProjectItem
        class="mb-12"
        title="Faceit Bot"
        description="This discord bot fetches the data about a users CS:GO statistics, like his/her region rank, win rate, statistics on a specific map, etc ... The bot uses the Faceit API to fetch data and can be added by anyone to their discord server for free."
        :techs="['Node.JS']"
        github="https://github.com/DavidDrob/faceit-discord-bot"
        demo="https://top.gg/bot/816070908782575656"
        image="faceit"
      />

      <ProjectItem
        class="mb-12"
        title="Study App"
        description="This (old) Single-page application I made allows you to study maths with the 10 provided problems. You can draw on the canvas, check if you have the correct solution, search for problems (from 0 to 9) or get a new random problem."
        :techs="['Vue.JS']"
        github="https://github.com/DavidDrob/study-app"
        demo="https://daviddrob.github.io/study-app/"
        image="study-app"
      />

      <ProjectItem
        title="Personal Portfolio"
        description="It's the website you are looking at right now. I made this to brush up my UI design skills and to also have a website for presenting my projects in a simple and modern way."
        :techs="['Vue.JS', 'TailwindCSS']"
        github="https://github.com/DavidDrob/DavidDrob.github.io"
        demo="/"
        image="portfolio"
      />
    </div>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";

export default {
  name: "Projects",
  components: {
    ProjectItem,
  },
};
</script>

