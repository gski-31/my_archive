(function(window, $) {
	var contextDefault = {
			SearchCriteria :{
				RequiredOptions   : ["MLS"],
				InstantSearchGuid : "",
				Location          : [],
				BasicOptions      : {},
				ExcludedOptions   : [],
				POIs              : [],
				PropertyType      : [],
				GalleryTypes      : [],
				StatusType        : (pageInfo.SearchResultsPreferences && pageInfo.SearchResultsPreferences['DefaultIDXStatusTypes'] ? pageInfo.SearchResultsPreferences['DefaultIDXStatusTypes'] : []),
				CustomIDXOptions  : [],
				GeoParams         : []
			},
			OrderBy           : "",     // default price.
			OrderDirection    : "DESC", // initial set to descending order. use ASC for ascending
			PageSize          : 10,      // initial number of items per page
			PageNum           : 1,      // initial page is always 1
			CriteriaChanged   : true,
			CurrentView       : "list-view",
			SearchResultsGuid : "",
			MapBounds		  : null
		};

	
	var BaynetSearch = function BaynetSearch(context) {
		return new _BaynetSearch(context);
    };

	var _BaynetSearch = function _BaynetSearch(context) {
		this.authors     = "Dennis Baskin";
		this.lastEdit    = "5-10-2013";
		this.version     = "1.7";
		this.results_url = pageInfo.baseUrl + "search/searchResultHandler.ashx";
		this.search_url  = pageInfo.baseUrl + "Search/SearchCriteriaHandler.ashx";
		this.details_url = pageInfo.baseUrl + "DetailsHandler.ashx";
		this.context     = $.extend(true, {}, contextDefault);
		this.currentData;
		this.current_page;
		this.currentAJAXRequest;
		this.MLSIds = [];
					
		// keep as constants, do not overwrite in script
		this.RESIDENTIAL_PROPERTY = "ResidentialProperty";
		this.COMMON_INTEREST      = "CommonInterest";
		this.LOTS_AND_LAND        = "LotsAndLand";
		this.MULTI_FAMILY         = "MultiFamily";
		
		$.ajaxSetup({dataType : "json", type : "GET"});
	};
	
	_BaynetSearch.prototype = {
		// manipulates context object - adds to SearchCriteria.CustomIDXOptions
		addCustomIdxOption : function(value){
			this.context.SearchCriteria.CustomIDXOptions.push(value);
			
			return this.context.SearchCriteria.CustomIDXOptions;
		},
		
		addDefaultIDXPropertyType : function(data){
			if(this.context.SearchCriteria.PropertyType.length == 0) {
				for(var i = 0; i < data.DefaultIDXPropertyType.length; i++){
				if(-1 === this.context.SearchCriteria.PropertyType.indexOf(data.DefaultIDXPropertyType[i])){
					this.addPropertyType(data.DefaultIDXPropertyType[i]);
					}
				}
			}
		},
		
		addGeoParam : function(geoParamsObject){
			var geoItems = this.context.SearchCriteria.GeoParams;
			for(var i = geoItems.length; i > 0; i--){
				var geoItem = geoItems[i - 1];
				if(geoItem.SearchType == geoParamsObject.SearchType) {
					geoItems.splice((i - 1), 1);
				}
			}
			
			this.context.SearchCriteria.GeoParams.push(geoParamsObject)
		},
		
		// ajax short-hand method - attempts to add Listing to User Favorites
		addListingToFavorites : function(attributes, callbacks, loaderContainer){
			this.ajax({
				type : "GET",
				url  : this.results_url,
				data     : {
					op              : "AddToFavorite",
					ListingId       : attributes.id,
					ListingSource   : attributes.listing_source,
					PropertyAddress : attributes.address
				}
			}, callbacks, loaderContainer, "failed at add listings to favorites", false);

			return this;
		},
		
		// adds ajax loader gif to selected element
		addLoader : function($el){
			if($el.find(".ajax-gif").length < 1) {
				$el.append("<div class='fade' style='height:100%; width:100%;'></div><div class='ajax-gif'></div>");
			}
			
			return $el;
		},
		
		// manipulates context object - adds to SearchCriteria.Location
		addLocation : function(value){
			if(value.constructor === Array){
				for(var i = 0; i < value.length; i++){				
					this.context.SearchCriteria.Location.push(value[i].Location);
				}
			} else if (value.constructor === Object) {
				this.context.SearchCriteria.Location.push(value);	
			}
			
			return this.context.SearchCriteria.Location;
		},
		
		// manipulates context object - adds to SearchCriteria.PropertyType
		addPropertyType : function(value){
			if(-1 === this.context.SearchCriteria.PropertyType.indexOf(value)){
				this.context.SearchCriteria.PropertyType.push(value);
			}
			
			return this.context.SearchCriteria.PropertyType;
		},
		
		// manipulates context object - adds to SearchCriteria.PropertyType
		addStatusType : function(value){
			if(-1 === this.context.SearchCriteria.StatusType.indexOf(value)){
				this.context.SearchCriteria.StatusType.push(value);
			}
			
			return this.context.SearchCriteria.StatusType;
		},

		// manipulates context object - adds to SearchCriteria.RequiredOptions
		addRequiredOption : function(value){
			if(!~this.context.SearchCriteria.RequiredOptions.indexOf(value)){
				this.context.SearchCriteria.RequiredOptions.push(value);
			}
			
			return this.context.SearchCriteria.RequiredOptions;
		},
		
		// manipulates context object - adds to SearchCriteria.POIs
		addPoi : function(value){
			this.context.SearchCriteria.POIs.push(value);	
			
			return this.context.SearchCriteria.POIs;
		},
		
		// low-level ajax request modified to be specific for baynet search request
		ajax : function(opts, callbacks, loaderContainer, errMsg, cancellable, customSuccessCallbacks){
			var _callbacks = {};
			var _err = errMsg || "general ajax error";
			var _this = this;
			callbacks = callbacks || {};
			_callbacks.beforeSend = callbacks.beforeSend || function(){};
			_callbacks.success    = callbacks.success || function(){};
			_callbacks.error      = callbacks.error || function(xhr, errorType, ex) {
				if(errorType == "abort") {
					// ignore
				} else {
					BN.log("An error occured. Please change your search criteria and try again. Details: " + _err);
					if(window.console)console.log({
						"status"  : "error",
						"type"    : "ajax error function",
						"details" : xhr + " :: " + errorType + " :: " + ex,
						"message" : _err
					});
				}
			};

			var _settings = {
				beforeSend : function(){
					if(loaderContainer)$b.addLoader(loaderContainer);
					_callbacks.beforeSend.call();
				},
				success    : function(data){
					if(data === null || data === "undefined"){
						_callbacks.error.apply(this, ["", "return data is null", ""]);
					} else {
						this.currentData = data;
						
						if(customSuccessCallbacks && customSuccessCallbacks.length > 0){
							for(var i = 0; i < customSuccessCallbacks.length; i++){
								customSuccessCallbacks[i].call(_this, data);
							}	
						}
						
						if(loaderContainer)$b.removeLoader(loaderContainer);
						
						_callbacks.success.call(this, data);
					}
				},
				error      : function(xhr, errorType, ex) {	
					_callbacks.error.apply(this, [xhr, errorType, ex]);
					if(loaderContainer)$b.removeLoader(loaderContainer);
				}
			};

			if(opts) _settings = $.extend(_settings, opts);

			if(cancellable === true) {
				if (this.currentAJAXRequest != null && this.currentAJAXRequest.readyState != 4 ) {
					this.currentAJAXRequest.abort();
				}
				
				return this.currentAJAXRequest = $.ajax(_settings);
			
			} else {
				return $.ajax(_settings);
			
			}
		},
		
		// short-hand method for ajax request - analyzes location string
		analyzeLocation : function(location_string, callbacks, loaderContainer){
			return this.ajax({
				url      : this.search_url,
				data: {
					op          : "AnalyzeLocation",
					LocationStr : location_string
				}
			}, callbacks, loaderContainer, "failed at analyze locaton", false, [this.buildMLSIds, this.addLocation]);
		},
		
		// ajax short-hand method - analyzes search string
		analyzeSearch : function(search_string, callbacks, loaderContainer){
			if(typeof search_string === Object)search_string = JSON.stringify(search_string);
			this.ajax({
				url      : this.search_url,
				data: {
					op        : "AnalyzeSearch",
					SearchStr : search_string, // if location -> "{lat:'',long:'',distance:''}"
				}
			}, callbacks, loaderContainer, "failed at analyze search", false, [this.buildMLSIds, this.addLocation]);

			return this;
		},
		
		// adds to current MLSIds array
		buildMLSIds : function(data){
			for(var i = 0; i < data.length; i++){
				var locationItem = data[i];
				var mlsID;
				
				// check if item came in form of location objects directly
				if(locationItem.MlsId && locationItem.MlsId != "undefined" && locationItem.MlsId != undefined){
					mlsID = locationItem.MlsId; // location objects
				} else {
					mlsID = locationItem.Location.MlsId;
				}
						
				if($.inArray(mlsID, this.MLSIds) == -1){
					this.MLSIds.push(mlsID);
				}
			}

			return this.MLSIds;
		},
		
		getMLSIds: function(){
		 	var MLSArr=[];
			var location = this.context.SearchCriteria.Location;
			for(var i = 0; i < location.length; i++){
				var locationItem = location[i];
				var mlsID;
				
				// check if item came in form of location objects directly
				if(locationItem.MlsId && locationItem.MlsId != "undefined" && locationItem.MlsId != undefined){
					mlsID = locationItem.MlsId; // location objects
				} else {
					mlsID = locationItem.Location.MlsId;
				}
						
				if($.inArray(mlsID, MLSArr) == -1){
					MLSArr.push(mlsID);
				}
			}
			return MLSArr.toString();		  
		},

		// sets and gets current page value --- does not modify context (maybe in $b v2?)
		currentPage : function(value){
			if(value)this.current_page = value;
			return this.current_page;
		},
		
		// sets and gets current view value --- does not modify context (maybe in $b v2?)
		currentView : function(value){
			/*if(value)this.current_view_type = value;
			return this.current_view_type;*/
			
			if(value) {
				this.setContext("CurrentView",value);
			}
			else {
				return this.getContext("CurrentView");
			}
		},
		
		// ajax short-hand method - gets various types of capabilities
		getCapability : function(capability, attributes, callbacks, loaderContainer){
			var _data = {};
			var customCallbacks = [];
			switch(capability) {
				case "mls":
					_data["op"]     = "GetMLSCapabilities";
					//_data["MlsId"]  = this.MLSIds.toString();
					_data["MlsId"]  = this.getMLSIds();
					customCallbacks = [this.addDefaultIDXPropertyType];
					break;
				case "gallery":
					_data["op"]              = "GetGalleryCapabilities";
					_data["GalleryType"]     = JSON.stringify([attributes.galleryType]);
					if(attributes.officeId) _data["GallerySearchId"] = attributes.officeId;
					break;
				case "propertyType":
					_data["op"]           = "GetPropertyTypeCapabilities";
					_data["PropertyType"] = JSON.stringify(this.context.SearchCriteria.PropertyType);
					_data["Locations"]    = JSON.stringify(this.context.SearchCriteria.Location);
					break;
				case"instantSearch":
					_data["op"]           = "GetInstantSearchCapabilities";
					_data["iSearchGuid"]  =  this.context.SearchCriteria.InstantSearchGuid.toString();
			}	
						  
			this.ajax({
				type : "POST",
				url  : this.search_url,
				data : _data,
				processData : true
			}, callbacks, loaderContainer, "failed at get capability: " + _data["op"], false, customCallbacks);
			
			return this;
		},
		
		// returns the context object
		getContext : function(type, isSearchCriteria){
			if(!type || type === null || type === "undefined"){
				return this.context;
			} else {
				if(type.constructor === String) {
					if (isSearchCriteria && isSearchCriteria === true){
						return this.context.SearchCriteria[type];
					} else {
						return this.context[type];	
					}
				} else if(type.constructor === Array) {
					if(isSearchCriteria && isSearchCriteria === true){
						return this.context.SearchCriteria[type[0]][type[1]];
					} else {
						return this.context[type[0]][type[1]];	
					}
				}
			}

			return this.context;
		},
		
		getDefaultMapBounds : function(callbacks, loaderContainer){	
			return this.ajax({
				type : "GET",
				url  : this.search_url,
				data : {
					Op : "GetDefaultMapBounds"
				}
			}, callbacks, loaderContainer, "failed at get default map bounds", false);
		},

		getMapBounds : function(){
			var bounds;	
			this.ajax({
				type : "GET",
				url  : this.search_url,
				async : false,
				data : {
					Op : "GetDefaultMapBounds"
				},
  			        success   : function (data) {
				bounds = new google.maps.LatLngBounds(new google.maps.LatLng(data.sw.lat, data.sw.lng), new 						google.maps.LatLng(data.ne.lat, data.ne.lng));
				}
			});
			return bounds;
		},
		
		// returns geoParamsObject for modification
		getGeoParam : function(searchType){
			var params = this.context.SearchCriteria.GeoParams;
			var geoParam;
			for (var i = 0; i < params.length; i++){
				var param = params[i];
				if(String(param.SearchType).toLowerCase() === String(searchType).toLowerCase()){
					geoParam = param;	
				}
			}
			
			return geoParam;
		},
		
		getListingInformation : function(attributes, callbacks, loaderContainer ){
			return this.ajax({
				type : "GET",
				url  : this.details_url,
				data : {
					op            : "listing-desc-img",
					listingId     : attributes.listingId,
					listingSource : attributes.listingSource
				}
			}, callbacks, loaderContainer, "failed at get listing information", false);
		},
		
        // ajax short-hand method - gets search criteria based on guid
		getPOIs : function(type, currentSearchGuid, callbacks, loaderContainer, schoolDistricts){
			var data = {
				Op                : "GetPOIs",
				ResourceType      : type,
				SearchResultsGuid : currentSearchGuid
			};
			
			if(schoolDistricts) data["SchoolDistrict"] = JSON.stringify(schoolDistricts);
			
			return this.ajax({
				type : "GET",
				url  : this.search_url,
				data : data
			}, callbacks, loaderContainer, "failed at get points of interest", false);
		},

		// ajax short-hand method - gets search criteria based on guid
		getPOI : function(type, callbacks, loaderContainer, schoolDistricts){
			var data = {
				Op            : "GetPOI",
				ResourceType  : type,
				Locations     : JSON.stringify(this.context.SearchCriteria.Location)
			};
			
			if(schoolDistricts) data["SchoolDistrict"] = JSON.stringify(schoolDistricts);
			
			return this.ajax({
				type : "POST",
				url  : this.search_url,
				data : data
			}, callbacks, loaderContainer, "failed at get points of interest", false);
		},
		
		// ajax short-hand method - gets poi criteria based on supplied poi data
		getPOICriteria : function(callbacks, loaderContainer){			
			return this.ajax({
				type : "POST",
				url  : this.results_url,
				data : {
					Op    : "GetPOICriteria",
					POIs  : JSON.stringify(this.context.SearchCriteria.POIs)
				}
			}, callbacks, loaderContainer, "failed at get poi criteria", false);
		},
		
		// ajax short-hand method - gets search criuteria based on guid
		getSearchCriteria : function(guid, callbacks, loaderContainer){			
			return this.ajax({
				type : "GET",
				url  : this.results_url,
				data : {
					op           : "GetSearchCriteria",
					CriteriaGuid : guid
				}
			}, callbacks, loaderContainer, "failed at get search criteria", false);
		},
		
		// ajax short-hand method - gets school districts
		getSchoolDistricts : function(callbacks, loaderContainer){
			return this.getPOI("SchoolDistrict", callbacks, loaderContainer);
		},
		
		// ajax short-hand method - gets schools
		getSchools : function(schoolDistricts, callbacks, loaderContainer){
			return this.getPOI("School", callbacks, loaderContainer, schoolDistricts);
		},
		
		// returns information about library
		getUpdatedPOI : function(callbacks, loaderContainer){
			if(this.context.SearchCriteria.POIs.length > 0){
				return this.ajax({
					type : "POST",
					url  : this.results_url,
					data : {
						op        : "GetUpdatedPOI",
						Locations : JSON.stringify(this.context.SearchCriteria.Location),
						POIs      : JSON.stringify(this.context.SearchCriteria.POIs)
					}
				}, callbacks, loaderContainer, "failed at get updated points of interest", false);
			} else {
				return null;
			}
		},
		
		hasPoi : function(value) {
			return (this.context.SearchCriteria.POIs.indexOf(value) >= 0);
		},
		
		// returns information about library
		info : function info() {
			return "Version: " + this.version + ". Authors: " + this.authors + ". Last Edited: " + this.lastEdit;
		},
		
		// manipulates context object - removes from SearchCriteria.CustomIDXOptions
		removeCustomIdxOption : function(value){
			this.context.SearchCriteria.CustomIDXOptions.splice(this.context.SearchCriteria.CustomIDXOptions.indexOf(value), 1);
		},
		
		// removes ajax loading gif from element
		removeLoader : function($el){
			$el.find(".fade").remove();
			$el.find(".ajax-gif").remove();
		},
		
		// manipulates context object - removes from SearchCriteria.Location
		removeLocation : function(value) {
			var locationLength = this.context.SearchCriteria.Location.length;
		
			for(var i = locationLength - 1; i >= 0; i--){
				var locationVal = this.context.SearchCriteria.Location[i].LocationValue;
				
				if(value.constructor === Array){
					for (var j = 0; j < value.length; j++){
						if(locationVal == value[j]){
							this.context.SearchCriteria.Location.splice(i, 1);
							break;
						}
					}
				} else {
					if(locationVal == value)this.context.SearchCriteria.Location.splice(i, 1);
				}

			}
			if(this.context.SearchCriteria.Location.length == 0)
			{
				this.context.SearchCriteria.PropertyType = [];
			}	
		},
		
		// manipulates context object - removes from SearchCriteria.PropertyType
		removePropertyType : function(value){
			if(~this.context.SearchCriteria.PropertyType.indexOf(value)){
				this.context.SearchCriteria.PropertyType.splice(this.context.SearchCriteria.PropertyType.indexOf(value), 1);
			}
		},
		
		// manipulates context object - removes from SearchCriteria.StatusType
		removeStatusType : function(value){
			if(~this.context.SearchCriteria.StatusType.indexOf(value)){
				this.context.SearchCriteria.StatusType.splice(this.context.SearchCriteria.StatusType.indexOf(value), 1);
			}
		},

		// manipulates context object - removes from SearchCriteria.RequiredOptions
		removeRequiredOption : function(value){
			if(~this.context.SearchCriteria.RequiredOptions.indexOf(value)){
				this.context.SearchCriteria.RequiredOptions.splice(this.context.SearchCriteria.RequiredOptions.indexOf(value), 1);	
			}
		},
		
		// manipulates context object - removes from SearchCriteria.POIs
		removePoi : function(value) {
			if(~this.context.SearchCriteria.POIs.indexOf(value)){
				this.context.SearchCriteria.POIs.splice(this.context.SearchCriteria.POIs.indexOf(value), 1);	
			}
		},
		
		// resets current MLSIds array
		resetMLSIds : function(){
			this.MLSIds = [];	
		},
		
		// ajax short-hand method - runs search using current context object
		runSearch : function(callbacks, loaderContainer){			
			this.ajax({
				type : "POST",
				url  : this.results_url,
				data : {
					op            : "RunSearch",
					SearchContext : JSON.stringify(this.context)
				}
			}, callbacks, loaderContainer, "failed at run search", true);
		},
		
		// ajax short-hand method - attempts to save search for user
		saveSearch : function(callbacks, loaderContainer){
			this.ajax({
				type : "GET",
				url  : this.results_url,
				data : {
					op : "SaveSearch"
				}
			}, callbacks, loaderContainer, "failed at save search", false);
		},
		
		// manipulates context object - used to set aspects of the object (DOES NOT ADD TO OBJECT, ONLY SETS)
		setContext : function(type, value, isSearchCriteria) {
			if(!type || type === null || type === "undefined"){
				// uses jquery extend to make deep copy so that context is copied rather than referenced				
				this.context = $.extend(true, {}, contextDefault);
			} else {
				if(type.constructor === String) {
					if(type === "context"){
						this.context = value;
					} else if (isSearchCriteria && isSearchCriteria === true){
						this.context.SearchCriteria[type] = value;
					} else {
						this.context[type] = value;	
					}
				} else if(type.constructor === Array) {
					if(isSearchCriteria && isSearchCriteria === true){
						this.context.SearchCriteria[type[0]][type[1]] = value;
					} else {
						this.context[type[0]][type[1]] = value;	
					}

				} else {
					return {status:"error", message:"type improperly formated"};
				}
			}
			return this.context;
		},
		
		// manipulates context object - used to set geoParams
		setGeoParams : function(type, value) {
		}
	};

 	window.BaynetSearch = window.$b = BaynetSearch();
})(window, jQuery);