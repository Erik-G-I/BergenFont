import Link from "next/link";
import loadFontList from "./readJSON";

var titleFont = "Coolvetica";

export default function Home() {
  return (
    <>
      <div className="pageblock" spellCheck="false">
        <h1 className="title">bergen font</h1>
        <h3>Nylige funn:</h3>
        <div className="homeList">
          {loadFontList("/app/data/homeFonts.json")}
        </div>
      </div>
    </>
  );
}
