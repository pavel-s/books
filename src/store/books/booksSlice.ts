import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '..';
import { testBooks } from '../../lib/testBooks';
import { TBook } from './types';

export interface BooksState {
  books: TBook[];
}

const initialState: BooksState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    booksBookAdd(state, { payload }: PayloadAction<Omit<TBook, 'id'>>) {
      state.books.push({
        id: nanoid(),
        ...payload,
      });
    },
    booksBookRemove(state, { payload }: PayloadAction<TBook['id']>) {
      state.books = state.books.filter((book) => book.id !== payload);
    },
  },
});

export const { booksBookAdd, booksBookRemove } = booksSlice.actions;

export const loadTestBooks = createAsyncThunk<void, void, { state: RootState }>(
  `${booksSlice.name}/loadTestBooks`,
  (_, { dispatch }) => {
    testBooks.forEach((book) => {
      dispatch(booksBookAdd(book));
    });
  }
);

export default booksSlice.reducer;
