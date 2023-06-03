import Card from 'react-bootstrap/Card';


function Categories() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body className="text-center bg-info">
                <Card.Title>Find a Dream</Card.Title>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-clouds-fill text-white" viewBox="0 0 16 16">
                    <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5z"/>
                    <path
                        d="M14.544 9.772a3.506 3.506 0 0 0-2.225-1.676 5.502 5.502 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"/>
                </svg>
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