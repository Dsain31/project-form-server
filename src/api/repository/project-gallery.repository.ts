import { DatabaseRepository } from "../../lib/database.repository";

export class ProjectGalleryRepository extends DatabaseRepository {
  constructor() {
    super("ProjectGallery");
  }
}