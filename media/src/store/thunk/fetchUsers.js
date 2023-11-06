import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  //ONLY FOR DEV------//
  await pause(1000);
  //-------------------//

  return response.data;
});

//ONLY FOR DEV------//
 const pause = (duration)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve, duration);
    });
 };
//-------------------//

//fetchUsers.pending === "users/fetch/pending"
//fetchUsers.fulfilled === "users/fetch/fulfilled";
//fetchUsers.rejected === "users/fetch/rejected";

export { fetchUsers };
