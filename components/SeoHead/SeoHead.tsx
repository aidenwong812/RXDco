import Head from "next/head"
import { SEO_DESCRIPTION, SEO_IMAGE, SEO_TITLE } from "../../lib/consts"

const SeoHead = (props: any) => {
  const { description, image, title } = props
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description || SEO_DESCRIPTION} />
      <link rel="icon" href="/images/favicon.png" />
      <meta name="og:title" content={title || SEO_TITLE} />
      <meta property="og:image" content={image || SEO_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description || SEO_DESCRIPTION} />
      <meta name="twitter:site" content="RDXco.com" />
      <meta name="twitter:url" content="https://rxdco.com/" />
      <meta name="twitter:title" content={title || SEO_TITLE} />
      <meta name="twitter:image" content={image || SEO_IMAGE} />
      <link rel="icon" href={image || SEO_IMAGE} />
      <link rel="apple-touch-icon" href={image || SEO_IMAGE} />
    </Head>
  )
}

export default SeoHead
