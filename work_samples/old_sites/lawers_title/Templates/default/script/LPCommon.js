
var popupWindowsByFamily = [];
function closeWin(popupFamily){	
	if (popupWindowsByFamily[popupFamily] != null){
		if(!popupWindowsByFamily[popupFamily].closed)
			popupWindowsByFamily[popupFamily].close();
	}
}

function popUpCWin(url, type, pxWidth, pxHeight, popupFamily) {
	var pxLeft = (screen.availWidth - pxWidth)/2;
	var pxTop = (screen.availHeight - pxHeight)/2;
	return popUpWin(url, type, pxTop, pxLeft, pxWidth, pxHeight, popupFamily);	
}
function popUpWin(url, type, pxTop, pxLeft, pxWidth, pxHeight, popupFamily){
	if( popupFamily!=null && popupFamily != "" ) {
		closeWin(popupFamily);
	}
	
	if (type == "fullScreen"){
		pxWidth = screen.availWidth - 10;
		pxHeight = screen.availHeight - 160;
		pxTop=0;
		pxLeft=0;
	}
	
	var tools="";
	if (type == "standard" || type == "fullScreen") tools = "resizable,toolbar=yes,location=yes,scrollbars=yes,menubar=yes,width="+pxWidth+",height="+pxHeight+",top="+pxTop+",left="+pxLeft;
	if (type == "scroll-console") tools = "resizable,toolbar=no,location=no,scrollbars=yes,width="+pxWidth+",height="+pxHeight+",top="+pxTop+",left="+pxLeft;
	if (type == "console") tools = "resizable,toolbar=no,location=no,scrollbars=no,width="+pxWidth+",height="+pxHeight+",top="+pxTop+",left="+pxLeft;
	var newWindow = window.open(url, 'newWin', tools);
	newWindow.focus();
	
	if( popupFamily!=null && popupFamily != "" ) {
		popupWindowsByFamily[popupFamily] = newWindow;
	}
	return false; // used so that onclick can return this value and suppress the link
}


/**
 * cross browser function to ADD an event callback to an element
 * very useful for adding stuff to window.onload without harming existing callbacks
 **/
 // if mootools is included, use the mootools implementation instead
function LPAddEvent(obj, evType, fn, useCapture){
	  if (obj.addEventListener){
	    obj.addEventListener(evType, fn, useCapture);
	    return true;
	  } else if (obj.attachEvent){
	    var r = obj.attachEvent("on"+evType, fn);
	    return r;
	  } else {
	    //alert("Handler could not be attached");
	  }
} 
if( window.addEvent ) {
	if(window.mooAddEventReplaced!==true) {
		window.mooAddEventReplaced = true; // once!
		window.mooAddEvent = window.addEvent;
		window.addEvent = function() {
			if( arguments.length > 2 ) {
				return window.LPAddEvent(arguments[0],arguments[1],arguments[2],arguments[3]);
			}
			else {
					return window.mooAddEvent(arguments[0],arguments[1]);		
			}
		}
	}
}
else {
	window.addEvent = LPAddEvent;
}

/**
 * cross browser function to REMOVE an event callback from an element
 * reverses the effect of addEvent
 **/
function removeEvent(obj, evType, fn, useCapture){
  if (obj.removeEventListener){
    obj.removeEventListener(evType, fn, useCapture);
    return true;
  } else if (obj.detachEvent){
    var r = obj.detachEvent("on"+evType, fn);
    return r;
  } else {
    //alert("Handler could not be removed");
  }
} 


