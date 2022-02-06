

export default
    {
        state: {
            category: "this is a category"

        },
        getters: {
            getCategory(state) {
                return state.category;
            },
        },
        actions: {
            allCategory(context) {
                axios.get('/category').then(
                    (response) => {
                        context.commit("categories", response.data.categories);


                    }
                )
            }
        },
        mutations: {
            categories(state, data) {
                console.log("hiii");
                state.category = data;

            }
        }
    }