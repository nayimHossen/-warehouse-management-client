import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FiPhoneOutgoing } from 'react-icons/fi';
import './Banner.css';

const Banner = () => {
    return (
        <Container>
            <Row className='py-5'>
                <Col sm={12} md={7} className="mb-3 d-flex justify-content-center align-items-center">
                    <div className='banner-text'>
                        <h1>We Store furniture You Care...Best Storage Services</h1>
                        <p>10% and 20% discounts on storage*</p>
                        <h2 className='my-4'><FiPhoneOutgoing className='icon-style' /> +88 8795468844</h2>
                        <button className='main-button'>GET A FREE QUOTE</button>
                    </div>
                </Col>
                <Col sm={12} md={5}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src="https://i.ibb.co/CJtvVp2/main-hero-img.png" className="img-fluid hero-img mt-5 wow pulse" data-wow-iteration="infinite" data-wow-duration="5s" alt="Storage club" title="Storage club" id='' />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;