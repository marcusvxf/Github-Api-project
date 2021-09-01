import React from 'react';
import App from './App';
import { ResetCSS } from './global/resetCSS';
import { GitHubProvider } from './Providers/gitHubProvide';

const Providers = () => {
    return(
        <main>
        <GitHubProvider>
            <ResetCSS/>
            <App/>
        </GitHubProvider>
        </main>
    )
};

export default Providers;