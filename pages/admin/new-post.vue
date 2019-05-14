<template>
    <PostForm @submit="addPost($event)"/>
</template>

<script>
    import axios from "axios";
import PostForm from "@/components/admin/PostForm";
export default {
    components : {
        PostForm
    },
    methods : {
        addPost(post) {
            this.$store.dispatch("addPost", post)
                .then(response => {
                    this.$router.push("/admin")
                })
        }
    }
}
</script>

<style>

</style>

