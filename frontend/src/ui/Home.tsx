import React from "react"
import {Container, FloatingLabel, Form} from "react-bootstrap";

export function Home() {
    return (
        <>
            <section className={'text-center'}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Title"
                    className="mb-1"
                >
                    <Form.Control type="title" placeholder="Title" style={{ height: '50px', width: '500px'}}/>
                </FloatingLabel>

                <FloatingLabel controlId="floatingTextarea2" label="Tell us your dream...">
                    <Form.Control
                        as="textarea"
                        placeholder="Tell us your dream..."
                        style={{ height: '175px', width: '500px'}}
                    />
                </FloatingLabel>
            </section>
        </>
    );
}