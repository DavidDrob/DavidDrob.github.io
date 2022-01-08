<template>
  <div class="flex w-10/12 h-4/6 mr-24 m-auto text-neutral-900 dark:text-white">
    <div id="hero" class="font-serif w-full overflow-x-hidden">
      <h1 class="text-6xl mb-12 font-bold">Projects</h1>
      <div
        class="
          flex
          justify-between
          items-center
          w-3/4
          bg-neutral-200
          text-neutral-700
          dark:bg-neutral-700
          rounded-xl
          dark:text-white
        "
      >
        <ProjectItem
          title="Clean Tab"
          description="Clean Tab is a chromium extension that allows you to style a new tab in your chromium browser. It also shows the current weather in you area."
          :techs="['Vue.JS']"
          github="https://github.com/DavidDrob/clean-tab"
          demo="https://github.com/DavidDrob/clean-tab"
        />
        <img
          src="../assets/clean-tab.png"
          alt="demo image"
          class="max-h-56 w-96 rounded-r-xl"
        />
      </div>
      <div
        class="
          flex
          justify-between
          items-center
          w-3/4
          bg-neutral-200
          text-neutral-700
          dark:bg-neutral-700
          rounded-xl
          mt-12
          dark:text-white
        "
      >
        <ProjectItem
          title="Faceit Bot"
          description="This discord bot fetches the data about a users CS:GO statistics, like his/her region rank, win rate, statistics on a specific map, etc ... The bot uses the Faceit API to fetch data and can be added by anyone to their discord server for free."
          :techs="['Node.JS']"
          github="https://github.com/DavidDrob/faceit-discord-bot"
          demo="https://top.gg/bot/816070908782575656"
        />
        <img
          src="../assets/faceit-bot.png"
          alt="demo image"
          class="max-h-56 w-96 rounded-r-xl"
        />
      </div>
      <div
        class="
          flex
          justify-between
          items-center
          w-3/4
          bg-neutral-200
          text-neutral-700
          dark:bg-neutral-700
          rounded-xl
          mt-12
          overflow-x-hidden
          dark:text-white
        "
      >
        <ProjectItem
          title="Study App"
          description="This (old) Single-page application I made allows you to study maths with the 10 provided problems. You can draw on the canvas, check if you have the correct solution, search for problems (from 0 to 9) or get a new random problem."
          :techs="['Vue.JS']"
          github="https://github.com/DavidDrob/study-app"
          demo="https://daviddrob.github.io/study-app/"
        />
        <img
          src="../assets/study-app.png"
          alt="demo image"
          class="max-h-56 w-96 rounded-r-xl"
        />
      </div>
      <div
        class="
          flex
          justify-between
          items-center
          w-3/4
          bg-neutral-200
          text-neutral-700
          dark:bg-neutral-700
          rounded-xl
          mt-12
          overflow-x-hidden
          dark:text-white
        "
      >
        <ProjectItem
          title="Personal Portfolio"
          description="It's the website you are looking at right now. I made this to brush up my UI design skills and to also have a website for presenting my projects in a simple and modern way."
          :techs="['Vue.JS', 'TailwindCSS']"
          github="https://github.com/DavidDrob/DavidDrob.github.io"
          demo="/"
        />
        <img
          src="../assets/portfolio.png"
          alt="demo image"
          class="max-h-56 w-96 rounded-r-xl"
        />
      </div>
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