/**  support for Multi Level Menus -- requires mootools **/
function MultiLevelMenu_onload() {
	MultiLevelMenu_Init('hNavBar');
	MultiLevelMenu_Init('NavBar');
	MultiLevelMenu_Init('BotNavBar');
}
function MultiLevelMenu_Init(containerId){
  var container = $(containerId);
  if(container==null)
  	return;
  
  // if the menu is not yet displayed (e.g. intro flash) it doesn't have size. in this case, call init again in 300ms
  if(container.getSize().size.x<=0) {
	(function() {  MultiLevelMenu_Init(containerId); }).delay(300);
	return;
  }

  $$('#'+containerId).each(function(el) {
    if( el.getStyle('position')=='relative' ) {
	  // horizontal bar
	  if(el.getAttribute('ALLOW_MENU_FOLD')!='0') {
		  el.getChildren().filterByTag('li').each(function(li) {
			li.PREF_WIDTH = li.getSize().size.x;
		  });
		  el.addEvent('resize', function() {
			var totalW = 0;	
			var liMovedToDummy = false;
			var maxWidth = el.getParent().getSize().size.x;
			el.getChildren().filterByTag('li').each(function(li) {
				if(li.id=='dummyMenu') {
					
				}
				else {
					if( liMovedToDummy || totalW + li.PREF_WIDTH > maxWidth ) {
						var dummyUl = MultiLevelMenu_GetDummyMenu(el);
						li.injectInside(dummyUl.getChildren().filterByTag('ul')[0]);
						liMovedToDummy = true;
					}
					else
						totalW += li.PREF_WIDTH;
				}
			});
		  });
		  el.fireEvent('resize');
	  }
	    
	  // fixes IE offsetParent bug by giving the UL any content (\xA0 = &nbsp;) so it has layout.
	  if(window.ie) {
		  /*
		  var dummyDiv = new Element('li');
		  dummyDiv.setStyles({
			height: '1px',
			width: '1px',
			overflow: 'hidden',
			position: 'relative',
			top: '-3px',
			left: '-3px'
		  });
		  dummyDiv.appendText('\xA0'); 
		  dummyDiv.injectInside(el);
		  */
		  // OT 3/26/2010 alternate way to give the ul "layout", does not cause
		  // other layout problems (large horiz-scrollbar as seen in account id 8824)
		  el.setStyle('zoom','1');
	  }
	}
	// horizontal and vertical - give classes for first and last li
	var childLiElems = el.getChildren().filterByTag('li');
	if( childLiElems!=null && childLiElems.length > 0 )
		childLiElems[0].addClass('first');
	if( childLiElems!=null && childLiElems.getLast()!=null )
		childLiElems.getLast().addClass('last');	
  });
	
  var isStickyMenu = $(containerId).getAttribute('STICKY_MENU')=='1';  
  $$('#'+containerId+' li').each(function(el) { 
		el.fShowMenu = function(event){
			var ev = new Event(event);
			//debugLog("fShowMenu: " + el.getChildren().filterById('navLabel')[0].innerText);
			
			// cancel all hide/exit timeouts and fade outs on this and parent UL/LIs
			var climbEl=el;
			if( el.getChildren().filterByTag('ul').length>0 )
				climbEl = el.getChildren().filterByTag('ul')[0];
			for(; climbEl!=null && (climbEl.getTag()=='ul' || climbEl.getTag()=='li'); climbEl=climbEl.getParent()) {
				if(climbEl.getTag()=='li') {
					if( climbEl.exitTimeout!=null ) 
						window.clearTimeout(climbEl.exitTimeout);
					climbEl.exitTimeout=null;
					if( climbEl._hideMenuTimeout!=null )
						window.clearTimeout(climbEl._hideMenuTimeout);
					climbEl._hideMenuTimeout=null;	
				}
				else {
					if(climbEl.fadeFx!=null) {
						climbEl.fadeFx.stop();
						climbEl.fadeFx.set(1);
					}
				}
			}

			
			if( isStickyMenu ) {
				el.getParent().getChildren().each(function(sibling_el) {
					if( sibling_el!=el && sibling_el.hasClass('hover') && sibling_el.fHideMenu!=null ) {
						sibling_el.fHideMenu();	
					}
				});
			}
			
			el.addClass('hover');
			var childLabelSpans = el.getChildren().filterById('navLabel').each( function(cls) {
				cls.addClass('hover');					
			});
			
			var bIsParentMenuOpenLeft = (el.getParent().getAttribute('MENU_OPEN_DIR') == 'LEFT');
			
			var childMenuElems = el.getChildren().filterByTag('ul').each( function(cme) {
			  //alert('display:' + el.getStyle('display')	+' float:' + el.getStyle('float') + ' styleFloat:' + el.getStyle('styleFloat') + ' cssFloat:' +el.getStyle('cssFloat')); 		
  			  if(isStickyMenu && cme.getStyle('opacity')==1 && cme.getStyle('display')!='none' ) {				  
				  // don't do any fade in/out effect in this case
			  }
			  else {
				  if(el.getStyle('display')!='inline' && el.getStyle('float')!='left' && el.getStyle('styleFloat')!='left' && el.getStyle('cssFloat')!='left') {
					  //alert('vertical');
					  // vertical popup menus
						var elCoords = el.getCoordinates();
						var elLeft = elCoords.left;
						var elRight = elCoords.right;
						var winWidth = window.getScrollWidth();					
						cme.setStyles({
							display: 'block',
							top: '0px',
							opacity: 0.1,
							left: el.getSize().size.x
						});
						var cmeWidth = cme.getSize().size.x;
						if( (!bIsParentMenuOpenLeft && ( elRight + cmeWidth < winWidth )) || (bIsParentMenuOpenLeft && ( elLeft - cmeWidth < 0 )))
						{
							cme.setAttribute('MENU_OPEN_DIR','RIGHT');
						}
						else {
							cme.setAttribute('MENU_OPEN_DIR','LEFT');
							cme.setStyles({							
								left: (-cmeWidth) + 'px'
							});							
						}
					}
					else {		
						//alert('horizontal');
						cme.setStyles({
							display: 'block',
							top: el.offsetHeight + 'px',						
							opacity: 0.1,
							left: '0px'
						});	
						if( cme.offsetParent!=el ) { // horizontal menu opening horizontal submenu
							cme.setStyles({
								width: el.getParent().offsetWidth + 'px'
							});		
						}
				  }
				  if( cme.fadeFx==null )
					  cme.fadeFx = cme.effect('opacity', {duration: 200,transition: Fx.Transitions.linear, wait: false});
				  //cme.fadeFx.options.onComplete = Class.empty;			  
				  cme.fadeFx.set(0.1);				  
				  cme.fadeFx.start(0.1,1);
			  }
			});			
			//myEffect = el.effect('margin-left', {duration: 100,transition: Fx.Transitions.linear, wait: true}).start('10','30');
		};		 								  
		el.addEvent('mouseenter',el.fShowMenu);
		
		el.fHideMenu = function(){
			//debugLog("fHideMenu: " + el.getChildren().filterById('navLabel')[0].innerText);
			el.removeClass('hover');
			el.getChildren().filterById('navLabel').each( function(cls) {
				cls.removeClass('hover');					
			});
			// delay real hiding of menu to reduce flicker caused by margind/gaps 
			if( el._hideMenuTimeout!=null ) {
				window.clearTimeout(el._hideMenuTimeout);
			}
			el._hideMenuTimeout = window.setTimeout(function() {
				el.fHideMenu2();
				el._hideMenuTimeout = null;
			},100);
		};
		el.fHideMenu2 = function(){	
			//debugLog("fHideMenu2: " + el.getChildren().filterById('navLabel')[0].innerText);
			el.exitTimeout = window.setTimeout(function() {				
				el.getChildren().filterByTag('ul').each( function(cme) {
					cme.setStyles({
					display: 'none'
				});
				el.exitTimeout=null
			});							
			},200);
			el.getChildren().filterByTag('ul').each( function(cme) {
				cme.setStyles({ opacity: 1 });
				if( cme.fadeFx==null ) 
			  		cme.fadeFx = cme.effect('opacity', {duration: 200,transition: Fx.Transitions.linear, wait: false});
				/*cme.fadeFx.options.onComplete = function() {
					alert('here');
					cme.setStyles({
						display: 'none'
					});
				};*/
				cme.fadeFx.set(1);
				cme.fadeFx.start(1,0);
			});		  
		};		
		// non-sticky menus and menus below the 1st level (even sticky) need to hookup the ouseleave event
		if( !isStickyMenu || el.getParent().id!=containerId ) {
			el.addEvent('mouseleave',el.fHideMenu);
		}
		
	})
}
if( window.addEvent ) 
{
  window.addEvent('domready',MultiLevelMenu_onload);
}

