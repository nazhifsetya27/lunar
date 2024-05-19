import { useApp } from "../../AppContext";

const Tabel_1 = () => {
  const {
    lokasi_tabel_1,
    textFieldObject,
    bulan_tabel_1,
    bulan_tabel_2,
    bulan_tabel_3,
    bulan_tabel_4,
    bulan_tabel_5,
    bulan_tabel_6,
    bulan_tabel_7,
  } = useApp();
  //   console.log(bulan_tabel_1);
  return (
    <div className="overflow-x-auto custom-scrollbar">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th rowSpan="2">No</th>
            <th rowSpan="2">Aktivitas</th>
            <th rowSpan="2">Lokasi</th>
            <th rowSpan="2">Output</th>
            <th rowSpan="2">Keterangan</th>
            <th rowSpan="2">Petugas</th>
            <th colSpan="12" className="text-center">
              Bulan
            </th>
          </tr>
          <tr>
            <th>JAN</th>
            <th>FEB</th>
            <th>MAR</th>
            <th>APR</th>
            <th>MEI</th>
            <th>JUN</th>
            <th>JUL</th>
            <th>AGT</th>
            <th>SEPT</th>
            <th>OKT</th>
            <th>NOV</th>
            <th>DES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-purple-400">a</td>
            <td className="bg-purple-400">Persiapan</td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
          </tr>
          {/* a1 */}
          <tr>
            <td></td>
            <td>Rapat Persiapan</td>
            <td>{lokasi_tabel_1?.LOKASI_1}</td>
            <td>Notulen Rapat</td>
            <td>{textFieldObject?.KETERANGAN_RP}</td>
            <td>{textFieldObject?.PETUGAS_RP}</td>
            <td>{bulan_tabel_1.JANUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_1.FEBRUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_1.MARET === true ? "V" : ""}</td>
            <td>{bulan_tabel_1.APRIL === true ? "V" : ""}</td>
            <td>{bulan_tabel_1.MEI === true ? "V" : ""}</td>
            <td>{bulan_tabel_1.JUNI === true ? "V" : ""}</td>
            <td>{bulan_tabel_1.JULI === true ? "V" : ""}</td>
            <td>{bulan_tabel_1.AGUSTUS === true ? "V" : ""}</td>
            <td>{bulan_tabel_1.SEPTEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_1.OKTOBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_1.NOVEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_1.DESEMBER === true ? "V" : ""}</td>
          </tr>
          {/* B */}
          <tr>
            <td className="bg-purple-400">b</td>
            <td className="bg-purple-400">Pelaksanaan</td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
          </tr>
          {/* B1 */}
          <tr>
            <td></td>
            <td>1. Penyusunan Rumusan Bahan Kebijakan </td>
            <td>{lokasi_tabel_1?.LOKASI_2}</td>
            <td>Dokumen Rumusan Bahan Kebijakan</td>
            <td>{textFieldObject?.KETERANGAN_PRBK}</td>
            <td>{textFieldObject?.PETUGAS_PRBK}</td>
            <td>{bulan_tabel_2.JANUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_2.FEBRUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_2.MARET === true ? "V" : ""}</td>
            <td>{bulan_tabel_2.APRIL === true ? "V" : ""}</td>
            <td>{bulan_tabel_2.MEI === true ? "V" : ""}</td>
            <td>{bulan_tabel_2.JUNI === true ? "V" : ""}</td>
            <td>{bulan_tabel_2.JULI === true ? "V" : ""}</td>
            <td>{bulan_tabel_2.AGUSTUS === true ? "V" : ""}</td>
            <td>{bulan_tabel_2.SEPTEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_2.OKTOBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_2.NOVEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_2.DESEMBER === true ? "V" : ""}</td>
          </tr>
          {/* B2 */}
          <tr>
            <td></td>
            <td>2. Monitoring dan Evaluasi</td>
            <td>{lokasi_tabel_1?.LOKASI_3}</td>
            <td>Dokumen Laporan Monitoring dan Evaluasi </td>
            <td>{textFieldObject?.KETERANGAN_MNE}</td>
            <td>{textFieldObject?.PETUGAS_MNE}</td>
            <td>{bulan_tabel_3.JANUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_3.FEBRUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_3.MARET === true ? "V" : ""}</td>
            <td>{bulan_tabel_3.APRIL === true ? "V" : ""}</td>
            <td>{bulan_tabel_3.MEI === true ? "V" : ""}</td>
            <td>{bulan_tabel_3.JUNI === true ? "V" : ""}</td>
            <td>{bulan_tabel_3.JULI === true ? "V" : ""}</td>
            <td>{bulan_tabel_3.AGUSTUS === true ? "V" : ""}</td>
            <td>{bulan_tabel_3.SEPTEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_3.OKTOBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_3.NOVEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_3.DESEMBER === true ? "V" : ""}</td>
          </tr>
          {/* B3 */}
          <tr>
            <td></td>
            <td>3. Penyusunan Kajian</td>
            <td>{lokasi_tabel_1?.LOKASI_4}</td>
            <td>Dokumen Laporan Hasil Kajian</td>
            <td>{textFieldObject?.KETERANGAN_PK}</td>
            <td>{textFieldObject?.PETUGAS_PK}</td>
            <td>{bulan_tabel_4.JANUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_4.FEBRUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_4.MARET === true ? "V" : ""}</td>
            <td>{bulan_tabel_4.APRIL === true ? "V" : ""}</td>
            <td>{bulan_tabel_4.MEI === true ? "V" : ""}</td>
            <td>{bulan_tabel_4.JUNI === true ? "V" : ""}</td>
            <td>{bulan_tabel_4.JULI === true ? "V" : ""}</td>
            <td>{bulan_tabel_4.AGUSTUS === true ? "V" : ""}</td>
            <td>{bulan_tabel_4.SEPTEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_4.OKTOBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_4.NOVEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_4.DESEMBER === true ? "V" : ""}</td>
          </tr>
          {/* B4 */}
          <tr>
            <td></td>
            <td>4. Fasilitasi dan Koordinasi</td>
            <td>{lokasi_tabel_1?.LOKASI_5}</td>
            <td>Dokumen Hasil Fasilitasi dan Koordinasi</td>
            <td>{textFieldObject?.KETERANGAN_FNK}</td>
            <td>{textFieldObject?.PETUGAS_FNK}</td>
            <td>{bulan_tabel_5.JANUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_5.FEBRUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_5.MARET === true ? "V" : ""}</td>
            <td>{bulan_tabel_5.APRIL === true ? "V" : ""}</td>
            <td>{bulan_tabel_5.MEI === true ? "V" : ""}</td>
            <td>{bulan_tabel_5.JUNI === true ? "V" : ""}</td>
            <td>{bulan_tabel_5.JULI === true ? "V" : ""}</td>
            <td>{bulan_tabel_5.AGUSTUS === true ? "V" : ""}</td>
            <td>{bulan_tabel_5.SEPTEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_5.OKTOBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_5.NOVEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_5.DESEMBER === true ? "V" : ""}</td>
          </tr>
          {/* B5 */}
          <tr>
            <td></td>
            <td>5. Kunjungan Kerja</td>
            <td>{lokasi_tabel_1?.LOKASI_6}</td>
            <td>Dokumen Hasil kunjungan kerja</td>
            <td>{textFieldObject?.KETERANGAN_KK}</td>
            <td>{textFieldObject?.PETUGAS_KK}</td>
            <td>{bulan_tabel_6.JANUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_6.FEBRUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_6.MARET === true ? "V" : ""}</td>
            <td>{bulan_tabel_6.APRIL === true ? "V" : ""}</td>
            <td>{bulan_tabel_6.MEI === true ? "V" : ""}</td>
            <td>{bulan_tabel_6.JUNI === true ? "V" : ""}</td>
            <td>{bulan_tabel_6.JULI === true ? "V" : ""}</td>
            <td>{bulan_tabel_6.AGUSTUS === true ? "V" : ""}</td>
            <td>{bulan_tabel_6.SEPTEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_6.OKTOBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_6.NOVEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_6.DESEMBER === true ? "V" : ""}</td>
          </tr>

          {/* C */}
          <tr>
            <td className="bg-purple-400">c</td>
            <td className="bg-purple-400">Pelaporan</td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
            <td className="bg-purple-400"></td>
          </tr>
          {/* C1 */}
          <tr>
            <td></td>
            <td>
              berisi aktivitas yang dilakukan dalam pelaksanaan seluruh program
              kegiatan
            </td>
            <td>{lokasi_tabel_1?.LOKASI_7}</td>
            <td>Dokumen Laporan Bidang Kesra NPD II</td>
            <td>{textFieldObject?.KETERANGAN_PELAPORAN}</td>
            <td>{textFieldObject?.PETUGAS_PELAPORAN}</td>
            <td>{bulan_tabel_7.JANUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_7.FEBRUARI === true ? "V" : ""}</td>
            <td>{bulan_tabel_7.MARET === true ? "V" : ""}</td>
            <td>{bulan_tabel_7.APRIL === true ? "V" : ""}</td>
            <td>{bulan_tabel_7.MEI === true ? "V" : ""}</td>
            <td>{bulan_tabel_7.JUNI === true ? "V" : ""}</td>
            <td>{bulan_tabel_7.JULI === true ? "V" : ""}</td>
            <td>{bulan_tabel_7.AGUSTUS === true ? "V" : ""}</td>
            <td>{bulan_tabel_7.SEPTEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_7.OKTOBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_7.NOVEMBER === true ? "V" : ""}</td>
            <td>{bulan_tabel_7.DESEMBER === true ? "V" : ""}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabel_1;
