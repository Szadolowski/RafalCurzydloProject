# User Management Application

This project is a **user management application** built using **React**, **Redux Toolkit**, and **TypeScript**. It retrieves user data from an API and displays it in a table, allowing users to filter the data by name, username, email, and phone. The table dynamically updates as the user types into the filter fields.

## Key Features

### 1. User Management Table

The application displays user information, including:

- Name
- Username
- Email
- Phone

The user data is fetched from an API using Redux's `createAsyncThunk`. Example of fetching users:

```typescript
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
```

2. Advanced Filtering
   Users can filter the table based on name, username, email, and phone. The filtering logic is handled using Redux's useDispatch and useSelector:

typescript
Skopiuj kod
const filters = useSelector((state: RootState) => state.userData.filters);
const handleChange = (key: keyof typeof filters) => (event: React.ChangeEvent<HTMLInputElement>) => {
dispatch(setFilter({ key, value: event.target.value }));
};
Each column has an input field for filtering, which updates the table dynamically.

3. Redux State Management
   State management is handled using Redux Toolkit. The userSlice manages user data and filters:

````typescript

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
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
});```

4. Type Safety
The entire application is written in TypeScript for strong type safety, minimizing runtime errors. Example of the User type:

```typescript

export interface User {
  id: number;
  name: string;
  userName: string;
  email: string;
  phone: string;
}```
Challenges
One of the challenges in this project was working with Redux, as I had not used it before. However, my ability to quickly learn new technologies allowed me to integrate it successfully without major issues.

Aplikacja Zarządzania Użytkownikami
Ten projekt to aplikacja zarządzania użytkownikami zbudowana przy użyciu React, Redux Toolkit i TypeScript. Pobiera ona dane użytkowników z API i wyświetla je w tabeli, umożliwiając filtrowanie według imienia, nazwy użytkownika, e-maila oraz telefonu. Tabela dynamicznie aktualizuje się, gdy użytkownik wpisuje dane w polach filtrowania.

Główne Funkcje
1. Tabela Zarządzania Użytkownikami
Aplikacja wyświetla informacje o użytkownikach, w tym:

Imię
Nazwa użytkownika
E-mail
Telefon
Dane użytkowników są pobierane z API za pomocą createAsyncThunk w Redux. Przykład pobierania użytkowników:

```typescript

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
````

2. Zaawansowane Filtrowanie
   Użytkownicy mogą filtrować tabelę według imienia, nazwy użytkownika, e-maila i telefonu. Logika filtrowania jest zarządzana za pomocą useDispatch i useSelector:

```typescript

const filters = useSelector((state: RootState) => state.userData.filters);
const handleChange = (key: keyof typeof filters) => (event: React.ChangeEvent<HTMLInputElement>) => {
  dispatch(setFilter({ key, value: event.target.value }));
};
```

Każda kolumna ma pole wejściowe do filtrowania, które dynamicznie aktualizuje tabelę.

3. Zarządzanie Stanem z Redux
   Zarządzanie stanem odbywa się przy pomocy Redux Toolkit. userSlice zarządza danymi użytkowników i filtrami:

```typescript
const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
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
      state.error = "Nie udało się pobrać danych użytkowników";
    });
  },
});
```

4. Typowanie
   Cała aplikacja jest napisana w TypeScript, co zapewnia silne typowanie i minimalizuje błędy w czasie działania. Przykład typu User:

```typescript
export interface User {
  id: number;
  name: string;
  userName: string;
  email: string;
  phone: string;
}
```

Wyzwania
Jednym z wyzwań w tym projekcie było użycie Redux, z którym wcześniej nie miałem styczności. Jednak dzięki moim umiejętnościom szybkiej nauki, udało mi się skutecznie zintegrować Redux Toolkit bez większych problemów.

```

```
