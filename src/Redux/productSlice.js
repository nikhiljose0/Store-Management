import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// import toast from "react-hot-toast";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: []
  },
  reducers: {
    // Add a new product
    addProduct(state, action) {
      state.products.push(action.payload)
      // if (sameID.length > 0) {
      //   toast.error("Product ID is already in use!");
      // } else {
      //   state.products.push(action.payload);
      //   toast.success("Product added successfully!");
      // }
    },
    // Delete a product
    deleteProduct(state, action) {
      const updatedProducts = state.products.filter(item => item.id !== action.payload);
      if (updatedProducts.length === state.products.length) {
        toast.error("Product not found!");
      } else {
        state.products = updatedProducts;
        toast.success("Product deleted successfully!");
      }
    },
    // Update an existing product
    updateProduct(state, action) {
      const existingProductIndex = state.products.findIndex(item => item.id === action.payload.id);
      
      if (existingProductIndex >= 0) {
        // Update the product by replacing the item at the found index
        state.products[existingProductIndex] = action.payload;
        toast.success("Product updated successfully!");
      } else {
        toast.error("Product not found!");
      }
    }
  }
});

// Export the reducer and actions
export default productSlice.reducer
export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
