import {
  BrowserRouter, Routes, Route, Navigate
} from "react-router-dom";

import { Home, AstronomyPic } from './pages'

const Router = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/astronomy-pics" exact element={<AstronomyPic />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;