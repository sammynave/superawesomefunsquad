import { moduleForModel, test } from 'ember-qunit';

moduleForModel('post', 'Unit | Model | post', {
  // Specify the other units that are required for this test.
  needs: ['model:user']
});

test('it exists', function(assert) {
  const model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});