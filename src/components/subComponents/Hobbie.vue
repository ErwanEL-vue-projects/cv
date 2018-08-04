<template>  
    <div class="experience margin-b-50">
        <ul class="list margin-b-30">
            <li><b>{{ item.title }}:</b> {{ item.list.join(', ') }}</li>
        </ul>
    </div>
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
.experience-section{ background: #0f5a8c; color: #fff; }

.experience .list > li{ display: block; position: relative; margin-bottom: 10px; padding-left: 20px; }

.experience .list > li:before{ content: ''; position: absolute; top: 50%; left: 0; height: 10px; 
	width: 10px; margin-top: -5px; display: block; border-radius: 10px; border: 2px solid #023859; }

</style>
