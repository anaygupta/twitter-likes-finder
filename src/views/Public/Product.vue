<template>
  <div id="product">
    <h1 class="text-xl font-bold">Search your Twitter Likes</h1>
    <div class="search-input w-72 m-auto">
        <input v-model="searchInput" type="text" placeholder="Search" class="mt-5 w-full border border-slate-400 text-md rounded-md px-2 py-1" @keyup.enter="searchLikes" />
    </div>
    <div class="results my-10">
        {{ message }}
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            searchInput: "",
            message: ""
        }
    },
    methods:  {
        searchLikes() {
            if (this.searchInput) {
                this.message = 'enter was hit'
            }
        }
    }
};
</script>
