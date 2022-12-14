import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardb({mov}) {
  return (
    <div className='mx-auto my-3'>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/`+mov.poster_path} />
      <Card.Body>
        <Card.Title><div className='flex justify-between'>
        <h4>{mov.title}</h4>
        <h5 className='text-red-600'>{mov.vote_average}</h5>
        </div></Card.Title>
        <Card.Text >
          <p className='max-h-fit text-gray-600'>{mov.overview}</p>
          
        </Card.Text>
        <Button variant="danger">Watch it!</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cardb;