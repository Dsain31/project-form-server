import { Request, Response } from "express"
import { OrganizationRepository } from "../repository/organization.repository"
import { OrganizationService } from "../service/organization.service";
export class OrganizationController {
  public static async getOrganizationList(req: Request, res: Response) {
    const _organizationRepo = new OrganizationRepository();
    return await OrganizationService.getCategoryList(res, _organizationRepo);
  }
}