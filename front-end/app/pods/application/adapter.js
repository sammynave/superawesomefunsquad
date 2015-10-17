import DS from 'ember-data';
import config from "front-end/config/environment";
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: config.APP.API_HOST,
  authorizer: 'authorizer:application'
});
