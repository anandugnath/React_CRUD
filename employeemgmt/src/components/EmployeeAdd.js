
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const EmployeeAdd = () => {
    const[id,setid]=useState("");
    const[name,setname]=useState("");
    const[phone,setphone]=useState("");
    const[email,setemail]=useState("");
    const[salary,setsalary]=useState("");
    const[validation,valchange]=useState(false);
    const navigate=useNavigate();
    const handleSubmit = (e) => {
        console.log(e);
    e.preventDefault();
    const empdata={name,email,phone,salary};
    if(empdata.name.length==0 || empdata.phone.length==0 || empdata.email.length==0 || empdata.salary.length==0)
    {
        valchange(true);
        return;
    }
  
    fetch("http://localhost:8000/employees",{
        method:"POST"  ,
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(empdata)
    }).then((res) => {
        alert("Employee Created Successfully");
        navigate('/employee');
    }).catch((err) => {
        console.log(err.message);
        alert("Error in Creating Employee");
    });
}

  return (
    <div>
       <div className='row'>
        <div className='col-md-6 offset-md-3'>
            <form className='container' onSubmit={handleSubmit} style={{marginTop:'20px',padding:'20px'}}>
            <div className="card-title">
                <h2>Employee Create</h2>
            </div>
            <div className="card-body">
            <div className="row">

<div className="col-lg-12">
    <div className="form-group">
        <label>ID</label>
        <input value={id} disabled="disabled" className="form-control"></input>
    </div>
</div>

<div className="col-lg-12">
    <div className="form-group">
        <label>Name</label>
        <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>setname(e.target.value)} className="form-control"></input>
    {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
    </div>
</div>


<div className="col-lg-12">
    <div className="form-group">
        <label>Phone</label>
        <input required value={phone} onMouseDown={e=>valchange(true)} onChange={e=>setphone(e.target.value)} className="form-control"></input>
    {phone.length==0 && validation && <span className="text-danger">Enter Phone Number</span>}
    </div>
</div>

<div className="col-lg-12">
    <div className="form-group">
        <label>Email</label>
        <input required value={email} onMouseDown={e=>valchange(true)} onChange={e=>setemail(e.target.value)} className="form-control"></input>
    {email.length==0 && validation && <span className="text-danger">Enter Email</span>}
    </div>
</div>

<div className="col-lg-12">
    <div className="form-group">
        <label>Salary</label>
        <input required value={salary} onMouseDown={e=>valchange(true)} onChange={e=>setsalary(e.target.value)} className="form-control"></input>
    {salary.length==0 && validation && <span className="text-danger">Enter Salary</span>}
    </div>
</div>


</div>


            </div>
<br/>
            <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit" style={{margin:'10px'}}>Save</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>


               </form>
            </div>
       </div>
    </div>
  )
}
