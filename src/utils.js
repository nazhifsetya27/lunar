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

export { formatToRupiah };
