import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
            </div> 
            <div>
              <Title>Hello, I’m Chasen!</Title>
              <Text>Is there really anything more satisfying in life than building products and tools that people love to use?</Text>
              <Text>Sounds crazy, right? I'm serious!</Text>
              <Text>During my time at University, I drove 10 hours through the night to attend a hackathon at Princeton University. I ended up building an <a className={'text-primary inline-link'}>Alexa Voice App</a> that allowed you to track your goals. Ever since, I've been hooked on building software that makes us more efficient, safer, and happier. </Text>
              <Text>When I'm not tinkering on something, you can find me cheering on the Montreal Canadiens, watching an F1 race, or going to the gym.</Text>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
