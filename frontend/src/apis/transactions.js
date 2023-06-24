// create an CRUD transaction api call with base url from env and route /api/transaction using package Swal

import Swal from "sweetalert2";
import { baseURL } from ".";
import axios from "axios";

// create a function to get all transactions
export const getTransactions = async () => {
  try {
    const response = await axios.get(`${baseURL}/transaction`);
    return response;
  } catch (err) {
    console.log("getTransactions err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Get all transactions failed!",
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
    throw Error(err.response.data || "Get all transactions failed!");
  }
};

// create a function to get all transactions by id
export const getTransactionById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/transaction/${id}`);
    return response;
  } catch (err) {
    console.log("getTransactionById err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Get transaction by id failed!",
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
    throw Error(err.response.data || "Get transaction by id failed!");
  }
};

// create a function to create a transaction
export const createTransaction = async (transaction) => {
  try {
    const response = await axios.post(`${baseURL}/transaction`, transaction);
    Swal.fire({
      icon: "success",
      text: "Transaction created successfully!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (
        toast // create a function to update a transaction
      ) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });
    return response;
  } catch (err) {
    console.log("createTransaction err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Create transaction failed!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (
        toast // create a function to update a transaction
      ) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });
    throw Error(err.response.data || "Create transaction failed!");
  }
};
// create a function to delete a transaction
export const removeTransactionById = async (_id
) => {  
  try {
    const response = await axios.delete(`${baseURL}/transaction/${_id}`);
    Swal.fire({
      icon: "success",
      text: "Transaction deleted successfully!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (
        toast // create a function to update a transaction
      ) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });
    return response;
  } catch (err) {
    console.log("removeTransactionById err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Delete transaction failed!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (
        toast // create a function to update a transaction
      ) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });
    throw Error(err.response.data || "Delete transaction failed!");
  }
}
// create a function to update a transaction
export const updateTransactionById = async (_id, transaction) => {
  try {
    const response = await axios.put(
      `${baseURL}/transaction/${_id}`,
      transaction
    );
    Swal.fire({
      icon: "success",
      text: "Transaction updated successfully!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (
        toast // create a function to update a transaction
      ) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });
    return response;
  } catch (err) {
    console.log("updateTransactionById err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Update transaction failed!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (
        toast // create a function to update a transaction
      ) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });
    throw Error(err.response.data || "Update transaction failed!");
  }
}
// create a function to get all transactions by user id
export const getTransactionsByUserId = async (userId) => {
  try {
    const response = await axios.get(`${baseURL}/transaction/user/${userId}`);
    return response;
  } catch (err) {
    console.log("getTransactionsByUserId err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Get transactions by user id failed!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (
        toast // create a function to update a transaction
      ) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });
    throw Error(
      err.response.data || "Get transactions by user id failed!"
    );
  }
}
// create a function to get all transactions by family id
export const getTransactionsByFamilyId = async (familyId) => {
  try {
    const response = await axios.get(`${baseURL}/transaction/family/${familyId}`);
    return response;
  } catch (err) {
    console.log("getTransactionsByFamilyId err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Get transactions by family id failed!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (
        toast // create a function to update a transaction
      ) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });
    throw Error(
      err.response.data || "Get transactions by family id failed!"
    );
  }
}
// create a function to get all transactions by account id
export const getTransactionsByAccountId = async (accountId) => {
  try {
    const response = await axios.get(`${baseURL}/transaction/account/${accountId}`);
    return response;
  } catch (err) {
    console.log("getTransactionsByAccountId err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Get transactions by account id failed!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (
        toast // create a function to update a transaction
      ) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });
    throw Error(
      err.response.data || "Get transactions by account id failed!"
    );
  }
}
// create a function to get all transactions by category id
export const getTransactionsByCategoryId = async (categoryId) => {
  try {
    const response = await axios.get(`${baseURL}/transaction/category/${categoryId}`);
    return response;
  } catch (err) {
    console.log("getTransactionsByCategoryId err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Get transactions by category id failed!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (
        toast // create a function to update a transaction
      ) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });
    throw Error(
      err.response.data || "Get transactions by category id failed!"
    );
  }
}
// create a function to get all transactions by user id and family id
export const getTransactionsByUserIdAndFamilyId = async (userId, familyId) => {
  try {
    const response = await axios.get(`${baseURL}/transaction/user/${userId}/family/${familyId}`);
    return response;
  } catch (err) {
    console.log("getTransactionsByUserIdAndFamilyId err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Get transactions by user id and family id failed!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    throw Error(
      err.response.data || "Get transactions by user id and family id failed!"
    );
  }
}
// create a function to get all transactions by user id and account id
export const getTransactionsByUserIdAndAccountId = async (userId, accountId) => {
  try {
    const response = await axios.get(`${baseURL}/transaction/user/${userId}/account/${accountId}`);
    return response;
  } catch (err) {
    console.log("getTransactionsByUserIdAndAccountId err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Get transactions by user id and account id failed!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
    throw Error(
      err.response.data || "Get transactions by user id and account id failed!"
    );
  }
}
// create a function to get all transactions by user id and category id
export const getTransactionsByUserIdAndCategoryId = async (userId, categoryId) => {
  try {
    const response = await axios.get(`${baseURL}/transaction/user/${userId}/category/${categoryId}`);
    return response;
  } catch (err) {
    console.log("getTransactionsByUserIdAndCategoryId err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Get transactions by user id and category id failed!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
    throw Error(
      err.response.data || "Get transactions by user id and category id failed!"
    );
  }
}
// create a function to get all transactions by user id, family id and account id
export const getTransactionsByUserIdAndFamilyIdAndAccountId = async (userId, familyId, accountId) => {
  try {
    const response = await axios.get(`${baseURL}/transaction/user/${userId}/family/${familyId}/account/${accountId}`);
    return response;
  } catch (err) {
    console.log("getTransactionsByUserIdAndFamilyIdAndAccountId err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Get transactions by user id, family id and account id failed!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
    throw Error(
      err.response.data || "Get transactions by user id, family id and account id failed!"
    );
  }
}
// create a function to get all transactions by user id, family id and category id
export const getTransactionsByUserIdAndFamilyIdAndCategoryId = async (userId, familyId, categoryId) => {
  try {
    const response = await axios.get(`${baseURL}/transaction/user/${userId}/family/${familyId}/category/${categoryId}`);
    return response;
  } catch (err) {
    console.log("getTransactionsByUserIdAndFamilyIdAndCategoryId err", err);
    Swal.fire({
      icon: "error",
      text: err.response.data || "Get transactions by user id, family id and category id failed!",
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
    throw Error(
      err.response.data || "Get transactions by user id, family id and category id failed!"
    );
  }
}