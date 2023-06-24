import axios from "axios";
import Swal from "sweetalert2";
import { baseURL } from ".";

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${baseURL}/user/signin`, {
      email,
      password,
    });
    Swal.fire({
      icon: "success",
      text: "Login successfully!",
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
    return response;
  } catch (err) {
    console.log("login err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Login failed!",
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
    throw Error(err.response.data || "Login failed!");
  }
};

export const signUpUser = async ({ username, email, password }) => {
  try {
    const response = await axios.post(`${baseURL}/user/signup`, {
      name: username,
      email,
      password,
    });
    Swal.fire({
      icon: "success",
      text: "Profile created successfully!",
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
    return response;
  } catch (err) {
    console.log("sign up errr", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Sign up failed!",
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
    throw Error(err?.response?.data || "Sign up failed!");
  }
};

export const loadUser = async () => {
  try {
    const response = await axios.get(`${baseURL}/user/getCurrentUser`);
    console.log("load user", response.data);
    return response.data;
  } catch (err) {
    throw Error(err?.response?.data?.message || "Load user failed!");
  }
};
