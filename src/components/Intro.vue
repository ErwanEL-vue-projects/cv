<template>
    <section class="intro-section">
		<div class="container">
			<div class="row">
				<div class="col-md-1 col-lg-2"></div>
				<div class="col-md-10 col-lg-8">
					<div class="intro">
						<div class="profile-img"><img src="../assets/header/juan.jpg" alt=""></div>
						<h2><b>Erwan EL</b></h2>
						<h4 class="font-blue">{{ data.infos.title }}</h4>
						<div class="margin-tb-30">
							<div class="row mx-auto">
								<div class="col-md-6 col-lg-5 col-sm-12 mx-auto">
									<ul class="information">
										<li><b>{{ data.infos.nationality.title }}:</b>&nbsp;{{ data.infos.nationality.value }}</li>
										<li><b>{{ data.infos.dob.title }}:</b>&nbsp;{{ data.infos.dob.value }}</li>
										<li><b>Mail:</b>&nbsp;{{ data.infos.mail }}</li><li><b>Tel/Wsp:</b>&nbsp;{{ data.infos.tel }}</li>
										</li><li><b>Loc:</b>&nbsp;{{ data.infos.location }}</li>
									</ul>
								</div>
								<div style="padding: 0 8px" class="col-md-6 col-lg-5 col-sm-12 mx-auto">
										<ul id="languages" class=" list-group">
											<li class="list-group-item">{{ data.infos.languages.title }}</li>
											<li class="list-group-item"><b>{{ data.infos.languages.english.title }}:</b>&nbsp;{{data.infos.languages.english.nivel}}</li>
											<li class="list-group-item"><b>{{ data.infos.languages.spanish.title }}:</b>&nbsp;{{data.infos.languages.spanish.nivel}}</li>
											<li class="list-group-item"><b>{{ data.infos.languages.french.title }}:</b>&nbsp;{{data.infos.languages.french.nivel}}</li>
										</ul>
								</div>
							</div>
						</div>
						<ul class="social-icons">
							<li><a href="mailto:leblois.erwan@hotmail.fr" data-toggle="tooltip" data-placement="bottom" :title="switchTooltipMail()"><i class="ion-android-mail"></i></a></li>
							<li><a :href="switchHref()" download="cv-erwan-leblois" data-toggle="tooltip" data-placement="bottom" :title="switchTooltipDownload()"><i class="ion-android-download"></i></a></li>
						</ul>
					</div><!-- intro -->
				</div><!-- col-sm-8 -->
			</div><!-- row -->
		</div><!-- container -->
	</section><!-- intro-section -->
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: 
	  mapGetters({
		data: 'getData',
		lang: 'getLang'
	}),
	methods: {
		switchTooltipMail () {
			let text = ''
			switch (this.lang) {
				case 'FR':
					return text = "Envoyer un courrier"
					break;
				case 'EN':
					return text = "Send a mail"
					break;
				case 'ES':
					return text = "Enviar un correo"
					break;
				default:
					break;
			}
		},
		switchTooltipDownload () {
			let text = ''
			switch (this.lang) {
				case 'FR':
					return text = "Télécharger le CV"
					break;
				case 'EN':
					return text = "Download CV"
					break;
				case 'ES':
					return text = "Descargar CV"
					break;
				default:
					break;
			}
		},
		switchHref () {
          let path = '';
          switch (this.lang) {
                case 'FR':
                    path = '/static/cv/cv-french.pdf'
					break;
				case 'EN':
                    path = '/static/cv/cv-english.pdf'
					break;
				case 'ES':
                    path = '/static/cv/cv-spanish.pdf'
					break;
				default:
					break;
            }
            return path;
      }
	}
};
</script>

<style scoped>

.intro-section{ padding-top: 200px; position: relative; background-size: cover; 
	z-index: 1;background-image: url(../assets/header/resto.jpg); }

.intro-section:before{ content:''; z-index: -1; position: absolute; top: 0; bottom: 0; left: 0; 
	right: 0; background: rgba(0,0,0, .3);}
	
.intro-section:after{ content: ''; position: absolute; bottom: 0; left: 0; right: 0;
	height: 150px; z-index: -1; background: #fff;  }

.intro{ padding: 0 20px; margin-top: 100px; text-align: center; background: #fff; }

.intro .profile-img{ 
	width: 125px; 
	margin: 0 auto; 
	overflow: hidden;
	position: relative; 
	top: -100px; 
	margin-bottom: -70px;  
}

.intro .profile-img img{ 
	width: 100%;
	height: 155px;
	object-fit: cover;
	border: 4px solid #023859;
    outline: 2px solid white;
}

.intro .information > li{ display: block; margin: 5px 0; }


#languages {
	height: 100%;
    margin: auto;
    width: 100%;
}

#languages li {
	background-color: #f1f2eb;
	color: #3782aa;
}

#languages li:first-child {
	justify-content: center;
	background-color: #0f5a8c;
	color: white;
}

.intro .social-icons > li > a{ height: 35px; line-height: 35px; width: 35px; border-radius: 20px; 
	overflow: hidden; z-index: 1; position: relative; margin: 0 5px 5px; background: #0f5a8c; color: #fff; }

.intro .social-icons > li > a:after{ content: ''; position: absolute; bottom: 0; left: 0; right: 0;
	top: 0; z-index: -1; border-radius: 20px; background: #3782aa; 
	-webkit-transition: all .2s ease; transition: all .2s ease;
	-webkit-transform: scale(0); transform: scale(0); }

.intro .social-icons > li > a:hover:after{ -webkit-transform: scale(1); transform: scale(1); }


@media only screen and (max-width: 992px) {
	.intro-section{ padding-top: 250px; }
}

@media only screen and (max-width: 767px) {
	.intro-section{ padding-top: 350px; }
	#languages {
		margin-top: 15px;
	}
}
</style>
