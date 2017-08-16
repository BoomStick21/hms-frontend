import { Component } from '@angular/core';
import { Observable } 	from 'rxjs/Observable';
import { Location }					from '@angular/common';

import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

import { ObatMasuk }			from './obat-masuk';
import { ObatMasukService }		from './obat-masuk.service';

import { JenisObat }			from '../jenis-obat/jenis-obat';
import { JenisObatService }			from '../jenis-obat/jenis-obat.service';

@Component({
  selector: 'obat-masuk-form-page',
  templateUrl: './obat-masuk-form.component.html',
  providers: [ObatMasukService, JenisObatService]
})

export class ObatMasukFormComponent {
	obatMasuk: ObatMasuk;
	jenisObat: JenisObat;

	allJenisObat: JenisObat[];

	inputFormatter = (value : JenisObat) => value.merek_obat;

	searchJenisObat = (text$: Observable<string>) =>
		text$
			.debounceTime(200)
			.distinctUntilChanged()
			.map(term => term.length < 2 ? []
				: this.allJenisObat.filter(jenisObat => jenisObat.merek_obat.toLowerCase().indexOf(term.toLowerCase()) > -1));

	constructor(
		private obatMasukService: ObatMasukService,
		private jenisObatService: JenisObatService,
		private location: Location,
    	private toastyService: ToastyService,
    	private toastyConfig: ToastyConfig
	) {}

	ngOnInit(): void {
		this.obatMasuk = new ObatMasuk();
		this.jenisObat = new JenisObat();
		this.jenisObatService.getAllJenisObat().subscribe(
      		data => { this.allJenisObat = data }
    	)
	}

	private save() {
		// alert(JSON.stringify(this.obatMasuk));
		this.obatMasuk.id_jenis_obat = this.jenisObat.id;

		this.obatMasukService.createObatMasuk(this.obatMasuk).subscribe(
	       	data => {
	       		let toastOptions: ToastOptions = {
		            title: "Success",
		            msg: "Obat masuk berhasil ditambahkan",
		            showClose: true,
		            timeout: 5000,
		            theme: 'material'
		        };		        
		        this.toastyService.success(toastOptions);
	         	this.location.back();
	         	return true;
	       	},
	       	error => {
		        let toastOptions: ToastOptions = {
		            title: "Error",
		            msg: error,
		            showClose: true,
		            timeout: 5000,
		            theme: 'material'
		        };
		        this.toastyService.error(toastOptions);
		        return Observable.throw(error);
	       	}
    	);
	}

	/*
	private getJenisObat(id: number) {
		this.jenisObatService.getJenisObat(id).subscribe(
			data => { this.jenisObat = data }
		);
	}
	*/

	private addSelectedJenisObat(jenisObat: JenisObat) {
	    this.jenisObat = jenisObat;
	}
}
