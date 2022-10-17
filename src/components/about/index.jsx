import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Avatar, Title, Text } from "./style"
import { SectionIntro, ContainerLayout } from "../common"

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
              <Avatar
                fluid={data.placeholderImage.childImageSharp.fluid}
                alt="user photo"
              />
            </div>
            <div>
              <Title className="mb-4">Hello, I’m Chasen!</Title>
              <Text className="mb-8">
                I am a former software developer turned product owner that loves
                to creatively solve problems. I value using the right tool for
                the job, identifying the root cause of why a problem might
                exist, and using to data and metrics to measure success. I
                believe in being customer obssessed, getting feedback quickly,
                and communicating early often with my teammates.
              </Text>
              <Text className="mb-8">
                I once made the decision to drive 10 hours through the night to
                attend a hackathon at Princeton University. At the event, I
                built an{" "}
                <a className={"primary-500 inline-link position-relative"}>
                  Alexa Voice App
                </a>{" "}
                that enabled a user to track their goals. Ever since, I've been
                hooked on building software as a means to solve for challenges
                we all face every day.
              </Text>
              <Text>
                When I'm not tinkering on something, you can find me cheering on
                the Montreal Canadiens, reading a book, or going to the gym.
              </Text>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
