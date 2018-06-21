
import { AllowTypes, JsonProperty, PropertyType, Required } from "@tsed/common";
import { Description, Example, Title } from "@tsed/swagger";

export class QuestModel {

    @Title("Quest Id")
    @Description("Unique identifier for this quest")
    @PropertyType(String)
    @Example("1")
    @Required()
    questId: string;

    @Title("User Id")
    @Description("Unique identifier for this user")
    @PropertyType(String)
    @Example("1")
    @Required()
    userId: string;

    @Title("Start Date")
    @Description("Unix timestamp for challenge start")
    @PropertyType(String)
    @Example("1234567")
    @Required()
    startDate: string;

    @Title("End Date")
    @Description("Unix timestamp for challenge end")
    @PropertyType(String)
    @Example("7654321")
    @Required()
    endDate: string;

    @Title("Completed")
    @Description("Has the challenge been completed")
    @PropertyType(Boolean)
    @Example("7654321")
    @Required()
    completed: boolean;
}