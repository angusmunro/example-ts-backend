import {
    Authenticated,
    BodyParams,
    Controller,
    Delete,
    Get,
    MergeParams,
    PathParams,
    Post,
    Put,
    Required,
    Status
} from "@tsed/common";
import { NotFound } from "ts-httpexceptions";
import { Returns, Summary } from "@tsed/swagger";
import { QuestController } from "./quest.controller";
import { QuestModel } from "../../../models/quest.model";
import { IdModel } from "../../../models/id.model";

@Controller("/quests", QuestController)
@MergeParams()
export class QuestsController {

    @Returns(404, { description: "Not found" })
    @Returns(200, { description: "Success", type: QuestModel })
    @Returns(500, { description: "Error: Internal Server Error" })
    @Summary("Returns all quests for a given a challenge")
    @Get("/")
    async getQuests(
        @Required() @PathParams("challengeId") challengeId: string,
    ): Promise<Array<QuestModel>> {
        console.log("merge param was: ", challengeId);
        return [
            {
                questId: "1",
                userId: "1",
                startDate: "1234567",
                endDate: "7654321",
                completed: true,
            },
            {
                questId: "2",
                userId: "1",
                startDate: "1234567",
                endDate: "7654321",
                completed: true,
            },
            {
                questId: "3",
                userId: "1",
                startDate: "1234567",
                endDate: "7654321",
                completed: false,
            }
        ];
    }

    @Returns(404, { description: "Not found" })
    @Returns(200, { description: "Success" })
    @Returns(500, { description: "Error: Internal Server Error" })
    @Summary("Adds a new quest for a given a challenge")
    @Put("/")
    save(
        @PathParams("challengeId") challengeId: string,
        @BodyParams("quest") quest: QuestModel
    ): IdModel {
        return {
            id: "5"
        };
    }
}