import { DatabaseRepository } from "../../lib/database.repository";

export class CategoriesRepository extends DatabaseRepository {
  constructor() {
    super("Categories");
  }
}