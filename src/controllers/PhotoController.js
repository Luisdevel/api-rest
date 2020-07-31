import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Photo from '../models/Photo';

const upload = multer(multerConfig).single('photo');

class PhotoController {
  store(request, response) {
    return upload(request, response, async (error) => {
      if (error) {
        return response.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = request.file;
        const { aluno_id } = request.body;
        const photo = await Photo.create({ originalname, filename, aluno_id });

        return response.json(photo);
      } catch (e) {
        return response.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new PhotoController();
