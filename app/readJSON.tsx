import { promises as fs } from "fs";

export default async function loadFontList(path: string) {
  const file = await fs.readFile(process.cwd() + path, "utf8");
  const data = await JSON.parse(file).fonts;

  const fontList = [];

  for (let index = 0; index < data.length; index++) {
    const font = data[index].name;
    const weight = data[index].weight;
    fontList.push(
      <p
        className="fonts"
        contentEditable="true"
        style={{ fontFamily: font, fontWeight: weight }}
      >
        {font + " " + weight}
      </p>
    );
  }

  return fontList;
}
