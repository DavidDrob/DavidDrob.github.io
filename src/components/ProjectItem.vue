<template>
  <div
    class="
      flex flex-col
      xl:flex-row
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
    <aside class="pl-4 xl:w-5/6 mb-4 font-semibold">
      <div class="mb-3">
        <p class="text-4xl font-semibold my-4 pr-8">
          {{ title }}
        </p>
        <p class="mt-2 w-full pr-8 font-light">{{ description }}</p>
      </div>
      <p class="font-semibold border-b-2 border-green-400 w-fit mb-3">
        <a :href="demo" target="_blank"> Open Website </a>
      </p>
      <p class="font-semibold border-b-2 border-green-400 w-fit">
        <a :href="github" target="_blank"> View the source-code </a>
      </p>
      <ul class="mt-6 flex items-center w-3/4 flex-wrap lg:flex-nowrap">
        <div class="flex" v-for="(tech, index) in techs" :key="index">
          <li
            class="shadow-lg px-3 py-1 rounded-xl mr-3 lg:mb-0 my-1"
            :class="techColorMap[tech]"
          >
            {{ tech }}
          </li>
        </div>
      </ul>
    </aside>
    <img
      :src="imageUrl"
      :alt="image"
      width="480"
      height="270"
      class="xl:w-80 rounded-b-xl md:rounded-xl xl:mr-4"
    />
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["title", "description", "techs", "image", "github", "demo"],
  data() {
    return {
      techColorMap: {
        TailwindCSS: ["bg-cyan-300", "shadow-cyan-400/50", "text-white"],
        "Vue.JS": ["bg-green-400", "shadow-green-500/50", "text-green-50"],
        "Node.JS": ["bg-yellow-400", "shadow-yellow-500/50", "text-yellow-700"],
      },
      buttonColor: "white",
    };
  },
  mounted() {
    setInterval(() => {
      if (localStorage.theme === "dark") this.buttonColor = "white";
      else if (localStorage.theme === "light") this.buttonColor = "#1C1C1C";
    }, 10);
  },
  computed: {
    imageUrl() {
      return new URL(`../assets/${this.image}.png`, import.meta.url).href;
    },
  },
};
</script>

<style>
#project {
  background-color: #353535;
}
</style>