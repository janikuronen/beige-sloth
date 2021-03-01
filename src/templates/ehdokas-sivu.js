import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import useSiteMetadata from '../components/SiteMetadata'

export const EhdokasTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  featuredImage,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            <div style={{width:'300px',display:'inline-block',float:'right', margin:'10px'}}>
            <PreviewCompatibleImage
                        imageInfo={{
                          image: featuredImage,
                          alt: `${title} kuva`,
                        }}
                      />
            </div>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Avainsanat</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

EhdokasTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredImage: PropTypes.any,
}

const EhdokasPost = ({ data }) => {
  //console.log(data)
  const { siteUrl } = useSiteMetadata()
  const { markdownRemark: post } = data
  const title = post.frontmatter.first_name+" "+post.frontmatter.last_name
  const canonical = siteUrl + post.fields.slug
  const ogImage = siteUrl + post.frontmatter.featuredimage.childImageSharp.fluid.src
  return (
    <Layout>
      <EhdokasTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={title}
        description={""}
        featuredImage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Kuntavaaliehdokas 2021">
            <title>{`${title}`}</title>
            <meta
              property="og:type"
              content="profile"
            />
            <meta
              property="og:title"
              content={`${title}`} 
            />
            <meta 
              property="profile:first_name" 
              content={`${post.frontmatter.first_name}`} 
            />
            <meta 
              property="profile:last_name" 
              content={`${post.frontmatter.last_name}`}  
            />
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              name="og:description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              property="og:image"
              content={`${ogImage}`}
            />
            <meta
              property="og:url"
              content={`${canonical}`}
            />
            <link rel="canonical" href={canonical} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
      />
    </Layout>
  )
}

EhdokasPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default EhdokasPost

export const pageQuery = graphql`
  query EhdokasPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        first_name
        last_name
        tags,
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
