<template>
  <div class="home">
    <video autoplay loop muted playsinline class="vid">
      <source src="../assets/soccer_brokers.mp4" type="video/mp4">
    </video>
    </div>
 
  
</template>

<script>
export default{
  name:'HomeView'
}

</script>
<style scoped>
.vid{
  position: fixed;
  max-height: 800px;
  min-width: 100%;
  object-fit: fill;
}

 </style>
