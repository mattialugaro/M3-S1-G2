import Card from 'react-bootstrap/Card';

const AllTheBooks = props => (

    <Card>
      <Card.Img variant="top" src="{props.book.cover}/100px180" />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>
            {props.book.description} - {props.book.price}
        </Card.Text>
      </Card.Body>
    </Card>
);

export default AllTheBooks