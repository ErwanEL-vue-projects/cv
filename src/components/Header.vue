<template>
  <header>
    <div class="container">
      <div class="heading-wrapper">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="info">
              <i class="icon ion-ios-location-outline"></i>
              <h5 class="d-inline ml-3">
                <a
                  class="header-link"
                  target="_blank"
                  href="https://goo.gl/maps/ZUfSvoqCuFQ2"
                >{{ data.infos.location }}</a>
              </h5>
            </div>
            <!-- info -->
          </div>
          <!-- col-sm-4 -->

          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="info">
              <!-- <i class="fas fa-phone fa-2x"></i> -->
              <i class="icon ion-ios-telephone-outline"></i>
              <h5 class="d-inline ml-3">
                <a
                  target="_blank"
                  class="header-link"
                  href="https://api.whatsapp.com/send?phone=573156833073&text=&source=&data=#"
                >{{ data.infos.tel }}</a>
              </h5>
            </div>
            <!-- info -->
          </div>
          <!-- col-sm-4 -->

          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="info">
              <i class="icon ion-ios-chatboxes-outline"></i>
              <h5 class="d-inline ml-3">{{ data.infos.mail }}</h5>
            </div>
            <!-- info -->
          </div>
          <!-- col-sm-4 -->
        </div>
        <!-- row -->
      </div>
      <!-- heading-wrapper -->
      <language-button/>
      <download-button/>
    </div>
    <!-- container -->
  </header>
</template>

<script>
import LanguageButton from "./subComponents/LanguageButton";
import downloadButton from "./subComponents/downloadButton";
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({
    data: "getData"
  }),
  components: {
    LanguageButton,
    downloadButton
  }
};
</script>

<style scoped>
header {
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  z-index: 100;
}

header .heading-wrapper {
  border-radius: 5px;
  padding: 30px 40px 20px;
  background: #023859;
  color: #fff;
}

header .info {
  margin-bottom: 10px;
}

header .info .icon {
  font-size: 30px;
}

header .info .right-area {
  margin-left: 45px;
}

.header-link {
  text-decoration: underline;
}

.header-link:active {
  color: white;
}

.header-link:visited {
  color: white;
}
</style>
