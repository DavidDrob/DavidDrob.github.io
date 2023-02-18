<template>
  <div
    id="app"
    class="
      bg-gray-50
      dark:bg-neutral-900
      h-screen
      flex flex-col-reverse
      md:flex-row
    "
  >
    <Links />
    <router-view></router-view>
  </div>
</template>

<script>
import Links from "./components/Links.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Links,
    Home,
  },
  data() {
    return {};
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 5px;
  border-radius: 0.75rem;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  ::-webkit-scrollbar {
    width: 0px;
  }
}

::-webkit-scrollbar-track {
  background-color: rgb(16, 16, 20);
  border-radius: 0.75rem;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(134, 239, 172);
  border-radius: 0.75rem;
}
</style>