import { AllowTypes, JsonProperty, PropertyType, Required } from "@tsed/common";
import { Description, Example, Title } from "@tsed/swagger";

export class ChallengeModel {

    @Title("Challenge Id")
    @Description("Unique identifier for this challenge")
    @PropertyType(String)
    @Example("1")
    @Required()
    id: string;

    @Title("Challenge Name")
    @Description("Name of this challenge")
    @PropertyType(String)
    @Example("health questionnaire")
    @Required()
    name: string;

    @Title("Challenge Type")
    @Description("What type of challenge is this")
    @PropertyType(String)
    @Example("quiz")
    @Required()
    type: string;
}