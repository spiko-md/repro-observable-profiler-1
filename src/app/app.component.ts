import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { setup, track, printSubscribers } from 'observable-profiler';



setup(Observable);



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	title = 'obs-test';

	ngOnInit(): void {
		console.log('a');
		track();

		// setInterval(() => {
		// 	console.log('running printSubscribers');

		// 	const subscribers = track(false);
		// 	printSubscribers({
		// 		reportInnerSubscriptions: true,
		// 		subscribers,
		// 		prefix: this.constructor.name,
		// 		//timeout: 200,
		// 	});
		// }, 60000);
	}


}
