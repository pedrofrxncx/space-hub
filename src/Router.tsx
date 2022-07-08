import {
  BrowserRouter, Routes, Route, Navigate
} from "react-router-dom";

import { Home, AstronomyPic, Iss } from './pages'

const Router = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/astronomy-pics" element={<AstronomyPic />} />
          <Route path="/iss" element={<Iss />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;