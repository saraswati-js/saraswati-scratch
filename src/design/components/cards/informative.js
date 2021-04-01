import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Informative ({ title, text, button, ind }) {
  return (
    <Col lg={4} md={4} key={ind}>
      <Card className="h-100">
        <Card.Header as="h5">{title}</Card.Header>
        <Card.Body>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary">{button}</Button>
        </Card.Footer>
      </Card>
    </Col>
  )
}