import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }             from 'rxjs/Observable';
import { NgbTypeaheadConfig }   from '@ng-bootstrap/ng-bootstrap';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

import { Pasien }               from './pasien';
import { PasienService }        from './pasien.service';
import { RekamMedis }           from './rekam-medis';
import { RekamMedisService }    from './rekam-medis.service';
import { HasilPemeriksaan }     from '../layanan/hasil-pemeriksaan';
import { AntrianService }       from '../antrian/antrian.service';
import { Asuransi }             from './asuransi';
import { AsuransiService }      from './asuransi.service';
import { Rujukan }              from '../transaksi/rujukan';
import { RujukanService }       from '../transaksi/rujukan.service';
import { TransaksiService}      from '../transaksi/transaksi.service';
import { DiagnosisReference }   from '../layanan/diagnosis-reference';
import { DiagnosisService }     from '../layanan/diagnosis.service';

@Component({
  selector: 'pasien-form',
  templateUrl: './pasien-igd-form.component.html',
  providers: [
    DiagnosisService,
    PasienService,
    RekamMedisService,
    AntrianService,
    AsuransiService,
    TransaksiService,
    RujukanService,
    NgbTypeaheadConfig
  ]
})
export class PasienIGDFormComponent implements OnInit {
  tipe: string;
  dokter: string;
	search: string;
  searchDone: boolean;
  update: boolean;
  isBpjs: boolean = false;
  isBpjsVerified: boolean = true;
  isVerified: boolean;
  nomor_pasien: string;
  no_sep: string;
  fromAntrian: boolean = false;
  sub: any;
  asuransi: Asuransi;
  pasien: Pasien;
  rujukan: Rujukan;
  rujukanChecked: boolean;
  asuransiChecked:boolean;
  allAsuransi: Asuransi[];
  allPasien: Pasien[] = [];
  allDiagnosisReference: DiagnosisReference[];
  hasilPemeriksaan: HasilPemeriksaan = new HasilPemeriksaan();

  constructor(
    private router: Router,
    private diagnosisService: DiagnosisService,
    private pasienService: PasienService,
    private rekamMedisService: RekamMedisService,
    private antrianService: AntrianService,
    private asuransiService: AsuransiService,
    private transaksiService: TransaksiService,
    private rujukanService: RujukanService,
    private config: NgbTypeaheadConfig,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    config.editable = false;
  }

  submitted = false;
  genders = [{id: 1, nama: 'Laki-laki'}, {id: 2, nama: 'Perempuan'}];
  religions = ['Islam', 'Protestan', 'Katolik', 'Buddha', 'Hindu', 'Konghucu'];
  bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  allNamaAsuransi = ['bpjs', 'bumidaya', 'prudential', 'aig'];

  inputFormatter = (value : any) => value.nama;
  resultFormatter = (value : any) => value.kode + ' - ' + value.nama;

