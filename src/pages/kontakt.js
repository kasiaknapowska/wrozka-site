import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/Hero"
import Contact from "../components/contact/Contact"
import Form from "../components/form/Form"



import * as styles from "../components/index.module.css"

const Kontakt = ({ location }) => {
  return (
    <Layout>
      <Hero
        hero={{
          type: "contact",
        }}
        location={location.pathname}
      />
      <section className={styles.contactPageSectionContainer}>
        <div className={styles.contactDataContainer}>
          <Contact type="contactPage" />
        </div>

        <iframe
          title="map"
          className={styles.mapFrame}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1276.013024645634!2d19.006615698671002!3d50.235418255037516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cef99f26498f%3A0x977f776ff387c0a3!2sDentolandia%20%7C%20Stomatologia%20Dzieci%C4%99ca!5e0!3m2!1spl!2spl!4v1666856935652!5m2!1spl!2spl"
          width="1080"
          height="800"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className={styles.formSectionContainer}>
        <div className={`${styles.formContainer}`}>
          <Form type="contact" />
        </div>
        <StaticImage
          src="../assets/wnetrza.jpg"
          alt=""
          className={styles.backgroundImage}
          layout="fullWidth"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          style={{position: "absolute"}}
        />
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Kontakt" description={"Szukasz dentysty lub ortodonty dla Twojego dziecka? Zadzwoń i umów wizytę. Leczymy bezboleśnie w podtlenku azotu i narkozie."}/>

export default Kontakt
