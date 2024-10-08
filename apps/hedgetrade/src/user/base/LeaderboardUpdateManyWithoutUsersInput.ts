/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LeaderboardWhereUniqueInput } from "../../leaderboard/base/LeaderboardWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LeaderboardUpdateManyWithoutUsersInput {
  @Field(() => [LeaderboardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LeaderboardWhereUniqueInput],
  })
  connect?: Array<LeaderboardWhereUniqueInput>;

  @Field(() => [LeaderboardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LeaderboardWhereUniqueInput],
  })
  disconnect?: Array<LeaderboardWhereUniqueInput>;

  @Field(() => [LeaderboardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LeaderboardWhereUniqueInput],
  })
  set?: Array<LeaderboardWhereUniqueInput>;
}

export { LeaderboardUpdateManyWithoutUsersInput as LeaderboardUpdateManyWithoutUsersInput };
