<template>
    <div class="background">

        <div class="container">
            <div class="title">Registration</div>
            <form class="form" @submit.prevent="Registration()">
                <div class="details-user">
                    <div class="input-box">
                        <span class="details">First Name</span> 
                        <input type="text" placeholder="Enter Name"  name="first name" required v-model="payload.firstName">
                    </div>
                    <div class="input-box">
                        <span class="details">Last Name</span>
                        <input type="text" placeholder="Last name"  name=" last name" required v-model="payload.lastName">
                    </div>
                    <div class="input-box">
                        <span class="details">Gender</span>
                        <input type="text" placeholder="Gender"  name="Gender" required v-model="payload.gender">
                    </div>
                    <div class="input-box">
                        <span class="details">Email</span>
                        <input type="text" placeholder="Enter Email"  name="email" required v-model="payload.emailAdd">
                    </div>
                    <div class="input-box">
                        <span class="details">User password</span>
                        <input type="password" placeholder="Enter User Password" name="User password" required v-model="payload.userPass">
                    </div>
                    <div class="input-box">
                        <span class="details">Confirm Password</span>
                        <input type="password" placeholder="Confirm Password"  name="confirm_psw" required v-model="confirm_psw">
                    </div>
                </div>
                <div class="button">
                <input type="submit" value="Register" >
            </div>
          </form>
             </div>
    </div>
  </template>
  

<script>
// import {computed} from '@vue/runtime-core';
// import {useStore} from 'vuex';
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

<style scoped>
.background{
 background: linear-gradient(black,rgb(80,201,227),black); 
 min-height: 100vh;
}

body{
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.title{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 50px;
  color: white;
  text-decoration: underline;
}
 .container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 700px;
  width: 100%;
  background: black;
  padding: 25px 30px;
  align-items: center;
  border-radius: 3em;
 
} 
.container .title{
  font-size: 25px;
  font-weight: 500;
  position: relative;
}
.container form .details-user{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}
.details{
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 20px;
}
form .details-user .input-box{
  width: calc(100% / 2 - 20px);
  margin-bottom: 5px;
  
}
.details-user .input-box .details{
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
}
.details-user .input-box input{
height: 45px;  
width: 100%;
outline: none;
border-radius: 2em;
padding-left: 15px;
font-size: 16px;
border-bottom-width: 2px;
transition: all 0.3s ease;
}
.details-user .input-box input:focus,
.details-user .input-box input:valid{
border-color: black;
}
.gender-title{
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 20px;
}
form .detail-gender .gender-title{
font-size: 20px;
font-weight: 500;
}
.detail-gender .category{
  display: flex;
  width: 80%;
  margin: 15px 0;
  margin-left: 55px;
  justify-content: space-between; 
}
.detail-gender .category label{
  display: flex;
  align-items: center;
}
.category{
  color: white;
}
.detail-gender .category .dot{
 height: 18px; 
 width: 18px;
 background: white;
 border-radius: 50%;
 margin-right: 10px;
 border: 5px solid transparent;
 transition: all 0.3s ease;
}
#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three{
border-color: #003cff;
} 
form input[type="radio"]{
  display: none;
}
 form.button input{
  height: 100%;
  width: 100%;
  outline:none;
  background-image: (163deg, #00ff75 0%, #3700ff 100%);
  border: none;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 2em;
  background-color: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
}
 .button input{
  width: 200px;
  border-radius: 10px;
  background: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
 
}
@media (max-width: 320px) {
  .container{
      max-width: 100%;
  }
  form .details-user .input-box{
      margin-bottom: 15px;
      width: 100%;
  }
  form .detail-gender .category{
      width: 100%;
  }
  .container form .detail-user{
      max-height: 300px;
      overflow-y: scroll;
  }
}
.container {
  border-radius: 2em;
  transition: all .2s;
}

</style>