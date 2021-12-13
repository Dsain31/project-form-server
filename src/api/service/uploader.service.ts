import { Response } from "express";
import * as fs from "fs";
export class UploaderService {
  public static async uploadImages(files: { path: string; filename: string }[], res: Response) {
    try {
      if (files && files.length > 0) {
        for (const file of files) {
          file.path = '/upload/' + file.filename;
        }
        return res.json({
          message: "File uploaded", data: files, error: false
        })
      } else {
        throw new Error().message = "No file upload";
      }

    } catch (error) {
      return res.json({
        message: error, error: true
      })
    }
  }

  public static async deleteImage(imageName: string, res: Response) {
    fs.unlink('./public/upload/' + imageName, (err) => {
      if (err) {
        return res.json({
          message: err, error: true
        })
      }
      return res.json({
        message: "Image has been deleted", error: false
      })
    })
  }
}