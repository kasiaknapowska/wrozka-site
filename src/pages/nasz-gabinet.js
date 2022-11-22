import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"



import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import GalleryImage from "../components/galleryImage/GalleryImage"

const NaszGabinet = ({ data, location }) => {
    // console.log(data.gallery)
    const images = data.gallery.nodes.map(el => getImage(el))
  return (
  <Layout>
    <Hero
      hero={{
        type: "contact",
      }}
      location={location.pathname}
    />
    {images.map((image, i) => (
      <GalleryImage key={`galleryImage${i}`} image={image} alt={data.gallery.nodes[i].name} position={i % 2 === 0 ? "left" : "right"}/>
    ))}

    <div className="containerS">
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
  </Layout>
  )
}

export const Head = () => (
  <Seo title="Stomatologia i ortodoncja dla dzieci - zobacz zdjęcia naszego gabinetu" description={"Gabinet Wróżka Zębuszka został stworzony z myślą o najmłodszych Pacjentach. Kkolorowe, bajkowe wnętrza i przyjazna atmosfera zachęcają dzieci do kontroli u dentysty."}/>
)

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
