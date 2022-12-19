import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb({search}) {

    const onSearch =(word)=>{
      search(word)
    }

  return (
    <Navbar bg="dark" expand="lg" variant='dark' >
      <Container fluid>
      
        <Navbar.Brand className='ml-2' href="/"><div className='bg-gradient-to-r from-red-600 to-slate-700 w-20 h-12 rounded-md text-center items-center justify-center flex '><h3 className=" cursor-pointer text-center m-auto text-2xl font-mono text-white">kuji</h3></div>
</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
           
          </Nav>
          <Form className="d-flex mr-8">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=> onSearch(e.target.value)}
              
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;