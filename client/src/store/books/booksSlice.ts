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
    booksBookEdit(state, { payload }: PayloadAction<TBook>) {
      const editIndex = state.books.findIndex((book) => book.id === payload.id);
      state.books[editIndex] = payload;
    },
    booksBookUpdateImage(
      state,
      { payload }: PayloadAction<Pick<TBook, 'id' | 'image'>>
    ) {
      const updateIndex = state.books.findIndex(
        (book) => book.id === payload.id
      );
      state.books[updateIndex].image = payload.image;
    },
  },
});

export const {
  booksBookAdd,
  booksBookRemove,
  booksBookEdit,
  booksBookUpdateImage,
} = booksSlice.actions;

export const loadTestBooks = createAsyncThunk<void, void, { state: RootState }>(
  `${booksSlice.name}/loadTestBooks`,
  (_, { dispatch }) => {
    testBooks.forEach((book) => {
      dispatch(booksBookAdd(book));
    });
  }
);

export default booksSlice.reducer;
