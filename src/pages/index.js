import React from 'react'
import { Link } from 'gatsby'

import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { reactI18nextModule } from "react-i18next"

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Hero from '../components/hero'
import ThreeColumn from '../components/threeColumn'
import Features from '../components/features'
import Video from '../components/video'
import Team from '../components/team'
import Contact from '../components/contact';

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <Layout>
      <ThreeColumn />
      <Features />
      <Video />
      <Team />
      <Contact />
    </Layout>
  </React.Fragment>
)

export default IndexPage
