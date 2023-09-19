%%=ContentBlockbyKey("api_access_prod")=%%
<script runat="server">
  Platform.Load("Core","1");
  var token = "¡REDACTED!";
  
  var rhid = Attribute.GetValue("rhid");
  var faveListingEventId = Attribute.GetValue("faveListingEventId");
  var url = "https://api.rockethomes.io/v1/users/" + rhid + "?"
  + "expand[fave_listing_events]"
  + "&expand[fave_listing_events.fave_folder]"
  + "&expand[fave_listing_events.listing]"
  + "&filter[fave_listing_events.id]=" + faveListingEventId + "&"
  + "expand[fave_listing_events.listing.photos]"
  + "&options[fave_listing_events.listing.detailed]=true";
  var apiKey = "¡REDACTED!";

var user = getRocketHomesData("GET", url, apiKey, token, "FLA", "Email", "RHD_API_Errors");
/* validateSsaApiResponse(user, url, "FLA", "Email", "RHD_API_Errors"); */

/* SSJS VARIABLE INFORMATION */

/* USER INFO */
Variable.SetValue("@client_first_name", user.first_name);
Variable.SetValue("@client_last_name", user.last_name);
Variable.SetValue("@updated_on", user.updated_on);
Variable.SetValue("@client_email", user.email);
Variable.SetValue("@rocket_account_id", user.rocket_account_id);
Variable.SetValue("@adjust_email_preferences", user.app_tokens.adjust_email_preferences);
Variable.SetValue("@listing_id", user.fave_listing_events.items[0].listing_id);
    user.updated_on

/* EVENT INFO */
Variable.SetValue("@event_category", user.fave_listing_events.items[0].event_category);
Variable.SetValue("@event_type", user.fave_listing_events.items[0].event_type);

/* PRICING INFO */
/* Need to calculate new vs old on increase and drop, all others use list price */
Variable.SetValue("@list_price", Number(user.fave_listing_events.items[0].listing.list_price));
Variable.SetValue("@list_price_range", user.fave_listing_events.items[0].list_price_range);
Variable.SetValue("@sold_price", Number(user.fave_listing_events.items[0].listing.sold_price));
Variable.SetValue("@old_value", Number(user.fave_listing_events.items[0].old_value));
Variable.SetValue("@new_value", Number(user.fave_listing_events.items[0].new_value));

/* LINKS PIECES */
Variable.SetValue("@environment", "https://rockethomes.com");
Variable.SetValue("@listing_web_url", user.fave_listing_events.items[0].listing._links.listing_web_url.href);
Variable.SetValue("@utm_link", "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-fla&utm_term=faved-listing-alerts&utm_content=rhdc-fla-instant");

