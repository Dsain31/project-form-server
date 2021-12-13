import { DatabaseRepository } from "../../lib/database.repository";

export class ProjectCostsRepository extends DatabaseRepository {
  constructor() {
    super("ProjectCosts");
  }
}