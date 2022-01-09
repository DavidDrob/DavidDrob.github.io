<template>
  <div class="flex h-4/6 lg:w-3/5 m-auto text-neutral-900 dark:text-white">
    <div
      id="hero"
      class="
        font-serif
        w-screen
        text-center
        flex flex-col
        items-center
        lg:text-left lg:items-start lg:w-screen
      "
    >
      <h1 class="text-6xl font-bold text-glow">Hey! 🙋‍♂️</h1>
      <h2 class="text-2xl mt-16">
        <span class="text-4xl">I am David Drobnak.</span><br />
        A
        <span class="font-semibold text-green-400 dark:text-green-300"
          >high-school computer science student</span
        ><br />
        building
        <span class="font-semibold text-green-400 dark:text-green-300"
          >web apps.</span
        >
      </h2>
      <hr class="mt-4" />
      <h2 class="mt-8 text-lg">
        🌱 Currently learning
        <a href="https://vuejs.org/" target="_blank">
          <span class="border-b-2 border-green-600">Vue.JS</span>
        </a>
        with
        <a href="https://tailwindcss.com/" target="_blank">
          <span class="border-b-2 border-teal-500">TailwindCSS</span>
        </a>
      </h2>
      <h2 class="mt-4 text-lg">🌆 Based near Vienna, Austria</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.text-gradient {
  background: linear-gradient(to right, #30cbd0, #59d63a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>