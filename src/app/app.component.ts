import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { setup, track, printSubscribers } from 'observable-profiler';



setup(Observable);



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'obs-test';

	onActivate() {
		track();
	}

	onDeactivate(component: object) {
		const subscribers = track(false);

		// No output on repro test, errors in real project
		printSubscribers({
			reportInnerSubscriptions: true,
			subscribers,
			prefix: component.constructor.name,
			timeout: 200,
		});


		//console.log('No output from printSubscribers');

		// Printing 'subscribers' as the printSubscribers fn produces no output
		// subscribers.current().forEach(val => {
		//	console.log(val);
		//});

	}

}
