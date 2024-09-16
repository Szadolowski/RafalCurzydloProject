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

// Typ dla filtrów
interface Filters {
  name: string;
  userName: string;
  email: string;
  phone: string;
}

// Typ stanu dla UserSlice
interface UserState {
  users: User[];
  filters: Filters;
}

// Początkowy stan
const initialState: UserState = {
  users: [],
  filters: {
    name: "",
    userName: "",
    email: "",
    phone: "",
  },
};

// Thunk do pobierania danych użytkowników z pliku JSON
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/Szadolowski/db.json/userData"
  );
  const data = await response.json();
  console.log(data, "test");
  return data; // Upewnij się, że struktura JSON jest poprawna
});

// Slice do zarządzania stanem użytkowników
const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload as {
        key: keyof Filters;
        value: string;
      };
      state.filters[key] = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
// Eksport reducerów i akcji
export const { setFilter } = userSlice.actions;

// Konfiguracja Redux Store
export const store = configureStore({
  reducer: {
    userData: userSlice.reducer, // Używamy "userData" jako klucza
  },
});

// Eksport typów
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
