%%=ContentBlockbyKey("prod_api_access_with_null_check")=%%

<script runat="server" >

Platform.Load("Core", "1");

var token = "¡REDACTED!";

var rhid = Attribute.GetValue("RHID");
var savedSearchId = Attribute.GetValue("savedSearchId");
var savedSearchMatchId = Attribute.GetValue("savedSearchMatchId");

var url = "https://api.rockethomes.io/v1/users/" + rhid + "?" +
"expand[saved_searches]&" +
"expand[saved_searches.bounding_box]&" +
"expand[saved_searches.bounding_box.best_fit_location]&" +
"expand[saved_searches.location]&" +
"expand[saved_searches.matches]&" +
"expand[saved_searches.matches.listing]&" +
"expand[saved_searches.matches.listing.photos]&" +
"filter[saved_searches.ids]=" + savedSearchId + "&" +
"filter[saved_searches.matches.ids]=" + savedSearchMatchId + "&" +
"options[saved_searches.matches.listing.detailed]=true";

var apiKey = "¡REDACTED!";

var user = getRocketHomesData("GET", url, apiKey, token, "Instant SSA", "Email", "RHD_API_Errors");
validateSsaApiResponse(user, url, "Instant SSA", "Email", "RHD_API_Errors");

/* USER INFO */
Variable.SetValue("@id", user.id);
Variable.SetValue("@first_name", user.first_name);
Variable.SetValue("@last_name", user.last_name);
Variable.SetValue("@email", user.email);
Variable.SetValue("@title", user.saved_searches.items[0].title);

/* LISTING INFO */
Variable.SetValue("@listing_web_url_href", user.saved_searches.items[0].matches.items[0].listing._links.listing_web_url.href);
Variable.SetValue("@address", user.saved_searches.items[0].matches.items[0].listing.address);
Variable.SetValue("@city", user.saved_searches.items[0].matches.items[0].listing.city);
Variable.SetValue("@state_code", user.saved_searches.items[0].matches.items[0].listing.state_code);
Variable.SetValue("@zip_code", user.saved_searches.items[0].matches.items[0].listing.zip_code);
Variable.SetValue("@property_type", user.saved_searches.items[0].matches.items[0].listing.property_type);
Variable.SetValue("@square_feet", user.saved_searches.items[0].matches.items[0].listing.square_feet);
Variable.SetValue("@square_feet_range)", user.saved_searches.items[0].matches.items[0].listing.square_feet_range);
Variable.SetValue("@lot_size_acres", user.saved_searches.items[0].matches.items[0].listing.lot_size_acres);
Variable.SetValue("@list_price", Number(user.saved_searches.items[0].matches.items[0].listing.list_price));
Variable.SetValue("@mls_number", user.saved_searches.items[0].matches.items[0].listing.mls_number);
Variable.SetValue("@bedrooms_total", user.saved_searches.items[0].matches.items[0].listing.bedrooms_total);
Variable.SetValue("@bathrooms_total", user.saved_searches.items[0].matches.items[0].listing.bathrooms_total);
Variable.SetValue("@bathrooms_full", user.saved_searches.items[0].matches.items[0].listing.bathrooms_full);
Variable.SetValue("@bathrooms_partial", user.saved_searches.items[0].matches.items[0].listing.bathrooms_partial);
Variable.SetValue("@main_photo", user.saved_searches.items[0].matches.items[0].listing.photos_sample[0].url_640);
Variable.SetValue("@sub_photo_01", user.saved_searches.items[0].matches.items[0].listing.photos.items[1].url_640);
Variable.SetValue("@sub_photo_02", user.saved_searches.items[0].matches.items[0].listing.photos.items[2].url_640);
Variable.SetValue("@sub_photo_03", user.saved_searches.items[0].matches.items[0].listing.photos.items[3].url_640);
Variable.SetValue("@list_office_name", user.saved_searches.items[0].matches.items[0].listing.list_office_name);
Variable.SetValue("@idx_logo", user.saved_searches.items[0].matches.items[0].listing.compliance.idx_logo);
Variable.SetValue("@disclaimer", user.saved_searches.items[0].matches.items[0].listing.compliance.disclaimer_html);
Variable.SetValue("@public_remarks", user.saved_searches.items[0].matches.items[0].listing.public_remarks);

/* COMPLIANCE INFO */
Variable.SetValue("@show_mls_numbe", user.saved_searches.items[0].matches.items[0].listing.compliance.show_mls_number);
Variable.SetValue("@hide_badges", user.saved_searches.items[0].matches.items[0].listing.compliance.hide_badges);
Variable.SetValue("@hide_sqft", user.saved_searches.items[0].matches.items[0].listing.compliance.hide_sqft);
Variable.SetValue("@show_sqft_range", user.saved_searches.items[0].matches.items[0].listing.compliance.show_sqft_range);
Variable.SetValue("@show_primary_photo_only", user.saved_searches.items[0].matches.items[0].listing.compliance.show_primary_photo_only);
Variable.SetValue("@virtual_tours", user.saved_searches.items[0].matches.items[0].listing.virtual_tours[0].url);

