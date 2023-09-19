const BRAZE_PVAR_MATCHER = new RegExp('(\\w+\\.)?\\$\\{([^\\}]+)\\}', 'g');

const quoteValue = orig =>
  orig.replace ? "'" + (orig ? orig.replace(/'/g, "\\'") : '') + "'" : orig;

// The liquid NPM does not seem to parse the special Braze personalization tags
// properly (they are in the format ${var} or prefix.${var}.
// As such, when these are inside inner braces,  it is throwing off the liquid parser.
// This function is called before passing the template to the liquid engine.
module.exports.processBrazePersonalizationVars = (content, valueMap) =>
  content.replace(BRAZE_PVAR_MATCHER, (match, prefix, name) => {
    const key = prefix ? `${prefix}${name}` : name;
    const value = valueMap[key];
    if (!value)
      console.warn(
        'No stub value found for personalization var ',
        key,
        ' in ',
        match
      );

    return quoteValue(value || `stub_braze_value_for_${key}`);
  });
