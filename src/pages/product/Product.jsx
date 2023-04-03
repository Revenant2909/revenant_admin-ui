import React from 'react'
import "./product.css";
import { Link } from 'react-router-dom';
import Chart from "../../components/chart/Chart";
import {productData} from "../../DummyData";
import { Publish } from '@mui/icons-material';
export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link>
            <button className="productAddButton">
                Create
            </button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance" />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://i.ibb.co/4fvbrN0/Apple-Air-Pods-Pro.webp" alt="" className="productInfoImg" />
                    <span className="productName">Apple Airpods Pro</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">Id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoValue">3223</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Active:</span>
                        <span className="productInfoValue">Yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">In stock:</span>
                        <span className="productInfoValue">No</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder='Apple Airpods Pro'/>
                    <label>In stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://i.ibb.co/4fvbrN0/Apple-Air-Pods-Pro.webp" alt="" className='productUploadImg'/>
                        <label for="file"><Publish/> </label>
                        <input type="file" id='file' style={{display:"none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
