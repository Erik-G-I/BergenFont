import Link from "next/link";
import loadFontList from "./readJSON";

export default function Home() {
  return (
    <>
      <div className="pageblock" spellCheck="false">
        <h1 className="title">Bergen Font</h1>
        <h3>Nylige funn:</h3>
        <div className="homeList">
          {loadFontList("/app/data/homeFonts.json")}
        </div>
      </div>
    </>
  );
}
