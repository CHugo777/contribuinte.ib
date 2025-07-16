import { GlobalStyle } from "./styles/global";
import { Header } from "./components/header";


export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <h1 style={{
       color: '#D1D5DB',
       fontFamily: 'Panel Sans',
       marginLeft:'80px',
       fontSize: '49px',
       marginTop: '40px',
       /*width: '150px'*/}}
       >
       Um portal da fazenda <br/>
       com tudo que você<br/>
       precisa </h1>
    </div>
  );
}


