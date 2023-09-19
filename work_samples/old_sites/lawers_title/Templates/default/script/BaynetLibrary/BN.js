/*!
 * Baynet Library v1
 *
 * @authors     Dennis Baskin, Ofer Tal
 * @version     1
 * @updated     2013-02-07
 */
 
// First, some housekeeping items //

/* add json2 if neccessary */
	var JSON;if(!JSON){JSON={}}(function(){function str(a,b){var c,d,e,f,g=gap,h,i=b[a];if(i&&typeof i==="object"&&typeof i.toJSON==="function"){i=i.toJSON(a)}if(typeof rep==="function"){i=rep.call(b,a,i)}switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i){return"null"}gap+=indent;h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1){h[c]=str(c,i)||"null"}e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]";gap=g;return e}if(rep&&typeof rep==="object"){f=rep.length;for(c=0;c<f;c+=1){if(typeof rep[c]==="string"){d=rep[c];e=str(d,i);if(e){h.push(quote(d)+(gap?": ":":")+e)}}}}else{for(d in i){if(Object.prototype.hasOwnProperty.call(i,d)){e=str(d,i);if(e){h.push(quote(d)+(gap?": ":":")+e)}}}}e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}";gap=g;return e}}function quote(a){escapable.lastIndex=0;return escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b==="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function f(a){return a<10?"0"+a:a}"use strict";if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;if(typeof JSON.stringify!=="function"){JSON.stringify=function(a,b,c){var d;gap="";indent="";if(typeof c==="number"){for(d=0;d<c;d+=1){indent+=" "}}else if(typeof c==="string"){indent=c}rep=b;if(b&&typeof b!=="function"&&(typeof b!=="object"||typeof b.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":a})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e==="object"){for(c in e){if(Object.prototype.hasOwnProperty.call(e,c)){d=walk(e,c);if(d!==undefined){e[c]=d}else{delete e[c]}}}}return reviver.call(a,b,e)}var j;text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})();	
