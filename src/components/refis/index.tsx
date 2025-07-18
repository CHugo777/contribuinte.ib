import { ReactComponent as Greenball } from "../../assets/greenball.svg";
import { ReactComponent as Redball } from "../../assets/Redball.svg";

export function SectionRefis() {
  return (
    <div className="SectionRefis" style={{ background: '#E8E8E8', minHeight: '100vh', paddingBottom: '40px'  }}>
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h1 style={{
          textAlign: 'center',
          fontFamily: 'Panel Sans',
          fontSize: '24px',
          padding: '16px'
        }}>
          Programas Especiais de Regularização de Débitos
        </h1>

        <p style={{
          textAlign: 'center',
          color: '#424242',
          fontFamily: 'Panel Sans',
          fontSize: '12px',
          margin: '0 auto 0',
        }}>
          Consulte os programas especiais da Prefeitura de Itaboraí com condições facilitadas para pagamento ou parcelamento de débitos. Realize simulações e adesões diretamente pelo portal, respeitando os prazos e benefícios previstos em lei.
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '40px',
        flexWrap: 'wrap' 
      }}>
        <div style={{
          width: '554px',
          height: '556px',
          padding: '20px',
          border: '2px solid #727272',
          borderRadius: '10px',
        }}>
          <div style={{
            width: '553px',
            height: '100px',
            padding: '10px',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            border: '2px solid #727272',
            background: '#bbbabaff',
            margin: '-20px -3px 0 -20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <h1 style={{ textAlign: 'center', margin: 0 }}>REFIS Lei nº 20.946/2021</h1>
            <p style={{ textAlign: 'center', color: '#727272' }}>(com alterações da Lei nº 21.860/2023)</p>
          </div>

          <p style={{
            fontFamily: 'sans-serif',
            fontSize: '24px',
            textAlign: "center",
            marginTop: '20px',
            color: '#000000'
          }}>
            A Lei nº 20.946, de 20 de dezembro de 2021, com as alterações previstas na Lei nº 21.860/2023, instituiu o Programa de Parcelamento Incentivado de ICMS, ITCMD e de créditos não tributários inscritos em dívida ativa pela Secretaria de Estado da Fazenda, possibilitando às pessoas físicas e jurídicas a regularização de débitos com redução de multa e de juros, mediante pagamento em parcela única ou parcelamento em até 180 meses.
          </p>

          <div style={{
            width: '553px',
            height: '94px',
            padding: '20px',
            borderBottomRightRadius: '10px',
            borderBottomLeftRadius: '10px',
            border: '2px solid #727272',
            background: '#D4D4D4',
            margin: '58px -3px 0 -20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <Greenball />
            <h1>ATIVO</h1>
          </div>
        </div>




        <div style={{
          width: '556px',
          height: '556px',
          padding: '20px',
          border: '2px solid #727272',
          borderRadius: '10px',
        }}>
          <div style={{
            width: '553px',
            height: '100px',
            padding: '10px',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            border: '2px solid #727272',
            background: '#bbbabaff',
            margin: '-20px -3px 0 -20px',
          }}>
            <h1 style={{ textAlign: 'center' }}>REFIS Lei nº 20.946/2021</h1>
            <p style={{ textAlign: 'center', color: '#727272' }}>(com alterações da Lei nº 21.860/2023)</p>
          </div>

          <p style={{
            fontFamily: 'sans-serif',
            fontSize: '24px',
            textAlign: "center",
            marginTop: '20px',
            color: '#000000'
          }}>
            A Lei nº 20.946, de 20 de dezembro de 2021, com as alterações previstas na Lei nº 21.860/2023, instituiu o Programa de Parcelamento Incentivado de ICMS, ITCMD e de créditos não tributários inscritos em dívida ativa pela Secretaria de Estado da Fazenda, possibilitando às pessoas físicas e jurídicas a regularização de débitos com redução de multa e de juros, mediante pagamento em parcela única ou parcelamento em até 180 meses.
          </p>

          <div style={{
            width: '553px',
            height: '94px',
            padding: '20px',
            borderBottomRightRadius: '10px',
            borderBottomLeftRadius: '10px',
            border: '2px solid #727272',
            background: '#D4D4D4',
            margin: '58px -23px 0 -20px',
          }}>
            <h1 style={{ display: 'block',
                textAlign: 'center', color: '#575757', fontSize: '25px' }}>Encerrado em 27/03/2024</h1>
            <Redball style={{ marginLeft: '84px', position: 'relative', top: '-30px' }} />
          </div>
        </div>
      </div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}} >
             <button 
                type="button" 
                style={{
                backgroundColor: '#111827',
                borderRadius: '12px',
                color: '#FFFFFF',
                padding: '20px 40px',
                fontSize: '28px',
                minWidth: '200px',
                minHeight: '60px',
                display: 'block',
                margin: '30px auto 0',
                textAlign: 'center'
                }}
                
                onClick={() => window.location.href = 'https://portalrefis.sefa.pr.gov.br/sefa-prp/'}

                >
                    ACESSAR
             </button>
          </div>
    </div>
  );
}
