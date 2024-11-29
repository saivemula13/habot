import React from 'react'
import "./BuyerSupplyerCompont.scss"
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { TickMarkSvg } from '../../../Assets/SvgExport/SvgExport'

function BuyerSupplyerCompont() {
    return (
        <Container className='py-lg-5'>
            <div className='buyer-supplyer-div p-5 my-5'>
                <Row className='py-5' >
                    <Col lg="7">
                        <iframe width="560" height="350" src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=haTqiOW8ajcFHYiH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </Col>
                    <Col lg="5">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="buyer">
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link className='px-5' eventKey="buyer">Buyer</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='px-5' eventKey="supplier">Supplier</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className='mt-4 pt-2'>
                                <Tab.Pane eventKey="buyer">
                                    <p><span className='me-2'><TickMarkSvg /></span>Post your requirements. </p>
                                    <p><span className='me-2'><TickMarkSvg /></span>Sit back for multiple suppliers to contact you.</p>
                                    <p><span className='me-2'><TickMarkSvg /></span>Choose among the suppliers based on the ratings and reviews.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="supplier">
                                    <p><span className='me-2'><TickMarkSvg /></span>Sit back for multiple suppliers to contact you.</p>
                                    <p><span className='me-2'><TickMarkSvg /></span>Choose among the suppliers based on the ratings and reviews.</p>
                                    <p><span className='me-2'><TickMarkSvg /></span>Post your requirements. </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default BuyerSupplyerCompont
