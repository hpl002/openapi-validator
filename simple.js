const path = require("path");
const $RefParser = require("@apidevtools/json-schema-ref-parser");
const validator = require("ibm-openapi-validator");
(async () => {
  const absolutePath = path.join(__dirname, "petstore3.json");
  const API = await $RefParser.dereference(absolutePath);
  console.log("OAP config parsed? ", !!API.openapi);
  const validationResults = await validator(API);
  console.log(validationResults);   
})();
