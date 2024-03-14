import React from "react";
import { useContext } from "react";
import { FeatureFlagsContext } from "./Context";
import LightDarkMode from "../../Light Dark Mode/LightDarkMode";
import TicTacToe from "../../Tic-Tac-Toe/TicTacToe";
import RandomColor from "../../Radom Color Generator/RandomColor";
import Accordian from "../../Accordian/Accordian";
import TreeView from "../../tree-view/TreeView";
import QrCode from "../../QrCodeGenerator/QrCode";
import menus from "../../tree-view/data";

export default function FeatureFlag() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);
  console.log(enabledFlags);
  const componentToRender = [
    {
      key: "showLightDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "QrCodeGenerator",
      component: <QrCode />,
    },
  ];
  function checkEnabled(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }
  if (loading) {
    return <h2>Loading data Please wait..</h2>;
  }
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentToRender.map((componentItem) => {
        return checkEnabled(componentItem.key) ? componentItem.component : null;
      })}
    </div>
  );
}
