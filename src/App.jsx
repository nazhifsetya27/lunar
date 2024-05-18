import "./App.css";
import { useApp } from "./AppContext";
import { Header } from "./components/Header";
import InputForm from "./components/InputForm";
import Preview from "./components/Preview";
import DocxReader from "./components/docxReader";

function App() {
  const { errorMessage } = useApp();
  return (
    <>
      <Header />
      <div className="flex m-3 justify-between">
        {/* LEFT */}
        <div className="w-3/5">
          <InputForm />
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </div>
        {/* RIGHT */}
        <div className="w-2/5 h-full">
          {/* <div className="text-center">Preview</div> */}
          <Preview />
        </div>
      </div>
    </>
  );
}

export default App;
