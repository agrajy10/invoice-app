import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body {
        background: #F8F8FB;
        font-family: Spartan, sans-serif;
        font-weight:500;
        font-size:0.75rem;
        color:#0C0E16;
        overflow:${(props) => (props.isDrawerOpen ? 'hidden' : 'auto')}
    }
`;

export default GlobalStyle;
