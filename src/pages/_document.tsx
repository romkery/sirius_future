import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="ru">
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico"/>
                    <meta name="emotion-insertion-point" content=""/>
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
                    {(this.props as any).emotionStyleTags}
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
