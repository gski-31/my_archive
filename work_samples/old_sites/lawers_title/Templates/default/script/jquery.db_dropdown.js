// extends jquery as a db_dropdown method
// apply to the main nav ul or sidebar ul - use orientation to specify behavior

(function($){
	jQuery.fn.db_dropdown = function(opts) {
		
		var defaults = {
			slideDownSpeed 				: 200,
			slideUpSpeed 				: 200,
			orientation					: 'horizontal', // set to horizontal or vertical
			adjustHeight				: false,
			firstLevelPadding			: 1,
			secondLevelPadding			: 1,
			firstLevelOffset			: 0,
			secondLevelOffset			: 0,
			ignoreClass                 : "ignore-dropdown"
		};

		var opts = $.extend( defaults, opts );
		
		return this.each(function() {
			var $this = $(this);
			var lis = $this.children('li').not("." + opts.ignoreClass);
							
			lis.each(function(){
				var $$this = $(this);
				var selected = $$this.find('.selected');
				
				if(selected.length){
					selected.removeClass('selected');
					$$this.addClass('selected');
				}
			});
			
			if(opts.orientation == 'horizontal' ) {
				$this.find('li').not("." + opts.ignoreClass).css({'position':'relative','zoom':'1'}).find('ul').css({'display':'none', 'position' : 'absolute'});
				$this.children('li').not("." + opts.ignoreClass).hover(
					function(){
						var $$this = $(this);
						var $ulFirst = $$this.find('ul:first'); 
						
						$$this.addClass('current');
						
						if($ulFirst.length){
							$ulFirst.css({	visibility: "visible", display: "none", 'top' : $$this.outerHeight() - 1 - opts.firstLevelOffset, "padding-top" : opts.firstLevelPadding + "px"} ).slideDown(opts.slideDownSpeed);
							if($(window).width() < $ulFirst.offset().left + $ulFirst.outerWidth()){
								$ulFirst.css({'left':'auto', 'right':'0'});
							} else {
								$ulFirst.css({'left':'0', 'right':'auto'});
							}
						}
					},
					function(){
						var $$this = $(this);
						var $ulFirst = $$this.find('ul:first'); 
						
						if($ulFirst.length)
							$ulFirst.css({'left':'auto','right':'auto'}).slideUp(opts.slideUpSpeed).css({visibility: "hidden"});
						$$this.removeClass('current');
					}
				);
				
				$this.find("li").not("." + opts.ignoreClass).find("li").hover(
					function(){
						var $$this = $(this);
						var $ulFirst = $$this.find('ul:first'); 
						
						if($ulFirst.length)
							$ulFirst.css({visibility: "visible",display: "none",'left' : $$this.width() - 1 - opts.secondLevelOffset, "padding-left" : opts.secondLevelPadding + "px" }).slideDown(opts.slideDownSpeed);
					},
					function(){
						var $$this = $(this);
						var $ulFirst = $$this.find('ul:first'); 
						
						if($ulFirst.length)
							$ulFirst.slideUp(opts.slideUpSpeed).css({visibility: "hidden"});
					}
				);
				
				$this.css({"z-index":"500", "zoom":"1"});
				if(opts.adjustHeight)$this.height($this.children("li").outerHeight());
			}
			
			
			if(opts.orientation == 'vertical') {
				$this.find('li').not("." + opts.ignoreClass).css({'position':'relative', 'zoom':'1'}).find('ul').css({'display':'none', 'position' : 'absolute'});
				$this.children('li').not("." + opts.ignoreClass).hover(
					function(){
						var $$this = $(this);
						var $ulFirst = $$this.find('ul:first'); 
						
						$$this.addClass('current');
						
						if($ulFirst.length)
							$ulFirst.css({visibility: "visible",display: "none", 'left' : $this.width() - 1 - opts.firstLevelOffset, "padding-left" : opts.firstLevelPadding + "px", 'z-index':'200' }).slideDown(opts.slideDownSpeed);
					},
					function(){
						var $$this = $(this);
						var $ulFirst = $$this.find('ul:first');
						
						if($ulFirst.length)
							$ulFirst.slideUp(opts.slideUpSpeed).css({visibility: "hidden", display: 'none'});
						$$this.removeClass('current');
					}
				);
				
				$this.find("li").not("." + opts.ignoreClass).find("li").hover(
					function(){
						var $$this = $(this);
						var $ulFirst = $$this.find('ul:first');
						
						if($ulFirst.length)
							$ulFirst.css({visibility: "visible",display: "none", 'left' : $$this.outerWidth() - 1 - opts.secondLevelOffset, "padding-left" : opts.secondLevePadding + "px", 'z-index':'200' }).slideDown(opts.slideDownSpeed);
					},function(){
						var $$this = $(this);
						var $ulFirst = $$this.find('ul:first');
						
						if($ulFirst.length)
							$ulFirst.slideUp(opts.slideUpSpeed).css({visibility: "hidden", display: 'none'});
					}
				);
			}
		});
	};
})(jQuery);