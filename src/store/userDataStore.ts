import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

// Typy danych użytkowników
export interface User {
  id: number;
  name: string;
  userName: string;
  email: string;
  phone: string;
}

// Początkowy stan
const initialState: User[] = [];

// Thunk do pobierania danych użytkowników z pliku JSON
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("/data/db.json");
  const data = await response.json();
  return data.userData;
});

// Slice do zarządzania stanem użytkowników
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// Konfiguracja Redux Store
export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

// Eksport typów
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
