<template>
    <div>
        <PostList :posts="fetchedPosts"/>
        <About />
    </div>    
</template>

<script>
import PostList from "@/components/post/PostList"
import About from "@/components/home/About"
export default {
    components : {
        PostList,
        About
    },
    // data() {
    //     return {
    //         fetchedPosts : []
    //     }
    // },
    // created() {
    //     this.$store.dispatch("setPosts", this.fetchedPosts)
    // },
    computed : {
        fetchedPosts() {
            return this.$store.getters.getPosts;
        }
    }

    // fetch(context) {
    //     return new Promise((resolve,reject) => {
    //
    //         context.store.dispatch("setPosts", [
    //             {
    //                 id : 1,
    //                 title: "Kablosuz Kedi Yayinda",
    //                 subTitle: "kablosuzkedi 2-sezon basliyor",
    //                 text: "Kablosuz kedi 2 ci sezonda bizi suprizlerle bekliyor",
    //                 author: "Rustemov"
    //             },
    //             {
    //                 id : 2,
    //                 title: "Videosinif.com Kedi Yayinda",
    //                 subTitle: "Videosinif.com 2-sezon basliyor",
    //                 text: "Videosinif.com kedi 2 ci sezonda bizi suprizlerle bekliyor",
    //                 author: "Rustemov"
    //             }
    //         ])
    //         resolve();
    //
    //     })
    //         .then(data => {
    //         return data;
    //     })
    //         .catch(e => {
    //             context.error(e);
    //         });
    //  // setTimeout(() => {
    //  //     callback(null, {
    //  //
    //  //         fetchedPosts : [
    //  //             {
    //  //                 id : 1,
    //  //                 title: "Kablosuz Kedi Yayinda",
    //  //                 subTitle: "kablosuzkedi 2-sezon basliyor",
    //  //                 text: "Kablosuz kedi 2 ci sezonda bizi suprizlerle bekliyor",
    //  //                 author: "Rustemov"
    //  //             },
    //  //             {
    //  //                 id : 2,
    //  //                 title: "Videosinif.com Kedi Yayinda",
    //  //                 subTitle: "Videosinif.com 2-sezon basliyor",
    //  //                 text: "Videosinif.com kedi 2 ci sezonda bizi suprizlerle bekliyor",
    //  //                 author: "Rustemov"
    //  //             }
    //  //         ]
    //  //     })
    //  // },3000)
    // }
}
</script>

<style>

</style>


