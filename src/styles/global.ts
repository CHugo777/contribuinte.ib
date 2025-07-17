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

.SectionRefis {
    background: var(--gray-w);
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


`

