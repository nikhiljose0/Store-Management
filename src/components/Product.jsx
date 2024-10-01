import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../Redux/productSlice';
import  EditProduct from './Editproduct'
import toast from 'react-hot-toast';

function Products() {
  const {products} = useSelector((state) => state.products); 
  const dispatch = useDispatch();

  return (
    <>
      {products?.length > 0 ? (
        products.map((item) => (
          <Card key={item.id} style={{ width: '18rem' }} className="rounded-1 text-light shadow mb-4 ms-4">
            <Card.Img
              style={{ height: '300px' }}
              variant="top"
              src={item.imageUrl} 
              className="img-fluid rounded-top-2"
            />
            <Card.Body className="bg-info rounded-bottom-5">
              <Card.Title className="text-center mb-3">{item.name}</Card.Title>
              <Card.Text>
                <div className="d-flex flex-column">
                  <span>ID: {item.id}</span>
                  <span>Category: {item.category}</span>
                  <span>Price: ₹{item.price}</span>
                  <span>Quantity: {item.quantity}</span>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <EditProduct data={item} />
                  <button
                    className="btn btn-secondary rounded-5 py-2 px-3"
                    onClick={() => dispatch(deleteProduct(item.id))} 
                  >
                    <i className="fa-solid fa-trash" style={{ color: '#ff0000' }} />
                  </button>
                  
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h3 className="text-center mt-5">No Products Available!</h3>
      )}
    </>
  );
}

export default Products;
