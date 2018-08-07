<template>
    <footer class="copyright">
        <span style="text-align: left;">Made with
            <img id="vue" src="../assets/vue.png" alt=""> - by <a target="_blank" href="http://erwanel.github.io"> ErwanEL </a> - <i class="fas fa-laptop mr-1"></i> and
            <img id="mate" src="../assets/test.svg" alt="">
        </span> 
        <p class="mt-1">
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        Copyright &copy; All rights reserved | This template is made by <a href="https://colorlib.com" target="_blank">Colorlib</a>
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        </p>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: 
    mapGetters({
      data: 'getData'
  })
}

    // document.write(new Date().getFullYear());
</script>

<style scoped>
    .copyright{ text-align: center; padding: 30px 0; background: #023859; } 
    .copyright ,p{color: white;}
    #vue {
        width: 20px;
        height: 20px;
    }
    #mate {
        width: 40px;
        height: 40px;
        padding-bottom: 5px;
        padding-right: 10px;
        margin-bottom: 2px;
    }
</style>