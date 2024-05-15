import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { DropdownOptions } from "../utils/dropdownOption";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useApp } from "../AppContext";

const InputForm = () => {
  const {
    kegiatan,
    setKegiatan,
    subKegiatan,
    setSubKegiatan,
    textFieldValues,
    setTextFieldValues,
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
    setLokasi_tabel_1,
    setBulan_tabel_1,
    setBulan_tabel_2,
  } = useApp();

  const handleChangeBulanTabel_1 = (event, values) => {
    const newSelectedValues = {};
    values.forEach((value) => {
      newSelectedValues[value.label.toUpperCase().replace(" ", "_")] = true;
    });
    setBulan_tabel_1(newSelectedValues);
  };

  const handleChangeBulanTabel_2 = (event, values) => {
    const newSelectedValues = {};
    values.forEach((value) => {
      newSelectedValues[value.label.toUpperCase().replace(" ", "_")] = true;
    });
    setBulan_tabel_2(newSelectedValues);
  };

  const handleChangeLokasiTabel_1 = (event, value) => {
    const id = event.target.id.split("-")[0]; // Extracting the id part (before '-')
    if (value) {
      setLokasi_tabel_1((prevState) => ({
        ...prevState,
        [id]: value.label,
      }));
    } else {
      setLokasi_tabel_1((prevState) => ({
        ...prevState,
        [id]: "",
      }));
    }
  };

  // ONCHANGE
  // dropdown
  const handleKegiatanChange = (event, value) => {
    setKegiatan(value);
    setCurrentKegiatan(event.target.id);
  };

  const handleSubKegiatanChange = (event, value) => {
    setSubKegiatan(value);
  };

  const handleWaktuMulaiChange = (event, value) => {
    setWaktuMulai(value);
  };

  const handleWaktuBerakhirChange = (event, value) => {
    setWaktuBerakhir(value);
  };

  const handleTahunAnggaranChange = (event, value) => {
    setTahunAnggaran(value);
  };
  //end of dropdown

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

  // dasar hukum points
  const handleChangePoint = (index, event) => {
    const newPoints = [...points];
    newPoints[index].value = event.target.value;
    setPoints(newPoints);
  };

  const handleAddPoint = () => {
    const lastLabel = points[points.length - 1].label;
    const nextLabel = String.fromCharCode(lastLabel.charCodeAt(0) + 1);
    setPoints([...points, { label: nextLabel, value: "" }]);
  };

  const handleRemovePoint = () => {
    if (points.length > 1) {
      const newPoints = points.slice(0, -1);
      setPoints(newPoints);
    }
  };

  // output yg dihasilkan number
  const handleAddNumber = () => {
    const lastLabel = numbers[numbers.length - 1].label;
    const nextLabel = lastLabel + 1;
    if (lastLabel < 20) {
      setNumbers([...numbers, { label: nextLabel, value: "" }]);
    }
  };

  const handleRemoveNumber = () => {
    if (numbers.length > 1) {
      setNumbers(numbers.slice(0, -1));
    }
  };

  const handleChangeNumber = (index, event) => {
    const newNumbers = [...numbers];
    newNumbers[index].value = event.target.value;
    setNumbers(newNumbers);
  };

  // tujuan numbers
  const handleAddTujuan = () => {
    const lastLabel = tujuan[tujuan.length - 1].label;
    const nextLabel = lastLabel + 1;
    if (lastLabel < 10) {
      setTujuan([...tujuan, { label: nextLabel, value: "" }]);
    }
  };

  const handleRemoveTujuan = () => {
    if (tujuan.length > 1) {
      setTujuan(tujuan.slice(0, -1));
    }
  };

  const handleChangeTujuan = (index, event) => {
    const newNumberTujuan = [...tujuan];
    newNumberTujuan[index].value = event.target.value;
    setTujuan(newNumberTujuan);
  };

  return (
    <div className="h-screen overflow-y-auto custom-scrollbar">
      <form className=" mx-auto p-4 border rounded-lg gap-3 flex flex-col">
        <Autocomplete
          disablePortal
          id="kegiatan"
          options={DropdownOptions.optionKegiatan}
          value={kegiatan}
          onChange={handleKegiatanChange}
          renderInput={(params) => <TextField {...params} label="Kegiatan" />}
        />
        <Autocomplete
          disablePortal
          id="sub_kegiatan"
          options={
            currentKegiatan === "kegiatan-option-0"
              ? DropdownOptions.optionSubKegiatan1
              : currentKegiatan === "kegiatan-option-1"
              ? DropdownOptions.optionSubKegiatan2
              : currentKegiatan === "kegiatan-option-2"
              ? DropdownOptions.optionSubKegiatan3
              : DropdownOptions.null
          }
          value={subKegiatan}
          onChange={handleSubKegiatanChange}
          renderInput={(params) => (
            <TextField {...params} label="Sub Kegiatan" />
          )}
        />

        <TextField
          name="indikator"
          label="Indikator"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          onChange={handleChangeTextField}
        />
        <TextField
          name="target"
          label="Target"
          variant="outlined"
          fullWidth
          onChange={handleChangeTextField}
        />
        <TextField
          name="anggaran"
          label="Anggaran"
          variant="outlined"
          fullWidth
          onChange={handleChangeTextField}
        />

        {/* dasar hukum */}
        <div>
          <div className="flex justify-between mb-3">
            <div>
              <p className="text-md-semibold my-4">A. LATAR BELAKANG</p>
              <p className="text-sm">1. DASAR HUKUM</p>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={handleRemovePoint}>
                <RemoveOutlinedIcon />
              </button>
              <button type="button" onClick={handleAddPoint}>
                <AddCircleOutlineOutlinedIcon />
              </button>
            </div>
          </div>
          <div className="ml-2 gap-3 flex flex-col">
            {points.map((point, index) => (
              <div key={index}>
                <TextField
                  label={`${point.label}`}
                  variant="outlined"
                  fullWidth
                  value={point.value}
                  onChange={(event) => handleChangePoint(index, event)}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-3">
            <p className="text-sm">2. GAMBARAN UMUM</p>
          </div>
          <div className="ml-2 gap-3 flex flex-col">
            <TextField
              name="gambaran_umum"
              label="Gambaran Umum"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              onChange={handleChangeTextField}
            />
          </div>
        </div>

        {/* output yg dihasilkan */}
        <div>
          <div className="flex justify-between mb-3">
            <p className="text-md-semibold my-4">B. OUTPUT YANG DIHASILKAN</p>
            <div className="flex gap-3">
              <button type="button" onClick={handleRemoveNumber}>
                <RemoveOutlinedIcon />
              </button>
              <button type="button" onClick={handleAddNumber}>
                <AddCircleOutlineOutlinedIcon />
              </button>
            </div>
          </div>
          <div className="ml-2 gap-3 flex flex-col">
            {numbers.map((number, index) => (
              <div key={index}>
                <TextField
                  label={`${number.label}`}
                  variant="outlined"
                  fullWidth
                  value={number.value}
                  onChange={(event) => handleChangeNumber(index, event)}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-md-semibold my-4">C. MAKSUD DAN TUJUAN</p>
          <p className="text-sm mb-2">1. MAKSUD</p>

          <TextField
            name="maksud"
            label="Maksud"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            onChange={handleChangeTextField}
          />
        </div>

        <div>
          <div className="flex justify-between">
            <p className="text-sm">2. TUJUAN</p>
            <div className="flex gap-3">
              <button type="button" onClick={handleRemoveTujuan}>
                <RemoveOutlinedIcon />
              </button>
              <button type="button" onClick={handleAddTujuan}>
                <AddCircleOutlineOutlinedIcon />
              </button>
            </div>
          </div>
          <div className="gap-3 flex flex-col mt-3">
            {tujuan.map((number, index) => (
              <div key={index}>
                <TextField
                  label={`${number.label}`}
                  variant="outlined"
                  fullWidth
                  value={number.value}
                  onChange={(event) => handleChangeTujuan(index, event)}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-md-semibold my-4">D. PENERIMA MANFAAT</p>
          <TextField
            name="penerima_manfaat"
            label="Penerima Manfaat"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <p className="text-md-semibold my-4">
            E. STRATEGI PELAKSANAAN SUB KEGIATAN
          </p>
          <TextField
            name="strategi_pelaksanaan"
            label="Strategi Pelaksanaan Sub Kegiatan"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <p className="text-md-semibold my-4">F. PEMBIAYAAN</p>
          <TextField
            name="pembiayaan"
            label="Pembiayaan"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <p className="text-md-semibold my-4">G. PENUTUP</p>
          <TextField
            name="penutup"
            label="Penutup"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            onChange={handleChangeTextField}
          />
        </div>

        <div>
          <p className="text-md-semibold my-4">TABEL.1</p>
          <TextField
            name="target_tabel"
            label="TARGET"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>

        <div>
          <Autocomplete
            disablePortal
            id="waktu_mulai"
            options={DropdownOptions.optionWaktuMulaiDanBerakhir}
            value={waktuMulai}
            onChange={handleWaktuMulaiChange}
            renderInput={(params) => (
              <TextField {...params} label="Waktu Mulai" />
            )}
          />
        </div>
        <div>
          <Autocomplete
            disablePortal
            id="waktu_berakhir"
            options={DropdownOptions.optionWaktuMulaiDanBerakhir}
            value={waktuBerakhir}
            onChange={handleWaktuBerakhirChange}
            renderInput={(params) => (
              <TextField {...params} label="Waktu Berakhir" />
            )}
          />
        </div>
        <div>
          <Autocomplete
            disablePortal
            id="tahun_anggaran"
            options={DropdownOptions.optionTahunAnggaran}
            value={tahunAnggaran}
            onChange={handleTahunAnggaranChange}
            renderInput={(params) => <TextField {...params} label="Anggaran" />}
          />
        </div>
        <div>
          <TextField
            name="ketua_tim"
            label="Ketua Tim"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>

        {/* tabel 1*/}
        {/* a */}
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-md-semibold my-4">a. Persiapan</p>
            <p className="text-sm-regular my-4">Rapat persiapan</p>
            <Autocomplete
              disablePortal
              id="LOKASI_1"
              options={DropdownOptions.optionLokasi}
              onChange={handleChangeLokasiTabel_1}
              renderInput={(params) => <TextField {...params} label="Lokasi" />}
            />
          </div>
          <div>
            <TextField
              name="KETERANGAN_RP"
              label="Keterangan"
              variant="outlined"
              fullWidth
              onChange={handleChangeTextField}
            />
          </div>
          <div>
            <TextField
              name="PETUGAS_RP"
              label="Petugas"
              variant="outlined"
              fullWidth
              onChange={handleChangeTextField}
            />
          </div>
          <div>
            <Autocomplete
              multiple
              disablePortal
              // id=""
              options={DropdownOptions.optionWaktuMulaiDanBerakhir}
              onChange={handleChangeBulanTabel_1}
              renderInput={(params) => <TextField {...params} label="Bulan" />}
            />
          </div>
        </div>

        {/* b */}
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-md-semibold my-4">b. Pelaksanaan</p>
            <p className="text-sm-regular my-4">
              1. Penyusunan Rumusan Bahan Kebijakan
            </p>
            <Autocomplete
              disablePortal
              id="LOKASI_2"
              options={DropdownOptions.optionLokasi}
              onChange={handleChangeLokasiTabel_1}
              renderInput={(params) => <TextField {...params} label="Lokasi" />}
            />
          </div>
          <div>
            <TextField
              name="KETERANGAN_PRBK"
              label="Keterangan"
              variant="outlined"
              fullWidth
              onChange={handleChangeTextField}
            />
          </div>
          <div>
            <TextField
              name="PETUGAS_PRBK"
              label="Petugas"
              variant="outlined"
              fullWidth
              onChange={handleChangeTextField}
            />
          </div>
          <div>
            <Autocomplete
              multiple
              disablePortal
              options={DropdownOptions.optionWaktuMulaiDanBerakhir}
              onChange={handleChangeBulanTabel_2}
              renderInput={(params) => <TextField {...params} label="Bulan" />}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
