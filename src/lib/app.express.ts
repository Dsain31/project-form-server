import express from "express";
import cors from "cors";
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
  }

  get express() {
    return this._express;
  }
}