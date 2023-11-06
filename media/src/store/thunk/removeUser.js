import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // FIX !!!!!! No puedo devolver response.data porque el payload que se envia al action no va a contener ninguna info. en su lugar enviar user para detectar cual user fue eliminado
  return user;
});

export { removeUser };
