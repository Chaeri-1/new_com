import React from "react";
import './/header.css'

export default function HeadCover({name}) {
  return (
    <div class="header">
      <h2>Hello!</h2>
      <h1>This is {name}'s Portfolio</h1>
    </div>
  );
}