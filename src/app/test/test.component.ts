import { Component } from '@angular/core';
import { interval } from 'rxjs';



@Component({
	selector: 'app-test',
	templateUrl: './test.component.html'
})
export class TestComponent  {
	sub;

	constructor() {
		this.sub = interval(1000).subscribe(console.log);
	}

}
