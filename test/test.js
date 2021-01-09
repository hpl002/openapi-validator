const path = require("path");
const $RefParser = require("@apidevtools/json-schema-ref-parser");
const validator = require("../src/index");

/* should file from current dir and place it on root then validate */

(async () => {
  const absolutePath = path.join(__dirname, "/data/petstore3.json");
  const API = await $RefParser.dereference(absolutePath);
  const strict = path.join(__dirname, "/data/strict-rules/.validaterc");
  const chill = path.join(__dirname, "/data/chill-rules/.validaterc");

  /* first config */
  await validator(API, chill, strict);
})();

// force node to execute from a specific context
// files are searched from cwd and up to root directly
// sibling branches are not searched so the files have to be on the branch and in the correct sequence