<template>
     <div class="background">
         <AddUser/>
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
                    <td><button  @click="deleteUSER(user.userID)" class="btn btn-primary">Delete</button></td>
                </tr>
            </tbody>
        </table>
   


    <div class="container-fluid">
        <h1>products</h1>
        <AddProduct/>
        <table class="table">
            <thead>
                <th>product Name</th>
                <th>product Description</th>
                <th>product category</th>
                <th>product Price</th>
                <th>product Quantity</th>
                <th>product image</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>

            <tbody>
                <tr v-for="product in products"  :key="product.id">
             <td>{{  product.prodName }}</td>
             <td>{{  product.prodDes}}</td>
             <td>{{  product.category }}</td>
             <td>{{  product.price }}</td>
             <td>{{  product.prodQuantity }}</td>
             <td><img class="img" :src="product.imgURL" :alt ="product.prodName" ></td>
             <td><button class="btn btn-primary">Edit</button></td>
             <td><button @click="deleteProduct(product.prodID)" class="btn btn-primary">Delete</button></td>
            </tr>  
            </tbody>
        </table>
    </div>
</div>

</template>

<script>
import AddProduct from '@/components/AddProduct.vue';
import AddUser from '@/components/AddUser.vue';
import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex';

    export default {
        components:{
            AddUser,
            AddProduct
        },
    setup() {
        const store = useStore();
        store.dispatch("fetchUsers");
        store.dispatch("fetchProducts");
        const users = computed(() => store.state.users);
        const products = computed(() => store.state.products);
        return {
            users,
            products
        };
    },
    methods: {
        deleteProduct(id) {
            this.$store.dispatch("deleteProduct", id);
            // location.reload()
        },
        deleteUSER(id) {
            this.$store.dispatch("deleteUSER", id);  
        },
    },
};
</script>

<style  scoped>
.background{
    background: linear-gradient(black,rgb(80,201,227),black);
    min-height: 100vh;
}
.img-fluid{
    width: 130px;
    height: 120px;
}
.table{
    color: white;
}
.img{
    width: 130px;
    height: 120px;
}

</style>