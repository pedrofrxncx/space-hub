import {
  BrowserRouter, Routes, Route, Navigate
} from "react-router-dom";

import { Home } from './pages'

const Router = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;