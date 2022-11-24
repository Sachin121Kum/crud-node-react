import axios from "axios";

const URL = 'http://localhost:8001';

export const addUser = async (data)=>{
    try{
      return await axios.post(`${URL}/add`,data)

    }catch(error){
        console.log("Api Calling Failed")
    }
}

export const allUser = async (data)=>{
  try{
    return await axios.get(`${URL}/all`,data)

  }catch(error){
      console.log("User Cannot get details")
  }
}

export const getUsers = async(id)=>{
  try{
    return await axios.get(`${URL}/${id}`)
  }catch(error){
      console.log("api calling failed ",error)
  }
}

export const editUser = async(user,id)=>{
  try{
    return await axios.post(`${URL}/${id}`,user)
  }catch(err){
    console.log("Update failed ",err)
  }
}

export const deleteUser = async(id)=>{
  try{
    return await axios.delete(`${URL}/${id}`)
  }catch(error){
    console.log("User Delete Successfullyy",error);
  }
}




