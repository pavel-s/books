import { Middleware } from '@reduxjs/toolkit';
import { booksBookAdd, booksBookEdit } from './booksSlice';
import { convertImage } from './imageAPI';

const IMAGE_CONVERT_ACTIONS = [booksBookAdd, booksBookEdit];

// convert image url to base64 if possible
const imageMiddleware: Middleware = (store) => (next) => (action) => {
  if (
    IMAGE_CONVERT_ACTIONS.some((ac) => ac.type === action.type) &&
    typeof action?.payload?.image === 'string' &&
    !action.payload.image.startsWith('data:image')
  ) {
    convertImage(action.payload.image).then((result) => {
      if (result) {
        next({ ...action, payload: { ...action.payload, image: result } });
      } else {
        next(action);
      }
    });
  } else {
    return next(action);
  }
};

export default imageMiddleware;
