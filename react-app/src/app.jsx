import "./app.css";
import Accordian from "./Components/Accordian/Accordian";
import ImageSlider from "./Components/Image-Slider/ImageSlider";
import LoadMoreData from "./Components/Load More Data/LoadMoreData";
import RandomColor from "./Components/Radom Color Generator/RandomColor";
import RandomColorGenerator from "./Components/Radom Color Generator/RandomColor";
import StarRating from "./Components/Star-Raing/StarRating";
import menus from "./Components/tree-view/data";
import TreeView from "./Components/tree-view/TreeView";

export function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={8} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/"} page={"1"} limit={10} /> */}
      {/* <LoadMoreData /> */}
      <TreeView menus={menus} />
    </>
  );
}
