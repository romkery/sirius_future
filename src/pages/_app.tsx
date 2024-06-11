import type {NextPage} from 'next';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {store} from '@/app/store';
import Head from 'next/head';
import React, {Fragment, ReactElement, ReactNode} from 'react';

export type PageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: PageWithLayout;
};

function App({Component, pageProps}: AppPropsWithLayout) {
    const [loaded, setLoaded] = React.useState(false);
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <Fragment>
            <Provider store={store}>
                <Head>
                    <meta name="viewport" content="initial-scale=1, width=device-width"/>
                </Head>
                {!loaded && getLayout(<Component {...pageProps} />)}
            </Provider>
        </Fragment>
    );
}

export default App;
