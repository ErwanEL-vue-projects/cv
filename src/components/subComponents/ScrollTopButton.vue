<template>
    <button @click='topFunction()' id="myBtn" title="Go to top"><i class="fas fa-angle-up"></i></button>
</template>


<script>

export default {
    methods: {
       topFunction () {
            window.scroll({
                top: 0, 
                behavior: 'smooth' 
            });
       }
    }
}


// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

</script>

<style scoped>
@keyframes fadeIn {
   0% {opacity: 0;}
   100% {opacity: 1;}
}
@keyframes fadeOut {
   0% {opacity: 1;}
   100% {opacity: 0;}
} 

#myBtn { 
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: rgba(55, 130, 170, 1);
  color: #f1f2eb;
  cursor: pointer;
  padding: 10px 25px;
  border-radius: 2px;
  box-shadow: 0 1px 6px rgba(57,73,76,0.50);
    animation-duration: 0.2s;
    animation-name: fadeIn;
}

@media only screen and (max-width: 600px) {
	#myBtn {
        display: none !important;
    }
}
</style>
