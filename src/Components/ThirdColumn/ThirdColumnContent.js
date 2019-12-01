import React, { Fragment } from "react";
import PropTypes from "prop-types";

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

export default function ThirdColumnContent({ isSheet }) {
  const cardWidth = isSheet ? "100%" : 280;
  return (
    <Fragment>
      <NewListings maxWidth={cardWidth} />
      <ThreadCard
        list={helpList}
        title={"#help"}
        buttonText={"Ask for Help"}
        bottomText={"Let's figure this out together."}
        maxWidth={cardWidth}
      />
      <ThreadCard
        list={amaList}
        title={"#ama"}
        buttonText={'Start an "AMA"'}
        bottomText={"Everybody has a story to tell."}
        maxWidth={cardWidth}
      />
      <ThreadCard
        list={challengeList}
        title={"#challenge"}
        buttonText={"Create A Challenge"}
        bottomText={"Flex your skills, stay sharp."}
        maxWidth={cardWidth}
      />
      <ThreadCard
        list={discussList}
        title={"#discuss"}
        buttonText={"Start a Discussion"}
        bottomText={"What does the community think?"}
        maxWidth={cardWidth}
      />
      <ThreadCard
        list={explainlikeimfiveList}
        title={"#explainlikeimfive"}
        buttonText={"Ask for an Explanation"}
        bottomText={"Need simplicity in your life?"}
        maxWidth={cardWidth}
      />
      <ThreadCard
        list={healthyDebateList}
        title={"#healthydebate"}
        buttonText={"Start A Debate"}
        bottomText={"We won't agree on everything."}
        maxWidth={cardWidth}
      />
      <ThreadCard
        list={metaList}
        title={"#meta"}
        buttonText={"Start A Meta Discussion"}
        bottomText={"About DEV itself."}
        maxWidth={cardWidth}
      />
      <ThreadCard
        list={watercoolerList}
        title={"#watercooler"}
        buttonText={"Go Off-topci"}
        bottomText={"Light and off-topic chitchat."}
        maxWidth={cardWidth}
      />
    </Fragment>
  );
}

ThirdColumnContent.propTypes = {
  isSheet: PropTypes.bool
};
