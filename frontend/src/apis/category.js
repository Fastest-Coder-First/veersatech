// create an CRUD transaction api call with base url from env and route /api/transaction using package Swal

import Swal from "sweetalert2";
import { baseURL } from ".";
import axios from "axios";

// create a function to get all transactions
export const getCategory = async () => {
  try {
    const response = await axios.get(`${baseURL}/category/get`);
    return response;
  } catch (err) {
    console.log("getCategory err", err);
  }
};

export const addCategory = async (payload) => {
    try {
      console.log("addCategory payload", payload);
      const response = await axios.post(`${baseURL}/category/add`,payload);
      return response;
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: err.response.data || "Add category failed!",
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      throw Error(err.response.data || "Add category failed!");
    }
  };