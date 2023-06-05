import { Card, Container } from "react-bootstrap";
import styles from './category-main.module.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";

export function CategoryMain() {
    return(
        <>
            <Container className="container">
                <h4 className="font-weight-bold py-3 mb-4">Category Main Page</h4>
                <CategoryRow/>
                <CategoryRow/>
                <CategoryRow/>
                <CategoryRow/>

            </Container>
        </>
    )
}
export function CategoryRow() {
    return (
        <>
            <div className={styles.wrapper}>
                <h4>$Category Title</h4>
                <Carousel showDots={true} responsive={responsive}>
                    <Card className={styles.card}>
                        <Card.Body>
                            <p>$username</p>
                            <p>$title</p>
                        </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                        <Card.Body>
                            <p>$username</p>
                            <p>$title</p>
                        </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                        <Card.Body>
                            <p>$username</p>
                            <p>$title</p>
                        </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                        <Card.Body>
                            <p>$username</p>
                            <p>$title</p>
                        </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                        <Card.Body>
                            <p>$username</p>
                            <p>$title</p>
                        </Card.Body>
                    </Card>
                </Carousel>
            </div>
        </>
    )
}

const responsive = {
    largeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



