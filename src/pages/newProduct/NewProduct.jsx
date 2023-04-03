import React from 'react'
import "./newProduct.css"
export default function NewProduct() {
  return (
    <div className="newProduct">
       <h1 className="addProductTitle">New Product</h1>
       <form className="addProductForm">
        <label for="file">Image</label>
       <div className="productUpload">
        <input type="file" className='productUploadIcon'/>    
                </div>
                <div className="addProductFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder='Apple Airpods'/>
                    <label>Stock</label>
                    <input type="text" id="text" placeholder='123' />
                    <label>Active</label>
                    <select name="addactive" id="addactive">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="addProductFormRight">
                    
                    <button className="addProductButton">Create</button>
                </div>
            </form>
    </div>
  )
}
