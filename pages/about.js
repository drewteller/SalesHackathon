import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

const About = () => (
  <>
    <Layout>
      <Head>
        <title>About Page</title>
      </Head>
      <Container>
        <h1>About Page</h1>
        <p>Welcome to the About Page</p>
      </Container>
    </Layout>
  </>
)

export default About
