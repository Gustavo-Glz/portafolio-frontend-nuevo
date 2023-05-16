<script setup>
const openMenu = ref(false);
const links = [
  { name: "Inicio", url: "#" },
  { name: "Habilidades", url: "#" },
  { name: "Proyectos", url: "#" },
  { name: "Contacto", url: "#" },
];
</script>

<template>
  <header class="container mx-auto flex items-center justify-between">
    <NuxtLink class="text-3xl font-black py-8" to="/">
      <div class="flex items-center gap-1">
        <Icon name="bx:terminal" color="#2dd787" size="2.5rem" />
        <span>Gustavo</span>
      </div>
    </NuxtLink>
    <button class="text-3xl md:hidden" @click="openMenu = !openMenu">
      <Icon :name="!openMenu ? 'bx:menu-alt-right' : 'mingcute:close-fill'" />
    </button>
    <nav
      class="fixed top-[105px] bg-[#20272f] w-full flex flex-col items-center duration-500 ease-in md:static md:flex-row md:justify-end md:gap-5 lg:gap-8"
      :class="[openMenu ? 'left-0' : 'left-[-100%]']"
    >
      <a
        class="py-10 text-bold text-lg font-bold transition-all ease-in-out duration-500 hover:text-[#2dd787]"
        :href="url"
        v-for="{ name, url } in links"
      >
        {{ name }}
      </a>
    </nav>
  </header>
</template>
