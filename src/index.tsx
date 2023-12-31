import React from 'react';
import '@Style/GlobalStyles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.Fragment>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </React.Fragment>
);
