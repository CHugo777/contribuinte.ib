import { ReactComponent as Greenball } from "../../assets/greenball.svg";
import { ReactComponent as Redball } from "../../assets/Redball.svg";
import { ReactComponent as Perd } from "../../assets/perd.svg";
import { ReactComponent as Law } from "../../assets/law.svg"

import { useNavigate } from 'react-router-dom';
import { GlobalStyle } from "../../styles/global";

export function SectionRefis() {
  const navigate = useNavigate();

  const irParaPEspec = () => {
    window.open('/p-espec', '_blank');
  };

  return (
    <div 
      className="SectionRefis"
      style={{
        background: '#F4F4F4',
        minHeight: '100vh',
        paddingBottom: '40px'
      }}
    >
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <Perd style={{
          textAlign: 'center',
          fontFamily: 'Panel Sans',
          fontSize: '24px',
          padding: '16px'
        }} />

        <p style={{
          textAlign: 'center',
          color: '#424242',
          fontFamily: 'Panel Sans',
          fontSize: '12px',
          maxWidth: '800px',
          margin: '-15px auto 0',
        }}>
          Consulte os programas especiais da Prefeitura de Itaboraí com condições facilitadas para pagamento ou parcelamento de débitos. Realize simulações e adesões diretamente pelo portal, respeitando os prazos e benefícios previstos em lei.
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '-20px',
        flexWrap: 'wrap',
        margin: '40px'
      }}>
        
        {/* CARD 1 */}
        <div className="card-pos">
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
            <div style=
            {{display: 'flex',
             alignItems: 'center',
              justifyContent: 'center'
              }}>
            <Law />

            <h1 style={{ margin: 0, marginLeft: '10px', fontFamily: 'sf-pro-display' }}>
              REFIS Lei nº 20.946/2021
            </h1>
            </div>
            <p style={{ textAlign: 'center', color: '#727272', margin: 0, fontFamily: 'Inter' }}>
              (com alterações da Lei nº 21.860/2023)
            </p>
          </div>

          <p style={{
            fontFamily: 'Inter',
            fontSize: '1.2rem',
            textAlign: "center",
            color: '#000000',
            margin: '0 0 20px 0',
            lineHeight: '1.5'
          }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius praesentium enim culpa neque tempore. Aperiam necessitatibus, ex, ipsum quia perferendis sunt nihil saepe aspernatur dolorum voluptates repellendus eaque fugiat!            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius praesentium enim culpa neque tempore. Aperiam necessitatibus, ex, ipsum quia perferendis sunt nihil saepe aspernatur dolorum voluptates repellendus eaque fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius praesentium enim culpa neque tempore. Aperiam necessitatibus, ex, ipsum quia perferendis sunt nihil saepe aspernatur dolorum voluptates repellendus eaque fugiat!
          </p>

        

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
            <Greenball style={{ marginRight: '10px' }} />
            <h1 style={{
              fontFamily: 'Inter',
              margin: 0,
              fontSize: '1.1rem'
            }}>
              ATIVO
            </h1>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card-neg">
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
            <div style=
            {{display: 'flex',
             alignItems: 'center',
              justifyContent: 'center'
              }}>
            <Law />
            <h1 style={{ margin: 0, marginLeft: '10px', fontFamily: 'sf-pro-display' }}>
              REFIS Lei nº 20.946/2021
            </h1>
            </div>
            <p style={{ textAlign: 'center', color: '#727272', margin: 0, fontFamily: 'Inter' }}>
              (com alterações da Lei nº 21.860/2023)
            </p>
          </div>

          <p style={{
            fontFamily: 'Inter',
            fontSize: '1.2rem',
            textAlign: "center",
            color: '#000000',
            margin: '0 0 20px 0',
            lineHeight: '1.5',
            
            
          }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius praesentium enim culpa neque tempore. Aperiam necessitatibus, ex, ipsum quia perferendis sunt nihil saepe aspernatur dolorum voluptates repellendus eaque fugiat!            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius praesentium enim culpa neque tempore. Aperiam necessitatibus, ex, ipsum quia perferendis sunt nihil saepe aspernatur dolorum voluptates repellendus eaque fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius praesentium enim culpa neque tempore. Aperiam necessitatibus, ex, ipsum quia perferendis sunt nihil saepe aspernatur dolorum voluptates repellendus eaque fugiat!

          </p>

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
            <Redball style={{ marginRight: '10px' }} />
            <h1 style={{
              fontFamily: 'Inter',
              margin: 0,
              fontSize: '1.1rem',
              color: '#575757'
            }}>
              Encerrado em 27/03/2024
            </h1>
          </div>
        </div>
      </div>
        <button
            type="button"
            className="AcessarButton"
            onClick={irParaPEspec}
            style={{
              margin: '5px auto 30px auto', 
    display: 'block',
            }}
          >
            ACESSAR
          </button>
    </div>
  );
}
