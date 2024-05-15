import "./App.css";
import { useApp } from "./AppContext";
import { Header } from "./components/Header";
import InputForm from "./components/InputForm";

function App() {
  const { errorMessage } = useApp();
  return (
    <>
      <Header />
      <div className="pt-16 flex m-3 justify-between">
        {/* LEFT */}
        <div className="w-1/2">
          <InputForm />
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </div>
        {/* RIGHT */}
        <div className="w-1/2">
          <div className="text-center">Preview</div>
        </div>
      </div>
    </>
  );
}

export default App;
