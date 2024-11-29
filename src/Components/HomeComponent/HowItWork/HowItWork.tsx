import React from 'react'
import "./HowItWork.scss"
import { Col, Container, Row } from 'react-bootstrap'
import { BestSupplies, FeedBack, Opertunities, Requirements, Servise, SignUp } from '../../../Assets/SvgExport/SvgExport'

function HowItWork() {
    return (
        <section className='how-it-work py-lg-5 my-5 text-center'>
            <Container className='py-lg-5'>
                <Row className='justify-content-center'>
                    <Col lg="8" className='mx-3'>
                        <h1 className='mb-4'>How it works?</h1>
                        <p className='mb-5 pb-4'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
                    </Col>
                    <Col lg="4" className='card-div d-flex align-items-center justify-content-center'>
                        <div className="p-5">
                            <span>
                                <SignUp />
                            </span>
                            <p className='mb-0 mt-4'>Select Your Role and Sign Up</p>
                        </div>
                    </Col>
                    <Col lg="4" className='card-div d-flex align-items-center justify-content-center'>
                        <div className="p-5">
                            <span>
                                <Requirements />
                            </span>
                            <p className='mb-0 mt-4'>Buyers Post Your Requirements</p>
                        </div>
                    </Col>
                    <Col lg="4" className='card-div d-flex align-items-center justify-content-center'>
                        <div className="p-5">
                            <span>
                                <BestSupplies />
                            </span>
                            <p className='mb-0 mt-4'>Review, Select, and Contact the Best Suppliers</p>
                        </div>
                    </Col>
                    <Col lg="4" className='card-div d-flex align-items-center justify-content-center'>
                        <div className="p-5">
                            <span>
                                <Opertunities />
                            </span>
                            <p className='mb-0 mt-4'>Suppliers Complete your profile and get notified for opportunities</p>
                        </div>
                    </Col>
                    <Col lg="4" className='card-div d-flex align-items-center justify-content-center'>
                        <div className="p-5">
                            <span>
                                <Servise />
                            </span>
                            <p className='mb-0 mt-4'>Contact to Buyers and Share your Quote for the service</p>
                        </div>
                    </Col>
                    <Col lg="4" className='card-div d-flex align-items-center justify-content-center'>
                        <div className="p-5">
                            <span>
                                <FeedBack />
                            </span>
                            <p className='mb-0 mt-4'>Both the Parties can Connect and Make Business Leave a Feedback</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HowItWork
