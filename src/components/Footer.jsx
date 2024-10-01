import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='bg-light py-2 container fluid mt-5'>
      <Row className='p-5'>
        <Col sm={12} md={5}>
          <h3>Redux Cart</h3>
          <p style={{textAlign:'justify'}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime repellendus, obcaecati reiciendis minus modi sunt voluptatum. Delectus, accusantium quasi quia placeat enim pariatur, esse sint sit itaque sapiente officiis quisquam.
          </p>
        </Col>

        <Col sm={12} md={2}>
        <h3>Links</h3>
        <div className='d-flex flex-column justify-content-between'>
          <Link to={'/'}>Home</Link>
          <Link to={'/dash'}>Landing</Link>
        </div>
        </Col>
        
        <Col sm={12} md={5}>
          <h3>Feedback</h3>
          <textarea name="" id="" className='form-control'></textarea>
          <button className='btn btn-info mt-4'>Send</button>
        </Col>
      </Row>

    </div>

    
    </>
  )
}

export default Footer
