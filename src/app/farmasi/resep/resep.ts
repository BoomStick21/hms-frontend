import { ResepItem } from './resep-item';
import { Transaksi } from '../../transaksi/transaksi';

export class Resep {
	constructor(
	public id: number = null,
	public id_transaksi: number = null,
	public nama: string = "",
	public alamat: string = "",
	public nama_dokter: string = "",
	public umur: number = null,
	public no_telp: string = "",
	public eksternal: boolean = false,
	public resep_item: ResepItem[] = [],
	public transaksi: Transaksi = null
	) {}
}