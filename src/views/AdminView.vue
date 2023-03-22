<template>
    <div class="background">
        <table class="table">
            <thead>
                <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>User role</th>
                <th>User profile</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.userID">
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>{{ user.userRole }}</td>
                    <td><img class="img-fluid" :src="user.userProfile" :alt ="user.firstName"></td>
                    <td><button class="btn btn-primary">Edit</button></td>
                    <td><button class="btn btn-primary">Delete</button></td>
                </tr>
            </tbody>
        </table>
   


    <div class="container-fluid">
        <h1>products</h1>
        <table class="table">
            <thead>
                <th>prod Name</th>
                <th>prod Description</th>
                <th>prod Price</th>
                <th>prod Quantity</th>
                <th>prod image</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>

            <tbody>
                <tr v-for="product in products"  :key="product.id">
             <td>{{  product.prodName }}</td>
             <td>{{  product.prodDescription }}</td>
             <td>{{  product.price }}</td>
             <td>{{  product.prodQuantity }}</td>
             <td><img :src="product.imgURL" :alt ="product.prodName" ></td>
             <td><button class="btn btn-primary">Edit</button></td>
             <td><button class="btn btn-primary">Delete</button></td>
            </tr>  
            </tbody>
        </table>
    </div>
</div>



</template>

<script>
import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex';

    export default {
     setup() {
       const store = useStore();
       store.dispatch("fetchUsers");
       store.dispatch("fetchProducts");
       const users =
       computed(()=>store.state.users);
       const products =
       computed(()=> store.state.products);
       return {
        users,
        products
       }
     }   
    }
</script>

<style scoped>
.table img{
    height:130px
    
}
.background{
 background:linear-gradient(black,rgb(80,201,227),black);
 min-height: 100vh;
}
.table{
    border-collapse: collapse;
    /* margin: 25px 0; */
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 2em;
    overflow: hidden;
    color: white;

}
.table thead tr {
text-align: center;
font-weight: bold;
/* background-color: green; */
color: aliceblue;

}
.table th .table td{
    padding: 12px 15px;
}
.table tbody tr{
border-bottom: 1px solid white;
}
.table tbody tr:last-of-type {
    border-bottom: white;
}
</style>