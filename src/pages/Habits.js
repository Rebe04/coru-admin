import React from "react";
import SessionMaker from "../components/sessionMaker";
import ContentWrapper from "../layout/ContentWrapper";

export default function Habits() {
  return (
    <ContentWrapper>
      <div style={{ flexDirection: "row" }}>
        <h1>Habits</h1>
        <SessionMaker />
      </div>
    </ContentWrapper>
  );
}
