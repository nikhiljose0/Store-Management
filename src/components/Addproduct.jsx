import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/productSlice';
import toast from 'react-hot-toast';

function AddProduct() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  
  const [input, setInput] = useState({
    id: "", name: "", category: "", quantity: "", price: "", imageUrl: ""
  })

  const handleDispatch = () => {
    const { id, name, category, quantity, price, imageUrl } = input;
    if (!id || !name || !category || !quantity || !price || !imageUrl) {
      toast.error("Please fill all fields");
    } 
    else {
      console.log(input)
      dispatch(addProduct(input));
      handleClose()
      toast.success("Product added successfully");
    }
  }

  return (
    <>
      <button className=' add btn btn-success mb-4' onClick={handleShow}>Add Product +</button>

      <Modal show={show} 
      onHide={handleClose} 
      backdrop="static" 
      keyboard={false}>

        <Modal.Header closeButton className='bg-light'>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-light'>
          <FloatingLabel controlId="id" label="Product ID" className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setInput({ ...input, id: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="name" label="Product Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="imageUrl" label="Image URL" className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setInput({ ...input, imageUrl: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="category" label="Category" className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setInput({ ...input, category: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="quantity" label="Quantity" className="mb-3">
            <Form.Control
              type="number"
              placeholder=""
              onChange={(e) => setInput({ ...input, quantity: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="price" label="Price" className="mb-3">
            <Form.Control
              type="number"
              placeholder=""
              onChange={(e) => setInput({ ...input, price: e.target.value })}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer className='bg-light'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDispatch}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;