// SET ENVIRONMENT
Variable.SetValue("@environment", "https://rockethomes.com");

// SET UTM STRING
Variable.SetValue("@utm_string", "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-ssa&utm_term=saved-search-alerts&utm_content=rhdc-ssa-instant");

// SET BUTTON URLS
Variable.SetValue("@listing_web_url", user.saved_searches.items[0].matches.items[0].listing._links.listing_web_url.href);
Variable.SetValue("@full_listing_url", Variable.GetValue("@environment") + Variable.GetValue("@listing_web_url") + Variable.GetValue("@utm_string") + "&utm_cta=view-listing");
Variable.SetValue("@notifications_url", Variable.GetValue("@environment") + "/notifications" + Variable.GetValue("@utm_string") + "&utm_cta=manage-notifications");
Variable.SetValue("@closing_credit_url", Variable.GetValue("@environment") + Variable.GetValue("@listing_web_url") + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-ssa&utm_term=saved-search-alerts&utm_content=rhdc-ssa-instant&utm_cta=closing-credit&show_modal=schedule-a-tour");
  
// SET IMAGE URLS
Variable.SetValue("@image_main_url", Variable.GetValue("@environment") + Variable.GetValue("@listing_web_url") + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-ssa&utm_term=saved-search-alerts&utm_content=rhdc-ssa-instant-image-m&utm_cta=image-main");
Variable.SetValue("@image_row_url", Variable.GetValue("@environment") + Variable.GetValue("@listing_web_url") + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-ssa&utm_term=saved-search-alerts&utm_content=rhdc-ssa-instant-image-r&utm_cta=image-row");
  
// SET UNSUB URL
Variable.SetValue("@saved_search_unsub", user.saved_searches.items[0].matches._meta.filter.saved_search_id);
Variable.SetValue("@app_token", user.app_tokens.adjust_email_preferences);
Variable.SetValue("@unsub_url", Variable.GetValue("@environment") + "/saved-search-unsubscribe?saved_search_id=" + Variable.GetValue("@saved_search_unsub") + "&app_token=" + Variable.GetValue("@app_token"));
  
/* BUY SMART INFO */
Variable.SetValue("@is_eligible_for_buy_smart_national", user.saved_searches.items[0].matches.items[0].listing.is_eligible_for_buy_smart_national);
Variable.SetValue("@buy_smart_discount", Number(user.saved_searches.items[0].matches.items[0].listing.buy_smart_discount));
Variable.SetValue("@buy_smart_discount_percentage", Number(user.saved_searches.items[0].matches.items[0].listing.buy_smart_discount_percentage));

/* SELL SMART INFO */
Variable.SetValue("@is_eligible_for_sell_smart_national", user.saved_searches.items[0].matches.items[0].listing.is_eligible_for_sell_smart_national);
Variable.SetValue("@sell_smart_discount", Number(user.saved_searches.items[0].matches.items[0].listing.sell_smart_discount));
Variable.SetValue("@sell_smart_discount_percentage", Number(user.saved_searches.items[0].matches.items[0].listing.sell_smart_discount_percentage));
</script>

%%[

/* NAME AND GREETING */
IF(EMPTY(@first_name)) THEN
   SET @client_first_name = "there"
ELSE
  SET @client_first_name = @first_name
ENDIF

SET @header_greeting = CONCAT("Hi ", @client_first_name, ", we found a <strong>new match</strong> for you in ", @city, ", ", @state_code, ".")

IF (EMPTY(@city)) THEN
SET @header_greeting = CONCAT("Hi ", @client_first_name, ", we found a <strong>new match</strong> for you in ", @state_code, ".")
SET @city = "city not disclosed"
ENDIF

 /* CLOSING CREDIT */

IF (@is_eligible_for_buy_smart_national == TRUE) THEN
  SET @closing_credit = FormatCurrency(@buy_smart_discount, "en-US", 0)
  SET @bs_discount_percentage = multiply(@buy_smart_discount_percentage, 100)
ENDIF

/* SET @ss_discount_percentage = multiply(@sell_smart_discount_percentage, 100) */
SET @ss_discount_percentage = 1

IF(@list_price_range == true) THEN
  SET @closing_credit = "Get up to $10,000"
ENDIF

/* PRICE INFO */
SET @list_price = FormatCurrency(@list_price, "en-US", 0)

IF(@list_price_range == true) THEN 
   SET @list_price = @list_price_range
   SET @closing_credit = "Get up to $10,000"
ENDIF

IF(@list_price == "$0") THEN 
   SET @list_price = "Price Not Disclosed"
   SET @closing_credit = "Get up to $10,000"
ENDIF

/* MORE COMPLIANCE INFORMATION */
IF(@show_mls_number == false) THEN 
   SET @mls_number = "n/a"
ENDIF

IF(@square_feet == "NaN") THEN 
   SET @square_feet = "n/a"
ENDIF

IF(@square_feet == "0") THEN 
   SET @square_feet = "n/a"
ENDIF

IF(@square_feet == "") THEN 
   SET @square_feet = "n/a"
ENDIF

IF(@hide_sqft == true) THEN 
   SET @square_feet = "n/a"
ENDIF

IF(@show_sqft_range == true) THEN 
   SET @square_feet = @square_feet_range
ENDIF

IF(@square_feet != "n/a" AND NOT EMPTY(@square_feet) AND @show_sqft_range != true) THEN 
  SET @square_feet = formatnumber(@square_feet,"##,###")
ENDIF

SET @address_string = CONCAT(@address, ", ", @city, ", ", @state_code, " ", @zip_code)

IF(@hide_address == true OR EMPTY(@address)) THEN 
   SET @address_string = "Address Not Disclosed"
ENDIF

SET @subject_address = @address

IF(@hide_address == true OR EMPTY(@address)) THEN 
   SET @subject_address = "Address Not Disclosed"
ENDIF

SET @subject_line = CONCAT("New Listing 🏠️: ", @subject_address)

SET @preview_text = CONCAT("Hi ", @client_first_name, ", we found a new match for you in ", @city, ", ", @state_code, ".")

IF NOT EMPTY(@public_remarks) THEN 
SET @preview_text = TRIM(CONCAT(Substring(@public_remarks, 1,120), "…"))
ENDIF

/* PROPERTY STRING */

IF(@bathrooms_partial) THEN
   SET @property_string = CONCAT("<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0581d125-a927-4a8a-acdf-4d6d976b4981.png' style='max-width:16px;' class=mini_text_img'>&nbsp;", @bedrooms_total, "&nbsp;&nbsp; &nbsp;", "<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0d3d252e-4a6b-47f9-a91f-1742210e9240.png' style='max-width:16px;' class=mini_text_img'>&nbsp;", @bathrooms_full, " Full, ", @bathrooms_partial, " Partial&nbsp;&nbsp; &nbsp;", @square_feet, " SqFt")
ELSEIF(@bathrooms_partial AND @bedrooms_total == "0") THEN
   SET @property_string = CONCAT("<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0d3d252e-4a6b-47f9-a91f-1742210e9240.png' style='max-width:16px;' class=mini_text_img'>&nbsp;", @bathrooms_full, " Full, ", @bathrooms_partial, " Partial&nbsp;&nbsp; &nbsp;", @square_feet, " SqFt")
ELSEIF(@bathrooms_full) THEN
   SET @property_string = CONCAT("<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0581d125-a927-4a8a-acdf-4d6d976b4981.png' style='max-width:16px;' class=mini_text_img'>&nbsp;", @bedrooms_total, "&nbsp;&nbsp; &nbsp;", "<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0d3d252e-4a6b-47f9-a91f-1742210e9240.png' style='max-width:16px;' class=mini_text_img'>&nbsp;", @bathrooms_full, " Full&nbsp;&nbsp; &nbsp;",  @square_feet, " SqFt")
ELSEIF(@bathrooms_full AND @bedrooms_total == "0") THEN
   SET @property_string = CONCAT("<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0d3d252e-4a6b-47f9-a91f-1742210e9240.png' style='max-width:16px;' class=mini_text_img'>&nbsp;", @bathrooms_full, " Full&nbsp;&nbsp; &nbsp;",  @square_feet, " SqFt")
ELSEIF(@bedrooms_total == "0") THEN
   SET @property_string = CONCAT("<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0d3d252e-4a6b-47f9-a91f-1742210e9240.png' style='max-width:16px; ' class=mini_text_img'>&nbsp;", @bathrooms_total, " Total&nbsp;&nbsp; &nbsp;",  @square_feet, " SqFt")
ELSEIF EMPTY(@bedrooms_total) THEN
   SET @property_string = CONCAT("<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0d3d252e-4a6b-47f9-a91f-1742210e9240.png' style='max-width:16px; ' class=mini_text_img'>&nbsp;", @bathrooms_total, " Total&nbsp;&nbsp; &nbsp;",  @square_feet, " SqFt")
ELSE
  SET @property_string = CONCAT("<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0581d125-a927-4a8a-acdf-4d6d976b4981.png' style='max-width:16px;' class=mini_text_img'>&nbsp;", @bedrooms_total, "&nbsp;&nbsp; &nbsp;", "<img src='https://image.em.rockethomes.com/lib/fe3c11717064057c701570/m/1/0d3d252e-4a6b-47f9-a91f-1742210e9240.png' style='max-width:16px; ' class=mini_text_img'>&nbsp;", @bathrooms_total, " Total&nbsp;&nbsp; &nbsp;",  @square_feet, " SqFt")
ENDIF

IF(@property_type == "land" AND @lot_size_acres > 0) THEN
   SET @property_string = CONCAT(@lot_size_acres, " Acres")
ELSEIF(@property_type == "land") THEN
   SET @property_string = "Undisclosed Acreage"
ENDIF

/* REMOVING AS MUCH DECISION MAKING FROM HTML TO TRIM BLOATED SIZE */

/* SHOW 2ND PHOTO ROW */

SET @show_photo_row = "true"

IF EMPTY(@sub_photo_03) THEN
  SET @show_photo_row = "false"
ENDIF

SET @price_text_color = "#010101"

]%%