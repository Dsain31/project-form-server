import { Response } from "express";
import { CategoriesRepository } from "../repository/categories.repository";

export class CategoryService {
  public static async getCategoryList(organizationId: string, _categoryRepo: CategoriesRepository, res: Response) {
    try {
      if (organizationId) {
        const result = await _categoryRepo.collection.find({ organizationId: { $in: [Number(organizationId)] } }).toArray();
        return res.json({
          message: "Successfully Get",
          data: result || [],
          error: false
        })
      }
      throw new Error().message = "Organization id is required";

    } catch (error) {
      return res.json({
        message: error, error: true
      })
    }
  }
}