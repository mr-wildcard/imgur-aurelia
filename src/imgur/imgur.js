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

	static inject = [HttpClient];

	constructor(http)
	{
		this.http = http;
	}

	activate(options)
	{
		if (!this.token)
		{
			this.token = this.extractToken(document.location.hash);
		}

		if (this.authenticated)
		{
			let client = new HttpClient()
				.configure( x => {
					x.withBaseUrl('https://api.imgur.com/3')
					x.withHeader('Authorization', 'Bearer ' + options.access_token);
				});

			//let imagesData = yield client.get('https://api.imgur.com/3/gallery/hot/viral/0.json');

			this.imgurProfil.name = options.account_username;

			client.get('/gallery/hot/viral/0.json').then(data => {
				this.imgElements = JSON.parse(data.response).data;
			})

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
