<template>
  <div>
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Add new post</h3>
      </div>
      <!-- /.card-header -->
      <!-- form start -->
      <form role="form " enctype="multipart/form-data">
        <div class="card-body">
          <div class="form-group">
            <label for="title">Title</label>
            <input
              class="form-control"
              id="title"
              placeholder="Enter title"
              name="title"
              :v-model="form.title"
            />

            <div
              v-if="form.errors.has('title')"
              v-html="form.errors.get('title')"
            />
            <div class="form-group">
              <label for="descriptionId">Description</label>

              <textarea
                type="text"
                class="form-control"
                id="description"
                placeholder="post description.."
                v-model="form.description"
                name="description"
              >
              </textarea>
              <div
                v-if="form.errors.has('description')"
                v-html="form.errors.get('description')"
              />
            </div>

            <div class="form-group">
              <label for="category">Select</label>
              <select
                class="form-control"
                name="category"
                id=""
                :v-model="form.category_id"
              >
                <option disabled value="">select one</option>
                <option
                  v-for="category in getAllCategory"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.cat_name }}
                </option>
              </select>

              <div
                v-if="form.errors.has('category')"
                v-html="form.errors.get('category')"
              />
            </div>

            <div class="form-group">
              <!-- <input
                type="file"
                name="photo"
                class="form-control"
                @change="showImage($event)"
              /> -->
              <input @change="showImage($event)" name="photo" type="file" />
            </div>
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
  data() {
    return {
      form: new Form({
        title: "",
        description: "",
        category_id: "",
      }),
    };
  },
  computed: {
    getAllCategory() {
      return this.$store.getters.getCategory;
    },
  },
  methods: {
    showImage(event) {
      // need to implement this method
      // let file = event.target.files[0];
      // let reader = new FileReader();
      // reader.onload = (event) => {
      //   console.log(event.target.result);
      // };
      // reader.readAsDataURL(file);
    },
  },
  mounted() {
    this.$store.dispatch("allCategory");
  },
};
</script>