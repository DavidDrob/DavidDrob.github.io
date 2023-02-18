<template>
  <div
    class="
      flex
      h-5/6
      md:mt-24
      lg:w-3/5
      m-auto
      md:ml-0
      text-neutral-900
      dark:text-white
    "
  >
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
      <main class="flex flex-row items-center">
        <h1 class="text-6xl font-bold mb-4">Hey!</h1>
        <img
          class="ml-4 mb-6"
          width="120"
          height="120"
          src="../assets/memoji_hey.png"
          alt="memoji_hey"
        />
      </main>
      <h2 class="text-2xl mt-8 md:mt-16 mx-4 md:mx-0">
        <span class="text-4xl">I am David Drobnak.</span><br />
        An
        <span
          class="
            font-semibold
            gradient-light
            dark:gradient-primary dark:text-glow
          "
          >18 year old computer science student</span
        ><br />
        who loves creating
        <span
          class="
            font-semibold
            gradient-light
            dark:gradient-primary dark:text-glow
          "
          >web apps</span
        >.
      </h2>
      <hr class="mt-4" />
      <h2 class="mt-8 text-lg">
        🛠️ Currently building
        <a href="https://gradient-tool-daviddrob.vercel.app/" target="_blank">
          <span class="border-b-2 border-cyan-500">Gradient Animator</span>
        </a>
      </h2>
      <h2 class="mt-4 text-lg">🌆 Based near Vienna, Austria</h2>
      <hr class="mt-4" />
      <h2 class="mt-4 text-lg">
        <a
          class="border-b-2 border-neutral-700 dark:border-neutral-200 pb-1"
          href="/projects"
        >
          ➡️ Checkout my projects
        </a>
      </h2>
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