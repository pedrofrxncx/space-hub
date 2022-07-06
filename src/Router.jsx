import {
  BrowserRouter, Routes, Route, Navigate
} from "react-router-dom";

import { Home, AstronomyPic, Iss } from './pages'

const Router = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/astronomy-pics" exact element={<AstronomyPic />} />
          <Route path="/iss" exact element={<Iss />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;