import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {

	configureRouter(config, router)
	{
		config.title = 'Lawl';
		config.map([
			{
				route: ['', 'welcome'],
				moduleId: './welcome',
				nav: true,
				title:'Welcome'
			},
			{
				route: 'imgur*',
				moduleId: 'imgur/imgur',
				nav: true,
				title: 'Imgur Page'
			}
		]);

		this.router = router;
	}
}
