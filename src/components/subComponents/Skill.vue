<template>
  <div class="experience margin-b-50">
    <h5 class="font-yellow">
      <b>
        <u class="titre">{{ item.title }}:</u>
      </b>
    </h5>
    <br>
    <ul class="list margin-b-30" v-for="e in item.list" :e="e">
      <li>{{e}}</li>
    </ul>
  </div>
  <!-- experience -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["item", "e"],
  computed: mapGetters({
    data: "getData"
  })
};
</script>

<style scoped>
.titre {
  text-decoration: none;
}

.experience-section {
  background: #0f5a8c;
  color: #fff;
}

.experience .list > li {
  display: block;
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  margin-left: 10px;
}

.experience .list > li:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  height: 10px;
  width: 10px;
  margin-top: -5px;
  display: block;
  border-radius: 10px;
  border: 2px solid #fff;
}
</style>
