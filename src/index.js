import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';
import App from './App';

const colors = {
    brand: {
        100: '#faf9f9',
        200: '#f0eeee',
        300: '#d3e7f3',
        400: '#6ca0d1'
    }
}

const theme = extendTheme({ colors })

function Here() {
    return (
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    )
}

ReactDOM.render(<Here />, document.getElementById('root'));

