<template>
    <PostForm
            @submit="updatePost($event)"
            :post="loadedPost"
            :is-update="true"/>
</template>

<script>
    import axios from "axios"
import PostForm from "@/components/admin/PostForm"
export default {
    components : {
        PostForm
    },
    asyncData(context) {
        return axios.get("https://kose-yazilari-nuxt-js-i.firebaseio.com/posts/" + context.params.postId + ".json")
            .then(response => {
                return {
                    loadedPost : response.data
                }
            })
    },
    methods : {
        updatePost(editedPost) {
            this.$store.dispatch("updatePost",{...editedPost, id : this.$route.params.postId})
                .then(response => {
                    this.$router.push("/admin")
                })
        }
    }

}
</script>

<style>

</style>

