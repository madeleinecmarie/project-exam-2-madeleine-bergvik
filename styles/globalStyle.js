import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {

    // Font name
    --font: "Work Sans", sans-serif;

    // Colors
    --white: #ffffff;
    --black: #1D282E;
    --yellow: #F2D432;
    --orange: #F3AE54;
    --gray: rgba(29, 40, 46, 0.5);
    --light-gray: rgba(29, 40, 46, 0.15);
    --blackHover: #38454D;
    --orangeHover: #e9a44a;
    --black-opacity: rgba(29, 40, 46, 0.3);

    // Fonts sizes
    --font-xl: 5.938rem;
    --font-lg: 2.5rem;
    --font-md: 2.188rem;
    --font-sm: 1.625rem;
    --font-xs: 1.25em;
    --font-xxs: 0.875;
    --font-base: 1rem;
    --btn-nav: 1.125rem;
    
    // Font style
    --regular: 400;
    --medium: 500;
    --semiBold: 600;
    --bold: 700;
    --boldest: 900;

    // Elements 
    --radius: 5px;
    --font-spacing: 1px;
`;

export default GlobalStyle;
