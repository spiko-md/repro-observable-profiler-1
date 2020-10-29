
import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { setup, track, printSubscribers } from 'observable-profiler';



@Component({
	selector: 'app-test',
	templateUrl: './test.component.html'
})

export class TestComponent implements OnInit, OnDestroy {
	sub;


	ngOnInit(): void {
		this.sub = interval(1000).subscribe(console.log);
	}



	ngOnDestroy(): void {
		console.log('td');

		const subscribers = track(false);

		// No output on repro test, errors in real project
		printSubscribers({
			reportInnerSubscriptions: true,
			subscribers,
			prefix: this.constructor.name,
			//timeout: 200,
		});


		subscribers.current().forEach(val => {
		//	console.log(val);
		});

	}

}
