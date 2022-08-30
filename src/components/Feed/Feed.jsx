import React from "react";
import { Sparkle } from 'phosphor-react';
import { WriteTweet } from "../WriteTweet/WriteTweet";

import { ContainerFeed, ContainerTitle,} from './style';
import { Tweet } from "../Tweet/Tweet";


export function Feed() {
  return(
    <ContainerFeed>
        <ContainerTitle>
          <strong>Home</strong>
          <Sparkle  size={25} color='#1DA1F2'/>
        </ContainerTitle>
        <WriteTweet />
        <Tweet />
        <Tweet />
        <Tweet />
    </ContainerFeed>
  );
}