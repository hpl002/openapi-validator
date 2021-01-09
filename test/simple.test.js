require("chai").should();
const path = require("path");
const $RefParser = require("@apidevtools/json-schema-ref-parser");
const validator = require("../src/index");

describe("simple tests", async () => {
  it("should use fallback if nothing else specified", async () => {
    const petstore = path.join(__dirname, "/data/petstore3.json");
    const strict = path.join(__dirname, "/data/strict-rules/.validaterc");
    const chill = path.join(__dirname, "/data/chill-rules/.validaterc");
    const API = await $RefParser.dereference(petstore);

    const results = await validator(API, chill);
    console.log(results);
    results.errors.length.should.equal(0);
    results.warnings.length.should.above(0);
  });
  it("should use fallback if nothing else specified", async () => {
    const petstore = path.join(__dirname, "/data/petstore3.json");
    const strict = path.join(__dirname, "/data/strict-rules/.validaterc");
    const chill = path.join(__dirname, "/data/chill-rules/.validaterc");
    const API = await $RefParser.dereference(petstore);

    const results = await validator(API, strict);
    console.log(results);
    results.errors.length.should.equal(104);
    results.warnings.length.should.above(0);
  });
  it("should throw error if no .validaterc file specified", async () => {
    const petstore = path.join(__dirname, "/data/petstore3.json");
    const strict = path.join(__dirname, "/data/strict-rules/.validaterc");
    const chill = path.join(__dirname, "/data/chill-rules/.validaterc");
    const API = await $RefParser.dereference(petstore);
    try {
      await validator(API);
    } catch (error) {
      error.message.should.equal("could not find .validaterc file");
    }
  });   
});
