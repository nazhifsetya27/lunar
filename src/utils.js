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

/* const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      document: "zODvrBSqNVaM5ADyJcbo",
      apiKey: "HGYHEHI-46AEBTY-URY3S4I-Q6XLIAA",
      format: "docx",
      data: {
        SUBKEGIATAN: formData.SUBKEGIATAN,
        JUDUL: formData.JUDUL,
        KEGIATAN: formData.KEGIATAN,
        INDIKATOR: formData.INDIKATOR,
        TARGET: formData.TARGET,
        ANGGARAN: formData.ANGGARAN,
      },
    };
    onSubmit(formattedData);
  }; */
