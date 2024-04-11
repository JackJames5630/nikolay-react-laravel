import { createGlobalStyle } from "styled-components";
import themeColor from './themeColor'

const GlobalStyle = createGlobalStyle`

    ${themeColor}

    body{
        font-family:'Open Sans';
    }

    h1{
        font-size:var(--fz-heading);
        padding: 0;
        font-weight:500;
        margin:0;
        color:var(--dark);
    }
    h2{
        font-size:var(--fz-xxl);
        padding: 0;
        font-weight:500;
        margin:0 0 0 5px;
        color:var(--dark);
    }
    h3{
        font-size:var(--fz-xl);
        font-weight:400;
        color:var(--dark);
    }
    h4{
        font-size:var(--fz-lg);
        font-weight:400;
        color:var(--dark);
    }
    h5{
        font-size:var(--fz-md);
        font-weight:400;
        color:var(--dark);
        &:hover{
            height: auto !important; 
        }
        
    }

    p{
        font-size:var(--fz-sm);
        margin:0;
        padding: 20px 0;
        text-align:left;
        font-weight:300;
        letter-spacing: normal !important;
    }

    h6{
        color:var(--dark);
        font-size:var(--fz-xs);
    }

    div{
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

`

export default GlobalStyle;

