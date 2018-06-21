import { JsonProperty } from "@tsed/common";
import { Description, Example, Title } from "@tsed/swagger";

export class IdModel {
    @Title("id")
    @Description("Unique identifier.")
    @JsonProperty()
    @Example("AWG35bxLWmu5blFWzF5f")
    id: string;
}