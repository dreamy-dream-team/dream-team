import {Button, Card, Container} from "react-bootstrap";
import styles from './category-main.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function CategoryMain() {
    return(
        <>
            <Container className="container">
                <h4 className="font-weight-bold py-3 mb-4">Category Main Page</h4>
                <CategoryRow/>
                <CategoryRow/>


            </Container>
        </>
    )
}
export function CategoryRow() {
    return (
        <>
                <h4>$Category Title</h4>
                <div className={styles.wrapper}>
                    <Button className={styles.button}>&#8249;</Button>
                    <div className={styles.slider}>
                    <Card className={styles.post}>
                        <Card.Body>
                            <p>$username</p>
                            <p>$title</p>
                        </Card.Body>
                    </Card>
                    <Card className={styles.post}>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className={styles.post}>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className={styles.post}>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className={styles.post}>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className={styles.post}>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className={styles.post}>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className={styles.post}>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                        <Card className={styles.post}>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                    </div>
                    <Button className={styles.button}>&#8250;</Button>
                </div>
        </>
    )
}



