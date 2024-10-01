import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className=" no container-fluid bg-light text-dark py-5">
            <Row className="align-items-center">
                <Col xs={12} md={6} className="p-5">
                    <h1 className=" store display-5">Store Management</h1>
                    <p className="lead" style={{ textAlign: 'justify',color:'black' }}>
                        Manage your contacts efficiently with our easy-to-use interface. Add, edit, and delete contacts with just a few clicks!
                    </p>
                    <div className="d-grid ">
                        <Link to={'/dash'}>
                            <Button variant="primary" size="lg">Get Started</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Home;