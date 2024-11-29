import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./FindYou.scss"
function FindYou() {
    return (
        <section className='find-you p-5 my-5'>
            <Container>
                <Row className='py-lg-5'>
                    <Col md="7" className='text-center text-md-start'>
                        <h1 className='px-md-5 pb-4 pb-md-0'>Let Suppliers <span>Find You</span></h1>
                    </Col>
                    <Col md="5" className='text-center'>
                        <button className='border-0 px-5 py-3'>Get Verified</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FindYou
