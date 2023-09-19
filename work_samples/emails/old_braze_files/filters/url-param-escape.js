/**
 * From the {@link http://liveeditorcms.com/docs/themes/liquid/filters/html/url_param_escape/|Liquid docs}.
 *
 * "Replaces all characters not allowed in URLs with their URL-encoded equivalents,
 * including the ampersand (&) character.".
 */

module.exports.urlParamEscape = encodeURI;
