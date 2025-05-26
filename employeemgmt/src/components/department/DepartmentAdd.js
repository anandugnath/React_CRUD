import React, { useState } from 'react';
import Select from 'react-select'; // ✅ Fix: use correct import path

export const DepartmentAdd = ({ modalMode }) => {
  const statusOptions = [
    { value: '1', label: 'Active' },
    { value: '0', label: 'Inactive' },
  ];

  const [status, setStatus] = useState(null);

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
            <input type="text" className="form-control mb-2" placeholder="Department Name" />
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
            <button type="button" className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};
