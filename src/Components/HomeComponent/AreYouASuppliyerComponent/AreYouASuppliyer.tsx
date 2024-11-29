import React from 'react'
import "./AreYouASuppliyer.scss"
import { Container, Form } from 'react-bootstrap'
import { LocationSvg, SuitcaseSvg } from '../../../Assets/SvgExport/SvgExport'

function AreYouASuppliyer() {
    return (
        <section className='banner-section text-center my-5 py-lg-5'>
            <Container className='container-div'>
                <h1>Are You a Supplier?</h1>
                <h2 className='mb-5'>Explore Matching Opportunities.</h2>
                <Form className='d-flex flex-column flex-lg-row justify-content-center gap-2'>
                    <Form.Group className="position-relative" controlId="searcService">
                        <span className='position-absolute top-50 start-0 translate-middle-y ms-3 d-flex align-items-center'>
                            <SuitcaseSvg />
                        </span>
                        <Form.Control className='ps-5 p-3' type="text" placeholder="Search your required service here" />
                    </Form.Group>
                    <Form.Group className="position-relative" controlId="searchLocation">
                        <span className='position-absolute top-50 start-0 translate-middle-y ms-3 d-flex align-items-center'>
                            <LocationSvg />
                        </span>
                        <Form.Control className='ps-5 p-3' type="text" placeholder="Search your desired location here" />
                    </Form.Group>
                    <button className='px-4 p-3'>Search</button>
                </Form>
                <p className='mt-4'>Are you a buyer? <a href="#">Click here if you are looking to post a requirements</a></p>
            </Container>
        </section>
    )
}

export default AreYouASuppliyer
