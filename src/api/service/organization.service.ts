import { Response } from "express";
import { OrganizationRepository } from "../repository/organization.repository";

export class OrganizationService {
  public static async getCategoryList(res: Response, _organizationRepo: OrganizationRepository) {
    try {
      const result = await _organizationRepo.collection.find({}).toArray();
      return res.json({
        message: "Successfully Get",
        data: result || [],
        error: false
      })

    } catch (error) {
      return res.json({
        message: error, error: true
      })
    }
  }
}