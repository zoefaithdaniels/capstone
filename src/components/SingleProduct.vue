<template>
    <div class="background">
  <div class="container">
             <div class="container-fluid">
                 <div class="row-sub">
                   <img :src="product?.imgURL" class="mx-auto d-block" >
                         <div class="card-body">
                             <h5 class="card-title">{{ product?.prodName }}</h5>
                             <h5 class="card-sub-title">{{ product?.price }}</h5>
                             <p class="card-text">{{product?.prodDes}}</p>
                         </div>
                      </div>
                     </div>
                 </div>
             </div>
  </template>
  
  <script>
     export default {
       name: "SingleProduct",
       computed: {
          product() {
             return this.$store.state.product
          }
       },
       created() {
          this.$store.dispatch('SingleProduct', this.$route.params.id)
       }   
     }
  </script>
  
  <style scoped>
  .background{
    background: linear-gradient(black,rgb(80,201,227),black);
     min-height: 100vh; 
  }
 .row-sub img{
    float: left;
    margin-top: 50px;
    width: 400px;
    height: 500px;
 }
 
 /* .card-title{
     color: white;
     padding: 50px;
     float: right;
     justify-content: center;
     margin-top: 30px;
 } */
 .card-text{
    color: white;
     padding: 50px;
     float: right;
     padding-right: 30px;
     justify-content: center;
     margin-top: 30px;
 }
 .card-sub-title{
    color: white;
     padding: 0px;
     float: right;
     margin-top: 90px;
 }
  </style>