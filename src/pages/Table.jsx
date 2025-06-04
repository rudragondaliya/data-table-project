import React, { useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Table = ({ productdata, handleDelete, handleEdit }) => {

     const searchRef = useRef();
     const [textFilter, setTextFilter] = useState("");

    const filteredData = productdata.filter((row) =>
     row.product_name?.toLowerCase().includes(textFilter.toLowerCase())
);


    const columns = [
    
    {
    name: "Image",
    selector: (row) => (
      <img
        src={row.image.url}
        alt={row.product_name}
        style={{ width: "80px", height: "50px", objectFit: "cover" }}
      />
    ),
  },
  {
    name: "Name",
    selector: (row) => row.product_name,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => row.price,
    sortable: true,
  },
  {
    name: "Stock",
    selector: (row) => row.stock,
    sortable: true,
  },
  
  {
    name: "Description",
    selector: (row) => row.comment,
    wrap: true, 
  },
  {
    name: "Godown",
    selector: (row)=> row.godown.join(", "),
    sortable:true,
  },
  {
    name: "Action",
    cell: (row) => (
      <>
        <button
          className="btn btn-danger btn-sm me-2"
          onClick={() => handleDelete(row.id)}
        >
          Delete
        </button>
        <Link to="/Form">
        <button
          className="btn btn-warning btn-sm"
          onClick={() => handleEdit(row.id)}
        >
          Edit
        </button>
        </Link>
      </>
    ),
  },
];


  return (
    <>
      <div className="main-panel">
        <div className="container">
          <div className="page-inner">
            <div className="page-header">
              <h3 className="fw-bold mb-3">Tables</h3>
              <ul className="breadcrumbs mb-3">
                <li className="nav-home">
                  <a href="#"><i className="icon-home" /></a>
                </li>
                <li className="separator"><i className="icon-arrow-right" /></li>
                <li className="nav-item"><a href="#">Tables</a></li>
                <li className="separator"><i className="icon-arrow-right" /></li>
                <li className="nav-item"><a href="#">Basic Tables</a></li>
                <li>
                  <input type="text" 
                  className='form-control mx-2'
                  name="search"
                  placeholder='search'
                  onChange={(e)=>setTextFilter(e.target.value)} 
                  id="" />
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col">
                 <DataTable
                  title="User Data"
                  data={filteredData}
                  columns={columns}
                  pagination
                  selectableRows
                  highlightOnHover
                  pointerOnHover
                  responsive
                  fixedHeader
                  fixedHeaderScrollHeight="300px"
                />

                
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid d-flex justify-content-between">
            <nav className="pull-left">
              <ul className="nav">
                <li className="nav-item"><a className="nav-link" href="http://www.themekita.com">ThemeKita</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Help</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Licenses</a></li>
              </ul>
            </nav>
            <div className="copyright">
              2024, made with <i className="fa fa-heart heart text-danger" /> by
              <a href="http://www.themekita.com"> ThemeKita</a>
            </div>
            <div>
              Distributed by <a target="_blank" href="https://themewagon.com/" rel="noreferrer">ThemeWagon</a>.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Table;
