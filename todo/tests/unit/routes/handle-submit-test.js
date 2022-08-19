import { module, test } from 'qunit';
import { setupTest } from 'todo/tests/helpers';

module('Unit | Route | handleSubmit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:handle-submit');
    assert.ok(route);
  });
});
