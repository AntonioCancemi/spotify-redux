import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import MyHome from "./components/MyHome";
import MyFooterPlayer from "./components/MyFooterPlayer";

function App() {
  return (
    <BrowserRouter>
      <MyNav></MyNav>
      <Routes>
        <Route path="/*" element={<MyNav />} />
        <Route path="/*" element={<MyFooterPlayer />} />
        <Route path="/" element={<MyHome />} />
        <Route path="/artist/:id" element={<></>} />
        <Route path="/album/:id" element={<></>} />
      </Routes>
      <MyFooterPlayer />
    </BrowserRouter>
  );
}

export default App;
