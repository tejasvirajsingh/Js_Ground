import fs from "fs";
import os from "os";

fs.writeFileSync("data.txt", "");

const data = os.type() + "\n" + os.arch() + "\n" + os.hostname();

fs.appendFileSync("data.txt", data);

const result = fs.readFileSync("data.txt", "utf-8");

console.log(result);

fs.mkdirSync("logs");

fs.writeFileSync("hello.txt", result);
fs.unlinkSync("data.txt");
