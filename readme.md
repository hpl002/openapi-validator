# readme

https://github.com/IBM/openapi-validator


 
*It is recommended to place these files in the root directory of your project. The code will recursively search up the filesystem for these files from wherever the validator is being run. **Wherever in the file system the validator is being run, the nearest versions of these files will be used.***


```shell
.
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
```shell
node simple.js
```

#### Output
``` json
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