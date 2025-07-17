import { GlobalStyle } from "./styles/global";
import { Header } from "./components/header";
import { SubHeader } from "./components/sub-header";
import { SectionRefis } from "./components/refis";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <SubHeader />
      <SectionRefis />
      

    </div>
  );
}


