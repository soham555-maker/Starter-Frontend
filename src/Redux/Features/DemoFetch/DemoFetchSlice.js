import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Importing the createSlice function from the "@reduxjs/toolkit" package

// Defining the initial state for the demoFetchSlice
const endpoint = import.meta.env.VITE_ENDPOINT;
const initialState = {
  loading: false,
  employeesRes: {"success":false, employees:[]},
  error: "",
};

// Creating a thunk to fetch employees from the server
export const fetchEmployees = createAsyncThunk("fetchEmployees", async () => {
  const response = await axios.get(`${endpoint}/employees`);
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
      state.employeesRes = action.payload.data;
    });
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
  reducers: {
    // Reducer function to add employees to the state
    addEmployees: async (state, action) => {
      // Creating a new employee object
      
    },

    // Reducer function to update employees in the state
    updateEmployees: async (state, action) => {
    },

    // Reducer function to remove employees from the state
    removeEmployees: (state, action) => {
      // Extracting the id of the employSee to be removed from the action payload
     
    },
  },
});

// Exporting the action creators and reducer from the demoFetchSlice
export const { addEmployees, updateEmployees, removeEmployees } = demoFetchSlice.actions;
export default demoFetchSlice.reducer;
