import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing:border-box
    }
    body {
        background: #F8F8FB;
        font-family: Spartan, sans-serif;
        font-weight:500;
        font-size:0.75rem;
        color:#0C0E16;
        overflow:${(props) => (props.isDrawerOpen ? 'hidden' : 'auto')}
    }

    address {
        font-style:normal
    }
`;

export default GlobalStyle;
