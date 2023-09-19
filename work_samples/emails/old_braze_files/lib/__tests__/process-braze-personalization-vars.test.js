const {
  processBrazePersonalizationVars,
} = require('../process-braze-personalization-vars');

test('non-prefixed var', () => {
  const valueMap = {
    brazed_beef_headquarters: "Chichi's Bar & Grill",
  };
  expect(
    processBrazePersonalizationVars(
      'Braze yourself for {{${brazed_beef_headquarters}}}',
      valueMap
    )
  ).toEqual("Braze yourself for {{'Chichi\\'s Bar & Grill'}}");
});

test('non-prefixed var with some inner spaces', () => {
  const valueMap = {
    brazed_beef_headquarters: "Chichi's Bar & Grill",
  };
  expect(
    processBrazePersonalizationVars(
      'Braze yourself for {{    ${brazed_beef_headquarters} }}',
      valueMap
    )
  ).toEqual("Braze yourself for {{    'Chichi\\'s Bar & Grill' }}");
});

test('prefixed var', () => {
  const valueMap = {
    'headquarters.brazed_beef': "Chichi's Bar & Grill",
  };
  expect(
    processBrazePersonalizationVars(
      'Braze yourself for {{headquarters.${brazed_beef}}}',
      valueMap
    )
  ).toEqual("Braze yourself for {{'Chichi\\'s Bar & Grill'}}");
});

test('prefixed var with some inner spaces', () => {
  const valueMap = {
    'headquarters.brazed_beef': "Chichi's Bar & Grill",
  };
  expect(
    processBrazePersonalizationVars(
      'Braze yourself for {{    headquarters.${brazed_beef} }}',
      valueMap
    )
  ).toEqual("Braze yourself for {{    'Chichi\\'s Bar & Grill' }}");
});
