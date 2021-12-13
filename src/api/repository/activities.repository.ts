import { DatabaseRepository } from "../../lib/database.repository";

export class ActivitiesRepository extends DatabaseRepository {
  constructor() {
    super("Activities");
  }
}