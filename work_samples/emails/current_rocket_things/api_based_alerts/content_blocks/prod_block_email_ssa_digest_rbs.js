%%=ContentBlockbyKey("prod_api_access_with_null_check")=%%

<script runat="server" >

    Platform.Load("Core", "1");

    var token = "¡REDACTED!";

var rhid = Attribute.GetValue("RHID");

var todayDate = new Date();
var yesterdayDate = new Date();
yesterdayDate.setDate(yesterdayDate.getDate() - 1);

var todayDateString = todayDate.getFullYear() + '-' + ("0" + (todayDate.getMonth() + 1)).slice(-2) + '-' + ("0" + todayDate.getDate()).slice(-2) + "T10:00";
var yesterdayDateString = yesterdayDate.getFullYear() + '-' + ("0" + (yesterdayDate.getMonth() + 1)).slice(-2) + '-' + ("0" + yesterdayDate.getDate()).slice(-2) + "T10:00";

var url = "https://api.rockethomes.io/v1/users/" + rhid + "?" +
    "expand[saved_searches]&" +
    "filter[saved_searches.delivery_frequency]=daily&" +
    "expand[saved_searches.bounding_box]&" +
    "expand[saved_searches.bounding_box.best_fit_location]&" +
    "expand[saved_searches.location]&" +
    "expand[saved_searches.matches]&" +
   "expand[saved_searches.matches.listing]&" +
   "expand[saved_searches.matches.listing.photos]&" +
    "filter[saved_searches.matches.min_match_date]=" + yesterdayDateString + "&" +
    "filter[saved_searches.matches.max_match_date]=" + todayDateString + "&" +
    "options[saved_searches.matches.listing.detailed]=true&" +
    "paging[saved_searches.matches.size]=3&" +
    "expand[saved_search_matches.listing]=true&" +
    "filter[saved_search_matches.min_match_date]=" + yesterdayDateString + "&" +
    "filter[saved_search_matches.max_match_date]=" + todayDateString + "&" +
    "paging[saved_search_matches.size]=1&" +
    "filter[saved_search_matches.delivery_frequency]=daily"

    var apiKey = "¡REDACTED!";

var user = getRocketHomesData("GET", url, apiKey, token, "Daily Digest SSA", "Email", "RHD_API_Errors");
validateSsaApiResponse(user, url, "Daily Digest SSA", "Email", "RHD_API_Errors");

var savedSearch = user.saved_searches.items[0];

Variable.SetValue("@ss_title", savedSearch.title);
Variable.SetValue("@api_url", url);
Variable.SetValue("@recip_first_name", user.first_name);
Variable.SetValue("@environment", "https://rockethomes.com");

if (Variable.GetValue("@recip_first_name")) {
    Variable.SetValue("@header_greeting", "Hi " + Variable.GetValue("@recip_first_name") + ", ");
} else {
    Variable.SetValue("@header_greeting", "");
}

Variable.SetValue("@search_total", user.saved_searches._meta.total);

// UNSUB LINK
Variable.SetValue("@saved_search_id", user.saved_search_matches.items[0].saved_search_id);
Variable.SetValue("@app_token", user.app_tokens.adjust_email_preferences);
Variable.SetValue("@unsub_url", Variable.GetValue("@environment") + "/saved-search-unsubscribe?saved_search_id=" + Variable.GetValue("@saved_search_id") + "&app_token=" + Variable.GetValue("@app_token"));

// SET UTM STRING
Variable.SetValue("@utm_string", "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-ssa&utm_term=saved-search-alerts&utm_content=rhdc-ssa-daily");

// SET SEARCH MANAGEMENT URL
Variable.SetValue("@search_manage_url", Variable.GetValue("@environment") + "/notifications" + Variable.GetValue("@utm_string"));

// SET LICENSE URL
Variable.SetValue("@license_url", Variable.GetValue("@environment") + "/license-numbers" + Variable.GetValue("@utm_string"));

// SET APPROVAL URL
Variable.SetValue("@approval_url", "https://www.rocketmortgage.com/alf/wham-orbit/loanType/?qls=RHE_RHSSAERM.RMCTAB1022");

// SET OVER 10 LINK
    Variable.SetValue("@all_searches_url", Variable.GetValue("@environment") + "/searches" + Variable.GetValue("@utm_string"));

/* ESTABLISH MLS_TEXT ARRAY */
var mls_text_array = [];
  
Variable.SetValue("@search_send", Variable.GetValue("@search_total"));
  
