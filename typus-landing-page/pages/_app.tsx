import { useState } from "react"

import Head from "next/head"
import Script from 'next/script'
import type { AppProps } from 'next/app'

import useEnvironment from '../stores/useEnvironment'
import Initialize from '../components/Initialize'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import '../styles/globals.css'
import '../styles/fonts.css'


function MyApp({ Component, pageProps }: AppProps) {
  const gaTrackingId = useEnvironment((state) => state.gaTrackingId)

  return (
  <>
    <ChakraProvider theme={theme}>
      <Head>
        <title>Test-Optifi</title>
        {/* <meta name="F2E" content="Dennis"/> */}
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="description" content="10 月 20 日，融資平臺 CoinList 公佈了 2022 年秋季種子的 5 個專案。以下是 CoinList 關於此批次專案的 Blog 文章，BlockBeats 編譯整理，包括 Acala、Biconomy、Injective、Parsiq 和 Rabbithole。" />
        <link rel="canonical" href="https://www.rayskyinvest.com/88673/coinlist-2022automn" />
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="5 個新專案，CoinList 2022 年秋季種子專案一覽" />
        <meta property="og:description" content="10 月 20 日，融資平臺 CoinList 公佈了 2022 年秋季種子的 5 個專案。以下是 CoinList 關於此批次專案的 Blog 文章，BlockBeats 編譯整理，包括 Acala、Biconomy、Injective、Parsiq 和 Rabbithole。" />
        <meta property="og:url" content="https://www.rayskyinvest.com/88673/coinlist-2022automn" />
        <meta property="og:site_name" content="雷司紀的小道投資" />
        <meta property="article:publisher" content="https://www.facebook.com/raysky.invest/" />
        <meta property="article:published_time" content="2022-10-23T15:03:36+00:00" />
        <meta property="article:modified_time" content="2022-10-23T15:03:39+00:00" />
        <meta property="og:image" content="https://www.rayskyinvest.com/wp-content/uploads/2022/10/封面圖設計：主網上線困難重重，ETHW路在何方？-的複本-1.png" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="1150" />
        <meta property="og:image:type" content="image/png" />
        <meta name="author" content="Rick" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Rick" />
        <meta name="twitter:label2" content="Est. reading time" />
        <meta name="twitter:data2" content="1 分鐘" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
    <Script id="google-analytics" strategy="lazyOnload">
              {`
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                ga('create', '${gaTrackingId ?? ''}', 'auto');
                ga('send', 'pageview');
              `}
    </Script>
  </>
  )
}

export default MyApp
