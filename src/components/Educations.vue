<template>
<section class="experience-section section">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="heading">
                    <h3><b>{{data.educations.title}}</b></h3>
                    <h6 class="font-lite-black"><b>{{data.educations.desc}}</b></h6>
                </div>
            </div><!-- col-sm-4 -->
            <div class="col-sm-8">
                <Education v-for="item in data.educations.list" :item="item"/>
            </div><!-- col-sm-8 -->
        </div><!-- row -->
    </div><!-- container -->
</section><!-- experience-section -->
</template>

<script>
import Education from './subComponents/Education';
import { mapGetters } from 'vuex';

export default {
    props: ['item'],
    computed: 
        mapGetters({
            data: 'getData'
    }),
    components: {
        Education
    }
}
</script>

<style scoped>

.experience-section{ background: white; color: #023859; }
.experience-section,p{ color: #023859; }

.experience .list > li{ display: block; position: relative; margin-bottom: 10px; padding-left: 20px; }

.experience .list > li:before{ content: ''; position: absolute; top: 50%; left: 0; height: 10px; 
	width: 10px; margin-top: -5px; display: block; border-radius: 10px; border: 2px solid #fff; }

</style>