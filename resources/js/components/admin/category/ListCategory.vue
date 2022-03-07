

<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Category List</h3>
          <div class="card-tools">
            <button class="btn btn-primary">
              <router-link to="/add-category" style="color: #fff"
                >Add Category</router-link
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
                <table
                  id="example2"
                  class="table table-bordered table-hover dataTable dtr-inline"
                  role="grid"
                  aria-describedby="example2_info"
                >
                  <thead>
                    <tr role="row">
                      <th
                        class="sorting sorting_asc"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="Rendering engine: activate to sort column descending"
                      >
                        Sl
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Browser: activate to sort column ascending"
                      >
                        Category Name
                      </th>
                      <th>Date</th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Platform(s): activate to sort column ascending"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      class="even"
                      v-for="(category, index) in getallCategory"
                      :key="category.id"
                    >
                      <td class="sorting_1 dtr-control">{{ index + 1 }}</td>
                      <td>{{ category.cat_name }}</td>
                      <td>{{ category.created_at | dateFormat }}</td>
                      <td>
                        <router-link :to="`/edit-category/${category.id}`"
                          >Edit |</router-link
                        >
                        <a href="" @click.prevent="deleteCategory(category.id)"
                          >Delete</a
                        >
                      </td>
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
    getallCategory() {
      return this.$store.getters.getCategory;
      //console.log(this.$store.getters.getCategory);
    },
  },
  methods: {
    deleteCategory(id) {
      axios.delete("/category/" + id).then((response) => {
        this.$store.dispatch("allCategory");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Category Deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    },
  },
  mounted() {
    this.$store.dispatch("allCategory");
  },
};
</script>