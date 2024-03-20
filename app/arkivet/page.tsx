import loadFontList from "../readJSON";

export default function Arkivet() {
  return (
    <>
      <div className="pageblock">
        <h1 className="title">Arkivet</h1>
        {loadFontList("/app/data/archiveFonts.json")}
      </div>
    </>
  );
}
