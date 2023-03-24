<template>
    <div class="add">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Product
      </button>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" @submit="addProduct">
            <div class="col-md-6">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                v-model="prodName"
                
              />
            </div>
            <div class="col-md-6">
              <label for="name" class="form-label">Description</label>
              <input
                type="text"
                class="form-control"
                v-model="prodDes"
                
              />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">category</label>
              <input
                type="text"
                class="form-control"
                v-model="category"
                
              />
            </div>
            <div class="col-md-6">
              <label for="name" class="form-label">Quantity</label>
              <input
                type="text"
                class="form-control"
                v-model="prodQuantity"
                
              />
            </div>
            <div class="col-md-6">
              <label for="name" class="form-label">Price</label>
              <input
                type="text"
                class="form-control"
                v-model="price"
                
              />
            </div>
            <div class="col-md-6">
              <label class="form-label">Image</label>
              <input
                type="text"
                class="form-control"
                v-model="imgURL"
                
              />
            </div>
            <button
              class="btn btn-success mt-3"
              @click="($event) => addProduct()"
            >
              Add Product
            </button>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        payload: {
          prodName: "",
          prodDes: "",
          category: "",
          prodQuantity: "",
          price: "",
          imgURL: "",
        },
      };
    },
  
    methods: {
      addProduct() {
        const payload = {
          prodName: this.prodName,
          prodDes: this.prodDes,
          category: this.category,
          prodQuantity: this.prodQuantity,
          price: this.price,
          imgURL: this.imgURL,
        };
        this.$store.dispatch("addProduct", payload);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  