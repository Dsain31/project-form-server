import { ProjectCosts } from "../model/project-costs";
import { ProjectDetails } from "../model/project-details";
import { ProjectGallery } from "../model/project-gallery";
import { ProjectCostsRepository } from "../repository/project-costs.repository";
import { ProjectDetailsRepository } from "../repository/project-details.repository";
import { ProjectGalleryRepository } from "../repository/project-gallery.repository";
import { Response } from "express";

export class ProjectFormService {
  public static async creatProjectForm(projDetails: ProjectDetails, projGallery: ProjectGallery, projCosts: ProjectCosts,
    projectDetailsRepo: ProjectDetailsRepository, projectGalleryRepo: ProjectGalleryRepository, projectCostsRepo: ProjectCostsRepository, res: Response) {
    try {
      const result = await Promise.all([
        await projectDetailsRepo.collection.insertOne(projDetails),
        await projectGalleryRepo.collection.insertOne(projGallery),
        await projectCostsRepo.collection.insertOne(projCosts)
      ])
      return res.json({
        message: "Successfully Added!",
        data: result || [],
        error: false
      })
    } catch (err) {
      return res.json({
        message: err, error: true
      })
    }
  }
}