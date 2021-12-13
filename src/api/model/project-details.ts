export class ProjectDetails {
  organization: string;
  category: string;
  activity: string;
  title: string;
  minAge: number;
  maxAge: number;
  description: string;

  constructor(obj: ProjectDetailsType) {
    this.organization = obj.organization
    this.category = obj.category
    this.activity = obj.activity
    this.title = obj.title
    this.minAge = obj.minAge
    this.maxAge = obj.maxAge
    this.description = obj.description

  }
}
export type ProjectDetailsType = ProjectDetails;