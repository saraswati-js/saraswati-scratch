import Head from 'next/head'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import Informative from '@components/cards/informative'
import Carousel from '@components/landing/carousel'
import NavPrimary from '@components/navigation/nav-primary'

export default function Landing({ children }) {
  return (
    <>
      <Head>
        <title>@Saraswati-JS Promotional Landing Page</title>
      </Head>

      <NavPrimary />

      <header>
        <Carousel />
      </header>

      <Container>
        <h1 className="my-4">Welcome to Modern Business</h1>

        <Row>
          <Informative title={'Card Title'} button={'Learn More'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.'} />
          <Informative title={'Card Title'} button={'Learn More'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'} />
          <Informative title={'Card Title'} button={'Learn More'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.'} />
        </Row>

        <br />

        <Row>
          <Col lg={6}>
            <h2>Modern Business Features</h2>
            <p>The Modern Business template by Start Bootstrap includes:</p>
            <ul>
              <li>
                <strong>Bootstrap v4</strong>
              </li>
              <li>jQuery</li>
              <li>Font Awesome</li>
              <li>Working contact form with validation</li>
              <li>Unstyled page elements for easy customization</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
          </Col>
          <Col lg={6}>
            <img className="img-fluid rounded" src="http://placehold.it/700x450" alt="" />
          </Col>
        </Row>
        
        <hr />

        {/* Call to Action Section */}
        <Row md={12}>
          <Col md={8}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
          </Col>
          <Col md={4}>
            <a className="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
          </Col>
        </Row>
        <br />
        
      </Container>

      <footer className="py-5 bg-dark">
        <Container>
          <p className="m-0 text-center text-white">Copyright © Your Website 2020</p>
        </Container>
      </footer>
    </>
  )
}