if (Variable.GetValue("@search_total") >= 3) {
    Variable.SetValue("@search_send", "3");
    }
  
  
/* BEGIN HOME INFO LOOP */
var limiter = Variable.GetValue("@search_total") - 1;
  
  if (limiter > 2){
    limiter = 2
  }

for (var i = 0; i <= limiter; i++) {
  
  //ACCOUNT FOR MISSING DATA IN THE LOOP TO PREVENT ERRRORS
  if(user.saved_searches.items[i]._meta.resource_type){
  

    /* LISTING INFO */
    Variable.SetValue("@listing_web_url_href_0" + i, user.saved_searches.items[i].matches.items[0].listing._links.listing_web_url.href);
    Variable.SetValue("@address_0" + i, user.saved_searches.items[i].matches.items[0].listing.address);
    Variable.SetValue("@city_0" + i, user.saved_searches.items[i].matches.items[0].listing.city);
    Variable.SetValue("@state_code_0" + i, user.saved_searches.items[i].matches.items[0].listing.state_code);
    Variable.SetValue("@zip_code_0" + i, user.saved_searches.items[i].matches.items[0].listing.zip_code);
    Variable.SetValue("@property_type_0" + i, user.saved_searches.items[i].matches.items[0].listing.property_type);
    Variable.SetValue("@square_feet_0" + i, Number(user.saved_searches.items[i].matches.items[0].listing.square_feet));
    Variable.SetValue("@square_feet_range_0" + i, user.saved_searches.items[i].matches.items[0].listing.square_feet_range);
    Variable.SetValue("@lot_size_acres_0" + i, user.saved_searches.items[i].matches.items[0].listing.lot_size_acres);
    Variable.SetValue("@list_price_0" + i, Number(user.saved_searches.items[i].matches.items[0].listing.list_price));
    Variable.SetValue("@mls_number_0" + i, user.saved_searches.items[i].matches.items[0].listing.mls_number);
    Variable.SetValue("@bedrooms_total_0" + i, user.saved_searches.items[i].matches.items[0].listing.bedrooms_total);
    Variable.SetValue("@bathrooms_total_0" + i, user.saved_searches.items[i].matches.items[0].listing.bathrooms_total);
    Variable.SetValue("@bathrooms_full_0" + i, user.saved_searches.items[i].matches.items[0].listing.bathrooms_full);
    Variable.SetValue("@bathrooms_partial_0" + i, user.saved_searches.items[i].matches.items[0].listing.bathrooms_partial);
    Variable.SetValue("@main_photo_0" + i, user.saved_searches.items[i].matches.items[0].listing.photos_sample[0].url_640);
    Variable.SetValue("@sub_photo_01_0" + i, user.saved_searches.items[i].matches.items[0].listing.photos.items[1].url_640);
    Variable.SetValue("@sub_photo_02_0" + i, user.saved_searches.items[i].matches.items[0].listing.photos.items[2].url_640);
    Variable.SetValue("@sub_photo_03_0" + i, user.saved_searches.items[i].matches.items[0].listing.photos.items[3].url_640);
    Variable.SetValue("@list_office_name_0" + i, user.saved_searches.items[i].matches.items[0].listing.list_office_name);
    Variable.SetValue("@idx_logo_0" + i, user.saved_searches.items[i].matches.items[0].listing.compliance.idx_logo);
    Variable.SetValue("@disclaimer_0" + i, user.saved_searches.items[i].matches.items[0].listing.compliance.disclaimer_html);
    Variable.SetValue("@public_remarks_0" + i, user.saved_searches.items[i].matches.items[0].listing.public_remarks);

    /* COMPLIANCE INFO */
    Variable.SetValue("@show_mls_number_0" + i, user.saved_searches.items[i].matches.items[0].listing.compliance.show_mls_number);
    Variable.SetValue("@hide_badges_0" + i, user.saved_searches.items[i].matches.items[0].listing.compliance.hide_badges);
    Variable.SetValue("@hide_sqft_0" + i, user.saved_searches.items[i].matches.items[0].listing.compliance.hide_sqft);
    Variable.SetValue("@show_sqft_range_0" + i, user.saved_searches.items[i].matches.items[0].listing.compliance.show_sqft_range);
    Variable.SetValue("@show_primary_photo_only_0" + i, user.saved_searches.items[i].matches.items[0].listing.compliance.show_primary_photo_only);
    Variable.SetValue("@virtual_tours_0" + i, user.saved_searches.items[i].matches.items[0].listing.virtual_tours[0].url);

    /* DYNAMIC PROPERTY LINKS */
    Variable.SetValue("@listing_web_url_0" + i, user.saved_searches.items[i].matches.items[0].listing._links.listing_web_url.href);
    Variable.SetValue("@full_listing_url_0" + i, Variable.GetValue("@environment") + Variable.GetValue("@listing_web_url_0" + i) + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-ssa&utm_term=saved-search-alerts&utm_content=rhdc-ssa-daily&utm_cta=view-listing0" + i);
    Variable.SetValue("@area_pre_listing_url_0" + i, user.saved_searches.items[i]._links.saved_search_web_url.href);
    Variable.SetValue("@area_listing_url_0" + i, Variable.GetValue("@environment") + Variable.GetValue("@area_pre_listing_url_0" + i) + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-ssa&utm_term=saved-search-alerts&utm_content=rhdc-ssa-daily&utm_cta=homes-near0" + i);

    /* DYNAMIC IMAGE LINKS */
    Variable.SetValue("@image_main_url_0" + i, Variable.GetValue("@environment") + Variable.GetValue("@listing_web_url_0" + i) + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-ssa&utm_term=saved-search-alerts&utm_content=rhdc-ssa-daily-image-m0" + i + "&utm_cta=image-main0" + i);
    Variable.SetValue("@image_row_url_0" + i, Variable.GetValue("@environment") + Variable.GetValue("@listing_web_url_0" + i) + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-ssa&utm_term=saved-search-alerts&utm_content=rhdc-ssa-daily-image-r0" + i + "&utm_cta=image-row0" + i);

   /* MLS_TEXT ARRAY BUILD */
    mls_text_array.push(Variable.GetValue("@disclaimer_0" + i));

    /* BUY SMART INFO */
    Variable.SetValue("@is_eligible_for_buy_smart_national_0" + i, user.saved_searches.items[i].matches.items[0].listing.is_eligible_for_buy_smart_national);
    Variable.SetValue("@buy_smart_discount_0" + i, user.saved_searches.items[i].matches.items[0].listing.buy_smart_discount);
    Variable.SetValue("@buy_smart_discount_percentage_0" + i, user.saved_searches.items[i].matches.items[0].listing.buy_smart_discount_percentage);

    /* SELL SMART INFO */
    Variable.SetValue("@is_eligible_for_sell_smart_national_0" + i, user.saved_searches.items[i].matches.items[0].listing.is_eligible_for_sell_smart_national);
    Variable.SetValue("@sell_smart_discount_0" + i, user.saved_searches.items[i].matches.items[0].listing.sell_smart_discount);
    Variable.SetValue("@sell_smart_discount_percentage_0" + i, user.saved_searches.items[i].matches.items[0].listing.sell_smart_discount_percentage);

   /* BUY SMART CHECK */
  if (Variable.GetValue("@is_eligible_for_buy_smart_national_0" + i) == true) {
      Variable.SetValue("@closing_credit_0" + i, "$" + (Variable.GetValue("@buy_smart_discount_0" + i).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")));
      Variable.SetValue("@bs_discount_percentage_0" + i, (Variable.GetValue("@buy_smart_discount_percentage_0" + i) * 100));
  }
  
    Variable.SetValue("@ss_discount_percentage_0" + i, (Variable.GetValue("@sell_smart_discount_percentage_0" + i) * 100));
  
/* PRICE INFO */
Variable.SetValue("@list_price_0" + i, "$" + (Variable.GetValue("@list_price_0" + i).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")));

if (Variable.GetValue("@list_price_range_0" + i) == true) {
  Variable.SetValue("@list_price_0" + i, "$" + (Variable.GetValue("@list_price_range_0" + i)));
  Variable.SetValue("@closing_credit_0" + i, "Get up to $10,000");
}
                  
if (Variable.GetValue("@list_price_0" + i) == "$0") {
  Variable.SetValue("@list_price_0" + i, "Price Not Disclosed");
  Variable.SetValue("@closing_credit_0" + i, "Get up to $10,000");
}      
  
/* MORE COMPLIANCE INFORMATION */
if (Variable.GetValue("@show_mls_number_0" + i) == false) {
Variable.SetValue("@mls_number_0" + i, "n/a");
} else {
  Variable.SetValue("@mls_number_0" + i,  Variable.GetValue("@mls_number_0" + i));
}
  
Variable.SetValue("@square_feet_0" + i, Variable.GetValue("@square_feet_0" + i).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  
if (Variable.GetValue("@show_sqft_range_0" + i) == true) {
Variable.SetValue("@square_feet_0" + i, Variable.GetValue("@square_feet_range_0" + i).toString() + " SqFt");
}
  
  if (Variable.GetValue("@hide_sqft_0" + i) == true) {
Variable.SetValue("@square_feet_0" + i, "n/a");
}       
    
    if (Variable.GetValue("@square_feet_0" + i) == "0") {
  Variable.SetValue("@square_feet_0" + i, "n/a");
}   
  
if (Variable.GetValue("@square_feet_0" + i) == null) {
 Variable.SetValue("@square_feet_0" + i, "n/a");
}       

Variable.SetValue("@address_string_0" + i, Variable.GetValue("@address_0" + i) + ", " + Variable.GetValue("@city_0" + i) + ", " + Variable.GetValue("@state_code_0" + i) + ", " + Variable.GetValue("@zip_code_0" + i));
  
if (Variable.GetValue("@hide_address_0" + i) == true) {
Variable.SetValue("@address_string_0" + i, "Address Not Disclosed");
Variable.SetValue("@subject_address_0" + i, "Address Not Disclosed");
}            

/* PROPERTY STRING */
if (Variable.GetValue("@bathrooms_partial_0" + i)) {
   Variable.SetValue("@property_string_0" + i, "<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0581d125-a927-4a8a-acdf-4d6d976b4981.png' style='max-width:16px;' class=mini_text_img'>&nbsp;" + Variable.GetValue("@bedrooms_total_0" + i) + "&nbsp;&nbsp; &nbsp;" + "<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0d3d252e-4a6b-47f9-a91f-1742210e9240.png' style='max-width:16px;' class=mini_text_img'>&nbsp;" + Variable.GetValue("@bathrooms_full_0" + i) + " Full, " + Variable.GetValue("@bathrooms_partial_0" + i) + " Partial&nbsp;&nbsp; &nbsp;" + Variable.GetValue("@square_feet_0" + i) + " SqFt");
} else if (Variable.GetValue("@bathrooms_partial_0" + i) && Variable.GetValue("@bedrooms_total_0" + i) == "0") {
   Variable.SetValue("@property_string_0" + i, "<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0d3d252e-4a6b-47f9-a91f-1742210e9240.png' style='max-width:16px;' class=mini_text_img'>&nbsp;" + Variable.GetValue("@bathrooms_full_0" + i) + " Full, " + Variable.GetValue("@bathrooms_partial_0" + i) + " Partial&nbsp;&nbsp; &nbsp;" + Variable.GetValue("@square_feet_0" + i) + " SqFt");
} else if (Variable.GetValue("@bathrooms_full_0" + i)) {
   Variable.SetValue("@property_string_0" + i, "<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0581d125-a927-4a8a-acdf-4d6d976b4981.png' style='max-width:16px;' class=mini_text_img'>&nbsp;" + Variable.GetValue("@bedrooms_total_0" + i) + "&nbsp;&nbsp; &nbsp;" + "<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0d3d252e-4a6b-47f9-a91f-1742210e9240.png' style='max-width:16px;' class=mini_text_img'>&nbsp;" + Variable.GetValue("@bathrooms_full_0" + i) + " Full&nbsp;&nbsp; &nbsp;" + Variable.GetValue("@square_feet_0" + i) + " SqFt");
} else if (Variable.GetValue("@bathrooms_full_0" + i) && Variable.GetValue("@bedrooms_total_0" + i) == "0") {
   Variable.SetValue("@property_string_0" + i, "<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0d3d252e-4a6b-47f9-a91f-1742210e9240.png' style='max-width:16px;' class=mini_text_img'>&nbsp;" + Variable.GetValue("@bathrooms_full_0" + i) + " Full&nbsp;&nbsp; &nbsp;" + Variable.GetValue("@square_feet_0" + i) + " SqFt");
} else if (Variable.GetValue("@bedrooms_total_0" + i) == "0") {
    Variable.SetValue("@property_string_0" + i, "<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0581d125-a927-4a8a-acdf-4d6d976b4981.png' style='max-width:16px;' class=mini_text_img'>&nbsp;" + Variable.GetValue("@bedrooms_total_0" + i) + "&nbsp;&nbsp; &nbsp;" + "<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0d3d252e-4a6b-47f9-a91f-1742210e9240.png' style='max-width:16px; ' class=mini_text_img'>&nbsp;" + Variable.GetValue("@bathrooms_total_0" + i) + " Total&nbsp;&nbsp; &nbsp;" + Variable.GetValue("@square_feet_0" + i) + " SqFt");
} else {
    Variable.SetValue("@property_string_0" + i, "<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0581d125-a927-4a8a-acdf-4d6d976b4981.png' style='max-width:16px;' class=mini_text_img'>&nbsp;" + Variable.GetValue("@bedrooms_total_0" + i) + "&nbsp;&nbsp; &nbsp;" + "<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0d3d252e-4a6b-47f9-a91f-1742210e9240.png' style='max-width:16px; ' class=mini_text_img'>&nbsp;" + Variable.GetValue("@bathrooms_total_0" + i) + " Total&nbsp;&nbsp; &nbsp;" + Variable.GetValue("@square_feet_0" + i) + " SqFt");
}
  
if (Variable.GetValue("@property_type_0" + i) == "land" && Variable.GetValue("@lot_size_acres_0" + i) > 0) {
Variable.SetValue("@property_string_0" + i, Variable.GetValue("@lot_size_acres_0" + i) + " Acres");
} else if (Variable.GetValue("@property_type_0" + i) == "land") {
Variable.SetValue("@property_string_0" + i, "Undisclosed Acreage");
}


/* REMOVING AS MUCH DECISION MAKING FROM HTML TO TRIM BLOATED SIZE */
Variable.SetValue("@show_photo_row_0" + i, false);

if (Variable.GetValue("@sub_photo_03_0" + i)) {
Variable.SetValue("@show_photo_row_0" + i, true)
}
        
} /* END HOME INFO LOOP */
}  

/* HEADER GREETING */
if (Variable.GetValue("@first_name") == null) {
    Variable.SetValue("@first_name", "there")
}

Variable.SetValue("@greeting", "Hi " + Variable.GetValue("@first_name") + ", we found <strong>new matches</strong> for your " + Variable.GetValue("@ss_title") + " search");

/* EMAIL SUBJECT */
if (Variable.GetValue("@hide_address_00") == true) {
    Variable.SetValue("@subject_address_00", "Address Not Disclosed")
} else {
    Variable.SetValue("@subject_address_00", Variable.GetValue("@address_00"))
}

if (Variable.GetValue("@search_total") >= 50) {
    Variable.SetValue("@subject_line", "50+ New Homes for Sale 🏠: " + Variable.GetValue("@subject_address_00") + " and More");
} else if (Variable.GetValue("@search_total") >= 10) {
    Variable.SetValue("@subject_line", "10+ New Homes for Sale 🏠: " + Variable.GetValue("@subject_address_00") + " and More");
} else if (Variable.GetValue("@search_total") >= 5) {
    Variable.SetValue("@subject_line", "5+ New Homes for Sale 🏠: " + Variable.GetValue("@subject_address_00") + " and More");
} else {
    Variable.SetValue("@subject_line", "New Homes for Sale 🏠: " + Variable.GetValue("@subject_address_00") + " and More");
}
  
/* REMOVE DUPLICATES FROM MLS STRING */
function removeDuplicates(arr) {
    var uniqueArray = [];
    var len = arr.length;
    var i;
    varj;
    for (i = 0; i < len; i++) {
      for (j = i + 1; j < len; j++) {
        if (arr[i] === arr[j]) {
          j = ++i;
        }
      }
      uniqueArray.push(arr[i]);
    }
    return uniqueArray;
  }

var outputArray = removeDuplicates(mls_text_array);
Variable.SetValue("@mls_text_string", outputArray.toString());
  
Variable.SetValue("@all_searches_url", Variable.GetValue("@environment") + "/notifications?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-ssa&utm_term=saved-search-alerts&utm_content=rhdc-ssa-daily&utm_cta=see-all-searches");
Variable.SetValue("@closing_credit_url", Variable.GetValue("@environment") + Variable.GetValue("@listing_web_url_00") + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-ssa&utm_term=saved-search-alerts&utm_content=rhdc-ssa-daily&utm_cta=closing-credit&show_modal=schedule-a-tour");
</script>

%%[

/* NAME AND GREETING */
IF(EMPTY(@first_name)) THEN
   SET @client_first_name = "there"
ELSE
  SET @client_first_name = @first_name
ENDIF

SET @header_greeting = CONCAT("Hi ", @client_first_name, ", we found <strong>new matches</strong> for your ", @ss_title, " and other saved searches.")

SET @preview_text = CONCAT("Hi ", @client_first_name, ", we found a new match for you in ", @city_00, ", ", @state_code_00, ".")

IF NOT EMPTY(@public_remarks_00) THEN 
SET @preview_text = TRIM(CONCAT(Substring(@public_remarks_00, 1,120), "…"))
ENDIF


]%%