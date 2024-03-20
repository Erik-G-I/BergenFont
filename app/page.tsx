import Link from "next/link";
import loadFontList from "./readJSON";
/* Need to update to read json file */
/*
Function that takes a list of font names 
and returns editable <p> elements.
*/
export function editableFontList(list: Array<string>) {
  const fontList = [];
  for (let index = 0; index < list.length; index++) {
    const font = list[index];
    fontList.push(
      <p className="fonts" contentEditable="true" style={{ fontFamily: font }}>
        {font}
      </p>
    );
  }
  return fontList;
}

export default function Home() {
  return (
    <>
      <div className="pageblock" spellCheck="false">
        <h1 className="title">Bergen Font</h1>
        <h3>Nylige funn:</h3>
        <div className="homeList">
          {loadFontList("/app/data/homeFonts.json")}
          {/* {editableFontList(["Checkbook", "Menlo", "Great Warrior", "Didot"])} */}
        </div>
      </div>
    </>
  );
}
