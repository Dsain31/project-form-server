import mkdirp from "mkdirp";
import multer from "multer";
import path from 'path';
let uploaderPath: string
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    uploaderPath = path.join(__dirname + '../../../public/upload');
    mkdirp(uploaderPath).then(() => {
      return cb(null, uploaderPath)
    }).catch((err) => {
      return cb(err, '');
    })
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9);
    return cb(null, uniqueSuffix + file.originalname)
  }
})

export const MulterUploader = multer({ storage });