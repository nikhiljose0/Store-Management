import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import toast from 'react-hot-toast';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../Redux/productSlice'; // Make sure you have this action defined in your slice


function EditProduct({ data }) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const [val, setVal] = useState({
        id: "", name: "", category: "", quantity: "", price: "", imageUrl: ""
    });

    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
        setVal({ 
            id: data.id, 
            name: data.name, 
            category: data.category, 
            quantity: data.quantity, 
            price: data.price, 
            imageUrl: data.imageUrl 
        });
    };

    const handleUpdate = () => {
        const { id, name, category, quantity, price, imageUrl,  } = val;
        if (!id || !name || !category || !imageUrl || !quantity || !price) {
            toast.error("Please enter valid inputs");
        } else {
            dispatch(updateProduct(val)); // Dispatch the updated product data
            toast.success("Product updated successfully!");
            handleClose();
            setVal({ id: "", name: "", category: "", quantity: "", price: "", imageUrl: "" });
        }
    };

    return (
        <>
            <button className='btn' onClick={handleShow}>
                <i className="fa-regular fa-pen-to-square fa-xl" />
            </button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="name" label="Product Name" className="mb-3">
                        <Form.Control 
                            type="text" 
                            placeholder="Enter product name" 
                            value={val.name} 
                            onChange={(e) => setVal({ ...val, name: e.target.value })} 
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="category" label="Category" className="mb-3">
                        <Form.Control 
                            type="text" 
                            placeholder="Enter category" 
                            value={val.category} 
                            onChange={(e) => setVal({ ...val, category: e.target.value })} 
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="imageUrl" label="Image URL" className="mb-3">
                        <Form.Control 
                            type="url" 
                            placeholder="Enter image URL" 
                            value={val.imageUrl} 
                            onChange={(e) => setVal({ ...val, imageUrl: e.target.value })} 
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="quantity" label="Quantity" className="mb-3">
                        <Form.Control 
                            type="number" 
                            placeholder="Enter quantity" 
                            value={val.quantity} 
                            onChange={(e) => setVal({ ...val, quantity: e.target.value })} 
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="price" label="Price" className="mb-3">
                        <Form.Control 
                            type="number" 
                            placeholder="Enter price" 
                            value={val.price} 
                            onChange={(e) => setVal({ ...val, price: e.target.value })} 
                        />
                    </FloatingLabel>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditProduct;
