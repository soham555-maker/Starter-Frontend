import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchEmployees } from "../../Redux/Features/DemoFetch/DemoFetchSlice";
import "./Test.css";
const endpoint = import.meta.env.VITE_ENDPOINT;

const Test = () => {
  const employeesRes = useSelector((state) => state.demoFetch.employeesRes);
  const loading = useSelector((state) => state.demoFetch.loading);
  const dispatch = useDispatch();
  const [updateToggle, setUpdateToggle] = useState(false);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [employeeName, setEmployeeName] = useState("");
  const [id, setId] = useState(0);
  let toggleCheckUpdate = useEffect(() => {
    dispatch(fetchEmployees());
  }, []);
  const handleEmployee = async () => {
    if (!employeeName && !updateToggle && !deleteToggle) {
      alert("Please enter employee name");
      return;
    } else if (!updateToggle && !deleteToggle) {
      const response = await axios.post(`${endpoint}/employees`, {
        name: employeeName,
      });
    } else if (updateToggle) {
      const response = await axios.put(`${endpoint}/employees/${id}`, {
        name: employeeName,
      });
    }
    setEmployeeName("");
    setUpdateToggle(false);
    dispatch(fetchEmployees());
  };

  const handleUpdate = (_id) => {
    if (id===_id){
        setEmployeeName("");
        setUpdateToggle(false);
        setId(0);
        document.getElementById(_id).classList.remove("myStyle");
        return;
    }
    employeesRes.employees.forEach(employee => {
        document.getElementById(employee._id).classList.remove("myStyle");
        if (employee._id === _id) {
            setEmployeeName(employee.name);
        }
    });
    document.getElementById("myTextField").focus();
    setUpdateToggle(true);
    setId(_id);
    document.getElementById(_id).classList.toggle("myStyle");
  };


  return (
    <div>
      <input
        type="text"
        id="myTextField"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        placeholder="Enter employee name"
      />
      <button
        type="submit"
        onClick={async() => {
          await handleEmployee();
        }}
      >
        {updateToggle ? "Update Employee" : "Add Employee"}
      </button>
      <div>
        employees:
        {loading ? (
          <p>Loading...</p>
        ) : (
          employeesRes &&
          employeesRes.employees.map((employee, indx) => (
            <div key={indx} className="name_row" id={employee._id}>
              <div className="name">
                {indx + 1}.{employee.name}{" "}
              </div>
              <div className="edit_name">
                <button
                  onClick={() => {
                    handleUpdate(employee._id);
                  }}
                >
                  ✏️
                </button>
              </div>
              <div className="delete_name">
                <button
                  onClick={async () => {
                    const response = await axios.delete(`${endpoint}/employees/${employee._id}`);
                    dispatch(fetchEmployees());
                  }}
                >
                  ❎
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Test;
