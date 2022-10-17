import React from "react"
import socialMedia from "../../../data/socialMedia.json"
import data from "./../../../data/data"
import { FooterStyle, FooterBody, MediaLink, FooterSocialMedia } from "./style"
import { ContainerLayout, ButtonDefault } from "../../common"

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <ContainerLayout>
          <FooterBody>
            <FooterSocialMedia>
              {socialMedia.map(({ id, name, url }) => (
                <li key={id}>
                  <MediaLink
                    className="lined-link"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`follow us on ${name}`}
                  >
                    {name}
                  </MediaLink>
                </li>
              ))}
            </FooterSocialMedia>
            <div>
              <p className="primary-500 quote">Let's Make It Happen!</p>
              <ButtonDefault href={`mailto:${data.SiteContact.email}`}>
                {" "}
                Contact me{" "}
              </ButtonDefault>
            </div>
          </FooterBody>
        </ContainerLayout>
      </FooterStyle>
    </>
  )
}

export default Footer
