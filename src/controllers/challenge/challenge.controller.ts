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
    Status,
    MergeParams
} from "@tsed/common";
import { NotFound } from "ts-httpexceptions";
import { Summary, Returns } from "@tsed/swagger";
import { QuestsController } from "./quest/quests.controller";
import { ChallengeModel } from "../../models/challenge.model";

@Controller("/:challengeId", QuestsController)
@MergeParams(true)
export class ChallengeController {

    constructor() {

    }

    @Returns(404, { description: "Not found" })
    @Returns(200, { description: "Success", type: ChallengeModel })
    @Returns(500, { description: "Error: Internal Server Error" })
    @Summary("Retrieves data on a single challenge")
    @Get("")
    async get(
        @Required() @PathParams("challengeId") challengeId: string
    ): Promise<ChallengeModel> {
        if (challengeId === "2") {
            return {
                id: "2",
                name: "health questionnaire",
                type: "quiz"
            };
        }

        return {
            id: "1",
            name: "walking",
            type: "exercise",
        };
    }

    @Returns(404, { description: "Not found" })
    @Returns(200, { description: "Success", type: ChallengeModel })
    @Returns(500, { description: "Error: Internal Server Error" })
    @Summary("Updates a challenge")
    @Post("")
    async update(
        @PathParams("challengeId") @Required() id: string,
        @BodyParams("challenge") @Required() challenge: ChallengeModel,
    ): Promise<ChallengeModel> {
        return {
            id: id,
            name: challenge.name,
            type: challenge.type,
        };
    }

    @Returns(404, { description: "Not found" })
    @Returns(200, { description: "Success" })
    @Returns(500, { description: "Error: Internal Server Error" })
    @Summary("Removes a challenge")
    @Delete("")
    @Authenticated()
    async remove(
        @PathParams("challengeId") @Required() id: string,
    ): Promise<void> {
        return;
    }
}