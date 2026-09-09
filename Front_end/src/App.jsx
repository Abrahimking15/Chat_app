import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./LoginForm";
import Sign from "./sign";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Sign />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
