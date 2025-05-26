import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const DepartmentTable = () => {

    const [departmetlst,setdepartmentLst]=useState([]);
useEffect(()=>
{
    fetch("http://localhost:8000/departments").then((res)=>
        
        {
            return res.json();
            console.log(res);
        }
    ).then((res)=>
    {
        setdepartmentLst(res);
    }).then((err)=>
    {
       
    });
},[])

  return (
    
    <div className='container'>
    <div className='card' style={{alignItems:'center'}}>
        <div className='card-title' >
        <h5 >Department List</h5>
        </div>


        <div className='card-body' style={{width:'100%'}}>
        
</div>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Status</th> 
                        <th>Action</th>

                    </tr>   
                </thead>
                <tbody>
                { departmetlst.map(item=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                    <td>{item.department_name}</td>
                    <td>{item.status}</td> 
                    <td>
                                <button className='btn btn-success me2' >Edit</button>
                                <button className='btn btn-danger'>Remove</button>
                                <button className='btn btn-secondary'>Details</button>
                             </td>
                    </tr>
                    ))}
                    </tbody>

                   
 
                    </table>
                    </div>
                    </div>

  )
}
