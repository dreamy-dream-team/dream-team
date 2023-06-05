import {Button, Card, Container, Placeholder, Row} from "react-bootstrap";
import styles from './category-main.module.css';

export function CategoryMain() {
    return (
        <>
            <Container className="">
                <h4 className="font-weight-bold py-3 mb-4">Category Main Page</h4>
                <h4>$Category Title</h4>
                <Card className={styles.wrapper}>
                <Row className={styles.slider}>
                    <Button className={styles.button}>&#8249;</Button>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                        </Card.Body>
                    </Card>
                    <Button className={styles.button}>&#8250;</Button>
                </Row>
                </Card>
            </Container>
        </>
    )
}

// const responsive = {
//     desktop: {
//         breakpoint: { max:3000, min:1024},
//         items:5
//     }
// },
//     tablet: {
//         breakpoint: { max:1024, min:464},
//         items:5
//     }
// },
// mobile: {
//         breakpoint: { max:464, min:0},
//         items:5
//     }
// }

// document.addEventListener("click", e =>{
//     let button
//     if (e.target.matches(".button")) {
//         button = e.target
//     } else {
//         button = e.target.closest(".button")
//     }
//     if (button != null) onButtonClick(button)
// })
// function onButtonClick(button) {
//     const slider = button.closet(".container").querySelector(".slider")
//     const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
//     if (button.classList.contains("left-button")) {
//      slider.style.setProperty('--slider-index', sliderIndex - 1)
//     }
//      if (button.classList.contains("right-button")) {
//      slider.style.setProperty('--slider-index', sliderIndex + 1)
//     }
// }
