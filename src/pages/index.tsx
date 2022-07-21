import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Device } from "./device";
import { themes } from "../styles/themes";
import { PageContainer } from "../components/PageContainer";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes.light}>
      <Router>
        <PageContainer>
          <Routes>
            <Route path="/device/:device_id" element={<Device />} />
          </Routes>
        </PageContainer>
      </Router>
    </ThemeProvider>
  );
};
