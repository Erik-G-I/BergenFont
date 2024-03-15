import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="blocktext" spellCheck="false">
        <h1 className="title">Bergen Font</h1>
        <h3>Månedens funn:</h3>
        <ul contentEditable="true">
          <li style={{ fontFamily: "Checkbook" }}>Checkbook</li>
          <li style={{ fontFamily: "Great Warrior" }}>Great Warrior</li>
          <li style={{ fontFamily: "Didiot" }}>Didot</li>
          <li style={{ fontFamily: "Petrov Sans" }}>Petrov Sans</li>
          <li style={{ fontFamily: "Futura" }}>Futura</li>
          <li style={{ fontFamily: "Cloister Black" }}>Cloister Black</li>
          <li style={{ fontFamily: "Carizo" }}>Carizo</li>
          <li style={{ fontFamily: "Whiskey State" }}>Whiskey State</li>
        </ul>
      </div>
    </>
  );
}
