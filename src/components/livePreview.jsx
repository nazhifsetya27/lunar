import { useApp } from "../AppContext";

const LivePreview = () => {
  const {
    nomor_sub_kegiatan,
    text_sub_kegiatan,
    kegiatan,
    subKegiatan,
    textFieldObject,
    points,
  } = useApp();

  console.log(points);
  return (
    <div className="p-4 bg-gray-light/100 h-screen overflow-y-auto custom-scrollbar">
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
                  {value?.label}
                </p>
                <p key={index}>{value?.value}</p>
              </div>
            ))}
          </div>

          <p className="ml-6 mt-2">
            <strong>2. GAMBARAN UMUM</strong>
          </p>
          <p className="ml-10">{"{GAMBARA UMUM}"}</p>
          <p className="mt-6">
            <strong>B. OUTPUT YANG DIHASILKAN</strong>
          </p>
          <p className="ml-10">{"{OUTPUT}"}</p>
          {/* C */}
          <p className="mt-6">
            <strong>C. MAKSUD DAN TUJUAN</strong>
          </p>
          <p className="ml-6 mt-2">
            <strong>MAKSUD</strong>
          </p>
          <p className="ml-10">{"{MAKSUD}"}</p>
          <p className="ml-6 mt-2">
            <strong>TUJUAN</strong>
          </p>
          <p className="ml-10">{"{TUJUAN}"}</p>
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
