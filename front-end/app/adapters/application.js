import DS from 'ember-data';
import config from "front-end/config/environment";

export default DS.JSONAPIAdapter.extend({
  host: config.APP.API_HOST
});
