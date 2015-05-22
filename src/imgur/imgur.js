import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Imgur {

	credentials = {
		client_id: '5aaff2b0eff001e',
		client_secret: 'ab01a0d3e9a520daae1eb553f75cdd3da6284846'
	};

	images = [];



}
