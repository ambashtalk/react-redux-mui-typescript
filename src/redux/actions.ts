import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DECREMENT, GET_POST_DATA, INCREMENT, TOOGLE_DARK_MODE } from "./types";

export const toggleDarkMode = createAction<boolean>(TOOGLE_DARK_MODE);

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostDataPayload {
  id: number;
}

export const getPostData = createAsyncThunk<PostData, PostDataPayload>(
  GET_POST_DATA,
  async (payload, thunkAPI) => {
    return axios
      .get<PostData>(`https://jsonplaceholder.typicode.com/posts/${payload.id}`)
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
);
