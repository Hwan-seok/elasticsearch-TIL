const path = require("path");
const fs = require("fs");

const originData = fs.readFileSync(path.resolve(__dirname, "./origin.json"));

const precessedData = JSON.parse(originData)
  .DATA.map((e) => ({ line_num: e.line_num, station_name: e.station_nm }))
  .reduce(
    (prev, curr) => prev + `{"index":{}}\n` + JSON.stringify(curr) + "\n",
    ""
  );

fs.writeFileSync(path.resolve(__dirname, "./processed.json"), precessedData);
