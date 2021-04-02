import Container from 'react-bootstrap/Container'
import Nav from '@components/navigation/nav-primary'

export default function Custom404() {
  return (
    <>
      <Nav />
        <Container className="container">
        {/* Page Heading/Breadcrumbs */}
        <h1 className="mt-4 mb-3">404 <small>Page Not Found</small>
        </h1>
        <div className="jumbotron">
          <h1 className="display-1">404</h1>
          {/* <p><img src="https://th.bing.com/th/id/R4e9099973647a0579e03745ed087e1d5?rik=I2cCQVV8NJu7Mg&riu=http%3a%2f%2fdeansomerset.com%2fwp-content%2fuploads%2f2014%2f02%2fshoulder-shrug.jpg&ehk=olDy7qp7Jce4Fh466LppCbbTZl%2fy9Fzu422jVevByVc%3d&risl=1&pid=ImgRaw" /></p> */}
          <p><img src="https://media.istockphoto.com/photos/overhead-angle-of-handsome-african-american-man-clueless-and-confused-picture-id1143489113?k=6&m=1143489113&s=612x612&w=0&h=Tcy-G9eHG8oGxFx-2bxFlWoVeBXwUMsbknAnuUQPEww=" /></p>
          </div>
        </Container>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © Your Website 2020</p>
        </div>
      </footer>
    </>
  )
}
