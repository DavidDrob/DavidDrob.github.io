<template>
  <div id="app" class="bg-gray-50 dark:bg-neutral-900 h-screen flex">
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
.text-glow {
  text-shadow: 0 0 80px rgba(205, 255, 192, 0.75),
    0 0 32px rgba(65, 255, 154, 0.24);
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background-color: rgb(16, 16, 20);
}

::-webkit-scrollbar-thumb {
  background-color: rgb(134, 239, 172);
  border-radius: 10em;
}
</style>