<template>
	<v-app>
		<app-menu />
		<v-toolbar app>
			<app-toolbar />
		</v-toolbar>

		<v-content>
			<app-carousel />
		</v-content>		
		<app-footer />
	</v-app>
</template>

<script>
import Carousel from './Carousel.vue';
import Footer from './Footer.vue';
import Toolbar from './Toolbar.vue';
import Menu from './Menu.vue';
export default {
	components: {'app-footer': Footer, 'app-carousel': Carousel, 'app-toolbar': Toolbar, 'app-menu': Menu}

}
</script>
