import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import SlideTestimonial from "@atoms/slideTestimonial"
import "slick-carousel/slick/slick.css"

class SliderTestimonials extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
    }
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }

  render() {
    var settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
    }

    return (
      <StaticQuery
        query={graphql`
          query TestimonialImagesQuery {
            testimonialOne: file(relativePath: { eq: "avatars/avatar-1.png" }) {
              childImageSharp {
                fixed(width: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            testimonialTwo: file(relativePath: { eq: "avatars/avatar-2.png" }) {
              childImageSharp {
                fixed(width: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            testimonialThree: file(
              relativePath: { eq: "avatars/avatar-3.png" }
            ) {
              childImageSharp {
                fixed(width: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            testimonialFour: file(
              relativePath: { eq: "avatars/avatar-4.png" }
            ) {
              childImageSharp {
                fixed(width: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <Carousel>
            <Slider {...settings} ref={slider => (this.slider1 = slider)}>
              <SlideTestimonial
                testimonial=" “Our entire process for building and launching websites that need toaccept payments has completely changed. We went from long arduous projects with tons of integrations and custom code, to a simple and fast setup with massive performance improvements.”"
                name="Chance Curtis"
                title="CTO, Some Ad Agency"
              />
              <SlideTestimonial
                testimonial=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                name="Chance Curtis"
                title="CTO, Some Ad Agency"
              />
              <SlideTestimonial
                testimonial=" “Lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.”"
                name="Chance Curtis"
                title="CTO, Some Ad Agency"
              />
              <SlideTestimonial
                testimonial=" “It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.”"
                name="Chance Curtis"
                title="CTO, Some Ad Agency"
              />
            </Slider>
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              focusOnSelect={true}
              slidesToShow={4}
              variableWidth={true}
              className="carouselNav"
            >
              <SlideAvatar>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="none"
                >
                  <circle cx="8" cy="8" r="6.215" />
                </svg>
                <Img fixed={data.testimonialOne.childImageSharp.fixed} />
              </SlideAvatar>
              <SlideAvatar>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="none"
                >
                  <circle cx="8" cy="8" r="6.215" />
                </svg>
                <Img fixed={data.testimonialTwo.childImageSharp.fixed} />
              </SlideAvatar>
              <SlideAvatar>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="none"
                >
                  <circle cx="8" cy="8" r="6.215" />
                </svg>
                <Img fixed={data.testimonialThree.childImageSharp.fixed} />
              </SlideAvatar>
              <SlideAvatar>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="none"
                >
                  <circle cx="8" cy="8" r="6.215" />
                </svg>
                <Img fixed={data.testimonialFour.childImageSharp.fixed} />
              </SlideAvatar>
            </Slider>
          </Carousel>
        )}
      />
    )
  }
}

export default SliderTestimonials

const Carousel = styled.div`
  padding-top: 2rem;

  .carouselNav {
    .slick-slide {
      opacity: 0.5;
      position: relative;
      transition: ${props => props.theme.animation.transition};

      svg {
        left: 0;
        position: absolute;
        top: -7px;
        z-index: 10;

        circle {
          opacity: 0;
          fill: none;
          stroke: ${props => props.theme.colors.primary};
          stroke-width: 0.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 39 39;
          stroke-dashoffset: 39;
          transition: stroke-dashoffset 0.5s, opacity 0.5s;
        }
      }

      &.slick-current {
        opacity: 1;

        circle {
          opacity: 1;
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 0.5s, opacity 0.5s;
        }
      }
    }
  }
`

const SlideAvatar = styled.div`
  height: 40px;
  margin: 0.5rem 0.75rem 1.5rem;
  outline: none;
  width: 40px;

  &:focus {
    outline: none;
  }
`