/*function debugLog(s) {
	var logDiv = $("BN_DEBUGLOG_DIV");
	if(logDiv==null) {
		logDiv = new Element('div');
		logDiv.injectInside($(document.body));
	}
	logDiv.innerHTML = logDiv.innerHTML + "<br/>" + s;
}*/

function MultiLevelMenu_GetDummyMenu(ul) {
	var existing = ul.getChildren().filterById('dummyMenu');
	if( existing && existing.length>0 )
		return existing[0];
	
	var newMenu = new Element('li').setProperty('id','dummyMenu');
	var newLabel = new Element('span').setProperty('id','navLabel').setText('...');
	newMenu.adopt(newLabel);
	var newUl = new Element('ul')
	newMenu.adopt(newUl);
	
	newMenu.injectInside(ul);
	return newMenu;
}


function SetRoundCornerPanel()
{
	if(window.RUZEE) {
		var notPrintView = getURLParam('prt').length!="1";
		 $$('.defaultRoundCornerPanel').each( function(el) {
			if(notPrintView){
				var shadowedBorder    = RUZEE.ShadedBorder.create({ corner:4, shadow:9, border:1 });
				shadowedBorder.render(el.id);
			}else{
				el.setStyle('border', 'solid 1px #999');
			}
		 
		 });
		 
		 
		 $$('.splitRoundCornerPanel').each( function(el) {
			 if(notPrintView)
			 {
				var splitBorderTop    = RUZEE.ShadedBorder.create({ corner:4, shadow:9, edges:"tlr" });
				var splitBorderBottom = RUZEE.ShadedBorder.create({ corner:4, shadow:9, edges:"blr" });
				splitBorderBottom.render(el.getElementsByTagName('div')[1]);
				splitBorderTop.render(el.getElementsByTagName('div')[0]);
			 }
			 else
			 {
				el.setStyle('border', 'solid 1px #999');
			 }
		 });
	}
}

