import { moduleFor, test } from 'ember-qunit';
import { Promise } from "rsvp";

moduleFor('service:addresse-data-gouv-fr-api', 'Unit | Service | addresse data gouv fr api', {
  // Specify the other units that are required for this test.
  needs: ['service:ajax']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('reverse', function(assert) {
  let service = this.subject();
  assert.ok(service.reverse({latitude: 48.856614, longitude: 2.3522219}) instanceof Promise);
});
