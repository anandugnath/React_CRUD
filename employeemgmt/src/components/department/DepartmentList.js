import React, { useState } from 'react'
import Select from 'react-select';
import { DepartmentAdd } from './DepartmentAdd';
import { DepartmentTable } from './DepartmentTable';
export const DepartmentList = () => {
    
    const [modalMode, setModalMode] = useState('add'); 
    const [showmodal, setShowModal] = useState(false); 

    const [refreshKey, setRefreshKey] = useState(0);
    const handleDepartmentSaved = () => {
        setRefreshKey(prev => prev + 1); // Increment to trigger useEffect in table
      };
  return (
    <div className="container">

<button className='btn btn-primary' style={{ margin: '10px' }} data-bs-toggle="modal" data-bs-target="#employeeModal" onClick={() => {
  setModalMode('add'); 
  
}}>
  New (+)
</button>
<DepartmentAdd modalMode={modalMode}  onSave={handleDepartmentSaved}    onClose={() => setShowModal(false)} />
   <DepartmentTable refreshKey={refreshKey}/>
</div>
  )
}
