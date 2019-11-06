# Node, express and sequelize application example

A example of a application with node, express and sequelize, to show  model associations.
I got this code from   [djamware](https://www.djamware.com/post/5bb1f05280aca74669894417/node-express-sequelize-and-postgresql-association-example#many-to-many-associations)
I made some changes at router/index.js and app.js file.
## Getting Started

### Installing
Run the command bellow.
```
npm i
```

Set the config file with you database.

```
sequelize db:migrate
nodemon
```

## Inserting data
Open a new terminal tab run this code.
```
curl -i -X POST -H "Content-Type: application/json" -d '{ "company_name":"Djamware.com","company_address":"Setiabudhi km.9, Ledeng","company_city":"Bandung","branches": [{ "branch_name":"Local Branch", "branch_address":"Setiabudhi km.9, Ledeng", "branch_city":"Bandung" },{ "branch_name":"International Branch", "branch_address":"Salt Lake View", "branch_city":"Salt Lake City" }] }' localhost:3000/api/company/add_with_branches
```
