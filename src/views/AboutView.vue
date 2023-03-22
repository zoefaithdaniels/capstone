<template>
  <div class="background">
   <div class="about">
         <div class="row">
          <div class="about-col-1" style="margin-top:20px;">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://i.postimg.cc/sgJXgXYq/Erling-Haaland-and-Jude-Bellingham.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.postimg.cc/1573rhVj/gavi.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/sgJXgXYq/Erling-Haaland-and-Jude-Bellingham.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          </div>
          <div class="about-col-2">
            <h1 class="sub title">About Me</h1>
            <p>
              I am 19 years old, I live in Bishop Lavis and I am a very ambitious young lady.
                I love trying new things and discover new hidden talents that might have to learn more and too broaden my knowledge. I am a hard working person and always find ways to better myself and always up for new challenges.
                In my free time I spend time with family and reading aswell as watching sports on a regular.
            </p> 

            
            <div class="row">
                    <div class="col-lg-6">
                        <ul>
                          <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>Birthday:</strong>16 October 2003</li>
                          <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>Phone:</strong>+27 84  755 3693</li>
                          <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>City:</strong>Cape Town,Bishop Lavis</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                      <ul>
                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>Age:</strong>19 Years Old</li>
                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>Matric:</strong>Higher Certificate</li>
                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><strong>Email:</strong>zoedaniels094@gmail.com</li>
                      </ul>
                    </div>
                </div>
        </div>
    </div> 
  </div> 
</div>
</template>
<script>
export default{

}
</script>
<style scoped>
.background{
  background:linear-gradient(black,rgb(80,201,227),black);
  min-height: 100vh;
  position: fixed;

}
.about{
    padding: 80px 0;
    color: black;
    overflow: hidden;
   }
    .row{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
   } 
    .about-col-1{
    flex-basis: 35%;
    margin-bottom: 30px;
    padding: 10px;
    height: 20px;
   }
   .about-col-1 img{
     width: 100%;
     /* border-radius: 10px;   */
     /* border:solid; */
     margin: 40px;
     padding-left: 20px;
     padding-right: 20px;
     padding-top: 20px;
     padding-bottom: 20px;
     margin-top: -95px;
      
   } 
    .about-col-2{
   flex-basis: 60%;
  } 
</style>
