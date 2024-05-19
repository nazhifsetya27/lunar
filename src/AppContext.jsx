import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"; // Import axios
import { handleValueBulan, months } from "./utils/utils";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  /* STATES */
  // DROPDOWN
  const [kegiatan, setKegiatan] = useState(null);
  const [subKegiatan, setSubKegiatan] = useState(null);
  const [waktuMulai, setWaktuMulai] = useState(null);
  const [waktuBerakhir, setWaktuBerakhir] = useState(null);
  const [tahunAnggaran, setTahunAnggaran] = useState(null);
  const [lokasi_tabel_1, setLokasi_tabel_1] = useState({});
  const [bagian, setBagian] = useState();

  /* bulan tabel 1 */
  const [bulan_tabel_1, setBulan_tabel_1] = useState({});
  const [bulan_tabel_2, setBulan_tabel_2] = useState({});
  const [bulan_tabel_3, setBulan_tabel_3] = useState({});
  const [bulan_tabel_4, setBulan_tabel_4] = useState({});
  const [bulan_tabel_5, setBulan_tabel_5] = useState({});
  const [bulan_tabel_6, setBulan_tabel_6] = useState({});
  const [bulan_tabel_7, setBulan_tabel_7] = useState({});

  const [monthValuesRP, setMonthValuesRP] = useState({});
  const [monthValuesPRBK, setMonthValuesPRBK] = useState({});
  const [monthValuesMNE, setMonthValuesMNE] = useState({});
  const [monthValuesPK, setMonthValuesPK] = useState({});
  const [monthValuesFNK, setMonthValuesFNK] = useState({});
  const [monthValuesKK, setMonthValuesKK] = useState({});
  const [monthValuesPELAPORAN, setMonthValuesKKPELAPORAN] = useState({});

  useEffect(() => {
    const bulanRPFlags = handleValueBulan(bulan_tabel_1, "_RP");
    const bulanPRBKFlags = handleValueBulan(bulan_tabel_2, "_PRBK");
    const bulanMNEFlags = handleValueBulan(bulan_tabel_3, "_MNE");
    const bulanPKFlags = handleValueBulan(bulan_tabel_4, "_PK");
    const bulanFNKFlags = handleValueBulan(bulan_tabel_5, "_FNK");
    const bulanKKFlags = handleValueBulan(bulan_tabel_6, "_KK");
    const bulanPELAPORANFlags = handleValueBulan(bulan_tabel_7, "_PLPR");

    const generateMonthValues = (bulanFlags, prefix, setMonthValues) => {
      const monthValues = {};
      months.forEach((month) => {
        monthValues[`${month}_${prefix}`] = bulanFlags[`${month}_${prefix}`]
          ? "V"
          : "";
      });
      setMonthValues(monthValues);
    };

    generateMonthValues(bulanRPFlags, "RP", setMonthValuesRP);
    generateMonthValues(bulanPRBKFlags, "PRBK", setMonthValuesPRBK);
    generateMonthValues(bulanMNEFlags, "MNE", setMonthValuesMNE);
    generateMonthValues(bulanPKFlags, "PK", setMonthValuesPK);
    generateMonthValues(bulanFNKFlags, "FNK", setMonthValuesFNK);
    generateMonthValues(bulanKKFlags, "KK", setMonthValuesKK);
    generateMonthValues(bulanPELAPORANFlags, "PLPR", setMonthValuesKKPELAPORAN);
  }, [
    bulan_tabel_1,
    bulan_tabel_2,
    bulan_tabel_3,
    bulan_tabel_4,
    bulan_tabel_5,
    bulan_tabel_6,
    bulan_tabel_7,
  ]);
  /* end of bulan tabel 1 */

  // TEXTFIELD
  const [textFieldValues, setTextFieldValues] = useState([]);
  const [points, setPoints] = useState([{ label: "A", value: "" }]);
  const [numbers, setNumbers] = useState([{ label: 1, value: "" }]);
  const [tujuan, setTujuan] = useState([{ label: 1, value: "" }]);

  // value to conditionally render sub_kegiatan
  const [currentKegiatan, setCurrentKegiatan] = useState(null);
  /* END STATES */

  /* HANDLE CHANGE */
  const handleChangeTextField = (event) => {
    const { name, value } = event.target;
    const index = textFieldValues.findIndex((item) => item.name === name);
    if (index !== -1) {
      const updatedTextFieldValues = [...textFieldValues];
      updatedTextFieldValues[index] = { name, value };
      setTextFieldValues(updatedTextFieldValues);
    } else {
      setTextFieldValues((prevValues) => [...prevValues, { name, value }]);
    }
  };

  const nomor_sub_kegiatan = subKegiatan?.label.split(" ")[0];
  const text_sub_kegiatan = subKegiatan?.label.split(" ").slice(1).join(" ");

  const textFieldObject = textFieldValues.reduce((acc, curr) => {
    acc[curr.name] = curr.value;
    return acc;
  }, {});
  // console.log(textFieldValues);
  // console.log(textFieldObject.indikator);

  /* handle value bulan tabel 2 */
  const generateMonthlyValues = (prefix) => {
    const monthKeys = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MEI",
      "JUN",
      "JUL",
      "AGT",
      "SEP",
      "OKT",
      "NOV",
      "DES",
    ];
    const monthlyValues = {};
    monthKeys.forEach((month) => {
      const key = `${month}_${prefix}`;
      monthlyValues[key] = textFieldObject[key];
    });
    return monthlyValues;
  };

  const monthlyValuesHonorNarsum = generateMonthlyValues("1");
  const monthlyValuesHonorFGDNarsum = generateMonthlyValues("2");
  const monthlyValuesMakanMinumRapat = generateMonthlyValues("3");
  const monthlyValuesSnack = generateMonthlyValues("4");
  const monthlyValuesMeetingDalamKota = generateMonthlyValues("5");
  const monthlyValues6 = generateMonthlyValues("6");
  const monthlyValues7 = generateMonthlyValues("7");
  const monthlyValues8 = generateMonthlyValues("8");
  const monthlyValues9 = generateMonthlyValues("9");
  const monthlyValues10 = generateMonthlyValues("10");
  const monthlyValues11 = generateMonthlyValues("11");
  const monthlyValues12 = generateMonthlyValues("12");
  const monthlyValues13 = generateMonthlyValues("13");
  const monthlyValues14 = generateMonthlyValues("14");
  const monthlyValues15 = generateMonthlyValues("15");
  const monthlyValues16 = generateMonthlyValues("16");
  const monthlyValues17 = generateMonthlyValues("17");
  const monthlyValues18 = generateMonthlyValues("18");
  const monthlyValues19 = generateMonthlyValues("19");
  const monthlyValues20 = generateMonthlyValues("20");
  const monthlyValues21 = generateMonthlyValues("21");
  const monthlyValues22 = generateMonthlyValues("22");
  const monthlyValues23 = generateMonthlyValues("23");
  const monthlyValues24 = generateMonthlyValues("24");
  const monthlyValues25 = generateMonthlyValues("25");
  const monthlyValues26 = generateMonthlyValues("26");
  const monthlyValues27 = generateMonthlyValues("27");
  const monthlyValues28 = generateMonthlyValues("28");
  const monthlyValues29 = generateMonthlyValues("29");
  // console.log({ monthlyValuesHonorNarsum, monthlyValuesHonorFGDNarsum });

  /* end of handle value bulan tabel 2 */

  const pointsObject = points.reduce((acc, curr) => {
    acc[curr?.label] = curr.value;
    return acc;
  }, {});

  const numbersObject = numbers.reduce((acc, curr) => {
    acc[curr?.label] = curr.value;
    return acc;
  }, {});

  const tujuanObject = tujuan.reduce((acc, curr) => {
    acc[curr?.label] = curr.value;
    return acc;
  }, {});

  const isFlags = {};
  const alphabets = "ABCDEFGH".split("");
  alphabets.forEach((letter) => {
    isFlags[`IS_${letter}`] = pointsObject[letter] ? true : false;
  });

  const isFlagsOutput = {};
  numbers.forEach((numObj) => {
    const label = numObj?.label;
    isFlagsOutput[`ISOUTPUT_${label}`] = numObj.value ? true : false;
  });

  const isFlagsTujuan = {};
  tujuan.forEach((numObj) => {
    const label = numObj?.label;
    isFlagsTujuan[`ISTUJUAN_${label}`] = numObj.value ? true : false;
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("https://app.documentero.com/api", {
        document: "zTOUbOvrBivFiC6oQBBa",
        apiKey: "RBI7YDQ-P5METOI-RX34ZBY-CN6K7FI",
        format: "docx",
        data: {
          NOMOR_SUB_KEGIATAN: nomor_sub_kegiatan,
          TEXT_SUB_KEGIATAN: text_sub_kegiatan,
          KEGIATAN: kegiatan?.label,
          SUB_KEGIATAN: subKegiatan?.label,
          INDIKATOR: textFieldObject.indikator,
          TARGET: textFieldObject.target,
          ANGGARAN: textFieldObject.anggaran,
          DASARHUKUM_A: pointsObject.A,
          DASARHUKUM_B: pointsObject.B,
          DASARHUKUM_C: pointsObject.C,
          DASARHUKUM_D: pointsObject.D,
          DASARHUKUM_E: pointsObject.E,
          DASARHUKUM_F: pointsObject.F,
          DASARHUKUM_G: pointsObject.G,
          DASARHUKUM_H: pointsObject.H,
          ...isFlags,
          ...isFlagsOutput,
          ...isFlagsTujuan,
          GAMBARAN_UMUM: textFieldObject.gambaran_umum,
          OUTPUT_1: numbersObject["1"],
          OUTPUT_2: numbersObject["2"],
          OUTPUT_3: numbersObject["3"],
          OUTPUT_4: numbersObject["4"],
          OUTPUT_5: numbersObject["5"],
          OUTPUT_6: numbersObject["6"],
          OUTPUT_7: numbersObject["7"],
          OUTPUT_8: numbersObject["8"],
          OUTPUT_9: numbersObject["9"],
          OUTPUT_10: numbersObject["10"],
          OUTPUT_11: numbersObject["11"],
          OUTPUT_12: numbersObject["12"],
          OUTPUT_13: numbersObject["13"],
          OUTPUT_14: numbersObject["14"],
          OUTPUT_15: numbersObject["15"],
          OUTPUT_16: numbersObject["16"],
          OUTPUT_17: numbersObject["17"],
          OUTPUT_18: numbersObject["18"],
          OUTPUT_19: numbersObject["19"],
          OUTPUT_20: numbersObject["20"],
          MAKSUD: textFieldObject.maksud,
          TUJUAN_1: tujuanObject["1"],
          TUJUAN_2: tujuanObject["2"],
          TUJUAN_3: tujuanObject["3"],
          TUJUAN_4: tujuanObject["4"],
          TUJUAN_5: tujuanObject["5"],
          TUJUAN_6: tujuanObject["6"],
          TUJUAN_7: tujuanObject["7"],
          TUJUAN_8: tujuanObject["8"],
          TUJUAN_9: tujuanObject["9"],
          TUJUAN_10: tujuanObject["10"],
          PENERIMA_MANFAAT: textFieldObject.penerima_manfaat,
          STRATEGI_PELAKSANAAN_SUB_KEGIATAN:
            textFieldObject.strategi_pelaksanaan,
          PEMBIAYAAN: textFieldObject.pembiayaan,
          PENUTUP: textFieldObject.penutup,
          TARGET_TABEL: textFieldObject.target_tabel,
          WAKTU_MULAI: waktuMulai?.label,
          WAKTU_BERAKHIR: waktuBerakhir?.label,
          TAHUN: tahunAnggaran?.label,
          KETUA_TIM: textFieldObject.ketua_tim,
          LOKASI_1: lokasi_tabel_1.LOKASI_1,
          LOKASI_2: lokasi_tabel_1.LOKASI_2,
          LOKASI_3: lokasi_tabel_1.LOKASI_3,
          LOKASI_4: lokasi_tabel_1.LOKASI_4,
          LOKASI_5: lokasi_tabel_1.LOKASI_5,
          LOKASI_6: lokasi_tabel_1.LOKASI_6,
          LOKASI_7: lokasi_tabel_1.LOKASI_7,
          KETERANGAN_RP: textFieldObject.KETERANGAN_RP,
          PETUGAS_RP: textFieldObject.PETUGAS_RP,
          ...monthValuesRP,
          KETERANGAN_PRBK: textFieldObject.KETERANGAN_PRBK,
          PETUGAS_PRBK: textFieldObject.PETUGAS_PRBK,
          ...monthValuesPRBK,
          KETERANGAN_MNE: textFieldObject.KETERANGAN_MNE,
          PETUGAS_MNE: textFieldObject.PETUGAS_MNE,
          ...monthValuesMNE,
          KETERANGAN_PK: textFieldObject.KETERANGAN_PK,
          PETUGAS_PK: textFieldObject.PETUGAS_PK,
          ...monthValuesPK,
          KETERANGAN_FNK: textFieldObject.KETERANGAN_FNK,
          PETUGAS_FNK: textFieldObject.PETUGAS_FNK,
          ...monthValuesFNK,
          KETERANGAN_KK: textFieldObject.KETERANGAN_KK,
          PETUGAS_KK: textFieldObject.PETUGAS_KK,
          ...monthValuesKK,
          /* ------ */
          KETERANGAN_PELAPORAN: textFieldObject.KETERANGAN_PELAPORAN,
          PETUGAS_PELAPORAN: textFieldObject.PETUGAS_PELAPORAN,
          ...monthValuesPELAPORAN,
          /* ------ */
          BAGIAN: bagian?.label,
          NAMA_PPTK: textFieldObject.NAMA_PPTK,
          NIP_PPTK: textFieldObject.NIP_PPTK,
          NAMA_KT: textFieldObject.NAMA_KT,
          NIP_KT: textFieldObject.NIP_KT,
          // tabel 2
          // a1
          URAIAN_HONOR_NARSUM: textFieldObject.URAIAN_HONOR_NARSUM,
          HARGA_HONOR_NARSUM: textFieldObject.HARGA_HONOR_NARSUM,
          JUMLAH_HONOR_NARSUM: textFieldObject.JUMLAH_HONOR_NARSUM,
          // a2
          URAIAN_HONOREGD_NARSUM: textFieldObject.URAIAN_HONOREGD_NARSUM,
          HARGA_HONOREGD_NARSUM: textFieldObject.HARGA_HONOREGD_NARSUM,
          JUMLAH_HONOREGD_NARSUM: textFieldObject.JUMLAH_HONOREGD_NARSUM,
          // a3
          URAIAN_KONSUM_RAPAT: textFieldObject.URAIAN_KONSUM_RAPAT,
          HARGA_KONSUM_RAPAT: textFieldObject.HARGA_KONSUM_RAPAT,
          JUMLAH_KONSUM_RAPAT: textFieldObject.JUMLAH_KONSUM_RAPAT,
          // a4
          URAIAN_SNACK: textFieldObject.URAIAN_SNACK,
          HARGA_SNACK: textFieldObject.HARGA_SNACK,
          JUMLAH_SNACK: textFieldObject.JUMLAH_SNACK,
          // a5
          URAIAN_MEETING_DK: textFieldObject.URAIAN_MEETING_DK,
          HARGA_MEETING_DK: textFieldObject.HARGA_MEETING_DK,
          JUMLAH_MEETING_DK: textFieldObject.JUMLAH_MEETING_DK,
          // b1
          URAIAN_HONORARIUM_NARSUM: textFieldObject.URAIAN_HONORARIUM_NARSUM,
          HARGA_HONORARIUM_NARSUM: textFieldObject.HARGA_HONORARIUM_NARSUM,
          JUMLAH_HONORARIUM_NARSUM: textFieldObject.JUMLAH_HONORARIUM_NARSUM,
          // b2
          URAIAN_HONORARIUMEGD_NARSUM:
            textFieldObject.URAIAN_HONORARIUMEGD_NARSUM,
          HARGA_HONORARIUMEGD_NARSUM:
            textFieldObject.HARGA_HONORARIUMEGD_NARSUM,
          JUMLAH_HONORARIUMEGD_NARSUM:
            textFieldObject.JUMLAH_HONORARIUMEGD_NARSUM,
          // b3
          URAIAN_KONSUM_RAPAT_2: textFieldObject.URAIAN_KONSUM_RAPAT_2,
          HARGA_KONSUM_RAPAT_2: textFieldObject.HARGA_KONSUM_RAPAT_2,
          JUMLAH_KONSUM_RAPAT_2: textFieldObject.JUMLAH_KONSUM_RAPAT_2,
          // b4
          URAIAN_SNACK_2: textFieldObject.URAIAN_SNACK_2,
          HARGA_SNACK_2: textFieldObject.HARGA_SNACK_2,
          JUMLAH_SNACK_2: textFieldObject.JUMLAH_SNACK_2,
          // b5
          URAIAN_MEETING_DK_2: textFieldObject.URAIAN_MEETING_DK_2,
          HARGA_MEETING_DK_2: textFieldObject.HARGA_MEETING_DK_2,
          JUMLAH_MEETING_DK_2: textFieldObject.JUMLAH_MEETING_DK_2,
          // c1
          URAIAN_HONOR_TENAGA_AHLI: textFieldObject.URAIAN_HONOR_TENAGA_AHLI,
          HARGA_HONOR_TENAGA_AHLI: textFieldObject.HARGA_HONOR_TENAGA_AHLI,
          JUMLAH_HONOR_TENAGA_AHLI: textFieldObject.JUMLAH_HONOR_TENAGA_AHLI,
          // c2
          URAIAN_HONORARIUM_FGD_KAJIAN:
            textFieldObject.URAIAN_HONORARIUM_FGD_KAJIAN,
          HARGA_HONORARIUM_FGD_KAJIAN:
            textFieldObject.HARGA_HONORARIUM_FGD_KAJIAN,
          JUMLAH_HONORARIUM_FGD_KAJIAN:
            textFieldObject.JUMLAH_HONORARIUM_FGD_KAJIAN,
          // c3
          URAIAN_KONSUM_RAPAT_3: textFieldObject.URAIAN_KONSUM_RAPAT_3,
          HARGA_KONSUM_RAPAT_3: textFieldObject.HARGA_KONSUM_RAPAT_3,
          JUMLAH_KONSUM_RAPAT_3: textFieldObject.JUMLAH_KONSUM_RAPAT_3,
          // c4
          URAIAN_SNACK_3: textFieldObject.URAIAN_SNACK_3,
          HARGA_SNACK_3: textFieldObject.HARGA_SNACK_3,
          JUMLAH_SNACK_3: textFieldObject.JUMLAH_SNACK_3,
          // d1
          URAIAN_UANG_HARIAN: textFieldObject.URAIAN_UANG_HARIAN,
          HARGA_UANG_HARIAN: textFieldObject.HARGA_UANG_HARIAN,
          JUMLAH_UANG_HARIAN: textFieldObject.JUMLAH_UANG_HARIAN,
          // d2
          URAIAN_BBM: textFieldObject.URAIAN_BBM,
          HARGA_BBM: textFieldObject.HARGA_BBM,
          JUMLAH_BBM: textFieldObject.JUMLAH_BBM,
          // d3
          URAIAN_TOL: textFieldObject.URAIAN_TOL,
          HARGA_TOL: textFieldObject.HARGA_TOL,
          JUMLAH_TOL: textFieldObject.JUMLAH_TOL,
          // e1 -> kab/kota
          URAIAN_UANG_HARIAN_2: textFieldObject.URAIAN_UANG_HARIAN_2,
          HARGA_UANG_HARIAN_2: textFieldObject.HARGA_UANG_HARIAN_2,
          JUMLAH_UANG_HARIAN_2: textFieldObject.JUMLAH_UANG_HARIAN_2,
          // e2
          URAIAN_BBM_2: textFieldObject.URAIAN_BBM_2,
          HARGA_BBM_2: textFieldObject.HARGA_BBM_2,
          JUMLAH_BBM_2: textFieldObject.JUMLAH_BBM_2,
          // e3
          URAIAN_TOL_2: textFieldObject.URAIAN_TOL_2,
          HARGA_TOL_2: textFieldObject.HARGA_TOL_2,
          JUMLAH_TOL_2: textFieldObject.JUMLAH_TOL_2,
          // e4
          URAIAN_TOL_3: textFieldObject.URAIAN_TOL_3,
          HARGA_TOL_3: textFieldObject.HARGA_TOL_3,
          JUMLAH_TOL_3: textFieldObject.JUMLAH_TOL_3,
          //f1 - bali
          URAIAN_UANG_REPRESENTASI: textFieldObject.URAIAN_UANG_REPRESENTASI,
          HARGA_UANG_REPRESENTASI: textFieldObject.HARGA_UANG_REPRESENTASI,
          JUMLAH_UANG_REPRESENTASI: textFieldObject.JUMLAH_UANG_REPRESENTASI,
          // f2
          URAIAN_TAKSI_BANDUNG: textFieldObject.URAIAN_TAKSI_BANDUNG,
          HARGA_TAKSI_BANDUNG: textFieldObject.HARGA_TAKSI_BANDUNG,
          JUMLAH_TAKSI_BANDUNG: textFieldObject.JUMLAH_TAKSI_BANDUNG,
          // f3
          URAIAN_TAKSI_BALI: textFieldObject.URAIAN_TAKSI_BALI,
          HARGA_TAKSI_BALI: textFieldObject.HARGA_TAKSI_BALI,
          JUMLAH_TAKSI_BALI: textFieldObject.JUMLAH_TAKSI_BALI,
          // f4
          URAIAN_TIKET_PESAWAT: textFieldObject.URAIAN_TIKET_PESAWAT,
          HARGA_TIKET_PESAWAT: textFieldObject.HARGA_TIKET_PESAWAT,
          JUMLAH_TIKET_PESAWAT: textFieldObject.JUMLAH_TIKET_PESAWAT,
          // f5
          URAIAN_PENGINAPAN_ESELON_II:
            textFieldObject.URAIAN_PENGINAPAN_ESELON_II,
          HARGA_PENGINAPAN_ESELON_II:
            textFieldObject.HARGA_PENGINAPAN_ESELON_II,
          JUMLAH_PENGINAPAN_ESELON_II:
            textFieldObject.JUMLAH_PENGINAPAN_ESELON_II,
          // f6
          URAIAN_PENGINAPAN_ESELON_III:
            textFieldObject.URAIAN_PENGINAPAN_ESELON_III,
          HARGA_PENGINAPAN_ESELON_III:
            textFieldObject.HARGA_PENGINAPAN_ESELON_III,
          JUMLAH_PENGINAPAN_ESELON_III:
            textFieldObject.JUMLAH_PENGINAPAN_ESELON_III,
          // f7
          URAIAN_PENGINAPAN: textFieldObject.URAIAN_PENGINAPAN,
          HARGA_PENGINAPAN: textFieldObject.HARGA_PENGINAPAN,
          JUMLAH_PENGINAPAN: textFieldObject.JUMLAH_PENGINAPAN,
          // f8
          URAIAN_UANG_HARIAN_3: textFieldObject.URAIAN_UANG_HARIAN_3,
          HARGA_UANG_HARIAN_3: textFieldObject.HARGA_UANG_HARIAN_3,
          JUMLAH_UANG_HARIAN_3: textFieldObject.JUMLAH_UANG_HARIAN_3,
          // textfield month tabel 2
          ...monthlyValuesHonorNarsum,
          ...monthlyValuesHonorFGDNarsum,
          ...monthlyValuesMakanMinumRapat,
          ...monthlyValuesSnack,
          ...monthlyValuesMeetingDalamKota,
          ...monthlyValues6,
          ...monthlyValues7,
          ...monthlyValues8,
          ...monthlyValues9,
          ...monthlyValues10,
          ...monthlyValues11,
          ...monthlyValues12,
          ...monthlyValues13,
          ...monthlyValues14,
          ...monthlyValues15,
          ...monthlyValues16,
          ...monthlyValues17,
          ...monthlyValues18,
          ...monthlyValues19,
          ...monthlyValues20,
          ...monthlyValues21,
          ...monthlyValues22,
          ...monthlyValues23,
          ...monthlyValues24,
          ...monthlyValues25,
          ...monthlyValues26,
          ...monthlyValues27,
          ...monthlyValues28,
          ...monthlyValues29,
        },
      });

      if (response.status !== 200) {
        alert("Failed to submit data");
      }

      const responseData = response.data;

      if (response.data) {
        console.log("data dapet", responseData.data);
        window.open(responseData.data, "_blank");
      } else {
        alert("No URL found in response data");
      }
    } catch (error) {
      alert(error.message);
      setErrorMessage(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        errorMessage,
        handleSubmit,
        kegiatan,
        setKegiatan,
        subKegiatan,
        setSubKegiatan,
        isLoading,
        points,
        setPoints,
        numbers,
        setNumbers,
        waktuMulai,
        setWaktuMulai,
        waktuBerakhir,
        setWaktuBerakhir,
        tahunAnggaran,
        setTahunAnggaran,
        tujuan,
        setTujuan,
        currentKegiatan,
        setCurrentKegiatan,
        lokasi_tabel_1,
        setLokasi_tabel_1,
        setBulan_tabel_1,
        setBulan_tabel_2,
        setBulan_tabel_3,
        setBulan_tabel_4,
        setBulan_tabel_5,
        setBulan_tabel_6,
        setBulan_tabel_7,
        setBagian,
        bagian,
        handleChangeTextField,
        nomor_sub_kegiatan,
        text_sub_kegiatan,
        textFieldObject,
        bulan_tabel_1,
        bulan_tabel_2,
        bulan_tabel_3,
        bulan_tabel_4,
        bulan_tabel_5,
        bulan_tabel_6,
        bulan_tabel_7,
        monthlyValuesHonorNarsum,
        monthlyValuesHonorFGDNarsum,
        monthlyValuesMakanMinumRapat,
        monthlyValuesSnack,
        monthlyValuesMeetingDalamKota,
        monthlyValues6,
        monthlyValues7,
        monthlyValues8,
        monthlyValues9,
        monthlyValues10,
        monthlyValues11,
        monthlyValues12,
        monthlyValues13,
        monthlyValues14,
        monthlyValues15,
        monthlyValues16,
        monthlyValues17,
        monthlyValues18,
        monthlyValues19,
        monthlyValues20,
        monthlyValues21,
        monthlyValues22,
        monthlyValues23,
        monthlyValues24,
        monthlyValues25,
        monthlyValues26,
        monthlyValues27,
        monthlyValues28,
        monthlyValues29,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};

export { AppProvider, useApp };
