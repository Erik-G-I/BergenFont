import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="blocktext">
        <h1 className="title">Bergen Font</h1>
        <h3>Månedens funn:</h3>
        <p style={{ fontFamily: "Checkbook" }}>Checkbook</p>
        <p style={{ fontFamily: "Great Warrior" }}>Great Warrior</p>
        <p style={{ fontFamily: "Didiot" }}>Didot</p>
        <p style={{ fontFamily: "Futura" }}>Futura</p>
        <p style={{ fontFamily: "Cloister Black" }}>Cloister Black</p>
        <p style={{ fontFamily: "Carizo" }}>Carizo</p>
        <p style={{ fontFamily: "Whiskey State" }}>Whiskey State</p>
      </div>
    </>
  );
}
