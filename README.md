# Project-form-server

## Description
This is backend server api for Project management.
Used own kid of logic for routing and make own library in NodeJS.

## Requirements
Node version 12.20 at least

NodeJS platform must be installed in system where code will run.

## how to run 
Install packages first globally.
      `npm i -g typescript`
      `npm i -g ts-node`
go to the root directory and type command
      `npm install`

Install MongoDB community server https://www.mongodb.com/try/download/community

Install MongoDB database tool https://www.mongodb.com/try/download/database-tools

Run Mongodb server on localhost port number 27017.

After install node package, run server by command
        `npm run start`
Run local server at http://localhost:3000 (port number can be changed);

To import CSV file from database directory into mongodb database used below commands separately for each files
    `mongoimport -d <databaseName> -c <collectionName> --type CSV --file <filename.csv> --headerline`

    Example
     `mongoimport -d demo -c Activities --type CSV --file activities.csv --headerline`


## Why use these packages?
cors
   this package is provide more feature over http header request.
   this help for middleware for browser to run api on local browser without set HTTP Headers.

mkdirp
   this is similar to fs.mkdir  but fs.mkdir have still some bugs which are not fixed yet.
   mkdirp provide better utility over fs.mkdir

multer
   this is similar to the fs.writefile but it gives promise feature and easy to handle multple files
