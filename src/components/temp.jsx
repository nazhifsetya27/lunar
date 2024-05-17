import React, { useCallback, memo } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { DropdownOptions } from "../utils/dropdownOption";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useApp } from "../AppContext";
import _ from "lodash";

const useDebouncedCallback = (callback, delay) => {
  const debouncedCallback = useCallback(
    _.debounce((...args) => callback(...args), delay),
    [callback, delay]
  );

  return debouncedCallback;
};

const PointField = memo(({ index, point, handleChangePoint }) => {
  return (
    <TextField
      label={`${point.label}`}
      variant="outlined"
      fullWidth
      value={point.value}
      onChange={(event) => handleChangePoint(index, event)}
    />
  );
});

const PointsSection = ({
  points,
  handleChangePoint,
  handleAddPoint,
  handleRemovePoint,
}) => {
  return (
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
          <PointField
            key={index}
            index={index}
            point={point}
            handleChangePoint={handleChangePoint}
          />
        ))}
      </div>
    </div>
  );
};

const InputForm = () => {
  const {
    kegiatan,
    setKegiatan,
    subKegiatan,
    setSubKegiatan,
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
    setBulan_tabel_3,
    setBulan_tabel_4,
    setBulan_tabel_5,
    setBulan_tabel_6,
    setBulan_tabel_7,
    setBagian,
    bagian,
    handleChangeTextField,
  } = useApp();

  const debouncedHandleChangeTextField = useDebouncedCallback(
    handleChangeTextField,
    300
  );

  const debouncedHandleChangePoint = useDebouncedCallback(
    (index, event) => {
      const newPoints = [...points];
      newPoints[index].value = event.target.value;
      setPoints(newPoints);
    },
    300
  );

  const handleChangeBulanTabel = (tableNumber) => (event, values) => {
    const newSelectedValues = {};
    values.forEach((value) => {
      newSelectedValues[value.label.toUpperCase().replace(" ", "_")] = true;
    });

    switch (tableNumber) {
      case 1:
        setBulan_tabel_1(newSelectedValues);
        break;
      case 2:
        setBulan_tabel_2(newSelectedValues);
        break;
      case 3:
        setBulan_tabel_3(newSelectedValues);
        break;
      case 4:
        setBulan_tabel_4(newSelectedValues);
        break;
      case 5:
        setBulan_tabel_5(newSelectedValues);
        break;
      case 6:
        setBulan_tabel_6(newSelectedValues);
        break;
      case 7:
        setBulan_tabel_7(newSelectedValues);
        break;
      default:
        break;
    }
  };

  const handleChangeLokasiTabel_1 = (event, value) => {
    const id = event.target.id.split("-")[0];
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

  const handleBagianChange = (event, value) => {
    setBagian(value);
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
      <form className=" mx-auto p-4 border rounded-lg gap-3 flex flex-col mb-3">
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
          onChange={debouncedHandleChangeTextField}
        />
        <TextField
          name="target"
          label="Target"
          variant="outlined"
          fullWidth
          onChange={debouncedHandleChangeTextField}
        />
        <TextField
          name="anggaran"
          label="Anggaran"
          variant="outlined"
          fullWidth
          onChange={debouncedHandleChangeTextField}
        />

        <div>
          <PointsSection
            points={points}
            handleChangePoint={debouncedHandleChangePoint}
            handleAddPoint={handleAddPoint}
            handleRemovePoint={handleRemovePoint}
          />
        </div>

        <div>
          <div className="mb-3">
            <p className="text-sm">2. GAMBARAN UMUM</p>
            <TextField
              name="gambaranUmum"
              label="Gambaran Umum"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              onChange={debouncedHandleChangeTextField}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-3">
            <p className="text-sm">3. TUJUAN</p>
            <div className="flex gap-3">
              <button type="button" onClick={handleRemoveTujuan}>
                <RemoveOutlinedIcon />
              </button>
              <button type="button" onClick={handleAddTujuan}>
                <AddCircleOutlineOutlinedIcon />
              </button>
            </div>
          </div>
          <div className="ml-2 gap-3 flex flex-col">
            {tujuan.map((number, index) => (
              <TextField
                key={index}
                label={`${number.label}.`}
                variant="outlined"
                fullWidth
                value={number.value}
                onChange={(event) => handleChangeTujuan(index, event)}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-3">
            <p className="text-sm">B. SASARAN</p>
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
              <TextField
                key={index}
                label={`${number.label}.`}
                variant="outlined"
                fullWidth
                value={number.value}
                onChange={(event) => handleChangeNumber(index, event)}
              />
            ))}
          </div>
        </div>

        <div className="mb-3">
          <p className="text-md-semibold my-4">C. WAKTU PELAKSANAAN</p>
          <Autocomplete
            disablePortal
            id="waktu-mulai"
            options={DropdownOptions.optionBulan}
            value={waktuMulai}
            onChange={handleWaktuMulaiChange}
            renderInput={(params) => (
              <TextField {...params} label="Waktu Mulai" />
            )}
          />
          <Autocomplete
            disablePortal
            id="waktu-berakhir"
            options={DropdownOptions.optionBulan}
            value={waktuBerakhir}
            onChange={handleWaktuBerakhirChange}
            renderInput={(params) => (
              <TextField {...params} label="Waktu Berakhir" />
            )}
          />
        </div>

        <Autocomplete
          disablePortal
          id="tahun-anggaran"
          options={DropdownOptions.optionTahun}
          value={tahunAnggaran}
          onChange={handleTahunAnggaranChange}
          renderInput={(params) => <TextField {...params} label="Tahun" />}
        />

        <div className="mb-3">
          <p className="text-md-semibold my-4">D. TEMPAT</p>
          <Autocomplete
            multiple
            disablePortal
            id="tempat"
            options={DropdownOptions.optionTempat}
            onChange={handleChangeLokasiTabel_1}
            renderInput={(params) => <TextField {...params} label="Tempat" />}
          />
        </div>

        <div className="mb-3">
          <p className="text-md-semibold my-4">E. PELAKSANA</p>
          <Autocomplete
            disablePortal
            id="bagian"
            options={DropdownOptions.optionBagian}
            value={bagian}
            onChange={handleBagianChange}
            renderInput={(params) => <TextField {...params} label="Bagian" />}
          />
        </div>

        <div className="mb-3">
          <p className="text-md-semibold my-4">F. BULAN PELAKSANAAN</p>
          <div className="mb-3">
            <p className="text-sm">1. PRA PELAKSANAAN</p>
            <Autocomplete
              multiple
              disablePortal
              id="bulan-tabel-1"
              options={DropdownOptions.optionBulan}
              onChange={handleChangeBulanTabel(1)}
              renderInput={(params) => (
                <TextField {...params} label="Bulan" variant="outlined" />
              )}
            />
          </div>
          <div className="mb-3">
            <p className="text-sm">2. PELAKSANAAN</p>
            <Autocomplete
              multiple
              disablePortal
              id="bulan-tabel-2"
              options={DropdownOptions.optionBulan}
              onChange={handleChangeBulanTabel(2)}
              renderInput={(params) => (
                <TextField {...params} label="Bulan" variant="outlined" />
              )}
            />
          </div>
          <div className="mb-3">
            <p className="text-sm">3. PASCA PELAKSANAAN</p>
            <Autocomplete
              multiple
              disablePortal
              id="bulan-tabel-3"
              options={DropdownOptions.optionBulan}
              onChange={handleChangeBulanTabel(3)}
              renderInput={(params) => (
                <TextField {...params} label="Bulan" variant="outlined" />
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
