import React from "react";
import { MagnifyingGlass } from 'phosphor-react'
import { CardTopTopics } from "../CardTopTopics/CardTopTopics";
import { 
  ContainerAside,
  ContainerSearch,
  ContentInput,
  ContainerTopTopics,
  ContentHead
} from "./style";


export function Aside() {
  return (
    <ContainerAside>
      <ContainerSearch>
        <MagnifyingGlass />
        <ContentInput type="text" placeholder="Search Twitter"></ContentInput>
      </ContainerSearch>
      <ContainerTopTopics>
        <ContentHead>
          <strong>What´s happening</strong>
        </ContentHead>
        
        <CardTopTopics />
      </ContainerTopTopics>
    </ContainerAside>
    

  );
}