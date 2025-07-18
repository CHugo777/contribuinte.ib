import logoImg from '../../assets/logo-fazenda.svg'
import { Container, Content } from './styles'
export function Header () {
    return (
        <header>
            
            <div 
            style={{ 
                fontFamily: 'sans-serif', 
                fontSize: '17px'
                 }}  
                 >
                <Container>
                <Content>
            <img src={logoImg} alt="logo-fazenda" />

            <button
            type="button"
            style={{ marginLeft: '30px' }}
            onClick={() => window.location.href = 'https://contribuinte.ib.itaborai.rj.gov.br'}
            >
            Página Inicial
            </button>

            <button type="button"
            onClick={() => window.location.href = 'https://connectia.ib.itaborai.rj.gov.br/login'}>Atendimento online
            </button>

            <button type="button"
            onClick={() => window.location.href = 'https://contribuinte.ib.itaborai.rj.gov.br/#servicos'} >Serviços da Fazenda
            </button>

            <button type="button" 
            onClick={() => window.location.href = '#'} >
            Domicílio Eletrônico
            </button>
            </Content>
            
            <div 
            style={{marginLeft: '280px', 
            display: 'flex',
            gap: '32px'}}
             >
            <button 
            type="button">
                Entrar
            </button>
            <button 
            type="button" 
            className='Cadastre'>
                Cadastre-se
            </button>
            </div>
                </Container>
            </div>
        </header>
    )
}