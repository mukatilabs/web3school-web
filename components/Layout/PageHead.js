import Head from "next/head";
import Script from 'next/script'
function PageHead({ headTitle }) {
    return (
        <>
            <Head>
            
            <div className="container">
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HD0XN3WYXR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HD0XN3WYXR');
        `}
      </Script>
    </div>
                <title>
                    {headTitle ? headTitle : "Web3School - Learn Build Deploy"}
                </title>
                <link rel="icon" href="/assets/imgs/template/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            
            </Head>


        </>
    );
}
export default PageHead;
