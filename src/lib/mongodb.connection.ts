import { Db, MongoClient } from "mongodb";

export let _mongdb: Db;

export async function MongodbConnection() {
  try {
    const connect = await MongoClient.connect("mongodb://localhost:27017/project");
    _mongdb = connect.db();
    console.log("Database connection successfully :)");
    return _mongdb;

  } catch (err) {
    console.error(err);
    process.exit();
  }
}