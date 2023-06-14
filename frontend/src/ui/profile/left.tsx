import Card from 'react-bootstrap/Card';
import find from "../images/find.svg";


function Categories() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body className="text-center bg-info">
                <Card.Title>Find a Dream</Card.Title>
                <img
                    alt="find"
                    src= {find}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                />{' '}
                <Card.Text>
                    <ul>#Funny</ul>
                    <ul>#Nightmares</ul>
                    <ul>#Animals</ul>
                    <ul>#School</ul>
                    <ul>#Work</ul>
                    <ul>#Lucid</ul>
                    <ul>#OBE</ul>
                    <ul>#Weird</ul>
                    <ul>#Reoccurring</ul>
                    <ul>#Daydream</ul>
                </Card.Text>
                {/*<Card.Link href="#">Card Link</Card.Link>*/}
                {/*<Card.Link href="#">Another Link</Card.Link>*/}
            </Card.Body>
        </Card>
    );
}

export default Categories;