import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } 	from 'rxjs/Observable';
import { Location }					from '@angular/common';

import { ObatEceran } from './obat-eceran';
import { ObatEceranItem } from './obat-eceran-item';
import { ObatEceranService } from './obat-eceran.service';

import { StokObat }	from '../stok-obat/stok-obat';
import { StokObatService }		from '../stok-obat/stok-obat.service';

@Component({
  selector: 'obat-eceran-form-page',
  templateUrl: './obat-eceran-form.component.html',
  providers: [StokObatService, ObatEceranService]

})

export class ObatEceranFormComponent {	
	public merek_obat: string;
	public obatEceranItems: ObatEceranItem[];

	public stokObat: StokObat;
	public obatEceran: ObatEceran;

	public allStokObatAtLocation: StokObat[];

	inputFormatter = (value : StokObat) => value.jenis_obat.merek_obat + ' - ' + value.obat_masuk.nomor_batch;
	resultFormatter = (value: StokObat)	=> value.jenis_obat.merek_obat + ' - ' + value.obat_masuk.nomor_batch;	

	searchStokObat = (text$: Observable<string>) =>
		text$
			.debounceTime(200)
			.distinctUntilChanged()
			.map(term => term.length < 2 ? []
				: this.allStokObatAtLocation.filter(stokObat => stokObat.jenis_obat.merek_obat.toLowerCase().indexOf(term.toLowerCase()) > -1));

	constructor (		
		private changeDetectorRef: ChangeDetectorRef,		
		private stokObatService: StokObatService,	
		private obatEceranService: ObatEceranService,
		private location: Location
	) {}

	ngOnInit(): void {				
		this.stokObat = new StokObat();		
		this.obatEceran = new ObatEceran();	
		this.obatEceranItems = [];

		// TO-DO: Change Location ID to dynamic based on which is the Apotek
		this.stokObatService.getStokObatByLocation(2).subscribe(
			data => { this.allStokObatAtLocation = data }
		);
	}

	addObatItem(stokObat: StokObat) {
	    let temp = new ObatEceranItem();

	    this.stokObat = stokObat;

	    temp.jumlah = null;
	    temp.keterangan = '';

		temp.id_jenis_obat = stokObat.id_jenis_obat;
    	temp.id_obat_masuk = stokObat.id_obat_masuk;
    	temp.harga_jual_realisasi = stokObat.jenis_obat.harga_jual_satuan;		    

    	this.obatEceranItems.push(temp);
	}

	removeObatItem(i: number) {
	    this.obatEceranItems.splice(i, 1);
	}

	private save() {
		this.obatEceran.obat_eceran_item = this.obatEceranItems;

		alert(JSON.stringify(this.obatEceran)); 
		this.obatEceranService.createObatEceran(this.obatEceran).subscribe(
	       	data => {
	         	this.location.back();
	         	return true;
	       	},
	       	error => {
		         console.error("Error saving!");
		         return Observable.throw(error);
	       	}
    	);
	}
}