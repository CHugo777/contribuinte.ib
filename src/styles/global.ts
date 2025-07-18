import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `

    :root{
    --background: #111827;
    --gray: #D1D5DB;
    --dark-gray: #9CA3AF;
    --gray-w: #E8E8E8;
    }

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}


body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

Header {
     background: var(--background);
}
.subHeader {
     background: var(--background);
}

.sectionRefis {
    background: var(--gray-w);
    min-height: 100vh;
}
button {
    all: unset;
    cursor: pointer;
    color: var(--dark-gray);
}



@font-face {
  font-family: 'Panel Sans', sans-serif;
  src: url('./assets/fonts/fonnts.com-Panel_Sans_Bold'); format ('otf');
  font-weight: normal;
  font-style: normal;

  font-family: 'sf-pro-display', sans-serif;
  src: url('./assets/fonts/SF-Pro-Display-Regular'); format ('otf');
  font-weight: normal;
  font-style: normal;
}

.QueroAt {
    background-color: #374151;
    font-family: sans-serif;
    border-radius: 12px;
    color: #FFFFFF;
    padding: 16px;
    font-size: 15px;
    margin-top: 36px;
    margin-left: 80px;
    cursor: pointer;
    transition: background-color 0.3s;

  &:hover {
      background-color: #31363dff; 
    }
  }
;

.Cadastre {
  background-color: #374151;
  border-radius: 12px;
  color: #FFFFFF;
  padding: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
&:hover {
      background-color: #31363dff; 
    }
}



.AcessarButton {
    background-color: #111827;
    border-radius: 12px;
    color: #FFFFFF;
    padding: 20px 40px;
    font-size: 28px;
    min-width: 200px;
    min-height: 60px;
    display: block;
    margin: 30px auto 0;
    text-align: center;
    transition: background-color 0.3s;
}

.AcessarButton:hover {
    background-color: #2b4c94ff;
}


`

