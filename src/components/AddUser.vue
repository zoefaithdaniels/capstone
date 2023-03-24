<template>
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" @submit="Register">
        <div class="col-md-6">
            <label for="name" class="form-label">FirstName</label>
            <input type="name" class="form-label" v-model="payload.firstName">
        </div>
        <div class="col-md-6">
            <label for="name" class="form-label">LastName</label>
            <input type="name" class="form-label" v-model="payload.lastName">
        </div>
        <div class="col-md-6">
            <label for="name" class="form-label">Gender</label>
            <input type="name" class="form-label" v-model="payload.gender">
        </div>
        <div class="col-md-6">
            <label for="name" class="form-label">Email Address</label>
            <input type="name" class="form-label" v-model="payload.emailAdd">
        </div>
        <div class="col-md-6">
            <label for="name" class="form-label">Password</label>
            <input type="name" class="form-label" v-model="payload.userPass">
        </div>
        <div class="col-md-6">
            <label for="name" class="form-label">Confirm Password</label>
            <input type="name" class="form-label" v-model="payload.confirm_pwd">
        </div>
        <button type="button" class="btn btn-success mt-3" @click="($event)=> Register()" >
            Add User
        </button>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
      data() {
        return {
          payload: {
                firstName:"",
                lastName:"",
                gender:"",
                emailAdd:"",
                userPass:"",
                userRole: "user",
            },
            confirm_psw: ""
        }
      },

      methods: {
        Registration() {
            if(this.payload.userPass !== this.confirm_psw) {
              alert('Password doesnt match')

            }
            else {

              this.$store.dispatch("Register", this.payload);
            }
            }
  
      }
    }
</script>

<style lang="scss" scoped>

</style>