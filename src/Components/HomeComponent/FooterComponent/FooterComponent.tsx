import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaceBookSvg, FooterLogoSvg, InstagramSvg, LinkdinSvg, TwitterSvg } from '../../../Assets/SvgExport/SvgExport'
import "./FooterComponent.scss"

function FooterComponent() {
    return (
        <footer className='py-5 mt-5 text-center text-sm-start'>
            <Container>
                <hr />
                <Row>
                    <Col lg="8">
                        <Row>
                            <Col md="4" className='logo-div d-flex align-items-end justify-content-center justify-content-md-start '>
                                <div>
                                    <span>
                                        <FooterLogoSvg />
                                    </span>
                                    <h5 className='ms-3 mt-4'>© R Singhania</h5>
                                </div>
                            </Col>
                            <Col md="8">
                                <Row className='my-4 my-md-0'>
                                    <Col sm="4" className='my-2 mt-md-0'>
                                        <div>
                                            <h5 className='mb-4'>Company</h5>
                                            <a className='mb-2' href='#'>About</a>
                                            <a className='mb-2' href='#'>FAQ</a>
                                        </div>
                                    </Col>
                                    <Col sm="4" className='my-2 mt-md-0'>
                                        <div>
                                            <h5 className='mb-4'>Terms</h5>
                                            <a className='mb-2' href='#'>Data privacy</a>
                                            <a className='mb-2' href='#'>Terms</a>
                                            <a className='mb-2' href='#'>Accessibility</a>
                                        </div>
                                    </Col>
                                    <Col sm="4" className='my-2 mt-md-0'>
                                        <div>
                                            <h5 className='mb-4'>Related</h5>
                                            <a className='mb-2' href='#'>Find Buyer</a>
                                            <a className='mb-2' href='#'>Feedback</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="4">
                        <div className="d-flex gap-3 align-items-center justify-content-center justify-content-lg-end h-100">
                            <a href="#">
                                <LinkdinSvg />
                            </a>
                            <a href="#">
                                <TwitterSvg />
                            </a>
                            <a href="#">
                                <FaceBookSvg />
                            </a>
                            <a href="#">
                                <InstagramSvg />
                            </a>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>
        </footer>
    )
}

export default FooterComponent
