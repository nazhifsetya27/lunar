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
  // console.log(textFieldObject);

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
  const [url, setUrl] = useState("");
  // console.log(url);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("https://app.documentero.com/api", {
        document: "6p0D1IAfrk7deLC6v7CV",
        apiKey: "ZWKL2AY-YFHUN4Q-QK44LJI-7XKUWGY",
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
          URAIAN_HONOR_NARSUM: textFieldObject.URAIAN_HONOR_NARSUM,
          HARGA_HONOR_NARSUM: textFieldObject.HARGA_HONOR_NARSUM,
          JUMLAH_HONOR_NARSUM: textFieldObject.JUMLAH_HONOR_NARSUM,
          ...monthlyValuesHonorNarsum,
          ...monthlyValuesHonorFGDNarsum,
          ...monthlyValuesMakanMinumRapat,
          ...monthlyValuesSnack,
          ...monthlyValuesMeetingDalamKota,
        },
      });

      if (response.status !== 200) {
        throw new Error("Failed to submit data");
      }

      const responseData = response.data;
      console.log(responseData.data);

      if (response.data) {
        window.open(responseData.data, "_blank");
        // setUrl(response.data.data);
      } else {
        throw new Error("No URL found in response data");
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
