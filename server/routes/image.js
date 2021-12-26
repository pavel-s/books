const { default: axios } = require('axios');
const sharp = require('sharp');

const TARGET_IMAGE_SIZE = { width: 145, height: 205 };

const isResizeRequired = (width, height) =>
  width > TARGET_IMAGE_SIZE.width && height > TARGET_IMAGE_SIZE.height;

// resize image if needed
// then convert it to jpeg and then to base64 data url
const convertImage = async (buffer) => {
  const image = sharp(buffer);
  const meta = await image.metadata();

  const result = await (isResizeRequired(meta.width, meta.height)
    ? image.resize({
        width: TARGET_IMAGE_SIZE.width,
        height: TARGET_IMAGE_SIZE.height,
        fit: 'cover',
      })
    : image
  )
    .toFormat('jpg')
    .toBuffer();

  return `data:image/${meta.format};base64,` + result.toString('base64');
};

const imageRouter = async (req, res) => {
  try {
    const imageRes = await axios.get(req.params.image, {
      responseType: 'arraybuffer',
    });

    res.json({ image: await convertImage(imageRes.data) });
  } catch (error) {
    res.status(500).json({ error: 'image convert failed' });
  }
};

module.exports = imageRouter;
