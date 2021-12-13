import { Collection, Db } from "mongodb";
import { _mongdb } from "./mongodb.connection";

export class DatabaseRepository {
  private readonly db: Db;
  readonly collection: Collection;
  constructor(collectionName: string) {
    this.db = _mongdb;
    this.collection = this.db.collection(collectionName);
  }
}