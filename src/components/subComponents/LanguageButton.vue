<template>
    <div class="dropdown ">
        <button class="btn btn-secondary dropdown-toggle language-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-globe"></i>
        <span id="lang" v-on='switchLang()'>{{ userLang }}</span>
        </button>
        <div  class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a @click="switchLang()" role="button" class="dropdown-item">FR</a>
            <a @click="switchLang()" role="button" class="dropdown-item">EN</a>
            <a @click="switchLang()" role="button" class="dropdown-item">ES</a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: 
        mapGetters({
            userLang: 'getUserLang'
    }),
    methods: {
        switchLang() {
            let lang = document.querySelector('#lang');
            let dropdownMenu = document.querySelector('.dropdown-menu');
            let dropItem = Array.from(document.querySelectorAll('.dropdown-item'));
            if(dropdownMenu) {
                dropdownMenu.addEventListener('click', (e) => {
                    dropItem.forEach(i => {
                        if(e.target === i) {
                            lang.textContent = i.text;
                            this.$store.state.lang = i.text;
                            return this.$store.commit('languageSwitcher')
                        }
                    })
                })
            } else {
                this.$store.commit('languageSwitcher')
                this.$store.state.lang = this.$store.state.userLang;
            }
        }
    }
}
</script>

<style scoped>
    header .language-btn {
        float: left; 
        background-color: #f1f2eb;
        color: #023859;
        padding: 6px;

        border-radius: 4px; 
        margin-top: 30px;
        box-shadow: inset 0 0px 4px rgba(0,0,0,.3); 
        -webkit-transition: all .2s ease; transition: all .2s ease;
    }
</style>
