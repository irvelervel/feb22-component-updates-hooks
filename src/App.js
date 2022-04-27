import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Container, Row, Col } from 'react-bootstrap'
import MovieDetails from './components/MovieDetails'

const App = () => {
  // state = {
  //   movieTitle: 'Iron Man',
  // }

  const [movieTitle, setMovieTitle] = useState('Iron Man')

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center my-3">
          <Col md={6} className="text-light">
            <Form.Group>
              <Form.Label>Choose a movie!</Form.Label>
              <Form.Control
                as="select"
                value={movieTitle}
                onChange={(e) =>
                  // this.setState({ movieTitle: e.target.value })
                  setMovieTitle(e.target.value)
                }
              >
                <option>Iron Man</option>
                <option>Spiderman</option>
                <option>Black Widow</option>
                <option>The Hulk</option>
                <option>Captain America</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center my-3">
          <Col md={6} className="text-light">
            <MovieDetails movieTitle={movieTitle} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
