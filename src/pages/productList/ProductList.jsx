import React, { useState } from 'react'
import "./productList.css";
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../../DummyData';
import { Link } from 'react-router-dom';
export default function ProductList() {
    const[data,setData] = useState(productRows);
    const handleDelete = (id) =>{
        setData(data.filter(item=>item.id !==id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200,renderCell:(params)=>{
            return (
                <div className="productListItem">
                    <img src={params.row.img} alt="" className='productListImg' />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
            field:"action",
            headerName:"Action",width:150,
            renderCell: (params)=> {
                return(<>
                <Link to={"/product/"+params.row.id}>
                    <button className="productListEdit">Edit</button>
                </Link>
                    <DeleteOutline className="productListDelete" onClick={()=>handleDelete(
                        params.row.id
                    )}/>
                </>
                );
            }
        },
      ];
  return (
    <div className='productList'>
        <DataGrid
        rows={data} disableRowSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
