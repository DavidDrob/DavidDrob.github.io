<template>
  <div
    class="
      flex
      h-5/6
      md:mt-24
      lg:w-4/5 lg:ml-16
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
          <span class="border-b border-cyan-500">Gradient Animator</span>
        </a>
      </h2>
      <h2 class="mt-4 text-lg">🌆 Based near Vienna, Austria</h2>
      <hr class="mt-4" />
      <h2 class="mt-4 text-lg">
        <router-link
          class="under-line dark:underline-white pb-1"
          to="/projects"
        >
          ➡️ Checkout my projects
        </router-link>
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

.under-line {
  background-image: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0));
  background-size: 60% 3.5%;
  background-position: 0% 100%;
  background-repeat: no-repeat;
  transition: 0.4s;
}
.under-line:hover {
  background-size: 100% 3.5%;
}
</style>