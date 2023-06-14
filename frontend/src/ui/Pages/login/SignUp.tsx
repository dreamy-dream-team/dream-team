// import {useState} from "react";
// import {Container, Modal} from "react-bootstrap";
// import {SignUpForm} from "../../../shared/components/main-nav/sign-up/SignUpForm.tsx";
//
//
// export function SignUp() {
//
//     const[show, setShow] = useState(true);
//     /*const[agreed, setAgreed] = useState(false);*/
//     const handleClose = () => setShow(false);
//
//     return(
//      <>
//          <Container className="text-center">
//          <h1 className="my-5">Dreamery World</h1>
//     <Modal show={show} onHide={handleClose} backdrop="static">
//         <Modal.Header closeButton>
//             <Modal.Title>Sign Up</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <SignUpForm/>
//         </Modal.Body>
//     </Modal>
//          </Container>
//      </>
//     )
// }