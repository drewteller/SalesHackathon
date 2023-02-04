import Container from '../components/container'
import Layout from '../components/layout'
import { getAboutPageData } from '../lib/contentful'
import Head from 'next/head'

const About = ({ pageData }) => (
  <>
    <Layout>
      <Head>
        <title>About Page</title>
      </Head>
      <Container>
        <h1>{pageData.title}</h1>
        <p>{pageData.body}</p>
      </Container>
    </Layout>
  </>
)

export async function getStaticProps() {
  const pageData = await getAboutPageData()
  return {
    props: { pageData },
  }
}

export default About
