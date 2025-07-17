import { ReactComponent as BackgroundSvg } from "../../assets/background-hero.svg";
import { ReactComponent as CardSvg } from "../../assets/card-not.svg";


export function SubHeader () {
  return ( 
    <div className="subHeader">
    <h1 style={{
       color: '#D1D5DB',
       fontFamily: 'Panel Sans',
       marginLeft:'80px',
       fontSize: '49px',
       marginTop: '40px',
       maxWidth: '800px'}}
       >
       Um portal da fazenda 
       com tudo que você
       precisa </h1>
       
       <BackgroundSvg

       style={{ 
        marginLeft: '700px',
        marginTop: '-130px'}} 
         />

       <p style={{
       color: '#6f7581ff',
       fontFamily: 'SF Pro Display',
       marginTop: '-460px',
       marginLeft: '80px'
       }}>
       Receba atendimento rápido, consulte o andamento dos seus processos <br/>
       e acesse nossos serviços em um só lugar 
       </p>

       <button
        type="button"
        style={{
          backgroundColor: '#374151',
          fontFamily: 'sans-serif',
          borderRadius: '12px',
          color: '#FFFFFF',
          padding: '16px',
          fontSize: '15px',
          marginTop: '36px',
          marginLeft: '80px'
        }}
        onClick={() => window.location.href = 'https://contribuinte.ib.itaborai.rj.gov.br/#atendimento'}
      >
      Quero atendimento
      </button>
      <button type="button" 
      style={{marginLeft: '20px', 
      fontFamily: 'sans-serif'}}
      >
        Acessar nossos serviços
        </button>


      <p style={{
       color: '#6f7581ff',
       fontFamily: 'SF Pro Display',
       marginTop: '30px',
       marginLeft: '80px'
       }}
      >
        Últimas notícias publicadas
      </p>

       <div>
      <CardSvg 
       style={{
        marginLeft: 
        '80px', 
        marginTop: '30px'
      }}
      />
      <CardSvg 
       style={{marginLeft: '10px', marginTop: '30px'}}
      />
      <CardSvg 
       style={{marginLeft: '10px', marginTop: '30px'}}
      />
      </div>
      </div>
  )
}