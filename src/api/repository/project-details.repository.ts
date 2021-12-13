import { DatabaseRepository } from "../../lib/database.repository";

export class ProjectDetailsRepository extends DatabaseRepository {
  constructor() {
    super("ProjectDetails");
  }
}