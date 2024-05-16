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
            name="JUMLAH _KONSUM_RAPAT"
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
            name="JUMLAH _SNACK"
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
            name="JUMLAH _MEETING_DK"
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
    </div>
  );
};
