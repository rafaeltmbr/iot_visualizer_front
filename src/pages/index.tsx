import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { themes } from "../styles/themes";
import { Device } from "./device";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes.light}>
      <Router>
        <Routes>
          <Route path="/device/:device_id" element={<Device />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
