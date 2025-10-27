import Link from "next/link";
import loadFontList from "./readJSON";
import PosterGrid from "./components/postergrid";

export default function Home() {
  const images= [
    "/images/testC.png",
    "/images/testB.png",
    "/images/testA.png",
  ]
  const fonts =[
    "cmunti.ttf",
    "Comic sans",
    "Arial",
  ]
  return (
    <>
      <div className="pageblock" spellCheck="false">
        <h1 className="title">Bergen Font</h1>
        <PosterGrid images={images} fonts={fonts} columns={3}/>
        {/* <h3>Nylige funn:</h3>
        <div className="homeList">
          {loadFontList("/app/data/homeFonts.json")}
        </div> */}
      </div>
    </>
  );
}
