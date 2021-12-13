import express from "express";
import cors from "cors";
import { MulterUploader } from "./multer.uploader";
export class AppExpress {
  private readonly _express: express.Express;
  constructor(app: express.Express) {
    this._express = app;
    this._express.use(express.json())
    this._express.use(express.urlencoded({ extended: true }));
    this._express.use(cors({
      origin: "*",
      methods: "GET, PUT, POST",
      optionsSuccessStatus: 204
    }))
    this._express.use(MulterUploader.any())
    this._express.use(express.static(__dirname + "/../../public"));
  }

  get express() {
    return this._express;
  }
}