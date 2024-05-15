// UTILS
const formatToRupiah = (number) => {
  if (isNaN(number) || number === null) {
    return "Rp ";
  }

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  // Format the number with commas and add a space between "Rp" and the number
  return formatter.format(number).replace("Rp", "Rp");
};

const handleValueBulan = (bulan, suffix) => {
  let bulanFlags = {};
  if (bulan.JANUARI === true) bulanFlags[`JAN${suffix}`] = "v";
  if (bulan.FEBRUARI === true) bulanFlags[`FEB${suffix}`] = "v";
  if (bulan.MARET === true) bulanFlags[`MAR${suffix}`] = "v";
  if (bulan.APRIL === true) bulanFlags[`APR${suffix}`] = "v";
  if (bulan.MEI === true) bulanFlags[`MEI${suffix}`] = "v";
  if (bulan.JUNI === true) bulanFlags[`JUN${suffix}`] = "v";
  if (bulan.JULI === true) bulanFlags[`JUL${suffix}`] = "v";
  if (bulan.AGUSTUS === true) bulanFlags[`AGT${suffix}`] = "v";
  if (bulan.SEPTEMBER === true) bulanFlags[`SEP${suffix}`] = "v";
  if (bulan.OKTOBER === true) bulanFlags[`OKT${suffix}`] = "v";
  if (bulan.NOVEMBER === true) bulanFlags[`NOV${suffix}`] = "v";
  if (bulan.DESEMBER === true) bulanFlags[`DES${suffix}`] = "v";
  return bulanFlags;
};

export { formatToRupiah, handleValueBulan };
