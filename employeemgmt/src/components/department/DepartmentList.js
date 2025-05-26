import React, { useState } from 'react'
import Select from 'react-select';
import { DepartmentAdd } from './DepartmentAdd';
import { DepartmentTable } from './DepartmentTable';
export const DepartmentList = () => {
    
    const [modalMode, setModalMode] = useState('add'); 


  return (
    <div className="container">

<button className='btn btn-primary' style={{ margin: '10px' }} data-bs-toggle="modal" data-bs-target="#employeeModal" onClick={() => {
  setModalMode('add'); 
  
}}>
  New (+)
</button>
<DepartmentAdd modalMode={modalMode} />
   <DepartmentTable/>
</div>
  )
}
