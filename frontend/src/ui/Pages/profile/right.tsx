import Card from 'react-bootstrap/Card';
import person from "../../images/person.svg";
import anon from "../../images/anon.svg"
import journal from "../../images/journal.svg"
// import private from "../images/private.svg"



function Links() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body className="bg-info">
                <Card.Title>Username</Card.Title>

                {/*Settings*/}
                <ul>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-gear-fill text-white" viewBox="0 0 16 16">
                        <path
                            d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                    <Card.Link href="#">Settings</Card.Link>
                </ul>

                {/*Public*/}
                <ul>
                    <img
                        alt="person"
                        src= {person}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    <Card.Link href="#">Public</Card.Link>
                </ul>

                {/*Anonymous*/}
                <ul>
                    <img
                        alt="anon"
                        src= {anon}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    <Card.Link href="#">Anonymous</Card.Link>
                </ul>

                {/*Private*/}
                <ul>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-person-fill-lock text-white" viewBox="0 0 16 16">
                        <path
                            d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
                    </svg>
                    <Card.Link href="#">Private</Card.Link>
                </ul>

                {/*Journal*/}
                <ul>
                    <img
                        alt="journal"
                        src= {journal}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    <Card.Link href="#">Journal</Card.Link>
                </ul>

            </Card.Body>
        </Card>
    );
}

export default Links;