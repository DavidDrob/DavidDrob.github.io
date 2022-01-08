<template>
  <nav
    class="
      absolute
      inset-y-0
      left-0
      h-3/5
      m-auto
      rounded-xl
      p-5
      ml-6
      flex flex-col
      items-center
      bg-neutral-200
      dark:bg-neutral-700
    "
  >
    <div>
      <router-link
        class="
          text-white
          link
          w-14
          h-14
          mb-4
          grid
          place-items-center
          rounded-xl
          cursor-pointer
          transition
          ease-out
          hover:-translate-y-1 hover:scale-110
          duration-200
        "
        to="/"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          :stroke="buttonColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          ></path>
        </svg>
      </router-link>
    </div>

    <div>
      <router-link
        class="
          text-white
          link
          w-14
          h-14
          mb-4
          grid
          place-items-center
          rounded-xl
          cursor-pointer
          transition
          ease-out
          hover:-translate-y-1 hover:scale-110
          duration-200
        "
        to="/projects"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          :stroke="buttonColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      </router-link>
    </div>
    <div>
      <router-link
        class="
          text-white
          link
          w-14
          h-14
          mb-4
          grid
          place-items-center
          rounded-xl
          cursor-pointer
          transition
          ease-out
          hover:-translate-y-1 hover:scale-110
          duration-200
        "
        to="/tech"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-6 h-6"
          fill="none"
          :stroke="buttonColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
          ></path>
        </svg>
      </router-link>
    </div>
    <div>
      <a
        href="mailto:david.drobnak26@gmail.com"
        class="
          text-white
          bg-neutral-800
          dark:bg-gray-50
          w-14
          h-14
          mb-4
          grid
          place-items-center
          rounded-xl
          cursor-pointer
          transition
          ease-out
          hover:-translate-y-1 hover:scale-110
          duration-200
        "
      >
        <svg
          class="w-6 h-6"
          fill="none"
          :stroke="buttonColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      </a>
    </div>
    <div>
      <a
        href="https://github.com/DavidDrob"
        class="
          text-white
          bg-neutral-800
          dark:bg-gray-50
          w-14
          h-14
          mb-4
          grid
          place-items-center
          rounded-xl
          cursor-pointer
          transition
          ease-out
          hover:-translate-y-1 hover:scale-110
          duration-200
        "
      >
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
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          ></path>
        </svg>
      </a>
    </div>
    <div
      class="
        text-white
        bg-neutral-800
        dark:bg-gray-50
        w-14
        h-14
        grid
        place-items-center
        rounded-xl
        cursor-pointer
        transition
        ease-out
        hover:translate-y-1 hover:scale-110
        duration-200
        mt-auto
      "
      @click="setTheme"
    >
      <svg
        v-if="buttonColor === 'white'"
        class="w-6 h-6"
        fill="none"
        :stroke="buttonColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        ></path>
      </svg>
      <svg
        v-else
        class="w-6 h-6 hover:animate-[spin_4s_linear_infinite]"
        fill="none"
        :stroke="buttonColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Links",
  data() {
    return {
      buttonColor: "",
    };
  },
  methods: {
    setTheme() {
      if (localStorage.theme === "dark") {
        localStorage.theme = "light";
        this.buttonColor = "white";
      } else {
        localStorage.theme = "dark";
        this.buttonColor = "#1C1C1C";
      }
      this.checkTheme();
    },
    checkTheme() {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        this.buttonColor = "#1C1C1C";
      } else {
        document.documentElement.classList.remove("dark");
        this.buttonColor = "white";
      }
    },
  },
  mounted() {
    // Dark mode preference using localStorage
    this.checkTheme();
  },
};
</script>

<style scoped lang="postcss">
.router-link-exact-active {
  @apply bg-green-300 !important;
}
.link {
  @apply bg-neutral-800;
  @apply dark:bg-gray-50;
}
</style>