import {
    Authenticated,
    BodyParams,
    Controller,
    Delete,
    Get,
    PathParams,
    Post,
    Put,
    Required,
    Status
} from "@tsed/common";
import { NotFound } from "ts-httpexceptions";
import { ChallengeController } from "./challenge.controller";
import { Summary, Returns } from "@tsed/swagger";
import { IdModel } from "../../models/id.model";
import { ChallengeModel } from "../../models/challenge.model";

/**
 * Add @Controller annotation to declare your class as Router controller.
 * The first param is the global path for your controller.
 * The others params is the controller dependencies.
 *
 * In this case, QuestsController is a dependency of ChallengesController.
 * All routes of QuestsController will be mounted on the `/Challenges` path.
 */
@Controller("/challenges", ChallengeController)
export class ChallengesController {

    constructor() {

    }

    @Returns(404, { description: "Not found" })
    @Returns(200, { description: "Success", type: IdModel })
    @Returns(500, { description: "Error: Internal Server Error" })
    @Summary("Adds a new challenge to the system")
    @Put("/")
    createChallenge(
        @Required() @BodyParams() challenge: ChallengeModel
    ): IdModel {
        return {
            id: "5"
        };
    }

    @Returns(404, { description: "Not found" })
    @Returns(200, { description: "Success", type: ChallengeModel })
    @Returns(500, { description: "Error: Internal Server Error" })
    @Summary("Retrieves list of all challenges")
    @Get("/")
    @Authenticated()
    async getAllChallenges(): Promise<Array<ChallengeModel>> {
        return [{
            id: "1",
            name: "walking",
            type: "exercise",
        },
        {
            id: "2",
            name: "health questionnaire",
            type: "quiz"
        }];
    }
}