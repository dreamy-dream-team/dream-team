import {useJwtToken} from "../hooks/useJwtHook";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {SignUpModal} from "./main-nav/sign-up/SignUpModal";
import {SignInModal} from "./main-nav/sign-in/SignInModal";
import {useState} from "react";
import {SignOutComponent} from "./main-nav/SignOut";
import logo from "../../images/dreamery-logo.svg"
import styles from "./main-nav/nav.module.css"


export const TopNav = () => {
    const {profile} = useJwtToken()
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const isModalOpen = () => {
        if(!profile) {
            return !profile
        } else if(show && profile) {
            return true
        }
    }

    return(
        <Navbar className={styles.navbar} variant="dark">
            <Container>
                <img alt="logo" src={logo} className={styles.nav_logo}/>
                <Link className={"nav-link"} to="/">
                    <Navbar.Brand>Dreamery</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    {profile !== null && (
                    <>
                    <NavDropdown className="nav-link navbar-username" title={profile.profileHandle}>
                        <div className="dropdown-item">
                            <Link to={`/profile/${profile?.profileId}`} className="btn btn-outline-dark">
                                <FontAwesomeIcon icon="user"/>My Profile
                            </Link>
                        </div>
                        <div className="dropdown-item">
                        <Link to={`/category-main`} className="btn btn-outline-dark">
                            <FontAwesomeIcon icon="user"/>Category
                        </Link>
                        </div>
                        <SignOutComponent/>

                    </NavDropdown>
                    </>
                    )}
                    {isModalOpen() && (
                        <>
                        <SignUpModal/>
                        <SignInModal show={show}
                        handleClose={handleClose}
                        handleShow={handleShow}/>
                        </>
                        )}
                </Nav>
            </Container>
        </Navbar>
    )
};