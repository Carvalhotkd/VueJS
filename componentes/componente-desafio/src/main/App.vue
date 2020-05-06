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
import Carousel from '@/components/widgets/Carousel.vue';
import Footer from '@/components/template/Footer.vue';
import Toolbar from '@/components/template/Toolbar.vue';
import Menu from '@/components/template/Menu.vue';
export default {
	components: {'app-footer': Footer, 'app-carousel': Carousel, 'app-toolbar': Toolbar, 'app-menu': Menu}

}
</script>
