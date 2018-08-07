<template>
    <div class="experience margin-b-50">
        <h4><b>{{item.title}}</b></h4>
        <h5 class="font-yellow"><b>{{item.location}}</b></h5>
        <h6 class="margin-t-10">- {{item.date}} - </h6>
        <p class="font-semi-white margin-tb-30"><em>{{item.desc}}</em></p>
    </div><!-- experience -->
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

<style scoped>

.experience-section{ background: white; color: #023859; }
.experience-section,p{ color: #023859; }

.experience .list > li{ display: block; position: relative; margin-bottom: 10px; padding-left: 20px; }

.experience .list > li:before{ content: ''; position: absolute; top: 50%; left: 0; height: 10px; 
	width: 10px; margin-top: -5px; display: block; border-radius: 10px; border: 2px solid #fff; }
</style>
