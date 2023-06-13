// import {Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
// import {useState} from "react";
// import {Link} from "react-router-dom";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//
// export function TopNav() {
//     return (
//         <>
//         <Navbar bg="dark" variant="dark">
//                 <Navbar bg="dark" variant="dark">
//                     <Container>
//                         <Row>
//                             <Col lg={2}>
//                         <img
//                             alt="image"
//                             src=""
//                             width="30"
//                             height="30"
//                             className="d-inline-block align-top"
//                         />{' '}
//                             </Col>
//                             <Col lg={8}>
//                         <Navbar.Brand href="#home" className="text-center">DREAMERY</Navbar.Brand>
//                             </Col>
//                             <Col lg={2}>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                                      className="bi bi-person-fill text-white" viewBox="0 0 16 16">
//                                     <path
//                                         d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
//                                 </svg>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </Navbar>
//                 <br />
//         </Navbar>
//         </>
//     )
// }
//
// export default TopNav;
//
//
// export async function TopNav() {
//     const { profile } = useJwtToken()
//
//     const [show, setShow] = useState(false)
//     const handleClose = () => setShow(false)
//     const handleShow = () => setShow(true)
//
//     const isModalOpen = () => {
//         if(!profile) {
//             return !profile
//         } else if (show && profile) {
//             return true
//         }
//     }
//     return(
//         <Navbar bg="primary" variant="dark">
//             <Container>
//
//                 <Link className={"nav-link"} to="/">
//                     <Navbar.Brand>Tweeter</Navbar.Brand>
//
//                 </Link>
//                 <Nav className="mr-auto">
//
//                     {/* conditional render if user has jwt / is logged in */}
//                     {profile !== null && (
//                         <>
//                             <NavDropdown className="nav-link navbar-username" title={profile.profileAtHandle} >
//                                 <div className="dropdown-item">
//                                     <Link to={`/profile/${profile?.profileId}`} className="btn btn-outline-dark">
//                                         <FontAwesomeIcon icon="user" />&nbsp;&nbsp;My Profile
//                                     </Link>
//                                 </div>
//                                 <SignOutComponent />
//                             </NavDropdown>
//                         </>
//                     )}
//                     {isModalOpen()  &&  (
//                         <>
//                             <SignUpModal/>
//                             <SigninModal show={show} handleClose={handleClose} handleShow={handleShow}/>
//                         </>
//                     )}
//                 </Nav>
//             </Container>
//         </Navbar>
//     )
// }