import { NgModule }      				from '@angular/core';
import { RouterModule, Routes }	from '@angular/router';
import { AuthGuard }						from './auth/auth-guard.service';

import { HomeComponent }							from './home.component';
import { RegisterComponent }					from './auth/register.component';
import { LoginComponent }							from './auth/login.component';

import { HistoriTransaksiComponent }   			from './transaksi/histori-transaksi.component';
import { RekapTransaksiComponent }   			from './transaksi/rekap-transaksi.component';
import { TransaksiEksternalDetailComponent }        from './transaksi/transaksi-eksternal-detail.component';
import { TransaksiObatComponent }   			from './transaksi/transaksi-obat.component';
import { TransaksiObatDetailComponent }		from './transaksi/transaksi-obat-detail.component';
import { TransaksiComponent }   			from './transaksi/transaksi.component';
import { TransaksiDetailComponent }		from './transaksi/transaksi-detail.component';

import { PembayaranComponent }   			from './pembayaran/pembayaran.component';
import { PembayaranDetailComponent }  from './pembayaran/pembayaran-detail.component';

import { KlaimComponent }   					from './pembayaran/klaim/klaim.component';
import { KlaimDetailComponent }   		from './pembayaran/klaim/klaim-detail.component';

import { PasienFormComponent }			from './pasien/pasien-form.component';
import { PasienIGDFormComponent }		from './pasien/pasien-igd-form.component';
import { DaftarPasienIGDComponent }	from './antrian/daftar-pasien-igd.component';
import { PasienListComponent }			from './pasien/pasien-list.component';
import { CatatanKematianFormComponent } from './pasien/catatan-kematian-form.component';
import { AntrianComponent }				from './antrian/antrian.component';
import { DaftarAntrianComponent }	    from './antrian/daftar-antrian.component';
import { AntrianDashboardComponent }    from './antrian/antrian-dashboard.component';
import { AntrianTampilanComponent }    from './antrian/antrian-tampilan.component';
import { RekamMedisListComponent }		from './pasien/rekam-medis-list.component';
import { RekamMedisDetailComponent }	from './pasien/rekam-medis-detail.component';
import { RekamMedisEksternalDetailComponent } from './pasien/rekam-medis-eksternal-detail.component';

import { PoliklinikListComponent }		from './layanan/poliklinik-list.component';
import { PoliklinikPemeriksaanComponent }	from './layanan/poliklinik-pemeriksaan.component';

import { LaboratoriumListComponent }				from './layanan/laboratorium-list.component';
import { LaboratoriumPemeriksaanComponent }	from './layanan/laboratorium-pemeriksaan.component';
import { LaboratoriumTindakanComponent }		from './layanan/laboratorium-tindakan.component';

import { AmbulansListComponent }		from './layanan/ambulans-list.component';

import { PemeriksaanICUKamarListComponent }		from './layanan/icu-pemeriksaan-kamar-list.component';
import { PemeriksaanICUPasienListComponent }		from './layanan/icu-pemeriksaan-pasien-list.component';
import { PemeriksaanICUComponent }		from './layanan/icu-pemeriksaan.component';
import { PemeriksaanRawatinapKamarListComponent }		from './layanan/rawatinap-pemeriksaan-kamar-list.component';
import { PemeriksaanRawatinapPasienListComponent }		from './layanan/rawatinap-pemeriksaan-pasien-list.component';
import { PemeriksaanRawatinapComponent }		from './layanan/rawatinap-pemeriksaan.component';
import { BookingRawatinapComponent }		from './layanan/booking-rawatinap.component';
import { BookingRawatinapListComponent }		from './layanan/booking-rawatinap-list.component';
import { RawatinapListComponent }		from './layanan/rawatinap-list.component';
import { ICUListComponent }		from './layanan/icu-list.component';
import { PindahKamarListComponent }		from './layanan/pindahkamar-list.component';
import { PindahICUListComponent }		from './layanan/pindahicu-list.component';
import { KamarOperasiListComponent }		from './layanan/kamar-operasi-list.component';
import { KamarJenazahListComponent }		from './layanan/kamar-jenazah-list.component';
import { KamarRawatinapListComponent }		from './layanan/kamar-rawatinap-list.component';

