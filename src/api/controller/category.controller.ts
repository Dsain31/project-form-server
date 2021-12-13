import { Request, Response } from "express"
import { CategoriesRepository } from "../repository/categories.repository"
import { CategoryService } from "../service/category.service";
export class CategoryController {
  public static async getCategoryList(req: Request, res: Response) {
    const _categoryRepo = new CategoriesRepository();
    const organizationId = <string>req.query.organizationId;
    return await CategoryService.getCategoryList(organizationId, _categoryRepo, res);
  }
}