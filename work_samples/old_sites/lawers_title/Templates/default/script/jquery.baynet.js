/*! baynet jQuery plugin v1.0 by Dennis Baskin | http://baynet.com/ */

(function($){
	var methods = {
		init : function(settings) {
			var opts = {};
			
			var info = {
				company : 'Baynet World Inc',
				authors : 'Dennis Baskin, ',
				version : '1.0'
			}
			
			return this.each(function(){
				if(opts)$.extend( opts, settings );
				// insert default method logic
				//console.log(info);
			});
		},
		
		// check to see if input contains http:// and prefix if necessary
		inputs_add_http : function(settings) {
			var opts = {
				event_method : 'bind', // use bind or live
				event_type   : 'blur'  // use '%single%' or '%multiple% %multiple%' with spaces
			};
			
			return this.each(function(){
				if(settings)$.extend(opts, settings);
				var $this = $(this);
				
				var onEvent = function(){
					var val = $this.val();
					if(val.indexOf('http://') == -1 && val != ''){
						val = 'http://' + val;
						$this.val(val);
					}
				};
				
				if(opts.event_method=='bind')$this.bind(opts.event_type, onEvent);
				if(opts.event_method=='live')$this.live(opts.event_type, onEvent);
			});
		},
			
		inputs_keep_init_val : function(settings) {
			var opts = {
				event_method : "bind", // use bind or live
				use_data     : false
			};
			
			return this.each(function(){
				if(settings)$.extend(opts, settings );
				var $this = $(this);
				
				var init_val = (opts.use_data === true) ? $this.data("originalValue") : $this.val();
				var onFocus = function(){if($this.val()==init_val)$this.val('')};
				var onBlur  = function(){if($this.val()=='')$this.val(init_val)};
				
				if(opts.event_method=='bind')$this.bind({focus:onFocus, blur:onBlur});
				if(opts.event_method=='live')$this.live({focus:onFocus, blur:onBlur});
			});
		},
			
		menus_add_submenu_classes : function(settings) {
			var opts = {
				className : 'hasSubMenu' 
			};
			
			return this.each(function(){
				if(settings)$.extend(opts, settings );
				var $this = $(this);
				
				var submenus = $this.find('ul');
				
				submenus.each(function(){
					$(this).parent('li').addClass(opts.className);				   
				});
			});
		}
	};

	$.fn.baynet = function(method) {
		// Method calling logic
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error('Method ' +  method + ' does not exist in jQuery.baynet' );
		}
	};
})(jQuery);
