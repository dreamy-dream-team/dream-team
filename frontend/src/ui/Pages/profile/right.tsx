import Card from 'react-bootstrap/Card';
import person from "../../images/person.svg";
import anon from "../../images/anon.svg"
import journal from "../../images/journal.svg"
import settings from "../../images/settings.svg";
import pri from "../../images/private.svg"
import {useJwtToken} from "../../../shared/hooks/useJwtHook.tsx";
import React from "react";
import {Link} from "react-router-dom";



function Links() {
    const {profile} = useJwtToken()
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body className="bg-info">
                {profile !== null && (
                <Card.Title>{profile.profileHandle}</Card.Title>
                )}
                {/*Settings*/}
                <ul>
                    <img
                        alt="settings"
                        src= {settings}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    <Link to={`/ProfileArchive`}>Profile Archive</Link>
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
                    <img
                        alt="pri"
                        src= {pri}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
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