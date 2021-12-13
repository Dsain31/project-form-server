import { Request, Response } from "express"
import { ActivitiesRepository } from "../repository/activities.repository"
import { ActivityService } from "../service/activity.service";
export class ActivityController {
  public static async getActivityList(req: Request, res: Response) {
    const _activityRepo = new ActivitiesRepository();
    const categoryId = <string>req.query.categoryId;
    return await ActivityService.getActivityList(categoryId, _activityRepo, res);
  }
}