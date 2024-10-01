import React from 'react';
import AddProduct from '../components/Addproduct';
import Product from '../components/Product';


function Dashboard() {
  return (
    <>
      <div className="product-home" style={{ margin: "50px 0px" }}>
        <h2 className='text-center'>Add Products</h2>
        <AddProduct />
        <div className="d-flex justify-content-center align-items-center rounded tab-div">
          <Product/>
          <p/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
