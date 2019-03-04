import React from 'react';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Footer from '../components/footer';

import './markdown.css';

const Template = ({ data, ...context }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <React.Fragment>
      <SEO title={frontmatter.title} />
      <Layout {...context}>
        <div
          className="container markdown"
          style={{ minHeight: 'calc(100vh - 200px)' }}
        >
          {frontmatter.hero && (
            <GatsbyImage
              style={{ marginBottom: 48 }}
              fluid={frontmatter.hero.childImageSharp.fluid}
            />
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default Template;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//         hero {
//           childImageSharp {
//             fluid(maxWidth: 980) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
