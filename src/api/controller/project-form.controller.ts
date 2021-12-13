import { Request, Response } from "express";
import { ProjectCosts } from "../model/project-costs";
import { ProjectDetails } from "../model/project-details";
import { ProjectGallery } from "../model/project-gallery";
import { ProjectCostsRepository } from "../repository/project-costs.repository";
import { ProjectDetailsRepository } from "../repository/project-details.repository";
import { ProjectGalleryRepository } from "../repository/project-gallery.repository";
import { ProjectFormService } from "../service/project-form.service";

export class ProjectFormController {
  public static async createProjectForm(req: Request, res: Response) {
    const projDetails = new ProjectDetails(req.body.projectDetails);
    const projGallery = new ProjectGallery(req.body.projectGallery);
    const projCosts = new ProjectCosts(req.body.projectCosts);
    const projectDetailsRepo = new ProjectDetailsRepository();
    const projectGalleryRepo = new ProjectGalleryRepository();
    const projectCostsRepo = new ProjectCostsRepository();
    return await ProjectFormService.creatProjectForm(projDetails, projGallery, projCosts,
      projectDetailsRepo, projectGalleryRepo, projectCostsRepo, res)
  }

  public static async getProjectForm(req: Request, res: Response) {
    const projectDetailsRepo = new ProjectDetailsRepository();
    const projectGalleryRepo = new ProjectGalleryRepository();
    const projectCostsRepo = new ProjectCostsRepository();
    try {
      const result = await Promise.all([
        await projectDetailsRepo.collection.find({}).toArray(),
        await projectGalleryRepo.collection.find({}).toArray(),
        await projectCostsRepo.collection.find({}).toArray()
      ])
      const data = {
        projectDetails: result[0],
        projectGallery: result[1],
        projectCosts: result[2]
      }
      return res.json({
        message: "Successfully 200",
        data: data || [],
        error: false
      })
    } catch (error) {
      return res.json({
        message: error, error: true
      })
    }
  }
}