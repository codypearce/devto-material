import React from "react";
import { View } from "react-native";
import NewListings from "../NewListings/NewListings";
import ThreadCard from "../ThreadCard/ThreadCard";
import {
  helpList,
  amaList,
  challengeList,
  discussList,
  explainlikeimfiveList,
  healthyDebateList,
  metaList,
  watercoolerList
} from "./ThirdColumnData";

export default function ThirdColumn() {
  return (
    <View style={{ marginLeft: 24 }}>
      <NewListings />
      <ThreadCard
        list={helpList}
        title={"#help"}
        buttonText={"Ask for Help"}
        bottomText={"Let's figure this out together."}
      />
      <ThreadCard
        list={amaList}
        title={"#ama"}
        buttonText={'Start an "AMA"'}
        bottomText={"Everybody has a story to tell."}
      />
      <ThreadCard
        list={challengeList}
        title={"#challenge"}
        buttonText={"Create A Challenge"}
        bottomText={"Flex your skills, stay sharp."}
      />
      <ThreadCard
        list={discussList}
        title={"#discuss"}
        buttonText={"Start a Discussion"}
        bottomText={"What does the community think?"}
      />
      <ThreadCard
        list={explainlikeimfiveList}
        title={"#explainlikeimfive"}
        buttonText={"Ask for an Explanation"}
        bottomText={"Need simplicity in your life?"}
      />
      <ThreadCard
        list={healthyDebateList}
        title={"#healthydebate"}
        buttonText={"Start A Debate"}
        bottomText={"We won't agree on everything."}
      />
      <ThreadCard
        list={metaList}
        title={"#meta"}
        buttonText={"Start A Meta Discussion"}
        bottomText={"About DEV itself."}
      />
      <ThreadCard
        list={watercoolerList}
        title={"#watercooler"}
        buttonText={"Go Off-topci"}
        bottomText={"Light and off-topic chitchat."}
      />
    </View>
  );
}
