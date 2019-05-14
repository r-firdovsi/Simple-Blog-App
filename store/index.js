import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
    return new Vuex.Store({
        state : {
            fetchedPosts: []
        },
        mutations : {
            setPosts(state, posts) {
                state.fetchedPosts = posts
            },
            addPost(state, post) {
                state.fetchedPosts.push(post)
            },
            updatePost(state, editedPost) {
                let post_index = state.fetchedPosts.findIndex(post => post.id == editedPost.id)
                    state.fetchedPosts[post_index] = editedPost;
            },
            deletePost(state, deletePost) {
                let post_index = state.fetchedPosts.findIndex(post => post.id == deletePost.id)
                state.fetchedPosts.splice(post_index, 1)
            }
        },
        actions : {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios.get("https://kose-yazilari-nuxt-js-i.firebaseio.com/posts.json")
                    .then(response => {
                        let data = response.data;
                        let postArray = []
                        for(let key in data) {
                            postArray.push({ id : key, ...data[key] })
                        }
                        vuexContext.commit("setPosts", postArray)
                    })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts)
            },
            addPost(vuexContext, post) {
               return  this.$axios.post("https://kose-yazilari-nuxt-js-i.firebaseio.com/posts.json", post)
                    .then(response => {
                        vuexContext.commit("addPost", { ...post, id : response.data.name})
                    })
            },
            updatePost(vuexContext, editedPost) {
                return this.$axios.put("https://kose-yazilari-nuxt-js-i.firebaseio.com/posts/" + editedPost.id + ".json", editedPost)
                    .then(response => {
                        vuexContext.commit("updatePost", editedPost)
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            deletePost(vuexContext, post) {
                this.$axios.delete("https://kose-yazilari-nuxt-js-i.firebaseio.com/posts/" + post.id + ".json")
                    .then(response => {
                        vuexContext.commit("deletePost", post)
                    })
            }
        },
        getters : {
            getPosts(state) {
                return state.fetchedPosts
            }
        }
    })
}

export  default createStore;