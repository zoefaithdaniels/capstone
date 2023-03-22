<template>
    <nav class="navbar navbar-expand-lg bg">
      <div class="logo">
        <img src="">
      </div>
  <div class="container-fluid">
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <a class="navbar-brand" href="#">Soccer Brokers</a>
  </button>
  <ul class="dropdown-menu">
    <!-- <li><a class="dropdown-item" href="#">Action</a></li> -->
    <router-link to ="/Register"><a class="btn"></a>Register</router-link>
    <!-- <li><a class="dropdown-item" href="#">Another action</a></li> -->
    <router-link to ="/Login"><a class="btn"></a>Login</router-link>
  </ul>
</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <i class="fa-solid fa-house"></i> <router-link to ="/">Home</router-link>
        </li>
        <li class="nav-item">
          <i class="fa-solid fa-users"></i> <router-link to ="/About">About Us</router-link>
        </li>
        <li class="nav-item">
         <i class="fa-solid fa-cart-shopping"> </i><router-link to ="/Products">Products</router-link>
        </li>
        <li class="nav-item">
         <i class="fa-solid fa-lock"></i> <router-link to ="/Admin">Admin</router-link>
        </li>
        <li class="nav-item">
          <i class="fa-solid fa-user"></i> <router-link to ="/Login">Login</router-link>
        </li>
        <li class="nav-item">
          <i class="fa-solid fa-pen-to-square"> </i> <router-link to ="/Register">Register</router-link>
        </li>   
        <li class="nav-item">
          <i class="fa-solid fa-phone"></i> <router-link to ="/Contact">Contact</router-link>
        </li>   
      </ul>
      <form class="d-flex" role="search">
        <button class="btn"><i class="fa-solid fa-heart"></i></button>
        <button class="btn"><i class="fa-solid fa-cart-shopping"></i></button>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>

      </form>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>

.dropdown{
  color: black;
}
.btn{
   color: rgb(80,201,227); 
}
.nav-item{
    margin-left: 50px;
    color: rgb(80, 201, 227);
  }
  .navbar{
    background-color:black;
  }
  
  nav a {
    font-weight: bold;
    text-decoration: none;
    color: #ebecef;
  }
  .navbar-brand{
    color: white;
  }

</style>