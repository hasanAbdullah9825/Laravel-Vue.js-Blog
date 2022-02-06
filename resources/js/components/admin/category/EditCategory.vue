<template>
  <div>
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Edit Category</h3>
      </div>
      <!-- /.card-header -->
      <!-- form start -->
      <form role="form " @submit.prevent="updateCategory">
        <div class="card-body">
          <div class="form-group">
            <label for="exampleInputEmail1">Category</label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter category"
              name="bat_name"
              v-model="form.cat_name"
            />
            <div
              v-if="form.errors.has('cat_name')"
              v-html="form.errors.get('cat_name')"
            />
          </div>
        </div>
        <!-- /.card-body -->

        <div class="card-footer">
          <button type="submit" class="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "New",
  mounted() {
    axios
      .get(`/category/edit/${this.$route.params.categoryId}`)
      .then((response) => {
        this.form.fill(response.data.category);
      })
      .catch(() => {});
  },
  data() {
    return {
      form: new Form({
        cat_name: "",
      }),
    };
  },
  methods: {
    updateCategory() {
      this.form
        .post(`/category/update/${this.$route.params.categoryId}`)
        .then((response) => {
          this.$router.push("/category-list");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Category updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(() => {});
    },
  },
};
</script>