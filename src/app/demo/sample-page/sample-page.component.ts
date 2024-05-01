import { Component ,PipeTransform  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AsyncPipe, DecimalPipe, NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';




interface Country {
	name: string;
	flag: string;
	area: number;
	population: number;
}

const COUNTRIES: Country[] = [
	{
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];

function search(text: string, pipe: PipeTransform): Country[] {
	return COUNTRIES.filter((country) => {
		const term = text.toLowerCase();
		return (
			country.name.toLowerCase().includes(term) ||
			pipe.transform(country.area).includes(term) ||
			pipe.transform(country.population).includes(term)
		);
	});
}

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule, SharedModule,AsyncPipe, DecimalPipe,NgFor ],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss'],
  providers: [DecimalPipe],
})
export default class SamplePageComponent {

  countries$: Observable<Country[]>;
	filter = new FormControl('', { nonNullable: true });

	constructor(pipe: DecimalPipe,private route:Router) {
		this.countries$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text, pipe)),
		);
	}
  addPage(){
this.route.navigate(['/typography'])
  }
}
  