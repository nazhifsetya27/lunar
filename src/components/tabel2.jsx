import TextField from "@mui/material/TextField";
import { useApp } from "../AppContext";
import { Autocomplete } from "@mui/material";
import { DropdownOptions } from "../utils/dropdownOption";
import { useState } from "react";

export const Tabel2 = () => {
  const { handleChangeTextField } = useApp();

  // General state for storing months selected for multiple Autocomplete components
  const [bulanSelections, setBulanSelections] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
    17: [],
    18: [],
    19: [],
    20: [],
    21: [],
    22: [],
    23: [],
    24: [],
    25: [],
    26: [],
    27: [],
    28: [],
    29: [],
  });

  const handleBulanChange = (identifier) => (event, value) => {
    setBulanSelections((prevSelections) => ({
      ...prevSelections,
      [identifier]: value,
    }));
  };

  const bulanMapping = {
    Januari: { short: "JAN" },
    Februari: { short: "FEB" },
    Maret: { short: "MAR" },
    April: { short: "APR" },
    Mei: { short: "MEI" },
    Juni: { short: "JUN" },
    Juli: { short: "JUL" },
    Agustus: { short: "AGT" },
    September: { short: "SEP" },
    Oktober: { short: "OCT" },
    November: { short: "NOV" },
    Desember: { short: "DES" },
  };

  const renderSelectedMonths = (identifier) => {
    return bulanSelections[identifier].map((bulan, index) => {
      const { short } = bulanMapping[bulan.label];
      const textFieldName = `${short}_${identifier}`;

      return (
        <TextField
          key={index}
          name={textFieldName}
          label={bulan.label}
          type="number"
          variant="outlined"
          fullWidth
          onChange={(event) => handleChangeTextField(event)}
        />
      );
    });
  };

  return (
    <div>
      {/* a - 1 */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-md-semibold my-4">TABEL.2</p>
          <p className="text-md-semibold my-4">
            Penyelenggaraan Fasilitasi & Koordinasi Pelaksanaan Urusan NPD II
          </p>
          <p className="text-sm-regular my-4">Honor Narasumber</p>
          <TextField
            name="URAIAN_HONOR_NARSUM"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_HONOR_NARSUM"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_HONOR_NARSUM"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("1")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("1")}
        </div>
      </div>

      {/* a - 2 */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm-regular my-4">Honor FGD Narasumber</p>
          <TextField
            name="URAIAN_HONOREGD_NARSUM"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_HONOREGD_NARSUM"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_HONOREGD_NARSUM"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("2")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("2")}
        </div>
      </div>

      {/* a - 3 */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm-regular my-4">Makan Minum Rapat</p>
          <TextField
            name="URAIAN_KONSUM_RAPAT"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_KONSUM_RAPAT"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_KONSUM_RAPAT"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("3")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("3")}
        </div>
      </div>

      {/* a - 4  */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm-regular my-4">Snack</p>
          <TextField
            name="URAIAN_SNACK"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_SNACK"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_SNACK"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("4")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("4")}
        </div>
      </div>

      {/* a - 5  */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm-regular my-4">
            {"Meeting dalam kota (Fullday)"}
          </p>
          <TextField
            name="URAIAN_MEETING_DK"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_MEETING_DK"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_MEETING_DK"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("5")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("5")}
        </div>
      </div>

      {/* b - 1  */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-md-semibold my-4">
            Penyelenggaraan Fasilitasi & Koordinasi Pelaksanaan Urusan NPD II
          </p>
          <p className="text-sm-regular my-4">Honorarium Narasumber</p>
          <TextField
            name="URAIAN_HONORARIUM_NARSUM"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_HONORARIUM_NARSUM"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_HONORARIUM_NARSUM"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("6")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("6")}
        </div>
      </div>

      {/* b - 2  */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm-regular my-4">Honor FGD Narasumber</p>
          <TextField
            name="URAIAN_HONORARIUMEGD_NARSUM"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_HONORARIUMEGD_NARSUM"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_HONORARIUMEGD_NARSUM"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("7")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("7")}
        </div>
      </div>

      {/* b - 3  */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm-regular my-4">Makan Minum Rapat</p>
          <TextField
            name="URAIAN_KONSUM_RAPAT_2"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_KONSUM_RAPAT_2"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_KONSUM_RAPAT_2"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("8")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("8")}
        </div>
      </div>

      {/* b - 4  */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm-regular my-4">Snack</p>
          <TextField
            name="URAIAN_SNACK_2"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_SNACK_2"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_SNACK_2"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("9")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("9")}
        </div>
      </div>

      {/* b - 5  */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm-regular my-4">
            {"Meeting dalam kota (Fullday)"}
          </p>
          <TextField
            name="URAIAN_MEETING_DK_2"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_MEETING_DK_2"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_MEETING_DK_2"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("10")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("10")}
        </div>
      </div>

      {/* c - 1  */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-md-semibold my-4">
            Penyusunan Kajian urusan Kesra bidang NPD II
          </p>
          <p className="text-sm-regular my-4">Honorarium Tenaga Ahli - S3</p>
          <TextField
            name="URAIAN_HONOR_TENAGA_AHLI"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_HONOR_TENAGA_AHLI"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_HONOR_TENAGA_AHLI"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("11")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("11")}
        </div>
      </div>

      {/* c - 2  */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm-regular my-4">Honorarium FGD Kajian</p>
          <TextField
            name="URAIAN_HONORARIUM_FGD_KAJIAN"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_HONORARIUM_FGD_KAJIAN"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_HONORARIUM_FGD_KAJIAN"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("12")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("12")}
        </div>
      </div>

      {/* c - 3  */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm-regular my-4">Makan Minum Rapat</p>
          <TextField
            name="URAIAN_KONSUM_RAPAT_3"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_KONSUM_RAPAT_3"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_KONSUM_RAPAT_3"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("13")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("13")}
        </div>
      </div>

      {/* c - 4  */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm-regular my-4">Snack</p>
          <TextField
            name="URAIAN_SNACK_3"
            label="Uraian"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="HARGA_SNACK_3"
            label="Harga"
            type="number"
            variant="outlined"
            fullWidth
            onChange={handleChangeTextField}
          />
        </div>
        <div>
          <TextField
            name="JUMLAH_SNACK_3"
            label="Jumlah"
            type="number"
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
            onChange={handleBulanChange("14")}
            renderInput={(params) => <TextField {...params} label="Waktu" />}
          />
        </div>
        <div className="flex flex-col gap-3 ml-4">
          {renderSelectedMonths("14")}
        </div>
      </div>
    </div>
  );
};
