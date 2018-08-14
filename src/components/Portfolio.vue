<template>
	<section class="portfolio-section section">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-3">
					<div class="heading">
						<h3><b>{{ data.portfolio.title }}</b></h3>
						<h6 class="font-lite-black"><b>{{ data.portfolio.desc }}</b></h6>
					</div>
				</div><!-- col-sm-3 -->
				
				<div class="col-sm-12 col-md-9">
					<div class="portfolioFilter clearfix margin-b-80">
						<a href="#" data-filter="*" class="current"><b>{{ changeFilter() }}</b></a>
						<a href="#" data-filter=".web-design"><b>PARIS</b></a>
						<a href="#" data-filter=".branding"><b>BUENOS AIRES</b></a>
						<a href="#" data-filter=".graphic-design"><b>PUNTA DEL ESTE</b></a>
					</div><!-- portfolioFilter -->
				</div><!-- col-sm-8 -->
			</div><!-- row -->
			
			<div class="portfolioContainer  margin-b-50">

				<div class="p-item branding">
					<a class="img" href="https://www.hotelmadero.com/en/" target="_blank" data-fluidbox>
						<img src="../assets/portfolio/madero-uva.jpg" alt=""></a>
				</div><!-- p-item -->
				
				<div class="p-item branding">
					<a href="https://www.facebook.com/beerselcerveceria" target="_blank" data-fluidbox>
						<img src="../assets/portfolio/beersel2.jpg" alt=""></a>
				</div><!-- p-item -->

				<div class="p-item web-design">
					<a href="https://www.paradislatin.com/" target="_blank" data-fluidbox>
						<img src="../assets/portfolio/paradislatin-logo.png" alt=""></a>
				</div><!-- p-item -->

				<div class="p-item  web-design">
					<a target="_blank" href="http://comme-chez-maman.com/" data-fluidbox>
						<img src="../assets/portfolio/comme_chez_maman.png" alt=""></a>
				</div><!-- p-item -->

				<div class="p-item web-design mx-auto my-auto">
					<a target="_blank" href="http://www.epmt.fr/" data-fluidbox>
					<img src="../assets/portfolio/epmt.svg" alt="epmtth"></a>
				</div><!-- p-item -->

				<div class="p-item web-design">
					<a target="_blank" href="https://www.leburgundy.com/" data-fluidbox>
					<img src="../assets/portfolio/burgundy.png" alt=""></a>
				</div><!-- p-item -->
				
				<div class="p-item graphic-design">
					<a href="http://miabistropuntadeleste.com/" target="_blank" data-fluidbox>
						<img src="../assets/portfolio/miaBistrot.png" alt=""></a>
				</div><!-- p-item -->
				
				<div class="p-item branding">
					<a href="http://curiocollection3.hilton.com/en/hotels/argentina/anselmo-buenos-aires-curio-collection-by-hilton-BUEBAQQ/index.html" target="_blank"  data-fluidbox>
						<img src="../assets/portfolio/anselmo.jpg" alt=""></a>
				</div><!-- p-item -->
					
			
			</div><!-- portfolioContainer -->
		</div><!-- container -->
	</section><!-- portfolio-section -->

	<!-- paris: web design -->
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: 
    	mapGetters({
      	data: 'getData'
  	}),
	methods: {
		 changeFilter() {
			 let text = '';
			 switch (this.$store.state.lang) {
				 case "FR":
					 text = 'TOUT'
					 break;
			 	 case "EN":
					 text = 'ALL'
					 break;
				 case "ES":
					 text = 'TODO'
					 break;
				 default:
					 break;
			 }
			 return text;
		}
	}
}
</script>

<style scoped>
.portfolio-section{ position: relative; }

.portfolio-section .portfolioFilter{ margin-top: 60px; color: #666; }

.portfolio-section .portfolioFilter a{ margin: 10px 10px 0 0; }

.portfolio-section .portfolioFilter a.current{ color: #3782aa; }

.portfolio-section .portfolioContainer{ margin-left: -15px; margin-right: -15px; }

.portfolio-section .p-item{ width: 25%; padding: 0 7.5px 0px; margin-top: 15px; }

.portfolio-section .p-item a{ display: inline-block; position: relative; }

img:hover {
	transform: scale(1.02);
    transition: 0.1s;
}


@media only screen and (max-width: 767px) {
	.portfolio-section{ padding-bottom: 0; }
	.portfolio-section .portfolioFilter{ margin: 0px 0 10px; }
	.portfolio-section .portfolioContainer{ margin-left: 0; margin-right: 0; }
	.portfolio-section .p-item{ width: 50%; padding: 0 15px 0px; }
	.portfolio-section .p-item{ max-width: 400px; }
}

@media only screen and (max-width: 575px) {
	.portfolio-section .p-item{ width: 100%; }
}
</style>
