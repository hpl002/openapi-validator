# readme

https://github.com/IBM/openapi-validator


 
*It is recommended to place these files in the root directory of your project. The code will recursively **search up** the filesystem for these files from wherever the validator is being run. **Wherever in the file system the validator is being run, the nearest versions of these files will be used.***


The claim being that the validator will recursively search up the tree, but i have thus far only had success whenever the invocation point is the same dir as the .validaterrc. 

If in same dir then it finds it, if in some other directory further out then it does not..



```shell
. --> invocation at project root
├── my-directory
│   └── .validaterc --> not found
├── package.json
├── petstore3.json
├── readme.md
├── simple.js
└── yarn.lock
```

Provided that you are in the root of directory and run:

```shell
node simple.js
```
Then the recusive search should run up all branches until it finds the file.

#### Test
**File not found..**  
Assuming you are at project root --> see tree above
```shell
node simple.js
```

#### Output
```shell
❯ node simple.js
OAP config parsed?  true

[Warning] No .validaterc file found. The validator will run in default mode.
To configure the validator, create a .validaterc file.
{
  errors: [
    {
      path: 'paths./user.post.responses',
      message: 'Each `responses` object MUST have at least one response code.',
      rule: 'no_response_codes'
    },
    {
...
```