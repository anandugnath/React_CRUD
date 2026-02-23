import React, { useState } from 'react';
import Select from 'react-select'; // ✅ Fix: use correct import path

export const DepartmentAdd = ({ modalMode,onSave,showModal  }) => {
  const statusOptions = [
    { value: '1', label: 'Active' },
    { value: '0', label: 'Inactive' },
  ];

  const [status, setStatus] = useState(null);
  const [department,setDepartment]=useState('');
   

  const handleSubmit=()=>{

    const newDepartment={
        department_name:department,
        status:status.value
    };
    fetch('http://localhost:8000/departments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDepartment),
      })
        .then((res) => {
          if (res.ok) {
            alert('Department added successfully!');
            onSave();
            // Reset form
            setDepartment('');
            setStatus(null);  
            
          } else {
            throw new Error('Failed to add department');
          }
        })
        .catch((err) => {
          alert(err.message);
        });

  };

  


  return (
    <div className="modal fade" id="employeeModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {modalMode === 'add' ? 'Add Department' : 'Edit Department'}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <input type="text" className="form-control mb-2" placeholder="Department Name"  value={department} onChange={(e)=>setDepartment(e.target.value)}/>
            <label className="mb-1">Status</label>
            <Select
              options={statusOptions}
              value={status}
              onChange={setStatus}
              placeholder="Select status"
              className="mb-2"
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};
