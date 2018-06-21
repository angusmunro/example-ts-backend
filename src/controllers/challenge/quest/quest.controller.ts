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

import { Summary, Returns } from "@tsed/swagger";
import { QuestModel } from "../../../models/quest.model";


@Controller("/questId")
@MergeParams(true)
export class QuestController {

    @Returns(404, { description: "Not found" })
    @Returns(200, { description: "Success", type: QuestModel })
    @Returns(500, { description: "Error: Internal Server Error" })
    @Summary("Return details on a single quest to a challenge")
    @Get("")
    async get(
        @Required() @PathParams("questId") questId: string
    ): Promise<QuestModel> {
        if (questId === "2") {
            return {
                questId: "2",
                userId: "1",
                startDate: "1234567",
                endDate: "7654321",
                completed: true,
            };
        }
        else if (questId === "3") {
            return {
                questId: "3",
                userId: "1",
                startDate: "1234567",
                endDate: "7654321",
                completed: false,
            };
        }

        return {
            questId: "1",
            userId: "1",
            startDate: "1234567",
            endDate: "7654321",
            completed: true,
        };
    }

    @Returns(404, { description: "Not found" })
    @Returns(200, { description: "Success", type: QuestModel })
    @Returns(500, { description: "Error: Internal Server Error" })
    @Summary("Update a single quest to a challenge")
    @Post("")
    async update(
        @PathParams("questId") @Required() questId: string,
        @BodyParams("quest") @Required() quest: QuestModel,
    ): Promise<QuestModel> {
        return {
            questId: questId,
            userId: quest.userId,
            startDate: quest.startDate,
            endDate: quest.endDate,
            completed: quest.completed,
        };
    }

    @Returns(404, { description: "Not found" })
    @Returns(200, { description: "Success", type: QuestModel })
    @Returns(500, { description: "Error: Internal Server Error" })
    @Summary("Delete a challenge quest")
    @Delete("")
    @Authenticated()
    async remove(
        @PathParams("questId") @Required() questId: string,
    ): Promise<void> {
        return;
    }
}