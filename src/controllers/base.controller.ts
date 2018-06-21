import { Controller, Get, RouteService } from "@tsed/common";
import { ChallengesController } from "./challenge/challenges.controller";

@Controller("/rest", ChallengesController)
export class BaseController {

    constructor(private routeService: RouteService) {

    }

    @Get("/")
    public getRoutes() {
        return this.routeService.getAll();
    }
}