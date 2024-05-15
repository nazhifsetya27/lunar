import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { useApp } from "../AppContext";

export const Header = () => {
  const { handleSubmit, isLoading } = useApp();

  return (
    <header className="bg-black-header/900 text-white flex justify-between items-center px-4 py-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="ml-auto"></div>
      <div className="text-center">
        <p className="text-lg-semibold font-bold text-white text-center">
          Template Pembuatan Proposal Kerangka Acuan Kerja
        </p>
      </div>
      <div className="ml-auto">
        <button
          className="flex gap-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 py-2 px-3 disabled:bg-blue-300"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          <FileDownloadOutlinedIcon />
          <p className="text-md-semibold">
            {isLoading ? "Downloading..." : "Download"}
          </p>
        </button>
      </div>
    </header>
  );
};
