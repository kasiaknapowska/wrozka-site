import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"



import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import CubeLinks from "../components/cubeLinks/CubeLinks"
import GallerySlider from "../components/gallerySlider/GallerySlider"

const cubeElements = [
  { name: "Pierwsza wizyta", link: "pierwsza-wizyta" },
  { name: "Leczenie próchnicy", link: "leczenie-prochnicy" },
  { name: "Leczenie w narkozie", link: "narkoza" },
  { name: "Profilaktyka", link: "profilaktyka" },
]

const ZebyBezProchnicy = ({data, location }) => {
  // console.log(data)
  return (

  
  <Layout>
    <Hero
      hero={{
        type: "page",
        title: "Zęby bez próchnicy",
        description:
          "At vero eos et accusamus et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      }}
      location={location.pathname}
    />
    <CubeLinks cubeElements={cubeElements} />
    <div className="containerS">
      <h2>Dlaczego warto leczyć zęby mleczne? </h2>
      <h3>
        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat.
      </h3>
      <p>
        Et harum quidem rerum facilis est et expedita distinctio. Nam libero
        tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
        minus id quod maxime placeat facere possimus, omnis voluptas assumenda
        est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
        debitis aut rerum necessitatibus saepe eveniet ut et voluptates
        repudiandae sint et molestiae non recusandae.
      </p>
      <ul>
        <li>facilis est et expedita distinctio</li>
        <li>aut reiciendis voluptatibus maiores</li>
        <li>earum rerum hic tenetur a sapiente</li>
      </ul>
      <Link to="/">WRÓĆ DO STRONY GŁÓWNEJ</Link>
    </div>
    <GallerySlider gallery={data.gallery} />
  </Layout>
  )
}

export const Head = () => <Seo title="Zęby bez próchnicy" />



export const pageQuery = graphql`
  query {
    gallery: allFile(filter: { name: { eq: "ortodoncja" } }) {
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

export default ZebyBezProchnicy


