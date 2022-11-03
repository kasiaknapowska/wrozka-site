import * as React from "react"
import { graphql } from "gatsby"

import { useRef, useCallback } from "react"
import { useInView } from "react-intersection-observer"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import Halfs from "../components/halfs/Halfs"
import GallerySlider from "../components/gallerySlider/GallerySlider"
import CubeLinks from "../components/cubeLinks/CubeLinks"
import Movie from "../components/movie/Movie"
import Contact from "../components/contact/Contact"
import Form from "../components/form/Form"

// import * as styles from "../components/index.module.css"

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]

const cubeElements = [
  { name: "Pierwsza wizyta", link: "pierwsza-wizyta" },
  { name: "Leczenie w narkozie", link: "narkoza" },
  { name: "Ortodoncja", link: "ortodoncja" },
  { name: "Profilaktyka", link: "profilaktyka" },
]

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({ data, location }) => {
 
  const { ref: ref1, inView: inView1 } = useInView({
    /* Optional options */
    threshold: 0,
  })
  const { ref: ref2, inView: inView2 } = useInView({
    /* Optional options */
    threshold: 0,
  })
 
  return (
    <Layout>
      <Seo title="Home" />
      <Hero
        hero={{
          type: "main",
          title: "Dentysta dla Twojego dziecka",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        }}
      />
      <Halfs
        title="Leczenie w narkozie"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incidi"
        type="reverse"
        data={data.image1}
      />
      <Halfs
        title="Profilaktyka"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incidi"
        type="standard"
        data={data.image2}
      />
      <Halfs
        title="Ortodoncja"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut consectetur adipiscing elit, sed do eiusmod tempor incidi"
        type="reverse color"
        data={data.image3}
      />
      <div ref={ref1} className={`containerS ${inView1 ? "fadeIn" : ""}`} >
        <h2 >Jak leczymy</h2>
        <h3 >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut consectetur
        </h3>
        <p >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
        <ul>
          <li>Bonsectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium
          </li>
        </ul>

        <button className="btn btnPrimary">Umów wizytę</button>
      </div>
      <CubeLinks cubeElements={cubeElements} />
      <div ref={ref2} className={`containerS ${inView2 ? "fadeIn" : ""}`}>
        <h2>Zęby bez próchnicy</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut consectetur
        </h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
        <ol>
          <li>Bonsectetur adipiscing elit, sed do eiusmod tempor incididunt</li>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium
          </li>
        </ol>
      </div>
      <GallerySlider gallery={data.gallery} />
      <Movie src="https://www.youtube.com/embed/81rHrMgRN2E" />
      <section className={`container contactFlex`}>
        <Contact />
        <Form />
      </section>
      {/* <div className="container">
      <ul className={styles.list}>
        {links.map(link => (
          <li key={link.url}>
            <a
              href={`${link.url}${utmParameters}`}
            >
              {link.text} ↗
            </a>
            <p >{link.description}</p>
          </li>
        ))}
      </ul>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}
    </div> */}
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  query {
    image1: allFile(filter: { name: { eq: "narkoza" } }) {
      nodes {
        relativePath
        id
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    image2: allFile(filter: { name: { eq: "profilaktyka" } }) {
      nodes {
        relativePath
        id
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    image3: allFile(filter: { name: { eq: "ortodoncja" } }) {
      nodes {
        relativePath
        id
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
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

export default IndexPage
