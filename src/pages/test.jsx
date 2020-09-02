import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Testex from '../components/Test'

class TestRoute extends React.Component {
  render() {
    const routeData = this.props
    const items = []
    const title = routeData.data.kontentItemSiteMetadata.elements.title.value
    const subtitle = routeData.data.kontentItemSiteMetadata.elements.subtitle.value
    const test = routeData.data.allKontentItemTest.nodes
    console.log(routeData.data.allKontentItemTest.nodes);
    test.forEach(test => {
      items.push(<Testex data={test} key={test.elements.slug.value} />)
    })

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Sidebar />
          <div className="content">
            <div className="content__inner">{items}</div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default TestRoute

export const pageQuery = graphql`
  query TestQuery {
    kontentItemSiteMetadata(system: {codename: {eq: "site_metadata"}}) {
      elements {
        subtitle {
          value
        }
        title {
          value
        }
      }
    }
    allKontentItemTest {
      nodes {
        elements {
          content {
            name
            type
            value
          }
          slug {
            name
            type
            value
          }
          title {
            name
            type
            value
          }
        }
      }
    }
  }
`
