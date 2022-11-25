import Head from "next/head"
export default function Layout({children}) {
  return <div>
    {/* <Head>
      <title>Optifi</title>
      <meta name="F2E" content="Dennis"/>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
    </Head> */}
    <main>
      {children}
    </main>
  </div>
}