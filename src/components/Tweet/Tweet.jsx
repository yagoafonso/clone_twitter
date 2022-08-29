import React from "react";
import { HeartStraight } from 'phosphor-react';

export function Tweet(){
  return (
    <strong><HeartStraight size={15} color="var(--grey-400)" weight="bold" /><span>Figma Liked</span> </strong>
  );
}