import multer from 'multer';

const upload = multer({strorage: multer.diskStorage({})})

export default upload;
