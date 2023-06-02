import Card from 'react-bootstrap/Card';
import React from "react"


function Links() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Username</Card.Title>

                {/*Settings*/}
                <ul>
                    <img
                        alt=""
                        src="/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <Card.Link href="#">Settings</Card.Link>
                </ul>

                {/*Username*/}
                <ul>
                    <img
                        alt=""
                        src="/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <Card.Link href="#">Username</Card.Link>
                </ul>

                {/*Anonymous*/}
                <ul>
                    <img
                        alt=""
                        src="/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <Card.Link href="#">Anonymous</Card.Link>
                </ul>

                {/*Private*/}
                <ul>
                    <img
                        alt=""
                        src="/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <Card.Link href="#">Private</Card.Link>
                </ul>

                {/*Archive*/}
                <ul>
                    <img
                        alt=""
                        src="/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <Card.Link href="#">Another Link</Card.Link>
                </ul>

            </Card.Body>
        </Card>
    );
}

export default Links;