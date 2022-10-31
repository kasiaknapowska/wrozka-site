import * as React from "react"

import { contactData } from "../../data/contactData"
import {headerInfo} from "./header.module.css"

const Header = () => {
  const { address, email, phone } = contactData

  return (
    <header>
      <div className={headerInfo}>
        <span>{address}</span>
        <span>{email}</span>
        <span>{phone}</span>
      </div>
    </header>
  )
}

export default Header