if( window.addEvent ) {
	//if(getURLParam('prt').length!="1")
  	window.addEvent('load',SetRoundCornerPanel);
}


function getURLParam(strParamName){
	var strReturn = "";
	var strHref = window.location.href;
	
	if ( strHref.indexOf("?") > -1 ){
		var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
		var aQueryString = strQueryString.split("&");
		
		for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
			if (aQueryString[iParam].indexOf(strParamName + "=") > -1 ){
				var aParam = aQueryString[iParam].split("=");
				strReturn = aParam[1];
				break;
			}
		}
	}
	
	return strReturn;
}

function include_js_once(src, bInline) {
  var scripts = document.getElementsByTagName('script');
  if(scripts) {
    for(var k=0; k<scripts.length; k++) {
      if(scripts[k].src == src) {
        return;
      }
    }
  }
  // script not found
  if(bInline) {
	document.write('<' + 'script');
    document.write(' language="javascript"');
    document.write(' type="text/javascript"');
    document.write(' src="' + src + '">');
    document.write('</' + 'script' + '>');
  }
  else {
	  var script = document.createElement('script');
	  script.src = src;
	  script.type = 'text/javascript';
	  (document.getElementsByTagName('HEAD')[0] || document.body).appendChild(script);
  }
}

function iBoxOpenFrame(url, title, param) {
    var winW = 630, winH = 460;
	if (document.body && document.body.offsetWidth) {
	 winW = document.body.offsetWidth;
	 winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
	 winW = document.documentElement.offsetWidth;
	 winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
	 winW = window.innerWidth;
	 winH = window.innerHeight;
	}
	
	if(param==null)
    	param={height:500, width:900};
	if(param.height > winH-90) {
		param.height = winH-90;
	}
    var htm = "<iframe frameborder=\"0\" style=\"width:"+(param.width-0)+"px;height:"+(param.height-0)+"px\" src=\""+url+"\"></iframe>"
    iBox.show(htm, title, param);	
};

