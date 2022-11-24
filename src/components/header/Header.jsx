import * as React from "react"

import { contactData } from "../../data/contactData"
import {headerInfo} from "./header.module.css"

const Header = () => {
  const { address, email, phone } = contactData

  return (
    <header>
      <div className={headerInfo}>
        <span>{address}</span>
        <span><a href={`mailto:${email}`}>{email}</a></span>
        <span><a href={`tel:${phone}`}>{phone}</a></span>
      </div>
    </header>
  )
}

export default Header
