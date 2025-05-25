import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Employee = () => {

    const[empdata,setEmpdata]=useState([]);
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

                       { empdata.map(item=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.salary}</td>
                            <td>
                                <a className='btn btn-success'>Edit</a>
                                <a className='btn btn-danger'>Remove</a>
                                <a className='btn btn-secondary'>Details</a>
                             </td>


                        </tr>
                       )
                    
                    )}
                        </tbody>
                    </table>
                </div>
        </div>
   
    </div>
  )
}
export default Employee;
