
import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';



@Component({
	selector: 'app-test',
	templateUrl: './test.component.html'
})

export class TestComponent implements OnInit {
	sub;


	ngOnInit(): void {
		this.sub = interval(1000).subscribe(console.log);
	}


}
