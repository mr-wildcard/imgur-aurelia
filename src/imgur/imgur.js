import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Imgur
{

	api = {
		auth_url: 'https://api.imgur.com/oauth2/authorize?response_type=token',
		client_id: '5aaff2b0eff001e'
	};
	token = false;
	images = [];

	activate(options)
	{
		console.log('activate:', options);
		/*
		this.token = this.extractToken(document.location.hash);

		if (!this.token)
		{
			this.api.auth_url += '&client_id=' + this.api.client_id;
		}
		*/
	}

	canActivate(params, routeConfig)
	{
		console.log('can activate:', params, routeConfig);
	}

	extractToken(hash)
	{
		var match = hash.match(/access_token=(\w+)/);

		return !!match && match[1];
	}

	get authenticated()
	{
		return this.token.length > 0;
	}

	get authURL()
	{
		return this.api.auth_url;
	}
}
