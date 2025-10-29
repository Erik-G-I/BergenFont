import Link from "next/link";
import loadFontList from "./readJSON";
import PosterGrid from "./components/postergrid";

export default function Home() {
  const images:string[] = [
    "/images/testC.png",
    "/images/testB.png",
    "/images/testA.png",
  ]
  const fonts:string[] = [
    "cmunrm.ttf",
    "cmunrm.ttf",
    "cmunrm.ttf",
  ]
  const socials:string[] =[
    "instagram.com/bergenfont",
    "instagram.com/bergenfont",
    "instagram.com/bergenfont",
  ]
  return (
    <>
      <div className="pageblock" spellCheck="false">
        <h1 className="title">Bergen Font</h1>
        <PosterGrid images={images} fonts={fonts} socials={socials} columns={3}/>
        {/* <h3>Nylige funn:</h3>
        <div className="homeList">
          {loadFontList("/app/data/homeFonts.json")}
        </div> */}
      </div>
    </>
  );
}
