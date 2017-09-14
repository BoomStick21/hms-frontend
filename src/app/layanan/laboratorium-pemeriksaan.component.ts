import { Component, OnInit }															from '@angular/core';
import { ActivatedRoute, Params, Router }									from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators }	from '@angular/forms';
import { Location }																				from '@angular/common';
import { Observable }																			from 'rxjs/Observable';
import { NgbTypeaheadConfig } 														from '@ng-bootstrap/ng-bootstrap';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

import { Transaksi }						from '../transaksi/transaksi';
import { TransaksiService }			from '../transaksi/transaksi.service';

import { RekamMedis }           from '../pasien/rekam-medis';
import { RekamMedisService }    from '../pasien/rekam-medis.service';

import { Laboratorium }						from './laboratorium';
import { LaboratoriumService }		from './laboratorium.service';

import { Tindakan }             from './tindakan';
import { TindakanReference }		from './tindakan-reference';
import { TindakanService }			from './tindakan.service';

import { HasilLab }             from './hasil-lab';
import { HasilLabService }      from './hasil-lab.service';

@Component({
 	selector: 'laboratorium-pemeriksaan-page',
 	templateUrl: './laboratorium-pemeriksaan.component.html',
 	providers: [
    RekamMedisService,
    LaboratoriumService,
 		TransaksiService,
 		TindakanService,
    HasilLabService
	]
})

export class LaboratoriumPemeriksaanComponent implements OnInit {

	addForm: FormGroup;
	transaksi: any = null;
	laboratorium: Laboratorium;
  rekamMedis: RekamMedis = null;

  allRiwayat: string[] = [];
  allAlergi: string[] = [];

	allTindakanReference: TindakanReference[];

	selectedTindakan: Tindakan[] = [];
  selectedTindakanReference: TindakanReference[] = [];

	inputFormatter = (value : any) => value.nama;
	resultFormatter = (value : any) => value.kode + ' - ' + value.nama;

	searchTindakan = (text$: Observable<string>) =>
		text$
			.debounceTime(200)
			.distinctUntilChanged()
			.map(term => term.length < 2 ? []
				: this.allTindakanReference.filter(tindakanReference => tindakanReference.nama.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

	constructor(
		private route: ActivatedRoute,
		private router: Router,
    private location: Location,
		private transaksiService: TransaksiService,
    private rekamMedisService: RekamMedisService,
		private laboratoriumService: LaboratoriumService,
		private tindakanService: TindakanService,
    private hasilLabService: HasilLabService,
    private config: NgbTypeaheadConfig,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
	) {
		config.editable = false;
	}

	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => this.laboratoriumService.getLaboratorium(params['namaLaboratorium']))
			.subscribe(laboratorium => this.laboratorium = laboratorium);

		this.route.params
			.switchMap((params: Params) => this.transaksiService.getTransaksi(+params['idTransaksi']))
			.subscribe(
        transaksi => {
          this.transaksi = transaksi;
          this.checkRekamMedis();
        }
      );

    this.tindakanService.getAllTindakanReference().subscribe(
      data => { this.allTindakanReference = data }
    );
	}

  checkRekamMedis() {
    this.rekamMedisService.getRekamMedisOfPasien(this.transaksi.transaksi.id_pasien, 0).subscribe(
      data => {
        if (data != null) {
          if (data.tanggal_waktu == this.transaksi.transaksi.waktu_masuk_pasien) {
            this.rekamMedis = data;
          }
          else {
            if (data.anamnesis != null) {
              this.rekamMedis = new RekamMedis(
                this.transaksi.transaksi.id_pasien,
                this.transaksi.transaksi.waktu_masuk_pasien,
                '',
                '',
                data.anamnesis,
                '',
                ''
              );

              this.rekamMedisService.createRekamMedis(this.rekamMedis).subscribe(
                data => {}
              );
            }
          }
        }

        if (this.rekamMedis == null) {
          this.rekamMedis = new RekamMedis(
            this.transaksi.transaksi.id_pasien,
            this.transaksi.transaksi.waktu_masuk_pasien,
            '',
            '',
            '',
            '',
            ''
          );

          this.rekamMedisService.createRekamMedis(this.rekamMedis).subscribe(
            data => {}
          );
        }
      }
    )
  }

	addSelectedTindakan(tindakanReference: TindakanReference) {
		this.selectedTindakanReference.push(tindakanReference);

    let temp = new Tindakan();
    temp.id_transaksi = this.transaksi.transaksi.id;
    temp.harga = tindakanReference.harga;
    temp.keterangan = '';
    temp.id_pembayaran = null;
    temp.kode_tindakan = tindakanReference.kode;
    temp.id_pasien = this.transaksi.transaksi.id_pasien;
    temp.tanggal_waktu = this.rekamMedis.tanggal_waktu;
    temp.np_tenaga_medis = JSON.parse(localStorage.getItem('currentUser')).no_pegawai;
    temp.nama_poli = null;
    temp.nama_lab = this.laboratorium.nama;
    temp.nama_ambulans = null;
    this.selectedTindakan.push(temp);
	}

	removeSelectedTindakan(i: number) {
    this.selectedTindakan.splice(i, 1);
		this.selectedTindakanReference.splice(i, 1);
	}

	goBack(): void {
		this.location.back();
	}

  save() {
		this.tindakanService.saveTindakan(this.selectedTindakan).subscribe(
      data => {
        let toastOptions:ToastOptions = {
          title: 'Success',
          msg: 'Tindakan lab berhasil dipilih',
          showClose: true,
          timeout: 5000,
          theme: 'material'
        };

        this.toastyService.success(toastOptions);
        this.router.navigate(['']);
      },
      error => {
        let toastOptions:ToastOptions = {
          title: 'Error',
          msg: 'Tindakan lab gagal dipilih',
          showClose: true,
          timeout: 5000,
          theme: 'material'
        };

        this.toastyService.error(toastOptions);
      }
    );
	}
}
