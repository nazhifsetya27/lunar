import React from "react";
import { useApp } from "../../AppContext";

const Tabel_2 = () => {
  const {
    textFieldObject,
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
  } = useApp();

  console.log({ monthlyValuesHonorNarsum, monthlyValuesHonorFGDNarsum });

  // Define an array of objects containing your table row data
  const tableRows = [
    {
      title:
        "Penyelenggaraan Fasilitasi & Koordinasi Pelaksanaan Urusan NPD II",
      items: [
        {
          label: "Honor Narasumber",
          uraian: textFieldObject?.URAIAN_HONOR_NARSUM,
          harga: textFieldObject?.HARGA_HONOR_NARSUM,
          jumlah: textFieldObject?.JUMLAH_HONOR_NARSUM,
          total_biaya: textFieldObject?.JUMLAH_HONOR_NARSUM,
          jan: monthlyValuesHonorNarsum?.JAN_1,
          feb: monthlyValuesHonorNarsum?.FEB_1,
          mar: monthlyValuesHonorNarsum?.MAR_1,
          apr: monthlyValuesHonorNarsum?.APR_1,
          mei: monthlyValuesHonorNarsum?.MEI_1,
          jun: monthlyValuesHonorNarsum?.JUN_1,
          jul: monthlyValuesHonorNarsum?.JUL_1,
          agt: monthlyValuesHonorNarsum?.AGT_1,
          sep: monthlyValuesHonorNarsum?.SEP_1,
          okt: monthlyValuesHonorNarsum?.OKT_1,
          nov: monthlyValuesHonorNarsum?.NOV_1,
          des: monthlyValuesHonorNarsum?.DES_1,
        },
        {
          label: "Honor FGD Narasumber",
          uraian: textFieldObject?.URAIAN_HONOREGD_NARSUM,
          harga: textFieldObject?.HARGA_HONOREGD_NARSUM,
          jumlah: textFieldObject?.JUMLAH_HONOREGD_NARSUM,
          total_biaya: textFieldObject?.JUMLAH_HONOREGD_NARSUM,
          jan: monthlyValuesHonorFGDNarsum?.JAN_2,
          feb: monthlyValuesHonorFGDNarsum?.FEB_2,
          mar: monthlyValuesHonorFGDNarsum?.MAR_2,
          apr: monthlyValuesHonorFGDNarsum?.APR_2,
          mei: monthlyValuesHonorFGDNarsum?.MEI_2,
          jun: monthlyValuesHonorFGDNarsum?.JUN_2,
          jul: monthlyValuesHonorFGDNarsum?.JUL_2,
          agt: monthlyValuesHonorFGDNarsum?.AGT_2,
          sep: monthlyValuesHonorFGDNarsum?.SEP_2,
          okt: monthlyValuesHonorFGDNarsum?.OKT_2,
          nov: monthlyValuesHonorFGDNarsum?.NOV_2,
          des: monthlyValuesHonorFGDNarsum?.DES_2,
        },
        {
          label: "Makan Minum Rapat",
          uraian: textFieldObject?.URAIAN_KONSUM_RAPAT,
          harga: textFieldObject?.HARGA_KONSUM_RAPAT,
          jumlah: textFieldObject?.JUMLAH_KONSUM_RAPAT,
          total_biaya: textFieldObject?.JUMLAH_KONSUM_RAPAT,
          jan: monthlyValuesMakanMinumRapat?.JAN_3,
          feb: monthlyValuesMakanMinumRapat?.FEB_3,
          mar: monthlyValuesMakanMinumRapat?.MAR_3,
          apr: monthlyValuesMakanMinumRapat?.APR_3,
          mei: monthlyValuesMakanMinumRapat?.MEI_3,
          jun: monthlyValuesMakanMinumRapat?.JUN_3,
          jul: monthlyValuesMakanMinumRapat?.JUL_3,
          agt: monthlyValuesMakanMinumRapat?.AGT_3,
          sep: monthlyValuesMakanMinumRapat?.SEP_3,
          okt: monthlyValuesMakanMinumRapat?.OKT_3,
          nov: monthlyValuesMakanMinumRapat?.NOV_3,
          des: monthlyValuesMakanMinumRapat?.DES_3,
        },
        {
          label: "Snack",
          uraian: textFieldObject?.URAIAN_SNACK,
          harga: textFieldObject?.HARGA_SNACK,
          jumlah: textFieldObject?.JUMLAH_SNACK,
          total_biaya: textFieldObject?.JUMLAH_SNACK,
          jan: monthlyValuesSnack?.JAN_4,
          feb: monthlyValuesSnack?.FEB_4,
          mar: monthlyValuesSnack?.MAR_4,
          apr: monthlyValuesSnack?.APR_4,
          mei: monthlyValuesSnack?.MEI_4,
          jun: monthlyValuesSnack?.JUN_4,
          jul: monthlyValuesSnack?.JUL_4,
          agt: monthlyValuesSnack?.AGT_4,
          sep: monthlyValuesSnack?.SEP_4,
          okt: monthlyValuesSnack?.OKT_4,
          nov: monthlyValuesSnack?.NOV_4,
          des: monthlyValuesSnack?.DES_4,
        },
      ],
    },
    {
      title: "Penyusunan Rancangan Bahan Kebijakan Urusan Kesra bidang NPD II",
      items: [
        {
          label: "Honorarium Narasumber",
          uraian: textFieldObject?.URAIAN_HONORARIUM_NARSUM,
          harga: textFieldObject?.HARGA_HONORARIUM_NARSUM,
          jumlah: textFieldObject?.JUMLAH_HONORARIUM_NARSUM,
          total_biaya: textFieldObject?.JUMLAH_HONORARIUM_NARSUM,
          jan: monthlyValues6?.JAN_6,
          feb: monthlyValues6?.FEB_6,
          mar: monthlyValues6?.MAR_6,
          apr: monthlyValues6?.APR_6,
          mei: monthlyValues6?.MEI_6,
          jun: monthlyValues6?.JUN_6,
          jul: monthlyValues6?.JUL_6,
          agt: monthlyValues6?.AGT_6,
          sep: monthlyValues6?.SEP_6,
          okt: monthlyValues6?.OKT_6,
          nov: monthlyValues6?.NOV_6,
          des: monthlyValues6?.DES_6,
        },
        {
          label: "Honor FGD  Narasumber",
          uraian: textFieldObject?.URAIAN_HONORARIUMEGD_NARSUM,
          harga: textFieldObject?.HARGA_HONORARIUMEGD_NARSUM,
          jumlah: textFieldObject?.JUMLAH_HONORARIUMEGD_NARSUM,
          total_biaya: textFieldObject?.JUMLAH_HONORARIUMEGD_NARSUM,
          jan: monthlyValues7?.JAN_7,
          feb: monthlyValues7?.FEB_7,
          mar: monthlyValues7?.MAR_7,
          apr: monthlyValues7?.APR_7,
          mei: monthlyValues7?.MEI_7,
          jun: monthlyValues7?.JUN_7,
          jul: monthlyValues7?.JUL_7,
          agt: monthlyValues7?.AGT_7,
          sep: monthlyValues7?.SEP_7,
          okt: monthlyValues7?.OKT_7,
          nov: monthlyValues7?.NOV_7,
          des: monthlyValues7?.DES_7,
        },
        {
          label: "Makan Minum Rapat",
          uraian: textFieldObject?.URAIAN_KONSUM_RAPAT_2,
          harga: textFieldObject?.HARGA_KONSUM_RAPAT_2,
          jumlah: textFieldObject?.JUMLAH_KONSUM_RAPAT_2,
          total_biaya: textFieldObject?.JUMLAH_KONSUM_RAPAT_2,
          jan: monthlyValues8?.JAN_8,
          feb: monthlyValues8?.FEB_8,
          mar: monthlyValues8?.MAR_8,
          apr: monthlyValues8?.APR_8,
          mei: monthlyValues8?.MEI_8,
          jun: monthlyValues8?.JUN_8,
          jul: monthlyValues8?.JUL_8,
          agt: monthlyValues8?.AGT_8,
          sep: monthlyValues8?.SEP_8,
          okt: monthlyValues8?.OKT_8,
          nov: monthlyValues8?.NOV_8,
          des: monthlyValues8?.DES_8,
        },
        {
          label: "Snack",
          uraian: textFieldObject?.URAIAN_SNACK_2,
          harga: textFieldObject?.HARGA_SNACK_2,
          jumlah: textFieldObject?.JUMLAH_SNACK_2,
          total_biaya: textFieldObject?.JUMLAH_SNACK_2,
          jan: monthlyValues9?.JAN_9,
          feb: monthlyValues9?.FEB_9,
          mar: monthlyValues9?.MAR_9,
          apr: monthlyValues9?.APR_9,
          mei: monthlyValues9?.MEI_9,
          jun: monthlyValues9?.JUN_9,
          jul: monthlyValues9?.JUL_9,
          agt: monthlyValues9?.AGT_9,
          sep: monthlyValues9?.SEP_9,
          okt: monthlyValues9?.OKT_9,
          nov: monthlyValues9?.NOV_9,
          des: monthlyValues9?.DES_9,
        },
        {
          label: "Meeting dalam kota (Fullday)",
          uraian: textFieldObject?.URAIAN_MEETING_DK_2,
          harga: textFieldObject?.HARGA_MEETING_DK_2,
          jumlah: textFieldObject?.JUMLAH_MEETING_DK_2,
          total_biaya: textFieldObject?.JUMLAH_MEETING_DK_2,
          jan: monthlyValues10?.JAN_10,
          feb: monthlyValues10?.FEB_10,
          mar: monthlyValues10?.MAR_10,
          apr: monthlyValues10?.APR_10,
          mei: monthlyValues10?.MEI_10,
          jun: monthlyValues10?.JUN_10,
          jul: monthlyValues10?.JUL_10,
          agt: monthlyValues10?.AGT_10,
          sep: monthlyValues10?.SEP_10,
          okt: monthlyValues10?.OKT_10,
          nov: monthlyValues10?.NOV_10,
          des: monthlyValues10?.DES_10,
        },
      ],
    },
    {
      title: "Penyusunan Kajian urusan Kesra bidang NPD II",
      items: [
        {
          label: "Honorarium Tenaga Ahli - S3",
          uraian: textFieldObject?.URAIAN_HONOR_TENAGA_AHLI,
          harga: textFieldObject?.HARGA_HONOR_TENAGA_AHLI,
          jumlah: textFieldObject?.JUMLAH_HONOR_TENAGA_AHLI,
          total_biaya: textFieldObject?.JUMLAH_HONOR_TENAGA_AHLI,
          jan: monthlyValues11?.JAN_11,
          feb: monthlyValues11?.FEB_11,
          mar: monthlyValues11?.MAR_11,
          apr: monthlyValues11?.APR_11,
          mei: monthlyValues11?.MEI_11,
          jun: monthlyValues11?.JUN_11,
          jul: monthlyValues11?.JUL_11,
          agt: monthlyValues11?.AGT_11,
          sep: monthlyValues11?.SEP_11,
          okt: monthlyValues11?.OKT_11,
          nov: monthlyValues11?.NOV_11,
          des: monthlyValues11?.DES_11,
        },
        {
          label: "Honorarium FGD Kajian",
          uraian: textFieldObject?.URAIAN_HONORARIUM_FGD_KAJIAN,
          harga: textFieldObject?.HARGA_HONORARIUM_FGD_KAJIAN,
          jumlah: textFieldObject?.JUMLAH_HONORARIUM_FGD_KAJIAN,
          total_biaya: textFieldObject?.JUMLAH_HONORARIUM_FGD_KAJIAN,
          jan: monthlyValues12?.JAN_12,
          feb: monthlyValues12?.FEB_12,
          mar: monthlyValues12?.MAR_12,
          apr: monthlyValues12?.APR_12,
          mei: monthlyValues12?.MEI_12,
          jun: monthlyValues12?.JUN_12,
          jul: monthlyValues12?.JUL_12,
          agt: monthlyValues12?.AGT_12,
          sep: monthlyValues12?.SEP_12,
          okt: monthlyValues12?.OKT_12,
          nov: monthlyValues12?.NOV_12,
          des: monthlyValues12?.DES_12,
        },
        {
          label: "Makan Minum Rapat",
          uraian: textFieldObject?.URAIAN_KONSUM_RAPAT_3,
          harga: textFieldObject?.HARGA_KONSUM_RAPAT_3,
          jumlah: textFieldObject?.JUMLAH_KONSUM_RAPAT_3,
          total_biaya: textFieldObject?.JUMLAH_KONSUM_RAPAT_3,
          jan: monthlyValues13?.JAN_13,
          feb: monthlyValues13?.FEB_13,
          mar: monthlyValues13?.MAR_13,
          apr: monthlyValues13?.APR_13,
          mei: monthlyValues13?.MEI_13,
          jun: monthlyValues13?.JUN_13,
          jul: monthlyValues13?.JUL_13,
          agt: monthlyValues13?.AGT_13,
          sep: monthlyValues13?.SEP_13,
          okt: monthlyValues13?.OKT_13,
          nov: monthlyValues13?.NOV_13,
          des: monthlyValues13?.DES_13,
        },
        {
          label: "Snack",
          uraian: textFieldObject?.URAIAN_SNACK_3,
          harga: textFieldObject?.HARGA_SNACK_3,
          jumlah: textFieldObject?.JUMLAH_SNACK_3,
          total_biaya: textFieldObject?.JUMLAH_SNACK_3,
          jan: monthlyValues14?.JAN_14,
          feb: monthlyValues14?.FEB_14,
          mar: monthlyValues14?.MAR_14,
          apr: monthlyValues14?.APR_14,
          mei: monthlyValues14?.MEI_14,
          jun: monthlyValues14?.JUN_14,
          jul: monthlyValues14?.JUL_14,
          agt: monthlyValues14?.AGT_14,
          sep: monthlyValues14?.SEP_14,
          okt: monthlyValues14?.OKT_14,
          nov: monthlyValues14?.NOV_14,
          des: monthlyValues14?.DES_14,
        },
      ],
    },
    {
      title:
        "Monitoring Evaluasi  dan Pemantauan Urusan Kesra bidang NPD II- Jakarta",
      items: [
        {
          label: "Uang Harian",
          uraian: textFieldObject?.URAIAN_UANG_HARIAN,
          harga: textFieldObject?.HARGA_UANG_HARIAN,
          jumlah: textFieldObject?.JUMLAH_UANG_HARIAN,
          total_biaya: textFieldObject?.JUMLAH_UANG_HARIAN,
          jan: monthlyValues15?.JAN_15,
          feb: monthlyValues15?.FEB_15,
          mar: monthlyValues15?.MAR_15,
          apr: monthlyValues15?.APR_15,
          mei: monthlyValues15?.MEI_15,
          jun: monthlyValues15?.JUN_15,
          jul: monthlyValues15?.JUL_15,
          agt: monthlyValues15?.AGT_15,
          sep: monthlyValues15?.SEP_15,
          okt: monthlyValues15?.OKT_15,
          nov: monthlyValues15?.NOV_15,
          des: monthlyValues15?.DES_15,
        },
        {
          label: "BBM",
          uraian: textFieldObject?.URAIAN_BBM,
          harga: textFieldObject?.HARGA_BBM,
          jumlah: textFieldObject?.JUMLAH_BBM,
          total_biaya: textFieldObject?.JUMLAH_BBM,
          jan: monthlyValues16?.JAN_16,
          feb: monthlyValues16?.FEB_16,
          mar: monthlyValues16?.MAR_16,
          apr: monthlyValues16?.APR_16,
          mei: monthlyValues16?.MEI_16,
          jun: monthlyValues16?.JUN_16,
          jul: monthlyValues16?.JUL_16,
          agt: monthlyValues16?.AGT_16,
          sep: monthlyValues16?.SEP_16,
          okt: monthlyValues16?.OKT_16,
          nov: monthlyValues16?.NOV_16,
          des: monthlyValues16?.DES_16,
        },
        {
          label: "TOL",
          uraian: textFieldObject?.URAIAN_TOL,
          harga: textFieldObject?.HARGA_TOL,
          jumlah: textFieldObject?.JUMLAH_TOL,
          total_biaya: textFieldObject?.JUMLAH_TOL,
          jan: monthlyValues17?.JAN_17,
          feb: monthlyValues17?.FEB_17,
          mar: monthlyValues17?.MAR_17,
          apr: monthlyValues17?.APR_17,
          mei: monthlyValues17?.MEI_17,
          jun: monthlyValues17?.JUN_17,
          jul: monthlyValues17?.JUL_17,
          agt: monthlyValues17?.AGT_17,
          sep: monthlyValues17?.SEP_17,
          okt: monthlyValues17?.OKT_17,
          nov: monthlyValues17?.NOV_17,
          des: monthlyValues17?.DES_17,
        },
      ],
    },
    {
      title:
        "Monitoring Evaluasi  dan Pemantauan Urusan Kesra bidang NPD II- Kabupaten Kota",
      items: [
        {
          label: "Uang Harian",
          uraian: textFieldObject?.URAIAN_UANG_HARIAN_2,
          harga: textFieldObject?.HARGA_UANG_HARIAN_2,
          jumlah: textFieldObject?.JUMLAH_UANG_HARIAN_2,
          total_biaya: textFieldObject?.JUMLAH_UANG_HARIAN_2,
          jan: monthlyValues18?.JAN_18,
          feb: monthlyValues18?.FEB_18,
          mar: monthlyValues18?.MAR_18,
          apr: monthlyValues18?.APR_18,
          mei: monthlyValues18?.MEI_18,
          jun: monthlyValues18?.JUN_18,
          jul: monthlyValues18?.JUL_18,
          agt: monthlyValues18?.AGT_18,
          sep: monthlyValues18?.SEP_18,
          okt: monthlyValues18?.OKT_18,
          nov: monthlyValues18?.NOV_18,
          des: monthlyValues18?.DES_18,
        },
        {
          label: "BBM",
          uraian: textFieldObject?.URAIAN_BBM_2,
          harga: textFieldObject?.HARGA_BBM_2,
          jumlah: textFieldObject?.JUMLAH_BBM_2,
          total_biaya: textFieldObject?.JUMLAH_BBM_2,
          jan: monthlyValues19?.JAN_19,
          feb: monthlyValues19?.FEB_19,
          mar: monthlyValues19?.MAR_19,
          apr: monthlyValues19?.APR_19,
          mei: monthlyValues19?.MEI_19,
          jun: monthlyValues19?.JUN_19,
          jul: monthlyValues19?.JUL_19,
          agt: monthlyValues19?.AGT_19,
          sep: monthlyValues19?.SEP_19,
          okt: monthlyValues19?.OKT_19,
          nov: monthlyValues19?.NOV_19,
          des: monthlyValues19?.DES_19,
        },
        {
          label: "TOL",
          uraian: textFieldObject?.URAIAN_TOL_2,
          harga: textFieldObject?.HARGA_TOL_2,
          jumlah: textFieldObject?.JUMLAH_TOL_2,
          total_biaya: textFieldObject?.JUMLAH_TOL_2,
          jan: monthlyValues20?.JAN_20,
          feb: monthlyValues20?.FEB_20,
          mar: monthlyValues20?.MAR_20,
          apr: monthlyValues20?.APR_20,
          mei: monthlyValues20?.MEI_20,
          jun: monthlyValues20?.JUN_20,
          jul: monthlyValues20?.JUL_20,
          agt: monthlyValues20?.AGT_20,
          sep: monthlyValues20?.SEP_20,
          okt: monthlyValues20?.OKT_20,
          nov: monthlyValues20?.NOV_20,
          des: monthlyValues20?.DES_20,
        },
        {
          label: "TOL",
          uraian: textFieldObject?.URAIAN_TOL_3,
          harga: textFieldObject?.HARGA_TOL_3,
          jumlah: textFieldObject?.JUMLAH_TOL_3,
          total_biaya: textFieldObject?.JUMLAH_TOL_3,
          jan: monthlyValues21?.JAN_21,
          feb: monthlyValues21?.FEB_21,
          mar: monthlyValues21?.MAR_21,
          apr: monthlyValues21?.APR_21,
          mei: monthlyValues21?.MEI_21,
          jun: monthlyValues21?.JUN_21,
          jul: monthlyValues21?.JUL_21,
          agt: monthlyValues21?.AGT_21,
          sep: monthlyValues21?.SEP_21,
          okt: monthlyValues21?.OKT_21,
          nov: monthlyValues21?.NOV_21,
          des: monthlyValues21?.DES_21,
        },
      ],
    },
    {
      title: "Kunjungan Kerja dalam rangka Monev ke Provinsi Bali",
      items: [
        {
          label: "Uang Representasi",
          uraian: textFieldObject?.URAIAN_UANG_REPRESENTASI,
          harga: textFieldObject?.HARGA_UANG_REPRESENTASI,
          jumlah: textFieldObject?.JUMLAH_UANG_REPRESENTASI,
          total_biaya: textFieldObject?.JUMLAH_UANG_REPRESENTASI,
          jan: monthlyValues22?.JAN_22,
          feb: monthlyValues22?.FEB_22,
          mar: monthlyValues22?.MAR_22,
          apr: monthlyValues22?.APR_22,
          mei: monthlyValues22?.MEI_22,
          jun: monthlyValues22?.JUN_22,
          jul: monthlyValues22?.JUL_22,
          agt: monthlyValues22?.AGT_22,
          sep: monthlyValues22?.SEP_22,
          okt: monthlyValues22?.OKT_22,
          nov: monthlyValues22?.NOV_22,
          des: monthlyValues22?.DES_22,
        },
        {
          label: "Taksi Bandung",
          uraian: textFieldObject?.URAIAN_TAKSI_BANDUNG,
          harga: textFieldObject?.HARGA_TAKSI_BANDUNG,
          jumlah: textFieldObject?.JUMLAH_TAKSI_BANDUNG,
          total_biaya: textFieldObject?.JUMLAH_TAKSI_BANDUNG,
          jan: monthlyValues23?.JAN_23,
          feb: monthlyValues23?.FEB_23,
          mar: monthlyValues23?.MAR_23,
          apr: monthlyValues23?.APR_23,
          mei: monthlyValues23?.MEI_23,
          jun: monthlyValues23?.JUN_23,
          jul: monthlyValues23?.JUL_23,
          agt: monthlyValues23?.AGT_23,
          sep: monthlyValues23?.SEP_23,
          okt: monthlyValues23?.OKT_23,
          nov: monthlyValues23?.NOV_23,
          des: monthlyValues23?.DES_23,
        },
        {
          label: "Taksi Bali",
          uraian: textFieldObject?.URAIAN_TAKSI_BALI,
          harga: textFieldObject?.HARGA_TAKSI_BALI,
          jumlah: textFieldObject?.JUMLAH_TAKSI_BALI,
          total_biaya: textFieldObject?.JUMLAH_TAKSI_BALI,
          jan: monthlyValues24?.JAN_24,
          feb: monthlyValues24?.FEB_24,
          mar: monthlyValues24?.MAR_24,
          apr: monthlyValues24?.APR_24,
          mei: monthlyValues24?.MEI_24,
          jun: monthlyValues24?.JUN_24,
          jul: monthlyValues24?.JUL_24,
          agt: monthlyValues24?.AGT_24,
          sep: monthlyValues24?.SEP_24,
          okt: monthlyValues24?.OKT_24,
          nov: monthlyValues24?.NOV_24,
          des: monthlyValues24?.DES_24,
        },
        {
          label: "Tiket Pesawat",
          uraian: textFieldObject?.URAIAN_TIKET_PESAWAT,
          harga: textFieldObject?.HARGA_TIKET_PESAWAT,
          jumlah: textFieldObject?.JUMLAH_TIKET_PESAWAT,
          total_biaya: textFieldObject?.JUMLAH_TIKET_PESAWAT,
          jan: monthlyValues25?.JAN_25,
          feb: monthlyValues25?.FEB_25,
          mar: monthlyValues25?.MAR_25,
          apr: monthlyValues25?.APR_25,
          mei: monthlyValues25?.MEI_25,
          jun: monthlyValues25?.JUN_25,
          jul: monthlyValues25?.JUL_25,
          agt: monthlyValues25?.AGT_25,
          sep: monthlyValues25?.SEP_25,
          okt: monthlyValues25?.OKT_25,
          nov: monthlyValues25?.NOV_25,
          des: monthlyValues25?.DES_25,
        },
        {
          label: "Penginapan Eselon II",
          uraian: textFieldObject?.URAIAN_PENGINAPAN_ESELON_II,
          harga: textFieldObject?.HARGA_PENGINAPAN_ESELON_II,
          jumlah: textFieldObject?.JUMLAH_PENGINAPAN_ESELON_II,
          total_biaya: textFieldObject?.JUMLAH_PENGINAPAN_ESELON_II,
          jan: monthlyValues26?.JAN_26,
          feb: monthlyValues26?.FEB_26,
          mar: monthlyValues26?.MAR_26,
          apr: monthlyValues26?.APR_26,
          mei: monthlyValues26?.MEI_26,
          jun: monthlyValues26?.JUN_26,
          jul: monthlyValues26?.JUL_26,
          agt: monthlyValues26?.AGT_26,
          sep: monthlyValues26?.SEP_26,
          okt: monthlyValues26?.OKT_26,
          nov: monthlyValues26?.NOV_26,
          des: monthlyValues26?.DES_26,
        },
        {
          label: "Penginapan Eselon III",
          uraian: textFieldObject?.URAIAN_PENGINAPAN_ESELON_III,
          harga: textFieldObject?.HARGA_PENGINAPAN_ESELON_III,
          jumlah: textFieldObject?.JUMLAH_PENGINAPAN_ESELON_III,
          total_biaya: textFieldObject?.JUMLAH_PENGINAPAN_ESELON_III,
          jan: monthlyValues27?.JAN_27,
          feb: monthlyValues27?.FEB_27,
          mar: monthlyValues27?.MAR_27,
          apr: monthlyValues27?.APR_27,
          mei: monthlyValues27?.MEI_27,
          jun: monthlyValues27?.JUN_27,
          jul: monthlyValues27?.JUL_27,
          agt: monthlyValues27?.AGT_27,
          sep: monthlyValues27?.SEP_27,
          okt: monthlyValues27?.OKT_27,
          nov: monthlyValues27?.NOV_27,
          des: monthlyValues27?.DES_27,
        },
        {
          label: "Penginapan",
          uraian: textFieldObject?.URAIAN_PENGINAPAN,
          harga: textFieldObject?.HARGA_PENGINAPAN,
          jumlah: textFieldObject?.JUMLAH_PENGINAPAN,
          total_biaya: textFieldObject?.JUMLAH_PENGINAPAN,
          jan: monthlyValues28?.JAN_28,
          feb: monthlyValues28?.FEB_28,
          mar: monthlyValues28?.MAR_28,
          apr: monthlyValues28?.APR_28,
          mei: monthlyValues28?.MEI_28,
          jun: monthlyValues28?.JUN_28,
          jul: monthlyValues28?.JUL_28,
          agt: monthlyValues28?.AGT_28,
          sep: monthlyValues28?.SEP_28,
          okt: monthlyValues28?.OKT_28,
          nov: monthlyValues28?.NOV_28,
          des: monthlyValues28?.DES_28,
        },
        {
          label: "Uang Harian",
          uraian: textFieldObject?.URAIAN_UANG_HARIAN_3,
          harga: textFieldObject?.HARGA_UANG_HARIAN_3,
          jumlah: textFieldObject?.JUMLAH_UANG_HARIAN_3,
          total_biaya: textFieldObject?.JUMLAH_UANG_HARIAN_3,
          jan: monthlyValues29?.JAN_29,
          feb: monthlyValues29?.FEB_29,
          mar: monthlyValues29?.MAR_29,
          apr: monthlyValues29?.APR_29,
          mei: monthlyValues29?.MEI_29,
          jun: monthlyValues29?.JUN_29,
          jul: monthlyValues29?.JUL_29,
          agt: monthlyValues29?.AGT_29,
          sep: monthlyValues29?.SEP_29,
          okt: monthlyValues29?.OKT_29,
          nov: monthlyValues29?.NOV_29,
          des: monthlyValues29?.DES_29,
        },
      ],
    },
  ];

  return (
    <div className="overflow-x-auto custom-scrollbar">
      <table>
        <thead>
          <tr>
            <th rowSpan="2">Kegiatan/Belanja</th>
            <th colSpan="3" className="text-center">
              Rincian Belanja
            </th>
            <th rowSpan="2">Total Biaya</th>
            <th colSpan="12" className="text-center">
              Waktu
            </th>
          </tr>
          <tr>
            <th>URAIAN</th>
            <th>HARGA</th>
            <th>JUMLAH</th>
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
          {tableRows.map((section, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>
                  <p className="text-xs">
                    <strong>{section?.title}</strong>
                  </p>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {section.items.map((item, itemIndex) => (
                <tr key={`${index}_${itemIndex}`}>
                  <td>{item?.label}</td>
                  <td>{item?.uraian}</td>
                  <td>{item?.harga}</td>
                  <td>{item?.jumlah}</td>
                  <td>{item?.total_biaya}</td>
                  <td>{item?.jan}</td>
                  <td>{item?.feb}</td>
                  <td>{item?.mar}</td>
                  <td>{item?.apr}</td>
                  <td>{item?.mei}</td>
                  <td>{item?.jun}</td>
                  <td>{item?.jul}</td>
                  <td>{item?.agt}</td>
                  <td>{item?.sep}</td>
                  <td>{item?.okt}</td>
                  <td>{item?.nov}</td>
                  <td>{item?.des}</td>
                  {/* Add more columns for other months */}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabel_2;
