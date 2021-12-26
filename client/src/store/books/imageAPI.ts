import axios from 'axios';

// resolves with base64 data url string or null if failed to convert image
export const convertImage = async (url: string) => {
  try {
    const res = await axios.get<{ image: string }>(
      '/api/image/' + encodeURIComponent(url)
    );
    if (res.status === 200) {
      return res.data.image;
    }
    return null;
  } catch (error) {
    console.log('convert image error', error);
    return null;
  }
};
