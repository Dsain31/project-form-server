import { Response } from "express";
import { ActivitiesRepository } from "../repository/activities.repository";
import { CategoriesRepository } from "../repository/categories.repository";

export class ActivityService {
  public static async getActivityList(categoryId: string, _activityRepo: ActivitiesRepository, res: Response) {
    try {
      if (categoryId) {
        const result = await _activityRepo.collection.find({ categoryId: { $in: [Number(categoryId)] } }).toArray();
        return res.json({
          message: "Successfully Get",
          data: result || [],
          error: false
        })
      }
      throw new Error().message = "Category id is required";
    } catch (error) {
      return res.json({
        message: error, error: true
      })
    }
  }
}