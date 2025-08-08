import { GlobalStyle } from "./styles/global";
import { Header } from "./components/header";
import { SubHeader } from "./components/sub-header";
import { SectionRefis } from "./components/refis";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PEspec from './components/pespec';

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <SubHeader />
              <SectionRefis />
            </div>
          }
        />
        <Route path="/p-espec" element={<PEspec />} />
      </Routes>
    </Router>
  );
}
