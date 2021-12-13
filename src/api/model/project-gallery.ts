export class ProjectGallery {
  projectName: string;
  projectImages: string[];
  constructor(obj: ProjectGalleryType) {
    this.projectName = obj.projectName;
    this.projectImages = obj.projectImages;
  }
}

export type ProjectGalleryType = ProjectGallery;