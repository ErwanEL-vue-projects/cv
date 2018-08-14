<template>
    <div class="education margin-b-50">
        <h4><b>{{item.title}}</b></h4>
        <span class="d-inline-flex"><h5 class="font-yellow d-inline-flex"><b>{{item.location}}</b></h5>&nbsp;
        <img v-show="checkMichelin()" id="michelin" src="../../assets/xp/michelin.svg" alt="">
        </span>
        <div v-if="item.hotel">
            <span class="d-inline-flex"><h5>{{ item.hotel }}</h5></span>
            <five-stars v-if="checkHotel('burgundy')"></five-stars>
            <four-stars v-if="checkHotel('Madero')"></four-stars>
        </div>
        <h6 class="font-lite-black margin-t-10 date">- {{item.date}} -</h6>
        <p class="margin-tb-30"><em>{{item.desc}}</em></p>
    </div><!-- education -->
</template>

<script>
import { mapGetters } from 'vuex';
import FiveStars from './FiveStars'
import FourStars from './FourStars'

export default {
    components: {
        FiveStars,
        FourStars
    },
  props: ['item'],
  computed: 
    mapGetters({
      data: 'getData'
  }),
  methods: {
      checkMichelin () {
        var string = this.item.location,
        substring = "Baudelaire";
        return string.indexOf(substring) !== -1;
      },
       checkHotel(val) {
          if (this.item.hotel) {
            var string = this.item.hotel;
            return string.indexOf(val) !== -1 ? true : false;
          }
      }
  }
}
</script>

<style scoped>
#michelin {
    height: 20px;
    width: 20px;
}
</style>

