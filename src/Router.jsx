import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SendLetter from "./pages/SendLetter";
import Actiongif from "./pages/Actiongif";
import Campfire from "./pages/Campfire";
import Ending from "./pages/Ending";
import Fired from "./pages/Fired";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:roomId" element={<SendLetter />}>
            <Route path=":action" element={<Actiongif />} />
          </Route>
          <Route path="/:roomId/campfire" element={<Campfire />} />
          <Route path="/fired" element={<Fired />} />
          <Route path="/ending" element={<Ending />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
