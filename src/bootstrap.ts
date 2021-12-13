import { AppExpress } from "./lib/app.express";
import express, { Request, Response } from "express";

import http from "http";
import { MongodbConnection } from "./lib/mongodb.connection";
import { OrganizationController } from "./api/controller/organization.controller";
import { CategoryController } from "./api/controller/category.controller";
import { ActivityController } from "./api/controller/activity.controller";
class Bootstrap extends AppExpress {
  private readonly httpServer: http.Server;
  constructor(app: express.Express) {
    super(app);
    MongodbConnection();
    this.httpServer = new http.Server(app);
    this.httpServer.listen(3000);
    this.httpServer.on("error", (er: Error) => {
      console.error(`Server failed :: ${er}`)
    })
    this.httpServer.on("listening", () => {
      console.error(`Server started at 3000 port`);
    })
  }
}

const bootstrap = new Bootstrap(express());
// bootstrap.express.use('/', (req: Request, res: Response) => {
//   res.json({ message: "status ok" })
// })

bootstrap.express.get("/organization_list", OrganizationController.getOrganizationList)
bootstrap.express.get("/category_list", CategoryController.getCategoryList)
bootstrap.express.get("/activity_list", ActivityController.getActivityList)
export default bootstrap.express;