import React, { use, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export const EmployeeEdit = () => {

    const{empid}= useParams();
    const[id,setId]= useState("");
    const[name,setName]= useState("");
    const[email,setEmail]= useState("");
    const[phone,setPhone]= useState("");
    const[salary,setSalary]= useState("");
  const[validation,valchange]=useState(false);
  const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
const empdata={id,name,email,phone,salary};
fetch("http://localhost:8000/employees/"+empid,{
    method:"PUT",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(empdata)
  }).then((res)=>{
    alert('Saved successfully.')
    navigate('/');
  }).catch((err)=>{
    console.log(err.message)
  })

        
    }

    useEffect(() => {
        console.log('Employee ID:', empid);
        fetch(`http://localhost:8000/employees/${empid}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Employee not found or server error");
                }
                return res.json();
            })
            .then((res) => {
                setId(res.id);
                setEmail(res.email);
                setName(res.name);
                setSalary(res.salary);
                setPhone(res.phone);
            })
            .catch((err) => {
                console.error("Fetch error:", err.message);
            });
    }, [empid]);



  return (
   
    <div>
       <div className='row'>
        <div className='col-md-6 offset-md-3'>
            <form className='container' onSubmit={handleSubmit} style={{marginTop:'20px',padding:'20px'}}>
            <div className="card-title">
                <h2>Employee Edit</h2>
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
        <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>setName(e.target.value)} className="form-control"></input>
    {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
    </div>
</div>


<div className="col-lg-12">
    <div className="form-group">
        <label>Phone</label>
        <input required value={phone} onMouseDown={e=>valchange(true)} onChange={e=>setPhone(e.target.value)} className="form-control"></input>
    {phone.length==0 && validation && <span className="text-danger">Enter Phone Number</span>}
    </div>
</div>

<div className="col-lg-12">
    <div className="form-group">
        <label>Email</label>
        <input required value={email} onMouseDown={e=>valchange(true)} onChange={e=>setEmail(e.target.value)} className="form-control"></input>
    {email.length==0 && validation && <span className="text-danger">Enter Email</span>}
    </div>
</div>

<div className="col-lg-12">
    <div className="form-group">
        <label>Salary</label>
        <input required value={salary} onMouseDown={e=>valchange(true)} onChange={e=>setSalary(e.target.value)} className="form-control"></input>
    {salary.length==0 && validation && <span className="text-danger">Enter Salary</span>}
    </div>
</div>


</div>


            </div>
<br/>
            <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit" style={{margin:'10px'}}>Update</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>


               </form>
            </div>
       </div>
    </div>
  )
}
