<template>
    <a class="downlad-btn" :href="switchHref()" download="cv-erwan-leblois">{{ data.infos.downloadButton }}</a>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  computed: 
    mapGetters({
      data: 'getData',
      lang: 'getLang'
  }),
  methods: {
      switchHref () {
          let path = '';
          switch (this.lang) {
                case 'FR':
                    path = '/static/cv/cv-french.pdf'
					break;
				case 'EN':
                    path = '/static/cv/cv-english.pdf'
					break;
				case 'ES':
                    path = '/static/cv/cv-spanish.pdf'
					break;
				default:
					break;
            }
            return path;
      }
  }
}; 
</script>

<style scoped>
  .downlad-btn{ padding: 15px 30px; border-radius: 4px; float: right; margin-top: 30px;
    box-shadow: inset 0 0px 4px rgba(0,0,0,.3); background: #0f5a8c; color: #fff; 
    -webkit-transition: all .2s ease; transition: all .2s ease; }

  .downlad-btn:hover{ -webkit-transform: translateY(-4px); transform: translateY(-4px); background: #3782aa;}
</style>
