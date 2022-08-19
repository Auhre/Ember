import { module, test } from 'qunit';
import { setupTest } from 'todo/tests/helpers';

module('Unit | Route | Apis', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:apis');
    assert.ok(route);
  });
});
