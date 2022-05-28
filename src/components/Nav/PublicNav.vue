<template>
  <div class="public-nav m-6">
    <nav class="flex flex-row items-center justify-between">
      <div class="flex flex-row items-center justify-between space-x-2">
        <router-link class="text-2xl p-3" to="/">Morality</router-link>
        <router-link
          v-for="item in leftNavItems"
          :key="item.name"
          class="p-2"
          :to="item.href"
        >
          {{ item.name }}
        </router-link>
      </div>
      <div class="flex flex-row items-center justify-between space-x-2">
        <router-link
          class="py-2 px-4 text-white rounded-lg shadow-md hover:opacity-90 bg-msilver"
          to="/login"
        >
          Log in
        </router-link>
        <router-link
          class="py-2 px-4 text-white rounded-lg shadow-md hover:opacity-90 bg-mblue"
          to="/signup"
        >
          Sign up
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
const leftNavItems = [
  { name: "Product", href: "/" },
  { name: "About", href: "/about" },
];
// const rightNavItems = [
//   { name: "Log in", href: "/login", color: "msilver-100" },
//   { name: "Sign up", href: "/signup", color: "mblue" },
// ];

export default {
  name: "PublicNav",
  setup() {
    return {
      leftNavItems,
      //   rightNavItems,
    };
  },
};
</script>
