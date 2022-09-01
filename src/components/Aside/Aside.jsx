import React from "react";
import { MagnifyingGlass } from 'phosphor-react'
import { 
  ContainerAside,
  ContainerSearch,
  ContentInput,
} from "./style";
export function Aside() {
  return (
    <ContainerAside>
      <ContainerSearch>
        <MagnifyingGlass />
        <ContentInput type="text" placeholder="Search Twitter"></ContentInput>
      </ContainerSearch>
      <ContainerTopTopics>
        <h1>What´s happening</h1>
      </ContainerTopTopics>
    </ContainerAside>
    

  );
}