import { PostData } from "./actions";

export interface AppStateInterface {
  darkMode: boolean;
}

export const appState: AppStateInterface = {
  darkMode: false,
};

export interface CounterInterface {
  count: number;
}

export const counterState: CounterInterface = {
  count: 0,
};

export interface ThunkInterface {
  data: PostData;
}
export const thunkState: ThunkInterface = {
  data: {
    id: 0,
    userId: 0,
    body: "",
    title: "",
  },
};
