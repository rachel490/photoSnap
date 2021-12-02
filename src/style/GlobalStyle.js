import React from 'react'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

    * {
        font-family: 'DM Sans', sans-serif;
    }
`;

export default GlobalStyle;