Array.max = function(array) {return Math.max.apply( Math, array )};
Array.min = function(array) {return Math.min.apply( Math, array )};

// do not remove (some templates may still use this) but use Number and String prototype methods instead
function formatCurrency(num) {var sign, cents; num = num.toString().replace(/\$|\,/g,''); if(isNaN(num))num = "0"; sign = (num == (num = Math.abs(num))); num = Math.floor(num * 100 + 0.50000000001); cents = num % 100; num = Math.floor(num/100).toString(); if(cents<10) cents = "0" + cents; for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));return (((sign)?'':'-') + '$' + num);}
var formatNum = {addSeparator:function(num,separator){var beforeComma,decimal,splitNum;var minus='';separator=separator || ",";num = new String(num);splitNum=num.split('.', 2);decimal=splitNum[1];beforeComma = parseInt(splitNum[0]);if(isNaN(beforeComma)) return '';if(beforeComma<0)minus= '-';beforeComma=Math.abs(beforeComma);var n=new String(beforeComma);var a=[];while(n.length > 3){var nn=n.substr(n.length-3);a.unshift(nn);n=n.substr(0,n.length-3);}if(n.length > 0){a.unshift(n);}n = a.join(separator);if(decimal&&decimal!="undefined"){if(decimal.length<1){num=n;} else {num=n+'.'+decimal;}} else{num=n;}num=minus+num;return num;}, formatCurrency:function(num){var sign,cents;num=num.toString().replace(/\$|\,/g,'');if(isNaN(num))num = "0";sign=(num==(num=Math.abs(num)));num=Math.floor(num*100+0.50000000001);cents=num%100;num=Math.floor(num/100).toString();if(cents<10)cents="0"+cents;for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)num=num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));return (((sign)?'':'-')+'$'+num);}};

var protoFormatCurrency = function() {
	var sign, cents;
	num = this.toString().replace(/\$|\,/g,'');
	if(isNaN(num))num = "0";
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num * 100 + 0.50000000001);
	cents = num % 100;
	num = Math.floor(num / 100).toString();
	if(cents < 10) cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length-(1 + i)) / 3); i++)
		num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4 * i + 3));	
	return (((sign)?'':'-') + '$' + num);
};
var protoAddSeparator = function(separator) {
	var beforeComma, decimal, splitNum; 
	var minus = '';
	separator = separator || ",";
	num         = new String(this);
	splitNum    = num.split('.', 2);
	decimal     = splitNum[1];
	beforeComma = parseInt(splitNum[0]);
	if(isNaN(beforeComma)) return '';
	if(beforeComma < 0) minus = '-';
	beforeComma = Math.abs(beforeComma);
	var n = new String(beforeComma);
	var a = [];
	while(n.length > 3){
		var nn = n.substr(n.length-3);
		a.unshift(nn);
		n = n.substr(0,n.length-3);
	}
	if(n.length > 0) { a.unshift(n); }
	n = a.join(separator);
	if (decimal && decimal != "undefined")	{
		if(decimal.length < 1) { num = n; }
		else { num = n + '.' + decimal; }
	} else { 
		num = n; 
	}
	num = minus + num;
	return num;
};

Number.prototype.formatCurrency = protoFormatCurrency;
String.prototype.formatCurrency = protoFormatCurrency;
Number.prototype.addSeparator = protoAddSeparator;
String.prototype.addSeparator = protoAddSeparator;

	
if(jQuery){
	jQuery.extend({
		log : function(logmsg) {
			if (window.console && window.console !== "undefined") {
				console.log(logmsg);
			}
		}
	});
}



if (!Array.prototype.indexOf){
	Array.prototype.indexOf = function(elt){
		var len = this.length >>> 0;
		var from = Number(arguments[1]) || 0;
		
		from = (from < 0) ? Math.ceil(from) : Math.floor(from);
		if (from < 0)from += len;
		
		for (; from < len; from++){
			if (from in this && this[from] === elt)return from;
		}
		return -1;
	};
}

