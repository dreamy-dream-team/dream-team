
import {Button, ButtonGroup, Container, Dropdown, Navbar} from "react-bootstrap";
import logo from "../images/logo.svg"
import person from "../images/person.svg"

// export const Navbar = () => {
function BrandExample() {
    return (
        <>
                <Navbar className="nav-fill" bg="secondary" variant="dark" >
                    <Container >

                            <img
                                alt="logo"
                                src= {logo}
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                            />{' '}

                        <Navbar.Brand href="#home" className="text-center">DREAMERY</Navbar.Brand>



                        <Dropdown as={ButtonGroup}>
                            <Button variant="secondary">
                                <img
                                    alt="person"
                                    src= {person}
                                    width="50"
                                    height="50"
                                    className="d-inline-block align-top"
                                />{' '}
                                {/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill text-white" viewBox="0 0 16 16">*/}
                                {/*    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>*/}
                                {/*</svg>*/}
                            </Button>

                            <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Sign-Up</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Sign-In</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Container>
                </Navbar>
                <br />
        </>
    )
}

export default BrandExample;