  searchDiagnosis = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.allDiagnosisReference.filter(diagnosisReference => diagnosisReference.nama.toLowerCase().indexOf(term.toLowerCase()) > -1));


  ngOnInit() {
    this.pasien = new Pasien();
    this.asuransi = new Asuransi();
    this.rujukan = new Rujukan();
    this.rujukanChecked = false;
    this.asuransiChecked = false;
    this.searchDone = false;

    this.diagnosisService.getAllDiagnosisReference().subscribe(
      data => { this.allDiagnosisReference = data }
    )
  }

  addDiagnosis(diagnosisReference: DiagnosisReference) {
    this.rujukan.diagnosis = diagnosisReference.nama;
  }

  searchPasien() {
    if (this.search) {
      if (this.search.match(/\d/)) {
        this.allPasien = [];
        this.pasienService.getPasien(this.search)
          .subscribe(allPasien => {
            if (allPasien) {
              this.allPasien.push(allPasien);
              this.pasien = this.allPasien[0];
              this.selectPasien();
            }
          });
      } else {
         this.pasienService.getPasienByName(this.search)
          .subscribe(allPasien => this.allPasien = allPasien);
      }
    }
  }

  selectPasien() {
    this.asuransiService.getAsuransi(this.pasien.id).subscribe(allAsuransi => this.allAsuransi = allAsuransi);
    this.searchDone = true;
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  pakaiAsuransi(asuransi: Asuransi) {
    this.asuransi.nama_asuransi = asuransi.nama_asuransi;
    this.asuransi.no_kartu = asuransi.no_kartu;
    this.cekAsuransi();
  }

  getRujukan() {
    this.transaksiService.getRujukan(this.rujukan.no_rujukan).subscribe(data => {
        if (data.metadata.code == '200') {
          this.isVerified = true;
          this.rujukan.diagnosis = data.data_rujukan.response.item.diagnosa.kdDiag + '-' +  data.data_rujukan.response.item.diagnosa.nmDiag;
          this.nomor_pasien = data.data_rujukan.response.item.peserta.noKartu;
          this.rujukan.asal_rujukan = data.data_rujukan.response.item.provKunjungan.nmProvider;
          this.rujukan.keterangan = data.data_rujukan.response.item.catatan;
          this.no_sep = data.response;

          let toastOptions:ToastOptions = {
              title: "Verifikasi Berhasil !",
              msg: "Nomor rujukan yang dimasukkan sudah valid.",
              showClose: true,
              timeout: 5000,
              theme: 'material'
          };

          this.toastyService.success(toastOptions);

          if (this.isBpjs) {
            if (this.asuransi.no_kartu != this.nomor_pasien) {
              let toastOptions:ToastOptions = {
                title: "Verifikasi Gagal !",
                msg: "Nomor kartu bpjs yang dimasukkan tidak valid.",
                showClose: true,
                timeout: 5000,
                theme: 'material'
              };

              this.toastyService.error(toastOptions);
              this.isBpjsVerified = false;
            } else {
              this.isBpjsVerified = true;
            }
          }
        } else {
          this.isVerified = false;
          let toastOptions:ToastOptions = {
              title: "Verifikasi Gagal !",
              msg: "Nomor rujukan yang dimasukkan tidak valid.",
              showClose: true,
              timeout: 5000,
              theme: 'material'
          };

          this.toastyService.error(toastOptions);
        }
      });
  }

  cekBpjs() {
    if (this.asuransi.no_kartu != this.nomor_pasien) {
      let toastOptions:ToastOptions = {
        title: "Verifikasi Gagal !",
        msg: "Nomor kartu bpjs yang dimasukkan tidak valid.",
        showClose: true,
        timeout: 5000,
        theme: 'material'
      };

      this.toastyService.error(toastOptions);
      this.isBpjsVerified = false;
    } else {
      let toastOptions:ToastOptions = {
          title: "Verifikasi Berhasil !",
          msg: "Nomor kartu bpjs yang dimasukkan sudah valid.",
          showClose: true,
          timeout: 5000,
          theme: 'material'
      };

      this.toastyService.success(toastOptions);
      this.isBpjsVerified = true;
    }
  }

  cekAsuransi() {
    if (this.asuransi.nama_asuransi === 'bpjs') {
      this.rujukanChecked = true;
      this.isBpjs = true;
    } else {
      this.isBpjs = false;
    }
  }

  createRekamMedis(id_pasien: number, waktu_masuk_pasien: string) {
    let rekamMedis = new RekamMedis(
      id_pasien,
      waktu_masuk_pasien,
      '',
      JSON.stringify(this.hasilPemeriksaan),
      '',
      '',
      ''
    );

    this.rekamMedisService.createRekamMedis(rekamMedis).subscribe(
      data => {
        this.ngOnInit();
      }
    );
  }

  createAntrian(id_transaksi: number, id_pasien: number, waktu_masuk_pasien: string) {
    let request: any = {
      id_transaksi: id_transaksi,
      nama_layanan_poli: 'IGD',
      kesempatan: 3,
      id_pasien: this.pasien.id
    };

    this.antrianService.createAntrian(request).subscribe(
      data => {
        this.createRekamMedis(id_pasien, waktu_masuk_pasien);
      },
      error => {}
    );
  }

  createRujukan(id_transaksi: number, id_pasien: number, waktu_masuk_pasien: string) {
    this.rujukan.id_transaksi = id_transaksi;
    this.rujukanService.createRujukan(this.rujukan).subscribe(
      data => {
        this.createAntrian(id_transaksi, id_pasien, waktu_masuk_pasien);
      }
    );
  }

  createTransaksi() {
    let kode_jenis_pasien:number = 1;
    let payload: any;
    if (this.asuransiChecked) {
      kode_jenis_pasien = 2;
    }
    if (this.asuransi.nama_asuransi == 'bpjs') {
      payload = {
        id_pasien: this.pasien.id,
        no_sep: this.no_sep,
        kode_jenis_pasien: kode_jenis_pasien,
        asuransi_pasien: this.asuransi.nama_asuransi,
        jenis_rawat: 2,
      };
    }
    else {
      payload = {
        id_pasien: this.pasien.id,
        kode_jenis_pasien: kode_jenis_pasien,
        asuransi_pasien: this.asuransi.nama_asuransi,
        jenis_rawat: 2,
      };
    }
    if (this.rujukanChecked)
      payload.rujukan = true;
    else
      payload.rujukan = false;

    let request: any = {
      transaksi : payload
    }
    this.transaksiService.createTransaksi(request).subscribe(
      data => {
         if (data.code === 500) {
          let toastOptions:ToastOptions = {
            title: "Registrasi Pasien Gagal !",
            msg: data.message,
            showClose: true,
            timeout: 5000,
            theme: 'material'
          };

          this.toastyService.error(toastOptions);
        } else {
          if (this.rujukanChecked)
            this.createRujukan(data.transaksi.id, data.transaksi.id_pasien, data.transaksi.waktu_masuk_pasien);
          else
            this.createAntrian(data.transaksi.id, data.transaksi.id_pasien, data.transaksi.waktu_masuk_pasien);
        }
      }
    );
  }

  createAsuransi() {
    this.asuransi.id_pasien = this.pasien.id;
    let asuransi:any = { asuransi: this.asuransi };
    this.asuransiService.createAsuransi(asuransi).subscribe(
      data => {this.createTransaksi()}
    );
  }

  createPasien() {
    if (this.asuransi.nama_asuransi === 'bpjs' && !this.rujukanChecked) {
      let toastOptions:ToastOptions = {
          title: "Registrasi Pasien Gagal !",
          msg: "Pasien BPJS harus memasukkan nomor rujukan.",
          showClose: true,
          timeout: 5000,
          theme: 'material'
      };

      this.toastyService.error(toastOptions);
    } else if (!this.isBpjsVerified) {
      let toastOptions:ToastOptions = {
          title: "Registrasi Pasien Gagal !",
          msg: "Nomor bpjs masih belum valid.",
          showClose: true,
          timeout: 5000,
          theme: 'material'
      };

      this.toastyService.error(toastOptions);
    } else {
      if (this.update) {
        this.pasienService.updatePasien(this.pasien.id, this.pasien).subscribe(
          data => {
            if (data.status === 202) {
              let toastOptions:ToastOptions = {
                title: "Registrasi Pasien Gagal !",
                msg: data.json.error,
                showClose: true,
                timeout: 5000,
                theme: 'material'
              };

              this.toastyService.error(toastOptions);
            } else {
              this.pasien = data.json;
              if (this.asuransiChecked)
                this.createAsuransi();
              else
                this.createTransaksi();
            }
          }
        );
      } else {
        this.pasienService.createPasien(this.pasien).subscribe(
          data => {
            this.pasien = data.json;
            if (data.status === 201) {
              let toastOptions: ToastOptions = {
                  title: 'Registrasi Pasien Sukses !',
                  msg: 'Anda mendapat kode pasien: ' + data.json.kode_pasien,
                  showClose: true,
                  timeout: 5000,
                  theme: 'material'
              };
              this.toastyService.success(toastOptions);
            }
            if (data.status === 202) {
              let toastOptions:ToastOptions = {
                title: "Registrasi Pasien Gagal !",
                msg: data.json.error,
                showClose: true,
                timeout: 5000,
                theme: 'material'
              };

              this.toastyService.error(toastOptions);
            } else {
              if (this.asuransiChecked)
                this.createAsuransi();
              else
                this.createTransaksi();
            }
          }
        );
      }
    }
  }

  checkHasilPemeriksaan() {
    if (this.hasilPemeriksaan.berat_badan == '' || parseInt(this.hasilPemeriksaan.berat_badan) <= 0 || parseInt(this.hasilPemeriksaan.berat_badan) > 300) {
      return false;
    }
    else if (this.hasilPemeriksaan.tinggi_badan == '' || parseInt(this.hasilPemeriksaan.tinggi_badan) <= 0 || parseInt(this.hasilPemeriksaan.nadi) > 300) {
      return false;
    }
    else if (this.hasilPemeriksaan.frekuensi_napas == '' || parseInt(this.hasilPemeriksaan.frekuensi_napas) <= 0 || parseInt(this.hasilPemeriksaan.frekuensi_napas) > 150) {
      return false;
    }
    else if (this.hasilPemeriksaan.nadi == '' || parseInt(this.hasilPemeriksaan.nadi) <= 0 || parseInt(this.hasilPemeriksaan.nadi) > 150) {
      return false;
    }
    else if (this.hasilPemeriksaan.temperatur == '' || parseInt(this.hasilPemeriksaan.temperatur) <= 0 || parseInt(this.hasilPemeriksaan.temperatur) > 45) {
      return false;
    }
    else if (this.hasilPemeriksaan.tekanan_darah == '')
      return false;
    else
      return true;
  }

  daftarkan() {
    if (this.checkHasilPemeriksaan()) {
      this.createPasien();
    }
    else {
      let toastOptions:ToastOptions = {
        title: 'Error',
        msg: 'Hasil pemeriksaan awal kosong atau tidak tepat',
        showClose: true,
        timeout: 5000,
        theme: 'material'
      };
      this.toastyService.error(toastOptions);
    }
  }
}
