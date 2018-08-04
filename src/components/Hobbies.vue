<template>
<section class="experience-section section">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="heading">
                    <h3><b>{{ data.hobbies.title }}</b></h3>
                    <h6 class="font-lite-black"><b>{{ data.hobbies.desc }}</b></h6>
                </div>
            </div><!-- col-sm-4 -->
            <div class="col-sm-8">
                <Hobbie v-for="item in data.hobbies.list" :item="item"/>
<!--             
                <div class="experience margin-b-50">
                    <ul class="list margin-b-30">
                        <li><b>Duis non volutpat:</b> arcu, eu mollis tellus.</li>
                        <li>Quis consequat nulla effi citur at.</li>
                        <li>Sed finibus aliquam neque sit.</li>
                    </ul>
                </div>experience -->

            </div><!-- col-sm-8 -->
        </div><!-- row -->
    </div><!-- container -->
</section><!-- experience-section -->
</template>

<script>
import { mapGetters } from 'vuex';
import Hobbie from './subComponents/Hobbie'

export default {
  computed: 
    mapGetters({
      data: 'getData'
  }),
    components: {
        Hobbie
    },
}  
</script>

<style scoped>
.experience-section{ background: #f1f2eb; color: #023859; }

.experience .list > li{ display: block; position: relative; margin-bottom: 10px; padding-left: 20px; }

.experience .list > li:before{ content: ''; position: absolute; top: 50%; left: 0; height: 10px; 
	width: 10px; margin-top: -5px; display: block; border-radius: 10px; border: 2px solid #023859; }

</style>

