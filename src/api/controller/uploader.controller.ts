import { Request, Response } from "express";
import { UploaderService } from "../service/uploader.service";

export class UploaderController {
  public static async uploadImage(req: Request, res: Response) {
    const files = req.files as { path: string; filename: string }[];
    return await UploaderService.uploadImages(files, res);
  }

  public static async deleteImage(req: Request, res: Response) {
    const imageName = <string>req.body.imageName;
    return await UploaderService.deleteImage(imageName, res);
  }
}