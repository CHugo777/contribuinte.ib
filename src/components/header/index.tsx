import logoImg from '../../assets/logo-fazenda.svg'
import { Container, Content } from './styles'
export function Header () {
    return (
        <header>
            
            <div style={{ fontFamily: 'Panel Sans', fontSize: '16px' }}  >
                <Container>
                <Content>
            <img src={logoImg} alt="logo-fazenda" />
            <button type="button" style={{marginLeft:'30px'}}>Página Inicial</button>
            <button type="button">Atendimento online</button>
            <button type="button">Serviços da Fazenda</button>
            <button type="button">Domicílio Eletrônico</button>
                </Content>
                <div style={{marginLeft: '150px', display: 'flex', gap: '32px'}}>
            <button type="button">Entrar</button>
            <button type="button" style={{backgroundColor: '#374151', borderRadius: '12px', color: '#FFFFFF', padding: '14px',}}>Cadastre-se</button>
                </div>
                </Container>
            </div>
        </header>
    )
}