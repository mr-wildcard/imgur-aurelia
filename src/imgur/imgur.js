import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

export class Imgur
{

	api = {
		auth_url: 'https://api.imgur.com/oauth2/authorize?response_type=token',
		client_id: '5aaff2b0eff001e',
		baseUrl: 'https://api.imgur.com/3/'
	};
	token = false;
	images = [];
	imgurProfil = {};

	activate(options)
	{
		if (!this.token)
		{
			this.token = this.extractToken(document.location.hash);
		}

		if (this.authenticated)
		{
			// console.log(options.account_username);
			this.imgurProfil.name = options.account_username;
			// access_token=b66b1c24341c32a6b70272dcf3e69e14eb1881c6
			// expires_in=3600
			// token_type=bearer
			// refresh_token=28a478fdffc1dd06e4a6b955bf60c6bea89f9e99
			// account_username=Julien666
			// account_id=20754429
		}
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
		return this.api.auth_url + "&client_id=" + this.api.client_id;
	}
}
