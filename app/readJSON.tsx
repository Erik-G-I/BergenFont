import { promises as fs } from "fs";
/*
Function that takes a json-file with font names and weight
and returns editable <p> elements.
*/
export default async function loadFontList(path: string) {
  const file = await fs.readFile(process.cwd() + path, "utf8");
  const data = await JSON.parse(file).fonts;

  const fontList = [];

  for (let index = 0; index < data.length; index++) {
    const font = data[index].name;
    const weight = data[index].weight;
    const author = data[index].author;
    const link = data[index].link;
    const license = data[index].license;
    fontList.push(
      <div>
        <p
          className="fonts"
          contentEditable="true"
          style={{ fontFamily: font, fontWeight: weight }}
        >
          {font + " " + weight}
        </p>
        <div className="fontMenu">
          <p className="author">av {author}</p>
          <a href={link}>
            <p className="fontLink">Last ned</p>
          </a>
          <p className="license">{license}</p>
        </div>
      </div>
    );
  }

  return fontList;
}
