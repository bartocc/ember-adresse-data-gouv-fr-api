import Service from "@ember/service";
import { get } from "@ember/object";
import { inject } from "@ember/service";

export default Service.extend({

  ajax: inject(),
  origin: 'https://api-adresse.data.gouv.fr',

  search(q) {
    const pathname = '/search';
    const endpoint = `${this.get('origin')}${pathname}`;

    return this.get('ajax').request(endpoint, {data: {q}});
  },

  // location : {lat: ..., lon: ...}
  reverse(location) {
    let reverseUrl = `${get(this, 'origin')}/reverse/?lon=${location.longitude}&lat=${location.latitude}`;
    return get(this, 'ajax').request(reverseUrl);
  }
});
