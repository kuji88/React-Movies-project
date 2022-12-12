import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardb() {
  return (
    <div className='mx-auto my-3'>
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BOGYxYTY3MzctNjRmMS00NTFhLWJmOGQtNjg0NWUxZDhhM2E2XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg" />
      <Card.Body>
        <Card.Title>American hisory X</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Watch it!</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cardb;