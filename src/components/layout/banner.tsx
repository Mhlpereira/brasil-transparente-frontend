import Head from 'next/head'

export default function Banner() {
  return (
    <Head>
      <script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="800195aa-5b0f-49b6-b341-b0cce882b035"
      />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/images/favicon.ico" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=block"
      />
    </Head>
  )
}