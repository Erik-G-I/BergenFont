import Link from "next/link";
import loadFontList from "./readJSON";

var titleFont = "Coolvetica";

export default function Home() {
  return (
    <>
      <div className="pageblock" spellCheck="false">
        <h1
          className="title"
          style={{
            fontFamily: "Coolvetica",
            // fontFamily: (function RandomTitleFont() {
            //   var titleFonts = [
            //     "Coolvetica",
            //     "Computer Modern",
            //     "Aber Mono",
            //     "Great Warrior",
            //     "Retro Boldy",
            //     "Melno",
            //     "Rafaella",
            //     "Planet Kosmos",
            //     "Ringold-Clarendon",
            //     "Expressway",
            //     "Tuppence",
            //   ];
            //   var randomFont = Math.floor(Math.random() * titleFonts.length);
            //   return titleFonts[randomFont];
            // })(),
          }}
        >
          Bergen Font
        </h1>
        <h3>Nylige funn:</h3>
        <div className="homeList">
          {loadFontList("/app/data/homeFonts.json")}
        </div>
      </div>
    </>
  );
}
