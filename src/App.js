import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PestScene from './views/PestScene'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="canvas-container">
          <Routes>
            <Route path="/" element={<PestScene />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
