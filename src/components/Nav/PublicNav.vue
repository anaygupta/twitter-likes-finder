<template>
  <div class="public-nav m-6">
    <nav class="flex flex-row items-center justify-between">
      <div class="flex flex-row items-center justify-between space-x-2">
        <router-link class="text-2xl p-3" to="/">TLF</router-link>
      </div>
      <div class="flex flex-row items-center justify-between space-x-2">
        <router-link
          class="py-1 px-3 text-black rounded-lg shadow-lg border-1 border-black hover:opacity-50"
          to="/login"
        >
          Log in
        </router-link>
        <router-link
          class="py-1 px-3 text-black rounded-lg shadow-lg border-1 border-black hover:opacity-50"
          to="/signup"
        >
          Sign up
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
// const
// const rightNavItems = [
//   { name: "Log in", href: "/login", color: "msilver-100" },
//   { name: "Sign up", href: "/signup", color: "mblue" },
// ];

export default {
  name: "PublicNav",
};
</script>
