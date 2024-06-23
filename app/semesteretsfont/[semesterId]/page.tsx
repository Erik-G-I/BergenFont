export default function SemesteretsFont({
  params,
}: {
  params: { semesterId: string };
}) {
  var id = params.semesterId.toUpperCase();
  return (
    <>
      <div className="pageblock">
        <h3>{id}</h3>
        <h1 className={id}>{FontName(id)}</h1>
      </div>
    </>
  );
}

/* 
Function to display correct name of each font.
Not the most optimal way, im sure, but this only has
to be updated twice a year
*/
function FontName(params: string) {
  var id = params.toUpperCase();
  if (id == "H22") {
    return "Computer Modern";
  }
  if (id == "V23") {
    return "SPEEDWAY";
  }
  if (id == "H23") {
    return "Pop Magic";
  }
  if (id == "V24") {
    return "Rafaella";
  } else {
    return "Ugyldig semester :-(";
  }
}