import { PemeriksaanOperasiComponent }		from './layanan/operasi-pemeriksaan.component';
import { BookingOperasiListComponent }		from './layanan/booking-operasi-list.component';
import { PemakaianKamarListComponent }		from './layanan/pemakaian-kamar.component';
import { PemakaianICUListComponent }		from './layanan/pemakaian-icu.component';
import { PemakaianKamarOperasiListComponent }		from './layanan/pemakaian-kamar-operasi-list.component';
import { PemakaianKamarJenazahListComponent }		from './layanan/pemakaian-kamar-jenazah-list.component';

import { TenagaMedisListComponent } 	from './tenaga-medis/tenaga-medis-list.component';
import { DiagnosisReferenceListComponent }	from './layanan/diagnosis-reference-list.component';
import { TindakanReferenceListComponent }		from './layanan/tindakan-reference-list.component';

import { DokterDashboardComponent }						from './tenaga-medis/dokter-dashboard.component';
import { DokterDashboardRawatinapComponent }						from './tenaga-medis/dokter-dashboard-rawatinap.component';
import { DokterDashboardOperasiComponent }           from './tenaga-medis/dokter-dashboard-operasi.component';
import { PerawatDashboardComponent }					from './tenaga-medis/perawat-dashboard.component';
import { PetugasLabDashboardComponent }				from './tenaga-medis/petugas-lab-dashboard.component';
import { DaftarPemakaianAmbulansComponent }	from './layanan/daftar-pemakaian-ambulans.component';

import { DaftarStokObatComponent }			from './farmasi/stok-obat/daftar-stok-obat.component';
import { DetailStokObatComponent }			from './farmasi/stok-obat/detail-stok-obat.component';

import { DaftarLokasiObatComponent }			from './farmasi/lokasi-obat/daftar-lokasi-obat.component';

import { DaftarObatMasukComponent }		from './farmasi/obat-masuk/daftar-obat-masuk.component';
import { DetailObatMasukComponent }		from './farmasi/obat-masuk/detail-obat-masuk.component';
import { ObatMasukFormComponent }		from './farmasi/obat-masuk/obat-masuk-form.component';

import { DaftarJenisObatComponent }		from './farmasi/jenis-obat/daftar-jenis-obat.component';
import { DetailJenisObatComponent }     from './farmasi/jenis-obat/detail-jenis-obat.component';
import { JenisObatFormComponent }		from './farmasi/jenis-obat/jenis-obat-form.component';
import { EditJenisObatComponent }		from './farmasi/jenis-obat/edit-jenis-obat.component';

import { DaftarObatTebusComponent }			from './farmasi/obat-tebus/daftar-obat-tebus.component';
import { DetailObatTebusComponent }			from './farmasi/obat-tebus/detail-obat-tebus.component';
import { ObatTebusFormComponent }			from './farmasi/obat-tebus/obat-tebus-form.component';
import { ResepEksternalFormComponent }           from './farmasi/obat-tebus/resep-eksternal-form.component';
import { ObatTebusEksternalFormComponent }           from './farmasi/obat-tebus/obat-tebus-eksternal-form.component';

import { DaftarObatPindahComponent }      from './farmasi/obat-pindah/daftar-obat-pindah.component';
import { DetailObatPindahComponent }      from './farmasi/obat-pindah/detail-obat-pindah.component';
import { ObatPindahFormComponent }		from './farmasi/obat-pindah/obat-pindah-form.component';

import { DaftarObatTindakanComponent }      from './farmasi/obat-tindakan/daftar-obat-tindakan.component';
import { DetailObatTindakanComponent }      from './farmasi/obat-tindakan/detail-obat-tindakan.component';

import { DaftarObatRusakComponent }      from './farmasi/obat-rusak/daftar-obat-rusak.component';
import { DetailObatRusakComponent }      from './farmasi/obat-rusak/detail-obat-rusak.component';
import { ObatRusakFormComponent }      from './farmasi/obat-rusak/obat-rusak-form.component';

