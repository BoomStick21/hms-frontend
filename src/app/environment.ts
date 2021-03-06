const baseUrl = "http://127.0.0.1:8000";

export var ENV = {
	registerUrl: baseUrl + "/api/register",
	loginUrl: baseUrl + "/api/login",
	getUserDetailsUrl: baseUrl + "/api/get_user_details",
	updateUserKategoriUrl: baseUrl + "/api/update_user_kategori",

	transaksiUrl: baseUrl + "/api/transaksi",
	transaksiEksternalUrl: baseUrl + "/api/transaksi_eksternal",
	pembayaranUrl: baseUrl + "/api/pembayaran",
	klaimUrl: baseUrl + "/api/klaim",
	settingsUrl: baseUrl + "/api/setting_bpjs",
	rujukanUrl: baseUrl + "/api/rujukan",
	sepUrl: baseUrl + "/api/sep",

	pasienUrl: baseUrl + "/api/pasien",
	rekamMedisUrl: baseUrl + "/api/rekam_medis",
	rekamMedisEksternalUrl: baseUrl + '/api/rekam_medis_eksternal',
	antrianUrl: baseUrl + "/api/antrian",
	antrianFrontOfficeUrl: baseUrl + "/api/antrian_front_office",
	asuransiUrl: baseUrl + "/api/asuransi",
	catatanKematianUrl: baseUrl + "/api/catatan_kematian",

	diagnosisReferenceUrl: baseUrl + "/api/daftar_diagnosis",
	tindakanReferenceUrl: baseUrl + "/api/daftar_tindakan",
	diagnosisUrl: baseUrl + "/api/diagnosis",
	tindakanUrl: baseUrl + "/api/tindakan",
	tindakanOperasiUrl: baseUrl + "/api/tindakan_operasi",
	poliklinikUrl: baseUrl + "/api/poliklinik",
	laboratoriumUrl: baseUrl + "/api/laboratorium",
	ambulansUrl: baseUrl + "/api/ambulans",
	hasilLabUrl: baseUrl + "/api/hasil_lab",
	tenagaMedisUrl: baseUrl + "/api/tenaga_medis",
	dokterUrl: baseUrl + "/api/dokter",

	tempattidurUrl : baseUrl + "/api/tempattidur",
	rawatinapUrl : baseUrl + "/api/rawatinap",

	jasaDokterRawatinapUrl : baseUrl + "/api/jasa_dokter_rawat_inap",
	jasaDokterOperasiUrl : baseUrl + "/api/jasa_dokter_operasi",
	pemakaianKamarRawatinapUrl : baseUrl + "/api/pemakaiankamarrawatinap",
	pemakaianKamarOperasiUrl : baseUrl + "/api/pemakaiankamaroperasi",
	pemakaianKamarJenazahUrl : baseUrl + "/api/pemakaiankamarjenazah",
	kamarOperasiUrl : baseUrl + "/api/kamaroperasi",
	kamarJenazahUrl : baseUrl + "/api/kamarjenazah",
	bookingKamarUrl : baseUrl + "/api/booking_kamar",

	resepUrl: baseUrl + "/api/resep",
	lokasiObatUrl: baseUrl + "/api/lokasi_obat",
	jenisObatUrl: baseUrl + "/api/jenis_obat",
	stokObatUrl: baseUrl + "/api/stok_obat",
	obatMasukUrl: baseUrl + "/api/obat_masuk",
	obatTebusUrl: baseUrl + "/api/obat_tebus",
	obatTindakanUrl: baseUrl + "/api/obat_tindakan",
	obatPindahUrl: baseUrl + "/api/obat_pindah",
	obatRusakUrl: baseUrl + "/api/obat_rusak",
	obatEceranUrl: baseUrl + "/api/obat_eceran",
	stockOpnameUrl: baseUrl + "/api/stock_opname",
}
