<template>
    <section class="education-section section">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="heading">
                    <h3><b>{{data.experiences.title}}</b></h3>
                    <h6 class="font-lite-black"><b>{{data.experiences.desc}}</b></h6>
                </div>
            </div><!-- col-sm-4 -->
            <div class="col-sm-8">
                <div class="education-wrapper">
                    <Experience v-for="item in data.experiences.list" :item="item"></Experience>
                </div><!-- education-wrapper -->
            </div><!-- col-sm-8 -->
        </div><!-- row -->
    </div><!-- container -->
</section><!-- about-section -->
</template>

<script>
import Experience from './subComponents/Experience';
import { mapGetters } from 'vuex';

export default {
    props: ['item'],
    computed: 
        mapGetters({
        data: 'getData'
         }),
    components: {
        Experience
    }
}
</script>

<style>
.education-section {
    background-color: #023859;
    color: white;
}

.education-section,p{
    color: white;
}

.date {
    color: white;
}

.education-wrapper{ position: relative; }

.education-wrapper:after{ content:''; position: absolute; top: 8px; bottom: 0; left: -51px;
	width: 2px; background: #ccc; }

.education-wrapper .education{ position: relative; }

.education-wrapper .education:after{ content:''; position: absolute; top: 8px; left: -58px; width: 16px; 
	height: 16px; border-radius: 10px; z-index: 1;
	box-shadow: 0 0 0 8px rgba(55,130,170, .4); background: #023859; }

</style>

<style scoped>
.section .heading:before {
    background: #f1f2eb;
}
</style>

