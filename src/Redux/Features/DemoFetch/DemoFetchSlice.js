import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Importing the createSlice function from the "@reduxjs/toolkit" package

// Defining the initial state for the demoFetchSlice
const endpoint = import.meta.env.VITE_ENDPOINT;
const initialState = {
  loading: false,
  employees: [],
  error: "",
  // employees: [{
  //     id: 123,
  //     employee_name: "Tiger Nixon2",
  //     employee_salary: 320800,
  //     employee_age: 61,
  //     profile_image: "",
  // }],
};

// Creating a thunk to fetch employees from the server
export const fetchEmployees = createAsyncThunk("fetchEmployees", async () => {
  const response = await axios.get(`${endpoint}users`);
  return response;
});

// Creating the demoFetchSlice using the createSlice function
export const demoFetchSlice = createSlice({
  name: "demoFetch",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    });
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
  reducers: {
    // Reducer function to add employees to the state
    addEmployees: (state, action) => {
      // Creating a new employee object
      const employee = {
        id: 555,
        "name": action.payload,
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
    ;
      // console.log(action.payload)
      // Adding the new employee to the employees array in the state
      state.employees.push(employee);
    },
    // Reducer function to remove employees from the state
    removeEmployees: (state, action) => {
      // Extracting the id of the employee to be removed from the action payload
      const id = action.payload;
      // Filtering out the employee with the specified id from the employees array in the state
      state.employees = state.employees.filter(
        (employee) => employee.id !== id
      );
    },
  },
});

// Exporting the action creators and reducer from the demoFetchSlice
export const { addEmployees, removeEmployees } = demoFetchSlice.actions;
export default demoFetchSlice.reducer;
