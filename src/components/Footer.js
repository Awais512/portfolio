import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          Copyrights&copy;{new Date().getFullYear()}
          <span>WebDev</span> All rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
