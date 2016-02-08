import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('posts-list', 'Integration | Component | posts list', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{posts-list}}`);

  assert.equal(this.$().text().trim(), 'author\n  subject');

  // Template block usage:
  this.render(hbs`
    {{#posts-list}}
      template block text
    {{/posts-list}}
  `);

  assert.equal(this.$().text().trim(), 'author\n  subject');
});