if (!Array.prototype.indexOf){Array.prototype.indexOf = function(elt){var len = this.length >>> 0;var from = Number(arguments[1]) || 0;from = (from < 0) ? Math.ceil(from) : Math.floor(from);if (from < 0)from += len;for (; from < len; from++){if (from in this && this[from] === elt)return from;}return -1;};}
Array.max = function(array) {return Math.max.apply( Math, array )};
Array.min = function(array) {return Math.min.apply( Math, array )};
// do not remove (some templates may still use this) but use Number and String prototype methods instead
function formatCurrency(num) {var sign, cents; num = num.toString().replace(/\$|\,/g,''); if(isNaN(num))num = "0"; sign = (num == (num = Math.abs(num))); num = Math.floor(num * 100 + 0.50000000001); cents = num % 100; num = Math.floor(num/100).toString(); if(cents<10) cents = "0" + cents; for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));return (((sign)?'':'-') + '$' + num);}
var formatNum = {addSeparator:function(num,separator){var beforeComma,decimal,splitNum;var minus='';separator=separator || ",";num = new String(num);splitNum=num.split('.', 2);decimal=splitNum[1];beforeComma = parseInt(splitNum[0]);if(isNaN(beforeComma)) return '';if(beforeComma<0)minus= '-';beforeComma=Math.abs(beforeComma);var n=new String(beforeComma);var a=[];while(n.length > 3){var nn=n.substr(n.length-3);a.unshift(nn);n=n.substr(0,n.length-3);}if(n.length > 0){a.unshift(n);}n = a.join(separator);if(decimal&&decimal!="undefined"){if(decimal.length<1){num=n;} else {num=n+'.'+decimal;}} else{num=n;}num=minus+num;return num;}, formatCurrency:function(num){var sign,cents;num=num.toString().replace(/\$|\,/g,'');if(isNaN(num))num = "0";sign=(num==(num=Math.abs(num)));num=Math.floor(num*100+0.50000000001);cents=num%100;num=Math.floor(num/100).toString();if(cents<10)cents="0"+cents;for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)num=num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));return (((sign)?'':'-')+'$'+num);}};
var protoFormatCurrency = function() {var sign, cents, num = this.toString().replace(/\$|\,/g,'');if(isNaN(num))num = "0";sign = (num == (num = Math.abs(num)));num = Math.floor(num * 100 + 0.50000000001);cents = num % 100;
num = Math.floor(num / 100).toString(); if(cents < 10){ cents = "0" + cents;} for (var i = 0; i < Math.floor((num.length-(1 + i)) / 3); i++){num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4 * i + 3));}return (((sign)?'':'-') + '$' + num);};
var protoAddSeparator = function(separator) {var beforeComma, decimal, splitNum; var minus = '';separator = separator || ",";var num         = new String(this);splitNum    = num.split('.', 2);
	decimal     = splitNum[1];beforeComma = parseInt(splitNum[0]);
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

if(!window.jQuery) {
	if(window.console)console.log("BaynetLibrary requires jQuery. Please check that it is included and that it is loaded prior to the inclusion BaynetLibrary");
}

/* Create Baynet Library */

var BN = {};

(function($){	
	// Module stub
	var DynamicScriptDependencyNode = function(module){
		"use strict";
		
		var DSDNode = this;
		
		var __construct = function(){
			DSDNode.deferredCallbacks = [];
			DSDNode.dependencies = [];
			DSDNode.module = module;
		};
		
		DSDNode.addDeferredCallback = function(callback){
			DSDNode.deferredCallbacks.push(callback);
		};
		
		DSDNode.addDependency = function(dynamicScriptDependencyNode){
			DSDNode.dependencies.push(dynamicScriptDependencyNode);
		};
		
		DSDNode.executeCallbacks = function(){
			for(var i = 0; i < DSDNode.deferredCallbacks.length; i++){
				DSDNode.deferredCallbacks[i].call(this, jQuery, true);
			}
		};
		
		DSDNode.removeDependency = function(moduleName){
			for(var i = 0; i < DSDNode.dependencies.length; i++){
				var dependency = DSDNode.dependencies[i];
				
				if(dependency.module === moduleName){
					DSDNode.dependencies.splice(i, 1);
					
					return;
				}	
			}
		};
				
		__construct();
		
		return DSDNode;
	};
	
	var ScriptManager = new function(){
		"use strict";
		
		var SM = this;
		
		var __construct = function(){			
			SM.loadedscripts  = [];
			SM.dynamicScriptDependencyGraph = new DynamicScriptDependencyNode("root");
		};
		
		SM.getDependencyNodeByName = function(name, nodeLevel){
			nodeLevel = typeof nodeLevel === "undefined" || nodeLevel === null 
				? SM.dynamicScriptDependencyGraph
				: nodeLevel;
			
			if(nodeLevel.module === name){
				return nodeLevel;
			} else {
				for(var i = 0; i < nodeLevel.dependencies.length; i++){
					var dependencyNode = nodeLevel.dependencies[i];
					
					if (dependencyNode.name === name){
						return dependencyNode;
					} else {
						return SM.getDependencyNodeByName(name, dependencyNode);
					}
				}
			}
			
			return null;
		};
		
		SM.hasDependencyNode = function(name){			
			return SM.getDependencyNodeByName(name) !== null ? true : false;
		};
		
		SM.isScriptLoaded = function(script){
			if(SM.loadedscripts.indexOf(script) === -1){
				return false;
			} else {
				return true;	
			}
		};
		
		__construct();
		
		return SM;
	};
	
	// Create Baynet Library
	BN = BaynetLibrary = (new function(){
		"use strict";
		
		var BaynetLibrary = this;
		
		var __construct = function(){
			BaynetLibrary.SCRIPT_ROOT = pageInfo.bnModulesUrl;
			BaynetLibrary.debugMode   = false;
			BaynetLibrary.type        = "library";
		};
		
		var _addModule = function(){
			//var module = new BNModule(moduleName, moduleExport);
			//ScriptManager.push(BNModule);
		};
		
		// Please do not use to arbitrarily add properties to library
		// only use to add namespaces to keep order
		var _createNamespace = function(namespace){
			if(false === BN.hasOwnProperty(namespace)){
				BN[namespace] = {
					type: "namespace"
				};
			} else {
				BN.log("BN :: " + namespace + " :: namespace already exists in current context");
			}
		};
		
		BaynetLibrary.createCookie = function (name, value, days) {
	        if (days) {
		        var date = new Date();
		        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		        var expires = "; expires=" + date.toGMTString();
	        }
	        else var expires = "";
	        document.cookie = name + "=" + value + expires + "; path=/";
        };
		
		BaynetLibrary.define = function(namespace, moduleName, callback){
			_createNamespace(namespace);
			//_addModule(moduleName, moduleExport);
			
			//(function() { callback(); })();
			
			callback.call({
				moduleName : namespace + "." + moduleName
			}, jQuery);			
		};
        
        BaynetLibrary.eraseCookie = function(name) {
            BN.createCookie(name, "", -1);
        };
		
		BaynetLibrary.formatNum = {
			addSeparator : function(num,separator){
				var minus = '',
					beforeComma,
					decimal,
					splitNum,
					n,
					a; 
				
				separator=separator || ",";
				
				num = new String(num);
				splitNum = num.split('.', 2);
				decimal = splitNum[1];
				beforeComma = parseInt(splitNum[0], 10);
				
				if(isNaN(beforeComma)){
					return '';
				}
				
				if(beforeComma < 0){
					minus= '-';
				}
				
				beforeComma = Math.abs(beforeComma);
				
				n = new String(beforeComma);
				a = [];
				
				while(n.length > 3){
					var nn = n.substr(n.length-3);
					
					a.unshift(nn);
					n = n.substr(0, n.length-3);
				}
				
				if(n.length > 0){
					a.unshift(n);
				}
				
				n = a.join(separator);
				
				if(decimal && decimal != "undefined"){
					if(decimal.length < 1){
						num = n;
					} else {
						num = n + '.' + decimal;
					}
				} else {
					num = n;
				}
				
				num = minus + num;
				
				return num;
			}, 
			
			formatCurrency : function(num){
				var sign,
					cents;
					num = num.toString().replace(/\$|\,/g,'');
					
				if(isNaN(num)){
					num = "0";
				} 
				
				sign = ( num == (num = Math.abs(num)) );
				num = Math.floor(num*100+0.50000000001);
				cents = num % 100;
				num = Math.floor(num/100).toString();
				if(cents < 10){
					cents = "0" + cents;
				}
				
				for(var i = 0; i < Math.floor((num.length-(1+i))/3); i++){
					num = num.substring(0, num.length-(4*i+3)) + ',' + num.substring(num.length-(4*i+3));
				}
				
				return (((sign)?'':'-')+'$'+num);
			}
		};
		
        BaynetLibrary.getCookie = function(name) {
	        var nameEQ = name + "=";
	        var cookieArray = document.cookie.split(';');

	        for(var i = 0; i < cookieArray.length; i++) {
		        var cookie = cookieArray[i];

		        while (cookie.charAt(0) == ' '){
                    cookie = cookie.substring(1, cookie.length)
                };
		        if (cookie.indexOf(nameEQ) == 0){
                    return cookie.substring(nameEQ.length, cookie.length);
                }
	        }

	        return null;
        };
		
		BaynetLibrary.loadCSS = function(path, id){
			if(document.querySelectorAll("link#" + id).length !== 0){
				return;	
			}
			
			var head     = document.getElementsByTagName( 'head' )[0],
				linkNode = document.createElement( 'link' );
			   
			linkNode.id   = id;
			linkNode.href = path;
			linkNode.rel  = "stylesheet";
			linkNode.type = "text/css";
			
			head.appendChild(linkNode);
			
			return linkNode;
		};
		
		// for compatability with browsers that do not handle
		// console logs when console is not open (IE)
		BaynetLibrary.log = function(){
			var args = Array.prototype.slice.call(arguments),
				i;
			
			if(window.console){
				for (i = 0; i < args.length; i++){
					var arg = args[i];
					
					if(arg instanceof Error){
						console.log( 
							"---------------------------------\n\r\ ERROR:: " + arg.message +
							(arg.hasOwnProperty("fileName") ? " :: " + arg.fileName : "") + 
							(arg.hasOwnProperty("lineNumber") ? " :: " + arg.lineNumber : "") +
							"\n\r\---------------------------------" 
						);
					} else {
						console.log(args[i]);	
					}
				}
				
				if(BN.debugMode === true)console.trace();
			}
		};
		
		BaynetLibrary.randomizeArray = function(array){
			var oldArray = array;
			var randomizedArray = [];
			var initArrayLength = oldArray.length;
			
			for(var i = 0; i < initArrayLength; i++){
				var randomIndex = Math.floor(Math.random() * oldArray.length);
				var arrayItem = oldArray[randomIndex];
				
				randomizedArray.push(arrayItem);
				oldArray.splice(randomIndex, 1);
			}
			
			return randomizedArray;
		};
		
		// Allows string templating. replaces items in curly braces(ex: {class})
		// with specified data. The properties inside the data attribute correspond
		BaynetLibrary.template = function(template, data, defaultValue){
			return template.replace(/\{([^\}]+)\}/g, function(tag, tagName) {
				return String(data[tagName]) || defaultValue || "";
			});
		};
		
		// when calling this method inside of the define method callback,
		// be sure to pass 'this' as the third parameter. 'this' will be set
		// to an object containing the defined module name.
		BaynetLibrary.using = function(modules, callback, moduleDefinition){
			// handle arrays 
			if($.isArray(modules) === true){
				if(modules.length > 1) {
					var first = modules.shift();
					
					BaynetLibrary.using(first, function() {
						BaynetLibrary.using(modules, callback, moduleDefinition);
					}, moduleDefinition);
					
					return;
				}
				else {
					modules = modules[0];
				}
			}						
			/// no array handling beyond this point - modules is a single element
			
			var module = modules.replace(/\s/g, '');
			var moduleUrlArr = module.split(".");
			var moduleURL = "";
			var moduleJS;
			
			for(var j = 0; j < moduleUrlArr.length; j++){
				moduleURL += moduleUrlArr[j];
				if(j < moduleUrlArr.length - 1){
					moduleURL += "/";
				}
			}
			
			moduleJS = this.SCRIPT_ROOT + moduleURL + ".js";
			
			if (ScriptManager.isScriptLoaded(moduleJS) === false) {
				// checking if moduleDefinition is equal to window
				// in the case that "this" is passed outside of module define function
				var parentModuleNode = moduleDefinition && moduleDefinition !== window 
					? ScriptManager.getDependencyNodeByName(moduleDefinition.moduleName) 
					: ScriptManager.getDependencyNodeByName("root");
				var childModuleNode = ScriptManager.getDependencyNodeByName(module);
				
				if(moduleDefinition && childModuleNode !== null) {
					// the child module is already loaded, do nothing	
				} else {
					var deferredCallback = function(jQuery, success) {
						
						// if the current child node has dependencies, it means using was called
						// when it was initialized, the callback must be deferred
						if(childModuleNode.dependencies.length === 0) {
							if(success) {
								callback.call(this, jQuery);	
							}
							parentModuleNode.removeDependency(childModuleNode.module);
							
							// after executing the current callback, call parent's callback 
							// it will check if it has any addtional deps. and continue to execute callbacks in order as needed
							for(var i = 0; i < parentModuleNode.deferredCallbacks.length; i++){ 
								if(typeof parentModuleNode.deferredCallbacks[i] === "function"){
									parentModuleNode.deferredCallbacks[i].call(this, jQuery, success);
								}
							}
						}
					};
					
					childModuleNode = new DynamicScriptDependencyNode(module);
					
					if(ScriptManager.hasDependencyNode(module)){
						var loadingModuleNode = ScriptManager.getDependencyNodeByName(module);
						
						loadingModuleNode.addDeferredCallback(deferredCallback);
					} else {
						childModuleNode.addDeferredCallback(deferredCallback);
						
						// before calling the async injection of the script we MUST register the dependency in the parent node
						parentModuleNode.addDependency(childModuleNode);
					
						$.ajax({ 
							type        : "GET", 
							url         : moduleJS, 
							dataType    : "script", 
							async       : true,
							crossDomain : true,
							cache       : true,
							success     : function(){
								ScriptManager.loadedscripts.push(moduleJS);
								
								childModuleNode.executeCallbacks();
								//deferredCallback.call(this, jQuery, true);
							},
							error    : function (data, text) { 
								deferredCallback.call(this, jQuery, false);
														
								BN.log(data); 
								BN.log(text); 
							} 
						});
					}
					
				}	
								
			} else {
				callback.call(this, jQuery);
			
			}
		};
		
		__construct();
		
		return BaynetLibrary;
	});
	

})(jQuery);

 


