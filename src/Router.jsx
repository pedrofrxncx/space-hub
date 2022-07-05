import {
  BrowserRouter, Routes, Route, Navigate
} from "react-router-dom";

import { Home, AstronomyPic, InSpace } from './pages'

const Router = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/astronomy-pics" exact element={<AstronomyPic />} />
          <Route path="/in-space" exact element={<InSpace />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;