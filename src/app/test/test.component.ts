import { Component } from '@angular/core';
import { Subject } from 'rxjs';



@Component({
	selector: 'app-test',
	templateUrl: './test.component.html'
})
export class TestComponent  {
	obs;

	constructor() {
		this.obs = new Subject();
	}

}
