import { DatabaseRepository } from "../../lib/database.repository";

export class OrganizationRepository extends DatabaseRepository {
  constructor() {
    super("Organizations");
  }
}