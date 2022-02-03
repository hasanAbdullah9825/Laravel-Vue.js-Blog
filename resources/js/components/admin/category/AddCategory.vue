<template>
  <div>
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Add new Category</h3>
      </div>
      <!-- /.card-header -->
      <!-- form start -->
      <form role="form " @submit.prevent="addCategory">
        <div class="card-body">
          <div class="form-group">
            <label for="exampleInputEmail1">Category</label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter category"
              name="cat_name"
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
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "New",
  data() {
    return {
      form: new Form({
        cat_name: "",
      }),
    };
  },
  methods: {
    addCategory() {
      this.form
        .post("/add_category")
        .then((response) => {
          this.$router.push("/category-list");
        })
        .catch(() => {});
    },
  },
};
</script>