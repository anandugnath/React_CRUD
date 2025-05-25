import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

export const Employee = () => {

    const[empdata,setEmpdata]=useState([]);
    const navigate = useNavigate();
    const EditEmployee=(id)=>{

        navigate(`/employee/${id}`);
    }


    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = empdata.slice(indexOfFirstItem, indexOfLastItem);

const totalPages = Math.ceil(empdata.length / itemsPerPage);

const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  
  const handlePageSelect = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

    useEffect(()=>
    
    {

        fetch("http://localhost:8000/employees").then((res)=>
        
            {
                return res.json();
            }
        ).then((res)=>
        
        {
            console.log(res);
            setEmpdata(res);
        }).catch((err)=>
        {
            console.log(err.message);
        }
        )
    },[]);

  return (
    <div className='container'>
        <div className='card' style={{alignItems:'center'}}>
            <div className='card-title' >
            <h1 >Employee</h1>
            </div>


            <div className='card-body' style={{width:'100%'}}>
            <div>
   <Link className='btn btn-primary' style={{margin:'10px'}} >New (+)</Link>

    
</div> 
</div>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Action</th>

                        </tr>   
                    </thead>
                    <tbody>

                       { currentItems.map(item=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.salary}</td>
                            <td>
                                <a className='btn btn-success' onClick={()=>EditEmployee(item.id)}>Edit</a>
                                <a className='btn btn-danger'>Remove</a>
                                <a className='btn btn-secondary'>Details</a>
                             </td>


                        </tr>
                       )
                    
                    )}
                        </tbody>
                    </table>
                </div>

                <div className="pagination" style={{ marginTop: '20px' }}>
  <button className="btn btn-outline-primary" onClick={goToPreviousPage} disabled={currentPage === 1}>
    Previous
  </button>

  {[...Array(totalPages).keys()].map((num) => (
    <button
      key={num + 1}
      onClick={() => handlePageSelect(num + 1)}
      className={`btn ${currentPage === num + 1 ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
    >
      {num + 1}
    </button>
  ))}

  <button className="btn btn-outline-primary" onClick={goToNextPage} disabled={currentPage === totalPages}>
    Next
  </button>

  <select
    value={itemsPerPage}
    onChange={(e) => {
      setItemsPerPage(Number(e.target.value));
      setCurrentPage(1); // Reset to page 1
    }}
    className="form-select w-auto d-inline mx-3"
  >
    <option value={5}>5 / page</option>
    <option value={10}>10 / page</option>
    <option value={20}>20 / page</option>
  </select>
</div>
        </div>
        
    
  )
}
export default Employee;
