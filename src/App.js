import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ObjViewer from "./views/ObjViewer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="canvas-container">
          <Routes>
            <Route path="/" element={<ObjViewer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
