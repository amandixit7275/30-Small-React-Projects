import "./app.css";
import Accordian from "./Components/Accordian/Accordian";
import Modal from "./Components/custom-modal-popup/Modal";
import ModalTest from "./Components/custom-modal-popup/ModalTest";
import Tabs from "./Components/custom-tabs/Tabs";
import TabTest from "./Components/custom-tabs/Tabtest";
import FeatureFlagGlobalState from "./Components/Feature Flag/Context/Context";
import FeatureFlag from "./Components/Feature Flag/Context/FeatureFlag";
import GithubProfileFinder from "./Components/Github-Profile-Finder/GithubProfileFinder";

import ImageSlider from "./Components/Image-Slider/ImageSlider";
import LightDarkMode from "./Components/Light Dark Mode/LightDarkMode";
import LoadMoreData from "./Components/Load More Data/LoadMoreData";
import QrCode from "./Components/QrCodeGenerator/QrCode";
import RandomColor from "./Components/Radom Color Generator/RandomColor";
import RandomColorGenerator from "./Components/Radom Color Generator/RandomColor";
import ScrollIndicator from "./Components/scroll-indicator/ScrollIndicator";
import StarRating from "./Components/Star-Raing/StarRating";
import TicTacToe from "./Components/Tic-Tac-Toe/TicTacToe";
import menus from "./Components/tree-view/data";
import TreeView from "./Components/tree-view/TreeView";

export function App() {
  const styleObj = { marginTop: "150px", textAlign: "center" };
  return (
    <>
      <div style={{ margin: "50px" }}>
        {/* <h2 style={styleObj}>Practice Project No 1 : Image Slider</h2>
        <ImageSlider url={"https://picsum.photos/v2/"} page={"1"} limit={10} />
        <h2 style={styleObj}>Practice Project No 2 : Load More Data</h2>
        <LoadMoreData />

        <h2 style={styleObj}>Practice Project No 3 : Random Color Generator</h2>
        <RandomColor />
        <h2 style={styleObj}>Practice Project No 4 : QR Code Generator</h2>
        <QrCode />
        <h2 style={styleObj}>Practice Project No 5 : Star Rating</h2>
        <StarRating noOfStars={10} />
        <h2 style={styleObj}>Practice Project No 6 : Light Dark Mode</h2>
        <LightDarkMode />

        <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
        <h2 style={styleObj}>Practice Project No 7 : Accordian</h2>
        <Accordian />
        <h2 style={styleObj}>Practice Project No 8 : Tree View </h2>
        <TreeView menus={menus} /> */}

        {/* <ModalTest /> */}
        {/* <GithubProfileFinder /> */}
        {/* <TicTacToe /> */}
        <FeatureFlagGlobalState>
          <FeatureFlag />
        </FeatureFlagGlobalState>

        {/* <h2>
          And during this time you were also witnessing the 9th Project i.e,
          Custom Scroll Indicator: see upside of the screen 🤩
        </h2>
        <h1>
          and yes Approx 30+ Mini React Practice projects are also about to come
          , STAY TUNED
        </h1> */}
      </div>
    </>
  );
}
