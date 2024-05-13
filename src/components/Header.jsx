import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { useApp } from "../AppContext";

export const Header = () => {
  const { handleSubmit } = useApp();
  return (
    <header className="bg-black-header/900 text-white flex justify-between items-center px-4 py-4">
      <div className="ml-auto"></div>
      <div className="text-center">
        <p className="text-lg-semibold font-bold text-white text-center ">
          Template Pembuatan Proposal Kerangka Acuan Kerja
        </p>
      </div>
      <div className="ml-auto">
        <button
          className="flex gap-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 py-2 px-3"
          onClick={handleSubmit}
        >
          <FileDownloadOutlinedIcon />
          <p className="text-md-semibold">Download</p>
        </button>
      </div>
    </header>

    // <header className="bg-black-header/900 p-4 flex justify-center items-center">
    //   <div className="flex-1 flex justify-center items-center">
    //     <p className="text-lg-semibold font-bold text-white text-center ">
    //       Template Pembuatan Proposal Kerangka Acuan Kerja
    //     </p>
    //     <button
    //       className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
    //       type="submit"
    //     >
    //       Buat Proposal
    //     </button>
    //   </div>
    // </header>
  );
};
