import React from "react";
import { HeartStraight, Chat, ArrowsDownUp, Export, DotsThree } from 'phosphor-react';
import { Avatar } from "../Avatar/Avatar";
import { 
  ContainerTweet, 
  ContainerAvatar,
  ContainerTitle,
  ContentTweetPost,
  ContainerContent,
  ContainerFooter,
  ContainerButton,
  ContenteMore,
  ContainerLiked
 } from './style'


export function Tweet(props){
  return (
    <>
      <ContainerLiked><strong><HeartStraight size={15} color="var(--grey-400)" weight="bold" /><span>Figma Liked</span></strong></ContainerLiked>
      <ContainerTweet>
        <ContainerAvatar>
          <Avatar src="https://github.com./yagoafonso.png" />
        </ContainerAvatar>
        <ContainerContent>
          <ContainerTitle>
              <div>
                <strong>Yago Afonso</strong>
                <span>@yagoafonso</span>
                <time title="29 de agosto às 13:31" dateTime="2022-08-22 10:52"> 1 min </time>
              </div>
              <ContenteMore title="More">
                <DotsThree  size={20}/>
              </ContenteMore>
          </ContainerTitle>
          <ContentTweetPost>
            <p>The DesignLab is doing major work on Community-Driven Design, with several different variants. If you are working in this area, submit a paper to the DIS conference here in San Diego (see DesignLab posting below)....</p>
            <a href="">https://facebook.com/don.norman.18/...</a>
          </ContentTweetPost>
          <ContainerFooter>
            <ContainerButton className="reply" >
                <Chat size={18}  weight="bold" />  
                <span>10</span>
            </ContainerButton>
            <ContainerButton className="retweet"> 
              <ArrowsDownUp size={18} weight="bold" />
            </ContainerButton>
            <ContainerButton className="like">
              <HeartStraight size={18} weight="bold" />
            </ContainerButton>
            <ContainerButton className="share"  >
              <Export size={18} weight="bold" />
            </ContainerButton>
        </ContainerFooter>
        </ContainerContent>
      </ContainerTweet>
    </>

    

  );
}