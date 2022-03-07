

export default
    {
        state: {
            categories: "this is a category",
            posts: ''

        },
        getters: {
            getCategory(state) {
                return state.categories;
            },
            getPosts(state) {
                return state.posts;

            }
        },
        actions: {
            allCategory(context) {
                axios.get('/category').then(
                    (response) => {
                        context.commit("categories", response.data.categories);
                        // console.log(response.data.categories);

                    }
                )

            },

            fetchAllPost(context) {
                axios.get('/posts').then(
                    (response) => {
                        context.commit("posts", response.data.posts);
                    }
                )
            }
        },
        mutations: {
            categories(state, data) {
                //console.log("hiii");
                state.categories = data;
                // console.log(state.category[0].cat_name);

            },
            posts(state, data) {
                state.posts = data;
            }
        }
    }