import { DaftarObatEceranComponent }      from './farmasi/obat-eceran/daftar-obat-eceran.component';
import { DetailObatEceranComponent }      from './farmasi/obat-eceran/detail-obat-eceran.component';
import { ObatEceranFormComponent }      from './farmasi/obat-eceran/obat-eceran-form.component';

import { SelectorStockOpnameComponent }      from './farmasi/stock-opname/selector-stock-opname.component';
import { DaftarStockOpnameComponent }      from './farmasi/stock-opname/daftar-stock-opname.component';
import { DetailStockOpnameComponent }      from './farmasi/stock-opname/detail-stock-opname.component';
import { StockOpnameFormComponent }      from './farmasi/stock-opname/stock-opname-form.component';

import { LaporanComponent }        from './farmasi/laporan/laporan.component';

import { SettingsComponent }        from './settings/settings.component';

const routes: Routes = [

	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'daftar-antrian', component: DaftarAntrianComponent },
	{ path: 'antrian-tampilan', component: AntrianTampilanComponent },
	{ path: '', canActivate: [AuthGuard], component: HomeComponent },
	{ path: 'transaksi', canActivate: [AuthGuard], component: TransaksiComponent },
	{ path: 'transaksi-obat', canActivate: [AuthGuard], component: TransaksiObatComponent },
	{ path: 'histori-transaksi', canActivate: [AuthGuard], component: HistoriTransaksiComponent },
	{ path: 'rekap-transaksi', canActivate: [AuthGuard], component: RekapTransaksiComponent },
	{ path: 'transaksi/:id', canActivate: [AuthGuard], component: TransaksiDetailComponent },
	{ path: 'transaksi-obat/:id', canActivate: [AuthGuard], component: TransaksiObatDetailComponent },
	{ path: 'transaksi-eksternal/:id', canActivate: [AuthGuard], component: TransaksiEksternalDetailComponent },
	{ path: 'pembayaran', canActivate: [AuthGuard], component: PembayaranComponent },
	{ path: 'pembayaran/:id', canActivate: [AuthGuard], component: PembayaranDetailComponent },
	{ path: 'klaim', canActivate: [AuthGuard], component: KlaimComponent },
	{ path: 'klaim/:id', canActivate: [AuthGuard], component: KlaimDetailComponent },
	{ path: 'pendaftaran', canActivate: [AuthGuard], component: PasienFormComponent },
	{ path: 'pendaftaran-igd', canActivate: [AuthGuard], component: PasienIGDFormComponent },
	{ path: 'daftar-pasien-igd', canActivate: [AuthGuard], component: DaftarPasienIGDComponent },
	{ path: 'pendaftaran/:namaLayanan', canActivate: [AuthGuard], component: PasienFormComponent },
	{ path: 'antrian', canActivate: [AuthGuard], component: AntrianComponent },
	{ path: 'antrian/:namaLayanan', canActivate: [AuthGuard], component: AntrianComponent },
	{ path: 'antrian-dashboard', canActivate: [AuthGuard], component: AntrianDashboardComponent },
	{ path: 'daftar-pasien', canActivate: [AuthGuard], component: PasienListComponent },
	{ path: 'pendaftaran', canActivate: [AuthGuard], component: PasienFormComponent},
	{ path: 'catatan-kematian/:kodePasien', canActivate: [AuthGuard], component: CatatanKematianFormComponent},
	{ path: 'rekam_medis/:idPasien', canActivate: [AuthGuard], component: RekamMedisListComponent},
	{ path: 'rekam_medis/:namaLayanan/:idTransaksi/:idPasien', canActivate: [AuthGuard], component: RekamMedisListComponent},
	{ path: 'rekam_medis/:idPasien/:noEntry', canActivate: [AuthGuard], component: RekamMedisDetailComponent},
	{ path: 'rekam_medis_eksternal/:idPasien/:noEntry', canActivate: [AuthGuard], component: RekamMedisEksternalDetailComponent},

	{ path: 'poliklinik', canActivate: [AuthGuard], component: PoliklinikListComponent },
	{ path: 'poliklinik/:namaPoliklinik/:idTransaksi', canActivate: [AuthGuard], component: PoliklinikPemeriksaanComponent },

	{ path: 'laboratorium', canActivate: [AuthGuard], component: LaboratoriumListComponent },
	{ path: 'laboratorium/:namaLaboratorium/:idTransaksi', canActivate: [AuthGuard], component: LaboratoriumPemeriksaanComponent },
	{ path: 'laboratorium/tindakan', canActivate: [AuthGuard], component: LaboratoriumTindakanComponent },

	{ path: 'ambulans', canActivate: [AuthGuard], component: AmbulansListComponent },

	{ path: 'rawatinap', canActivate: [AuthGuard], component: RawatinapListComponent },
	{ path: 'icu', canActivate: [AuthGuard],component: ICUListComponent },

	{ path: 'pemeriksaan/icu', canActivate: [AuthGuard], component: PemeriksaanICUKamarListComponent },
	{ path: 'pemeriksaan/icu/:noKamar', canActivate: [AuthGuard], component: PemeriksaanICUPasienListComponent },
	{ path: 'pemeriksaan/icu/:noKamar/:idPemakaian/:idTransaksi', canActivate: [AuthGuard], component: PemeriksaanICUComponent },

	{ path: 'pemeriksaan/rawatinap', canActivate: [AuthGuard], component: PemeriksaanRawatinapKamarListComponent },
	{ path: 'pemeriksaan/rawatinap/:noKamar', canActivate: [AuthGuard], component: PemeriksaanRawatinapPasienListComponent },
	{ path: 'pemeriksaan/rawatinap/:noKamar/:idPemakaian/:idTransaksi', canActivate: [AuthGuard], component: PemeriksaanRawatinapComponent },

	{ path: 'rawatinap/booking/kamar', canActivate: [AuthGuard], component: BookingRawatinapListComponent },

	{ path: 'daftarbookingrawatinap', canActivate: [AuthGuard], component: BookingRawatinapComponent },

	{ path: 'rawatinap/pindah/:idPemakaian', canActivate: [AuthGuard], component: PindahKamarListComponent },
	{ path: 'icu/pindah/:idPemakaian', canActivate: [AuthGuard], component: PindahICUListComponent },

	{ path: 'kamar-rawatinap', canActivate: [AuthGuard], component: KamarRawatinapListComponent },
	{ path: 'kamar-operasi', canActivate: [AuthGuard], component: KamarOperasiListComponent },
	{ path: 'kamar-jenazah', canActivate: [AuthGuard], component: KamarJenazahListComponent },

	{ path: 'pemakaiankamarrawatinap', canActivate: [AuthGuard], component: PemakaianKamarListComponent },
	{ path: 'pemakaianicu', canActivate: [AuthGuard], component: PemakaianICUListComponent },

	{ path: 'pemakaiankamaroperasi/:noKamar/:idPemakaian/:idTransaksi', canActivate: [AuthGuard], component: PemeriksaanOperasiComponent },
	{ path: 'operasi/booking', canActivate: [AuthGuard], component: BookingOperasiListComponent },
	{ path: 'pemakaiankamaroperasi', canActivate: [AuthGuard], component: PemakaianKamarOperasiListComponent },
	{ path: 'pemakaiankamarjenazah', canActivate: [AuthGuard], component: PemakaianKamarJenazahListComponent },

	{ path: 'tenaga-medis', canActivate: [AuthGuard], component: TenagaMedisListComponent },
	{ path: 'daftar-diagnosis', canActivate: [AuthGuard], component: DiagnosisReferenceListComponent },
	{ path: 'daftar-tindakan', canActivate: [AuthGuard], component: TindakanReferenceListComponent },

	{ path: 'dokter-dashboard', canActivate: [AuthGuard], component: DokterDashboardComponent },
	{ path: 'dokter-rawatinap-dashboard', canActivate: [AuthGuard], component: DokterDashboardRawatinapComponent },
	{ path: 'dokter-operasi-dashboard', canActivate: [AuthGuard], component: DokterDashboardOperasiComponent },
	{ path: 'perawat-dashboard', canActivate: [AuthGuard], component: PerawatDashboardComponent },
	{ path: 'petugas-lab-dashboard', canActivate: [AuthGuard], component: PetugasLabDashboardComponent },
	{ path: 'daftar-pemakaian-ambulans', canActivate: [AuthGuard], component: DaftarPemakaianAmbulansComponent },

	{ path: 'stok-obat', canActivate: [AuthGuard], component: DaftarStokObatComponent },
	{ path: 'stok-obat/:id', canActivate: [AuthGuard], component: DetailStokObatComponent },

	{ path: 'lokasi-obat', canActivate: [AuthGuard], component: DaftarLokasiObatComponent },

	{ path: 'obat-masuk', canActivate: [AuthGuard], component: DaftarObatMasukComponent },
	{ path: 'obat-masuk/:id', canActivate: [AuthGuard], component: DetailObatMasukComponent },
	{ path: 'obat-masuk-form', canActivate: [AuthGuard], component: ObatMasukFormComponent },

	{ path: 'jenis-obat', canActivate: [AuthGuard], component: DaftarJenisObatComponent },
	{ path: 'jenis-obat/:id', canActivate: [AuthGuard], component: DetailJenisObatComponent },
	{ path: 'jenis-obat/edit/:id', canActivate: [AuthGuard], component: EditJenisObatComponent },
	{ path: 'jenis-obat-form', canActivate: [AuthGuard], component: JenisObatFormComponent },

	{ path: 'obat-tebus', canActivate: [AuthGuard], component: DaftarObatTebusComponent },
	{ path: 'obat-tebus/:id', canActivate: [AuthGuard], component: DetailObatTebusComponent },
	{ path: 'obat-tebus-form', canActivate: [AuthGuard], component: ObatTebusFormComponent },
	{ path: 'resep-eksternal-form', canActivate: [AuthGuard], component: ResepEksternalFormComponent },
	{ path: 'obat-tebus-eksternal-form/:id', canActivate: [AuthGuard], component: ObatTebusEksternalFormComponent },

	{ path: 'obat-pindah', canActivate: [AuthGuard], component: DaftarObatPindahComponent },
	{ path: 'obat-pindah/:id', canActivate: [AuthGuard], component: DetailObatPindahComponent },
	{ path: 'obat-pindah-form', canActivate: [AuthGuard], component: ObatPindahFormComponent },

	{ path: 'obat-tindakan', canActivate: [AuthGuard], component: DaftarObatTindakanComponent },
	{ path: 'obat-tindakan/:id', canActivate: [AuthGuard], component: DetailObatTindakanComponent },

	{ path: 'obat-rusak', canActivate: [AuthGuard], component: DaftarObatRusakComponent },
	{ path: 'obat-rusak/:id', canActivate: [AuthGuard], component: DetailObatRusakComponent },
	{ path: 'obat-rusak-form', canActivate: [AuthGuard], component: ObatRusakFormComponent },

	{ path: 'obat-eceran', canActivate: [AuthGuard], component: DaftarObatEceranComponent },
	{ path: 'obat-eceran/:id', canActivate: [AuthGuard], component: DetailObatEceranComponent },
	{ path: 'obat-eceran-form', canActivate: [AuthGuard], component: ObatEceranFormComponent },

	{ path: 'stock-opname', canActivate: [AuthGuard], component: SelectorStockOpnameComponent },
	{ path: 'stock-opname/:lokasi', canActivate: [AuthGuard], component: DaftarStockOpnameComponent },
	{ path: 'detail-stock-opname/:id', canActivate: [AuthGuard], component: DetailStockOpnameComponent },
	{ path: 'stock-opname-form/:lokasi', canActivate: [AuthGuard], component: StockOpnameFormComponent },

	{ path: 'laporan', canActivate: [AuthGuard], component: LaporanComponent },

	{ path: 'settings', canActivate: [AuthGuard], component: SettingsComponent }

];

@NgModule ({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {}
