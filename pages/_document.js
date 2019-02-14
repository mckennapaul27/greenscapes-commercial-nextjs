import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
   static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  } 

  render() {
    return (
      <html>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />             
            <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
            <meta charSet="utf-8" />
            <link rel="apple-touch-icon" sizes="57x57" href="/static/brand/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/static/brand/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/static/brand/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/static/brand/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/static/brand/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/static/brand/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/static/brand/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/static/brand/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/static/brand/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/static/brand/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/static/brand/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/static/brand/favicon-16x16.png"/>
            <link rel="manifest" href="/manifest.json"/>
            <meta name="google-site-verification" content="OLoSzWOCfRymkDEhxg42MkiC8O6odpuCKm2D-25n0O8" />
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body>
          <Main />
          <NextScript />  
          <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>             
        </body>
      </html>
    )
  }
}