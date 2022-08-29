import React from "react";
import { Avatar } from "../Avatar/Avatar";
import {  Image,
  Gif,
  CellSignalFull,
  Smiley,
  CalendarBlank,
  Circle,
  PlusCircle,
  GlobeHemisphereEast
} from "phosphor-react";

import {  
  ContainerTwitterPost,
  ContainerTextArea,
  ContainerAvatar,
  ContainerForm,
  TextCanReply,
  ContainerFooter,
  ButtonConfirmTwitter,
  ContainerButtonOptions
} from "./style";

export function WriteTweet(){
  return(
    <ContainerTwitterPost>
    <ContainerAvatar>
      <Avatar  src="https://github.com./yagoafonso.png"/>
    </ContainerAvatar>

    <ContainerForm action="">
      <ContainerTextArea  type="text" placeholder="what's happening" />
      <TextCanReply><GlobeHemisphereEast /> Everyone can reply</TextCanReply>
      <ContainerFooter>
        <div>
          <ContainerButtonOptions>
            <Image size={20} color="var(--blue-300)" />
          </ContainerButtonOptions>
          <ContainerButtonOptions>
            <Gif size={20} color="var(--blue-300)" />
          </ContainerButtonOptions>
          <ContainerButtonOptions>
            <CellSignalFull size={20} color="var(--blue-300)" />
          </ContainerButtonOptions>
          <ContainerButtonOptions>
            <Smiley size={20} color="var(--blue-300)" />
          </ContainerButtonOptions>
          <ContainerButtonOptions>
            <CalendarBlank size={20} color="var(--blue-300)" />
          </ContainerButtonOptions>
        </div>
        <div>
          <ContainerButtonOptions>
            <Circle size={30} color="var(--grey-300)" />
          </ContainerButtonOptions>
          <ContainerButtonOptions>
            <PlusCircle size={30} color="var(--blue-300)" />
          </ContainerButtonOptions>
          <ButtonConfirmTwitter type="submit">Tweet</ButtonConfirmTwitter>
        </div>
      </ContainerFooter>
    </ContainerForm>
  </ContainerTwitterPost>
  );
}