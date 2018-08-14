<template>
    <transition name="fade">
        <button v-show="show" @click='topFunction()' id="myBtn"><i class="fas fa-angle-up"></i></button>
    </transition>
</template>

<script>
export default {
    data () {
        return {
            show: false
        }
    },
    methods: {
        topFunction () {
                window.scroll({
                    top: 0, 
                    behavior: 'smooth' 
                });
            },
            scrollFunction(event) {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    this.show = true;
                } else {
                    this.show = false;                    
                }
            },
        },
        created () {
        window.addEventListener('scroll', this.scrollFunction);
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollFunction);
        }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

#myBtn { 
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
}

@media only screen and (max-width: 600px) {
    #myBtn {
        display: none !important;
    }
}
</style>
