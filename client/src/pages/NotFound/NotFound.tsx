import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Page } from "../../components";
import { ServiceAPI } from "../../infrastructure";
import doggoGif from "./doggo.gif";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <Page>
      <div className="not-found-page">
         <h1>404: Not Found</h1>
         <img src={ doggoGif } />
      </div>
    </Page>
  );
}

export default NotFound;
