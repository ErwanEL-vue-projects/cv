<template>
<section class="experience-section section">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="heading">
                    <h3><b>{{data.skills.title}}</b></h3>
                    <h6 class="font-lite-black"><b>{{data.skills.desc}}</b></h6>
                </div>
            </div><!-- col-sm-4 -->
            <!-- <div class="row"> -->
                <div class="col-sm-8">
                    <Skill v-for="item in data.skills.list" :item="item"/>
                </div>
            </div><!-- col-sm-8 -->
        </div><!-- row -->
    </div><!-- container -->
</section><!-- experience-section -->
</template>

<script>
import Skill from './subComponents/Skill';
import { mapGetters } from 'vuex';

export default {
  computed: 
    mapGetters({
      data: 'getData'
  }),
    components: {
        Skill
    }
}
</script>

<style scoped>
.experience-section{ background: #0f5a8c; color: #fff; }

.experience .list > li{ display: block; position: relative; margin-bottom: 10px; padding-left: 20px; }

.experience .list > li:before{ content: ''; position: absolute; top: 50%; left: 0; height: 10px; 
	width: 10px; margin-top: -5px; display: block; border-radius: 10px; border: 2px solid #fff; }

.section .heading:before {
    background: #f1f2eb;
}
</style>
