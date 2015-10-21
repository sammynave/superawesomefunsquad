import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeCreateRecordResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data.type = 'user';
    store.push(payload);
    return payload;
  }
});
