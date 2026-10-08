// Part 2: Tool
// The model requests a capability. The application owns the implementation.

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname);
const safe = (p) => {
  const full = path.resolve(ROOT, p);
  const relative = path.relative(ROOT, full);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error("Path outside project");
  }
  return full;
};

const definitions = [
  {
    name: "read_file",
    description: "Read a file from the project and return its contents.",
    input_schema: {
      type: "object",
      properties: { path: { type: "string", description: "File path, e.g. checkout.js" } },
      required: ["path"],
    },
  },
  {
    name: "edit_file",
    description: "Replace exact text in a project file.",
    input_schema: {
      type: "object",
      properties: {
        path: { type: "string" },
        old_text: { type: "string" },
        new_text: { type: "string" },
      },
      required: ["path", "old_text", "new_text"],
    },
  },
  {
    name: "run_tests",
    description: "Run the project's tests and return the output.",
    input_schema: { type: "object", properties: {} },
  },
];

const run = {
  read_file: ({ path: p }) => fs.readFileSync(safe(p), "utf8"),
  edit_file: ({ path: p, old_text, new_text }) => {
    const f = safe(p);
    const src = fs.readFileSync(f, "utf8");
    if (!src.includes(old_text)) return "old_text not found";
    fs.writeFileSync(f, src.replace(old_text, new_text));
    return "edited";
  },
  run_tests: () => {
    delete require.cache[require.resolve("./checkout.js")];
    try {
      const { checkout } = require("./checkout.js");
      return `PASS: checkout returned ${checkout([{ price: 100 }])}`;
    } catch (e) {
      return `FAIL: ${e.message}`;
    }
  },
};

module.exports = { definitions, run };
