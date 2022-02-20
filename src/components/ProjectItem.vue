<template>
  <div
    class="
      flex flex-col
      justify-between
      items-center
      w-3/4
      mb-28
      bg-neutral-200
      text-neutral-700
      dark:bg-neutral-700
      rounded-xl
      dark:text-white
    "
  >
    <aside class="pl-4 w-full mb-4">
      <p class="text-2xl font-bold mt-4">
        {{ title }}
      </p>
      <p class="mt-2 w-3/4">{{ description }}</p>
      <hr class="mt-4 mb-2" />
      <ul class="flex items-center w-3/4 flex-wrap lg:flex-nowrap">
        <div class="flex" v-for="(tech, index) in techs" :key="index">
          <li
            class="shadow-lg px-3 py-1 rounded-xl mr-3 lg:mb-0 my-1"
            :class="techColorMap[tech]"
          >
            {{ tech }}
          </li>
        </div>
        <div class="flex lg:justify-around lg:items-center lg:ml-auto mr-6">
          <li>
            <a :href="github" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                :stroke="buttonColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6 mr-3"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a :href="demo" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                :stroke="buttonColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-6 h-6"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
              </svg>
            </a>
          </li>
        </div>
      </ul>
    </aside>
    <img :src="imageUrl" :alt="image" class="w-full h-fit rounded-b-xl" />
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