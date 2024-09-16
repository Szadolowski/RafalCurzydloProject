import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  userName: string;
  email: string;
  phone: string;
}

interface Filters {
  name: string;
  userName: string;
  email: string;
  phone: string;
}

interface UserState {
  users: User[];
  filters: Filters;
  error: string | null;
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  filters: {
    name: "",
    userName: "",
    email: "",
    phone: "",
  },
  error: null,
  loading: false,
};

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/Szadolowski/db.json/userData"
    );
    const data: User[] = await response.json();
    return data;
  }
);

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
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch users";
    });
  },
});

export const { setFilter } = userSlice.actions;

export const store = configureStore({
  reducer: {
    userData: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
