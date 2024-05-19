import { useApp } from "../../AppContext";
import Tabel_1 from "./tabel_1";
import Tabel_2 from "./tabel_2";

const LivePreview = () => {
  const {
    nomor_sub_kegiatan,
    text_sub_kegiatan,
    kegiatan,
    subKegiatan,
    textFieldObject,
    points,
    numbers,
    tujuan,
    waktuMulai,
    waktuBerakhir,
    tahunAnggaran,
    bagian,
  } = useApp();

  // console.log(points);
  return (
    <div className="p-4 bg-gray-light/100 h-screen overflow-y-auto overflow-x-auto custom-scrollbar">
      <div className="bg-white border border-black">
        {/* page 1 */}
        <div className="">
          {/*  content */}
          <div className="text-center flex flex-col mt-14">
            <h1 className="">KERANGKA ACUAN KERJA</h1>
            <h1 className="my-10">SUB KEGIATAN</h1>
            <p>{nomor_sub_kegiatan}</p>
            <p className="px-5">{text_sub_kegiatan}</p>
            <div className="flex flex-col gap-8 mt-60">
              <h1>BIRO KESEJAHTERAAN RAKYAT</h1>
              <h1>
                SEKRETARIAT DAERAH PROVINSI JAWA BARAT <br /> TAHUN ANGGARAN
                2014
              </h1>
            </div>
          </div>
        </div>

        <hr className="mt-20" />
        {/* page 2 */}
        <div className="p-10">
          <div className="text flex flex-col">
            <div className="flex">
              <p className="min-w-36">Perangkat Daerah</p>
              <p>: Sekretariat Daerah</p>
            </div>
            <div className="flex">
              <p className="min-w-36">Sub Unit Kerja</p>
              <p>: Biro Kesejahteraan Rakyat</p>
            </div>
            <div className="flex">
              <p className="min-w-36">Program</p>
              <p>: Program Kesejahteraan Rakyat</p>
            </div>
            <div className="flex">
              <p className="min-w-36">Kegiatan</p>
              <p>{`: ${kegiatan?.label ? kegiatan?.label : ""}`}</p>
            </div>
            <div className="flex">
              <p className="min-w-36">Sub Kegiatan</p>
              <p>{`: ${subKegiatan?.label ? subKegiatan?.label : " "}`}</p>
            </div>
            <div className="flex mt-4">
              <p className="min-w-36">Indikator</p>
              <p>{`: ${
                textFieldObject?.indikator ? textFieldObject?.indikator : ""
              }`}</p>
            </div>
            <div className="flex">
              <p className="min-w-36">Target</p>
              <p>{`: ${
                textFieldObject?.target ? textFieldObject?.target : ""
              }`}</p>
            </div>
            <div className="flex">
              <p className="min-w-36">Anggaran</p>
              <p>{`: ${
                textFieldObject?.anggaran ? textFieldObject?.anggaran : ""
              }`}</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <h1 className="text-lg">
              <strong>KERANGKA ACUAN KERJA</strong>
            </h1>
          </div>
          <p className="mt-3">
            <strong>A. LATAR BELAKANG</strong>
          </p>
          <p className="ml-6 mt-2">
            <strong>1. DASAR HUKUM</strong>
          </p>
          <div className="ml-10">
            {(points || []).map((value, index) => (
              <div className="flex">
                <p className="min-w-8" key={index}>
                  {`${value?.label}.`}
                </p>
                <p key={index}>{value?.value}</p>
              </div>
            ))}
          </div>

          <p className="ml-6 mt-2">
            <strong>2. GAMBARAN UMUM</strong>
          </p>
          <p className="ml-10">{`${
            textFieldObject?.gambaran_umum ? textFieldObject?.gambaran_umum : ""
          }`}</p>
          <p className="mt-6">
            <strong>B. OUTPUT YANG DIHASILKAN</strong>
          </p>
          <div className="ml-10">
            {(numbers || []).map((value, index) => (
              <div className="flex">
                <p className="min-w-8" key={index}>
                  {`${value?.label}.`}
                </p>
                <p key={index}>{value?.value}</p>
              </div>
            ))}
          </div>
          {/* C */}
          <p className="mt-6">
            <strong>C. MAKSUD DAN TUJUAN</strong>
          </p>
          <p className="ml-6 mt-2">
            <strong>MAKSUD</strong>
          </p>
          <p className="ml-10">{`${
            textFieldObject?.maksud ? textFieldObject?.maksud : ""
          }`}</p>
          <p className="ml-6 mt-2">
            <strong>TUJUAN</strong>
          </p>
          <div className="ml-10">
            {(tujuan || []).map((value, index) => (
              <div className="flex">
                <p className="min-w-8" key={index}>
                  {`${value?.label}.`}
                </p>
                <p key={index}>{value?.value}</p>
              </div>
            ))}
          </div>

          {/* D */}
          <p className="mt-6">
            <strong>D. PENERIMA MANFAAT</strong>
          </p>
          <p className="ml-10">{`${
            textFieldObject?.penerima_manfaat
              ? textFieldObject?.penerima_manfaat
              : ""
          }`}</p>

          {/* E */}
          <p className="mt-6">
            <strong>E. STRATEGI PELAKSANAAN SUB KEGIATAN</strong>
          </p>
          <p className="ml-10">{`${
            textFieldObject?.strategi_pelaksanaan
              ? textFieldObject?.strategi_pelaksanaan
              : ""
          }`}</p>

          {/* F */}
          <p className="mt-6">
            <strong>F. PEMBIAYAAN</strong>
          </p>
          <p className="ml-10">{`${
            textFieldObject?.pembiayaan ? textFieldObject?.pembiayaan : ""
          }`}</p>

          {/* G */}
          <p className="mt-6">
            <strong>G. PENUTUP</strong>
          </p>
          <p className="ml-10">{`${
            textFieldObject?.penutup ? textFieldObject?.penutup : ""
          }`}</p>
        </div>
        <hr />

        {/* TABEL 1 */}
        <div className="p-6">
          <p className="text-center mb-4">
            <strong>Tabel.1</strong>
          </p>
          <div className="flex flex-col">
            <div className="flex">
              <p className="min-w-32">Sasaran</p>
              <p>:</p>
              <p className="ml-2">
                Tersusunnya Kebijakan Pengembangan Kesejahteraan Rakyat Non
                Pelayanan Dasar Bidang Pemberdayaan Perempuan dan Perlindungan
                Anak, Pengendalian Penduduk dan Keluarga Berencana, Administrasi
                Kependudukan dan Pencatatan Sipil, Pemberdayaan Masyarakat dan
                Desa, Transmigrasi dan Tenaga Kerja Secara Tepat Jumlah Dokumen
              </p>
            </div>
            <div className="flex">
              <p className="min-w-32">Indikator</p>
              <p>:</p>
              <p className="ml-2">Jumlah Dokumen</p>
            </div>
            <div className="flex">
              <p className="min-w-32">Target</p>
              <p>:</p>
              <p className="ml-2">
                {textFieldObject?.target_tabel
                  ? textFieldObject?.target_tabel
                  : ""}
              </p>
            </div>
            <div className="flex">
              <p className="min-w-32">Waktu Mulai</p>
              <p>:</p>
              <p className="ml-2">
                {waktuMulai?.label ? waktuMulai?.label : ""}
              </p>
            </div>
            <div className="flex">
              <p className="min-w-32">Waktu Berakhir</p>
              <p>:</p>
              <p className="ml-2">
                {waktuBerakhir?.label ? waktuBerakhir?.label : " "}
              </p>
            </div>
            <div className="flex">
              <p className="min-w-32">Anggaran</p>
              <p>:</p>
              <p className="ml-2">
                {tahunAnggaran?.label ? tahunAnggaran?.label : ""}
              </p>
            </div>
            <div className="flex">
              <p className="min-w-32">Ketua Tim</p>
              <p>:</p>
              <p className="ml-2">
                {textFieldObject?.ketua_tim ? textFieldObject?.ketua_tim : ""}
              </p>
            </div>
            <p className="text-center mt-4">
              Rencana Aksi Penyusunan Penjabaran Perencanaan Biro Kesra{" "}
              {bagian?.label} Tahun {tahunAnggaran?.label}
            </p>
          </div>
        </div>

        <div className="w-full p-2">
          <Tabel_1 />
        </div>
        <div className="flex justify-around">
          <div className="text-center">
            <p>
              Mengetahui, <br /> Pejabat Pelaksana Teknis Kegiatan
            </p>
            <p className="mt-10">{`(${
              textFieldObject?.NAMA_PPTK ? textFieldObject?.NAMA_PPTK : ""
            })`}</p>
            <p>{`${
              textFieldObject?.NIP_PPTK ? textFieldObject?.NIP_PPTK : ""
            }`}</p>
          </div>
          <div className="text-center">
            {" "}
            <p>
              Penyusun, <br />
              Ketua Tim
            </p>
            <p className="mt-10">
              {" "}
              <p className="mt-10">{`(${
                textFieldObject?.NAMA_KT ? textFieldObject?.NAMA_KT : ""
              })`}</p>
            </p>
            <p>{`${textFieldObject?.NIP_KT ? textFieldObject?.NIP_KT : ""}`}</p>
          </div>
        </div>
        <hr className="my-10" />

        {/* TABEL 2 */}
        <div className="p-6">
          <p className="text-center mb-4">
            <strong>Tabel.2</strong>
          </p>
          <p className="text-center mb-4">
            <strong>
              Rencana Anggaran Biaya Koordinasi dan Sinkronisasi Kebijakan
              Kesejahteraan Rakyat {bagian?.label} Tahun {tahunAnggaran?.label}
            </strong>
          </p>
          <div className="flex flex-col">
            <div className="flex">
              <p className="min-w-32">Sasaran</p>
              <p>:</p>
              <p className="ml-2">
                Tersusunnya Kebijakan Pengembangan Kesejahteraan Rakyat Non
                Pelayanan Dasar NPD II
              </p>
            </div>
            <div className="flex">
              <p className="min-w-32">Indikator</p>
              <p>:</p>
              <p className="ml-2">Jumlah Dokumen</p>
            </div>
            <div className="flex">
              <p className="min-w-32">Target</p>
              <p>:</p>
              <p className="ml-2">
                {textFieldObject?.target_tabel
                  ? textFieldObject?.target_tabel
                  : ""}
              </p>
            </div>
            <div className="flex">
              <p className="min-w-32">Waktu Mulai</p>
              <p>:</p>
              <p className="ml-2">
                {waktuMulai?.label ? waktuMulai?.label : ""}
              </p>
            </div>
            <div className="flex">
              <p className="min-w-32">Waktu Berakhir</p>
              <p>:</p>
              <p className="ml-2">
                {waktuBerakhir?.label ? waktuBerakhir?.label : " "}
              </p>
            </div>
            <div className="flex">
              <p className="min-w-32">Anggaran</p>
              <p>:</p>
              <p className="ml-2">
                {tahunAnggaran?.label ? tahunAnggaran?.label : ""}
              </p>
            </div>
            <div className="flex">
              <p className="min-w-32">Ketua Tim</p>
              <p>:</p>
              <p className="ml-2">
                {textFieldObject?.ketua_tim ? textFieldObject?.ketua_tim : ""}
              </p>
            </div>
          </div>
        </div>

        {/* TABEL 2 */}
        <div className="p-4">
          <Tabel_2 />
        </div>
        <div className="flex justify-around">
          <div className="text-center">
            <p>
              Mengetahui, <br /> Pejabat Pelaksana Teknis Kegiatan
            </p>
            <p className="mt-10">{`(${
              textFieldObject?.NAMA_PPTK ? textFieldObject?.NAMA_PPTK : ""
            })`}</p>
            <p>{`${
              textFieldObject?.NIP_PPTK ? textFieldObject?.NIP_PPTK : ""
            }`}</p>
          </div>
          <div className="text-center">
            {" "}
            <p>
              Penyusun, <br />
              Ketua Tim
            </p>
            <p className="mt-10">
              {" "}
              <p className="mt-10">{`(${
                textFieldObject?.NAMA_KT ? textFieldObject?.NAMA_KT : ""
              })`}</p>
            </p>
            <p>{`${textFieldObject?.NIP_KT ? textFieldObject?.NIP_KT : ""}`}</p>
          </div>
        </div>
        <hr className="my-10" />
      </div>
    </div>
  );
};

export default LivePreview;
