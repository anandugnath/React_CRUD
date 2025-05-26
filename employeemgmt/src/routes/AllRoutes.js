import react from "react";
import { Routes, Route } from "react-router-dom"; 
import { Employee } from "../components/Employee";
import { EmployeeAdd } from "../components/EmployeeAdd";
import { EmployeeEdit } from "../components/EmployeeEdit";
import { DepartmentList } from "../components/department/DepartmentList";

export const AllRoutes = () => {

    return (
       
<Routes>
    
        <Route path="/" element={<Employee />} />    
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee/add" element={<EmployeeAdd />} />
        <Route path="/employee/:empid" element={<EmployeeEdit />} />
        <Route path="/department" element={<DepartmentList />} />


    
</Routes>

    );
};

 