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
