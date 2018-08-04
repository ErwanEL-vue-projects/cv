<template>
    <div class="education margin-b-50">
        <h4><b>{{item.title}}</b></h4>
        <h5 class="font-yellow d-inline-flex"><b>{{item.location}}</b></h5>&nbsp;<span class="d-inline-flex">
            <!-- <img src="../../../static/images/michelin.png" alt=""> -->
            <!-- <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i> -->
            </span>
        <h6 class="font-lite-black margin-t-10 date">{{item.date}}</h6>
        <p class="margin-tb-30">{{item.desc}}</p>
    </div><!-- education -->
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['item'],
  computed: 
    mapGetters({
      data: 'getData'
  })
}
</script>
