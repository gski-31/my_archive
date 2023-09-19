/**
 * {@link https://www.braze.com/docs/user_guide/personalization_and_dynamic_content/liquid/supported_personalization_tags/|Special Braze variables},
 * in the format ${x}.
 */
const brazePersonalizationVars = {
  city: 'Atlanta',
  country: 'USA',
  date_of_birth: '01/01/2020',
  email_address: 'sample@waybetter.com',
  first_name: 'Sample',
  language: 'en',
  last_name: 'User',
  time_zone: 'New York',
  user_id: 5555,
  braze_id: 2222,
  'canvas.name': 'Coquito Canvas',
  'campaign.name': 'Coquito Campaign',
};

const shared = { brazePersonalizationVars };

var config = {
  dev: {
    ...shared,
    brazeApiKey: '',
    brazeConnectedContentUsername: '',
    brazeConnectedContentPassword: '',
  },
  prod: {
    ...shared,
    brazeApiKey: '',
    brazeConnectedContentUsername: '',
    brazeConnectedContentPassword: '',
  },
};

module.exports.getConfig = env => config[env];
