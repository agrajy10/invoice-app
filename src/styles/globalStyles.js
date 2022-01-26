import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing:border-box
    }
    body {
        background: ${({ theme }) => theme.body.bg};
        font-family: Spartan, sans-serif;
        font-weight:500;
        font-size:0.75rem;
        color:${({ theme }) => theme.body.color};
        overflow:${({ isDrawerOpen }) => (isDrawerOpen ? 'hidden' : 'auto')}
    }

    address {
        font-style:normal
    }
`;

export default GlobalStyle;
