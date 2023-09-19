BN.using(["banners.Fader", "autocomplete.Autocomplete", "dropdowns.ResponsiveNavMenu"], function($){

	var imgContainer = $("#imagesContainer"),
		count = imgContainer.find("img").length,
		faderIterator = 1;
	var responsiveNav = new BN.dropdowns.ResponsiveNavMenu("#nav-top", {});
	var banner = new BN.banners.Fader("#hero", {
		fadeSpeed:1000,
		autoPlayFadeSpeed:3000,
		autoPlay:true,
		autoPlayDelay:3000
	}),
	responsiveNav = new BN.dropdowns.ResponsiveNavMenu("#nav-top", {})
	;
	banner.init();
	
	var fadeNextImage = function(){
		imgContainer.find("img").fadeOut(2000);
		imgContainer.find("img").eq(faderIterator).fadeIn(2000);
		
		faderIterator++;
		if(faderIterator > count - 1){
			faderIterator = 0;
		}
	};
		
	// on document ready
	$(function(){
		responsiveNav.init();
		//$('a').attr('target', '_blank');
		//setInterval(fadeNextImage, 12000);
	});	
	
});