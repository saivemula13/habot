import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowSvg } from '../../../Assets/SvgExport/SvgExport'
import "./DriveIntoHabot.scss"
function DriveIntoHabot() {
  return (
    <section className='dive-into-habot my-5 py-lg-5'>
      <Container>
        <Row className='justify-content-between align-items-center'>
          <Col lg="6" xl="6">
            <h1 className='mb-4'>Ready to dive into <span>HABOT?</span></h1>
            <p className='mb-4'>Signing up with HABOT opens the door to a world of new opportunities and potential for
              business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
            <button className='py-3 px-4 border-0 ps-5'>Sign up Today ! <span className='ms-4'><ArrowSvg /></span></button>
          </Col>
          <Col lg="6" xl="5">
            <div className="country-btns d-flex flex-column flex-md-row flex-md-wrap gap-3 mt-5 mt-lg-0">
              <button className="px-5 py-3 position-relative">Abu Dhabi<span className='ms-4 position-absolute top-50 end-0 translate-middle-y me-4'><ArrowSvg /></span></button>
              <button className="px-5 py-3 position-relative">Dubai<span className='ms-4 position-absolute top-50 end-0 translate-middle-y me-4'><ArrowSvg /></span></button>
              <button className="px-5 py-3 position-relative">Sharjah & Ajman<span className='ms-4 position-absolute top-50 end-0 translate-middle-y me-4'><ArrowSvg /></span></button>
              <button className="px-5 py-3 position-relative">Fujairah<span className='ms-4 position-absolute top-50 end-0 translate-middle-y me-4'><ArrowSvg /></span></button>
              <button className="px-5 py-3 position-relative">Ras Al Khaimah<span className='ms-4 position-absolute top-50 end-0 translate-middle-y me-4'><ArrowSvg /></span></button>
              <button className="px-5 py-3 position-relative">Umm Al Quwain<span className='ms-4 position-absolute top-50 end-0 translate-middle-y me-4'><ArrowSvg /></span></button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default DriveIntoHabot
