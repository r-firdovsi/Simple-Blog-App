<template>
        <PostList :posts="fetchedPosts" />
</template>

<script>
import PostList from "@/components/post/PostList"
export default {
    components : {
        PostList
    },
     computed : {
       fetchedPosts() {
               return this.$store.getters.getPosts;
       }
     }
}
</script>

<style>

</style>
