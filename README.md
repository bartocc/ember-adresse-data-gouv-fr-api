# ember-adresse-data-gouv-fr-api

[![npm version](https://badge.fury.io/js/ember-adresse-data-gouv-fr-api.svg)](https://badge.fury.io/js/ember-adresse-data-gouv-fr-api)
[![Build Status](https://travis-ci.org/ember-adresse-data-gouv-fr-api/ember-adresse-data-gouv-fr-api.svg?branch=master)](https://travis-ci.org/ember-adresse-data-gouv-fr-api/ember-adresse-data-gouv-fr-api)
![Ember Version](https://embadge.io/v1/badge.svg?start=2.4.0)

This addons provides a service to call the [adresse.data.gouv.fr API](https://adresse.data.gouv.fr/api).

## Usage

### Installation

* `ember install ember-adresse-data-gouv-fr-api`

### Application Usage

```javascript
import Service from "@ember/service";
import { inject } from "@ember/service";

export default Service.extend({
  adresseDataGouvFrApi: inject(),

  actions: {
    // location: {latitude: ..., longitude: ...}
    reverseGeocode(location) {
      // response: [GeoCodeJSON](https://github.com/geocoders/geocodejson-spec/tree/master/draft)
      get(this, 'adresseDataGouvFrApi').reverse(location).then((response) => {
        // ...
      });
    }
  }
})
```

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
