import React from "react";
import { Utterances } from "utterances-react-component";
import useThemeContext from "@theme/hooks/useThemeContext";

function updateUtterancesTheme(isDarkTheme) {
  
}

export default function useUtterances() {
  const { isDarkTheme } = useThemeContext();
  let iframe = document.querySelector(".utterances-frame");
  if (iframe) {
    const theme = isDarkTheme ? "github-dark" : "github-light";
    const message = {
      type: "set-theme",
      theme: theme,
    };
    iframe.contentWindow.postMessage(message, "https://utteranc.es");
  }
  return (
    <Utterances
      repo="xing-ou/GxBlog"
      theme={isDarkTheme ? "github-dark" : "github-light"}
      issueTerm="pathname"
    />
  );
}