/* SET IMAGE URLS */
Variable.SetValue("@image_main_url", Variable.GetValue("@environment") + Variable.GetValue("@listing_web_url") + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-fla&utm_term=faved-listing-alerts&utm_content=rhdc-fla-instant-image-m&utm_cta=image-main");
Variable.SetValue("@image_row_url", Variable.GetValue("@environment") + Variable.GetValue("@listing_web_url") + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-fla&utm_term=faved-listing-alerts&utm_content=rhdc-fla-instant-image-r&utm_cta=image-row");

/* SET BUTTON AND LINK URLS - MARKET NEAR BOTTOM */
Variable.SetValue("@full_listing_url", Variable.GetValue("@environment") + Variable.GetValue("@listing_web_url") + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-fla&utm_term=faved-listing-alerts&utm_content=rhdc-fla-instant&utm_cta=view-listing");
Variable.SetValue("@notifications_url", Variable.GetValue("@environment") + "/notifications" + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-fla&utm_term=faved-listing-alerts&utm_content=rhdc-fla-instant&utm_cta=manage-notifications");
Variable.SetValue("@closing_credit_url", Variable.GetValue("@environment") + Variable.GetValue("@listing_web_url") + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-fla&utm_term=faved-listing-alerts&utm_content=rhdc-fla-instant&utm_cta=closing-credit&show_modal=schedule-a-tour");
Variable.SetValue("@unsub_url", Variable.GetValue("@environment") + "/fave-listing-alert-unsubscribe" + Variable.GetValue("@utm_link"));
  
/* LOCATION INFO */
Variable.SetValue("@address", user.fave_listing_events.items[0].listing.address);
Variable.SetValue("@city", user.fave_listing_events.items[0].listing.city);
Variable.SetValue("@state_code", user.fave_listing_events.items[0].listing.state_code);
Variable.SetValue("@zip_code", user.fave_listing_events.items[0].listing.zip_code);

/* PROPERTY TYPE */
Variable.SetValue("@property_type", user.fave_listing_events.items[0].listing.property_type);
Variable.SetValue("@property_type_description", user.fave_listing_events.items[0].listing.property_type_description);

/* FEATURE INFO */
/* Land shows acres, homes show all other info */
/* Check for SF vs SF range */
Variable.SetValue("@listing_status", user.fave_listing_events.items[0].listing.listing_status);
Variable.SetValue("@list_price",  Number(user.fave_listing_events.items[0].listing.list_price));
Variable.SetValue("@square_feet",  Number(user.fave_listing_events.items[0].listing.square_feet));
Variable.SetValue("@square_feet_range", user.fave_listing_events.items[0].listing.square_feet_range);
Variable.SetValue("@lot_size_acres",  Number(user.fave_listing_events.items[0].listing.lot_size_acres));
Variable.SetValue("@bedrooms_total", user.fave_listing_events.items[0].listing.bedrooms_total);
Variable.SetValue("@bathrooms_total", user.fave_listing_events.items[0].listing.bathrooms_total);
Variable.SetValue("bathrooms_full", user.fave_listing_events.items[0].listing.bathrooms_full);
Variable.SetValue("@bathrooms_partial", user.fave_listing_events.items[0].listing.bathrooms_partial);

/* PHOTOS */
Variable.SetValue("@main_photo", user.fave_listing_events.items[0].listing.photos_sample[0].url_640);
Variable.SetValue("@sub_photo_01", user.fave_listing_events.items[0].listing.photos.items[1].url_640);
Variable.SetValue("@sub_photo_02", user.fave_listing_events.items[0].listing.photos.items[2].url_640);
Variable.SetValue("@sub_photo_03", user.fave_listing_events.items[0].listing.photos.items[3].url_640);

/* MLS INFO */
Variable.SetValue("@mls_number", user.fave_listing_events.items[0].listing.mls_number);
Variable.SetValue("@disclaimer", user.fave_listing_events.items[0].listing.compliance.disclaimer_html);
Variable.SetValue("@list_office_name", user.fave_listing_events.items[0].listing.list_office_name);
Variable.SetValue("@idx_logo", user.fave_listing_events.items[0].listing.compliance.idx_logo);
Variable.SetValue("@public_remarks", user.fave_listing_events.items[0].listing.public_remarks);

/* COMPLIANCE INFO */
Variable.SetValue("@show_mls_number", user.fave_listing_events.items[0].listing.compliance.show_mls_number);
Variable.SetValue("@hide_sqft", user.fave_listing_events.items[0].listing.compliance.hide_sqft);
Variable.SetValue("@show_sqft_range", user.fave_listing_events.items[0].listing.compliance.show_sqft_range);
Variable.SetValue("@show_primary_photo_only", user.fave_listing_events.items[0].listing.compliance.show_primary_photo_only);
Variable.SetValue("@show_sold_price_only", user.fave_listing_events.items[0].listing.compliance.show_sold_price_only);
Variable.SetValue("@hide_history_price", user.fave_listing_events.items[0].listing.compliance.hide_history_price);
Variable.SetValue("@hide_address", user.fave_listing_events.items[0].listing.compliance.hide_address);
Variable.SetValue("@list_price_range", user.fave_listing_events.items[0].listing.compliance.list_price_range);
Variable.SetValue("@hide_sold_detail", user.fave_listing_events.items[0].listing.compliance.hide_sold_detail);
Variable.SetValue("@hide_badges", user.fave_listing_events.items[0].listing.compliance.hide_badges);
Variable.SetValue("@virtual_tours", user.fave_listing_events.items[0].listing.virtual_tours[0].url);

/* BUY SMART INFO */
Variable.SetValue("@is_eligible_for_buy_smart_national", user.fave_listing_events.items[0].listing.is_eligible_for_buy_smart_national);
Variable.SetValue("@buy_smart_discount", Number(user.fave_listing_events.items[0].listing.buy_smart_discount));
Variable.SetValue("@buy_smart_discount_percentage", Number(user.fave_listing_events.items[0].listing.buy_smart_discount_percentage));

/* SELL SMART INFO */
Variable.SetValue("@is_eligible_for_sell_smart_national", user.fave_listing_events.items[0].listing.is_eligible_for_sell_smart_national);
Variable.SetValue("@sell_smart_discount", Number(user.fave_listing_events.items[0].listing.sell_smart_discount));
Variable.SetValue("@sell_smart_discount_percentage", Number(user.fave_listing_events.items[0].listing.sell_smart_discount_percentage));
  
/* MARKET URL */
Variable.SetValue("@market_report_url", Variable.GetValue("@environment") + "/real-estate-trends/" + Variable.GetValue("@state_code") + "/" + Variable.GetValue("@zip_code") + "?openInApp=true&utm_source=rockethomes&utm_medium=email&utm_campaign=rh-fla&utm_term=faved-listing-alerts&utm_content=rhdc-fla-instant&utm_cta=market-report");

</script>

%%[
   /* AMPSCRIPT PORTION */
   
 /* CLOSING CREDIT */

IF (@is_eligible_for_buy_smart_national == true) THEN
  SET @closing_credit = FormatCurrency(@buy_smart_discount, "en-US", 0)
  SET @bs_discount_percentage = multiply(@buy_smart_discount_percentage, 100)
ENDIF

/* SET @ss_discount_percentage = multiply(@sell_smart_discount_percentage, 100) */
SET @ss_discount_percentage = 1


/* ADD COMPLIANCE FIRST FOR AMPSCRIPT PORTION */

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

SET @list_price = FormatCurrency(@list_price, "en-US", 0)

IF(@list_price == "$0") THEN 
   SET @list_price = "Price Not Disclosed"
   SET @closing_credit = "Get up to $10,000"
ENDIF

IF(@sold_price == "NaN") THEN 
   SET @sold_price = "Price Not Disclosed"
ELSE
   SET @sold_price = FormatCurrency(@sold_price, "en-US", 0)
ENDIF

IF(@hide_sold_detail == true) THEN 
   SET @sold_price = "Price Not Disclosed"
ENDIF

IF(@list_price_range == true) THEN 
   SET @list_price = @list_price_range
   SET @closing_credit = "Get up to $10,000"
ENDIF

SET @address_string = CONCAT(@address, ", ", @city, ", ", @state_code, " ", @zip_code)

IF(@hide_address == true OR EMPTY(@address)) THEN 
   SET @address_string = "Address Not Disclosed"
ENDIF

SET @subject_address = @address

IF(@hide_address == true  OR EMPTY(@address)) THEN 
   SET @subject_address = "Address Not Disclosed"
ENDIF

/* SUBJECT AND HEADER PIECES */
   /* NAME PORTION */

IF(EMPTY(@first_name)) THEN
   SET @client_first_name = "there"
ELSE
  SET @client_first_name = @first_name
ENDIF


/* PRICE CHANGE INFO */
IF(@old_value < @new_value) THEN 
  SET @price_change = Subtract(@new_value, @old_value)
ELSEIF(@old_value > @new_value) THEN 
  SET @price_change = Subtract(@old_value, @new_value)
ELSE
  SET @price_change = ""
ENDIF

IF (@price_change >= 1000000) THEN
  SET @rounded_price_change = divide(@price_change, 1000000)
  SET @rounded_price_change = FormatNumber(@rounded_price_change, "###.##")
  SET @rounded_price_change = Concat('$', @rounded_price_change, 'M')
ELSEIF (@price_change >= 1000) THEN
  SET @rounded_price_change = divide(@price_change, 1000)
  SET @rounded_price_change = FormatNumber(@rounded_price_change, 0)
  SET @rounded_price_change = Concat('$', @rounded_price_change, 'K')
ELSE  
  SET @rounded_price_change = Concat('$', @price_change)
ENDIF
   
/* SET EMAIL TYPE */

IF(@event_type == "price-drop") THEN
   SET @email_type = "price_drop"
ENDIF

IF(@event_type == "price-increase") THEN
   SET @email_type = "price_increase"
ENDIF

IF(@event_type == "coming-soon-to-active") THEN
   SET @email_type = "new_listing"
ENDIF

IF(@event_type == "active-to-pending" OR @event_type == "active-under-contract-to-pending") THEN
   SET @email_type = "pending"
ENDIF

IF(@event_type == "active-under-contract-to-active" OR @event_type == "pending-to-active") THEN
   SET @email_type = "back_on_market"
ENDIF

IF(@event_type == "active-to-closed" OR @event_type == "active-under-contract-to-closed" OR @event_type == "pending-to-closed") THEN
   SET @email_type = "sold"
ENDIF

IF(@event_type == "active-to-active-under-contract" OR @event_type == "pending-to-active-under-contract") THEN
   SET @email_type = "backup_offers"
ENDIF

/* EVENT TYPE COROLATION */

IF(@email_type == "price_drop") THEN
   SET @banner_text = "Price Drop ⬇"
   SET @banner_text_color = "#fefefe"
   SET @banner_bg_color = "#298540"
   SET @price_text_color = @banner_bg_color
   SET @subject_line = CONCAT("Price Drop ", @rounded_price_change, " ⬇️: ", @subject_address)
   SET @header_greeting = CONCAT("Hi ", @client_first_name, ", this ", @property_type, " you faved <strong>just dropped ", @rounded_price_change, "</strong>.")
   SET @show_rbs_active_box = true
   SET @show_rbs_inactive_box = false
ENDIF

IF(@email_type == "price_increase") THEN
   SET @banner_text = "Price Increase ⬆"
   SET @banner_text_color = "#fefefe"
   SET @banner_bg_color = "#910D22"
   SET @price_text_color = @banner_bg_color
   SET @subject_line = CONCAT("Price Increase ", @rounded_price_change, " ⬆️: ", @subject_address)
   SET @header_greeting = CONCAT("Hi ", @client_first_name, ", this ", @property_type, " you faved <strong>just increased ", @rounded_price_change, "</strong>.")
    SET @show_rbs_active_box = true
    SET @show_rbs_inactive_box = false
ENDIF

IF(@email_type == "new_listing") THEN
   SET @banner_text = "NEW"
   SET @banner_text_color = "#fefefe"
   SET @banner_bg_color = "#603AA1"
   SET @price_text_color = "#010101"
   SET @subject_line = CONCAT("Now For Sale 🏠️: ", @subject_address)
   SET @header_greeting = CONCAT("Hi ", @client_first_name, ", this ", @property_type, " you faved is now for sale at <strong>", @list_price, "</strong>.")
       SET @show_rbs_active_box = true
    SET @show_rbs_inactive_box = false
ENDIF

IF(@email_type == "pending") THEN
   SET @banner_text = "SALE PENDING"
   SET @banner_text_color = "#910D22"
   SET @banner_bg_color = "#fefefe"
   SET @price_text_color = "#010101"
   SET @subject_line = CONCAT("Sale Pending ⌛: ", @subject_address)
   SET @header_greeting = CONCAT("Hi ", @client_first_name, ", this ", @property_type, " you faved is now <strong>pending sale</strong>.")
       SET @show_rbs_active_box = false
    SET @show_rbs_inactive_box = true
ENDIF

IF(@email_type == "back_on_market") THEN
   SET @banner_text = "BACK ON MARKET"
   SET @banner_text_color = "#fefefe"
   SET @banner_bg_color = "#010101"
   SET @price_text_color = "#010101"
   SET @subject_line = CONCAT("Back on Market 🏠✨️: ", @subject_address)
   SET @header_greeting = CONCAT("Hi ", @client_first_name, ", this ", @property_type, " you faved is available again at <strong>", @list_price, "</strong>.")
       SET @show_rbs_active_box = true
    SET @show_rbs_inactive_box = false
ENDIF

IF(@email_type == "sold") THEN
   SET @banner_text = "SOLD"
   SET @banner_text_color = "#fefefe"
   SET @banner_bg_color = "#910D22"
   SET @price_text_color = "#010101"
   SET @subject_line = CONCAT("Home Sold for ", @sold_price, " 🔑: ", @subject_address)
   SET @header_greeting = CONCAT("Hi ", @client_first_name, ", this ", @property_type, " you faved has sold for <strong>", @sold_price, "</strong>.")
       SET @show_rbs_active_box = false
    SET @show_rbs_inactive_box = true
ENDIF

IF(@email_type == "backup_offers") THEN
   SET @banner_text = "BACKUP OFFERS"
   SET @banner_text_color = "#010101"
   SET @banner_bg_color = "#fefefe"
   SET @price_text_color = "#010101"
   SET @subject_line = CONCAT("Backup Offers 📝️: ", @subject_address)
   SET @header_greeting = CONCAT("<strong>Hi ", @client_first_name, ", still interested?</strong>  Submit a backup offer in case the current offer falls through.")
       SET @show_rbs_active_box = true
    SET @show_rbs_inactive_box = false
ENDIF

IF(@show_sold_price_only == true AND (@email_type == "sold" OR @email_type == "pending")) THEN 
   SET @list_price = "Price Not Disclosed"
   SET @closing_credit = "Get up to $10,000"
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

SET @show_photo_row = true

IF EMPTY(@sub_photo_03) THEN
  SET @show_photo_row = false
ENDIF

IF @email_type == "sold" THEN
  SET @show_photo_row = false
ENDIF

IF @email_type == "pending" THEN
  SET @show_photo_row = false
ENDIF

/* MLS UPDATE STRING */
SET @update_date = FormatDate(@dateString,"l");
SET @update_time = FormatDate(@dateString,"t");
SET @mls_update_string = CONCAT(@update_date, ", ", @update_time, " Eastern")


IF (@is_eligible_for_buy_smart_national == false) THEN
  SET @show_rbs_active_box = false
  SET @show_rbs_inactive_box = false
ENDIF


SET @preview_text = CONCAT("Hi ", @client_first_name, ", we found a new match for you in ", @city, ", ", @state_code, ".")

IF NOT EMPTY(@public_remarks) THEN 
SET @preview_text = TRIM(CONCAT(Substring(@public_remarks, 1,120), "…"))
ENDIF
]%%