import { ReactComponent as Greenball} from "../../assets/greenball.svg"
import { ReactComponent as Redball} from "../../assets/Redball.svg"
import { ReactComponent as Perd } from "../../assets/perd.svg";
import { ReactComponent as Law } from "../../assets/law.svg";

import ReactTooltip from 'react-tooltip';


import { GlobalStyle } from "../../styles/global";

const PEspec = () => {
  return(
   <div style={{
    backgroundColor: '#F4F4F4',
    minHeight: '100vh',
    padding: '40px'
   }}>
    <Perd style={{
      width: '200px',
      height: '80px',
      display: 'block',
      margin: '15px auto 10px auto'

    }}/>
    <h1 style={{
      fontFamily: 'sf-pro-display',
      color: '#111827',
      textAlign: 'center'
    }}>
      Programas Especiais de Regularização de Débitos
    </h1>
    <p style={{
         textAlign: 'center',
          color: '#424242',
          fontFamily: 'Panel Sans',
          fontSize: '12px',
          maxWidth: '800px',
          margin: '5px auto 0',
    }}>
      Consulte os programas especiais da Prefeitura de Itaboraí com condições facilitadas para pagamento ou parcelamento de débitos. Realize simulações e adesões diretamente pelo portal, respeitando os prazos e benefícios previstos em lei.
    </p>

    <div  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '40px',
   
  }}
> 
   <div className="card-pos">
  {/* Topo do card */}
  <div style={{
            width: '100%',
            height: '100px',
            padding: '10px',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            borderBottom: '1px solid #a3a3a3ff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxSizing: 'border-box',
            marginBottom: '20px', 
          
  }}>
    
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <Law />
        <h1 style={{ margin: 0, marginLeft: '10px' }}>
          REFIS Lei nº 20.946/2021
        </h1>
    </div>
    <p style={{ textAlign: 'center', color: '#727272', margin: 0, fontFamily: 'Inter' }}>
      (com alterações da Lei nº 21.860/2023)
    </p>
  </div>

  {/* Texto do meio */}
  <p style={{
    fontFamily: 'Inter',
    fontSize: '1.2rem',
    textAlign: "center",
    color: '#000000',
    margin: '0 0 20px 0',
    lineHeight: '1.5'
  }}>
    A Lei nº 20.946, de 20 de dezembro de 2021, com as alterações previstas na Lei nº 21.860/2023, instituiu o Programa de Parcelamento Incentivado de ICMS, ITCMD e de créditos não tributários inscritos em dívida ativa pela Secretaria de Estado da Fazenda, possibilitando às pessoas físicas e jurídicas a regularização de débitos com redução de multa e de juros, mediante pagamento em parcela única ou parcelamento em até 180 meses.
  </p>

  {/* Botão */}
    <button
          type="button"
          className="AcessarButton"
          style={{
            margin: '5px 10px 30px 10px',
          }}
          onClick={() => window.location.href = 'https://connectia.ib.itaborai.rj.gov.br/login'}
        >
          ACESSAR
        </button>

  {/* Rodapé com "ATIVO" */}
  <div style={{
    width: '100%',
    height: '100px',
    padding: '10px',
    borderRadius: '40px',
    border: '1px solid #a3a3a3ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
  }}>
    <Greenball style={{
      marginRight: '10px',
    }} />
    <h1 style={{
      fontFamily: 'Inter',
      margin: 0,
      fontSize: '1.1rem'
    }}>
      ATIVO
    </h1>
  </div>


        </div>
<div className="card-neg"

>

  {/* Topo do card */}
  <div style={{
            width: '100%',
            height: '100px',
            padding: '10px',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            borderBottom: '1px solid #a3a3a3ff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxSizing: 'border-box',
            marginBottom: '20px',
  }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
          <Law />
          <h1 style={{ margin: 0, marginLeft: '10px', fontFamily: 'sf-pro-display', }}>
            REFIS Lei nº 20.946/2021
          </h1>
        </div>
    <p style={{ textAlign: 'center', color: '#727272', margin: 0, fontFamily: 'Inter' }}>
      (com alterações da Lei nº 21.860/2023)
    </p>
  </div>

  {/* Texto do meio */}
  <p style={{
    fontFamily: 'Inter',
    fontSize: '1.2rem',
    textAlign: "center",
    color: '#000000',
    margin: '0 0 20px 0',
    lineHeight: '1.5'
  }}>
    A Lei nº 20.946, de 20 de dezembro de 2021, com as alterações previstas na Lei nº 21.860/2023, instituiu o Programa de Parcelamento Incentivado de ICMS, ITCMD e de créditos não tributários inscritos em dívida ativa pela Secretaria de Estado da Fazenda, possibilitando às pessoas físicas e jurídicas a regularização de débitos com redução de multa e de juros, mediante pagamento em parcela única ou parcelamento em até 180 meses.
  </p>

  {/* Botão */}
    <button
          type="button"
          className="AcessarButton"
          style={{
            margin: '5px 10px 30px 10px',
            backgroundColor: '#8f8f8fff',
            cursor: 'not-allowed',
          }}
        >
          ACESSAR
        </button>

  <div style={{
    width: '100%',
    height: '100px',
    padding: '10px',
    borderRadius: '40px',
    border: '1px solid #a3a3a3ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
  }}>
    <Redball style={{
      marginRight: '10px',
    }} />
    <h1 style={{
      fontFamily: 'Inter',
      color: '#575757',
      margin: 0,
      fontSize: '1.1rem'
    }}>
      Encerrado em 27/03/2024
    </h1>
  </div>


</div>

</div>

</div>

  ) 
};

export default PEspec;
