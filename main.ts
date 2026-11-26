import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Forecast for a City That Isn't — make.fun
// Writes a single-line weather forecast for the invented city of
// Mizzleford to /output/entry.txt (no trailing newline).

const forecast: string =
  "Today in Mizzleford: rain falls upward, high 14°C, puddles overhead. Umbrellas to be worn on the feet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", forecast, "utf8");
console.log(forecast);
