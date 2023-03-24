<template>
    <div>
    <div class="background">
    <div v-if="spinner">
        <SpinnerComponent/>
    </div>
       <div v-else class="container px-4">
        <div class="row" style="height 50%,">
            <!-- <h2>Products</h2> -->
            <div class="container-fluid">
                
                <div class="row gy-3 gap-5 mx-3 d-sm-flex justify-content mt-5 text-black;">
                    <div class="card col-3" v-for="(product, index) in products" :key="index">
                        <img :src="product.imgURL" class="mx-auto d-block" style="width: 15rem; height: 15rem; padding-top: 20%;"/>
                        <div class="card-body text-white" style="width:auto">
                            <h5 class="card-title">{{ product.prodName }}</h5>
                            <!-- <h5 class="card-title">{{ product.category }}</h5> -->
                            <h5 class="card-title">{{ product.price }}</h5>
                            <p class="card-text">{{product.prodDes}}</p>
                            <router-link :to="{name:'SingleProduct', params:{id:product.prodID}}" >
                            <button class="btn btn-primary">View Product</button></router-link> 
                            <button class="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
    </div>
</template>

<script>
import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex';
import SpinnerComponent from "../components/SpinnerComponent.vue"
    export default {
        components: {
            SpinnerComponent
        },
        setup(){
            const store= useStore();
            store.dispatch("fetchProducts");
            const products = computed (()=> store.state.products);
            const spinner = computed (()=> store.state.showSpinner);
            return{
                products,
                spinner
            };
        }
    }
</script>

<style scoped>
.card{
    border-radius: 2em;
    border: solid;
    border-color: white;
    align-content: center;
    background-color: black;

}

.card-title{
    color: white;
    text-align: center;
}
.card-text{
    color: white;
}
.background{
 background:linear-gradient(black,rgb(80,201,227),black);
}
.btn{
    padding: 5px;
    margin: 5px;
    
}
</style>