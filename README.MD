[![Build Status](https://dev.azure.com/jdiazEMS/EMSTrabajo1MEANbackend/_apis/build/status/EMSTrabajo1MEANbackend-rg%20-%20CI?branchName=master)](https://dev.azure.com/jdiazEMS/EMSTrabajo1MEANbackend/_build/latest?definitionId=1?branchName=master)

# API-NODE

This application will be used in the course "Software Evolution and Maintenance" of Software Engieering Degre of Technical University of Madrid (Universidad Politécnica de Madrid, ETSI Sistemas Informáticos).

## Description

This is the code of a basic API in NodeJS and Express with connection to a Azure CosmosDB.

## Getting Started

### Download

    > git clone https://github.com/jdiazfernandez/api-node

### Install dependencies

    > npm install

### Configurate Database

Create the file env.js in the root folder.

```javascript
    module.exports = {
      accountName: '', //Conexion name
      databaseName: '', //CosmosDB database name
      key: '', // Personal key
      port: 10255 // Port of Azure
    };

``` 

### Start 

    > npm start

### Test

    > npm test
    
 The test command generate a junit report with the test results. You can found it in the folder results.

### Build Docker Image

Run `docker build -t api-node .` for build the Docker Image.

### Run Docker Image 

Run `docker run -d -p 3000:3000 api-node`. Navigate to `http://localhost:3000` to see the app running.
