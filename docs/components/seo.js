import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang, title, description, meta, featuredImage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const pageTitle = title
  const siteTitle = site.siteMetadata.title

  const isHomeTitle = [
    "Home",
    "Docs",
    "Overview",
    "Welcome",
    siteTitle
  ].includes(pageTitle)

  title = isHomeTitle ? siteTitle : `${pageTitle} · ${siteTitle}`

  featuredImage = featuredImage ? `https://www.covalenthq.com${featuredImage.childImageSharp.fixed.src}?v2` : site.siteMetadata.image

  return (
    <Helmet>
      <html lang={lang}/>

      <title>{title}</title>

      <meta name="description" content={metaDescription}/>

      <meta property="og:image" content={featuredImage} />
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={metaDescription}/>
      <meta property="og:type" content="website"/>

      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={metaDescription}/>
      <meta name="twitter:creator" content={site.siteMetadata.author}/>
      <meta name="twitter:card" content="summary_large_image"/>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: "en",
  description: "",
  meta: []
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)
}

export default SEO
