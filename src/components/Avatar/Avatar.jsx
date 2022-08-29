import React from "react";

import { AvatarImg } from './style';

export function Avatar(props){
  return(
    <AvatarImg src={props.src}/>
  );
}