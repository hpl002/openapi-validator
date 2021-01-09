# readme

Simple wrapper for [openapi-validator](https://github.com/IBM/openapi-validator) that offers two additional options for specifying .validaterc directly.

Validate(API, pathToFile)
- API -> parsed OAP object (Required)
- pathToFile -> path to .validaterc file (Required)

 
Description from [openapi-validator](https://github.com/IBM/openapi-validator)  
*It is recommended to place these files in the root directory of your project. The code will recursively **search up** the filesystem for these files from wherever the validator is being run. **Wherever in the file system the validator is being run, the nearest versions of these files will be used.***

The recursive search will search from invocation point (process.cwd) back to project root.
The recursive search will not visit neighboring branches. 

This makes it a bit tricky to do dynamic loading of .validaterc file without doing some serious gymnastics in your project. This module offers an abstraction so that your project remains clean.
