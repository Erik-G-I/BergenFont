import Link from "next/link";

export default function SemesterList() {
  return (
    <>
      <div className="pageblock">
        <h1 className="title">Tidligere Semestre</h1>
        <Link href="/semesteretsfont/H22">
          <h3>H22</h3>
        </Link>
        <Link href="/semesteretsfont/V23">
          <h3>V23</h3>
        </Link>
        <Link href="/semesteretsfont/H23">
          <h3>H23</h3>
        </Link>
        <h3 style={{ fontStyle: "italic" }}>V24 Kommer snart!</h3>
      </div>
    </>
  );
}
