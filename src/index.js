const path = require("path");
const fs = require("fs");
const validator = require("ibm-openapi-validator");

const fallback = path.join(__dirname, "../.validaterc")
const current = path.join(__dirname, "./.validaterc")


const changeDir = () => {
  try {
    console.log("forcefully changing execution context")
    console.log("current process context", process.cwd())
    console.log("new process context", __dirname)
    process.chdir(__dirname);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }

}


const cleanup = () => {
  try {
    fs.unlinkSync(fallback)
    console.info("deleted fallback file")
  } catch (error) {
    console.error("nothing to delete")
  }
  try {
    fs.unlinkSync(current)
    console.info("deleted current file")
  } catch (error) {
    console.error("nothing to delete")
  }
}

/**
 * @param  {} API -> API object
 * @param  {} fallbackConfig -> path to the fallback config !!Should only trigger if currenConfig not specified
 * @param  {} currentConfig -> path to the current config !!Should always trigger before fallback
 */
module.exports = async function (API, fallbackConfig, currentConfig) {
  try {
    changeDir()
    cleanup()
    if (!fs.existsSync(fallbackConfig)) {
      throw new Error("could not find file at", fallbackConfig)
    }
    console.info("copying fallbackConfig")
    fs.copyFileSync(fallbackConfig, fallback)
    if (currentConfig) {
      if (!fs.existsSync(currentConfig)) {
        throw new Error("could not find file at", currentConfig)
      }
      console.info("copying currentConfig")
      fs.copyFileSync(currentConfig, current)
    }
    const validationResults = await validator(API);
    console.log(validationResults.errors.length);
    cleanup()
    return validationResults
  } catch (error) {
    cleanup()
    console.error(error);
    throw new Error(error)
  }
}