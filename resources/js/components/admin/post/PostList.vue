

<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Post List</h3>
          <div class="card-tools">
            <button class="btn btn-primary">
              <router-link to="/add-post" style="color: #fff"
                >Add Post</router-link
              >
            </button>
          </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12 col-md-6"></div>
              <div class="col-sm-12 col-md-6"></div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>SL</th>
                      <th>User</th>
                      <th>Category</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Photo</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    <!-- <tr v-for="(post, index) in getAllPosts" >
                      <td>{{ index + 1 }}</td>
                      <td v-if="post.user">{{ post.user.name }}</td>
                      <td v-if="post.category">category</td>
                      <td>{{ post.title }}</td>
                      <td>{{ post.description }}</td>
                      <td><img :src="post.photo" width="50px" alt="" /></td>
                      <td>Edit delete</td>
                    </tr> -->

                    <tr v-for="(post, index) in getAllPosts" :key="post.id">
                      <td>{{ index + 1 }}</td>
                      <td v-if="post.user">{{ post.user.name }}</td>
                      <td v-if="post.category">
                        {{ post.category.cat_name | shortlength(10, "...") }}
                      </td>

                      <td>yoo{{ post.title | shortlength(30, "...") }}</td>
                      <td>{{ post.description | shortlength(30, "...") }}</td>
                      <td><img :src="post.photo" width="50px" alt="" /></td>
                      <td>Edit delete</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- /.card-body -->
      </div>
    </div>
    <!-- /.col -->
  </div>
</template>
<script>
export default {
  computed: {
    getAllPosts() {
      return this.$store.getters.getPosts;
    },
  },
  methods: {},
  mounted() {
    this.$store.dispatch("fetchAllPost");
  },
};
</script>