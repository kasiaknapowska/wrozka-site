import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import GalleryMain from "../components/galleryMain/GalleryMain"


const NaszGabinet = ({ data, location }) => (
  <Layout>
    <Hero
      hero={{
        type: "contact",
      }}
      location={location.pathname}
    />

<GalleryMain gallery={data.gallery}/>

    <div className="containerS">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Stomatologia dla dzieci Wróżka zębuszka - galeria zdjęć" />

export const pageQuery = graphql`
  query {
    gallery: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      nodes {
        relativePath
        id
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`


export default NaszGabinet
