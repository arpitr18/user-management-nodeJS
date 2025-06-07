import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// handles ES module syntax
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleare to log requests

const logMiddleare = (req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.method} - ${
    req.originalUrl
  }\n`;
  const logFilePath = path.join(__dirname, "../logs/requests.log");

  fs.appendFile(logFilePath, log, (err) => {
    if (err) {
      console.log("Error: ", err);
    }
  });

  next()
};

export default logMiddleare